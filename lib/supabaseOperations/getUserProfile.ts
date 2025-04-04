
import { MBTI_TEST_ID } from "@/lib/constants";
import { getOrderedMBTITraitsObject } from "@/lib/utils";
import { UserProfile } from "@/types/supabase/user-profile";
import { createClient } from "@/utils/supabase/server";

/**
 * Get complete user profile by username, including test history and latest MBTI results
 */
export async function getUserProfileByUsername(
    username: string
  ): Promise<UserProfile | null> {
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
        .eq("user_id", userData.id)
        .eq("is_public", true)
        .order("taken_at", { ascending: false });
  
      if (historyError) {
        console.error("Error fetching user test history:", historyError);
        // Still return user data but with empty test history
        return {
          username: userData.username || "",
          firstname: userData.first_name || "",
          profile_image_url:
            userData.profile_image_url || "/placeholder.svg?height=128&width=128",
          bio: userData.bio || "",
          tests_taken: userData.tests_taken || 0,
          last_test_date: userData.last_test_date || "",
          joined_at: userData.created_at || "",
          is_insider: userData.is_insider || false,
          raw_score: {
            personalityType: "Unknown",
            traitScores: {
              "E-I": {
                left: 0,
                right: 0,
                leftPercentage: 50,
                rightPercentage: 50,
                dominant: "right",
              },
              "S-N": {
                left: 0,
                right: 0,
                leftPercentage: 50,
                rightPercentage: 50,
                dominant: "right",
              },
              "T-F": {
                left: 0,
                right: 0,
                leftPercentage: 50,
                rightPercentage: 50,
                dominant: "right",
              },
              "J-P": {
                left: 0,
                right: 0,
                leftPercentage: 50,
                rightPercentage: 50,
                dominant: "right",
              },
            },
          },
          user_test_history: [],
        };
      }
  
      // User exists but has no test history
      if (!historyData || historyData.length === 0) {
        return {
          username: userData.username || "",
          firstname: userData.first_name || "",
          profile_image_url:
            userData.profile_image_url || "/placeholder.svg?height=128&width=128",
          bio: userData.bio || "",
          tests_taken: userData.tests_taken || 0,
          last_test_date: userData.last_test_date || "",
          joined_at: userData.created_at || "",
          is_insider: userData.is_insider || false,
          raw_score: {
            personalityType: "Unknown",
            traitScores: {
              "E-I": {
                left: 0,
                right: 0,
                leftPercentage: 50,
                rightPercentage: 50,
                dominant: "right",
              },
              "S-N": {
                left: 0,
                right: 0,
                leftPercentage: 50,
                rightPercentage: 50,
                dominant: "right",
              },
              "T-F": {
                left: 0,
                right: 0,
                leftPercentage: 50,
                rightPercentage: 50,
                dominant: "right",
              },
              "J-P": {
                left: 0,
                right: 0,
                leftPercentage: 50,
                rightPercentage: 50,
                dominant: "right",
              },
            },
          },
          user_test_history: [],
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
        firstname: userData.first_name || "",
        profile_image_url:
          userData.profile_image_url || "/placeholder.svg?height=128&width=128",
        bio: userData.bio || "",
        tests_taken: userData.tests_taken || 0,
        last_test_date: userData.last_test_date || "",
        joined_at: userData.created_at || "",
        is_insider: userData.is_insider || false,
        raw_score: {
          personalityType: mbtiResult?.raw_score?.personalityType || "Unknown",
          traitScores: getOrderedMBTITraitsObject(
            mbtiResult?.raw_score.traitScores
          ) || {
            "E-I": {
              left: 0,
              right: 0,
              leftPercentage: 50,
              rightPercentage: 50,
              dominant: "right",
            },
            "S-N": {
              left: 0,
              right: 0,
              leftPercentage: 50,
              rightPercentage: 50,
              dominant: "right",
            },
            "T-F": {
              left: 0,
              right: 0,
              leftPercentage: 50,
              rightPercentage: 50,
              dominant: "right",
            },
            "J-P": {
              left: 0,
              right: 0,
              leftPercentage: 50,
              rightPercentage: 50,
              dominant: "right",
            },
          },
        },
        user_test_history: historyData.map((test) => ({
          id: test.id,
          type: test.test_type?.short_code || "Unknown",
          date: test.taken_at || "",
          score: test.percentile || 0,
          personalityType: test.raw_score?.personalityType || "Unknown",
          details: test.raw_score?.details || {},
        })),
      };
    } catch (error) {
      console.error("Unexpected error in getUserByUsername:", error);
      return null;
    }
  }