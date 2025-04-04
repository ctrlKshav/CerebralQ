"use server"
import { createClient } from "@/utils/supabase/server";
import { UserTestHistory } from "@/types/userTestHistory";

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
    raw_scores: test.raw_score,
    user_id: test.user_id,
  }));

  return typedData;
}