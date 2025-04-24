import { MBTIRawScore } from "@/types/supabase/user-test-history";

export interface MBTIResponseData {
  test_type_id: string;
  user_id: string;
  raw_score: MBTIRawScore;
  completion_time_minutes: number;
  validity_status: string;
  is_public: boolean;
  taken_at: string;
    
}
