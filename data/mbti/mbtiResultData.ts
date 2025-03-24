import { ResultData } from "@/types/tests/mbti";

export const sampleResultData: ResultData = {
  username: null,
  personalityType: "ENTJ",
  personalityDescription: {
    alias: "The Commander",
    description:
      "You're a bold leader with a vision for success, always ready to take charge and make big things happen. Whether it's leading a team project or setting ambitious goals for yourself, you've got a driven, inspiring vibe that makes you a total powerhouse."
  },
  completionDate: new Date().toLocaleDateString(),
  traitScores: {
    "E-I": {
      left: 24,
      right: 6,
      leftPercentage: 80,
      rightPercentage: 20,
      dominant: "left"
    },
    "S-N": {
      left: 9,
      right: 21,
      leftPercentage: 30,
      rightPercentage: 70,
      dominant: "right"
    },
    "T-F": {
      left: 25,
      right: 5,
      leftPercentage: 83,
      rightPercentage: 17,
      dominant: "left"
    },
    "J-P": {
      left: 22,
      right: 8,
      leftPercentage: 73,
      rightPercentage: 27,
      dominant: "left"
    }
  },
  career: {
    summary: "You're a total force in jobs where you can lead and strategize—like business management, entrepreneurship, or even something high-stakes like law. You love roles that let you take charge and achieve big goals, but you might get frustrated if the work feels inefficient or if others don't keep up with your pace.",
    superpowers: [
      "Leading with Vision",
      "Getting Results"
    ],
    growthAreas: [
      "Being Patient",
      "Listening to Others"
    ],
    matches: [
      {
        title: "Business Management",
        matchPercentage: 95,
        description: "Roles that let you lead and make strategic decisions, using your natural talent for driving results and organizing teams."
      },
      {
        title: "Entrepreneurship",
        matchPercentage: 92,
        description: "Starting and growing businesses where you can implement your vision and create impactful solutions."
      },
      {
        title: "Law",
        matchPercentage: 88,
        description: "High-stakes environments where your logical thinking and strategic planning help you analyze complex situations."
      },
      {
        title: "Consulting",
        matchPercentage: 85,
        description: "Roles that let you optimize systems and provide leadership guidance to help others achieve results."
      }
    ],
    actionSteps: [
      "If things are moving slowly, take a deep breath and break the task into smaller steps to keep progress steady.",
      "Ask a coworker for their input this week—like \"What do you think we could do differently here?\"—to open up to new ideas.",
      "Look for jobs that let you lead and innovate, like being a CEO or a consultant—your kind of vibe!"
    ]
  },
  relationships: [
    {
      type: "Romantic",
      description: "You're the driven, inspiring one in your relationships. You show love by pushing others to be their best, like encouraging your partner to chase their dreams or organizing a family goal-setting session, but you might need to work on slowing down to connect emotionally.",
      compatibleTypes: ["ISFP", "ISTP", "ENFP", "INFP"],
      superpowers: [
        "Being Motivational",
        "Taking Charge"
      ],
      growthAreas: [
        "Being Vulnerable",
        "Slowing Down"
      ],
      tips: [
        "This week, share one feeling with someone you care about—like \"I've been feeling a bit overwhelmed lately.\"",
        "If you're encouraging someone, check in first—like \"I think this could be great for you, but how do you feel about it?\"",
        "Look for people who admire your drive—someone who loves your ambitious energy as much as you do."
      ]
    },
    {
      type: "Friendship",
      description: "You're the friend who takes the lead—always ready to organize a group adventure or motivate your crew to tackle a challenge. You love having a solid group of friends who respect your leadership and share your drive for success.",
      compatibleTypes: ["INTP", "ENTP", "INFJ", "INTJ"],
      superpowers: [
        "Being Inspiring",
        "Planning Big Moments"
      ],
      growthAreas: [
        "Listening More",
        "Being Flexible"
      ],
      tips: [
        "Let your friends take the lead on a plan this month—like saying, \"What do you guys want to do this time?\"",
        "Practice active listening—like asking a friend, \"What do you think about this?\" and really hearing them out.",
        "Connect with friends who appreciate your drive but also help you slow down occasionally"
      ]
    }
  ],
  growth: {
    summary: "Growth for you is all about becoming an even better leader while learning to connect more deeply. You're amazing at setting goals and making them happen, but you might need to work on being more patient and in tune with your emotions.",
    superpowers: [
      "Being Ambitious",
      "Staying Focused"
    ],
    growthAreas: [
      "Being Patient",
      "Connecting Emotionally"
    ],
    actionSteps: [
      "If you're feeling impatient, take a moment to reflect—like \"What's one small step I can take today?\"",
      "Try a new emotional check-in this week, like journaling about how you're feeling, to connect with yourself.",
      "Write down three things you love about being an ENTJ when you're feeling hard on yourself."
    ],
    milestones: [
      {
        title: "Practice active listening",
        description: "Learn to slow down and truly hear others' perspectives before responding.",
        completed: false
      },
      {
        title: "Develop emotional intelligence",
        description: "Build awareness of your own emotions and those of others around you.",
        completed: false
      },
      {
        title: "Balance leadership with collaboration",
        description: "Find ways to lead while empowering others to contribute meaningfully.",
        completed: false
      }
    ]
  },
  dailyHabits: {
    summary: "You love a routine that keeps you on track, and it totally works for you—your days are focused and productive, and you feel best when you're in control. Adding a little downtime can help you recharge for your big goals.",
    morningHabits: [
      "Start your morning with a 5-minute goal check—like writing down one thing you want to achieve today.",
      "Add a small, relaxing habit—like taking a quick walk after lunch—to give your mind a break."
    ],
    eveningHabits: [
      "Wind down with a 10-minute habit, like reading a chapter of a book, to relax before bed."
    ]
  },
  communication: {
    summary: "You're confident and direct when you talk, always getting your point across with clarity. You love conversations that are goal-oriented, but sometimes you might come across as too intense without meaning to.",
    tips: [
      "Add a warm touch to your conversations—like starting with \"I'm really excited to hear your thoughts on this!\"",
      "Ask a friend a lighter question, like \"What's been the best part of your week?\"—it'll spark a more relaxed chat."
    ]
  },
  valuesAndMotivators: {
    summary: "You're all about achieving success and inspiring others to do the same. You value leadership, efficiency, and progress, and you're motivated by setting big goals, overcoming challenges, and making a lasting impact.",
    coreValues: [
      "Leadership",
      "Efficiency",
      "Progress"
    ],
    reflectionQuestions: [
      "What's one big goal you're working toward? How can you take a small step toward it this month?",
      "When do you feel most in your element—like you're unstoppable? How can you make that happen more?",
      "Who do you look up to for their leadership? What ENTJ trait do you share with them?"
    ]
  },
  communityConnection: {
    summary: "You don't have to figure this out alone! Come hang out with other ENTJs and career starters in our growing community. Share your best strategies for success, swap ideas, and let's build something awesome together.",
    suggestions: [
      "Drop your MBTI type in our community chat—say hi to other Commanders who get you!",
      "Join our weekly \"Leadership Goals\" chat to share your latest plans and ambitions."
    ]
  },
  actionItems: [
    {
      task: "Ask a coworker for input",
      completed: false,
      description: "Say \"What do you think we could do differently here?\""
    },
    {
      task: "Share a feeling with a loved one",
      completed: false,
      description: "Say \"I've been feeling a bit overwhelmed lately.\""
    },
    {
      task: "Let your friends take the lead on a plan",
      completed: false,
      description: "Say \"What do you guys want to do this time?\""
    },
    {
      task: "Reflect on what keeps you going",
      completed: false,
      description: "Journal about one big goal you're working toward."
    },
    {
      task: "Join our community chat",
      completed: false,
      description: "Say hi to another ENTJ—you'll love connecting!"
    }
  ]
};