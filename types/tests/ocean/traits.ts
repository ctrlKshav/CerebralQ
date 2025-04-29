export type OceanTraitKey = 'openness' | 'conscientiousness' | 'extraversion' | 'agreeableness' | 'neuroticism';

export type OceanScore = {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
};

export type OceanTraitScore = {
  score: number;
  total: number;
  percentage: number;
};

export type OceanTraitScores = {
  [key in OceanTraitKey]: OceanTraitScore;
};

export type OceanRawScore = {
  traitScores: OceanTraitScores;
};

export type OceanDimensionObject = {
  score: number;
  total: number;
  percentage: number;
}