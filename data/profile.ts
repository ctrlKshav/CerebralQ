import type { TraitScores } from "@/types/tests/mbti"

// Mock user data for the profile page

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

// Mock data for a user profile
const mockUserProfile: UserProfile = {
  username: "mindexplorer",
  profile_image_url: "/placeholder.svg?height=128&width=128",
  bio: "Cognitive science enthusiast. Exploring the frontiers of human potential through data-driven insights and continuous learning.",
  tests_taken: 24,
  last_test_date: "2023-12-15",
  raw_score: {
    personalityType: "INFP",
    traitScores: {
      "E-I": {
        left: 30,
        right: 70,
        leftPercentage: 30,
        rightPercentage: 70,
        dominant: "right"
      },
      "S-N": {
        left: 15,
        right: 85,
        leftPercentage: 15,
        rightPercentage: 85,
        dominant: "right"
      },
      "T-F": {
        left: 25,
        right: 75,
        leftPercentage: 25,
        rightPercentage: 75,
        dominant: "right"
      },
      "J-P": {
        left: 20,
        right: 80,
        leftPercentage: 20,
        rightPercentage: 80,
        dominant: "right"
      }
    }
  },
  user_test_history: [
    {
      id: "test-001",
      type: "MBTI",
      date: "2023-12-15",
      personalityType: "INFP",
      score: 53,
      details: {
        "Extraversion-Introversion": "I (70%)",
        "Sensing-Intuition": "N (85%)",
        "Thinking-Feeling": "F (75%)",
        "Judging-Perceiving": "P (80%)"
      },
    },
    {
      id: "test-002",
      type: "MBTI",
      date: "2023-10-05",
      personalityType: "INFP",
      score: 53,
      details: {
        "Extraversion-Introversion": "I (65%)",
        "Sensing-Intuition": "N (82%)",
        "Thinking-Feeling": "F (78%)",
        "Judging-Perceiving": "P (77%)"
      },
    },
    {
      id: "test-003",
      type: "MBTI",
      date: "2023-08-12",
      personalityType: "INFJ",
      score: 53,
      details: {
        "Extraversion-Introversion": "I (68%)",
        "Sensing-Intuition": "N (80%)",
        "Thinking-Feeling": "F (73%)",
        "Judging-Perceiving": "J (55%)"
      },
    },
  ],
}

// Function to get user profile data
export async function getUserProfile(username: string): Promise<UserProfile> {
  // In a real application, this would fetch data from an API
  // For now, we'll just return the mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUserProfile)
    }, 500)
  })
}

