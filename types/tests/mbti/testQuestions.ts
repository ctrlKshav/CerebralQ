﻿export interface TestSection {
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
  dominantSide?: "left" | "right";
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