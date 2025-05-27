export interface TestSections {
  [key: string]: TestSection;
}

export interface TestSection {
  id: number;
  title: string;
  description: string;
  dimension: string;
  icon?: string;
  totalQuestions: number;
}

export interface TestQuestion {
  id: string;
  text: string;
  description?: string;
  dominantSide?: "left" | "right";
  icon?: string;
  iconColor?: string;
  options?: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
  dimension: string;
  section: number;
  facet?: string; // Optional for Ocean test questions
}

export interface TestQuestionsData {
  id: string;
  totalQuestions: number;
  test_name: string;
  sections: TestSections;
  questions: TestQuestion[];
}
