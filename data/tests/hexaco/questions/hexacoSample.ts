import { TestQuestionsData, TestSections, TestQuestion } from '@/types/tests/testQuestions';

const sections: TestSections = {
  "Honesty-Humility": {
    id: 1,
    title: "Honesty-Humility",
    description: "Tendency to be fair and genuine in dealing with others",
    dimension: "Honesty-Humility",
    totalQuestions: 2
  },
  "Emotionality": {
    id: 2,
    title: "Emotionality",
    description: "Tendency to experience emotionality and sensitivity",
    dimension: "Emotionality",
    totalQuestions: 2
  },
  "Extraversion": {
    id: 3,
    title: "Extraversion",
    description: "Tendency to seek social stimulation and enjoy company",
    dimension: "Extraversion",
    totalQuestions: 2
  },
  "Agreeableness": {
    id: 4,
    title: "Agreeableness",
    description: "Tendency to be forgiving and tolerant",
    dimension: "Agreeableness",
    totalQuestions: 2
  },
  "Conscientiousness": {
    id: 5,
    title: "Conscientiousness",
    description: "Tendency to be organized and diligent",
    dimension: "Conscientiousness",
    totalQuestions: 2
  },
  "Openness": {
    id: 6,
    title: "Openness to Experience",
    description: "Tendency to appreciate new ideas and experiences",
    dimension: "Openness",
    totalQuestions: 2
  }
};

const options = [
  { value: "1", label: "Strongly Disagree" },
  { value: "2", label: "Disagree" },
  { value: "3", label: "Neutral" },
  { value: "4", label: "Agree" },
  { value: "5", label: "Strongly Agree" }
];

const questions: TestQuestion[] = [
  // Honesty-Humility (2 items)
  { 
    id: "6", 
    text: "I wouldn't use flattery to get a raise or promotion at work, even if I thought it would succeed.", 
    dimension: "Honesty-Humility", 
    section: 1, 
    facet: "Sincerity", 
    dominantSide: "right" 
  },
  { 
    id: "12", 
    text: "If I knew that I could never get caught, I would be willing to steal a million dollars.", 
    dimension: "Honesty-Humility", 
    section: 1, 
    facet: "Fairness", 
    dominantSide: "left" 
  },

  // Emotionality (2 items)
  { 
    id: "5", 
    text: "I would feel afraid if I had to travel in bad weather conditions.", 
    dimension: "Emotionality", 
    section: 2, 
    facet: "Fearfulness", 
    dominantSide: "right" 
  },
  { 
    id: "35", 
    text: "I worry a lot less than most people do.", 
    dimension: "Emotionality", 
    section: 2, 
    facet: "Anxiety", 
    dominantSide: "left" 
  },

  // Extraversion (2 items)
  { 
    id: "16", 
    text: "I prefer jobs that involve active social interaction to those that involve working alone.", 
    dimension: "Extraversion", 
    section: 3, 
    facet: "Sociability", 
    dominantSide: "right" 
  },
  { 
    id: "28", 
    text: "I feel that I am an unpopular person.", 
    dimension: "Extraversion", 
    section: 3, 
    facet: "Social Self-Esteem", 
    dominantSide: "left" 
  },

  // Agreeableness (2 items)
  { 
    id: "3", 
    text: "I rarely hold a grudge, even against people who have badly wronged me.", 
    dimension: "Agreeableness", 
    section: 4, 
    facet: "Forgiveness", 
    dominantSide: "right" 
  },
  { 
    id: "21", 
    text: "People think of me as someone who has a quick temper.", 
    dimension: "Agreeableness", 
    section: 4, 
    facet: "Patience", 
    dominantSide: "left" 
  },

  // Conscientiousness (2 items)
  { 
    id: "2", 
    text: "I plan ahead and organize things, to avoid scrambling at the last minute.", 
    dimension: "Conscientiousness", 
    section: 5, 
    facet: "Organization", 
    dominantSide: "right" 
  },
  { 
    id: "32", 
    text: "I do only the minimum amount of work needed to get by.", 
    dimension: "Conscientiousness", 
    section: 5, 
    facet: "Diligence", 
    dominantSide: "left" 
  },

  // Openness to Experience (2 items)
  { 
    id: "7", 
    text: "I'm interested in learning about the history and politics of other countries.", 
    dimension: "Openness", 
    section: 6, 
    facet: "Inquisitiveness", 
    dominantSide: "right" 
  },
  { 
    id: "55", 
    text: "I find it boring to discuss philosophy.", 
    dimension: "Openness", 
    section: 6, 
    facet: "Unconventionality", 
    dominantSide: "left" 
  }
];

export const hexacoSampleData: TestQuestionsData = {
  id: "hexaco-sample",
  totalQuestions: 12,
  test_name: "HEXACO Personality Inventory (Sample)",
  sections,
  questions: questions.map(q => ({ ...q, options }))
};