// DISC Assessment TypeScript Types

export type DISCType = 'Dominant' | 'Influential' | 'Steady' | 'Conscientious';

export interface DISCAdjective {
  text: string;
  type: DISCType;
}

export interface DISCGroup {
  id: number;
  adjectives: DISCAdjective[];
}

export interface DISCResponse {
  groupId: number;
  rankings: { [adjective: string]: number }; // adjective text -> rank (1-4)
}

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