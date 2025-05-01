
import { OceanTraitKey, OceanTraitScore, OceanTraitScores } from "@/types/tests/ocean/traits";
// Personality description type
export type PersonalityDescription = {
    alias: string;
    description: (firstname: string | null, thirdPerson: boolean) => string;
};

// Career-related types
export type CareerSuperpower = {
    title: string;
    description: string;
};

export type CareerGrowthArea = {
    title: string;
    description: string;
};

export type CareerQualityMatch = {
    title: string;
    description: string;
};

export type CareerSuggestion = {
    title: string;
    matchPercentage: number;
    description: string;
    qualityMatches: CareerQualityMatch[];
};

export type CareerActionStep = {
    number: number;
    description: string;
};

export type CareerData = {
    summary: string;
    superpowers: CareerSuperpower[];
    growthAreas: CareerGrowthArea[];
    suggestions: CareerSuggestion[];
    actionSteps: CareerActionStep[];
};

// Relationship-related types
export type RelationshipSuperpower = {
    title: string;
    description: string;
};

export type RelationshipGrowthArea = {
    title: string;
    description: string;
};

export type RelationshipActionStep = {
    number: number;
    description: string;
};

export type RelationshipData = {
    title: string;
    subtitle: string;
    description: string;
    compatibleTypes: string[];
    superpowers: RelationshipSuperpower[];
    growthAreas: RelationshipGrowthArea[];
    actionSteps: RelationshipActionStep[];
};

// Growth-related types
export type GrowthSuperpower = {
    title: string;
    description: string;
};

export type GrowthArea = {
    title: string;
    description: string;
};

export type GrowthActionStep = {
    number: number;
    description: string;
};

export type GrowthData = {
    summary: string;
    superpowers: GrowthSuperpower[];
    growthAreas: GrowthArea[];
    actionSteps: GrowthActionStep[];
};

// Daily habits-related types
export type Habit = {
    title: string;
    description: string;
};

export type Communication = {
    summary: string;
    tips: string[];
};

export type DailyHabitsData = {
    summary: string;
    habits: {
        morning: Habit;
        afternoon: Habit;
        evening: Habit;
    };
    communication: Communication;
};

// Values and motivators-related types
export type CoreValue = {
    title: string;
    description: string;
};

export type Motivator = {
    title: string;
    description: string;
};

export type ValuesActionItem = {
    number: number;
    description: string;
};

export type ValuesAndMotivatorsData = {
    summary: string;
    coreValues: CoreValue[];
    motivators: Motivator[];
    actionItems: ValuesActionItem[];
};

// Community connection-related types
export type CommunityConnectionData = {
    summary: string;
    suggestions: string[];
};

// Action items type
export type ActionItem = {
    task: string;
    completed: boolean;
    description: string;
};

// Personality data type
export type PersonalityDatabase = {
    career: CareerData;
    relationships: RelationshipData[];
    growth: GrowthData;
    dailyHabits: DailyHabitsData;
    valuesAndMotivators: ValuesAndMotivatorsData;
    communityConnection: CommunityConnectionData;
    actionItems: ActionItem[];
};

// Main result data type
export type ResultData = {
    username: string | null;
    firstname: string | null;
    personalityType: string;
    personalityDescription: PersonalityDescription;
    completionDate: string;
    traitScores: OceanTraitScores;
    personalityData: PersonalityDatabase;
};
