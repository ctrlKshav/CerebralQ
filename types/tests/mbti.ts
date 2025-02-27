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
  personalityDescription: string;
  testId: string;
  completionDate: string;
  traitScores: TraitScores | null;
  careerSuggestions: Array<{ title: string; match: number }>;
  similarPersonalities: Array<{ name: string; profession: string; image: string }>;
}