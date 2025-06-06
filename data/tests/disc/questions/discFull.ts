import { DISCQuestionsData } from '@/types/tests/disc/testQuestions';
import { DISC_TEST_ID } from '@/lib/constants';
// DISC Assessment Questions Data
export const discQuestionData: DISCQuestionsData = {
  id: DISC_TEST_ID,
  totalQuestions: 6,
  test_name: 'DISC Assessment',
  questions: [
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
  ]
};