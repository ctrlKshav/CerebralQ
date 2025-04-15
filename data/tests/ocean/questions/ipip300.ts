import { TestQuestionsData } from "@/types/tests/testQuestions";

export const oceanTestQuestionsData: TestQuestionsData = {
  id: "ipip-neo-300",
  test_name: "IPIP-NEO-300 Personality Inventory",
  totalQuestions: 300,
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
    // Extraversion (remaining 20 items: 2 facets × 10 items)
    // Facet: Excitement-Seeking (Q101–Q110)

    // Neuroticism (60 items: 6 facets × 10 items)
    // Facet: Anxiety (Q1–Q10)
    {
      id: "Q1",
      text: "I worry about things constantly.",
       
      dimension: "Neuroticism",
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
      text: "I feel anxious in new situations.",
       
      dimension: "Neuroticism",
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
      text: "I am relaxed most of the time.",
       
      dimension: "Neuroticism",
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
      text: "I get nervous easily.",
       
      dimension: "Neuroticism",
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
      id: "Q5",
      text: "I stay calm under pressure.",
       
      dimension: "Neuroticism",
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
      text: "I feel tense often.",
       
      dimension: "Neuroticism",
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
      text: "I rarely feel apprehensive.",
       
      dimension: "Neuroticism",
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
      text: "I am easily startled.",
       
      dimension: "Neuroticism",
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
      id: "Q9",
      text: "I feel secure in most situations.",
       
      dimension: "Neuroticism",
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
      text: "I fret about small details.",
       
      dimension: "Neuroticism",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Anger (Q11–Q20)
    {
      id: "Q11",
      text: "I get angry easily.",
       
      dimension: "Neuroticism",
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
      text: "I lose my temper quickly.",
       
      dimension: "Neuroticism",
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
      id: "Q13",
      text: "I keep my cool in arguments.",
       
      dimension: "Neuroticism",
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
      text: "I feel irritated often.",
       
      dimension: "Neuroticism",
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
      text: "I rarely get upset.",
       
      dimension: "Neuroticism",
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
      text: "I snap at people when frustrated.",
       
      dimension: "Neuroticism",
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
      id: "Q17",
      text: "I stay calm when provoked.",
       
      dimension: "Neuroticism",
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
      text: "I get annoyed by small things.",
       
      dimension: "Neuroticism",
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
      text: "I am patient with others’ mistakes.",
       
      dimension: "Neuroticism",
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
      text: "I feel resentful when slighted.",
       
      dimension: "Neuroticism",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Depression (Q21–Q30)
    {
      id: "Q21",
      text: "I often feel sad.",
       
      dimension: "Neuroticism",
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
      text: "I feel hopeless at times.",
       
      dimension: "Neuroticism",
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
      text: "I am content with my life.",
       
      dimension: "Neuroticism",
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
      text: "I feel down about my future.",
       
      dimension: "Neuroticism",
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
      id: "Q25",
      text: "I enjoy life most days.",
       
      dimension: "Neuroticism",
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
      id: "Q26",
      text: "I feel worthless sometimes.",
       
      dimension: "Neuroticism",
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
      id: "Q27",
      text: "I am generally cheerful.",
       
      dimension: "Neuroticism",
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
      id: "Q28",
      text: "I dwell on my failures.",
       
      dimension: "Neuroticism",
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
      id: "Q29",
      text: "I feel optimistic about life.",
       
      dimension: "Neuroticism",
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
      id: "Q30",
      text: "I feel blue frequently.",
       
      dimension: "Neuroticism",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Self-Consciousness (Q31–Q40)
    {
      id: "Q31",
      text: "I feel shy in social settings.",
       
      dimension: "Neuroticism",
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
      id: "Q32",
      text: "I worry about others’ opinions.",
       
      dimension: "Neuroticism",
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
      id: "Q33",
      text: "I am comfortable in the spotlight.",
       
      dimension: "Neuroticism",
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
      id: "Q34",
      text: "I feel awkward around strangers.",
       
      dimension: "Neuroticism",
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
      id: "Q35",
      text: "I am at ease with myself.",
       
      dimension: "Neuroticism",
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
      id: "Q36",
      text: "I get embarrassed easily.",
       
      dimension: "Neuroticism",
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
      id: "Q37",
      text: "I feel confident in groups.",
       
      dimension: "Neuroticism",
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
      id: "Q38",
      text: "I fear being judged.",
       
      dimension: "Neuroticism",
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
      id: "Q39",
      text: "I am relaxed in conversations.",
       
      dimension: "Neuroticism",
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
      id: "Q40",
      text: "I feel uneasy in public.",
       
      dimension: "Neuroticism",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Immoderation (Q41–Q50)
    {
      id: "Q41",
      text: "I give in to my urges often.",
       
      dimension: "Neuroticism",
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
      id: "Q42",
      text: "I control my cravings well.",
       
      dimension: "Neuroticism",
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
      id: "Q43",
      text: "I indulge in temptations.",
       
      dimension: "Neuroticism",
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
      id: "Q44",
      text: "I resist impulsive purchases.",
       
      dimension: "Neuroticism",
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
      id: "Q45",
      text: "I act on my whims.",
       
      dimension: "Neuroticism",
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
      id: "Q46",
      text: "I restrain my desires.",
       
      dimension: "Neuroticism",
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
      id: "Q47",
      text: "I overindulge in pleasures.",
       
      dimension: "Neuroticism",
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
      id: "Q48",
      text: "I practice moderation in habits.",
       
      dimension: "Neuroticism",
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
      id: "Q49",
      text: "I seek instant gratification.",
       
      dimension: "Neuroticism",
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
      id: "Q50",
      text: "I delay gratification when needed.",
       
      dimension: "Neuroticism",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Vulnerability (Q51–Q60)
    {
      id: "Q51",
      text: "I panic in stressful situations.",
       
      dimension: "Neuroticism",
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
      id: "Q52",
      text: "I handle crises with ease.",
       
      dimension: "Neuroticism",
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
      id: "Q53",
      text: "I feel helpless under pressure.",
       
      dimension: "Neuroticism",
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
      id: "Q54",
      text: "I stay composed in tough times.",
       
      dimension: "Neuroticism",
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
      id: "Q55",
      text: "I crumble in emergencies.",
       
      dimension: "Neuroticism",
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
      id: "Q56",
      text: "I manage stress effectively.",
       
      dimension: "Neuroticism",
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
      id: "Q57",
      text: "I feel overwhelmed by challenges.",
       
      dimension: "Neuroticism",
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
      id: "Q58",
      text: "I remain steady in chaos.",
       
      dimension: "Neuroticism",
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
      id: "Q59",
      text: "I feel fragile when stressed.",
       
      dimension: "Neuroticism",
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
      id: "Q60",
      text: "I cope well with uncertainty.",
       
      dimension: "Neuroticism",
      section: 1,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Extraversion (40 of 60 items: 4 facets × 10 items)
    // Facet: Friendliness (Q61–Q70)
    {
      id: "Q61",
      text: "I make friends easily.",
       
      dimension: "Extraversion",
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
      id: "Q62",
      text: "I feel uneasy with strangers.",
       
      dimension: "Extraversion",
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
      id: "Q63",
      text: "I warm up quickly to others.",
       
      dimension: "Extraversion",
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
      id: "Q64",
      text: "I keep people at a distance.",
       
      dimension: "Extraversion",
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
      id: "Q65",
      text: "I enjoy meeting new people.",
       
      dimension: "Extraversion",
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
      id: "Q66",
      text: "I avoid close relationships.",
       
      dimension: "Extraversion",
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
      id: "Q67",
      text: "I connect with others quickly.",
       
      dimension: "Extraversion",
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
      id: "Q68",
      text: "I am reserved with new acquaintances.",
       
      dimension: "Extraversion",
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
      id: "Q69",
      text: "I am approachable to others.",
       
      dimension: "Extraversion",
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
      id: "Q70",
      text: "I find it hard to open up.",
       
      dimension: "Extraversion",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Gregariousness (Q71–Q80)
    {
      id: "Q71",
      text: "I love being around lots of people.",
       
      dimension: "Extraversion",
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
      id: "Q72",
      text: "I prefer to be alone.",
       
      dimension: "Extraversion",
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
      id: "Q73",
      text: "I enjoy large social gatherings.",
       
      dimension: "Extraversion",
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
      id: "Q74",
      text: "I avoid crowded places.",
       
      dimension: "Extraversion",
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
      id: "Q75",
      text: "I thrive in lively environments.",
       
      dimension: "Extraversion",
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
      id: "Q76",
      text: "I seek quiet spaces often.",
       
      dimension: "Extraversion",
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
      id: "Q77",
      text: "I love the energy of crowds.",
       
      dimension: "Extraversion",
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
      id: "Q78",
      text: "I dislike big parties.",
       
      dimension: "Extraversion",
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
      id: "Q79",
      text: "I enjoy group activities.",
       
      dimension: "Extraversion",
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
      id: "Q80",
      text: "I prefer solitary hobbies.",
       
      dimension: "Extraversion",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Assertiveness (Q81–Q90)
    {
      id: "Q81",
      text: "I take charge in groups.",
       
      dimension: "Extraversion",
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
      id: "Q82",
      text: "I let others lead discussions.",
       
      dimension: "Extraversion",
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
      id: "Q83",
      text: "I speak up confidently.",
       
      dimension: "Extraversion",
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
      id: "Q84",
      text: "I stay quiet in meetings.",
       
      dimension: "Extraversion",
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
      id: "Q85",
      text: "I influence group decisions.",
       
      dimension: "Extraversion",
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
      id: "Q86",
      text: "I avoid taking the lead.",
       
      dimension: "Extraversion",
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
      id: "Q87",
      text: "I express my opinions firmly.",
       
      dimension: "Extraversion",
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
      id: "Q88",
      text: "I defer to others’ ideas.",
       
      dimension: "Extraversion",
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
      id: "Q89",
      text: "I direct group activities.",
       
      dimension: "Extraversion",
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
      id: "Q90",
      text: "I prefer following others.",
       
      dimension: "Extraversion",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Activity Level (Q91–Q100)
    {
      id: "Q91",
      text: "I am always on the go.",
       
      dimension: "Extraversion",
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
      id: "Q92",
      text: "I prefer a slow pace.",
       
      dimension: "Extraversion",
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
      id: "Q93",
      text: "I do things quickly.",
       
      dimension: "Extraversion",
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
      id: "Q94",
      text: "I take my time with tasks.",
       
      dimension: "Extraversion",
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
      id: "Q95",
      text: "I have a lot of energy.",
       
      dimension: "Extraversion",
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
      id: "Q96",
      text: "I tire quickly.",
       
      dimension: "Extraversion",
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
      id: "Q97",
      text: "I juggle many tasks at once.",
       
      dimension: "Extraversion",
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
      id: "Q98",
      text: "I prefer to focus on one thing.",
       
      dimension: "Extraversion",
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
      id: "Q99",
      text: "I maintain a high activity level.",
       
      dimension: "Extraversion",
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
      id: "Q100",
      text: "I need time to rest often.",
       
      dimension: "Extraversion",
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
      id: "Q101",
      text: "I crave thrilling experiences.",
       
      dimension: "Extraversion",
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
      id: "Q102",
      text: "I avoid risky activities.",
       
      dimension: "Extraversion",
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
      id: "Q103",
      text: "I enjoy high-adrenaline sports.",
       
      dimension: "Extraversion",
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
      id: "Q104",
      text: "I prefer calm environments.",
       
      dimension: "Extraversion",
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
      id: "Q105",
      text: "I seek out adventure.",
       
      dimension: "Extraversion",
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
      id: "Q106",
      text: "I dislike taking risks.",
       
      dimension: "Extraversion",
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
      id: "Q107",
      text: "I love intense sensations.",
       
      dimension: "Extraversion",
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
      id: "Q108",
      text: "I steer clear of danger.",
       
      dimension: "Extraversion",
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
      id: "Q109",
      text: "I enjoy spontaneous thrills.",
       
      dimension: "Extraversion",
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
      id: "Q110",
      text: "I avoid unpredictable situations.",
       
      dimension: "Extraversion",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Cheerfulness (Q111–Q120)
    {
      id: "Q111",
      text: "I am usually cheerful.",
       
      dimension: "Extraversion",
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
      id: "Q112",
      text: "I often feel gloomy.",
       
      dimension: "Extraversion",
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
      id: "Q113",
      text: "I radiate positive energy.",
       
      dimension: "Extraversion",
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
      id: "Q114",
      text: "I rarely feel joyful.",
       
      dimension: "Extraversion",
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
      id: "Q115",
      text: "I laugh easily.",
       
      dimension: "Extraversion",
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
      id: "Q116",
      text: "I am often serious.",
       
      dimension: "Extraversion",
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
      id: "Q117",
      text: "I bring enthusiasm to groups.",
       
      dimension: "Extraversion",
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
      id: "Q118",
      text: "I feel downhearted at times.",
       
      dimension: "Extraversion",
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
      id: "Q119",
      text: "I am full of optimism.",
       
      dimension: "Extraversion",
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
      id: "Q120",
      text: "I struggle to stay upbeat.",
       
      dimension: "Extraversion",
      section: 2,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Agreeableness (60 items: 6 facets × 10 items)
    // Facet: Trust (Q121–Q130)
    {
      id: "Q121",
      text: "I believe people are generally honest.",
       
      dimension: "Agreeableness",
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
      id: "Q122",
      text: "I am skeptical of others’ intentions.",
       
      dimension: "Agreeableness",
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
      id: "Q123",
      text: "I trust people easily.",
       
      dimension: "Agreeableness",
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
      id: "Q124",
      text: "I assume people might deceive me.",
       
      dimension: "Agreeableness",
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
      id: "Q125",
      text: "I see the best in others.",
       
      dimension: "Agreeableness",
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
      id: "Q126",
      text: "I am cautious with new people.",
       
      dimension: "Agreeableness",
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
      id: "Q127",
      text: "I believe in others’ good faith.",
       
      dimension: "Agreeableness",
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
      id: "Q128",
      text: "I suspect hidden motives in others.",
       
      dimension: "Agreeableness",
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
      id: "Q129",
      text: "I give people the benefit of the doubt.",
       
      dimension: "Agreeableness",
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
      id: "Q130",
      text: "I am wary of others’ promises.",
       
      dimension: "Agreeableness",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Morality (Q131–Q140)
    {
      id: "Q131",
      text: "I am always honest with others.",
       
      dimension: "Agreeableness",
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
      id: "Q132",
      text: "I sometimes bend the truth.",
       
      dimension: "Agreeableness",
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
      id: "Q133",
      text: "I value fairness in dealings.",
       
      dimension: "Agreeableness",
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
      id: "Q134",
      text: "I might manipulate to get ahead.",
       
      dimension: "Agreeableness",
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
      id: "Q135",
      text: "I act with integrity.",
       
      dimension: "Agreeableness",
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
      id: "Q136",
      text: "I could exploit others for gain.",
       
      dimension: "Agreeableness",
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
      id: "Q137",
      text: "I am straightforward in talks.",
       
      dimension: "Agreeableness",
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
      id: "Q138",
      text: "I may stretch facts to win.",
       
      dimension: "Agreeableness",
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
      id: "Q139",
      text: "I keep my promises faithfully.",
       
      dimension: "Agreeableness",
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
      id: "Q140",
      text: "I might mislead for advantage.",
       
      dimension: "Agreeableness",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Altruism (Q141–Q150)
    {
      id: "Q141",
      text: "I enjoy helping others.",
       
      dimension: "Agreeableness",
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
      id: "Q142",
      text: "I focus on my own needs first.",
       
      dimension: "Agreeableness",
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
      id: "Q143",
      text: "I volunteer to support causes.",
       
      dimension: "Agreeableness",
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
      id: "Q144",
      text: "I rarely assist strangers.",
       
      dimension: "Agreeableness",
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
      id: "Q145",
      text: "I put others’ needs before mine.",
       
      dimension: "Agreeableness",
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
      id: "Q146",
      text: "I prioritize my own goals.",
       
      dimension: "Agreeableness",
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
      id: "Q147",
      text: "I go out of my way to help.",
       
      dimension: "Agreeableness",
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
      id: "Q148",
      text: "I avoid getting involved.",
       
      dimension: "Agreeableness",
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
      id: "Q149",
      text: "I care about others’ well-being.",
       
      dimension: "Agreeableness",
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
      id: "Q150",
      text: "I look out for myself mainly.",
       
      dimension: "Agreeableness",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Cooperation (Q151–Q160)
    {
      id: "Q151",
      text: "I work well with others.",
       
      dimension: "Agreeableness",
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
      id: "Q152",
      text: "I compete rather than cooperate.",
       
      dimension: "Agreeableness",
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
      id: "Q153",
      text: "I compromise in conflicts.",
       
      dimension: "Agreeableness",
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
      id: "Q154",
      text: "I insist on my own way.",
       
      dimension: "Agreeableness",
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
      id: "Q155",
      text: "I value team harmony.",
       
      dimension: "Agreeableness",
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
      id: "Q156",
      text: "I argue to win debates.",
       
      dimension: "Agreeableness",
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
      id: "Q157",
      text: "I share credit with others.",
       
      dimension: "Agreeableness",
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
      id: "Q158",
      text: "I strive to outdo others.",
       
      dimension: "Agreeableness",
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
      id: "Q159",
      text: "I adapt to others’ preferences.",
       
      dimension: "Agreeableness",
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
      id: "Q160",
      text: "I resist yielding in disputes.",
       
      dimension: "Agreeableness",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Modesty (Q161–Q170)
    {
      id: "Q161",
      text: "I avoid boasting about myself.",
       
      dimension: "Agreeableness",
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
      id: "Q162",
      text: "I like to show off my strengths.",
       
      dimension: "Agreeableness",
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
      id: "Q163",
      text: "I downplay my achievements.",
       
      dimension: "Agreeableness",
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
      id: "Q164",
      text: "I enjoy being praised.",
       
      dimension: "Agreeableness",
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
      id: "Q165",
      text: "I feel average compared to others.",
       
      dimension: "Agreeableness",
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
      id: "Q166",
      text: "I think I’m better than most.",
       
      dimension: "Agreeableness",
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
      id: "Q167",
      text: "I let others take the spotlight.",
       
      dimension: "Agreeableness",
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
      id: "Q168",
      text: "I seek recognition for my work.",
       
      dimension: "Agreeableness",
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
      id: "Q169",
      text: "I am humble about my successes.",
       
      dimension: "Agreeableness",
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
      id: "Q170",
      text: "I feel superior to others.",
       
      dimension: "Agreeableness",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Sympathy (Q171–Q180)
    {
      id: "Q171",
      text: "I feel others’ pain deeply.",
       
      dimension: "Agreeableness",
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
      id: "Q172",
      text: "I stay detached from suffering.",
       
      dimension: "Agreeableness",
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
      id: "Q173",
      text: "I am moved by others’ struggles.",
       
      dimension: "Agreeableness",
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
      id: "Q174",
      text: "I remain unmoved by hardship.",
       
      dimension: "Agreeableness",
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
      id: "Q175",
      text: "I empathize with the less fortunate.",
       
      dimension: "Agreeableness",
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
      id: "Q176",
      text: "I am indifferent to others’ plights.",
       
      dimension: "Agreeableness",
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
      id: "Q177",
      text: "I care about others’ feelings.",
       
      dimension: "Agreeableness",
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
      id: "Q178",
      text: "I dismiss others’ emotions.",
       
      dimension: "Agreeableness",
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
      id: "Q179",
      text: "I am compassionate toward others.",
       
      dimension: "Agreeableness",
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
      id: "Q180",
      text: "I stay objective in disputes.",
       
      dimension: "Agreeableness",
      section: 4,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Conscientiousness (20 items: 2 facets × 10 items)
    // Facet: Self-Efficacy (Q181–Q190)
    {
      id: "Q181",
      text: "I am confident in my abilities.",
       
      dimension: "Conscientiousness",
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
      id: "Q182",
      text: "I doubt I can succeed.",
       
      dimension: "Conscientiousness",
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
      id: "Q183",
      text: "I handle tasks competently.",
       
      dimension: "Conscientiousness",
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
      id: "Q184",
      text: "I feel incapable at times.",
       
      dimension: "Conscientiousness",
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
      id: "Q185",
      text: "I trust my problem-solving skills.",
       
      dimension: "Conscientiousness",
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
      id: "Q186",
      text: "I question my effectiveness.",
       
      dimension: "Conscientiousness",
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
      id: "Q187",
      text: "I achieve my goals reliably.",
       
      dimension: "Conscientiousness",
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
      id: "Q188",
      text: "I worry I’ll fail at tasks.",
       
      dimension: "Conscientiousness",
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
      id: "Q189",
      text: "I feel capable of most challenges.",
       
      dimension: "Conscientiousness",
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
      id: "Q190",
      text: "I lack faith in my skills.",
       
      dimension: "Conscientiousness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Orderliness (Q191–Q200)
    {
      id: "Q191",
      text: "I keep my spaces organized.",
       
      dimension: "Conscientiousness",
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
      id: "Q192",
      text: "My belongings are often messy.",
       
      dimension: "Conscientiousness",
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
      id: "Q193",
      text: "I like a structured routine.",
       
      dimension: "Conscientiousness",
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
      id: "Q194",
      text: "I am disorganized in my work.",
       
      dimension: "Conscientiousness",
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
      id: "Q195",
      text: "I keep things in their place.",
       
      dimension: "Conscientiousness",
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
      id: "Q196",
      text: "I leave tasks unfinished.",
       
      dimension: "Conscientiousness",
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
      id: "Q197",
      text: "I plan my day carefully.",
       
      dimension: "Conscientiousness",
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
      id: "Q198",
      text: "My desk is often cluttered.",
       
      dimension: "Conscientiousness",
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
      id: "Q199",
      text: "I maintain a tidy environment.",
       
      dimension: "Conscientiousness",
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
      id: "Q200",
      text: "I am careless with my things.",
       
      dimension: "Conscientiousness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Conscientiousness (remaining 40 items: 4 facets × 10 items)
    // Facet: Dutifulness (Q201–Q210)
    {
      id: "Q201",
      text: "I honor my commitments.",
       
      dimension: "Conscientiousness",
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
      id: "Q202",
      text: "I sometimes neglect my duties.",
       
      dimension: "Conscientiousness",
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
      id: "Q203",
      text: "I feel obligated to do what’s right.",
       
      dimension: "Conscientiousness",
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
      id: "Q204",
      text: "I avoid responsibilities when possible.",
       
      dimension: "Conscientiousness",
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
      id: "Q205",
      text: "I follow through on promises.",
       
      dimension: "Conscientiousness",
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
      id: "Q206",
      text: "I shirk my obligations at times.",
       
      dimension: "Conscientiousness",
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
      id: "Q207",
      text: "I take my responsibilities seriously.",
       
      dimension: "Conscientiousness",
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
      id: "Q208",
      text: "I overlook tasks I should do.",
       
      dimension: "Conscientiousness",
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
      id: "Q209",
      text: "I uphold my moral standards.",
       
      dimension: "Conscientiousness",
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
      id: "Q210",
      text: "I bend rules to suit myself.",
       
      dimension: "Conscientiousness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Achievement-Striving (Q211–Q220)
    {
      id: "Q211",
      text: "I work hard to achieve goals.",
       
      dimension: "Conscientiousness",
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
      id: "Q212",
      text: "I lack ambition in my work.",
       
      dimension: "Conscientiousness",
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
      id: "Q213",
      text: "I aim for excellence in tasks.",
       
      dimension: "Conscientiousness",
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
      id: "Q214",
      text: "I settle for average results.",
       
      dimension: "Conscientiousness",
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
      id: "Q215",
      text: "I push myself to succeed.",
       
      dimension: "Conscientiousness",
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
      id: "Q216",
      text: "I lack drive to get ahead.",
       
      dimension: "Conscientiousness",
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
      id: "Q217",
      text: "I set high standards for myself.",
       
      dimension: "Conscientiousness",
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
      id: "Q218",
      text: "I am content with minimal effort.",
       
      dimension: "Conscientiousness",
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
      id: "Q219",
      text: "I strive to outperform others.",
       
      dimension: "Conscientiousness",
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
      id: "Q220",
      text: "I don’t care about top results.",
       
      dimension: "Conscientiousness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Self-Discipline (Q221–Q230)
    {
      id: "Q221",
      text: "I finish tasks despite distractions.",
       
      dimension: "Conscientiousness",
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
      id: "Q222",
      text: "I get sidetracked easily.",
       
      dimension: "Conscientiousness",
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
      id: "Q223",
      text: "I stay focused on my goals.",
       
      dimension: "Conscientiousness",
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
      id: "Q224",
      text: "I procrastinate often.",
       
      dimension: "Conscientiousness",
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
      id: "Q225",
      text: "I complete work on time.",
       
      dimension: "Conscientiousness",
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
      id: "Q226",
      text: "I struggle to stay motivated.",
       
      dimension: "Conscientiousness",
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
      id: "Q227",
      text: "I persist until tasks are done.",
       
      dimension: "Conscientiousness",
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
      id: "Q228",
      text: "I give up on hard tasks.",
       
      dimension: "Conscientiousness",
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
      id: "Q229",
      text: "I maintain strong self-control.",
       
      dimension: "Conscientiousness",
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
      id: "Q230",
      text: "I act impulsively at times.",
       
      dimension: "Conscientiousness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Cautiousness (Q231–Q240)
    {
      id: "Q231",
      text: "I think carefully before acting.",
       
      dimension: "Conscientiousness",
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
      id: "Q232",
      text: "I make decisions impulsively.",
       
      dimension: "Conscientiousness",
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
      id: "Q233",
      text: "I weigh all options thoroughly.",
       
      dimension: "Conscientiousness",
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
      id: "Q234",
      text: "I act without much thought.",
       
      dimension: "Conscientiousness",
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
      id: "Q235",
      text: "I plan my actions in advance.",
       
      dimension: "Conscientiousness",
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
      id: "Q236",
      text: "I leap into things quickly.",
       
      dimension: "Conscientiousness",
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
      id: "Q237",
      text: "I consider consequences carefully.",
       
      dimension: "Conscientiousness",
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
      id: "Q238",
      text: "I rush into choices recklessly.",
       
      dimension: "Conscientiousness",
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
      id: "Q239",
      text: "I take time to make decisions.",
       
      dimension: "Conscientiousness",
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
      id: "Q240",
      text: "I decide things on a whim.",
       
      dimension: "Conscientiousness",
      section: 5,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Openness (60 items: 6 facets × 10 items)
    // Facet: Imagination (Q241–Q250)
    {
      id: "Q241",
      text: "I have a vivid imagination.",
       
      dimension: "Openness",
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
      id: "Q242",
      text: "I rarely daydream.",
       
      dimension: "Openness",
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
      id: "Q243",
      text: "I enjoy creating new ideas.",
       
      dimension: "Openness",
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
      id: "Q244",
      text: "I stick to practical thoughts.",
       
      dimension: "Openness",
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
      id: "Q245",
      text: "I love to fantasize.",
       
      dimension: "Openness",
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
      id: "Q246",
      text: "I avoid flights of fancy.",
       
      dimension: "Openness",
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
      id: "Q247",
      text: "I get lost in my thoughts.",
       
      dimension: "Openness",
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
      id: "Q248",
      text: "I focus on reality, not dreams.",
       
      dimension: "Openness",
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
      id: "Q249",
      text: "I invent imaginative stories.",
       
      dimension: "Openness",
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
      id: "Q250",
      text: "I prefer facts over imagination.",
       
      dimension: "Openness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Artistic Interests (Q251–Q260)
    {
      id: "Q251",
      text: "I love art and beauty.",
       
      dimension: "Openness",
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
      id: "Q252",
      text: "I find art uninteresting.",
       
      dimension: "Openness",
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
      id: "Q253",
      text: "I enjoy visiting museums.",
       
      dimension: "Openness",
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
      id: "Q254",
      text: "I see little value in poetry.",
       
      dimension: "Openness",
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
      id: "Q255",
      text: "I appreciate creative expression.",
       
      dimension: "Openness",
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
      id: "Q256",
      text: "I am indifferent to music.",
       
      dimension: "Openness",
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
      id: "Q257",
      text: "I am drawn to artistic pursuits.",
       
      dimension: "Openness",
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
      id: "Q258",
      text: "I dislike abstract paintings.",
       
      dimension: "Openness",
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
      id: "Q259",
      text: "I find beauty in design.",
       
      dimension: "Openness",
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
      id: "Q260",
      text: "I avoid cultural events.",
       
      dimension: "Openness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Emotionality (Q261–Q270)
    {
      id: "Q261",
      text: "I feel emotions intensely.",
       
      dimension: "Openness",
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
      id: "Q262",
      text: "I keep my feelings in check.",
       
      dimension: "Openness",
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
      id: "Q263",
      text: "I am aware of my moods.",
       
      dimension: "Openness",
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
      id: "Q264",
      text: "I rarely notice my emotions.",
       
      dimension: "Openness",
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
      id: "Q265",
      text: "I express my feelings openly.",
       
      dimension: "Openness",
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
      id: "Q266",
      text: "I hide my true emotions.",
       
      dimension: "Openness",
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
      id: "Q267",
      text: "I connect with my emotions.",
       
      dimension: "Openness",
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
      id: "Q268",
      text: "I ignore my inner feelings.",
       
      dimension: "Openness",
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
      id: "Q269",
      text: "I am sensitive to my moods.",
       
      dimension: "Openness",
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
      id: "Q270",
      text: "I stay emotionally neutral.",
       
      dimension: "Openness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Adventurousness (Q271–Q280)
    {
      id: "Q271",
      text: "I love trying new things.",
       
      dimension: "Openness",
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
      id: "Q272",
      text: "I stick to what I know.",
       
      dimension: "Openness",
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
      id: "Q273",
      text: "I seek out new experiences.",
       
      dimension: "Openness",
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
      id: "Q274",
      text: "I prefer familiar routines.",
       
      dimension: "Openness",
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
      id: "Q275",
      text: "I enjoy exploring new places.",
       
      dimension: "Openness",
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
      id: "Q276",
      text: "I avoid unfamiliar situations.",
       
      dimension: "Openness",
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
      id: "Q277",
      text: "I am eager for new challenges.",
       
      dimension: "Openness",
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
      id: "Q278",
      text: "I like predictable environments.",
       
      dimension: "Openness",
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
      id: "Q279",
      text: "I try exotic foods willingly.",
       
      dimension: "Openness",
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
      id: "Q280",
      text: "I avoid change when possible.",
       
      dimension: "Openness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Intellect (Q281–Q290)
    {
      id: "Q281",
      text: "I enjoy complex ideas.",
       
      dimension: "Openness",
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
      id: "Q282",
      text: "I prefer simple explanations.",
       
      dimension: "Openness",
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
      id: "Q283",
      text: "I love intellectual debates.",
       
      dimension: "Openness",
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
      id: "Q284",
      text: "I avoid deep discussions.",
       
      dimension: "Openness",
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
      id: "Q285",
      text: "I am curious about science.",
       
      dimension: "Openness",
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
      id: "Q286",
      text: "I find philosophy boring.",
       
      dimension: "Openness",
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
      id: "Q287",
      text: "I enjoy solving puzzles.",
       
      dimension: "Openness",
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
      id: "Q288",
      text: "I dislike abstract concepts.",
       
      dimension: "Openness",
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
      id: "Q289",
      text: "I am intrigued by new theories.",
       
      dimension: "Openness",
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
      id: "Q290",
      text: "I prefer straightforward tasks.",
       
      dimension: "Openness",
      section: 3,
      options: [
        { value: "1", label: "Very Inaccurate" },
        { value: "2", label: "Moderately Inaccurate" },
        { value: "3", label: "Neither Accurate nor Inaccurate" },
        { value: "4", label: "Moderately Accurate" },
        { value: "5", label: "Very Accurate" },
      ],
    },
    // Facet: Liberalism (Q291–Q300)
    {
      id: "Q291",
      text: "I embrace progressive ideas.",
       
      dimension: "Openness",
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
      id: "Q292",
      text: "I favor traditional values.",
       
      dimension: "Openness",
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
      id: "Q293",
      text: "I support social change.",
       
      dimension: "Openness",
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
      id: "Q294",
      text: "I resist new political views.",
       
      dimension: "Openness",
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
      id: "Q295",
      text: "I question established norms.",
       
      dimension: "Openness",
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
      id: "Q296",
      text: "I uphold conventional beliefs.",
       
      dimension: "Openness",
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
      id: "Q297",
      text: "I advocate for equality.",
       
      dimension: "Openness",
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
      id: "Q298",
      text: "I defend the status quo.",
       
      dimension: "Openness",
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
      id: "Q299",
      text: "I welcome diverse perspectives.",
       
      dimension: "Openness",
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
      id: "Q300",
      text: "I stick to familiar ideologies.",
       
      dimension: "Openness",
      section: 3,
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
