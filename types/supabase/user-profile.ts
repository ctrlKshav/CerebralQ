import { TraitScores } from "@/types/tests/mbti"
import { MBTIRawScore } from './user-test-history';
import { PartialUser, User } from "@/types/supabase/users";

export interface UserProfile extends PartialUser{
  raw_score: MBTIRawScore
  user_test_history: UserTestHistorySummary[]
}

export type CognitiveMetricsType = Pick<User, 'mbti_personality_type' | 'ocean_type' | 'iq'>

export interface UserTestHistorySummary {
  id: string
  type: string
  date: string
  score?: number
  personalityType?: string
  details?: any
}