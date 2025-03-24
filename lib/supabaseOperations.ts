"use server"
import { createClient } from "@/utils/supabase/server";
import type { UserTestHistoryInsert } from "@/types/supabase/user-test-history";
import type { TestType } from "@/types/supabase/test-types";
import type { User } from "@/types/supabase/users";
import { UserProfile } from "@/types/supabase/user-profile";
import { MBTI_TEST_ID } from "@/lib/constants";
import { getOrderedMBTITraitsObject } from "@/lib/utils";

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
 * Get complete user profile by username, including test history and latest MBTI results
 */
export async function getUserByUsername(username: string): Promise<UserProfile | null> {
  const supabase = await createClient();
  
  try {
    // Step 1: Get user data from users table
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .maybeSingle();
    
    if (userError) {
      console.error("Error fetching user by username:", userError);
      return null;
    }
    
    // If user doesn't exist, return null immediately
    if (!userData) {
      return null;
    }
    
    // Step 2: Get user's test history
    const { data: historyData, error: historyError } = await supabase
      .from("user_test_history")
      .select(`
        *,
        test_type:test_type_id (
          name,
          short_code,
          description,
          category
        )
      `)
      .eq("user_id", userData.id)
      .eq("is_public", true)
      .order("taken_at", { ascending: false });
    
    if (historyError) {
      console.error("Error fetching user test history:", historyError);
      // Still return user data but with empty test history
      return {
        username: userData.username || "",
        profile_image_url: userData.profile_image_url || "/placeholder.svg?height=128&width=128",
        bio: userData.bio || "",
        tests_taken: userData.tests_taken || 0,
        last_test_date: userData.last_test_date || "",
        joined_at: userData.created_at   || "",
        is_insider: userData.is_insider,
        raw_score: {
          personalityType: "Unknown",
          traitScores: {
            "E-I": { left: 0, right: 0, leftPercentage: 50, rightPercentage: 50, dominant: "right" },
            "S-N": { left: 0, right: 0, leftPercentage: 50, rightPercentage: 50, dominant: "right" },
            "T-F": { left: 0, right: 0, leftPercentage: 50, rightPercentage: 50, dominant: "right" },
            "J-P": { left: 0, right: 0, leftPercentage: 50, rightPercentage: 50, dominant: "right" }
          }
        },
        user_test_history: []
      };
    }
    
    // User exists but has no test history
    if (!historyData || historyData.length === 0) {
      return {
        username: userData.username || "",
        profile_image_url: userData.profile_image_url || "/placeholder.svg?height=128&width=128",
        bio: userData.bio || "",
        tests_taken: userData.tests_taken || 0,
        last_test_date: userData.last_test_date || "",
        joined_at: userData.created_at   || "",
        is_insider: userData.is_insider,
        raw_score: {
          personalityType: "Unknown",
          traitScores: {
            "E-I": { left: 0, right: 0, leftPercentage: 50, rightPercentage: 50, dominant: "right" },
            "S-N": { left: 0, right: 0, leftPercentage: 50, rightPercentage: 50, dominant: "right" },
            "T-F": { left: 0, right: 0, leftPercentage: 50, rightPercentage: 50, dominant: "right" },
            "J-P": { left: 0, right: 0, leftPercentage: 50, rightPercentage: 50, dominant: "right" }
          }
        },
        user_test_history: []
      };
    }
    
    // Step 3: Get the latest MBTI test result for the personality type
    const { data: mbtiResult, error: mbtiError } = await supabase
      .from("user_test_history")
      .select("*")
      .eq("user_id", userData.id)
      .eq("test_type_id", MBTI_TEST_ID)
      .eq("is_public", true)
      .order("taken_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    
    // Step 4: Format and return the user profile
    return {
      username: userData.username || "",
      profile_image_url: userData.profile_image_url || "/placeholder.svg?height=128&width=128",
      bio: userData.bio || "",
      tests_taken: userData.tests_taken || 0,
      last_test_date: userData.last_test_date || "",
      joined_at: userData.created_at   || "",
      is_insider: userData.is_insider,
      raw_score: {
        personalityType: mbtiResult?.raw_score?.personalityType || "Unknown",
        traitScores: getOrderedMBTITraitsObject(mbtiResult?.raw_score.traitScores) || {
          "E-I": { left: 0, right: 0, leftPercentage: 50, rightPercentage: 50, dominant: "right" },
          "S-N": { left: 0, right: 0, leftPercentage: 50, rightPercentage: 50, dominant: "right" },
          "T-F": { left: 0, right: 0, leftPercentage: 50, rightPercentage: 50, dominant: "right" },
          "J-P": { left: 0, right: 0, leftPercentage: 50, rightPercentage: 50, dominant: "right" }
        }
      },
      user_test_history: historyData.map(test => ({
        id: test.id,
        type: test.test_type?.short_code || "Unknown",
        date: test.taken_at || "",
        score: test.percentile || 0,
        personalityType: test.raw_score?.personalityType || "Unknown",
        details: test.raw_score?.details || {}
      }))
    };
    
  } catch (error) {
    console.error("Unexpected error in getUserByUsername:", error);
    return null;
  }
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
    .select("*", { count: 'exact', head: true })
    .eq("username", username);
  
  if (error) {
    console.error("Error checking if username exists:", error);
    throw error;
  }
  
  return count !== null && count > 0;
}