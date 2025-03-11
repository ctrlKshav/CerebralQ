import { PersonalityTypeInsights } from "@/types/tests/mbti";
import { PersonalityDescription } from "@/types/tests/mbti";

export const personalityDescriptions: Record<string, PersonalityDescription> = {
  INFP: {
    alias: "The Mediator",
    description: `   Hey, you’re an INFP - The Mediator!  
  You’re a poetic, kind-hearted soul always eager to help a good cause, diving into life with imagination and altruism. You thrive on creativity and making a difference.  
  Sound like you?  

`,
  },
  INFJ: {
    alias: "The Advocate",
    description: `
      Hey, you’re an INFJ - The Advocate!  
  You’re a quiet visionary who inspires and tires less idealists, diving into causes with deep compassion and insight. You thrive on helping others and dreaming of a better world.  
  Sound like you?  
`,
  },
  INTJ: {
    alias: "The Architect",
    description: `
      Hey, you’re an INTJ - The Architect!  
  You’re an imaginative strategist with a plan for everything, diving into ideas with visionary thinking and determination. You thrive on innovation and deep insight.  
  Sound like you?  
`,
  },
  INTP: {
    alias: "The Logician",
    description: `  Hey, you’re an INTP - The Logician!  
  You’re an innovative thinker with an unquenchable thirst for knowledge, diving into theories with curiosity and insight. You thrive on intellectual challenges and exploration.  
  Sound like you?  
`,
  },
  ISFP: {
    alias: "The Adventurer",
    description: `  Hey, you’re an ISFP - The Adventurer!  
  You’re a flexible explorer who’s always ready to experience something new, diving into life with creativity and a free spirit. You thrive on artistic expression and spontaneity.  
  Sound like you?  
`,
  },
  ISFJ: {
    alias: "The Defender",
    description: ` Hey, you’re an ISFJ - The Defender!  
  You’re a warm protector who cares deeply, always ready to defend those you love with kindness and reliability. You thrive on helping others and keeping things harmonious.  
  Sound like you?  

`,
  },
  ISTJ: {
    alias: "The Logistician",
    description: `Hey, you’re an ISTJ - The Logician!  
  You’re a practical mind who loves structure, organizing details with precision and reliability. You thrive on duty and tradition, preferring a solid plan over uncertainty.  
  Sound like you?  
`,
  },
  ISTP: {
    alias: "The Virtuoso",
    description: `    Hey, you’re an ISTP - The Virtuoso!  
  You’re a bold experimenter who masters all kinds of tools, diving into projects with practical skill and curiosity. You thrive on flexibility and hands-on problem-solving.  
  Sound like you?  

`,
  },
  ENFP: {
    alias: "The Campaigner",
    description: `
      Hey, you’re an ENFP - The Campaigner!  
  You’re an enthusiastic, creative spirit who dives into life with passion, always finding a reason to smile. You thrive on social connections and bold ideas.  
  Sound like you?  
`,
  },
  ENFJ: {
    alias: "The Protagonist",
    description: `
      Hey, you’re an ENFJ - The Protagonist!  
  You’re a charismatic leader who inspires others, diving into life with charm and empathy. You thrive on motivating people and making a positive impact.  
  Sound like you?  
`,
  },
  ENTJ: {
    alias: "The Commander",
    description: `
      Hey, you’re an ENTJ - The Commander!  
  You’re a bold leader who always finds a way, diving into challenges with strong vision and determination. You thrive on taking charge and making things happen.  
  Sound like you?  
`,
  },
  ENTP: {
    alias: "The Debater",
    description: `
      Hey, you’re an ENTP - The Debater!  
  You’re a smart, curious thinker who challenges ideas, diving into discussions with wit and adaptability. You thrive on intellectual exploration and innovation.  
  Sound like you?  
`,
  },
  ESFP: {
    alias: "The Entertainer",
    description: `
      Hey, you’re an ESFP - The Entertainer!  
  You’re a spontaneous, energetic soul who dives into life with charm, always ready to explore new experiences. You thrive on bringing joy and never being bored.  
  Sound like you?  
`,
  },
  ESFJ: {
    alias: "The Consul",
    description: `
      Hey, you’re an ESFJ - The Consul!  
  You’re a social caregiver who brings people together, diving into life with warmth and helpfulness. You thrive on harmony and supporting those around you.  
  Sound like you?  
`,
  },
  ESTJ: {
    alias: "The Executive",
    description: `
      Hey, you’re an ESTJ - The Executive!  
  You’re a confident leader who excels at managing people, diving into tasks with efficiency and authority. You thrive on structure and getting things done.  
  Sound like you?  
`,
  },
  ESTP: {
    alias: "The Entrepreneur",
    description: `
      Hey, you’re an ESTP - The Entrepreneur!  
  You’re a natural thrill-seeker who dives into the moment, solving problems with quick thinking and hands-on flair. You thrive on spontaneity and adaptability, preferring real-world action over endless debates.  
  Sound like you?  
`,
  },
};

