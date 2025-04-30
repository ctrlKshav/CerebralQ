import { OceanTestQuestionsData } from "@/types/tests/testQuestions"
export const oceanTestQuestionsData: OceanTestQuestionsData = {
    "id": "bfi-44",
    "test_name": "Big Five Inventory (BFI-44)",
    "totalQuestions": 44,
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
        "totalQuestions": 8, 
      },
      "Openness":{
        "id": 5,
        "title": "Openness",
        "description": "Measures how open to new experiences and ideas you are.",
        "dimension": "openness",
        "totalQuestions": 10, 
      }
    },
    "questions": [
      {
        "id": "Q1",
        "text": "I am talkative",
         
        "dimension": "Extraversion",
        "section": 2,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q2",
        "text": "I tend to find fault with others",
         
        "dimension": "Agreeableness",
        "section": 4,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q3",
        "text": "I do a thorough job",
         
        "dimension": "Conscientiousness",
        "section": 5,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q4",
        "text": "I am depressed, blue",
         
        "dimension": "Neuroticism",
        "section": 1,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q5",
        "text": "I am original, come up with new ideas",
         
        "dimension": "Openness",
        "section": 3,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q6",
        "text": "I am reserved",
         
        "dimension": "Extraversion",
        "section": 2,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q7",
        "text": "I am helpful and unselfish with others",
         
        "dimension": "Agreeableness",
        "section": 4,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q8",
        "text": "I can be somewhat careless",
         
        "dimension": "Conscientiousness",
        "section": 5,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q9",
        "text": "I am relaxed, handle stress well",
         
        "dimension": "Neuroticism",
        "section": 1,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q10",
        "text": "I am curious about many different things",
         
        "dimension": "Openness",
        "section": 3,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q11",
        "text": "I am full of energy",
         
        "dimension": "Extraversion",
        "section": 2,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q12",
        "text": "I start quarrels with others",
         
        "dimension": "Agreeableness",
        "section": 4,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q13",
        "text": "I am a reliable worker",
         
        "dimension": "Conscientiousness",
        "section": 5,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q14",
        "text": "I can be tense",
         
        "dimension": "Neuroticism",
        "section": 1,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q15",
        "text": "I am ingenious, a deep thinker",
         
        "dimension": "Openness",
        "section": 3,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q16",
        "text": "I generate a lot of enthusiasm",
         
        "dimension": "Extraversion",
        "section": 2,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q17",
        "text": "I have a forgiving nature",
         
        "dimension": "Agreeableness",
        "section": 4,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q18",
        "text": "I tend to be disorganized",
         
        "dimension": "Conscientiousness",
        "section": 5,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q19",
        "text": "I worry a lot",
         
        "dimension": "Neuroticism",
        "section": 1,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q20",
        "text": "I have an active imagination",
         
        "dimension": "Openness",
        "section": 3,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q21",
        "text": "I tend to be quiet",
         
        "dimension": "Extraversion",
        "section": 2,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q22",
        "text": "I generally trust others",
         
        "dimension": "Agreeableness",
        "section": 4,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q23",
        "text": "I tend to be lazy",
         
        "dimension": "Conscientiousness",
        "section": 5,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q24",
        "text": "I am emotionally stable, not easily upset",
         
        "dimension": "Neuroticism",
        "section": 1,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q25",
        "text": "I am inventive",
         
        "dimension": "Openness",
        "section": 3,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q26",
        "text": "I have an assertive personality",
         
        "dimension": "Extraversion",
        "section": 2,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q27",
        "text": "I can be cold and aloof",
         
        "dimension": "Agreeableness",
        "section": 4,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q28",
        "text": "I persevere until the task is finished",
         
        "dimension": "Conscientiousness",
        "section": 5,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q29",
        "text": "I can be moody",
         
        "dimension": "Neuroticism",
        "section": 1,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q30",
        "text": "I value artistic, aesthetic experiences",
         
        "dimension": "Openness",
        "section": 3,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q31",
        "text": "I am sometimes shy, inhibited",
         
        "dimension": "Extraversion",
        "section": 2,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q32",
        "text": "I am considerate and kind to almost everyone",
         
        "dimension": "Agreeableness",
        "section": 4,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q33",
        "text": "I do things efficiently",
         
        "dimension": "Conscientiousness",
        "section": 5,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q34",
        "text": "I remain calm in tense situations",
         
        "dimension": "Neuroticism",
        "section": 1,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q35",
        "text": "I prefer work that is routine",
         
        "dimension": "Openness",
        "section": 3,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q36",
        "text": "I am outgoing, sociable",
         
        "dimension": "Extraversion",
        "section": 2,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q37",
        "text": "I am sometimes rude to others",
         
        "dimension": "Agreeableness",
        "section": 4,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q38",
        "text": "I make plans and follow through with them",
         
        "dimension": "Conscientiousness",
        "section": 5,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q39",
        "text": "I get nervous easily",
         
        "dimension": "Neuroticism",
        "section": 1,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q40",
        "text": "I like to reflect, play with ideas",
         
        "dimension": "Openness",
        "section": 3,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q41",
        "text": "I have few artistic interests",
         
        "dimension": "Openness",
        "section": 3,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q42",
        "text": "I like to take charge and direct others",
         
        "dimension": "Extraversion",
        "section": 2,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q43",
        "text": "I have a soft heart",
         
        "dimension": "Agreeableness",
        "section": 4,
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      },
      {
        "id": "Q44",
        "text": "I am easily distracted",
         
        "dimension": "Conscientiousness",
        "section": 5,
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Disagree strongly" },
          { "value": "2", "label": "Disagree a little" },
          { "value": "3", "label": "Neither agree nor disagree" },
          { "value": "4", "label": "Agree a little" },
          { "value": "5", "label": "Agree strongly" }
        ]
      }
    ]
  }