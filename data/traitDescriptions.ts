export interface TraitDescription {
  title: string;
  leftLabel: string;
  rightLabel: string;
  lightColor: string;
  darkColor: string;
  description: string;
}

export const traitDescriptions: Record<string, TraitDescription> = {
  "E-I": {
    title: "Energy Style",
    leftLabel: "Extraversion",
    rightLabel: "Introversion",
    lightColor: "#4F46E5", // Indigo-600
    darkColor: "#818CF8", // Indigo-400
    description: "This trait reflects how you interact with the world and where you derive your energy. Extraverts gain energy from social interactions and external activities, while Introverts recharge through solitude and deep internal thought."
  },
  "S-N": {
    title: "Information Processing",
    leftLabel: "Sensing",
    rightLabel: "Intuition",
    lightColor: "#10B981", // Emerald-600
    darkColor: "#34D399", // Emerald-400
    description: "This trait indicates how you process information. Sensing types focus on concrete facts and details observed through their five senses, while Intuitive types prefer abstract concepts, patterns, and possibilities."
  },
  "T-F": {
    title: "Decision Making",
    leftLabel: "Thinking",
    rightLabel: "Feeling",
    lightColor: "#F59E0B", // Amber-600
    darkColor: "#FBBF24", // Amber-400
    description: "This trait shows how you make decisions. Thinking types prioritize logic, consistency, and objective criteria, while Feeling types emphasize values, harmony, and the impact on people when making choices."
  },
  "J-P": {
    title: "External Orientation",
    leftLabel: "Judging",
    rightLabel: "Perceiving",
    lightColor: "#EC4899", // Pink-600
    darkColor: "#F472B6", // Pink-400
    description: "This trait reflects how you approach structure and planning. Judging types prefer organization, schedules, and closure, while Perceiving types value flexibility, spontaneity, and keeping options open."
  }
};

