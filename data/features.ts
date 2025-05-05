
import { TestType, Feature, Testimonial, JourneyStep, Statistic } from '../types/features';

export const testTypes: TestType[] = [
  {
    id: 'mbti',
    name: 'MBTI Assessment',
    description: 'Discover your personality type based on the Myers-Briggs Type Indicator, revealing how you perceive the world and make decisions.',
    icon: '🧠',
    color: 'cerebral-purple',
    traits: [
      { name: 'Introversion (I)', description: 'Focus on internal thoughts and feelings', color: 'cerebral-soft-blue' },
      { name: 'Extraversion (E)', description: 'Focus on external objects and people', color: 'cerebral-soft-orange' },
      { name: 'Sensing (S)', description: 'Focus on concrete information', color: 'cerebral-soft-green' },
      { name: 'Intuition (N)', description: 'Focus on patterns and possibilities', color: 'cerebral-soft-purple' }
    ]
  },
  {
    id: 'ocean',
    name: 'OCEAN (Big Five)',
    description: 'Measure the five key dimensions of personality: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.',
    icon: '🌊',
    color: 'cerebral-blue',
    traits: [
      { name: 'Openness', description: 'Inventive and curious vs. consistent and cautious', color: 'cerebral-soft-blue' },
      { name: 'Conscientiousness', description: 'Efficient and organized vs. extravagant and careless', color: 'cerebral-soft-green' },
      { name: 'Extraversion', description: 'Outgoing and energetic vs. solitary and reserved', color: 'cerebral-soft-orange' },
      { name: 'Agreeableness', description: 'Friendly and compassionate vs. critical and rational', color: 'cerebral-soft-yellow' },
      { name: 'Neuroticism', description: 'Sensitive and nervous vs. resilient and confident', color: 'cerebral-soft-purple' }
    ]
  }
];

export const features: Feature[] = [
  {
    id: 'reports',
    title: 'Comprehensive Reports',
    description: 'Receive in-depth analysis of your personality type, with detailed insights and personalized recommendations.',
    icon: '📊'
  },
  {
    id: 'dashboard',
    title: 'Interactive Dashboard',
    description: 'Access a beautiful visualization of your personality traits, strengths, and growth areas.',
    icon: '📱'
  },
  {
    id: 'share',
    title: 'Easy Sharing',
    description: 'Share your personality profile with friends, colleagues, or on social media with just a few clicks.',
    icon: '🔗'
  },
  {
    id: 'progress',
    title: 'Track Your Growth',
    description: 'Monitor how your personality evolves over time with periodic reassessments and progress tracking.',
    icon: '📈'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'The CQ assessment gave me insights about myself I never realized. It\'s transformed how I approach relationships and career choices.',
    author: 'Alex Johnson',
    personalityType: 'INFJ'
  },
  {
    id: '2',
    quote: 'As a manager, having my team take the CQ assessments has dramatically improved our communication and productivity.',
    author: 'Sarah Chen',
    personalityType: 'ENTJ'
  },
  {
    id: '3',
    quote: 'I\'ve tried many personality tests, but CQ\'s detailed reports and beautiful dashboard make it by far the most useful.',
    author: 'Miguel Rodriguez',
    personalityType: 'ISTP'
  }
];

export const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: 'Take the Assessment',
    description: 'Answer a series of thoughtfully designed questions about your preferences and behaviors.',
    icon: '✏️'
  },
  {
    id: 2,
    title: 'Get Your Results',
    description: 'Receive a comprehensive report detailing your personality type and unique traits.',
    icon: '🔍'
  },
  {
    id: 3,
    title: 'Explore Your Dashboard',
    description: 'Interact with visualizations of your personality traits and discover insights about yourself.',
    icon: '📊'
  },
  {
    id: 4,
    title: 'Share and Connect',
    description: 'Share your profile with friends and discover compatibility with others.',
    icon: '🔗'
  }
];

export const statistics: Statistic[] = [
  {
    id: 'users',
    value: '1M+',
    label: 'Active Users',
  },
  {
    id: 'tests',
    value: '5M+',
    label: 'Tests Completed',
  },
  {
    id: 'countries',
    value: '195',
    label: 'Countries',
  },
  {
    id: 'accuracy',
    value: '98%',
    label: 'Accuracy Rate',
  }
];
