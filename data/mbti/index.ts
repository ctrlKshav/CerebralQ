import { ResultData } from "@/types/tests/mbti";

export const sampleResultData: ResultData = {
  username: null,
  personalityType: "ESFJ",
  personalityDescription: {
    alias: "The Consul",
    description:
      "You're a natural people-person who loves bringing everyone together, always making sure the people around you feel cared for and supported. Whether it's hosting a game night for your friends or checking in on your family, you've got a big, warm heart that makes you so special."
  },
  completionDate: new Date().toLocaleDateString(),
  traitScores: {
    "E-I": {
      left: 22,
      right: 8,
      leftPercentage: 73,
      rightPercentage: 27,
      dominant: "left"
    },
    "S-N": {
      left: 20,
      right: 10,
      leftPercentage: 67,
      rightPercentage: 33,
      dominant: "left"
    },
    "T-F": {
      left: 7,
      right: 23,
      leftPercentage: 23,
      rightPercentage: 77,
      dominant: "right"
    },
    "J-P": {
      left: 21,
      right: 9,
      leftPercentage: 70,
      rightPercentage: 30,
      dominant: "left"
    }
  },
  career: {
    summary: "You're a total gem in jobs where you can connect with people and keep things running smoothly—like teaching, nursing, or event planning. You love roles that let you support others and create a sense of community, but you might feel stressed if the work environment feels cold or if you don't get the appreciation you deserve.",
    superpowers: [
      "Building Connections",
      "Staying Organized",
      "Creating Harmony",
      "Being Supportive"
    ],
    growthAreas: [
      "Saying No",
      "Handling Criticism",
      "Taking Time for Yourself",
      "Speaking Up"
    ],
    matches: [
      {
        title: "Teaching",
        matchPercentage: 95,
        description: "Roles that let you connect with others and nurture their growth, using your natural talent for supporting and organizing."
      },
      {
        title: "Nursing",
        matchPercentage: 92,
        description: "Healthcare roles where you can provide compassionate care and create a supportive environment for patients."
      },
      {
        title: "Event Planning",
        matchPercentage: 88,
        description: "Organizing gatherings where your attention to detail and people skills help create memorable experiences."
      },
      {
        title: "Community Organizing",
        matchPercentage: 85,
        description: "Roles that let you build community and support others, bringing people together for a common cause."
      }
    ],
    actionSteps: [
      "Practice saying \"no\" once this week—like \"I'd love to help, but I'm swamped right now.\"",
      "If you get feedback, take a deep breath and think, \"This can help me grow\"—it'll make it easier to handle.",
      "Look for jobs that let you care for others, like being a teacher or a community organizer—your kind of vibe!"
    ]
  },
  relationships: [
    {
      type: "Romantic",
      description: "You're the nurturing, social one in your relationships. You show love by making people feel special, like planning a thoughtful date night for your partner or calling to check in.",
      compatibleTypes: ["ISFP", "ISTP", "INTJ", "INFJ"],
      superpowers: [
        "Being Thoughtful",
        "Creating Harmony"
      ],
      growthAreas: [
        "Taking Time for Yourself",
        "Letting Go of Small Stuff"
      ],
      tips: [
        "Schedule time for yourself - try saying 'I'm going to take an hour to recharge today'",
        "If you're overthinking something, ask yourself, 'Will this matter in a week?'—it'll help you let go",
        "Look for partners who appreciate your caring nature and give back as much as you give"
      ]
    },
    {
      type: "Friendship",
      description: "You're the friend who makes everyone feel at home, always ready to host a fun get-together or check in on your crew. You love having a big group of friends who feel like family.",
      compatibleTypes: ["INFP", "ENFP", "INTP", "ENTP"],
      superpowers: [
        "Being Supportive",
        "Planning Fun Times"
      ],
      growthAreas: [
        "Speaking Up",
        "Trying New Things"
      ],
      tips: [
        "Open up about your own feelings - try saying 'I've been feeling a bit stressed lately'",
        "Plan a new kind of hangout, like a picnic in the park, to mix things up with your crew",
        "Make time for your own hobbies and interests between social events"
      ]
    }
  ],
  growth: {
    summary: "Growth for you is all about becoming an even better version of your amazing self while learning to take care of you too. You're so good at supporting others, but you might forget to give yourself the same love and care you give everyone else.",
    superpowers: [
      "Being Kind",
      "Staying Grounded"
    ],
    growthAreas: [
      "Putting Yourself First",
      "Embracing Change"
    ],
    actionSteps: [
      "Take 10 minutes each day just for you—like sipping coffee while listening to your favorite podcast",
      "Try one new thing this week, like joining a dance class or trying a new recipe—it'll feel exciting!",
      "Write down three things you love about being an ESFJ when you're feeling hard on yourself"
    ],
    milestones: [
      {
        title: "Practice saying no",
        description: "Learn to set boundaries when taking on too many responsibilities for others.",
        completed: false
      },
      {
        title: "Make time for self-care",
        description: "Create regular habits that prioritize your own needs and well-being.",
        completed: false
      },
      {
        title: "Embrace change",
        description: "Try new experiences and approach unfamiliar situations with an open mind.",
        completed: false
      }
    ]
  },
  dailyHabits: {
    summary: "You love a routine that keeps you connected, and it totally works for you—your days are warm and organized, and you feel best when you're taking care of others. Adding a little self-care can make your routine even more special.",
    morningHabits: [
      "Start your morning with a 5-minute gratitude list—like writing down three things you're thankful for today",
      "Add a small, cozy habit—like lighting a candle while you plan your day—to make your morning feel extra nice"
    ],
    eveningHabits: [
      "Wind down with a 10-minute habit, like texting a friend to say goodnight, to relax before bed"
    ]
  },
  communication: {
    summary: "You're warm and friendly when you talk, always making people feel heard and cared for. You love conversations that bring people together, but sometimes you might hold back on sharing your own thoughts to keep the peace.",
    tips: [
      "Share a little more in conversations—like saying \"I really loved that idea because…\" to open up",
      "Ask a friend a fun question, like \"What's been making you smile lately?\"—it'll spark a deeper chat"
    ]
  },
  valuesAndMotivators: {
    summary: "You're all about taking care of the people you love and creating a sense of community. You value connection, kindness, and stability, and you're motivated by making others feel supported while building a life full of love and harmony.",
    coreValues: [
      "Connection",
      "Kindness",
      "Stability"
    ],
    reflectionQuestions: [
      "What's one kind thing you've done lately that made you feel good? How can you do more of that?",
      "When do you feel most connected—like everyone's coming together? How can you make that happen more?",
      "Who do you look up to for their warmth? What ESFJ trait do you share with them?"
    ]
  },
  communityConnection: {
    summary: "You don't have to figure this out alone! Come hang out with other ESFJs and career starters in our growing community. Share your best tips for bringing people together, swap ideas, and let's build something awesome together.",
    suggestions: [
      "Drop your MBTI type in our community chat—say hi to other Consuls who get you!",
      "Join our weekly \"Community Builders\" chat to share your favorite ways to connect with others"
    ]
  },
  actionItems: [
    {
      task: "Practice saying 'no' once this week",
      completed: false,
      description: "Try saying: 'I'd love to help, but I'm swamped right now.'"
    },
    {
      task: "Schedule a solo evening for yourself",
      completed: false,
      description: "Watch your favorite show with a cozy blanket to recharge."
    },
    {
      task: "Plan a new kind of hangout with friends",
      completed: false,
      description: "Try a picnic in the park or another activity outside your usual routine."
    },
    {
      task: "Start a 5-minute gratitude practice",
      completed: false,
      description: "Write down three things you're thankful for each morning."
    },
    {
      task: "Open up to a friend about something you're going through",
      completed: false,
      description: "Try saying: 'I've been feeling a bit stressed lately.'"
    }
  ]
};