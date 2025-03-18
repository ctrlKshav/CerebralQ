import { TraitScores } from "@/types/tests/mbti"
import { MBTIRawScore } from './user-test-history';
import {User} from "@/types/supabase/users"

export interface UserProfile {
  username: string
  profile_image_url: string
  bio: string
  tests_taken: number
  last_test_date: string
  raw_score: MBTIRawScore
  user_test_history: UserTestHistorySummary[]
}

export interface UserTestHistorySummary {
  id: string
  type: string
  date: string
  score?: number
  personalityType?: string
  details?: any
}

export type CognitiveMetricsType = Pick<User, 'mbti_personality_type' | 'ocean_type' | 'iq'>

