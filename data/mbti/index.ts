import { ResultData } from "@/types/tests/mbti";
export const sampleResultData: ResultData = {
    username: "alex_smith",
    personalityType: "INTJ",
    personalityDescription: {
      alias: "The Architect",
      description: "INTJs are strategic, innovative thinkers with a talent for logical reasoning and complex problem-solving. They are driven by their own original ideas and inspiration rather than established traditions. Independent and decisive, they highly value knowledge and competence."
    },
    completionDate: "2025-03-15",
    traitScores: {
      "E-I": {
        left: 8,
        right: 22,
        leftPercentage: 27,
        rightPercentage: 73,
        dominant: "right"
      },
      "S-N": {
        left: 12,
        right: 18,
        leftPercentage: 40,
        rightPercentage: 60,
        dominant: "right"
      },
      "T-F": {
        left: 20,
        right: 10,
        leftPercentage: 67,
        rightPercentage: 33,
        dominant: "left"
      },
      "J-P": {
        left: 19,
        right: 11,
        leftPercentage: 63,
        rightPercentage: 37,
        dominant: "left"
      }
    },
    career: {
      superpowers: [
        "Strategic planning",
        "Systems thinking",
        "Critical analysis",
        "Independent problem-solving"
      ],
      growthAreas: [
        "Team collaboration",
        "Emotional intelligence",
        "Adaptability to change",
        "Communication style"
      ],
      matches: [
        {
          title: "Software Architect",
          matchPercentage: 92,
          description: "Designing complex software systems that align with organizational goals while optimizing for performance and scalability."
        },
        {
          title: "Data Scientist",
          matchPercentage: 87,
          description: "Analyzing complex datasets to extract meaningful insights and develop predictive models."
        },
        {
          title: "Strategy Consultant",
          matchPercentage: 84,
          description: "Helping organizations solve complex problems through analytical thinking and strategic planning."
        }
      ]
    },
    relationships: [
      {
        type: "Romantic",
        description: "INTJs seek intellectually stimulating relationships with depth and authenticity.",
        compatibleTypes: ["ENFP", "ENTP", "INFJ", "ENTJ"],
        tips: [
          "Express appreciation verbally, as your partner may not intuitively understand your feelings",
          "Schedule regular quality time for deeper conversations",
          "Be patient with emotional discussions that may feel uncomfortable"
        ]
      },
      {
        type: "Workplace",
        description: "INTJs thrive in environments that value competence and allow independent work.",
        compatibleTypes: ["ENTJ", "ISTJ", "INTP", "INFJ"],
        tips: [
          "Clearly communicate your thought process to help others understand your reasoning",
          "Acknowledge the contributions of teammates even when working independently",
          "Consider how your ideas impact others before presenting them"
        ]
      }
    ],
    growth: {
      milestones: [
        {
          title: "Develop active listening skills",
          description: "Practice focusing entirely on what others are saying without planning your response.",
          completed: false
        },
        {
          title: "Embrace spontaneity",
          description: "Try one unplanned activity each week to develop comfort with uncertainty.",
          completed: false
        },
        {
          title: "Express appreciation to others",
          description: "Regularly acknowledge the contributions and value of people in your life.",
          completed: true
        }
      ],
      journalingPrompts: [
        {
          question: "When did you last feel truly connected to someone?",
          hint: "Consider both intellectual and emotional connections."
        },
        {
          question: "What recent situation made you uncomfortable, and why?",
          hint: "Explore if the discomfort came from external circumstances or internal expectations."
        },
        {
          question: "Which of your perspectives have changed in the last year?",
          hint: "Reflect on how your thinking has evolved through new experiences."
        }
      ]
    },
    actionItems: [
      {
        task: "Schedule a 30-minute coffee chat with a colleague",
        completed: false,
        description: "Build relationships outside of project-based interactions."
      },
      {
        task: "Read a book on emotional intelligence",
        completed: true,
        description: "Develop better understanding of how emotions influence behavior and relationships."
      },
      {
        task: "Practice mindfulness meditation for 10 minutes daily",
        completed: false,
        description: "Improve present-moment awareness and reduce overthinking."
      }
    ]
  };