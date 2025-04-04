"use server";
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
 * Check if a username already exists in the users table
 * @param username The username to check
 * @returns Boolean indicating if the username exists
 * @throws Error if the database query fails
 */
export async function checkUsernameExists(username: string): Promise<boolean> {
  const supabase = await createClient();

  const { data, error, count } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true })
    .eq("username", username);

  if (error) {
    console.error("Error checking if username exists:", error);
    throw error;
  }

  return count !== null && count > 0;
}
