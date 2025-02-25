import { TestData, TestSection, TestQuestion } from "@/types/tests/mbti";

export const testData: TestData[] = [
  {
    "id": 1,
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
        "text": "I prefer interacting with many people, including strangers, at parties.",
        "description": "(Temporary Field for Feedback) I feel energized when engaging in social activities.",
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
        "text": "I tend to be more realistic than speculative.",
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
        "text": "I consider having my \"head in the clouds\" to be worse than being \"in a rut\".",
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
        "text": "I am more impressed by principles than emotions.",
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
        "text": "I am more drawn toward the convincing than the touching.",
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
        "text": "I prefer to work to deadlines rather than just \"whenever\".",
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
        "text": "I tend to choose rather carefully than somewhat impulsively.",
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
        "text": "After socializing, I feel energized and want more.",
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
        "text": "I am more attracted to sensible people than imaginative people.",
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
        "text": "I am more interested in what is actual than what is possible.",
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
        "text": "I feel energized when engaging in social activities.",
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
        "text": "I rely on facts and details more than abstract ideas.",
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
        "text": "I make decisions based on logic rather than emotions.",
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
        "text": "I prefer to plan things in advance rather than being spontaneous.",
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
        "text": "I find it easy to initiate conversations with new people.",
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
        "text": "I prefer concrete and literal explanations.",
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
        "text": "I prioritize objective criteria and facts when making important decisions.",
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
        "text": "I prefer organized and structured environments.",
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