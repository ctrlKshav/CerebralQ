export interface TestSection {
  id: number;
  title: string;
  description: string;
  dimension: string;
  icon: string;
}

export interface TestQuestion {
  id: string;
  text: string;
  description?: string;
  type: 'likert';
  icon: string;
  iconColor?: string;
  options?: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
  dimension: string;
  section: number;
}

export interface TestData {
  id: string;
  test_name: string;
  sections: TestSection[];
  questions: TestQuestion[];
}

export interface TraitScore {
  left: number
  right: number
  leftPercentage: number
  rightPercentage: number
  dominant: "left" | "right"
}

export interface TraitScores {
  "E-I": TraitScore
  "S-N": TraitScore
  "T-F": TraitScore
  "J-P": TraitScore
}

export interface TraitDescription {
  title: string
  leftLabel: string
  rightLabel: string
  description: string
  color: string
}

export interface TraitDescriptions {
  [key: string]: TraitDescription
}

interface PersonalityInsight {
  title: string;
  icon: string;
  points: string[];
}

export interface PersonalityTypeInsights {
  strengths: PersonalityInsight;
  challenges: PersonalityInsight;
  workStyle: PersonalityInsight;
  relationships: PersonalityInsight;
  growthAreas: PersonalityInsight;
}

export interface ResultData {
  personalityType: string;
  personalityDescription: PersonalityDescription;
  testId: string;
  completionDate: string;
  traitScores: TraitScores | null;
  careerSuggestions: Array<{ title: string; match: number }>;
  similarPersonalities: Array<{ name: string; profession: string; image: string }>;
}

export interface PersonalityDescription {
  alias: string;
  description: string;
}

/**
 * Types related to MBTI personality test
 */

export interface MBTIResults {
  personalityType: string;
  traitScores: TraitScores;
}

export interface MBTIPersonalityType {
  code: string;
  alias: string;
  description: string;
  traits: {
    mind: "E" | "I"; // Extroverted or Introverted
    energy: "S" | "N"; // Sensing or Intuition
    nature: "T" | "F"; // Thinking or Feeling
    tactics: "J" | "P"; // Judging or Perceiving
  };
  strengths: string[];
  weaknesses: string[];
  careerSuggestions: string[];
  compatibleTypes: string[];
}

/**
 * Represents the characteristic dimensions measured by the MBTI
 */
export interface MBTITestDimension {
  title: string;
  description: string;
  leftPole: {
    letter: string;
    name: string;
    traits: string[];
  };
  rightPole: {
    letter: string;
    name: string;
    traits: string[];
  };
}

/**
 * Complete test metadata with MBTI specific fields
 */
export interface MBTITestData {
  id: string;
  name: string;
  shortCode: string;
  description: string;
  numQuestions: number;
  timeEstimateMinutes: number;
  validityPeriodDays: number;
  dimensions: MBTITestDimension[];
  categories: {
    primary: string;
    secondary: string[];
  };
  scientificValidity: {
    reliabilityScore: number;
    validityScore: number;
  };
}

/**
 * Question format for MBTI tests
 */
export interface MBTIQuestion {
  id: string;
  text: string;
  dimension: "E-I" | "S-N" | "T-F" | "J-P";
  direction: "left" | "right";
  weight: number;
}

/**
 * User's answer to an MBTI question
 */
export interface MBTIAnswer {
  questionId: string;
  score: number; // Typically 1-5 representing strongly disagree to strongly agree
  dimension: "E-I" | "S-N" | "T-F" | "J-P";
  direction: "left" | "right";
}