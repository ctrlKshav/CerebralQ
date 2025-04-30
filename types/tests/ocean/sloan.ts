export interface SLOANArchetype {
    code: string;
    alias: string;
    description: string;
    characteristics: string[];
    traitThresholds: {
      Extraversion: string;
      Neuroticism: string;
      Conscientiousness: string;
      Agreeableness: string;
      Openness: string;
    };
  }