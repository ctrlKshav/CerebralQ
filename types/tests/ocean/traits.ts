export type OceanTraitKey = 'openness' | 'conscientiousness' | 'extraversion' | 'agreeableness' | 'neuroticism';

export type OceanScore = {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
};

export type OceanTraitScore = {
  dominant: 'left' | 'right';
  leftPercentage: number;
  rightPercentage: number;
};

export type OceanTraitScores = {
  [key in OceanTraitKey]: OceanTraitScore;
};

export type OceanRawScore = {
  traitScores: OceanTraitScores;
  personalityType: string;
};

export type OceanPersonalityType = {
  type: string;
  label: string;
  description: string;
};
