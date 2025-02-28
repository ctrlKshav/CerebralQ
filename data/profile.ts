import type { TraitScores } from "@/types/tests/mbti"

// Mock user data for the profile page

export interface UserProfile {
  username: string
  profile_image_url: string
  bio: string
  tests_taken: number
  last_test_date: string
  raw_score: {
    iq: {
      score: number
      percentile: number
      populationAverage: number
      history: Array<{ date: string; score: number }>
    }
    personalityType: string
    traitScores: TraitScores
    bigFive: {
      openness: number
      conscientiousness: number
      extraversion: number
      agreeableness: number
      neuroticism: number
    }
    cognitivePercentile: {
      verbal: number
      numerical: number
      abstract: number
      spatial: number
      memory: number
    }
    globalRanking: number
  }
  user_test_history: Array<{
    id: string
    type: string
    date: string
    score: number
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
    iq: {
      score: 128,
      percentile: 96,
      populationAverage: 100,
      history: [
        { date: "2023-01-15", score: 122 },
        { date: "2023-04-22", score: 125 },
        { date: "2023-08-10", score: 126 },
        { date: "2023-12-15", score: 128 },
      ],
    },
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
    },
    bigFive: {
      openness: 0.85,
      conscientiousness: 0.72,
      extraversion: 0.45,
      agreeableness: 0.78,
      neuroticism: 0.38,
    },
    cognitivePercentile: {
      verbal: 92,
      numerical: 88,
      abstract: 94,
      spatial: 85,
      memory: 90,
    },
    globalRanking: 5,
  },
  user_test_history: [
    {
      id: "test-001",
      type: "IQ",
      date: "2023-12-15",
      score: 128,
      details: {
        "Verbal Reasoning": 130,
        "Numerical Reasoning": 126,
        "Abstract Reasoning": 132,
        "Spatial Reasoning": 124,
      },
    },
    {
      id: "test-002",
      type: "Big Five",
      date: "2023-11-20",
      score: 0,
      details: {
        Openness: "85%",
        Conscientiousness: "72%",
        Extraversion: "45%",
        Agreeableness: "78%",
        Neuroticism: "38%",
      },
    },
    {
      id: "test-003",
      type: "Memory",
      date: "2023-10-05",
      score: 90,
      details: {
        "Working Memory": "92%",
        "Long-term Memory": "88%",
        "Visual Memory": "91%",
        "Auditory Memory": "89%",
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

