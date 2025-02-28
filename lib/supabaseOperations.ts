"use server"
import { createClient } from "@/utils/supabase/server";
import type { UserTestHistoryInsert } from "@/types/supabase/user-test-history";
import type { TestType } from "@/types/supabase/test-types";
import type { User } from "@/types/supabase/users";

/**
 * Save test results to the user_test_history table
 */
export async function saveTestResults(testResults: UserTestHistoryInsert) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("user_test_history")
    .insert(testResults)
    .select();

  if (error) {
    console.error("Error saving test results:", error);
    throw error;
  }

  return data;
}

/**
 * Get test information by ID
 */
export async function getTestById(testId: string): Promise<TestType | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("test_types")
    .select("*")
    .eq("id", testId)
    .single();

  if (error) {
    console.error("Error fetching test information:", error);
    throw error;
  }

  return data;
}

/**
 * Get all available tests
 */
export async function getAllTests(): Promise<TestType[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("test_types")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching tests:", error);
    throw error;
  }

  return data;
}

/**
 * Get user's test history
 */
export async function getUserTestHistory(userId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("user_test_history")
    .select(
      `
      *,
      test_type:test_type_id (
        name,
        short_code,
        description,
        category
      )
    `
    )
    .eq("user_id", userId)
    .order("taken_at", { ascending: false });

  if (error) {
    console.error("Error fetching user test history:", error);
    throw error;
  }

  return data;
}

/**
 * Get a specific test result by ID
 */
export async function getTestResultById(resultId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("user_test_history")
    .select(
      `
      *,
      test_type:test_type_id (
        name,
        short_code,
        description,
        category,
        result_schema
      )
    `
    )
    .eq("id", resultId)
    .single();

  if (error) {
    console.error("Error fetching test result:", error);
    throw error;
  }

  return data;
}

/**
 * Update a user's profile
 */
export async function updateUserProfile(
  userId: string,
  updates: Partial<User>
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .update(updates)
    .eq("id", userId)
    .select()
    .single();

  if (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }

  return data;
}

/**
 * Update test result privacy (make public/private)
 */
export async function updateTestResultPrivacy(
  resultId: string,
  isPublic: boolean
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("user_test_history")
    .update({ is_public: isPublic })
    .eq("id", resultId)
    .select()
    .single();

  if (error) {
    console.error("Error updating test result privacy:", error);
    throw error;
  }

  return data;
}

/**
 * Get current authenticated user
 */
export async function getCurrentUser(): Promise<User | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // Fetch user record from users table
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    console.error("Error fetching user data:", error);
    return null;
  }

  return data;
}

/**
 * Update the test count for a user
 */
// export async function incrementUserTestCount(userId: string) {
//   const supabase = await createClient();

//   // First get the current count
//   const { data: userData, error: fetchError } = await supabase
//     .from("users")
//     .select("tests_taken")
//     .eq("id", userId)
//     .single();

//   if (fetchError) {
//     console.error("Error fetching user test count:", fetchError);
//     throw fetchError;
//   }

//   const currentCount = userData.tests_taken || 0;

//   // Then update with incremented count
//   const { data, error } = await supabase
//     .from("users")
//     .update({
//       tests_taken: currentCount + 1,
//       last_test_date: new Date().toISOString(),
//     })
//     .eq("id", userId);

//   if (error) {
//     console.error("Error updating user test count:", error);
//     throw error;
//   }

//   return data;
// }
