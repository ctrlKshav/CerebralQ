import { OceanTestQuestionsData } from "@/types/tests/testQuestions";

export const bfi44: OceanTestQuestionsData = {
  id: "bfi-44",
  totalQuestions: 44,
  test_name: "Big Five Inventory (BFI-44)",
  sections: {
    neuroticism: {
      id: 1,
      title: "Neuroticism",
      description: "Measures emotional stability and tendency toward negative emotions.",
      dimension: "Neuroticism",
      totalQuestions: 8
    },
    extraversion: {
      id: 2,
      title: "Extraversion",
      description: "Measures sociability, energy, and positive emotions.",
      dimension: "Extraversion",
      totalQuestions: 8
    },
    openness: {
      id: 3,
      title: "Openness",
      description: "Measures openness to new experiences, creativity, and imagination.",
      dimension: "Openness",
      totalQuestions: 10
    },
    agreeableness: {
      id: 4,
      title: "Agreeableness",
      description: "Measures compassion, cooperation, and trust toward others.",
      dimension: "Agreeableness",
      totalQuestions: 9
    },
    conscientiousness: {
      id: 5,
      title: "Conscientiousness",
      description: "Measures organization, responsibility, and dependability.",
      dimension: "Conscientiousness",
      totalQuestions: 9
    }
  },
  questions: [
    {
      id: "Q1",
      text: "I am talkative",
      dimension: "Extraversion",
      facet: "Assertiveness",
      section: 2,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q2",
      text: "I am someone who tends to find fault with others",
      dimension: "Agreeableness",
      facet: "Compliance",
      section: 4,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q3",
      text: "I am someone who does a thorough job",
      dimension: "Conscientiousness",
      facet: "Order",
      section: 5,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q4",
      text: "I am depressed or blue",
      dimension: "Neuroticism",
      facet: "Depression",
      section: 1,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q5",
      text: "I am original and come up with new ideas",
      dimension: "Openness",
      facet: "Ideas",
      section: 3,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q6",
      text: "I am reserved",
      dimension: "Extraversion",
      facet: "Assertiveness",
      section: 2,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q7",
      text: "I am helpful and unselfish with others",
      dimension: "Agreeableness",
      facet: "Altruism",
      section: 4,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q8",
      text: "I am somewhat careless",
      dimension: "Conscientiousness",
      facet: "Order",
      section: 5,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q9",
      text: "I am relaxed and handle stress well",
      dimension: "Neuroticism",
      facet: "Anxiety",
      section: 1,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q10",
      text: "I am curious about many different things",
      dimension: "Openness",
      facet: "Ideas",
      section: 3,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q11",
      text: "I am full of energy",
      dimension: "Extraversion",
      facet: "Activity",
      section: 2,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q12",
      text: "I am someone who starts quarrels with others",
      dimension: "Agreeableness",
      facet: "Compliance",
      section: 4,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q13",
      text: "I am a reliable worker",
      dimension: "Conscientiousness",
      facet: "Self-Discipline",
      section: 5,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q14",
      text: "I am tense",
      dimension: "Neuroticism",
      facet: "Anxiety",
      section: 1,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q15",
      text: "I am ingenious and a deep thinker",
      dimension: "Openness",
      facet: "Ideas",
      section: 3,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q16",
      text: "I am someone who generates a lot of enthusiasm",
      dimension: "Extraversion",
      facet: "Activity",
      section: 2,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q17",
      text: "I am someone who has a forgiving nature",
      dimension: "Agreeableness",
      facet: "Compliance",
      section: 4,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q18",
      text: "I am disorganized",
      dimension: "Conscientiousness",
      facet: "Order",
      section: 5,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q19",
      text: "I am someone who worries a lot",
      dimension: "Neuroticism",
      facet: "Anxiety",
      section: 1,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q20",
      text: "I am someone who has an active imagination",
      dimension: "Openness",
      facet: "Aesthetics",
      section: 3,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q21",
      text: "I am quiet",
      dimension: "Extraversion",
      facet: "Assertiveness",
      section: 2,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q22",
      text: "I am generally trusting",
      dimension: "Agreeableness",
      facet: "Altruism",
      section: 4,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q23",
      text: "I am lazy",
      dimension: "Conscientiousness",
      facet: "Self-Discipline",
      section: 5,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q24",
      text: "I am emotionally stable and not easily upset",
      dimension: "Neuroticism",
      facet: "Depression",
      section: 1,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q25",
      text: "I am inventive",
      dimension: "Openness",
      facet: "Ideas",
      section: 3,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q26",
      text: "I am someone who has an assertive personality",
      dimension: "Extraversion",
      facet: "Assertiveness",
      section: 2,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q27",
      text: "I am cold and aloof",
      dimension: "Agreeableness",
      facet: "Altruism",
      section: 4,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q28",
      text: "I am someone who perseveres until the task is finished",
      dimension: "Conscientiousness",
      facet: "Self-Discipline",
      section: 5,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q29",
      text: "I am moody",
      dimension: "Neuroticism",
      facet: "Depression",
      section: 1,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q30",
      text: "I am someone who values artistic and aesthetic experiences",
      dimension: "Openness",
      facet: "Aesthetics",
      section: 3,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q31",
      text: "I am shy and inhibited",
      dimension: "Extraversion",
      facet: "Assertiveness",
      section: 2,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q32",
      text: "I am considerate and kind to almost everyone",
      dimension: "Agreeableness",
      facet: "Altruism",
      section: 4,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q33",
      text: "I am someone who does things efficiently",
      dimension: "Conscientiousness",
      facet: "Self-Discipline",
      section: 5,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q34",
      text: "I am someone who remains calm in tense situations",
      dimension: "Neuroticism",
      facet: "Anxiety",
      section: 1,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q35",
      text: "I am someone who prefers work that is routine",
      dimension: "Openness",
      facet: "Ideas",
      section: 3,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q36",
      text: "I am outgoing and sociable",
      dimension: "Extraversion",
      facet: "Activity",
      section: 2,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q37",
      text: "I am sometimes rude to others",
      dimension: "Agreeableness",
      facet: "Compliance",
      section: 4,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q38",
      text: "I am someone who makes plans and follows through with them",
      dimension: "Conscientiousness",
      facet: "Self-Discipline",
      section: 5,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q39",
      text: "I am someone who gets nervous easily",
      dimension: "Neuroticism",
      facet: "Anxiety",
      section: 1,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q40",
      text: "I am someone who likes to reflect and play with ideas",
      dimension: "Openness",
      facet: "Ideas",
      section: 3,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q41",
      text: "I am someone who has few artistic interests",
      dimension: "Openness",
      facet: "Aesthetics",
      section: 3,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q42",
      text: "I am someone who likes to cooperate with others",
      dimension: "Agreeableness",
      facet: "Altruism",
      section: 4,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q43",
      text: "I am easily distracted",
      dimension: "Conscientiousness",
      facet: "Self-Discipline",
      section: 5,
      dominantSide: "left",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    },
    {
      id: "Q44",
      text: "I am sophisticated in art, music, or literature",
      dimension: "Openness",
      facet: "Aesthetics",
      section: 3,
      dominantSide: "right",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neither Agree nor Disagree" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" }
      ]
    }
  ]
};