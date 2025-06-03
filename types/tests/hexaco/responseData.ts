export interface HEXACOResponseData {
  test_type_id: string;
  user_id: string;
  raw_score: {
    traitScores: {
      HonestyHumility: number;
      Emotionality: number;
      Extraversion: number;
      Agreeableness: number;
      Conscientiousness: number;
      OpennessToExperience: number;
    };
    facetScores: {
      HonestyHumility: {
        Sincerity: number;
        Fairness: number;
        GreedAvoidance: number;
        Modesty: number;
      };
      Emotionality: {
        Fearfulness: number;
        Anxiety: number;
        Dependence: number;
        Sentimentality: number;
      };
      Extraversion: {
        SocialSelfEsteem: number;
        SocialBoldness: number;
        Sociability: number;
        Liveliness: number;
      };
      Agreeableness: {
        Forgivingness: number;
        Gentleness: number;
        Flexibility: number;
        Patience: number;
      };
      Conscientiousness: {
        Organization: number;
        Diligence: number;
        Perfectionism: number;
        Prudence: number;
      };
      OpennessToExperience: {
        AestheticAppreciation: number;
        Inquisitiveness: number;
        Creativity: number;
        Unconventionality: number;
      };
    };
  };
  completion_time_minutes: number;
  validity_status: "valid" | "invalid";
  is_public: boolean;
  taken_at: string;
} 