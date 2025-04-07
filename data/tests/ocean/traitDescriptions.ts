import { OceanTraitKey } from "@/types/tests/ocean/traits";

type TraitOption = {
  letter: string;
  name: string;
  description: string;
};

type TraitDescription = {
  title: string;
  left: TraitOption;
  right: TraitOption;
  getDominantTraitDescription: () => string;
};

type PersonalityTraitDescriptions = Record<OceanTraitKey, TraitDescription>;

export const getOceanTraitDescriptions = (
  personalityType: string
): PersonalityTraitDescriptions => {
  return {
    openness: {
      title: "Openness to Experience",
      left: {
        letter: "O-",
        name: "Practical",
        description: "You prefer routine, tradition, and the concrete over abstract concepts.",
      },
      right: {
        letter: "O+",
        name: "Curious",
        description: "You're creative, open to new ideas, and intellectually curious.",
      },
      getDominantTraitDescription: function () {
        const score = personalityType.includes("O+") ? "high" : "low";
        
        if (score === "high") {
          return "You have a vivid imagination and love exploring new ideas. You appreciate art, beauty, and intellectual stimulation. Your curiosity drives you to seek out novel experiences and consider unconventional perspectives.";
        } else {
          return "You value practicality and tradition. You prefer familiar routines and concrete, straightforward approaches. You're likely realistic, conventional, and focused on the present rather than abstract possibilities.";
        }
      },
    },
    conscientiousness: {
      title: "Conscientiousness",
      left: {
        letter: "C-",
        name: "Flexible",
        description: "You're spontaneous, adaptable, and prefer to go with the flow.",
      },
      right: {
        letter: "C+",
        name: "Organized",
        description: "You're disciplined, dutiful, and prefer planning ahead.",
      },
      getDominantTraitDescription: function () {
        const score = personalityType.includes("C+") ? "high" : "low";
        
        if (score === "high") {
          return "You're highly organized, responsible, and self-disciplined. You plan ahead, pay attention to details, and follow through on commitments. Your methodical approach helps you achieve long-term goals and maintain high standards.";
        } else {
          return "You embrace spontaneity and flexibility. You prefer to keep your options open rather than making detailed plans. While you might procrastinate sometimes, your adaptable nature helps you navigate changing circumstances with ease.";
        }
      },
    },
    extraversion: {
      title: "Extraversion",
      left: {
        letter: "E-",
        name: "Reserved",
        description: "You're quiet, thoughtful, and prefer deeper one-on-one interactions.",
      },
      right: {
        letter: "E+",
        name: "Outgoing",
        description: "You're energetic, talkative, and socially confident.",
      },
      getDominantTraitDescription: function () {
        const score = personalityType.includes("E+") ? "high" : "low";
        
        if (score === "high") {
          return "You're energized by social interaction and enjoy being around others. You're assertive, talkative, and likely to take charge in group settings. Your enthusiasm and sociability help you build a wide network of relationships.";
        } else {
          return "You prefer quiet, low-key environments and find solitude energizing. You tend to think before speaking and may enjoy deeper one-on-one conversations rather than large group activities. Your reflective nature gives you valuable insights.";
        }
      },
    },
    agreeableness: {
      title: "Agreeableness",
      left: {
        letter: "A-",
        name: "Challenging",
        description: "You're competitive, skeptical, and willing to challenge others.",
      },
      right: {
        letter: "A+",
        name: "Compassionate",
        description: "You're empathetic, cooperative, and value harmony.",
      },
      getDominantTraitDescription: function () {
        const score = personalityType.includes("A+") ? "high" : "low";
        
        if (score === "high") {
          return "You're naturally compassionate, cooperative, and considerate of others' feelings. You value harmony and tend to give people the benefit of the doubt. Your empathy and kindness foster positive relationships and create a supportive environment.";
        } else {
          return "You're straightforward, analytical, and willing to challenge ideas. You focus on logic over sentiment when making decisions. While you might seem skeptical at times, your objective perspective is valuable for critical thinking and fair evaluation.";
        }
      },
    },
    neuroticism: {
      title: "Emotional Stability",
      left: {
        letter: "N-",
        name: "Resilient",
        description: "You're calm, emotionally stable, and handle stress well.",
      },
      right: {
        letter: "N+",
        name: "Sensitive",
        description: "You're emotionally reactive, perceptive, and experience feelings intensely.",
      },
      getDominantTraitDescription: function () {
        const score = personalityType.includes("N+") ? "high" : "low";
        
        if (score === "high") {
          return "You experience emotions intensely and are highly sensitive to your environment. While you might feel stress and worry more readily, your emotional depth gives you remarkable empathy and self-awareness. You notice nuances others might miss.";
        } else {
          return "You maintain emotional stability even in stressful situations. You're generally calm, relaxed, and less easily disturbed by events. Your resilience allows you to recover quickly from setbacks and maintain perspective during challenging times.";
        }
      },
    },
  };
};
