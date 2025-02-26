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
  id: number;
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

