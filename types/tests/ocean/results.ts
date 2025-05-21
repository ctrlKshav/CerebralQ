import { OceanTraitScores } from "@/types/tests/ocean/traits";



export interface PersonalityDescription {
    alias: string;
    description: (firstname: string | null, thirdPerson?: boolean) => string;
}

export interface CareerPath {
    summary: string;
    superpowers: SuperpowerItem[];
    growthAreas: GrowthAreaItem[];
    suggestions: CareerSuggestion[];
    actionSteps: ActionStepItem[];
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

export type RelationshipSectionTitle = "Relationships" | "Friendships"

export interface RelationshipCompatibility {
    title: RelationshipSectionTitle;
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
    username: string | null;
    firstname: string | null;
    personalityType: string;
    personalityDescription: PersonalityDescription;
    completionDate: string;
    traitScores: OceanTraitScores | null;
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
