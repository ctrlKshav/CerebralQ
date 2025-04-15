import { TestQuestionsData } from "@/types/tests/testQuestions";
export const oceanTestQuestionsData: TestQuestionsData = {
  id: "ipip-neo-120",
  test_name: "IPIP-NEO-120 Personality Inventory",
  totalQuestions: 120,
  "sections": {
    "Extraversion":{
      "id": 1,
      "title": "Extraversion",
      "description": "Measures how outgoing and social you are.",
      "dimension": "extraversion",
      "totalQuestions": 8, 
    },
    "Agreeableness":{
      "id": 2,
      "title": "Agreeableness",
      "description": "Measures how kind and trusting you are.",
      "dimension": "agreeableness",
      "totalQuestions": 9, 
    },
    "Conscientiousness":{
      "id": 3,
      "title": "Conscientiousness",
      "description": "Measures how organized and dependable you are.",
      "dimension": "conscientiousness",
      "totalQuestions": 9, 
    },
    "Neuroticism":{
      "id": 4,
      "title": "Neuroticism",
      "description": "Measures how emotional and anxious you are.",
      "dimension": "neuroticism",
      "totalQuestions": 9, 
    },
    "Openness":{
      "id": 5,
      "title": "Openness",
      "description": "Measures how open to new experiences and ideas you are.",
      "dimension": "openness",
      "totalQuestions": 9, 
    }
  },
  questions: [
    // Extraversion (24 items: 6 facets × 4 items)
    // Facet: Friendliness
    {
      id: "Q1",
      text: "I make friends easily.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q2",
      text: "I feel comfortable around people.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q3",
      text: "I keep others at a distance.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q4",
      text: "I warm up quickly to others.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Gregariousness
    {
      id: "Q5",
      text: "I love large parties.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q6",
      text: "I seek quiet places to be alone.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q7",
      text: "I enjoy being part of a crowd.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q8",
      text: "I avoid crowds.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Assertiveness
    {
      id: "Q9",
      text: "I take charge in group situations.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q10",
      text: "I let others make decisions.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q11",
      text: "I speak up in meetings.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q12",
      text: "I wait for others to lead.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Activity Level
    {
      id: "Q13",
      text: "I am always busy.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q14",
      text: "I prefer a leisurely pace.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q15",
      text: "I do things quickly.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q16",
      text: "I take my time with tasks.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Excitement-Seeking
    {
      id: "Q17",
      text: "I seek adventure.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q18",
      text: "I avoid risky activities.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q19",
      text: "I love thrills.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q20",
      text: "I prefer calm environments.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Cheerfulness
    {
      id: "Q21",
      text: "I radiate joy.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q22",
      text: "I rarely feel happy.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q23",
      text: "I am enthusiastic.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q24",
      text: "I feel down often.",
       
      dimension: "Extraversion",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Agreeableness (24 items: 6 facets × 4 items)
    // Facet: Trust
    {
      id: "Q25",
      text: "I trust others.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q26",
      text: "I believe people are deceitful.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q27",
      text: "I see the best in people.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q28",
      text: "I am suspicious of others' intentions.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Morality
    {
      id: "Q29",
      text: "I am honest in my dealings.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q30",
      text: "I take advantage of others.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q31",
      text: "I act with integrity.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q32",
      text: "I manipulate people to get my way.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Altruism
    {
      id: "Q33",
      text: "I help others without expecting reward.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q34",
      text: "I put my needs above others.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q35",
      text: "I enjoy assisting others.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q36",
      text: "I am indifferent to others' needs.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Cooperation
    {
      id: "Q37",
      text: "I work well with others.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q38",
      text: "I argue to get my way.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q39",
      text: "I compromise to keep peace.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q40",
      text: "I resist group decisions.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Modesty
    {
      id: "Q41",
      text: "I avoid boasting about myself.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q42",
      text: "I show off my achievements.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q43",
      text: "I stay humble.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q44",
      text: "I feel superior to others.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Sympathy
    {
      id: "Q45",
      text: "I feel others' emotions.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q46",
      text: "I am unmoved by others' suffering.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q47",
      text: "I sympathize with those in need.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q48",
      text: "I remain detached from others' problems.",
       
      dimension: "Agreeableness",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Conscientiousness (24 items: 6 facets × 4 items)
    // Facet: Self-Efficacy
    {
      id: "Q49",
      text: "I complete tasks successfully.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q50",
      text: "I doubt my abilities.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q51",
      text: "I feel confident in my skills.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q52",
      text: "I struggle to achieve goals.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Orderliness
    {
      id: "Q53",
      text: "I keep things neat.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q54",
      text: "I leave things messy.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q55",
      text: "I like a tidy environment.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q56",
      text: "I am disorganized.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Dutifulness
    {
      id: "Q57",
      text: "I honor my commitments.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q58",
      text: "I neglect my duties.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q59",
      text: "I feel obligated to do what’s right.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q60",
      text: "I ignore my responsibilities.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Achievement-Striving
    {
      id: "Q61",
      text: "I work hard to succeed.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q62",
      text: "I lack ambition.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q63",
      text: "I aim for excellence.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q64",
      text: "I settle for less.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Self-Discipline
    {
      id: "Q65",
      text: "I stick to my tasks.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q66",
      text: "I get distracted easily.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q67",
      text: "I finish what I start.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q68",
      text: "I procrastinate often.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Cautiousness
    {
      id: "Q69",
      text: "I think before acting.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q70",
      text: "I act impulsively.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q71",
      text: "I weigh my options carefully.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q72",
      text: "I make rash decisions.",
       
      dimension: "Conscientiousness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Neuroticism (24 items: 6 facets × 4 items)
    // Facet: Anxiety
    {
      id: "Q73",
      text: "I worry about things.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q74",
      text: "I am relaxed most of the time.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q75",
      text: "I get nervous easily.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q76",
      text: "I stay calm under pressure.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Anger
    {
      id: "Q77",
      text: "I lose my temper.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q78",
      text: "I rarely get angry.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q79",
      text: "I get irritated easily.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q80",
      text: "I keep my cool.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Depression
    {
      id: "Q81",
      text: "I often feel blue.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q82",
      text: "I am content with my life.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q83",
      text: "I feel sad often.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q84",
      text: "I am generally happy.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Self-Consciousness
    {
      id: "Q85",
      text: "I feel uneasy in social settings.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q86",
      text: "I am comfortable in the spotlight.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q87",
      text: "I worry about what others think.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q88",
      text: "I am at ease with myself.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Immoderation
    {
      id: "Q89",
      text: "I give in to my urges.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q90",
      text: "I control my cravings.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q91",
      text: "I indulge in temptations.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q92",
      text: "I resist impulsive actions.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Vulnerability
    {
      id: "Q93",
      text: "I panic easily.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q94",
      text: "I handle stress well.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q95",
      text: "I feel helpless in crises.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q96",
      text: "I stay composed in tough times.",
       
      dimension: "Neuroticism",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Openness (24 items: 6 facets × 4 items)
    // Facet: Imagination
    {
      id: "Q97",
      text: "I have a vivid imagination.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q98",
      text: "I lack creative ideas.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q99",
      text: "I enjoy fantasizing.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q100",
      text: "I prefer realistic thinking.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Artistic Interests
    {
      id: "Q101",
      text: "I love art and music.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q102",
      text: "I find art boring.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q103",
      text: "I appreciate beauty in art.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q104",
      text: "I am indifferent to aesthetics.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Emotionality
    {
      id: "Q105",
      text: "I experience deep emotions.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q106",
      text: "I rarely notice my feelings.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q107",
      text: "I am in touch with my emotions.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q108",
      text: "I suppress my emotions.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Adventurousness
    {
      id: "Q109",
      text: "I try new things.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q110",
      text: "I stick to familiar routines.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q111",
      text: "I seek out new experiences.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q112",
      text: "I prefer things to stay the same.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Intellect
    {
      id: "Q113",
      text: "I enjoy intellectual challenges.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q114",
      text: "I avoid complex ideas.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q115",
      text: "I love abstract thinking.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q116",
      text: "I find philosophy uninteresting.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Liberalism
    {
      id: "Q117",
      text: "I support progressive ideas.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q118",
      text: "I prefer traditional values.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q119",
      text: "I embrace social change.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    {
      id: "Q120",
      text: "I resist new ideologies.",
       
      dimension: "Openness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
  ],
};
