export interface TestData {
  id: string;
  name: string;
  short_code: string;
  description: string;
  category: string;
  num_questions: number;
  time_estimate_minutes: number;
  engagement_level: string;
  scoring_method: string;
  result_type: string;
  result_schema: Record<string, unknown>;
  scientific_validity_score: number;
  reliability_score: number;
  key_insights: string[];
  result_interpretation: string;
  scientific_background: string;
  recommended_age_range?: string;
  complementary_tests: {
    id: string;
    name: string;
    description: string;
  }[];
  is_premium: boolean;
}

export interface UserProgressInterface {
  score: string;
  timestamp: string;
  validity: string;
}

const sampleTestData: TestData = {
  id: "mbti-1",
  name: "Myers-Briggs Type Indicator (MBTI)",
  short_code: "MBTI",
  description:
    "The MBTI is a personality inventory that helps individuals identify their personality type, strengths, and preferences.",
  category: "Personality",
  num_questions: 93,
  time_estimate_minutes: 45,
  engagement_level: "Intensive",
  scoring_method:
    "The MBTI uses a series of questions to determine preferences across four dichotomies: Extraversion/Introversion, Sensing/Intuition, Thinking/Feeling, and Judging/Perceiving.",
  result_type: "16 personality types",
  result_schema: {
    // Define the schema for result visualization
  },
  scientific_validity_score: 75,
  reliability_score: 80,
  key_insights: [
    "Understand your natural preferences in how you perceive the world and make decisions",
    "Identify potential career paths that align with your personality type",
    "Improve self-awareness and interpersonal relationships",
  ],
  result_interpretation:
    "Your MBTI type is represented by a four-letter code (e.g., INTJ, ESFP) that describes your preferences in each of the four dichotomies.",
  scientific_background:
    "Developed by Isabel Briggs Myers and her mother, Katharine Briggs, based on Carl Jung's theory of psychological types.",
  recommended_age_range: "16 years and older",
  complementary_tests: [
    { id: "big5-1", name: "Big Five Personality Test", description: "Measures five broad dimensions of personality" },
    {
      id: "enneagram-1",
      name: "Enneagram Test",
      description: "Explores nine distinct personality types and their interrelationships",
    },
  ],
  is_premium: false,
}

export function getTestData(testId: string): TestData {
  // In a real implementation, fetch data from Supabase
  return sampleTestData
}

export function getUserProgress(testId: string): UserProgressInterface {
  // Mock user progress data
  return {
    score: "INTJ",
    timestamp: new Date("2023-01-15").toISOString(),
    validity: "Valid for 6 more months",
  }
}

