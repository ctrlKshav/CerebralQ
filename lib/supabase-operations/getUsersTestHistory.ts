"use server"
import { createClient } from "@/utils/supabase/server";
import { UserTestHistory } from "@/types/userTestHistory";
import { getOrderedMBTITraitsObject } from "@/lib/utils";

export async function getUsersTestHistory(userId: string, testTypeId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("user_test_history")
    .select(`
      *
    `)
    .eq("user_id", userId)
    .eq("test_type_id", testTypeId)
    .order("taken_at", { ascending: false })
    .limit(5);

  if (error) {
    console.error("Error fetching user test histories:", error);
    throw error;
  }

  const typedData: UserTestHistory[] = data.map((test) => ({
    id: test.id,
    created_at: test.created_at,
    raw_scores: {
      personalityType: test.raw_score?.personalityType,
      traitScores: getOrderedMBTITraitsObject(test.raw_score?.traitScores),
    },
    user_id: test.user_id,
  }));

  return typedData;
}