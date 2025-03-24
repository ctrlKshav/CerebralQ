import { ResultData } from "@/types/tests/mbti";

export const sampleResultData: ResultData = {
  username: null,
  personalityType: "ESFJ",
  personalityDescription: {
    alias: "The Consul",
    description:
      "You're a natural people-person who loves bringing everyone together, always making sure the people around you feel cared for and supported. Whether it's hosting a game night for your friends or checking in on your family, you've got a big, warm heart that makes you so special."
  },
  completionDate: new Date().toLocaleDateString(),
  traitScores: {
    "E-I": {
      left: 22,
      right: 8,
      leftPercentage: 73,
      rightPercentage: 27,
      dominant: "left"
    },
    "S-N": {
      left: 20,
      right: 10,
      leftPercentage: 67,
      rightPercentage: 33,
      dominant: "left"
    },
    "T-F": {
      left: 7,
      right: 23,
      leftPercentage: 23,
      rightPercentage: 77,
      dominant: "right"
    },
    "J-P": {
      left: 21,
      right: 9,
      leftPercentage: 70,
      rightPercentage: 30,
      dominant: "left"
    }
  },
  career: {
    summary: "You're a total gem in jobs where you can connect with people and keep things running smoothly—like teaching, nursing, or event planning. You love roles that let you support others and create a sense of community, but you might feel stressed if the work environment feels cold or if you don't get the appreciation you deserve.",
    superpowers: [
      "Building Connections",
      "Staying Organized",
      "Creating Harmony",
      "Being Supportive"
    ],
    growthAreas: [
      "Saying No",
      "Handling Criticism",
      "Taking Time for Yourself",
      "Speaking Up"
    ],
    matches: [
      {
        title: "Teaching",
        matchPercentage: 95,
        description: "Roles that let you connect with others and nurture their growth, using your natural talent for supporting and organizing."
      },
      {
        title: "Nursing",
        matchPercentage: 92,
        description: "Healthcare roles where you can provide compassionate care and create a supportive environment for patients."
      },
      {
        title: "Event Planning",
        matchPercentage: 88,
        description: "Organizing gatherings where your attention to detail and people skills help create memorable experiences."
      },
      {
        title: "Community Organizing",
        matchPercentage: 85,
        description: "Roles that let you build community and support others, bringing people together for a common cause."
      }
    ],
    actionSteps: [
      "Practice saying \"no\" once this week—like \"I'd love to help, but I'm swamped right now.\"",
      "If you get feedback, take a deep breath and think, \"This can help me grow\"—it'll make it easier to handle.",
      "Look for jobs that let you care for others, like being a teacher or a community organizer—your kind of vibe!"
    ]
  },
  relationships: [
    {
      type: "Romantic",
      description: "You're the nurturing, social one in your relationships. You show love by making people feel special, like planning a thoughtful date night for your partner or calling to check in.",
      compatibleTypes: ["ISFP", "ISTP", "INTJ", "INFJ"],
      superpowers: [
        "Being Thoughtful",
        "Creating Harmony"
      ],
      growthAreas: [
        "Taking Time for Yourself",
        "Letting Go of Small Stuff"
      ],
      tips: [
        "Schedule time for yourself - try saying 'I'm going to take an hour to recharge today'",
        "If you're overthinking something, ask yourself, 'Will this matter in a week?'—it'll help you let go",
        "Look for partners who appreciate your caring nature and give back as much as you give"
      ]
    },
    {
      type: "Friendship",
      description: "You're the friend who makes everyone feel at home, always ready to host a fun get-together or check in on your crew. You love having a big group of friends who feel like family.",
      compatibleTypes: ["INFP", "ENFP", "INTP", "ENTP"],
      superpowers: [
        "Being Supportive",
        "Planning Fun Times"
      ],
      growthAreas: [
        "Speaking Up",
        "Trying New Things"
      ],
      tips: [
        "Open up about your own feelings - try saying 'I've been feeling a bit stressed lately'",
        "Plan a new kind of hangout, like a picnic in the park, to mix things up with your crew",
        "Make time for your own hobbies and interests between social events"
      ]
    }
  ],
  growth: {
    summary: "Growth for you is all about becoming an even better version of your amazing self while learning to take care of you too. You're so good at supporting others, but you might forget to give yourself the same love and care you give everyone else.",
    superpowers: [
      "Being Kind",
      "Staying Grounded"
    ],
    growthAreas: [
      "Putting Yourself First",
      "Embracing Change"
    ],
    actionSteps: [
      "Take 10 minutes each day just for you—like sipping coffee while listening to your favorite podcast",
      "Try one new thing this week, like joining a dance class or trying a new recipe—it'll feel exciting!",
      "Write down three things you love about being an ESFJ when you're feeling hard on yourself"
    ],
    milestones: [
      {
        title: "Practice saying no",
        description: "Learn to set boundaries when taking on too many responsibilities for others.",
        completed: false
      },
      {
        title: "Make time for self-care",
        description: "Create regular habits that prioritize your own needs and well-being.",
        completed: false
      },
      {
        title: "Embrace change",
        description: "Try new experiences and approach unfamiliar situations with an open mind.",
        completed: false
      }
    ]
  },
  dailyHabits: {
    summary: "You love a routine that keeps you connected, and it totally works for you—your days are warm and organized, and you feel best when you're taking care of others. Adding a little self-care can make your routine even more special.",
    morningHabits: [
      "Start your morning with a 5-minute gratitude list—like writing down three things you're thankful for today",
      "Add a small, cozy habit—like lighting a candle while you plan your day—to make your morning feel extra nice"
    ],
    eveningHabits: [
      "Wind down with a 10-minute habit, like texting a friend to say goodnight, to relax before bed"
    ]
  },
  communication: {
    summary: "You're warm and friendly when you talk, always making people feel heard and cared for. You love conversations that bring people together, but sometimes you might hold back on sharing your own thoughts to keep the peace.",
    tips: [
      "Share a little more in conversations—like saying \"I really loved that idea because…\" to open up",
      "Ask a friend a fun question, like \"What's been making you smile lately?\"—it'll spark a deeper chat"
    ]
  },
  valuesAndMotivators: {
    summary: "You're all about taking care of the people you love and creating a sense of community. You value connection, kindness, and stability, and you're motivated by making others feel supported while building a life full of love and harmony.",
    coreValues: [
      "Connection",
      "Kindness",
      "Stability"
    ],
    reflectionQuestions: [
      "What's one kind thing you've done lately that made you feel good? How can you do more of that?",
      "When do you feel most connected—like everyone's coming together? How can you make that happen more?",
      "Who do you look up to for their warmth? What ESFJ trait do you share with them?"
    ]
  },
  communityConnection: {
    summary: "You don't have to figure this out alone! Come hang out with other ESFJs and career starters in our growing community. Share your best tips for bringing people together, swap ideas, and let's build something awesome together.",
    suggestions: [
      "Drop your MBTI type in our community chat—say hi to other Consuls who get you!",
      "Join our weekly \"Community Builders\" chat to share your favorite ways to connect with others"
    ]
  },
  actionItems: [
    {
      task: "Practice saying 'no' once this week",
      completed: false,
      description: "Try saying: 'I'd love to help, but I'm swamped right now.'"
    },
    {
      task: "Schedule a solo evening for yourself",
      completed: false,
      description: "Watch your favorite show with a cozy blanket to recharge."
    },
    {
      task: "Plan a new kind of hangout with friends",
      completed: false,
      description: "Try a picnic in the park or another activity outside your usual routine."
    },
    {
      task: "Start a 5-minute gratitude practice",
      completed: false,
      description: "Write down three things you're thankful for each morning."
    },
    {
      task: "Open up to a friend about something you're going through",
      completed: false,
      description: "Try saying: 'I've been feeling a bit stressed lately.'"
    }
  ]
};


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