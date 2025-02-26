export interface TraitDescription {
  title: string;
  leftLabel: string;
  rightLabel: string;
  color: string;
  description: string;
}

export const traitDescriptions: Record<string, TraitDescription> = {
  "E-I": {
    title: "Energy Style",
    leftLabel: "Extraversion",
    rightLabel: "Introversion",
    color: "#4F46E5", // Indigo
    description: "This trait reflects how you interact with the world and where you derive your energy. Extraverts gain energy from social interactions and external activities, while Introverts recharge through solitude and deep internal thought."
  },
  "S-N": {
    title: "Information Processing",
    leftLabel: "Sensing",
    rightLabel: "Intuition",
    color: "#10B981", // Emerald
    description: "This trait indicates how you process information. Sensing types focus on concrete facts and details observed through their five senses, while Intuitive types prefer abstract concepts, patterns, and possibilities."
  },
  "T-F": {
    title: "Decision Making",
    leftLabel: "Thinking",
    rightLabel: "Feeling",
    color: "#F59E0B", // Amber
    description: "This trait shows how you make decisions. Thinking types prioritize logic, consistency, and objective criteria, while Feeling types emphasize values, harmony, and the impact on people when making choices."
  },
  "J-P": {
    title: "External Orientation",
    leftLabel: "Judging",
    rightLabel: "Perceiving",
    color: "#EC4899", // Pink
    description: "This trait reflects how you approach structure and planning. Judging types prefer organization, schedules, and closure, while Perceiving types value flexibility, spontaneity, and keeping options open."
  }
};

