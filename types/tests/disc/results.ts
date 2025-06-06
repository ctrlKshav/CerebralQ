import { DISCType } from "./testQuestions";

export interface DISCScores {
    Dominant: number;
    Influential: number;
    Steady: number;
    Conscientious: number;
}

export interface DISCResult {
    scores: DISCScores;
    primaryType: DISCType;
    secondaryType?: DISCType;
    isBalanced: boolean; // true if all scores are within 10 points of each other
}

export interface DISCTypeDescription {
    type: DISCType;
    title: string;
    characteristics: string[];
    workplaceStrengths: string[];
    description: string;
}