import { TraitScores } from "@/types/tests/mbti"

export interface UserProfile {
  username: string
  profile_image_url: string
  bio: string
  tests_taken: number
  last_test_date: string
  raw_score: {
    personalityType: string
    traitScores: TraitScores
  }
  user_test_history: Array<{
    id: string
    type: string
    date: string
    score: number
    personalityType?: string
    details: Record<string, any>
  }>
}