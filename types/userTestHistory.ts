import { Database } from "@/types/supabase";

// Base type from the user_test_history table
export type UserTestHistory = Database["public"]["Tables"]["user_test_history"]["Row"];

// Type for the test_types joined data
export type TestType = {
  name: string;
  short_code: string;
  description: string;
  category: string;
};

// Combined type for the query result
export type UserTestHistoryWithType = UserTestHistory & {
  test_types: TestType;
};

// Type for the array of results returned by getUsersTestHistory
export type UserTestHistoryData = UserTestHistoryWithType[] | null;