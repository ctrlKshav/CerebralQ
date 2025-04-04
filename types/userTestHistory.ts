import { MBTIRawScore } from "./supabase/user-test-history";

// Interface for a single test history entry
export interface UserTestHistory {
  id: string;
  created_at: string;
  raw_scores: MBTIRawScore;
  user_id: string;
}

// Type for the collection of test history results
export type UserTestHistoryData = UserTestHistory[] | null;