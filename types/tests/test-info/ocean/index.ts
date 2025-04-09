export type TraitType = "Openness" | "Conscientiousness" | "Extraversion" | "Agreeableness" | "Neuroticism";

export interface TestDetail {
  badge: string;
  tooltip: string;
  title: string;
  description: string;
}

export interface Citation {
  title: string;
  authors: string;
  description: string;
}

export interface Trait {
  name: TraitType;
  tagline: string;
  description: string;
  tags: string[];
  gradient: string;
  image: string;
  imageSvg: string;
  alt: string;
}
