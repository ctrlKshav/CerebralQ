﻿import { TestData, PersonalityTypeInsights } from "@/types/tests/mbti";

export const testData: TestData[] = [
  {
    "id": "ecf371b1-f39e-4f37-9c19-4b722f9adfc6",
    "test_name": "MBTI Personality Test",
    "sections": [
      {
        "id": 1,
        "title": "Energy Orientation",
        "description": "Choose the option that feels most natural to you",
        "dimension": "E-I",
        "icon": "Battery"
      },
      {
        "id": 2,
        "title": "Information Processing",
        "description": "Select the statement that resonates more",
        "dimension": "S-N",
        "icon": "Lightbulb"
      },
      {
        "id": 3,
        "title": "Decision Making",
        "description": "Which approach feels more natural?",
        "dimension": "T-F",
        "icon": "Brain"
      },
      {
        "id": 4,
        "title": "Lifestyle Approach",
        "description": "Choose your preferred style",
        "dimension": "J-P",
        "icon": "Compass"
      }
    ],
    "questions": [
      {
        "id": "1",
        "text": "I prefer spending time alone rather than interacting with many people at parties.",
        "type": "likert",
        "icon": "Users",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "2",
        "text": "I tend to be more speculative than realistic.",
        "type": "likert",
        "icon": "Clipboard",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "3",
        "text": "I prefer exploring possibilities and concepts rather than focusing on established facts.",
        "type": "likert",
        "icon": "AlertTriangle",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "4",
        "text": "I am more impressed by emotions than principles.",
        "type": "likert",
        "icon": "Award",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "5",
        "text": "I am more drawn toward the touching than the convincing.",
        "type": "likert",
        "icon": "Heart",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "6",
        "text": "I prefer to work flexibly rather than to strict deadlines.",
        "type": "likert",
        "icon": "Clock",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "7",
        "text": "I tend to make decisions somewhat impulsively rather than after careful consideration.",
        "type": "likert",
        "icon": "Crosshair",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "8",
        "text": "After socializing, I need quiet time alone to recharge.",
        "type": "likert",
        "icon": "Battery",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "9",
        "text": "I am more attracted to imaginative people than sensible people.",
        "type": "likert",
        "icon": "Anchor",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "10",
        "text": "I am more interested in what is possible than what is actual.",
        "type": "likert",
        "icon": "Map",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "11",
        "text": "I need quiet time to myself after social events.",
        "type": "likert",
        "icon": "Zap",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "12",
        "text": "I rely on abstract ideas more than facts and details.",
        "type": "likert",
        "icon": "FileText",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "13",
        "text": "I make decisions based on emotions rather than logic.",
        "type": "likert",
        "icon": "GitBranch",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "14",
        "text": "I prefer being spontaneous rather than planning things in advance.",
        "type": "likert",
        "icon": "Calendar",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "15",
        "text": "I find it difficult to initiate conversations with new people.",
        "type": "likert",
        "icon": "Coffee",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "16",
        "text": "I prefer metaphorical and conceptual explanations over concrete and literal ones.",
        "type": "likert",
        "icon": "Book",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "17",
        "text": "I prioritize personal values and harmony over objective criteria when making decisions.",
        "type": "likert",
        "icon": "Filter",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "18",
        "text": "I prefer flexible and adaptable environments over organized and structured ones.",
        "type": "likert",
        "icon": "Home",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      }
    ]
  }
];
