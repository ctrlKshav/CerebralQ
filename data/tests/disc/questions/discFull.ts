import { DISCGroup, DISCTypeDescription } from '@/types/tests/disc/testQuestions';

// DISC Assessment Questions Data
export const discGroups: DISCGroup[] = [
  {
    id: 1,
    adjectives: [
      { text: 'Charismatic', type: 'Influential' },
      { text: 'Assertive', type: 'Dominant' },
      { text: 'Patient', type: 'Steady' },
      { text: 'Analytical', type: 'Conscientious' }
    ]
  },
  {
    id: 2,
    adjectives: [
      { text: 'Enthusiastic', type: 'Influential' },
      { text: 'Decisive', type: 'Dominant' },
      { text: 'Methodical', type: 'Conscientious' },
      { text: 'Supportive', type: 'Steady' }
    ]
  },
  {
    id: 3,
    adjectives: [
      { text: 'Competitive', type: 'Dominant' },
      { text: 'Reliable', type: 'Steady' },
      { text: 'Outgoing', type: 'Influential' },
      { text: 'Detail-oriented', type: 'Conscientious' }
    ]
  },
  {
    id: 4,
    adjectives: [
      { text: 'Independent', type: 'Dominant' },
      { text: 'Precise', type: 'Conscientious' },
      { text: 'Calm', type: 'Steady' },
      { text: 'Persuasive', type: 'Influential' }
    ]
  },
  {
    id: 5,
    adjectives: [
      { text: 'Loyal', type: 'Steady' },
      { text: 'Sociable', type: 'Influential' },
      { text: 'Organized', type: 'Conscientious' },
      { text: 'Driven', type: 'Dominant' }
    ]
  },
  {
    id: 6,
    adjectives: [
      { text: 'Bold', type: 'Dominant' },
      { text: 'Inspiring', type: 'Influential' },
      { text: 'Understanding', type: 'Steady' },
      { text: 'Systematic', type: 'Conscientious' }
    ]
  },
  // {
  //   id: 7,
  //   adjectives: [
  //     { text: 'Optimistic', type: 'Influential' },
  //     { text: 'Forceful', type: 'Dominant' },
  //     { text: 'Steady', type: 'Steady' },
  //     { text: 'Exact', type: 'Conscientious' }
  //   ]
  // },
  // {
  //   id: 8,
  //   adjectives: [
  //     { text: 'Thorough', type: 'Conscientious' },
  //     { text: 'Gentle', type: 'Steady' },
  //     { text: 'Talkative', type: 'Influential' },
  //     { text: 'Self-assured', type: 'Dominant' }
  //   ]
  // },
  // {
  //   id: 9,
  //   adjectives: [
  //     { text: 'Resolute', type: 'Dominant' },
  //     { text: 'Energetic', type: 'Influential' },
  //     { text: 'Meticulous', type: 'Conscientious' },
  //     { text: 'Dependable', type: 'Steady' }
  //   ]
  // },
  // {
  //   id: 10,
  //   adjectives: [
  //     { text: 'Reassuring', type: 'Steady' },
  //     { text: 'Friendly', type: 'Influential' },
  //     { text: 'Commanding', type: 'Dominant' },
  //     { text: 'Rigorous', type: 'Conscientious' }
  //   ]
  // },
  // {
  //   id: 11,
  //   adjectives: [
  //     { text: 'Engaging', type: 'Influential' },
  //     { text: 'Determined', type: 'Dominant' },
  //     { text: 'Consistent', type: 'Steady' },
  //     { text: 'Careful', type: 'Conscientious' }
  //   ]
  // },
  // {
  //   id: 12,
  //   adjectives: [
  //     { text: 'Trustworthy', type: 'Steady' },
  //     { text: 'Lively', type: 'Influential' },
  //     { text: 'Accurate', type: 'Conscientious' },
  //     { text: 'Strategic', type: 'Dominant' }
  //   ]
  // },
  // {
  //   id: 13,
  //   adjectives: [
  //     { text: 'Authoritative', type: 'Dominant' },
  //     { text: 'Supportive', type: 'Steady' },
  //     { text: 'Outgoing', type: 'Influential' },
  //     { text: 'Structured', type: 'Conscientious' }
  //   ]
  // },
  // {
  //   id: 14,
  //   adjectives: [
  //     { text: 'Persuasive', type: 'Influential' },
  //     { text: 'Exacting', type: 'Conscientious' },
  //     { text: 'Goal-oriented', type: 'Dominant' },
  //     { text: 'Adaptable', type: 'Steady' }
  //   ]
  // },
  // {
  //   id: 15,
  //   adjectives: [
  //     { text: 'Calm', type: 'Steady' },
  //     { text: 'Enthusiastic', type: 'Influential' },
  //     { text: 'Direct', type: 'Dominant' },
  //     { text: 'Planned', type: 'Conscientious' }
  //   ]
  // },
  // {
  //   id: 16,
  //   adjectives: [
  //     { text: 'Sociable', type: 'Influential' },
  //     { text: 'Reliable', type: 'Steady' },
  //     { text: 'Impactful', type: 'Dominant' },
  //     { text: 'Systematic', type: 'Conscientious' }
  //   ]
  // },
  // {
  //   id: 17,
  //   adjectives: [
  //     { text: 'Vibrant', type: 'Influential' },
  //     { text: 'Self-confident', type: 'Dominant' },
  //     { text: 'Thorough', type: 'Conscientious' },
  //     { text: 'Steady', type: 'Steady' }
  //   ]
  // },
  // {
  //   id: 18,
  //   adjectives: [
  //     { text: 'Consistent', type: 'Steady' },
  //     { text: 'Upbeat', type: 'Influential' },
  //     { text: 'Patient', type: 'Steady' },
  //     { text: 'Unyielding', type: 'Dominant' }
  //   ]
  // },
  // {
  //   id: 19,
  //   adjectives: [
  //     { text: 'Adventurous', type: 'Dominant' },
  //     { text: 'Friendly', type: 'Influential' },
  //     { text: 'Disciplined', type: 'Conscientious' },
  //     { text: 'Motivating', type: 'Influential' }
  //   ]
  // },
  // {
  //   id: 20,
  //   adjectives: [
  //     { text: 'Tenacious', type: 'Dominant' },
  //     { text: 'Detailed', type: 'Conscientious' },
  //     { text: 'Understanding', type: 'Steady' },
  //     { text: 'Expressive', type: 'Influential' }
  //   ]
  // },
  // {
  //   id: 21,
  //   adjectives: [
  //     { text: 'Loyal', type: 'Steady' },
  //     { text: 'Dynamic', type: 'Dominant' },
  //     { text: 'Warm', type: 'Steady' },
  //     { text: 'Logical', type: 'Conscientious' }
  //   ]
  // },
  // {
  //   id: 22,
  //   adjectives: [
  //     { text: 'Composed', type: 'Steady' },
  //     { text: 'Intuitive', type: 'Influential' },
  //     { text: 'Precise', type: 'Conscientious' },
  //     { text: 'Radiant', type: 'Influential' }
  //   ]
  // },
  // {
  //   id: 23,
  //   adjectives: [
  //     { text: 'Inviting', type: 'Influential' },
  //     { text: 'Steadfast', type: 'Steady' },
  //     { text: 'Bold', type: 'Dominant' },
  //     { text: 'Detailed', type: 'Conscientious' }
  //   ]
  // },
  // {
  //   id: 24,
  //   adjectives: [
  //     { text: 'Stable', type: 'Steady' },
  //     { text: 'Lively', type: 'Influential' },
  //     { text: 'Thorough', type: 'Conscientious' },
  //     { text: 'Unconventional', type: 'Dominant' }
  //   ]
  // },
  // {
  //   id: 25,
  //   adjectives: [
  //     { text: 'Determined', type: 'Dominant' },
  //     { text: 'Trusting', type: 'Steady' },
  //     { text: 'Accurate', type: 'Conscientious' },
  //     { text: 'Excitable', type: 'Influential' }
  //   ]
  // },
  // {
  //   id: 26,
  //   adjectives: [
  //     { text: 'Driven', type: 'Dominant' },
  //     { text: 'Animated', type: 'Influential' },
  //     { text: 'Reliable', type: 'Steady' },
  //     { text: 'Careful', type: 'Conscientious' }
  //   ]
  // },
  // {
  //   id: 27,
  //   adjectives: [
  //     { text: 'Persuasive', type: 'Influential' },
  //     { text: 'Commanding', type: 'Dominant' },
  //     { text: 'Adaptable', type: 'Steady' },
  //     { text: 'Methodical', type: 'Conscientious' }
  //   ]
  // },
  // {
  //   id: 28,
  //   adjectives: [
  //     { text: 'Systematic', type: 'Conscientious' },
  //     { text: 'Patient', type: 'Steady' },
  //     { text: 'Enthusiastic', type: 'Influential' },
  //     { text: 'Forceful', type: 'Dominant' }
  //   ]
  // }
];

