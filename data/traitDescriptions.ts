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
    description: "Where you get your energy. Extraverts thrive in social settings and feel energized around others. Introverts need alone time to recharge and often do their best thinking in solitude."
  },
  "S-N": {
    title: "Information Processing",
    leftLabel: "Sensing",
    rightLabel: "Intuition",
    lightColor: "#10B981", // Emerald-600
    darkColor: "#34D399", // Emerald-400
    description: "How you take in the world. Sensing types trust what they can see, touch, and directly experience. Intuitive types read between the lines, spotting patterns and possibilities others might miss."
  },
  "T-F": {
    title: "Decision Making",
    leftLabel: "Thinking",
    rightLabel: "Feeling",
    lightColor: "#F59E0B", // Amber-600
    darkColor: "#FBBF24", // Amber-400
    description: "How you make choices. Thinking types analyze problems logically and value fairness through consistency. Feeling types consider emotional impact and strive for harmony in their decisions."
  },
  "J-P": {
    title: "External Orientation",
    leftLabel: "Judging",
    rightLabel: "Perceiving",
    lightColor: "#EC4899", // Pink-600
    darkColor: "#F472B6", // Pink-400
    description: "How you structure your life. Judging types crave order, plans, and closure. Perceiving types prefer staying flexible, adapting on the fly, and keeping their options open."
  }
};