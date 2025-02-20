export interface TestSection {
  id: number;
  title: string;
  description: string;
  dimension: string;
  icon: string; // section icon
}

export interface TestQuestion {
  id: string;
  text: string;
  type: 'binary' | 'likert';
  icon?: string; // now questions can have an icon too
  iconColor?: string; // new property for icon color
  options?: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
  dimension: string;
  section: number;
}

export interface TestData {
  id: number;
  test_name: string;
  sections: TestSection[];
  questions: TestQuestion[];
}

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
        "text": "At a party do you:",
        "type": "binary",
        "icon": "Users",  // added question icon
        "options": [
          { "value": "E", "label": "Interact with many, including strangers" },
          { "value": "I", "label": "Interact with a few, known to you" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "2",
        "text": "Are you more:",
        "type": "binary",
        "icon": "Calendar", // added question icon
        "options": [
          { "value": "S", "label": "Realistic than speculative" },
          { "value": "N", "label": "Speculative than realistic" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "3",
        "text": "Is it worse to:",
        "type": "binary",
        "icon": "AlertTriangle", // added question icon
        "options": [
          { "value": "S", "label": "Have your \"head in the clouds\"" },
          { "value": "N", "label": "Be \"in a rut\"" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "4",
        "text": "Are you more impressed by:",
        "type": "binary",
        "icon": "Star", // added question icon
        "options": [
          { "value": "T", "label": "Principles" },
          { "value": "F", "label": "Emotions" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "5",
        "text": "Are you more drawn toward the:",
        "type": "binary",
        "icon": "Heart", // added question icon
        "options": [
          { "value": "T", "label": "Convincing" },
          { "value": "F", "label": "Touching" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "6",
        "text": "Do you prefer to work:",
        "type": "binary",
        "icon": "Clock", // added question icon
        "options": [
          { "value": "J", "label": "To deadlines" },
          { "value": "P", "label": "Just \"whenever\"" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "7",
        "text": "Do you tend to choose:",
        "type": "binary",
        "icon": "Zap", // added question icon
        "options": [
          { "value": "J", "label": "Rather carefully" },
          { "value": "P", "label": "Somewhat impulsively" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "8",
        "text": "At parties do you:",
        "type": "binary",
        "icon": "Users", // added question icon
        "options": [
          { "value": "E", "label": "Stay late, with increasing energy" },
          { "value": "I", "label": "Leave early with decreased energy" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "9",
        "text": "Are you more attracted to:",
        "type": "binary",
        "icon": "Image", // added question icon
        "options": [
          { "value": "S", "label": "Sensible people" },
          { "value": "N", "label": "Imaginative people" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "10",
        "text": "Are you more interested in:",
        "type": "binary",
        "icon": "Activity", // added question icon
        "options": [
          { "value": "S", "label": "What is actual" },
          { "value": "N", "label": "What is possible" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      // New likert scale questions
      {
        "id": "11",
        "text": "I feel energized when engaging in social activities.",
        "type": "likert",
        "icon": "⚡",
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
        "icon": "📊",
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
        "icon": "🧠",
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
        "icon": "📅",
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