// DISC Type Descriptions
export const discTypeDescriptions: DISCTypeDescription[] = [
  {
    type: 'Dominant',
    title: 'Dominant (D)',
    characteristics: [
      'Decisive and assertive',
      'Results-focused',
      'Direct and confident',
      'Natural leader',
      'Takes initiative'
    ],
    workplaceStrengths: [
      'Leadership roles',
      'Decision-making',
      'Strategic thinking',
      'Goal achievement',
      'Taking charge of situations'
    ],
    description: 'The Dominant personality type is characterized by decisiveness, assertiveness, and a focus on results. People with a dominant personality are often direct, confident, and take initiative. They are natural leaders and are not afraid to take control of a situation. In the workplace, individuals with a dominant personality type thrive in roles that require leadership, decision-making, and the ability to take charge. They are often strategic and goal-oriented, focusing on achieving results.'
  },
  {
    type: 'Influential',
    title: 'Influential (I)',
    characteristics: [
      'Sociable and enthusiastic',
      'Relationship-focused',
      'Outgoing and optimistic',
      'Natural networker',
      'Motivates and inspires others'
    ],
    workplaceStrengths: [
      'Sales and marketing',
      'Customer service',
      'Creative expression',
      'Building connections',
      'Team motivation'
    ],
    description: 'The Influence personality type is characterized by sociability, enthusiasm, and a focus on building relationships. People with an influential personality are often outgoing, optimistic, and enjoy interacting with others. They are natural networkers and are able to motivate and inspire those around them. In the workplace, individuals with an influential personality type excel in roles that require social skills, such as sales, marketing, and customer service. They are often creative and thrive in environments that allow them to express their ideas and build connections with others.'
  },
  {
    type: 'Steady',
    title: 'Steady (S)',
    characteristics: [
      'Patient and empathetic',
      'Cooperation-focused',
      'Supportive and reliable',
      'Values harmony',
      'Good listener'
    ],
    workplaceStrengths: [
      'Teamwork and collaboration',
      'Human resources',
      'Counseling and support',
      'Administrative roles',
      'Conflict resolution'
    ],
    description: 'The Steadiness personality type is characterized by patience, empathy, and a focus on cooperation. People with a steady personality are often supportive, reliable, and value harmony in their relationships. They are good listeners and are able to build trust and create a sense of security in their interactions with others. In the workplace, individuals with a steady personality type excel in roles that require teamwork, empathy, and a steady hand, such as human resources, counseling, or administrative positions. They are often good at resolving conflicts and creating a positive work environment.'
  },
  {
    type: 'Conscientious',
    title: 'Conscientious (C)',
    characteristics: [
      'Precise and organized',
      'Quality-focused',
      'Detail-oriented and analytical',
      'Thorough and methodical',
      'Strives for excellence'
    ],
    workplaceStrengths: [
      'Attention to detail',
      'Accounting and finance',
      'Research and analysis',
      'Project management',
      'Process development'
    ],
    description: 'The Conscientiousness personality type is characterized by precision, organization, and a focus on quality. People with a conscientious personality are often detail-oriented, analytical, and value accuracy in their work. They are thorough and methodical in their approach, and they strive for excellence in everything they do. In the workplace, individuals with a conscientious personality type excel in roles that require attention to detail, such as accounting, research, or project management. They are often able to develop and adhere to processes and standards, ensuring that work is completed to the highest level of quality.'
  }
];