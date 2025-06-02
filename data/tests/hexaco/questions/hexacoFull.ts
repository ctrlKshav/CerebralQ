import {
  TestQuestionsData,
  TestSections,
  TestQuestion,
} from "@/types/tests/testQuestions";

const sections: TestSections = {
  "Honesty-Humility": {
    id: 1,
    title: "Honesty-Humility",
    description: "Tendency to be fair and genuine in dealing with others",
    dimension: "Honesty-Humility",
    totalQuestions: 10,
  },
  Emotionality: {
    id: 2,
    title: "Emotionality",
    description: "Tendency to experience emotionality and sensitivity",
    dimension: "Emotionality",
    totalQuestions: 10,
  },
  Extraversion: {
    id: 3,
    title: "Extraversion",
    description: "Tendency to seek social stimulation and enjoy company",
    dimension: "Extraversion",
    totalQuestions: 10,
  },
  Agreeableness: {
    id: 4,
    title: "Agreeableness",
    description: "Tendency to be forgiving and tolerant",
    dimension: "Agreeableness",
    totalQuestions: 10,
  },
  Conscientiousness: {
    id: 5,
    title: "Conscientiousness",
    description: "Tendency to be organized and diligent",
    dimension: "Conscientiousness",
    totalQuestions: 10,
  },
  Openness: {
    id: 6,
    title: "Openness to Experience",
    description: "Tendency to appreciate new ideas and experiences",
    dimension: "Openness",
    totalQuestions: 10,
  },
};

const options = [
  { value: "1", label: "Strongly Disagree" },
  { value: "2", label: "Disagree" },
  { value: "3", label: "Neutral" },
  { value: "4", label: "Agree" },
  { value: "5", label: "Strongly Agree" },
];

const questions: TestQuestion[] = [
  // Honesty-Humility
  {
    id: "6",
    text: "I wouldn't use flattery to get a raise or promotion at work, even if I thought it would succeed.",
    dimension: "Honesty-Humility",
    section: 1,
    facet: "Sincerity",
    dominantSide: "right",
  },
  {
    id: "30",
    text: "If I want something from someone, I will laugh at that person's worst jokes.",
    dimension: "Honesty-Humility",
    section: 1,
    facet: "Sincerity",
    dominantSide: "left",
  },
  {
    id: "54",
    text: "I wouldn't pretend to like someone just to get that person to do favors for me.",
    dimension: "Honesty-Humility",
    section: 1,
    facet: "Sincerity",
    dominantSide: "right",
  },
  {
    id: "12",
    text: "If I knew that I could never get caught, I would be willing to steal a million dollars.",
    dimension: "Honesty-Humility",
    section: 1,
    facet: "Fairness",
    dominantSide: "left",
  },
  {
    id: "36",
    text: "I would never accept a bribe, even if it were very large.",
    dimension: "Honesty-Humility",
    section: 1,
    facet: "Fairness",
    dominantSide: "right",
  },
  {
    id: "60",
    text: "I'd be tempted to use counterfeit money, if I were sure I could get away with it.",
    dimension: "Honesty-Humility",
    section: 1,
    facet: "Fairness",
    dominantSide: "left",
  },
  {
    id: "18",
    text: "Having a lot of money is not especially important to me.",
    dimension: "Honesty-Humility",
    section: 1,
    facet: "Greed-Avoidance",
    dominantSide: "right",
  },
  {
    id: "42",
    text: "I would get a lot of pleasure from owning expensive luxury goods.",
    dimension: "Honesty-Humility",
    section: 1,
    facet: "Greed-Avoidance",
    dominantSide: "left",
  },
  {
    id: "24",
    text: "I think that I am entitled to more respect than the average person is.",
    dimension: "Honesty-Humility",
    section: 1,
    facet: "Modesty",
    dominantSide: "left",
  },
  {
    id: "48",
    text: "I want people to know that I am an important person of high status.",
    dimension: "Honesty-Humility",
    section: 1,
    facet: "Modesty",
    dominantSide: "left",
  },

  // Emotionality
  {
    id: "5",
    text: "I would feel afraid if I had to travel in bad weather conditions.",
    dimension: "Emotionality",
    section: 2,
    facet: "Fearfulness",
    dominantSide: "right",
  },
  {
    id: "29",
    text: "When it comes to physical danger, I am very fearful.",
    dimension: "Emotionality",
    section: 2,
    facet: "Fearfulness",
    dominantSide: "right",
  },
  {
    id: "53",
    text: "Even in an emergency I wouldn't feel like panicking.",
    dimension: "Emotionality",
    section: 2,
    facet: "Fearfulness",
    dominantSide: "left",
  },
  {
    id: "11",
    text: "I sometimes can't help worrying about little things.",
    dimension: "Emotionality",
    section: 2,
    facet: "Anxiety",
    dominantSide: "right",
  },
  {
    id: "35",
    text: "I worry a lot less than most people do.",
    dimension: "Emotionality",
    section: 2,
    facet: "Anxiety",
    dominantSide: "left",
  },
  {
    id: "17",
    text: "When I suffer from a painful experience, I need someone to make me feel comfortable.",
    dimension: "Emotionality",
    section: 2,
    facet: "Dependence",
    dominantSide: "right",
  },
  {
    id: "41",
    text: "I can handle difficult situations without needing emotional support from anyone else.",
    dimension: "Emotionality",
    section: 2,
    facet: "Dependence",
    dominantSide: "left",
  },
  {
    id: "23",
    text: "I feel like crying when I see other people crying.",
    dimension: "Emotionality",
    section: 2,
    facet: "Sentimentality",
    dominantSide: "right",
  },
  {
    id: "47",
    text: "I feel strong emotions when someone close to me is going away for a long time.",
    dimension: "Emotionality",
    section: 2,
    facet: "Sentimentality",
    dominantSide: "right",
  },
  {
    id: "59",
    text: "I remain unemotional even in situations where most people get very sentimental.",
    dimension: "Emotionality",
    section: 2,
    facet: "Sentimentality",
    dominantSide: "left",
  },

  // Continue for all other dimensions...
  // Extraversion (10 questions)
  // Agreeableness (10 questions)
  // Conscientiousness (10 questions)
  // Openness to Experience (10 questions)
];

export const hexacoTestQuestionsData: TestQuestionsData = {
  id: "hexaco",
  totalQuestions: 60,
  test_name: "HEXACO Personality Inventory",
  sections,
  questions: questions.map((q) => ({ ...q, options })),
};
