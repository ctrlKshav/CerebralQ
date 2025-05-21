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

export interface MBTITestQuestion {
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
}

export interface MBTITestQuestionsData {
  id: string;
  totalQuestions: number;
  test_name: string;
  sections: TestSections;
  questions: MBTITestQuestion[];
}

export interface OceanTestQuestion extends MBTITestQuestion {
  facet: string;
}

export interface OceanTestQuestionsData {
  id: string;
  totalQuestions: number;
  test_name: string;
  sections: TestSections;
  questions: OceanTestQuestion[];
}
