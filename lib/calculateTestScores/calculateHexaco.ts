interface HEXACOAnswers {
  [key: string]: {
    selectedScore: number;
  };
}

interface HEXACOResult {
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
}

export const calculateHEXACO = (answers: HEXACOAnswers): HEXACOResult => {
  // Initialize scores
  const traitScores = {
    HonestyHumility: 0,
    Emotionality: 0,
    Extraversion: 0,
    Agreeableness: 0,
    Conscientiousness: 0,
    OpennessToExperience: 0,
  };

  const facetScores = {
    HonestyHumility: {
      Sincerity: 0,
      Fairness: 0,
      GreedAvoidance: 0,
      Modesty: 0,
    },
    Emotionality: {
      Fearfulness: 0,
      Anxiety: 0,
      Dependence: 0,
      Sentimentality: 0,
    },
    Extraversion: {
      SocialSelfEsteem: 0,
      SocialBoldness: 0,
      Sociability: 0,
      Liveliness: 0,
    },
    Agreeableness: {
      Forgivingness: 0,
      Gentleness: 0,
      Flexibility: 0,
      Patience: 0,
    },
    Conscientiousness: {
      Organization: 0,
      Diligence: 0,
      Perfectionism: 0,
      Prudence: 0,
    },
    OpennessToExperience: {
      AestheticAppreciation: 0,
      Inquisitiveness: 0,
      Creativity: 0,
      Unconventionality: 0,
    },
  };

  return {
    traitScores,
    facetScores,
  };
}; 