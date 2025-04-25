import { MBTIRawScore } from './user-test-history';
import {User} from "@/types/supabase/users"

export interface UserProfile {
  username: string
  firstname: string
  profile_image_url: string
  bio: string
  tests_taken: number
  last_test_date: string
  raw_score: MBTIRawScore
  user_test_history: UserTestHistorySummary[]
  joined_at: string;
  is_insider: boolean;
}

export interface UserTestHistorySummary {
  id: string
  type: string
  date: string
  score?: number
  personalityType?: string
  details?: any
}

export type CognitiveMetricsType = Pick<User, 'mbti_personality_type' | 'ocean_traits' | 'iq'>