// Example detailed insights for each personality type
export const personalityInsights: Record<string, PersonalityTypeInsights> = {
  INTJ: {
    strengths: {
      title: "Core Strengths",
      icon: "lightbulb",
      points: [
        "Strategic thinking and long-term planning",
        "Independent problem-solving with original solutions",
        "Ability to see the big picture and anticipate outcomes",
        "Strong analytical skills and logical reasoning",
        "Disciplined work ethic and determination",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May come across as overly critical or judgmental",
        "Tendency to overlook emotional factors in decision-making",
        "Difficulty expressing feelings and connecting emotionally",
        "Can be perfectionistic to the point of burnout",
        "Sometimes reluctant to change established systems",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in autonomous roles with intellectual challenges",
        "Prefers structured environments with clear objectives",
        "Values efficiency and competence over social dynamics",
        "Excels at creating innovative systems and strategic plans",
        "May need quiet time to process complex information",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks deep, meaningful connections with a select few",
        "Values intellectual compatibility and shared goals",
        "Shows loyalty through consistent actions rather than words",
        "Appreciates partners who respect independence and boundaries",
        "May need encouragement to share thoughts and feelings",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Developing emotional intelligence and empathy",
        "Practicing active listening without immediate problem-solving",
        "Embracing flexibility and adaptability in plans",
        "Being open to input from different perspectives",
        "Finding healthy balance between work and personal life",
      ],
    },
  },
  INFP: {
    strengths: {
      title: "Core Strengths",
      icon: "heart",
      points: [
        "Deep empathy and understanding of others",
        "Strong moral compass and authentic self-expression",
        "Rich creative imagination and artistic abilities",
        "Ability to see unique potential in people and situations",
        "Passionate dedication to meaningful causes",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May struggle with practical day-to-day tasks",
        "Tendency toward perfectionism that inhibits completion",
        "Can take criticism personally and deeply",
        "Sometimes avoids conflict to preserve harmony",
        "May have difficulty with structure and deadlines",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in environments that align with personal values",
        "Works best when given creative freedom and autonomy",
        "Prefers meaningful work over status or financial gain",
        "Benefits from quiet spaces to think and create",
        "Motivated by authentic recognition of contributions",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks deep, authentic connections with genuine people",
        "Shows love through thoughtful gestures and deep listening",
        "Values partners who appreciate their unique perspective",
        "Needs occasional space to process emotions independently",
        "Devoted and loyal when they find the right connection",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Developing practical skills for everyday challenges",
        "Setting realistic expectations and deadlines",
        "Learning to accept constructive criticism",
        "Building resilience and adaptability to change",
        "Finding balance between idealism and practicality",
      ],
    },
  },
  // Add more personality types as needed...
};

// Default insights for types not yet fully defined
export const defaultInsights: PersonalityTypeInsights = {
  strengths: {
    title: "Core Strengths",
    icon: "star",
    points: [
      "Unique combination of traits that provide special perspectives",
      "Natural abilities aligned with your personality preferences",
      "Characteristic approaches that distinguish your interactions",
      "Inherent talents that come naturally to your type",
      "Special capabilities that serve you in various situations",
    ],
  },
  challenges: {
    title: "Potential Challenges",
    icon: "alert-circle",
    points: [
      "Areas where your natural tendencies may create friction",
      "Aspects of life that might require more conscious effort",
      "Potential blind spots in your perception or approach",
      "Situations that may cause stress or discomfort",
      "Tendencies that could benefit from mindful attention",
    ],
  },
  workStyle: {
    title: "Work Style",
    icon: "briefcase",
    points: [
      "Environmental factors that help you perform at your best",
      "Communication approaches that align with your preferences",
      "Project types and roles where you naturally excel",
      "Leadership or teamwork dynamics that suit your style",
      "Productivity patterns characteristic of your type",
    ],
  },
  relationships: {
    title: "Relationship Dynamics",
    icon: "users",
    points: [
      "How you tend to connect with and relate to others",
      "Communication patterns in close relationships",
      "Needs and expectations in personal interactions",
      "Ways you express care and affection",
      "Relationship qualities that help you thrive",
    ],
  },
  growthAreas: {
    title: "Growth Opportunities",
    icon: "trending-up",
    points: [
      "Skills that may complement your natural tendencies",
      "Areas where conscious development yields benefits",
      "Habits that could enhance your effectiveness",
      "Perspectives that broaden your natural worldview",
      "Practices that promote balanced personal growth",
    ],
  },
};

export function getPersonalityInsights(
  personalityType: string
): PersonalityTypeInsights {
  return personalityInsights[personalityType] || defaultInsights;
}
