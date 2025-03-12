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
      description: "INFPs are imaginative idealists, guided by their own core values and beliefs. They value creativity, empathy, and personal authenticity. To a Mediator, life's possibilities are both endless and magical. They see potential for good in even the worst of people and events, and are capable of finding connections where others can't.",
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
      description: "INFJs are visionaries and idealists who ooze creative imagination and brilliant ideas. They have a different perspective of the world that allows them to see possibilities and connections that others often miss. They are deep and complex, showing interest in meaningful connections and helping others reach their potential.",
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
      description: "INTPs are innovative inventors with an unquenchable thirst for knowledge. They are logical and objective, valuing precision in their thoughts and language. They love theoretical and abstract concepts and excel at finding logical inconsistencies in arguments or systems. Their cerebral nature drives them to constantly question and analyze everything around them.",
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
      description: "INTJs are analytical problem-solvers who thrive on complex challenges. They are strategic thinkers with a natural talent for analyzing the past and present to predict future outcomes. They value knowledge, competence, and structure, often working methodically toward well-defined goals. Their drive for improvement leads them to constantly refine systems and processes.",
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
      description: "ENFPs are enthusiastic, creative, and sociable free spirits who can find potential and possibilities in anything. They have an infectious enthusiasm that draws others to them. They are perceptive about people and situations and can connect disparate ideas to form novel solutions. Driven by their values and desire to help others, they make supportive friends and inspiring leaders.",
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
      description: "ENFJs are charismatic and inspiring leaders who thrive on helping others grow. They are warm, altruistic, and highly attuned to the emotions and needs of those around them. With a natural ability to connect with people, they often serve as catalysts for positive change, motivating others with their vision and empathy.",
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
      description: "ENTPs are quick-witted and curious innovators who love intellectual sparring. They thrive on exploring new ideas, challenging conventions, and debating possibilities. Their versatility and resourcefulness make them adept at solving problems in creative, unconventional ways, often with a dash of humor.",
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
      description: "ENTJs are bold and decisive leaders who excel at organizing people and resources to achieve ambitious goals. They are strategic, confident, and driven by a desire for efficiency and success. With a natural ability to see the big picture, they thrive in environments where they can implement their vision and lead others to excellence.",
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
      description: "ISFPs are gentle and artistic souls who live in the moment and express themselves through action and creativity. They value individuality and beauty, often finding joy in sensory experiences and hands-on pursuits. Flexible and spontaneous, they bring warmth and authenticity to everything they do.",
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
      description: "ISFJs are nurturing and dependable individuals who prioritize the well-being of others. They are detail-oriented and practical, with a strong sense of duty and tradition. Known for their loyalty and attentiveness, they excel at creating stable, supportive environments for those they care about.",
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
      description: "ISTPs are practical and resourceful problem-solvers who excel at working with their hands and adapting to the moment. They are curious and independent, with a keen ability to analyze and fix things. Their calm demeanor and love for action make them thrive in dynamic, hands-on environments.",
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
      description: "ISTJs are responsible and methodical individuals who value order, tradition, and reliability. They are detail-oriented and practical, with a strong sense of duty that drives them to uphold standards and complete tasks thoroughly. Their grounded nature makes them pillars of stability in any setting.",
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
      description: "ESFPs are lively and spontaneous individuals who bring energy and joy to every moment. They are sociable and observant, with a talent for connecting with others and living in the present. Their enthusiasm and love for sensory experiences make them natural performers and adventurers.",
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
      description: "ESFJs are warm and conscientious individuals who thrive on creating harmony and supporting others. They are sociable and detail-oriented, with a strong sense of duty and a knack for organizing people and events. Their caring nature makes them natural caregivers and community builders.",
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
      description: "ESTPs are bold and energetic risk-takers who thrive on action and immediate results. They are observant and practical, with a talent for navigating challenges in the moment. Their charisma and adaptability make them adept at seizing opportunities and inspiring others to join the ride.",
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
      description: "ESTJs are organized and decisive leaders who excel at managing people and systems. They are practical and grounded, with a strong sense of responsibility and a dedication to upholding standards. Their no-nonsense approach and focus on efficiency make them natural administrators and enforcers of order.",
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