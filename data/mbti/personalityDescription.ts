import { PersonalityDescription } from "@/types/tests/mbti";

export const personalityDescriptions: Record<string, PersonalityDescription> = {
  INFP: {
    alias: "The Mediator",
    description: ` 
  You’re a poetic, kind-hearted soul always eager to help a good cause, diving into life with imagination and altruism. You thrive on creativity and making a difference.  
  Sound like you?  

`,
  },
  INFJ: {
    alias: "The Advocate",
    description: `  You’re a quiet visionary who inspires and tires less idealists, diving into causes with deep compassion and insight. You thrive on helping others and dreaming of a better world.  
  Sound like you?  
`,
  },
  INTJ: {
    alias: "The Architect",
    description: `
  You’re an imaginative strategist with a plan for everything, diving into ideas with visionary thinking and determination. You thrive on innovation and deep insight.  
  Sound like you?  
`,
  },
  INTP: {
    alias: "The Logician",
    description: `
  You’re an innovative thinker with an unquenchable thirst for knowledge, diving into theories with curiosity and insight. You thrive on intellectual challenges and exploration.  
  Sound like you?  
`,
  },
  ISFP: {
    alias: "The Adventurer",
    description: `
  You’re a flexible explorer who’s always ready to experience something new, diving into life with creativity and a free spirit. You thrive on artistic expression and spontaneity.  
  Sound like you?  
`,
  },
  ISFJ: {
    alias: "The Defender",
    description: `
  You’re a warm protector who cares deeply, always ready to defend those you love with kindness and reliability. You thrive on helping others and keeping things harmonious.  
  Sound like you?  

`,
  },
  ISTJ: {
    alias: "The Logistician",
    description: `
  You’re a practical mind who loves structure, organizing details with precision and reliability. You thrive on duty and tradition, preferring a solid plan over uncertainty.  
  Sound like you?  
`,
  },
  ISTP: {
    alias: "The Virtuoso",
    description: `
  You’re a bold experimenter who masters all kinds of tools, diving into projects with practical skill and curiosity. You thrive on flexibility and hands-on problem-solving.  
  Sound like you?  

`,
  },
  ENFP: {
    alias: "The Campaigner",
    description: `
  You’re an enthusiastic, creative spirit who dives into life with passion, always finding a reason to smile. You thrive on social connections and bold ideas.  
  Sound like you?  
`,
  },
  ENFJ: {
    alias: "The Protagonist",
    description: `
  You’re a charismatic leader who inspires others, diving into life with charm and empathy. You thrive on motivating people and making a positive impact.  
  Sound like you?  
`,
  },
  ENTJ: {
    alias: "The Commander",
    description: `
  You’re a bold leader who always finds a way, diving into challenges with strong vision and determination. You thrive on taking charge and making things happen.  
  Sound like you?  
`,
  },
  ENTP: {
    alias: "The Debater",
    description: `
  You’re a smart, curious thinker who challenges ideas, diving into discussions with wit and adaptability. You thrive on intellectual exploration and innovation.  
  Sound like you?  
`,
  },
  ESFP: {
    alias: "The Entertainer",
    description: `
  You’re a spontaneous, energetic soul who dives into life with charm, always ready to explore new experiences. You thrive on bringing joy and never being bored.  
  Sound like you?  
`,
  },
  ESFJ: {
    alias: "The Consul",
    description: `
  You’re a social caregiver who brings people together, diving into life with warmth and helpfulness. You thrive on harmony and supporting those around you.  
  Sound like you?  
`,
  },
  ESTJ: {
    alias: "The Executive",
    description: `
  You’re a confident leader who excels at managing people, diving into tasks with efficiency and authority. You thrive on structure and getting things done.  
  Sound like you?  
`,
  },
  ESTP: {
    alias: "The Entrepreneur",
    description: `
  You’re a natural thrill-seeker who dives into the moment, solving problems with quick thinking and hands-on flair. You thrive on spontaneity and adaptability, preferring real-world action over endless debates.  
  Sound like you?  
`,
  },
};

export function getPersonalityDescription(personalityType: string): PersonalityDescription {
  return personalityDescriptions[personalityType];
}