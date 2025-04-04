"use server"
import { createClient } from "@/utils/supabase/server";

export async function getUsersTestHistory(userId: string, testTypeId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("user_test_history")
    .select(`
      *,
      test_types:test_type_id (
        name,
        short_code,
        description,
        category
      )
    `)
    .eq("user_id", userId)
    .eq("test_type_id", testTypeId)
    .order("taken_at", { ascending: false })
    .limit(5);

  if (error) {
    console.error("Error fetching user test histories:", error);
    throw error;
  }

  return data;
}