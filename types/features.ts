
export interface TestType {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  traits: PersonalityTrait[];
}

export interface PersonalityTrait {
  name: string;
  description: string;
  color: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  personalityType?: string;
  image?: string;
}

export interface JourneyStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon?: string;
}
