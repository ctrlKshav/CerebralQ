import { PersonalityDatabase } from "@/types/tests/mbti";

export const INFJData: PersonalityDatabase = {
  career: {
    summary:
      "You’re a total star in jobs where you can make a difference and connect with people—like counseling, writing, or working for a nonprofit. You love roles that let you use your creativity and empathy, but you might feel drained if the work doesn’t align with your values or if there’s too much conflict.",
    superpowers: [
      {
        title: "Inspiring Others",
        description:
          "You have a way of motivating people, {firstname}—like sharing a vision that gets your team excited.",
      },
      {
        title: "Seeing the Big Picture",
        description:
          "You’re great at coming up with ideas that make a real impact, like planning a community project.",
      },
    ],
    growthAreas: [
      {
        title: "Setting Boundaries",
        description:
          "You might take on too much to help others—like staying up late to finish a coworker’s task.",
      },
      {
        title: "Handling Criticism",
        description:
          "You can take feedback personally—like feeling down if someone doesn’t love your idea.",
      },
    ],
    suggestions: [
      {
        title: "Counselor",
        matchPercentage: 90,
        description:
          "Your empathy and understanding make you a natural at helping others navigate their emotions and challenges.",
        qualityMatches: [
          {
            title: "Empathy",
            description: "You connect deeply with others’ feelings.",
          },
          { title: "Insight", description: "You see what others might miss." },
        ],
      },
      {
        title: "Nonprofit Director",
        matchPercentage: 88,
        description:
          "Leading a cause you care about lets you make a real difference—like organizing initiatives that change lives.",
        qualityMatches: [
          {
            title: "Visionary Thinking",
            description: "You see the potential for positive change.",
          },
          {
            title: "Compassion",
            description: "You’re driven by helping others.",
          },
        ],
      },
      {
        title: "Creative Writer",
        matchPercentage: 86,
        description:
          "Expressing your ideas through writing allows you to inspire and connect with others on a deep level.",
        qualityMatches: [
          {
            title: "Creativity",
            description: "You weave magic with your words.",
          },
          {
            title: "Empathy",
            description: "You understand and convey human experiences.",
          },
        ],
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          "Practice setting one boundary this week—like saying, “I can help tomorrow, but I need tonight to recharge.”",
      },
      {
        number: 2,
        description:
          "If you get feedback, take a deep breath and ask yourself, “What can I learn from this?”—it’ll help you grow.",
      },
      {
        number: 3,
        description:
          "Look for jobs that match your passion, like being a therapist or a creative writer—your kind of vibe!",
      },
    ],
  },
  relationships: [
    {
      title: "Relationships",
      subtitle: "How You Show Up in Relationships, {firstname}",
      description:
        "You’re the deep, caring one in your relationships, {firstname}—whether it’s with your partner, family, or friends. You love having meaningful connections, like staying up late talking about dreams with your bestie, but you might need time to recharge after being so emotionally present.",
      compatibleTypes: [],
      superpowers: [
        {
          title: "Understanding Others",
          description:
            "You get people on a deep level—like knowing exactly what to say when someone’s upset.",
        },
        {
          title: "Being Supportive",
          description:
            "You’re always there for the people you love, {firstname}, like cheering on your partner’s big goals.",
        },
      ],
      growthAreas: [
        {
          title: "Taking Time for Yourself",
          description:
            "You might put others’ needs first—like skipping your own plans to help a friend.",
        },
        {
          title: "Letting Go of Perfection",
          description:
            "You might overthink things—like worrying if you’re doing enough for your loved ones.",
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            "Schedule a solo evening this week—like watching your favorite movie with a cozy blanket—to recharge.",
        },
        {
          number: 2,
          description:
            "If you’re overthinking, remind yourself, “I’m doing my best, and that’s enough”—it’ll ease your mind.",
        },
        {
          number: 3,
          description:
            "Look for people who value deep connections, {firstname}—someone who loves your thoughtful nature as much as you do.",
        },
      ],
    },
    {
      title: "Friendships",
      subtitle: "How You Shine with Friends, {firstname}",
      description:
        "You’re the friend who really listens, {firstname}—always there for a heart-to-heart or to help with a big idea. You love having a small, close group of friends who get you, and you’re the one who makes everyone feel understood.",
      compatibleTypes: [],
      superpowers: [
        {
          title: "Being a Listener",
          description:
            "Your friends know they can talk to you about anything—like venting about a tough day.",
        },
        {
          title: "Creating Meaningful Moments",
          description:
            "You make the best memories, like planning a stargazing night with deep chats.",
        },
      ],
      growthAreas: [
        {
          title: "Sharing Your Own Needs",
          description:
            "You might not always say what you need—like keeping quiet when you’re feeling overwhelmed.",
        },
        {
          title: "Stepping Out of Your Shell",
          description:
            "You might stick to your close crew—trying a new social setting could be fun.",
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            "Tell a friend how you’re feeling this month—like “I’ve been feeling a bit tired, can we have a chill night?”",
        },
        {
          number: 2,
          description:
            "Join a new group activity, like a book club or a volunteer event, to meet new people who share your passions.",
        },
      ],
    },
  ],
  growth: {
    summary:
      "Growth for you is all about becoming the best version of yourself while staying true to your big dreams, {firstname}. You’re so good at understanding others, but you might need to focus on understanding yourself a little more too.",
    superpowers: [
      {
        title: "Dreaming Big",
        description:
          "Your vision for a better world helps you grow, {firstname}—like always learning how to make a difference.",
      },
      {
        title: "Being Reflective",
        description:
          "You love thinking deeply, which makes your growth journey so meaningful.",
      },
    ],
    growthAreas: [
      {
        title: "Taking Breaks",
        description:
          "You might push yourself too hard—like staying up late to finish a passion project.",
      },
      {
        title: "Letting Go of Doubts",
        description:
          "You can be hard on yourself—like wondering if you’re making enough of an impact.",
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          "Take a 15-minute break each day just for you—like going for a walk to clear your mind.",
      },
      {
        number: 2,
        description:
          "Try a new creative outlet this week, like painting or writing poetry, to express your big ideas.",
      },
      {
        number: 3,
        description:
          "Write down three things you love about being an INFJ when you’re feeling unsure, {firstname}.",
      },
    ],
  },
  actionItems: [
    {
      task: "Set one boundary this week",
      completed: false,
      description: "Say “I can help tomorrow, but I need tonight to recharge.”",
    },
    {
      task: "Schedule a solo evening",
      completed: false,
      description: "Watch your favorite movie with a cozy blanket.",
    },
    {
      task: "Join a new group activity",
      completed: false,
      description: "Like a book club or volunteer event.",
    },
    {
      task: "Reflect on what keeps you going",
      completed: false,
      description: "Journal about one cause you’re passionate about.",
    },
    {
      task: "Join our community chat and say hi to another INFJ",
      completed: false,
      description: "You’ll love connecting!",
    },
  ],
  dailyHabits: {
    summary:
      "You love a routine that feels meaningful, {firstname}, and it totally works for you—your days are thoughtful and calm, and you feel best when you’ve got a plan. Adding a little self-care can make your routine even more special.",
    habits: {
      morning: {
        title: "Journaling Session",
        description:
          "Start your morning with a 5-minute journaling session—like writing down one thing you’re excited about today.",
      },
      afternoon: {
        title: "Dreamy Habit",
        description:
          "Add a small, dreamy habit—like listening to calming music while you get ready—to spark your imagination.",
      },
      evening: {
        title: "Wind Down",
        description:
          "Wind down with a 10-minute habit, like sipping herbal tea while reflecting on your day, to relax before bed.",
      },
    },
    communication: {
      summary:
        "You’re warm and insightful when you talk, {firstname}, always making people feel understood. You love deep conversations, but sometimes you might hold back on sharing your own thoughts to avoid conflict.",
      tips: [
        "Share a little more in conversations—like saying “I’ve been thinking about this idea…” to open up.",
        "Ask a friend a deeper question, like “What’s been inspiring you lately?”—it’ll spark a meaningful chat.",
      ],
    },
  },
  valuesAndMotivators: {
    summary:
      "You’re all about making the world a better place and staying true to your values, {firstname}. You value empathy, authenticity, and growth, and you’re motivated by creating change and building deep connections with others.",
    coreValues: [
      {
        title: "Empathy",
        description: "You deeply understand and care for others’ feelings.",
      },
      {
        title: "Authenticity",
        description: "You stay true to yourself in everything you do.",
      },
      {
        title: "Growth",
        description: "You’re always looking to improve and learn.",
      },
    ],
    motivators: [
      {
        title: "Creating Change",
        description: "You’re driven by making a positive impact.",
      },
      {
        title: "Building Deep Connections",
        description: "You’re motivated by meaningful relationships.",
      },
    ],
    actionItems: [
      {
        number: 1,
        description:
          "Take 10 minutes each week to jot down your thoughts on these questions in a journal—it’ll keep you connected to what matters most to you.",
      },
    ],
  },
  communityConnection: {
    summary:
      "You don’t have to figure this out alone, {firstname}! Come hang out with other INFJs and career starters in our growing community. Share your big dreams, swap ideas, and let’s build something awesome together.",
    suggestions: [
      "Drop your MBTI type in our community chat—say hi to other Advocates who get you!",
      "Join our weekly “Dream Big” chat to share your latest ideas for making a difference.",
    ],
  },
};
