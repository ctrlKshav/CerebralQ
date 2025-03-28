export interface TestSection {
  id: number;
  title: string;
  description: string;
  dimension: string;
  icon?: string;
}

export interface TestQuestion {
  id: string;
  text: string;
  description?: string;
  type: "likert";
  icon?: string;
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
  left: number;
  right: number;
  leftPercentage: number;
  rightPercentage: number;
  dominant: "left" | "right";
}

export interface TraitScores {
  "E-I": TraitScore;
  "S-N": TraitScore;
  "T-F": TraitScore;
  "J-P": TraitScore;
}

interface PersonalityInsight {
  title: string;
  icon: string;
  points: string[];
}

export interface PersonalityTypeInsights {
  strengths: {
    title: string;
    icon: string;
    points: string[];
  };
  challenges: {
    title: string;
    icon: string;
    points: string[];
  };
  workStyle: {
    title: string;
    icon: string;
    points: string[];
  };
  relationships: {
    title: string;
    icon: string;
    points: string[];
  };
  growthAreas: {
    title: string;
    icon: string;
    points: string[];
  };
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

export interface PersonalityBlueprint {
  traits: TraitDescription[];
  summary: string;
}

export interface CareerPath {
  summary: string;
  superpowers: SuperpowerItem[];
  growthAreas: GrowthAreaItem[];
  suggestions: CareerSuggestion[];
  actionSteps: ActionStepItem[];
}


// MBTI trait type
export type MBTITrait = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

// MBTI trait with description
interface MBTITraitDetail {
  trait: MBTITrait;
  description: string;
}

export type TraitKey = "E-I" | "S-N" | "T-F" | "J-P";
export interface TraitDescriptions {
  "E-I": TraitDescription;
  "S-N": TraitDescription;
  "T-F": TraitDescription;
  "J-P": TraitDescription;
}

export interface TraitDescription {
  title: string;
  leftLabel: string;
  rightLabel: string;
  lightColor: string;
  darkColor: string;
  left: {
    letter: string;
    name: string;
  };
  right: {
    letter: string;
    name: string;
  };
  getDominantTraitDescription: (username?: string, thirdPerson?: boolean) => string;
}

export interface CareerSuggestion {
  title: string;
  matchPercentage: number;
  description: string;
  qualityMatches: CareerQualityMatch[];
}

export interface CareerQualityMatch {
  title: string;
  description: string;
}

export interface RelationshipCompatibility {
  title: string;
  subtitle: string;
  description: string;
  compatibleTypes: string[];
  superpowers: SuperpowerItem[];
  growthAreas: GrowthAreaItem[];
  actionSteps: ActionStepItem[];
}

export interface GrowthJourney {
  summary: string;
  superpowers: SuperpowerItem[];
  growthAreas: GrowthAreaItem[];
  actionSteps: ActionStepItem[];
}

export interface GrowthMilestone {
  title: string;
  description: string;
  completed: boolean;
}

export interface DailyHabits {
  summary: string;
  habits: {
    morning: HabitItem;
    afternoon: HabitItem;
    evening: HabitItem;
  };
  communication: CommunicationStyle;
}

export interface CommunicationStyle {
  summary: string;
  tips: string[];
}

export interface ValuesAndMotivators {
  summary: string;
  coreValues: SuperpowerItem[];
  motivators: GrowthAreaItem[];
  actionItems: ActionStepItem[];
}

export interface CommunityConnection {
  summary: string;
  suggestions: string[];
}

export interface ActionItem {
  task: string;
  completed: boolean;
  description?: string;
}

export interface SuperpowerItem {
  title: string;
  description: string;
}

export interface GrowthAreaItem {
  title: string;
  description: string;
}

export interface HabitItem {
  title: string;
  description: string;
}

export interface ActionStepItem {
  number: number;
  description: string;
}

export interface ResultData {
  firstname: string | null;
  personalityType: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
  traitScores: TraitScores | null;
  personalityData: PersonalityDatabase;
}

export interface PersonalityDatabase {
  career: CareerPath;
  relationships: RelationshipCompatibility[];
  growth: GrowthJourney;
  actionItems: ActionItem[];
  dailyHabits: DailyHabits;
  valuesAndMotivators: ValuesAndMotivators;
  communityConnection: CommunityConnection;
}
