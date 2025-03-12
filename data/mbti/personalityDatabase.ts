export interface PersonalityInfo {
    alias: string;
    description: string;
    compatibleTypes: string[];
    careerFields: string[];
    strengths: string[];
    challenges: string[];
    percentage: number; // population percentage
    cognitiveStack: string[]; // Cognitive function stack
    traits: {
      extraversion: number;
      sensing: number;
      thinking: number;
      judging: number;
    };
    keywords: string[];
    values: string[];
    learningStyle: string;
    communicationStyle: string;
    workStyle: string;
  }
  
  export const personalityDatabase: Record<string, PersonalityInfo> = {
    "INFP": {
      alias: "The Mediator",
      description: "   Hey, you're an INFP - The Mediator!  \n  You're a poetic, kind-hearted soul always eager to help a good cause, diving into life with imagination and altruism. You thrive on creativity and making a difference.  \n  Sound like you?  \n",
      compatibleTypes: ["ENFJ", "ENTJ", "INFJ", "INTJ"],
      careerFields: ["Writer", "Counselor", "Artist", "Designer"],
      strengths: ["Empathy", "Creativity", "Idealism", "Adaptability"],
      challenges: ["Perfectionism", "Taking criticism", "Practical matters", "Overthinking"],
      percentage: 4.4,
      cognitiveStack: ["Fi", "Ne", "Si", "Te"],
      traits: {
        extraversion: 20,
        sensing: 30,
        thinking: 40,
        judging: 25
      },
      keywords: ["Idealistic", "Empathetic", "Creative", "Authentic"],
      values: ["Personal growth", "Harmony", "Authenticity", "Meaning"],
      learningStyle: "Conceptual and reflective, preferring to understand underlying principles",
      communicationStyle: "Gentle, supportive, and values-focused with a preference for deep one-on-one conversations",
      workStyle: "Independent, creative, and values-driven with a focus on personal meaning in work"
    },
    "INFJ": {
      alias: "The Advocate",
      description: "\n      Hey, you're an INFJ - The Advocate!  \n  You're a quiet visionary who inspires and tires less idealists, diving into causes with deep compassion and insight. You thrive on helping others and dreaming of a better world.  \n  Sound like you?  \n",
      compatibleTypes: ["ENFP", "ENTP", "INFP", "INTJ"],
      careerFields: ["Psychologist", "Nonprofit Leader", "Author", "Spiritual Guide"],
      strengths: ["Insight", "Compassion", "Vision", "Determination"],
      challenges: ["Burnout", "Over-sensitivity", "Perfectionism", "Privacy"],
      percentage: 1.5,
      cognitiveStack: ["Ni", "Fe", "Ti", "Se"],
      traits: {
        extraversion: 25,
        sensing: 25,
        thinking: 35,
        judging: 70
      },
      keywords: ["Insightful", "Principled", "Complex", "Decisive"],
      values: ["Depth", "Purpose", "Integrity", "Connection"],
      learningStyle: "Conceptual and structured, preferring to understand systems and patterns",
      communicationStyle: "Thoughtful and insightful with a focus on meaningful dialogue",
      workStyle: "Purpose-driven and organized, preferring environments aligned with their values"
    },
    "INTP": {
      alias: "The Thinker",
      description: "  Hey, you're an INTP - The Logician!  \n  You're an innovative thinker with an unquenchable thirst for knowledge, diving into theories with curiosity and insight. You thrive on intellectual challenges and exploration.  \n  Sound like you?  \n",
      compatibleTypes: ["ENTJ", "ENFJ", "INTJ", "INFP"],
      careerFields: ["Philosopher", "Software Developer", "Researcher", "Mathematician"],
      strengths: ["Logic", "Curiosity", "Innovation", "Objectivity"],
      challenges: ["Social engagement", "Procrastination", "Emotional expression", "Routine"],
      percentage: 3.3,
      cognitiveStack: ["Ti", "Ne", "Si", "Fe"],
      traits: {
        extraversion: 20,
        sensing: 30,
        thinking: 80,
        judging: 25
      },
      keywords: ["Analytical", "Theoretical", "Logical", "Precise"],
      values: ["Knowledge", "Truth", "Competence", "Understanding"],
      learningStyle: "Conceptual and analytical, preferring to understand logical systems and principles",
      communicationStyle: "Precise and logical with a focus on ideas rather than social niceties",
      workStyle: "Independent, analytical, and innovation-focused with a preference for intellectual freedom"
    },
    "INTJ": {
      alias: "The Architect",
      description: "\n      Hey, you're an INTJ - The Architect!  \n  You're an imaginative strategist with a plan for everything, diving into ideas with visionary thinking and determination. You thrive on innovation and deep insight.  \n  Sound like you?  \n",
      compatibleTypes: ["ENFP", "ENTP", "INFP", "INTP"],
      careerFields: ["Scientist", "Engineer", "Strategist", "Analyst"],
      strengths: ["Strategic thinking", "Independence", "Determination", "Knowledge-seeking"],
      challenges: ["Social situations", "Emotional expression", "Patience with others", "Flexibility"],
      percentage: 2.1,
      cognitiveStack: ["Ni", "Te", "Fi", "Se"],
      traits: {
        extraversion: 15,
        sensing: 25,
        thinking: 85,
        judging: 80
      },
      keywords: ["Strategic", "Independent", "Analytical", "Determined"],
      values: ["Knowledge", "Efficiency", "Achievement", "Competence"],
      learningStyle: "Systemic and conceptual, focusing on theory and long-term implications",
      communicationStyle: "Direct and logical with a focus on efficiency and relevance",
      workStyle: "Strategic, independent, and goal-oriented with high standards for themselves and others"
    },
    "ENFP": {
      alias: "The Campaigner",
      description: "\n      Hey, you're an ENFP - The Campaigner!  \n  You're an enthusiastic, creative spirit who dives into life with passion, always finding a reason to smile. You thrive on social connections and bold ideas.  \n  Sound like you?  \n",
      compatibleTypes: ["INFJ", "INTJ", "ENFJ", "ENTJ"],
      careerFields: ["Entrepreneur", "Actor", "Marketing Specialist", "Journalist"],
      strengths: ["Enthusiasm", "Creativity", "Sociability", "Open-mindedness"],
      challenges: ["Focus", "Follow-through", "Over-sensitivity", "Organization"],
      percentage: 8.1,
      cognitiveStack: ["Ne", "Fi", "Te", "Si"],
      traits: {
        extraversion: 75,
        sensing: 35,
        thinking: 40,
        judging: 30
      },
      keywords: ["Enthusiastic", "Innovative", "Sociable", "Perceptive"],
      values: ["Creativity", "Connection", "Authenticity", "Freedom"],
      learningStyle: "Interactive and exploratory, preferring to learn through discussion and discovery",
      communicationStyle: "Expressive and enthusiastic with a talent for engaging others",
      workStyle: "Creative, adaptable, and people-oriented with a need for variety and meaning"
    },
    "ENFJ": {
      alias: "The Protagonist",
      description: "\n      Hey, you're an ENFJ - The Protagonist!  \n  You're a charismatic leader who inspires others, diving into life with charm and empathy. You thrive on motivating people and making a positive impact.  \n  Sound like you?  \n",
      compatibleTypes: ["INFP", "ISFP", "INTP", "ISTP"],
      careerFields: ["Teacher", "Coach", "HR Manager", "Therapist"],
      strengths: ["Leadership", "Communication", "Empathy", "Reliability"],
      challenges: ["People-pleasing", "Overextending", "Criticism sensitivity", "Idealism"],
      percentage: 2.5,
      cognitiveStack: ["Fe", "Ni", "Se", "Ti"],
      traits: {
        extraversion: 80,
        sensing: 30,
        thinking: 35,
        judging: 75
      },
      keywords: ["Charismatic", "Empathetic", "Inspiring", "Supportive"],
      values: ["Harmony", "Growth", "Community", "Purpose"],
      learningStyle: "Collaborative and structured, preferring group discussions and practical applications",
      communicationStyle: "Warm, persuasive, and emotionally engaging with a focus on connection",
      workStyle: "Team-oriented, organized, and purpose-driven with a focus on uplifting others"
    },
    "ENTP": {
      alias: "The Debater",
      description: "\n      Hey, you're an ENTP - The Debater!  \n  You're a smart, curious thinker who challenges ideas, diving into discussions with wit and adaptability. You thrive on intellectual exploration and innovation.  \n  Sound like you?  \n",
      compatibleTypes: ["INFJ", "INTJ", "ENFP", "ENTJ"],
      careerFields: ["Lawyer", "Inventor", "Consultant", "Comedian"],
      strengths: ["Quick thinking", "Originality", "Confidence", "Versatility"],
      challenges: ["Consistency", "Authority", "Sensitivity", "Follow-through"],
      percentage: 3.2,
      cognitiveStack: ["Ne", "Ti", "Fe", "Si"],
      traits: {
        extraversion: 70,
        sensing: 35,
        thinking: 75,
        judging: 30
      },
      keywords: ["Innovative", "Witty", "Adaptable", "Curious"],
      values: ["Freedom", "Innovation", "Knowledge", "Exploration"],
      learningStyle: "Dynamic and exploratory, preferring debate and hands-on experimentation",
      communicationStyle: "Playful, provocative, and idea-driven with a knack for engaging others",
      workStyle: "Flexible, inventive, and fast-paced with a preference for brainstorming over routine"
    },
    "ENTJ": {
      alias: "The Commander",
      description: "\n      Hey, you're an ENTJ - The Commander!  \n  You're a bold leader who always finds a way, diving into challenges with strong vision and determination. You thrive on taking charge and making things happen.  \n  Sound like you?  \n",
      compatibleTypes: ["INTP", "INFP", "ENTP", "ENFJ"],
      careerFields: ["CEO", "Military Leader", "Project Manager", "Entrepreneur"],
      strengths: ["Leadership", "Efficiency", "Vision", "Decisiveness"],
      challenges: ["Empathy", "Patience", "Work-life balance", "Stubbornness"],
      percentage: 1.8,
      cognitiveStack: ["Te", "Ni", "Se", "Fi"],
      traits: {
        extraversion: 85,
        sensing: 30,
        thinking: 80,
        judging: 85
      },
      keywords: ["Confident", "Strategic", "Driven", "Authoritative"],
      values: ["Achievement", "Efficiency", "Leadership", "Progress"],
      learningStyle: "Structured and goal-oriented, preferring practical applications and results",
      communicationStyle: "Direct, commanding, and focused on clarity and action",
      workStyle: "Organized, results-driven, and authoritative with a focus on long-term success"
    },
    "ISFP": {
      alias: "The Adventurer",
      description: "  Hey, you're an ISFP - The Adventurer!  \n  You're a flexible explorer who's always ready to experience something new, diving into life with creativity and a free spirit. You thrive on artistic expression and spontaneity.  \n  Sound like you?  \n",
      compatibleTypes: ["ENFJ", "ESFJ", "ESTJ", "ENTJ"],
      careerFields: ["Musician", "Chef", "Photographer", "Craftsman"],
      strengths: ["Artistic talent", "Flexibility", "Empathy", "Present-focus"],
      challenges: ["Planning", "Criticism", "Assertiveness", "Long-term goals"],
      percentage: 8.8,
      cognitiveStack: ["Fi", "Se", "Ni", "Te"],
      traits: {
        extraversion: 30,
        sensing: 70,
        thinking: 35,
        judging: 20
      },
      keywords: ["Artistic", "Spontaneous", "Gentle", "Authentic"],
      values: ["Beauty", "Freedom", "Individuality", "Harmony"],
      learningStyle: "Hands-on and experiential, preferring to learn by doing",
      communicationStyle: "Quiet, warm, and action-oriented with a focus on genuine expression",
      workStyle: "Flexible, creative, and independent with a preference for tangible outcomes"
    },
    "ISFJ": {
      alias: "The Defender",
      description: " Hey, you're an ISFJ - The Defender!  \n  You're a warm protector who cares deeply, always ready to defend those you love with kindness and reliability. You thrive on helping others and keeping things harmonious.  \n  Sound like you?  \n",
      compatibleTypes: ["ESFP", "ESTP", "ENFJ", "ENTJ"],
      careerFields: ["Nurse", "Librarian", "Social Worker", "Administrator"],
      strengths: ["Loyalty", "Detail-orientation", "Compassion", "Reliability"],
      challenges: ["Change", "Assertiveness", "Overworking", "Conflict"],
      percentage: 13.8,
      cognitiveStack: ["Si", "Fe", "Ti", "Ne"],
      traits: {
        extraversion: 25,
        sensing: 75,
        thinking: 35,
        judging: 70
      },
      keywords: ["Dependable", "Caring", "Practical", "Loyal"],
      values: ["Duty", "Stability", "Community", "Support"],
      learningStyle: "Practical and structured, preferring clear instructions and real-world examples",
      communicationStyle: "Warm, supportive, and detail-focused with an emphasis on harmony",
      workStyle: "Organized, diligent, and service-oriented with a focus on consistency"
    },
    "ISTP": {
      alias: "The Virtuoso",
      description: "    Hey, you're an ISTP - The Virtuoso!  \n  You're a bold experimenter who masters all kinds of tools, diving into projects with practical skill and curiosity. You thrive on flexibility and hands-on problem-solving.  \n  Sound like you?  \n",
      compatibleTypes: ["ENFJ", "ESFJ", "ENTJ", "ESTJ"],
      careerFields: ["Mechanic", "Pilot", "Athlete", "Technician"],
      strengths: ["Practicality", "Adaptability", "Problem-solving", "Calmness"],
      challenges: ["Emotional connection", "Long-term planning", "Rules", "Commitment"],
      percentage: 5.4,
      cognitiveStack: ["Ti", "Se", "Ni", "Fe"],
      traits: {
        extraversion: 35,
        sensing: 70,
        thinking: 75,
        judging: 25
      },
      keywords: ["Practical", "Resourceful", "Calm", "Independent"],
      values: ["Freedom", "Competence", "Action", "Efficiency"],
      learningStyle: "Hands-on and experiential, preferring to learn through trial and error",
      communicationStyle: "Direct, concise, and action-focused with minimal emotional embellishment",
      workStyle: "Flexible, practical, and independent with a focus on immediate results"
    },
    "ISTJ": {
      alias: "The Logistician",
      description: "Hey, you're an ISTJ - The Logician!  \n  You're a practical mind who loves structure, organizing details with precision and reliability. You thrive on duty and tradition, preferring a solid plan over uncertainty.  \n  Sound like you?  \n",
      compatibleTypes: ["ESFP", "ESTP", "ISFJ", "ENFJ"],
      careerFields: ["Accountant", "Inspector", "Manager", "Law Enforcement"],
      strengths: ["Responsibility", "Organization", "Integrity", "Practicality"],
      challenges: ["Flexibility", "Emotional expression", "Change", "Creativity"],
      percentage: 11.6,
      cognitiveStack: ["Si", "Te", "Fi", "Ne"],
      traits: {
        extraversion: 20,
        sensing: 80,
        thinking: 70,
        judging: 75
      },
      keywords: ["Reliable", "Organized", "Practical", "Honest"],
      values: ["Duty", "Order", "Integrity", "Stability"],
      learningStyle: "Structured and detail-oriented, preferring clear steps and factual information",
      communicationStyle: "Clear, concise, and fact-based with a focus on practicality",
      workStyle: "Methodical, dependable, and task-focused with a preference for routine"
    },
    "ESFP": {
      alias: "The Entertainer",
      description: "\n      Hey, you're an ESFP - The Entertainer!  \n  You're a spontaneous, energetic soul who dives into life with charm, always ready to explore new experiences. You thrive on bringing joy and never being bored.  \n  Sound like you?  \n",
      compatibleTypes: ["ISFJ", "ISTJ", "ENFP", "ENTP"],
      careerFields: ["Performer", "Event Planner", "Salesperson", "Designer"],
      strengths: ["Spontaneity", "Energy", "Sociability", "Optimism"],
      challenges: ["Planning", "Focus", "Criticism", "Depth"],
      percentage: 8.5,
      cognitiveStack: ["Se", "Fi", "Te", "Ni"],
      traits: {
        extraversion: 80,
        sensing: 75,
        thinking: 40,
        judging: 30
      },
      keywords: ["Energetic", "Spontaneous", "Sociable", "Observant"],
      values: ["Joy", "Freedom", "Connection", "Experience"],
      learningStyle: "Interactive and hands-on, preferring engaging and practical activities",
      communicationStyle: "Exuberant, warm, and engaging with a focus on the present moment",
      workStyle: "Adaptable, people-oriented, and energetic with a need for variety and fun"
    },
    "ESFJ": {
      alias: "The Consul",
      description: "\n      Hey, you're an ESFJ - The Consul!  \n  You're a social caregiver who brings people together, diving into life with warmth and helpfulness. You thrive on harmony and supporting those around you.  \n  Sound like you?  \n",
      compatibleTypes: ["ISFP", "ISTP", "ENFJ", "ENTJ"],
      careerFields: ["Teacher", "Nurse", "Event Coordinator", "Customer Service"],
      strengths: ["Warmth", "Cooperation", "Duty", "Sociability"],
      challenges: ["Change", "Criticism", "Independence", "Over-sensitivity"],
      percentage: 12.3,
      cognitiveStack: ["Fe", "Si", "Ne", "Ti"],
      traits: {
        extraversion: 75,
        sensing: 70,
        thinking: 35,
        judging: 70
      },
      keywords: ["Warm", "Organized", "Supportive", "Sociable"],
      values: ["Harmony", "Duty", "Community", "Tradition"],
      learningStyle: "Practical and collaborative, preferring clear examples and group interaction",
      communicationStyle: "Friendly, attentive, and harmony-focused with a talent for connecting people",
      workStyle: "Organized, team-oriented, and service-driven with a focus on relationships"
    },
    "ESTP": {
      alias: "The Entrepreneur",
      description: "\n      Hey, you're an ESTP - The Entrepreneur!  \n  You're a natural thrill-seeker who dives into the moment, solving problems with quick thinking and hands-on flair. You thrive on spontaneity and adaptability, preferring real-world action over endless debates.  \n  Sound like you?  \n",
      compatibleTypes: ["ISFJ", "ISTJ", "ENFJ", "ENTP"],
      careerFields: ["Salesperson", "Athlete", "Trader", "Emergency Responder"],
      strengths: ["Boldness", "Practicality", "Sociability", "Adaptability"],
      challenges: ["Patience", "Planning", "Sensitivity", "Rules"],
      percentage: 4.3,
      cognitiveStack: ["Se", "Ti", "Fe", "Ni"],
      traits: {
        extraversion: 80,
        sensing: 75,
        thinking: 70,
        judging: 30
      },
      keywords: ["Bold", "Practical", "Charismatic", "Adaptable"],
      values: ["Action", "Freedom", "Excitement", "Competence"],
      learningStyle: "Hands-on and fast-paced, preferring real-time problem-solving",
      communicationStyle: "Direct, energetic, and persuasive with a focus on the here and now",
      workStyle: "Action-oriented, adaptable, and resourceful with a preference for dynamic environments"
    },
    "ESTJ": {
      alias: "The Executive",
      description: "\n      Hey, you're an ESTJ - The Executive!  \n  You're a confident leader who excels at managing people, diving into tasks with efficiency and authority. You thrive on structure and getting things done.  \n  Sound like you?  \n",
      compatibleTypes: ["ISFP", "ISTP", "INTP", "ENFJ"],
      careerFields: ["Manager", "Judge", "Supervisor", "Business Owner"],
      strengths: ["Orderliness", "Leadership", "Reliability", "Decisiveness"],
      challenges: ["Flexibility", "Empathy", "Relaxation", "Innovation"],
      percentage: 8.7,
      cognitiveStack: ["Te", "Si", "Ne", "Fi"],
      traits: {
        extraversion: 70,
        sensing: 75,
        thinking: 80,
        judging: 85
      },
      keywords: ["Organized", "Practical", "Decisive", "Reliable"],
      values: ["Order", "Duty", "Efficiency", "Tradition"],
      learningStyle: "Structured and practical, preferring clear guidelines and measurable outcomes",
      communicationStyle: "Clear, direct, and authoritative with a focus on facts and results",
      workStyle: "Structured, task-focused, and leadership-driven with a preference for efficiency"
    }
  };