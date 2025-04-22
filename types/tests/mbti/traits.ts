export type TraitKey = "E-I" | "S-N" | "T-F" | "J-P";

export interface TraitScore {
  left: number;
  right: number;
  leftPercentage: number;
  rightPercentage: number;
  dominant: "left" | "right";
}

export interface TraitScores {
  "E-I": TraitScore;
  "S-N": TraitScore;
  "T-F": TraitScore;
  "J-P": TraitScore;
}

export interface TraitDescription {
  title: string;
  leftLabel: string;
  rightLabel: string;
  lightColor: string;
  darkColor: string;
  left: {
    letter: string;
    name: string;
  };
  right: {
    letter: string;
    name: string;
  };
  getDominantTraitDescription: (username?: string, thirdPerson?: boolean) => string;
}


export interface TraitDescriptions {
  "E-I": TraitDescription;
  "S-N": TraitDescription;
  "T-F": TraitDescription;
  "J-P": TraitDescription;
}
