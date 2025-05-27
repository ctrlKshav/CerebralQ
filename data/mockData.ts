import { ProfileData } from '@/types/profileTypes';

export const profileData: ProfileData = {
  user: {
    id: 1,
    username: 'Jane Cooper',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    bio: 'Psychology enthusiast and software engineer interested in understanding human behavior and personality patterns.',
    joinDate: 'October 2023',
  },
  proficiencyLevel: 'Advanced',
  isInsider: true,
  assessmentResults: [
    { type: 'MBTI', result: 'INTJ', displayName: 'MBTI' },
    { type: 'DISC', result: 'DC', displayName: 'DISC' },
    { type: 'OCEAN', result: 'RCOEI', displayName: 'OCEAN' },
    { type: 'HEXACO', result: 'ACHEX', displayName: 'HEXACO' },
  ],
  mbtiResult: {
    type: 'INTJ',
    title: 'The Architect',
    description: 'INTJs are strategic, innovative thinkers with a talent for logical analysis and systems design. They value intelligence and knowledge, and typically have high standards for themselves and others.',
    characteristics: [
      'Strategic and long-term thinker',
      'Independent and decisive',
      'Driven by logic and reason',
      'Values efficiency and effectiveness',
    ],
    dimensions: {
      ie: 25, // 75% Introversion
      sn: 75, // 75% Intuition
      tf: 15, // 85% Thinking
      jp: 30, // 70% Judging
    },
    cognitiveFunctions: {
      dominant: {
        code: 'Ni',
        name: 'Introverted Intuition',
        strength: 90,
      },
      auxiliary: {
        code: 'Te',
        name: 'Extraverted Thinking',
        strength: 75,
      },
      tertiary: {
        code: 'Fi',
        name: 'Introverted Feeling',
        strength: 40,
      },
      inferior: {
        code: 'Se',
        name: 'Extraverted Sensing',
        strength: 25,
      },
    },
    updatedAt: 'June 12, 2023',
  },
  discResult: {
    type: 'DC',
    title: 'The Challenger',
    description: 'With a DC profile, you display a strong emphasis on achieving results and overcoming challenges. You are direct, analytical and focused on getting things done correctly and efficiently.',
    factors: {
      dominance: 85,
      influence: 35,
      steadiness: 30,
      conscientiousness: 75,
    },
    characteristics: [
      'Results-oriented and focused on achieving goals',
      'Analytical and detail-oriented approach to problems',
      'Direct communication style, values accuracy',
      'Drives change and expects high standards',
    ],
    strengths: [
      'Excellent problem-solving abilities',
      'High standards and quality focus',
      'Ability to make tough decisions quickly',
      'Natural leadership in challenging situations',
    ],
    updatedAt: 'May 23, 2023',
  },
  oceanResult: {
    type: 'RCOEI',
    title: 'The Analyst',
    description: 'Your OCEAN profile indicates you are reserved (low Extraversion), detail-oriented (high Conscientiousness), intellectually open (high Openness), empathetic (high Agreeableness), and emotionally stable (low Neuroticism).',
    traits: {
      openness: {
        score: 85,
        level: 'High',
      },
      conscientiousness: {
        score: 90,
        level: 'High',
      },
      extraversion: {
        score: 25,
        level: 'Low',
      },
      agreeableness: {
        score: 70,
        level: 'High',
      },
      neuroticism: {
        score: 15,
        level: 'Low',
      },
    },
    insights: [
      'You appreciate complexity and abstract thinking',
      'Your organizational skills help you complete important tasks',
      'You prefer meaningful one-on-one interactions over large social gatherings',
      'You remain calm under pressure and handle stress effectively',
    ],
    careerMatches: [
      {
        title: 'Research Scientist',
        match: 92,
      },
      {
        title: 'Software Architect',
        match: 88,
      },
      {
        title: 'Business Analyst',
        match: 85,
      },
      {
        title: 'Technical Writer',
        match: 81,
      },
    ],
    updatedAt: 'April 18, 2023',
  },
  hexacoResult: {
    type: 'ACHEX',
    title: 'The Analyst',
    description: 'Your HEXACO profile indicates you are reserved (low Extraversion), detail-oriented (high Conscientiousness), intellectually open (high Openness), empathetic (high Agreeableness), and emotionally stable (low Neuroticism).',
    updatedAt: 'April 18, 2023',
  },
  testHistory: [
    {
      id: '1',
      testType: 'MBTI',
      result: 'INTJ',
      date: '2 days ago',
      status: 'No Change',
    },
    {
      id: '2',
      testType: 'DISC',
      result: 'DC',
      date: '3 weeks ago',
      status: 'Changed',
      previousResult: 'DI',
    },
    {
      id: '3',
      testType: 'OCEAN',
      result: 'RCOEI',
      date: '2 months ago',
      status: 'No Change',
    },
    {
      id: '4',
      testType: 'HEXACO',
      result: 'ACHEX',
      date: '3 months ago',
      status: 'New',
    },
  ],
  insights: {
    strengths: {
      title: 'Key Strengths',
      items: [
        'Strategic thinking and planning',
        'Analytical problem-solving',
        'Independent work ethic',
      ],
    },
    weaknesses: {
      title: 'Growth Areas',
      items: [
        'Emotional expression and empathy',
        'Social adaptability in group settings',
        'Flexibility with unexpected changes',
      ],
    },
    careerCompatibility: {
      requirements: [
        'Strategic planning and systems thinking',
        'Independent problem-solving',
        'Intellectual challenge and innovation',
      ],
    },
    relationshipInsights: {
      compatibleTypes: ['ENFP', 'ENTP', 'INFP'],
      challengingTypes: ['ESFJ', 'ESTJ', 'ISFP'],
      approach: [
        'Loyal and committed once trust is established',
        'Values intellectual connection and shared goals',
        'Prefers quality interaction over quantity',
      ],
    },
  },
  recommendedTests: [
    {
      id: '1',
      title: 'Enneagram Assessment',
      description: 'Discover your core motivations and fears',
      icon: 'psychology',
      backgroundColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      accentColor: 'bg-indigo-500 text-indigo-500',
      borderColor: 'border-indigo-100 dark:border-indigo-800',
    },
    {
      id: '2',
      title: 'Emotional Intelligence (EQ)',
      description: 'Measure your emotional awareness and management',
      icon: 'heart-pulse',
      backgroundColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      accentColor: 'bg-emerald-500 text-emerald-500',
      borderColor: 'border-emerald-100 dark:border-emerald-800',
    },
    {
      id: '3',
      title: 'Creative Type Assessment',
      description: 'Identify your unique creative thinking style',
      icon: 'creative',
      backgroundColor: 'bg-amber-50 dark:bg-amber-900/20',
      accentColor: 'bg-amber-500 text-amber-500',
      borderColor: 'border-amber-100 dark:border-amber-800',
    },
  ],
};
