import { TestQuestionsData } from "@/types/tests/testQuestions"
export const oceanTestQuestionsData: TestQuestionsData = {
    "id": "bfi-44",
    "test_name": "Big Five Inventory (BFI-44)",
    "totalQuestions": 44,
    "sections": [
      {
        "id": 1,
        "title": "Extraversion",
        "description": "Measures how outgoing and social you are.",
        "dimension": "extraversion",
        "totalQuestions": 8, 
      },
      {
        "id": 2,
        "title": "Agreeableness",
        "description": "Measures how kind and trusting you are.",
        "dimension": "agreeableness",
        "totalQuestions": 9, 
      },
      {
        "id": 3,
        "title": "Conscientiousness",
        "description": "Measures how organized and dependable you are.",
        "dimension": "conscientiousness",
        "totalQuestions": 9, 
      },
      {
        "id": 4,
        "title": "Neuroticism",
        "description": "Measures how emotional and anxious you are.",
        "dimension": "neuroticism",
        "totalQuestions": 9, 
      },
      {
        "id": 5,
        "title": "Openness",
        "description": "Measures how open to new experiences and ideas you are.",
        "dimension": "openness",
        "totalQuestions": 9, 
      }
    ],
    "questions": [
      // Extraversion (8 items)
      {
        "id": "Q1",
        "text": "I am someone who is talkative.",
        "type": "likert",
        "dimension": "Extraversion",
        "section": 1,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q2",
        "text": "I am someone who tends to be quiet.",
        "type": "likert",
        "dimension": "Extraversion",
        "section": 1,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q3",
        "text": "I am someone who is full of energy.",
        "type": "likert",
        "dimension": "Extraversion",
        "section": 1,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q4",
        "text": "I am someone who generates a lot of enthusiasm.",
        "type": "likert",
        "dimension": "Extraversion",
        "section": 1,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q5",
        "text": "I am someone who tends to be reserved.",
        "type": "likert",
        "dimension": "Extraversion",
        "section": 1,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q6",
        "text": "I am someone who has an assertive personality.",
        "type": "likert",
        "dimension": "Extraversion",
        "section": 1,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q7",
        "text": "I am someone who is sometimes shy, inhibited.",
        "type": "likert",
        "dimension": "Extraversion",
        "section": 1,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q8",
        "text": "I am someone who is outgoing, sociable.",
        "type": "likert",
        "dimension": "Extraversion",
        "section": 1,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      // Agreeableness (9 items)
      {
        "id": "Q9",
        "text": "I am someone who tends to find fault with others.",
        "type": "likert",
        "dimension": "Agreeableness",
        "section": 2,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q10",
        "text": "I am someone who is helpful and unselfish with others.",
        "type": "likert",
        "dimension": "Agreeableness",
        "section": 2,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q11",
        "text": "I am someone who starts quarrels with others.",
        "type": "likert",
        "dimension": "Agreeableness",
        "section": 2,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q12",
        "text": "I am someone who has a forgiving nature.",
        "type": "likert",
        "dimension": "Agreeableness",
        "section": 2,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q13",
        "text": "I am someone who is generally trusting.",
        "type": "likert",
        "dimension": "Agreeableness",
        "section": 2,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q14",
        "text": "I am someone who can be cold and aloof.",
        "type": "likert",
        "dimension": "Agreeableness",
        "section": 2,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q15",
        "text": "I am someone who is considerate and kind to almost everyone.",
        "type": "likert",
        "dimension": "Agreeableness",
        "section": 2,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q16",
        "text": "I am someone who is sometimes rude to others.",
        "type": "likert",
        "dimension": "Agreeableness",
        "section": 2,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q17",
        "text": "I am someone who likes to cooperate with others.",
        "type": "likert",
        "dimension": "Agreeableness",
        "section": 2,
        "options": [
          { "value": "adventure", "label": "Adventure" },
          { "value": "culture", "label": "Culture" },
          { "value": "nature", "label": "Nature" },
          { "value": "relaxation", "label": "Relaxation" }
        ]
      },
      // Conscientiousness (9 items)
      {
        "id": "Q18",
        "text": "I am someone who does a thorough job.",
        "type": "likert",
        "dimension": "Conscientiousness",
        "section": 3,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q19",
        "text": "I am someone who can be somewhat careless.",
        "type": "likert",
        "dimension": "Conscientiousness",
        "section": 3,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q20",
        "text": "I am someone who is a reliable worker.",
        "type": "likert",
        "dimension": "Conscientiousness",
        "section": 3,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q21",
        "text": "I am someone who tends to be disorganized.",
        "type": "likert",
        "dimension": "Conscientiousness",
        "section": 3,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q22",
        "text": "I am someone who perseveres until the task is finished.",
        "type": "likert",
        "dimension": "Conscientiousness",
        "section": 3,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q23",
        "text": "I am someone who does things efficiently.",
        "type": "likert",
        "dimension": "Conscientiousness",
        "section": 3,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q24",
        "text": "I am someone who makes plans and follows through with them.",
        "type": "likert",
        "dimension": "Conscientiousness",
        "section": 3,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q25",
        "text": "I am someone who is easily distracted.",
        "type": "likert",
        "dimension": "Conscientiousness",
        "section": 3,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q26",
        "text": "I am someone who tends to be lazy.",
        "type": "likert",
        "dimension": "Conscientiousness",
        "section": 3,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      // Neuroticism (8 items)
      {
        "id": "Q27",
        "text": "I am someone who is depressed, blue.",
        "type": "likert",
        "dimension": "Neuroticism",
        "section": 4,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q28",
        "text": "I am someone who is relaxed, handles stress well.",
        "type": "likert",
        "dimension": "Neuroticism",
        "section": 4,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q29",
        "text": "I am someone who can be tense.",
        "type": "likert",
        "dimension": "Neuroticism",
        "section": 4,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q30",
        "text": "I am someone who worries a lot.",
        "type": "likert",
        "dimension": "Neuroticism",
        "section": 4,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q31",
        "text": "I am someone who is emotionally stable, not easily upset.",
        "type": "likert",
        "dimension": "Neuroticism",
        "section": 4,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q32",
        "text": "I am someone who can be moody.",
        "type": "likert",
        "dimension": "Neuroticism",
        "section": 4,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q33",
        "text": "I am someone who remains calm in tense situations.",
        "type": "likert",
        "dimension": "Neuroticism",
        "section": 4,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q34",
        "text": "I am someone who gets nervous easily.",
        "type": "likert",
        "dimension": "Neuroticism",
        "section": 4,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      // Openness (10 items)
      {
        "id": "Q35",
        "text": "I am someone who is original, comes up with new ideas.",
        "type": "likert",
        "dimension": "Openness",
        "section": 5,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q36",
        "text": "I am someone who is curious about many different things.",
        "type": "likert",
        "dimension": "Openness",
        "section": 5,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q37",
        "text": "I am someone who is ingenious, a deep thinker.",
        "type": "likert",
        "dimension": "Openness",
        "section": 5,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q38",
        "text": "I am someone who has an active imagination.",
        "type": "likert",
        "dimension": "Openness",
        "section": 5,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q39",
        "text": "I am someone who is inventive.",
        "type": "likert",
        "dimension": "Openness",
        "section": 5,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q40",
        "text": "I am someone who values artistic, aesthetic experiences.",
        "type": "likert",
        "dimension": "Openness",
        "section": 5,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q41",
        "text": "I am someone who prefers work that is routine.",
        "type": "likert",
        "dimension": "Openness",
        "section": 5,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q42",
        "text": "I am someone who likes to reflect, play with ideas.",
        "type": "likert",
        "dimension": "Openness",
        "section": 5,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q43",
        "text": "I am someone who has few artistic interests.",
        "type": "likert",
        "dimension": "Openness",
        "section": 5,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      },
      {
        "id": "Q44",
        "text": "I am someone who is sophisticated in art, music, or literature.",
        "type": "likert",
        "dimension": "Openness",
        "section": 5,
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neither Agree nor Disagree" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ]
      }
    ]
  }