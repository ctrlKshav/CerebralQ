import { PersonalityDatabase } from "@/types/tests/mbti/results";

export const ESTJData: PersonalityDatabase = {
  career: {
    summary:
      "You're a total powerhouse in jobs where you can lead and keep things on track—like management, teaching, or even something structured like accounting. You love roles that let you take charge and get results, but you might get frustrated if the work feels chaotic or if others don't follow through.",
    superpowers: [
      {
        title: "Leading the Way",
        description:
          "You're a natural at taking charge, {firstname}—like organizing a team to hit a big deadline.",
      },
      {
        title: "Being Reliable",
        description:
          "You always deliver, like making sure a project is done on time and done right.",
      },
    ],
    growthAreas: [
      {
        title: "Being Flexible",
        description:
          "You might struggle with last-minute changes—like a sudden shift in a work schedule.",
      },
      {
        title: "Listening to Others",
        description:
          "You might focus on your plan and miss new ideas—like not hearing out a coworker's suggestion.",
      },
    ],
    suggestions: [
      {
        title: "Project Manager",
        matchPercentage: 91,
        description:
          "Your knack for keeping projects on track and leading teams makes this role a slam dunk. You'd thrive ensuring deadlines are met and goals are crushed.",
        qualityMatches: [
          {
            title: "Organization",
            description: "You keep chaos at bay with your structured approach.",
          },
          {
            title: "Leadership",
            description: "Your ability to guide teams is unmatched.",
          },
        ],
      },
      {
        title: "Operations Manager",
        matchPercentage: 89,
        description:
          "Overseeing daily operations and improving efficiency is your wheelhouse. You'd excel at streamlining processes and boosting productivity.",
        qualityMatches: [
          {
            title: "Efficiency",
            description: "You optimize workflows like a pro.",
          },
          {
            title: "Dependability",
            description: "Everyone knows they can count on you.",
          },
        ],
      },
      {
        title: "Financial Analyst",
        matchPercentage: 85,
        description:
          "Your logical mind and attention to detail shine in analyzing data and making strategic calls. You'd love the structure and precision of this field.",
        qualityMatches: [
          {
            title: "Precision",
            description: "Your meticulous nature ensures accuracy.",
          },
          {
            title: "Decision-Making",
            description: "You make smart, results-driven choices.",
          },
        ],
      },
      {
        title: "School Administrator",
        matchPercentage: 87,
        description:
          "Your organizational prowess and dedication to established systems make you perfect for educational leadership. You'd excel at creating structured environments where students and staff can thrive.",
        qualityMatches: [
          {
            title: "Policy Implementation",
            description: "You ensure rules are followed fairly and consistently.",
          },
          {
            title: "Resource Management",
            description: "You excel at allocating budgets and staff effectively.",
          },
        ],
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          "If plans change, take a deep breath and break the new task into small steps you can tackle one at a time.",
      },
      {
        number: 2,
        description:
          `Ask a coworker for their input this week—like "What do you think about this idea?"—to open up to new perspectives.`,
      },
      {
        number: 3,
        description:
          `Look for jobs that let you lead, like being a project manager or a team supervisor—your kind of vibe!`,
      },
    ],
  },
  relationships: [
    {
      title: "Relationships",
      subtitle: "How You Show Up in Relationships, {firstname}",
      description:
        "You're the dependable, organized one in your relationships, {firstname}—whether it's with your partner, family, or friends. You show love by taking care of the people you care about, like planning a perfect birthday party for your partner or making sure your family's schedule runs smoothly, but you might need to work on being more flexible and emotional.",
      compatibleTypes: ["ISFP", "ISTP", "INFP", "INTP", "ISTJ", "ISFJ", "ESFJ"],
      superpowers: [
        {
          title: "Being Reliable",
          description:
            "People know they can count on you, {firstname}—like always being there for a friend in need.",
        },
        {
          title: "Taking Charge",
          description:
            "You make things happen, like organizing a family game night that everyone loves.",
        },
      ],
      growthAreas: [
        {
          title: "Being Open",
          description:
            "You might focus on the plan and miss the emotions—like not noticing when someone needs to talk.",
        },
        {
          title: "Going with the Flow",
          description:
            "You might struggle with spontaneity—like feeling thrown off by a last-minute date idea.",
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            `This week, check in with someone you care about—like "How are you feeling about things lately?"`,
        },
        {
          number: 2,
          description:
            `Say "yes" to a spontaneous plan, like a last-minute movie night—it'll feel good to mix things up!`,
        },
        {
          number: 3,
          description:
            "Look for people who appreciate your leadership, {firstname}—someone who loves your take-charge energy.",
        },
      ],
    },
    {
      title: "Friendships",
      subtitle: "How You Shine with Friends, {firstname}",
      description:
        "You're the friend who keeps everyone on track, {firstname}—always ready to organize a group hangout or lead a project. You love having a solid crew who respects your ability to get things done and enjoys your straightforward vibe.",
      compatibleTypes: ["ISTJ", "ENTJ", "INTJ", "ESTJ", "ESTP", "ESFJ", "ISFJ"],
      superpowers: [
        {
          title: "Being Dependable",
          description:
            "Your friends know you'll show up, {firstname}—like organizing a study group before finals.",
        },
        {
          title: "Keeping It Real",
          description:
            "You're honest and direct, making your friends feel they can trust you.",
        },
      ],
      growthAreas: [
        {
          title: "Being Flexible",
          description:
            "You might stick to your plans—like insisting on a schedule when your friends want to chill.",
        },
        {
          title: "Opening Up",
          description:
            "You might not share your feelings much—like keeping quiet when you're stressed about something.",
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            `Let your friends take the lead on a plan this month—like saying, "What do you guys want to do today?"`,
        },
        {
          number: 2,
          description:
            `Share something personal with a friend—like "I've been feeling a bit overwhelmed, can we chat?"`,
        },
      ],
    },
  ],
  growth: {
    summary:
      "Growth for you is all about building on your leadership skills while learning to be more flexible, {firstname}. You're amazing at getting things done and keeping everything organized, but you might need to work on loosening up and connecting more emotionally.",
    superpowers: [
      {
        title: "Being Organized",
        description:
          "You're a pro at setting goals and making them happen, {firstname}—like sticking to a plan no matter what.",
      },
      {
        title: "Staying Committed",
        description:
          "You don't give up easily, which makes your growth journey so strong.",
      },
    ],
    growthAreas: [
      {
        title: "Embracing Change",
        description:
          "You might resist unexpected changes—like feeling stressed when plans shift last minute.",
      },
      {
        title: "Being Kinder to Yourself",
        description:
          "You might put pressure on yourself—like stressing if things aren't perfect.",
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          "Try one spontaneous thing this week, like taking a new route to work or trying a new food—it'll feel refreshing!",
      },
      {
        number: 2,
        description:
          `At the end of each day, write down one thing you're proud of—like "I handled that meeting really well."`,
      },
      {
        number: 3,
        description:
          "Write down three things you love about being an ESTJ when you're feeling hard on yourself, {firstname}.",
      },
    ],
  },
  actionItems: [
    {
      task: "If plans change, break the new task into small steps",
      completed: false,
      description: "Tackle them one at a time.",
    },
    {
      task: "Check in with a loved one",
      completed: false,
        description: `Ask "How are you feeling about things lately?"`,
    },
    {
      task: "Let your friends take the lead on a plan",
      completed: false,
      description: `Say "What do you guys want to do today?"`,
    },
    {
      task: "Reflect on what keeps you going",
      completed: false,
      description: "Journal about one thing you've accomplished lately.",
    },
    {
      task: "Join our community chat and say hi to another ESTJ",
      completed: false,
      description: "You'll love connecting!",
    },
  ],
  dailyHabits: {
    summary:
      "You love a routine that keeps you on track, {firstname}, and it totally works for you—your days are structured and productive, and you feel best when you've got a plan. Adding a little flexibility can help you enjoy the moment more.",
    habits: {
      morning: {
        title: "To-Do List",
        description:
          "Start your morning with a 5-minute to-do list—like writing down three things you want to get done today.",
      },
      afternoon: {
        title: "Fun Habit",
        description:
          "Add a small, fun habit—like listening to a new song while you get ready—to bring some variety to your day.",
      },
      evening: {
        title: "Wind Down",
        description:
          "Wind down with a 10-minute habit, like sipping tea while reading a book, to relax before bed.",
      },
    },
    communication: {
      summary:
        "You're clear and direct when you talk, {firstname}, always getting to the point. You love conversations that are practical and focused, but sometimes you might come across as too serious without meaning to.",
      tips: [
        `Add a warm touch to your conversations—like starting with "I'm really glad we're talking about this!"`,
        `Ask a friend a fun question, like "What's the best thing that happened to you this week?"—it'll spark a lighter chat.`,
      ],
    },
  },
  valuesAndMotivators: {
    summary:
      "You're all about getting things done and keeping things steady, {firstname}. You value responsibility, structure, and honesty, and you're motivated by achieving your goals and making sure everyone around you succeeds too.",
    coreValues: [
      {
        title: "Responsibility",
        description: "You take your duties seriously and deliver every time.",
      },
      {
        title: "Structure",
        description: "You thrive in an organized, predictable environment.",
      },
    ],
    motivators: [
      {
        title: "Achieving Your Goals",
        description: "Hitting targets keeps you fired up.",
      },
      {
        title: "Helping Others Succeed",
        description: "You love seeing your team thrive under your guidance.",
      },
    ],
    actionItems: [
      {
        number: 1,
        description:
          "Take 10 minutes each week to jot down your thoughts on these questions in a journal—it'll keep you connected to what matters most to you.",
      },
    ],
  },
  communityConnection: {
    summary:
      "You don't have to figure this out alone, {firstname}! Come hang out with other ESTJs and career starters in our growing community. Share your best tips for staying organized, swap ideas, and let's build something awesome together.",
    suggestions: [
      `Drop your MBTI type in our community chat—say hi to other Executives who get you!`,
      `Join our weekly "Leadership Vibes" chat to share your go-to strategies for getting things done.`,
    ],
  },
};
