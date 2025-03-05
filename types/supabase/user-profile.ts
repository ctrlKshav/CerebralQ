import { TraitScores } from "@/types/tests/mbti"
import { MBTIRawScore } from './user-test-history';

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