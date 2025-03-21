import { ResultData } from "@/types/tests/mbti";
export const sampleResultData: ResultData = {
  username: null,
  personalityType: "ENTJ",
  personalityDescription: {
    alias: "The Commander",
    description:
      "You're a bold leader with a vision for success, always ready to take charge and make big things happen. Whether it's leading a team project or setting ambitious goals for yourself, you've got a driven, inspiring vibe that makes you a total powerhouse.",
  },
  completionDate: new Date().toLocaleDateString(),
  traitScores: {
    "E-I": {
      left: 22,
      right: 8,
      leftPercentage: 73,
      rightPercentage: 27,
      dominant: "left",
    },
    "S-N": {
      left: 10,
      right: 20,
      leftPercentage: 33,
      rightPercentage: 67,
      dominant: "right",
    },
    "T-F": {
      left: 23,
      right: 7,
      leftPercentage: 77,
      rightPercentage: 23,
      dominant: "left",
    },
    "J-P": {
      left: 21,
      right: 9,
      leftPercentage: 70,
      rightPercentage: 30,
      dominant: "left",
    },
  },
  career: {
    superpowers: [
      "Leading with Vision",
      "Getting Results",
      "Inspiring others",
      "Strategic planning",
    ],
    growthAreas: [
      "Being Patient",
      "Listening to Others",
      "Flexibility",
      "Handling slower progress",
    ],
    matches: [
      {
        title: "Business Management",
        matchPercentage: 95,
        description:
          "Roles that let you lead and strategize, using your natural talent for organizing teams and driving toward ambitious goals.",
      },
      {
        title: "Entrepreneurship",
        matchPercentage: 92,
        description:
          "Creating and growing your own business ventures where you can implement your vision and lead with autonomy.",
      },
      {
        title: "Law",
        matchPercentage: 88,
        description:
          "High-stakes environments where your strategic thinking and persuasive communication skills help you excel.",
      },
      {
        title: "Engineering",
        matchPercentage: 85,
        description:
          "Problem-solving roles where you can innovate and create solutions that make a real impact.",
      }
    ],
  },
  relationships: [
    {
      type: "Romantic",
      description:
        "You're the driven, inspiring one in your relationships. You show love by pushing others to be their best, like encouraging your partner to chase their dreams.",
      compatibleTypes: ["INFP", "INTP", "ENFP", "ISFP"],
      tips: [
        "Share your feelings more openly - try saying 'I've been feeling a bit overwhelmed lately'",
        "Check in before encouraging someone - ask 'How do you feel about this?' before pushing forward",
        "Look for partners who appreciate your ambitious energy",
      ],
    },
    {
      type: "Friendship",
      description:
        "You're the friend who takes the lead, always ready to organize a group adventure or motivate your crew to tackle a challenge.",
      compatibleTypes: ["INFJ", "ENFP", "INTP", "ENTP"],
      tips: [
        "Let your friends take the lead sometimes - try saying 'What do you guys want to do this time?'",
        "Practice active listening with friends - really hear them out",
        "Be more flexible with plans when others suggest alternatives",
      ],
    },
  ],
  growth: {
    milestones: [
      {
        title: "Cultivate patience",
        description:
          "Learn to manage frustration when things move slower than expected.",
        completed: false,
      },
      {
        title: "Develop emotional awareness",
        description:
          "Create regular habits for checking in with your own feelings and needs.",
        completed: false,
      },
      {
        title: "Practice active listening",
        description:
          "Focus on understanding others before offering solutions or taking charge.",
        completed: false,
      },
    ],
    journalingPrompts: [
      {
        question: "What's one big goal you're working toward right now?",
        hint: "Consider what small step you can take toward it this month.",
      },
      {
        question:
          "When do you feel most in your element—like you're unstoppable?",
        hint: "Think about how you can create more of these moments in your life.",
      },
      {
        question: "Who do you look up to for their leadership?",
        hint: "Reflect on what ENTJ trait you share with them.",
      },
    ],
  },
  actionItems: [
    {
      task: "Ask a coworker for their input on a project",
      completed: false,
      description:
        "Try saying: 'What do you think we could do differently here?'",
    },
    {
      task: "Share a feeling with a loved one",
      completed: false,
      description:
        "Be vulnerable by saying something like: 'I've been feeling a bit overwhelmed lately.'",
    },
    {
      task: "Let friends take the lead on planning an activity",
      completed: false,
      description:
        "Step back and say: 'What do you guys want to do this time?'",
    },
    {
      task: "Journal about one big goal you're working toward",
      completed: false,
      description:
        "Reflect on what keeps you motivated and identify small steps toward progress.",
    },
    {
      task: "Add a small relaxing habit to your daily routine",
      completed: false,
      description:
        "Try a quick walk after lunch or reading before bed to give your mind a break.",
    },
  ],
};