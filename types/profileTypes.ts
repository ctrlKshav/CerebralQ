export type ProficiencyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type UserType = {
  id: number;
  username: string;
  avatarUrl: string;
  bio: string;
  joinDate: string;
};

export type BadgeType = {
  id: string;
  title: string;
  icon: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
};

export type TestResultSummary = {
  type: string;
  result: string;
  displayName?: string;
};

export type MBTIResult = {
  type: string;
  title: string;
  description: string;
  characteristics: string[];
  dimensions: {
    ie: number; // Introversion/Extraversion (0-100, higher = more Extraversion)
    sn: number; // Sensing/Intuition (0-100, higher = more Intuition)
    tf: number; // Thinking/Feeling (0-100, higher = more Feeling)
    jp: number; // Judging/Perceiving (0-100, higher = more Perceiving)
  };
  cognitiveFunctions: {
    dominant: {
      code: string;
      name: string;
      strength: number;
    };
    auxiliary: {
      code: string;
      name: string;
      strength: number;
    };
    tertiary: {
      code: string;
      name: string;
      strength: number;
    };
    inferior: {
      code: string;
      name: string;
      strength: number;
    };
  };
  updatedAt: string;
};

export type DISCResult = {
  type: string;
  title: string;
  description: string;
  factors: {
    dominance: number;
    influence: number;
    steadiness: number;
    conscientiousness: number;
  };
  characteristics: string[];
  strengths: string[];
  updatedAt: string;
};

export type OCEANResult = {
  type: string;
  title: string;
  description: string;
  traits: {
    openness: {
      score: number;
      level: 'High' | 'Medium' | 'Low';
    };
    conscientiousness: {
      score: number;
      level: 'High' | 'Medium' | 'Low';
    };
    extraversion: {
      score: number;
      level: 'High' | 'Medium' | 'Low';
    };
    agreeableness: {
      score: number;
      level: 'High' | 'Medium' | 'Low';
    };
    neuroticism: {
      score: number;
      level: 'High' | 'Medium' | 'Low';
    };
  };
  insights: string[];
  careerMatches: Array<{
    title: string;
    match: number;
  }>;
  updatedAt: string;
};

export type HexacoTrait = {
  name: string;
  description: string;
  score: number;
};

export type HEXACOResult = {
  type: string;
  title: string;
  description: string;
  updatedAt: string;
  hexacoTraits: {
    [key: string]: HexacoTrait;
  };
};

export type TestHistoryEntry = {
  id: string;
  testType: string;
  result: string;
  date: string;
  status: 'New' | 'Changed' | 'No Change';
  previousResult?: string;
};

export type InsightStrength = {
  title: string;
  items: string[];
};

export type InsightWeakness = {
  title: string;
  items: string[];
};

export type CareerCompatibility = {
  requirements: string[];
};

export type RelationshipInsight = {
  compatibleTypes: string[];
  challengingTypes: string[];
  approach: string[];
};

export type RecommendedTest = {
  id: string;
  title: string;
  description: string;
  icon: string;
  backgroundColor: string;
  accentColor: string;
  borderColor: string;
};

export type ProfileData = {
  user: UserType;
  proficiencyLevel: ProficiencyLevel;
  isInsider: boolean;
  assessmentResults: TestResultSummary[];
  mbtiResult: MBTIResult;
  discResult: DISCResult;
  oceanResult: OCEANResult;
  hexacoResult: HEXACOResult;
  testHistory: TestHistoryEntry[];
  insights: {
    strengths: InsightStrength;
    weaknesses: InsightWeakness;
    careerCompatibility: CareerCompatibility;
    relationshipInsights: RelationshipInsight;
  };
  recommendedTests: RecommendedTest[];
};
