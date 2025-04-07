import { TraitScores } from "./traits";

export interface PersonalityTypeInsights {
  strengths: {
    title: string;
    icon: string;
    points: string[];
  };
  challenges: {
    title: string;
    icon: string;
    points: string[];
  };
  workStyle: {
    title: string;
    icon: string;
    points: string[];
  };
  relationships: {
    title: string;
    icon: string;
    points: string[];
  };
  growthAreas: {
    title: string;
    icon: string;
    points: string[];
  };
}


export interface MBTIResults {
  personalityType: string;
  traitScores: TraitScores;
}

export interface MBTIPersonalityType {
  code: string;
  alias: string;
  description: string;
  traits: {
    mind: "E" | "I"; // Extroverted or Introverted
    energy: "S" | "N"; // Sensing or Intuition
    nature: "T" | "F"; // Thinking or Feeling
    tactics: "J" | "P"; // Judging or Perceiving
  };
  strengths: string[];
  weaknesses: string[];
  careerSuggestions: string[];
  compatibleTypes: string[];
}

