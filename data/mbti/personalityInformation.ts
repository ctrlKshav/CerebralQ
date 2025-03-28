import { PersonalityTypeInsights } from "@/types/tests/mbti";
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

export const personalityInsights: Record<string, PersonalityTypeInsights> = {
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
  INFJ: {
    strengths: {
      title: "Core Strengths",
      icon: "lightbulb",
      points: [
        "Profound insight into people and situations",
        "Strong vision for the future and ability to inspire",
        "Deep compassion and commitment to helping others",
        "Ability to connect abstract ideas into cohesive plans",
        "Resolute determination to pursue meaningful goals",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "Risk of burnout from overextending for others",
        "Tendency to internalize stress and emotions",
        "May struggle with setting boundaries",
        "Can be overly idealistic or perfectionistic",
        "Difficulty dealing with harsh realities or criticism",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Excels in roles requiring vision and purpose",
        "Prefers structured environments with flexibility for creativity",
        "Thrives when helping others grow or solve problems",
        "Needs quiet time to reflect and strategize",
        "Values alignment between work and personal ideals",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks deep, soulful connections with mutual understanding",
        "Shows care through insight and emotional support",
        "Values partners who share their vision and values",
        "May need space to recharge from social demands",
        "Loyal and committed to fostering growth in relationships",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Learning to prioritize self-care and set limits",
        "Embracing practical approaches alongside idealism",
        "Developing resilience to criticism and conflict",
        "Practicing assertiveness in expressing needs",
        "Balancing intuition with attention to present details",
      ],
    },
  },
  INTP: {
    strengths: {
      title: "Core Strengths",
      icon: "cpu",
      points: [
        "Exceptional logical reasoning and analytical skills",
        "Curiosity-driven exploration of ideas and concepts",
        "Innovative problem-solving with unique perspectives",
        "Ability to remain objective and impartial",
        "Deep focus on understanding complex systems",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May struggle with emotional expression or connection",
        "Tendency to procrastinate on practical tasks",
        "Can appear detached or aloof in social settings",
        "Difficulty adhering to routine or authority",
        "May overanalyze rather than act decisively",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in roles requiring intellectual freedom",
        "Prefers independent work over rigid team structures",
        "Excels at dissecting problems and theorizing solutions",
        "Needs space to explore ideas without interruption",
        "Motivated by curiosity and mastery of concepts",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks intellectual compatibility and honest dialogue",
        "Shows care through sharing knowledge and ideas",
        "Values partners who respect their need for independence",
        "May need encouragement to engage emotionally",
        "Loyal but prefers low-maintenance connections",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Developing emotional awareness and communication",
        "Building discipline for practical follow-through",
        "Engaging more actively in social settings",
        "Balancing analysis with timely action",
        "Adapting to structure when necessary",
      ],
    },
  },
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
  ENFP: {
    strengths: {
      title: "Core Strengths",
      icon: "sparkles",
      points: [
        "Boundless enthusiasm and infectious energy",
        "Creative imagination and innovative thinking",
        "Ability to connect with people and inspire them",
        "Open-mindedness and adaptability to new ideas",
        "Strong intuition for seeing possibilities",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May struggle with focus and follow-through",
        "Tendency to overcommit or lose interest quickly",
        "Can be overly sensitive to criticism or conflict",
        "Difficulty with routine or detailed planning",
        "May prioritize excitement over practicality",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in dynamic, creative environments",
        "Prefers flexibility and variety over rigid structure",
        "Excels at brainstorming and generating ideas",
        "Motivated by passion and connection with others",
        "Needs freedom to explore and experiment",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks exciting, meaningful connections with others",
        "Shows love through enthusiasm and encouragement",
        "Values partners who support their dreams and freedom",
        "May need space to pursue individual interests",
        "Warm and loyal when deeply committed",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Developing discipline and task completion skills",
        "Learning to balance spontaneity with planning",
        "Building resilience to setbacks and criticism",
        "Focusing on practical steps to achieve goals",
        "Managing energy to avoid burnout",
      ],
    },
  },
  ENFJ: {
    strengths: {
      title: "Core Strengths",
      icon: "users",
      points: [
        "Natural leadership and ability to inspire others",
        "Deep empathy and understanding of emotions",
        "Strong communication and persuasive skills",
        "Commitment to fostering growth in people",
        "Ability to create harmony and collaboration",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "Tendency to prioritize others’ needs over their own",
        "May struggle with confrontation or saying no",
        "Can be overly sensitive to criticism or rejection",
        "Risk of overextending energy and burning out",
        "Sometimes overly idealistic about outcomes",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in roles involving teamwork and mentorship",
        "Prefers structured environments with a human focus",
        "Excels at motivating and organizing people",
        "Needs opportunities to connect and collaborate",
        "Motivated by making a positive impact",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks warm, supportive, and meaningful connections",
        "Shows love through encouragement and active support",
        "Values partners who appreciate their nurturing nature",
        "May need reassurance and emotional reciprocity",
        "Loyal and dedicated to strengthening bonds",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Learning to set boundaries and prioritize self-care",
        "Developing assertiveness in difficult situations",
        "Balancing idealism with realistic expectations",
        "Practicing detachment from others’ problems",
        "Building resilience to criticism and conflict",
      ],
    },
  },
  ENTP: {
    strengths: {
      title: "Core Strengths",
      icon: "zap",
      points: [
        "Quick wit and innovative problem-solving",
        "Ability to see multiple perspectives and possibilities",
        "Confidence in challenging norms and ideas",
        "Adaptability and resourcefulness in any situation",
        "Engaging and charismatic communication",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May struggle with follow-through on projects",
        "Tendency to resist authority or structure",
        "Can be impatient with routine or slow processes",
        "Risk of overlooking emotional needs of others",
        "Sometimes debates for sport rather than resolution",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in fast-paced, idea-driven environments",
        "Prefers flexibility and autonomy over rigid rules",
        "Excels at brainstorming and tackling challenges",
        "Motivated by intellectual stimulation and debate",
        "Needs variety to stay engaged and productive",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks lively, intellectually stimulating connections",
        "Shows care through playful banter and shared ideas",
        "Values partners who embrace their spontaneity",
        "May need freedom to explore and experiment",
        "Loyal but resists being tied down emotionally",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Developing consistency and project completion",
        "Learning to respect structure when beneficial",
        "Building sensitivity to others’ emotions",
        "Focusing on practical outcomes over endless debate",
        "Balancing independence with commitment",
      ],
    },
  },
  ENTJ: {
    strengths: {
      title: "Core Strengths",
      icon: "award",
      points: [
        "Strong leadership and decisive decision-making",
        "Strategic vision and ability to execute plans",
        "Confidence in tackling complex challenges",
        "Efficiency-driven approach to problem-solving",
        "Ability to inspire and organize others",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May come across as domineering or impatient",
        "Tendency to overlook emotional nuances",
        "Can struggle with work-life balance",
        "Risk of being inflexible or dismissive of others",
        "Sometimes prioritizes goals over relationships",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in leadership roles with clear objectives",
        "Prefers structured, goal-oriented environments",
        "Excels at streamlining processes and driving results",
        "Motivated by achievement and measurable success",
        "Needs authority to implement their vision",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks strong, capable partners with shared ambition",
        "Shows care through action and providing solutions",
        "Values mutual respect and intellectual parity",
        "May need reminders to slow down and connect",
        "Loyal and committed to building a strong partnership",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Developing empathy and emotional awareness",
        "Practicing patience with differing viewpoints",
        "Balancing ambition with personal relationships",
        "Embracing flexibility in plans and approaches",
        "Learning to delegate without micromanaging",
      ],
    },
  },
  ISFP: {
    strengths: {
      title: "Core Strengths",
      icon: "palette",
      points: [
        "Natural artistic talent and aesthetic sensitivity",
        "Ability to live fully in the present moment",
        "Deep empathy and quiet support for others",
        "Flexibility and adaptability to change",
        "Authentic and unpretentious approach to life",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May struggle with long-term planning or goals",
        "Tendency to avoid conflict or assertiveness",
        "Can be overly sensitive to criticism or stress",
        "Difficulty with structure or routine tasks",
        "Sometimes withdraws when overwhelmed",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in hands-on, creative environments",
        "Prefers flexibility and freedom over strict rules",
        "Excels at tasks requiring sensory or artistic skills",
        "Motivated by personal enjoyment and authenticity",
        "Needs space to work at their own pace",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks warm, harmonious connections with others",
        "Shows love through actions and thoughtful gestures",
        "Values partners who respect their need for freedom",
        "May need time alone to recharge emotionally",
        "Loyal and present in meaningful relationships",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Developing planning and organizational skills",
        "Learning to voice needs and stand up for themselves",
        "Building resilience to criticism and stress",
        "Focusing on long-term goals alongside present joy",
        "Balancing independence with collaboration",
      ],
    },
  },
  ISFJ: {
    strengths: {
      title: "Core Strengths",
      icon: "shield",
      points: [
        "Unwavering loyalty and dedication to others",
        "Strong attention to detail and practical skills",
        "Deep compassion and nurturing nature",
        "Ability to create stable, supportive environments",
        "Reliability and consistency in commitments",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May struggle with change or uncertainty",
        "Tendency to prioritize others over themselves",
        "Can be overly sensitive to criticism or conflict",
        "Difficulty asserting personal needs or desires",
        "Sometimes resists new ideas or approaches",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in structured, service-oriented roles",
        "Prefers clear expectations and detailed tasks",
        "Excels at supporting teams and maintaining order",
        "Motivated by appreciation and stability",
        "Needs a calm, predictable environment",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks warm, dependable, and caring connections",
        "Shows love through acts of service and support",
        "Values partners who offer stability and gratitude",
        "May need encouragement to express their own needs",
        "Loyal and committed to loved ones’ well-being",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Learning to embrace change and flexibility",
        "Developing assertiveness and self-advocacy",
        "Building confidence in trying new approaches",
        "Balancing care for others with self-care",
        "Practicing openness to differing perspectives",
      ],
    },
  },
  ISTP: {
    strengths: {
      title: "Core Strengths",
      icon: "wrench",
      points: [
        "Hands-on problem-solving and mechanical aptitude",
        "Calm and collected under pressure",
        "Strong adaptability to changing situations",
        "Keen observation and practical reasoning",
        "Ability to act decisively in the moment",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May struggle with long-term planning or commitment",
        "Tendency to avoid emotional discussions",
        "Can appear detached or disinterested socially",
        "Difficulty with rigid rules or structure",
        "Sometimes acts impulsively without foresight",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in hands-on, dynamic environments",
        "Prefers autonomy and flexibility over supervision",
        "Excels at troubleshooting and quick fixes",
        "Motivated by tangible results and action",
        "Needs freedom to experiment and adapt",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks low-key, practical connections with others",
        "Shows care through actions rather than words",
        "Values partners who respect their independence",
        "May need space to process emotions privately",
        "Loyal but prefers casual, easygoing bonds",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Developing patience for planning and commitment",
        "Learning to engage emotionally with others",
        "Building communication skills for relationships",
        "Balancing spontaneity with foresight",
        "Adapting to structure when necessary",
      ],
    },
  },
  ISTJ: {
    strengths: {
      title: "Core Strengths",
      icon: "check-square",
      points: [
        "Unmatched reliability and sense of duty",
        "Strong organizational and detail-oriented skills",
        "Practical approach to problem-solving",
        "Ability to uphold traditions and standards",
        "Steadfast integrity and consistency",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May resist change or new methods",
        "Tendency to focus on details over the big picture",
        "Can struggle with emotional expression",
        "Difficulty adapting to ambiguity or chaos",
        "Sometimes overly rigid in expectations",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in structured, predictable environments",
        "Prefers clear guidelines and measurable goals",
        "Excels at maintaining systems and processes",
        "Motivated by responsibility and dependability",
        "Needs order and routine to perform best",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks stable, reliable, and respectful connections",
        "Shows care through consistent support and reliability",
        "Values partners who honor commitments and traditions",
        "May need encouragement to open up emotionally",
        "Loyal and dedicated to long-term bonds",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Embracing flexibility and new perspectives",
        "Developing emotional openness and empathy",
        "Learning to see beyond immediate details",
        "Adapting to unexpected changes with ease",
        "Balancing duty with personal fulfillment",
      ],
    },
  },
  ESFP: {
    strengths: {
      title: "Core Strengths",
      icon: "music",
      points: [
        "Infectious energy and enthusiasm for life",
        "Strong ability to connect with others socially",
        "Keen awareness of the present moment",
        "Natural talent for improvisation and adaptability",
        "Warmth and generosity in interactions",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May struggle with planning or long-term focus",
        "Tendency to avoid conflict or serious topics",
        "Can be overly sensitive to criticism or rejection",
        "Difficulty with routine or detailed tasks",
        "Sometimes acts impulsively without reflection",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in lively, people-oriented environments",
        "Prefers flexibility and spontaneity over structure",
        "Excels at engaging others and creating fun",
        "Motivated by immediate enjoyment and connection",
        "Needs variety to stay energized and productive",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks fun, warm, and lively connections",
        "Shows love through shared experiences and affection",
        "Values partners who embrace their spontaneity",
        "May need freedom to explore and enjoy life",
        "Loyal and present in the moment with loved ones",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Developing focus on long-term goals",
        "Learning to handle conflict constructively",
        "Building resilience to criticism and setbacks",
        "Balancing fun with responsibility",
        "Practicing reflection before action",
      ],
    },
  },
  ESFJ: {
    strengths: {
      title: "Core Strengths",
      icon: "handshake",
      points: [
        "Warmth and exceptional interpersonal skills",
        "Strong sense of duty and care for others",
        "Ability to organize people and events effectively",
        "Keen attention to practical needs and details",
        "Natural talent for fostering community and harmony",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May struggle with change or uncertainty",
        "Tendency to seek approval from others",
        "Can be overly sensitive to criticism or conflict",
        "Difficulty prioritizing personal needs over others",
        "Sometimes resists unconventional ideas",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in structured, team-oriented environments",
        "Prefers clear roles and responsibilities",
        "Excels at supporting and coordinating groups",
        "Motivated by appreciation and social harmony",
        "Needs a stable, predictable workplace",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks warm, supportive, and dependable connections",
        "Shows love through care and practical help",
        "Values partners who reciprocate their efforts",
        "May need validation and emotional closeness",
        "Loyal and dedicated to nurturing relationships",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Learning to embrace change and new ideas",
        "Developing independence and self-confidence",
        "Building resilience to criticism and rejection",
        "Balancing care for others with self-care",
        "Practicing assertiveness in expressing needs",
      ],
    },
  },
  ESTP: {
    strengths: {
      title: "Core Strengths",
      icon: "rocket",
      points: [
        "Boldness and quick decision-making in the moment",
        "Strong practical skills and resourcefulness",
        "Ability to thrive under pressure and take risks",
        "Charismatic energy and social confidence",
        "Keen observation of their surroundings",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May struggle with long-term planning or patience",
        "Tendency to overlook emotional impacts",
        "Can be impulsive or dismissive of rules",
        "Difficulty with routine or repetitive tasks",
        "Sometimes prioritizes action over reflection",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in fast-paced, action-oriented environments",
        "Prefers flexibility and hands-on challenges",
        "Excels at solving problems on the fly",
        "Motivated by excitement and tangible results",
        "Needs freedom to act without micromanagement",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks fun, energetic, and spontaneous connections",
        "Shows care through shared adventures and support",
        "Values partners who enjoy their bold nature",
        "May need space to pursue individual thrills",
        "Loyal but prefers low-pressure relationships",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Developing patience and long-term focus",
        "Learning to consider emotional consequences",
        "Building discipline for routine tasks",
        "Balancing action with thoughtful planning",
        "Strengthening emotional connections",
      ],
    },
  },
  ESTJ: {
    strengths: {
      title: "Core Strengths",
      icon: "clipboard",
      points: [
        "Strong organizational and leadership skills",
        "Decisive and efficient decision-making",
        "Commitment to upholding standards and duty",
        "Practical approach to achieving tangible results",
        "Ability to manage people and systems effectively",
      ],
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May come across as rigid or overly controlling",
        "Tendency to overlook emotional needs",
        "Can struggle with adapting to change",
        "Risk of prioritizing tasks over relationships",
        "Sometimes dismissive of unconventional ideas",
      ],
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in structured, results-driven environments",
        "Prefers clear hierarchies and defined roles",
        "Excels at implementing plans and maintaining order",
        "Motivated by achievement and efficiency",
        "Needs authority to enforce standards",
      ],
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks reliable, respectful, and stable connections",
        "Shows care through providing structure and support",
        "Values partners who share their sense of duty",
        "May need reminders to relax and connect emotionally",
        "Loyal and committed to building a strong foundation",
      ],
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Developing flexibility and openness to change",
        "Learning to value emotional perspectives",
        "Balancing work with personal relaxation",
        "Practicing empathy in leadership and relationships",
        "Embracing creativity and new approaches",
      ],
    },
  },
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
