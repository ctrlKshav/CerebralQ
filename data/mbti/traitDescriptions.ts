export interface TraitDescription {
  title: string;
  leftLabel: string;
  rightLabel: string;
  lightColor: string;
  darkColor: string;
  description: string;
  left: {
    letter: string;
    name: string;
    description: string;
  };
  right: {
    letter: string;
    name: string;
    description: string;
  };
}

export const traitDescriptions: Record<string, TraitDescription> = {
  "E-I": {
    title: "Energy Style",
    leftLabel: "Extraversion",
    rightLabel: "Introversion",
    lightColor: "#4F46E5", // Indigo-600
    darkColor: "#818CF8", // Indigo-400
    description: "Where you get your energy. Extraverts thrive in social settings and feel energized around others. Introverts need alone time to recharge and often do their best thinking in solitude.",
    left: {
      letter: "E",
      name: "Extraversion",
      description:
        "You're energized by social interaction and external activities. You tend to think out loud, enjoy group work, and have a wide social circle.",
    },
    right: {
      letter: "I",
      name: "Introversion",
      description:
        "You recharge through solitude and reflection. You prefer deep one-on-one conversations, think before speaking, and value your private mental space.",
    },
  },
  "S-N": {
    title: "Information Processing",
    leftLabel: "Sensing",
    rightLabel: "Intuition",
    lightColor: "#10B981", // Emerald-600
    darkColor: "#34D399", // Emerald-400
    description: "How you take in the world. Sensing types trust what they can see, touch, and directly experience. Intuitive types read between the lines, spotting patterns and possibilities others might miss.",
    left: {
      letter: "S",
      name: "Sensing",
      description:
        "You focus on concrete facts and details. You trust direct experience, value practical solutions, and prefer to work with established methods.",
    },
    right: {
      letter: "N",
      name: "Intuition",
      description:
        "You look for patterns and possibilities. You're comfortable with abstract concepts, enjoy innovating, and often think about future implications.",
    },
  },
  "T-F": {
    title: "Decision Making",
    leftLabel: "Thinking",
    rightLabel: "Feeling",
    lightColor: "#F59E0B", // Amber-600
    darkColor: "#FBBF24", // Amber-400
    description: "How you make choices. Thinking types analyze problems logically and value fairness through consistency. Feeling types consider emotional impact and strive for harmony in their decisions.",
    left: {
      letter: "T",
      name: "Thinking",
      description:
        "You make decisions based on logic and objective analysis. You value fairness through equality and tend to remain detached when solving problems.",
    },
    right: {
      letter: "F",
      name: "Feeling",
      description:
        "You consider people and special circumstances when making decisions. You value harmony in relationships and consider the personal impact of choices.",
    },
  },
  "J-P": {
    title: "External Orientation",
    leftLabel: "Judging",
    rightLabel: "Perceiving",
    lightColor: "#EC4899", // Pink-600
    darkColor: "#F472B6", // Pink-400
    description: "How you structure your life. Judging types crave order, plans, and closure. Perceiving types prefer staying flexible, adapting on the fly, and keeping their options open.",
    left: {
      letter: "J",
      name: "Judging",
      description:
        "You prefer structure and planning. You like to have things settled, work steadily toward deadlines, and find comfort in order and organization.",
    },
    right: {
      letter: "P",
      name: "Perceiving",
      description:
        "You prefer flexibility and spontaneity. You adapt easily to new information, work in bursts of energy, and enjoy keeping your options open.",
    },
  }
};