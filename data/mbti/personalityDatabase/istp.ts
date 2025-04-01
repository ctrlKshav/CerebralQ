import { PersonalityDatabase } from "@/types/tests/mbti";

export const ISTPData: PersonalityDatabase = {
  career: {
    summary:
      "You’re a total rockstar in jobs where you can get hands-on and solve problems—like engineering, tech support, or even something creative like photography. You love roles that let you figure things out in the moment, but you might get bored if you’re stuck doing the same thing every day or dealing with too many rules.",
    superpowers: [
      {
        title: "Fixing Things",
        description:
          "You’re a pro at solving problems, {firstname}—like troubleshooting a tech issue faster than anyone else.",
      },
      {
        title: "Staying Cool Under Pressure",
        description:
          "You handle chaos like a champ, like fixing a last-minute glitch during a project.",
      },
    ],
    growthAreas: [
      {
        title: "Planning Ahead",
        description:
          "You might wing it too much—like forgetting to prep for a big meeting.",
      },
      {
        title: "Working with Others",
        description:
          "You might prefer doing things solo—like skipping team brainstorming sessions.",
      },
    ],
    suggestions: [
      {
        title: "Electrician",
        matchPercentage: 90,
        description:
          "Your knack for understanding how things work makes you a natural at fixing electrical systems—like a real-life puzzle solver.",
        qualityMatches: [
          {
            title: "Problem-Solving",
            description: "You love tackling tricky wiring issues.",
          },
          {
            title: "Hands-On Skills",
            description: "You thrive when you can work with your hands.",
          },
        ],
      },
      {
        title: "Forensic Scientist",
        matchPercentage: 88,
        description:
          "Solving mysteries with science is right up your alley—perfect for your analytical and detail-oriented mind.",
        qualityMatches: [
          {
            title: "Attention to Detail",
            description: "You spot clues others miss.",
          },
          {
            title: "Logical Thinking",
            description: "You piece together evidence like a pro.",
          },
        ],
      },
      {
        title: "Video Game Designer",
        matchPercentage: 86,
        description:
          "Creating immersive worlds lets you blend your creativity with your love for problem-solving—like crafting the ultimate player experience.",
        qualityMatches: [
          {
            title: "Creativity",
            description: "You design unique game mechanics.",
          },
          {
            title: "Technical Skills",
            description: "You understand the tech behind the fun.",
          },
        ],
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          "Set a quick 5-minute plan before a big task this week—like jotting down three things you need to do for a project.",
      },
      {
        number: 2,
        description:
          "Join a team activity at work, like a quick group huddle, to connect with your coworkers and share your ideas.",
      },
      {
        number: 3,
        description:
          "Look for jobs that let you use your hands and problem-solve, like being a mechanic or a graphic designer—your kind of vibe!",
      },
    ],
  },
  relationships: [
    {
      title: "Relationships",
      subtitle: "How You Show Up in Relationships, {firstname}",
      description:
        "You’re the chill, dependable one in your relationships, {firstname}—whether it’s with your partner, family, or friends. You show love by doing practical things, like fixing your friend’s phone or taking your partner on a spontaneous adventure, but you might not always open up about your deeper feelings.",
      compatibleTypes: ['INTJ'],
      superpowers: [
        {
          title: "Being Handy",
          description:
            "You’re always there to help, {firstname}—like fixing something for your partner without them even asking.",
        },
        {
          title: "Keeping It Real",
          description:
            "You’re honest and straightforward, making people feel they can trust you.",
        },
      ],
      growthAreas: [
        {
          title: "Sharing Emotions",
          description:
            "You might keep your feelings to yourself—like not saying how much you appreciated a sweet moment.",
        },
        {
          title: "Sticking to Plans",
          description:
            "You might change plans last minute—like bailing on a dinner to try something new—which can throw others off.",
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            "This week, share one feeling with someone you care about—like “I had so much fun with you today.”",
        },
        {
          number: 2,
          description:
            "If you’re tempted to switch plans, check in with your loved one first—like “Hey, I had an idea, you cool with a change?”",
        },
        {
          number: 3,
          description:
            "Look for people who love your adventurous side, {firstname}—someone who’s down for spontaneous مفهوم fun as much as you are.",
        },
      ],
    },
    {
      title: "Friendships",
      subtitle: "How You Shine with Friends, {firstname}",
      description:
        "You’re the friend who’s always up for an adventure, {firstname}—whether it’s trying a new hobby or fixing something for your crew. You love having a small group of friends who are down to explore and keep things low-key.",
      compatibleTypes: ['INTJ'],
      superpowers: [
        {
          title: "Being Spontaneous",
          description:
            "Your friends love your “let’s do this!” vibe—like suggesting a last-minute road trip.",
        },
        {
          title: "Helping Out",
          description:
            "You’re the one they call for practical help, like fixing their bike or setting up their new gadget.",
        },
      ],
      growthAreas: [
        {
          title: "Opening Up",
          description:
            "You might not always share what’s going on with you—like keeping quiet when you’re stressed.",
        },
        {
          title: "Staying Connected",
          description:
            "You might go off the grid sometimes—like forgetting to text back for a few days.",
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            "Share something personal with a friend this month—like “I’ve been feeling a bit off lately, can we chat?”",
        },
        {
          number: 2,
          description:
            "Set a reminder to check in with a friend once a week—like sending a quick “Hey, how’s it going?” text.",
        },
      ],
    },
  ],
  growth: {
    summary:
      "Growth for you is all about mastering new skills and finding ways to connect a bit more, {firstname}. You’re amazing at figuring things out and staying calm, but you might need to work on slowing down and sharing more with others.",
    superpowers: [
      {
        title: "Learning Fast",
        description:
          "You pick up new skills like a pro, {firstname}—like teaching yourself how to edit videos in a weekend.",
      },
      {
        title: "Staying Chill",
        description:
          "You handle challenges with a cool head, which helps you grow without stress.",
      },
    ],
    growthAreas: [
      {
        title: "Thinking Long-Term",
        description:
          "You might focus on the now and miss the bigger picture—like not planning for a future goal.",
      },
      {
        title: "Being Vulnerable",
        description:
          "You might keep your guard up—like not sharing when you’re feeling down.",
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          "Set one long-term goal this month—like “I want to learn a new skill by the end of the year”—and break it into small steps.",
      },
      {
        number: 2,
        description:
          "Try a new hands-on hobby this week, like woodworking or cooking a new dish, to channel your energy in a fun way.",
      },
      {
        number: 3,
        description:
          "Write down three things you love about being an ISTP when you’re feeling unsure, {firstname}.",
      },
    ],
  },
  actionItems: [
    {
      task: "Set a quick 5-minute plan before a big task",
      completed: false,
      description: "Jot down three things you need to do.",
    },
    {
      task: "Share a feeling with a loved one",
      completed: false,
      description: "Say “I had so much fun with you today.”",
    },
    {
      task: "Set a reminder to text a friend",
      completed: false,
      description: "Send a quick “Hey, how’s it going?”",
    },
    {
      task: "Reflect on what keeps you going",
      completed: false,
      description: "Journal about one skill you’re proud of learning.",
    },
    {
      task: "Join our community chat and say hi to another ISTP",
      completed: false,
      description: "You’ll love connecting!",
    },
  ],
  dailyHabits: {
    summary:
      "You love a routine that gives you freedom, {firstname}, and it totally works for you—your days are chill and flexible, and you feel best when you can do things your way. Adding a little structure can help you make the most of your energy.",
    habits: {
      morning: {
        title: "Stretch",
        description:
          "Start your morning with a 5-minute stretch—like loosening up before heading out for the day.",
      },
      afternoon: {
        title: "Fun Habit",
        description:
          "Add a small, fun habit—like watching a quick tutorial on something you’re curious about—to spark your interest.",
      },
      evening: {
        title: "Wind Down",
        description:
          "Wind down with a 10-minute habit, like listening to music while you chill, to relax before bed.",
      },
    },
    communication: {
      summary:
        "You’re straightforward and relaxed when you talk, {firstname}, always keeping things real. You like conversations that get to the point, but sometimes you might not share enough to keep the chat going.",
      tips: [
        "Share a little more in conversations—like saying “I tried this new thing recently…” to keep the vibe going.",
        "Ask a friend a fun question, like “What’s the coolest thing you’ve done lately?”—it’ll spark a great chat.",
      ],
    },
  },
  valuesAndMotivators: {
    summary:
      "You’re all about freedom and mastering new skills, {firstname}. You value independence, practicality, and action, and you’re motivated by solving problems and exploring new experiences that keep life exciting.",
    coreValues: [
      {
        title: "Independence",
        description: "You thrive when you can do things your way.",
      },
      {
        title: "Practicality",
        description: "You value solutions that work in the real world.",
      },
      {
        title: "Action",
        description: "You’re driven by doing, not just thinking.",
      },
    ],
    motivators: [
      {
        title: "Solving Problems",
        description: "Tackling challenges keeps you sharp and engaged.",
      },
      {
        title: "Exploring New Experiences",
        description: "You’re motivated by trying new things and learning.",
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
      "You don’t have to figure this out alone, {firstname}! Come hang out with other ISTPs and career starters in our growing community. Share your best tips for solving problems, swap ideas, and let’s build something awesome together.",
    suggestions: [
      "Drop your MBTI type in our community chat—say hi to other Virtuosos who get you!",
      "Join our weekly “Hands-On Hacks” chat to share your latest fix-it tricks or projects.",
    ],
  },
};