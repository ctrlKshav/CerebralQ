import { TestQuestionsData, TestSections, TestQuestion } from "@/types/tests/testQuestions";

const sections: TestSections = {
  "Honesty-Humility": {
    id: 1,
    title: "Honesty-Humility",
    description: "Tendency to be fair and genuine in dealing with others",
    dimension: "Honesty-Humility",
    totalQuestions: 10
  },
  "Emotionality": {
    id: 2,
    title: "Emotionality",
    description: "Tendency to experience emotionality and sensitivity",
    dimension: "Emotionality",
    totalQuestions: 10
  },
  "Extraversion": {
    id: 3,
    title: "Extraversion",
    description: "Tendency to seek social stimulation and enjoy company",
    dimension: "Extraversion",
    totalQuestions: 10
  },
  "Agreeableness": {
    id: 4,
    title: "Agreeableness",
    description: "Tendency to be forgiving and tolerant",
    dimension: "Agreeableness",
    totalQuestions: 10
  },
  "Conscientiousness": {
    id: 5,
    title: "Conscientiousness",
    description: "Tendency to be organized and diligent",
    dimension: "Conscientiousness",
    totalQuestions: 10
  },
  "Openness": {
    id: 6,
    title: "Openness to Experience",
    description: "Tendency to appreciate new ideas and experiences",
    dimension: "Openness",
    totalQuestions: 10
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
  // Honesty-Humility (10 items)
  { id: "6", text: "I wouldn't use flattery to get a raise or promotion at work, even if I thought it would succeed.", dimension: "Honesty-Humility", section: 1, facet: "Sincerity", dominantSide: "right" },
  { id: "30", text: "If I want something from someone, I will laugh at that person's worst jokes.", dimension: "Honesty-Humility", section: 1, facet: "Sincerity", dominantSide: "left" },
  { id: "54", text: "I wouldn't pretend to like someone just to get that person to do favors for me.", dimension: "Honesty-Humility", section: 1, facet: "Sincerity", dominantSide: "right" },
  { id: "12", text: "If I knew that I could never get caught, I would be willing to steal a million dollars.", dimension: "Honesty-Humility", section: 1, facet: "Fairness", dominantSide: "left" },
  { id: "36", text: "I would never accept a bribe, even if it were very large.", dimension: "Honesty-Humility", section: 1, facet: "Fairness", dominantSide: "right" },
  { id: "60", text: "I'd be tempted to use counterfeit money, if I were sure I could get away with it.", dimension: "Honesty-Humility", section: 1, facet: "Fairness", dominantSide: "left" },
  { id: "18", text: "Having a lot of money is not especially important to me.", dimension: "Honesty-Humility", section: 1, facet: "Greed-Avoidance", dominantSide: "right" },
  { id: "42", text: "I would get a lot of pleasure from owning expensive luxury goods.", dimension: "Honesty-Humility", section: 1, facet: "Greed-Avoidance", dominantSide: "left" },
  { id: "24", text: "I think that I am entitled to more respect than the average person is.", dimension: "Honesty-Humility", section: 1, facet: "Modesty", dominantSide: "left" },
  { id: "48", text: "I want people to know that I am an important person of high status.", dimension: "Honesty-Humility", section: 1, facet: "Modesty", dominantSide: "left" },

  // Emotionality (10 items)
  { id: "5", text: "I would feel afraid if I had to travel in bad weather conditions.", dimension: "Emotionality", section: 2, facet: "Fearfulness", dominantSide: "right" },
  { id: "29", text: "When it comes to physical danger, I am very fearful.", dimension: "Emotionality", section: 2, facet: "Fearfulness", dominantSide: "right" },
  { id: "53", text: "Even in an emergency I wouldn't feel like panicking.", dimension: "Emotionality", section: 2, facet: "Fearfulness", dominantSide: "left" },
  { id: "11", text: "I sometimes can't help worrying about little things.", dimension: "Emotionality", section: 2, facet: "Anxiety", dominantSide: "right" },
  { id: "35", text: "I worry a lot less than most people do.", dimension: "Emotionality", section: 2, facet: "Anxiety", dominantSide: "left" },
  { id: "17", text: "When I suffer from a painful experience, I need someone to make me feel comfortable.", dimension: "Emotionality", section: 2, facet: "Dependence", dominantSide: "right" },
  { id: "41", text: "I can handle difficult situations without needing emotional support from anyone else.", dimension: "Emotionality", section: 2, facet: "Dependence", dominantSide: "left" },
  { id: "23", text: "I feel like crying when I see other people crying.", dimension: "Emotionality", section: 2, facet: "Sentimentality", dominantSide: "right" },
  { id: "47", text: "I feel strong emotions when someone close to me is going away for a long time.", dimension: "Emotionality", section: 2, facet: "Sentimentality", dominantSide: "right" },
  { id: "59", text: "I remain unemotional even in situations where most people get very sentimental.", dimension: "Emotionality", section: 2, facet: "Sentimentality", dominantSide: "left" },

  // Extraversion (10 items)
  { id: "4", text: "I feel reasonably satisfied with myself overall.", dimension: "Extraversion", section: 3, facet: "Social Self-Esteem", dominantSide: "right" },
  { id: "28", text: "I feel that I am an unpopular person.", dimension: "Extraversion", section: 3, facet: "Social Self-Esteem", dominantSide: "left" },
  { id: "52", text: "I sometimes feel that I am a worthless person.", dimension: "Extraversion", section: 3, facet: "Social Self-Esteem", dominantSide: "left" },
  { id: "10", text: "I rarely express my opinions in group meetings.", dimension: "Extraversion", section: 3, facet: "Social Boldness", dominantSide: "left" },
  { id: "34", text: "In social situations, I'm usually the one who makes the first move.", dimension: "Extraversion", section: 3, facet: "Social Boldness", dominantSide: "right" },
  { id: "58", text: "When I'm in a group of people, I'm often the one who speaks on behalf of the group.", dimension: "Extraversion", section: 3, facet: "Social Boldness", dominantSide: "right" },
  { id: "16", text: "I prefer jobs that involve active social interaction to those that involve working alone.", dimension: "Extraversion", section: 3, facet: "Sociability", dominantSide: "right" },
  { id: "40", text: "The first thing that I always do in a new place is to make friends.", dimension: "Extraversion", section: 3, facet: "Sociability", dominantSide: "right" },
  { id: "22", text: "On most days, I feel cheerful and optimistic.", dimension: "Extraversion", section: 3, facet: "Liveliness", dominantSide: "right" },
  { id: "46", text: "Most people are more upbeat and dynamic than I generally am.", dimension: "Extraversion", section: 3, facet: "Liveliness", dominantSide: "left" },

  // Agreeableness (10 items)
  { id: "3", text: "I rarely hold a grudge, even against people who have badly wronged me.", dimension: "Agreeableness", section: 4, facet: "Forgiveness", dominantSide: "right" },
  { id: "27", text: "My attitude toward people who have treated me badly is 'forgive and forget'.", dimension: "Agreeableness", section: 4, facet: "Forgiveness", dominantSide: "right" },
  { id: "9", text: "People sometimes tell me that I am too critical of others.", dimension: "Agreeableness", section: 4, facet: "Gentleness", dominantSide: "left" },
  { id: "33", text: "I tend to be lenient in judging other people.", dimension: "Agreeableness", section: 4, facet: "Gentleness", dominantSide: "right" },
  { id: "51", text: "Even when people make a lot of mistakes, I rarely say anything negative.", dimension: "Agreeableness", section: 4, facet: "Gentleness", dominantSide: "right" },
  { id: "15", text: "People sometimes tell me that I'm too stubborn.", dimension: "Agreeableness", section: 4, facet: "Flexibility", dominantSide: "left" },
  { id: "39", text: "I am usually quite flexible in my opinions when people disagree with me.", dimension: "Agreeableness", section: 4, facet: "Flexibility", dominantSide: "right" },
  { id: "57", text: "When people tell me that I'm wrong, my first reaction is to argue with them.", dimension: "Agreeableness", section: 4, facet: "Flexibility", dominantSide: "left" },
  { id: "21", text: "People think of me as someone who has a quick temper.", dimension: "Agreeableness", section: 4, facet: "Patience", dominantSide: "left" },
  { id: "45", text: "Most people tend to get angry more quickly than I do.", dimension: "Agreeableness", section: 4, facet: "Patience", dominantSide: "right" },

  // Conscientiousness (10 items)
  { id: "2", text: "I plan ahead and organize things, to avoid scrambling at the last minute.", dimension: "Conscientiousness", section: 5, facet: "Organization", dominantSide: "right" },
  { id: "26", text: "When working, I sometimes have difficulties due to being disorganized.", dimension: "Conscientiousness", section: 5, facet: "Organization", dominantSide: "left" },
  { id: "8", text: "I often push myself very hard when trying to achieve a goal.", dimension: "Conscientiousness", section: 5, facet: "Diligence", dominantSide: "right" },
  { id: "32", text: "I do only the minimum amount of work needed to get by.", dimension: "Conscientiousness", section: 5, facet: "Diligence", dominantSide: "left" },
  { id: "14", text: "When working on something, I don't pay much attention to small details.", dimension: "Conscientiousness", section: 5, facet: "Perfectionism", dominantSide: "left" },
  { id: "38", text: "I always try to be accurate in my work, even at the expense of time.", dimension: "Conscientiousness", section: 5, facet: "Perfectionism", dominantSide: "right" },
  { id: "50", text: "People often call me a perfectionist.", dimension: "Conscientiousness", section: 5, facet: "Perfectionism", dominantSide: "right" },
  { id: "20", text: "I make decisions based on the feeling of the moment rather than on careful thought.", dimension: "Conscientiousness", section: 5, facet: "Prudence", dominantSide: "left" },
  { id: "44", text: "I make a lot of mistakes because I don't think before I act.", dimension: "Conscientiousness", section: 5, facet: "Prudence", dominantSide: "left" },
  { id: "56", text: "I prefer to do whatever comes to mind, rather than stick to a plan.", dimension: "Conscientiousness", section: 5, facet: "Prudence", dominantSide: "left" },

  // Openness to Experience (10 items)
  { id: "1", text: "I would be quite bored by a visit to an art gallery.", dimension: "Openness", section: 6, facet: "Aesthetic Appreciation", dominantSide: "left" },
  { id: "25", text: "If I had the opportunity, I would like to attend a classical music concert.", dimension: "Openness", section: 6, facet: "Aesthetic Appreciation", dominantSide: "right" },
  { id: "7", text: "I'm interested in learning about the history and politics of other countries.", dimension: "Openness", section: 6, facet: "Inquisitiveness", dominantSide: "right" },
  { id: "31", text: "I've never really enjoyed looking through an encyclopedia.", dimension: "Openness", section: 6, facet: "Inquisitiveness", dominantSide: "left" },
  { id: "13", text: "I would enjoy creating a work of art, such as a novel, a song, or a painting.", dimension: "Openness", section: 6, facet: "Creativity", dominantSide: "right" },
  { id: "37", text: "People have often told me that I have a good imagination.", dimension: "Openness", section: 6, facet: "Creativity", dominantSide: "right" },
  { id: "49", text: "I don't think of myself as the artistic or creative type.", dimension: "Openness", section: 6, facet: "Creativity", dominantSide: "left" },
  { id: "19", text: "I think that paying attention to radical ideas is a waste of time.", dimension: "Openness", section: 6, facet: "Unconventionality", dominantSide: "left" },
  { id: "43", text: "I like people who have unconventional views.", dimension: "Openness", section: 6, facet: "Unconventionality", dominantSide: "right" },
  { id: "55", text: "I find it boring to discuss philosophy.", dimension: "Openness", section: 6, facet: "Unconventionality", dominantSide: "left" }
];

export const hexacoTestQuestionsData: TestQuestionsData = {
  id: "hexaco",
  totalQuestions: 60,
  test_name: "HEXACO Personality Inventory",
  sections,
  questions: questions.map(q => ({ ...q, options }))
};