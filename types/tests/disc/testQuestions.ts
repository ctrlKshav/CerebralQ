// DISC Assessment TypeScript Types

export type DISCType = 'Dominant' | 'Influential' | 'Steady' | 'Conscientious';

export interface DISCAdjective {
  text: string;
  type: DISCType;
}

export interface DISCQuestionGroup {
  id: number;
  adjectives: DISCAdjective[];
}

export interface DISCQuestionsData {
  id: string;
  totalQuestions: number;
  test_name: string;
  questions: DISCQuestionGroup[];
}
