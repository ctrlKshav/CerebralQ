import { TestData, PersonalityTypeInsights } from "@/types/tests/mbti";

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

// Example detailed insights for each personality type
export const personalityInsights: Record<string, PersonalityTypeInsights> = {
  INTJ: {
    strengths: {
      title: "Core Strengths",
      icon: "lightbulb",
      points: [
        "Strategic thinking and long-term planning",
        "Independent problem-solving with original solutions",
        "Ability to see the big picture and anticipate outcomes",
        "Strong analytical skills and logical reasoning",
        "Disciplined work ethic and determination"
      ]
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May come across as overly critical or judgmental",
        "Tendency to overlook emotional factors in decision-making",
        "Difficulty expressing feelings and connecting emotionally",
        "Can be perfectionistic to the point of burnout",
        "Sometimes reluctant to change established systems"
      ]
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in autonomous roles with intellectual challenges",
        "Prefers structured environments with clear objectives",
        "Values efficiency and competence over social dynamics",
        "Excels at creating innovative systems and strategic plans",
        "May need quiet time to process complex information"
      ]
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks deep, meaningful connections with a select few",
        "Values intellectual compatibility and shared goals",
        "Shows loyalty through consistent actions rather than words",
        "Appreciates partners who respect independence and boundaries",
        "May need encouragement to share thoughts and feelings"
      ]
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Developing emotional intelligence and empathy",
        "Practicing active listening without immediate problem-solving",
        "Embracing flexibility and adaptability in plans",
        "Being open to input from different perspectives",
        "Finding healthy balance between work and personal life"
      ]
    }
  },
  INFP: {
    strengths: {
      title: "Core Strengths",
      icon: "heart",
      points: [
        "Deep empathy and understanding of others",
        "Strong moral compass and authentic self-expression",
        "Rich creative imagination and artistic abilities",
        "Ability to see unique potential in people and situations",
        "Passionate dedication to meaningful causes"
      ]
    },
    challenges: {
      title: "Potential Challenges",
      icon: "alert-circle",
      points: [
        "May struggle with practical day-to-day tasks",
        "Tendency toward perfectionism that inhibits completion",
        "Can take criticism personally and deeply",
        "Sometimes avoids conflict to preserve harmony",
        "May have difficulty with structure and deadlines"
      ]
    },
    workStyle: {
      title: "Work Style",
      icon: "briefcase",
      points: [
        "Thrives in environments that align with personal values",
        "Works best when given creative freedom and autonomy",
        "Prefers meaningful work over status or financial gain",
        "Benefits from quiet spaces to think and create",
        "Motivated by authentic recognition of contributions"
      ]
    },
    relationships: {
      title: "Relationship Dynamics",
      icon: "users",
      points: [
        "Seeks deep, authentic connections with genuine people",
        "Shows love through thoughtful gestures and deep listening",
        "Values partners who appreciate their unique perspective",
        "Needs occasional space to process emotions independently",
        "Devoted and loyal when they find the right connection"
      ]
    },
    growthAreas: {
      title: "Growth Opportunities",
      icon: "trending-up",
      points: [
        "Developing practical skills for everyday challenges",
        "Setting realistic expectations and deadlines",
        "Learning to accept constructive criticism",
        "Building resilience and adaptability to change",
        "Finding balance between idealism and practicality"
      ]
    }
  },
  // Add more personality types as needed...
};

// Default insights for types not yet fully defined
export const defaultInsights: PersonalityTypeInsights = {
  strengths: {
    title: "Core Strengths",
    icon: "star",
    points: [
      "Unique combination of traits that provide special perspectives",
      "Natural abilities aligned with your personality preferences",
      "Characteristic approaches that distinguish your interactions",
      "Inherent talents that come naturally to your type",
      "Special capabilities that serve you in various situations"
    ]
  },
  challenges: {
    title: "Potential Challenges",
    icon: "alert-circle",
    points: [
      "Areas where your natural tendencies may create friction",
      "Aspects of life that might require more conscious effort",
      "Potential blind spots in your perception or approach",
      "Situations that may cause stress or discomfort",
      "Tendencies that could benefit from mindful attention"
    ]
  },
  workStyle: {
    title: "Work Style",
    icon: "briefcase",
    points: [
      "Environmental factors that help you perform at your best",
      "Communication approaches that align with your preferences",
      "Project types and roles where you naturally excel",
      "Leadership or teamwork dynamics that suit your style",
      "Productivity patterns characteristic of your type"
    ]
  },
  relationships: {
    title: "Relationship Dynamics",
    icon: "users",
    points: [
      "How you tend to connect with and relate to others",
      "Communication patterns in close relationships",
      "Needs and expectations in personal interactions",
      "Ways you express care and affection",
      "Relationship qualities that help you thrive"
    ]
  },
  growthAreas: {
    title: "Growth Opportunities",
    icon: "trending-up",
    points: [
      "Skills that may complement your natural tendencies",
      "Areas where conscious development yields benefits",
      "Habits that could enhance your effectiveness",
      "Perspectives that broaden your natural worldview",
      "Practices that promote balanced personal growth"
    ]
  }
};

export function getPersonalityInsights(personalityType: string): PersonalityTypeInsights {
  return personalityInsights[personalityType] || defaultInsights;
}
