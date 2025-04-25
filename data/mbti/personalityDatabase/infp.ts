import { FullPersonalityDatabase } from "@/types/tests/mbti/results";

export const INFPData: FullPersonalityDatabase = {
  career: {
    summary: `You're a total star in jobs where you can express your creativity and make a difference—like writing, counseling, or working for a cause you care about. You love roles that let you follow your values, but you might feel drained if the work feels too rigid or doesn't match your ideals.`,
    superpowers: [
      {
        title: `Being Creative`,
        description: `You bring a unique perspective, {firstname}—like coming up with a campaign idea that inspires everyone.`,
      },
      {
        title: `Caring Deeply`,
        description: `You put your heart into your work, like making sure a project reflects what you believe in.`,
      },
    ],
    growthAreas: [
      {
        title: `Staying Organized`,
        description: `You might get lost in your ideas—like forgetting to check a deadline while brainstorming.`,
      },
      {
        title: `Handling Criticism`,
        description: `You might take feedback personally—like feeling down if someone doesn't love your work.`,
      },
    ],
    suggestions: [
      {
        title: `Creative Writer`,
        matchPercentage: 90,
        description: `Your imagination and empathy make storytelling your superpower. You'd thrive crafting novels, scripts, or content that moves hearts.`,
        qualityMatches: [
          {
            title: `Creativity`,
            description: `Your endless ideas bring stories to life.`,
          },
          {
            title: `Emotional Depth`,
            description: `You weave feelings into words effortlessly.`,
          },
        ],
      },
      {
        title: `Counselor`,
        matchPercentage: 88,
        description: `Helping others find their path lights you up. You'd excel guiding people with your empathy and gentle wisdom.`,
        qualityMatches: [
          {
            title: `Empathy`,
            description: `You understand and connect with people's emotions deeply.`,
          },
          {
            title: `Inspiration`,
            description: `You motivate others to pursue their true selves.`,
          },
        ],
      },
      {
        title: `Nonprofit Coordinator`,
        matchPercentage: 86,
        description: `Working for a cause you care about lets you make a real difference. You'd shine organizing initiatives that align with your values.`,
        qualityMatches: [
          {
            title: `Passion`,
            description: `Your dedication drives meaningful change.`,
          },
          {
            title: `Creativity`,
            description: `You bring fresh ideas to nonprofit campaigns.`,
          },
        ],
      },
      {
        title: `Art Therapist`,
        matchPercentage: 89,
        description: `Combining your creative talents with your deep empathy allows you to help others heal through artistic expression. You'd excel at creating safe spaces for emotional growth.`,
        qualityMatches: [
          {
            title: `Therapeutic Insight`,
            description: `You intuitively understand how creativity can heal emotional wounds.`,
          },
          {
            title: `Compassionate Guidance`,
            description: `You gently support others through their personal journeys.`,
          },
        ],
      },
    ],
    actionSteps: [
      {
        number: 1,
        description: `Set a quick 5-minute plan for your day—like jotting down three tasks you need to focus on.`,
      },
      {
        number: 2,
        description: `If you get feedback, take a deep breath and think, "This can help me grow"—it'll make it easier to handle.`,
      },
      {
        number: 3,
        description: `Look for jobs that let you create and care, like being a writer or a social worker—your kind of vibe!`,
      },
    ],
  },
  relationships: [
    {
      title: `Relationships`,
      subtitle: `How You Show Up in Relationships, {firstname}`,
      description: `You're the dreamy, empathetic one in your relationships, {firstname}—whether it's with your partner, family, or friends. You show love through deep understanding, like writing a sweet note for your partner or listening to your friend's worries, but you might need time to recharge after being so emotionally open.`,
      compatibleTypes: [`ENTJ`, `ENFJ`, `INTJ`, `INFJ`, `ENTP`, `ENFP`, `ESTJ`],
      superpowers: [
        {
          title: `Being Empathetic`,
          description: `You really get how people feel, {firstname}—like knowing just what to say when someone's upset.`,
        },
        {
          title: `Creating Magic`,
          description: `You bring a special touch to relationships, like planning a cozy date night under the stars.`,
        },
      ],
      growthAreas: [
        {
          title: `Setting Boundaries`,
          description: `You might give too much of yourself—like canceling your plans to help a friend.`,
        },
        {
          title: `Speaking Up`,
          description: `You might avoid conflict—like not saying when something's bothering you.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description: `Practice setting one boundary this week—like saying, "I'd love to help, but I need some time for myself tonight."`,
        },
        {
          number: 2,
          description: `If something's on your mind, share it gently—like "I felt a bit hurt when that happened, can we talk?"`,
        },
        {
          number: 3,
          description: `Look for people who value your dreamy side, {firstname}—someone who loves your big heart as much as you do.`,
        },
      ],
    },
    {
      title: `Friendships`,
      subtitle: `How You Shine with Friends, {firstname}`,
      description: `You're the friend who brings a warm, creative vibe to the group, {firstname}—always there for a deep chat or a fun, heartfelt moment. You love having a small crew who gets your sensitive, artsy side and is up for meaningful adventures.`,
      compatibleTypes: [`ENFJ`, `INFJ`, `ENFP`, `INTP`, `INTJ`, `ISFP`, `ESFJ`],
      superpowers: [
        {
          title: `Being a Listener`,
          description: `Your friends know they can talk to you about anything—like sharing their dreams over coffee.`,
        },
        {
          title: `Making Things Special`,
          description: `You create the best memories, like planning a bonfire night with storytelling.`,
        },
      ],
      growthAreas: [
        {
          title: `Sharing Your Needs`,
          description: `You might not always say what you need—like keeping quiet when you'd rather do something else.`,
        },
        {
          title: `Staying Consistent`,
          description: `You might get caught up in your own world—like forgetting to check in for a while.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description: `Tell a friend what you need this month—like "I'd love to have a quiet night, can we do that?"`,
        },
        {
          number: 2,
          description: `Set a reminder to check in with a friend once a week—like sending a quick "Hey, how's my favorite person doing?" text.`,
        },
      ],
    },
  ],
  growth: {
    summary: `You're on a beautiful journey of growth, {firstname}—always learning to embrace your unique sensitivity while building the skills to stay grounded. You shine when you balance your dreamy side with practical steps, like creating art that inspires change.`,
    superpowers: [
      {
        title: `Being Authentic`,
        description: `You stay true to yourself, {firstname}—like choosing work that matters to you, even if it's not the easiest path.`,
      },
      {
        title: `Seeing Possibilities`,
        description: `You imagine wonderful futures, like picturing the perfect solution to a tough problem.`,
      },
    ],
    growthAreas: [
      {
        title: `Taking Action`,
        description: `You might get stuck in dreaming—like planning the perfect project but not starting it.`,
      },
      {
        title: `Being Kind to Yourself`,
        description: `You might be too hard on yourself—like feeling you've failed if you don't meet your ideals.`,
      },
    ],
    actionSteps: [
      {
        number: 1,
        description: `Take one tiny step toward a dream this week—like writing just one paragraph of your book idea.`,
      },
      {
        number: 2,
        description: `Try saying something nice to yourself each morning—like "I'm doing my best, and that's enough."`,
      },
      {
        number: 3,
        description: `Celebrate your unique perspective, {firstname}—it's the special sauce that makes you amazing!`,
      },
    ],
  },
  actionItems: [
    {
      task: `Set a quick 5-minute plan for your day`,
      completed: false,
      description: `Jot down three tasks to focus on.`,
    },
    {
      task: `Set a boundary this week`,
      completed: false,
      description: `Say "I'd love to help, but I need some time for myself tonight."`,
    },
    {
      task: `Set a reminder to text a friend`,
      completed: false,
      description: `Send a quick "Hey, how's my favorite person doing?"`,
    },
    {
      task: `Reflect on what keeps you going`,
      completed: false,
      description: `Journal about one thing you've done that felt true to your values.`,
    },
    {
      task: `Join our community chat and say hi to another INFP`,
      completed: false,
      description: `You'll love connecting!`,
    },
  ],
  dailyHabits: {
    summary:
      `Your ideal day has plenty of you-time, {firstname}—with space to create, reflect, and connect meaningfully with others. You thrive with a flexible schedule that balances alone time with heartfelt conversations and creative pursuits.`,
    habits: {
      morning: {
        title: `Morning Reflection`,
        description:
          `Start your day gently—like journaling with tea before checking your phone.`,
      },
      afternoon: {
        title: `Creative Space`,
        description:
          `Set aside time for your art—even just 20 minutes of writing or drawing daily.`,
      },
      evening: {
        title: `Nature Connection`,
        description:
          `Recharge with the natural world—like a walk in a park during your lunch break.`,
      },
    },
    communication: {
      summary:
        `You're warm and thoughtful when you talk, {firstname}, always making people feel heard. You love deep, meaningful conversations, but sometimes you might hold back to avoid hurting anyone's feelings.`,
      tips: [
        `Help others understand how you think—like "I need some time to reflect before I decide."`,
        `Be clear about your boundaries—like "Could we schedule this when I'm feeling more creative?"`,
        `When making decisions, consider both feelings and facts—like "This feels right, and here's why."`,
      ],
    },
  },
  valuesAndMotivators: {
    summary: `Your core values guide everything you do, {firstname}—you're motivated by creating meaning, staying true to yourself, and making the world a kinder place. You're at your best when your work and relationships reflect what matters most to you.`,
    coreValues: [
      {
        title: `Authenticity`,
        description: `Being true to your heart matters deeply to you, {firstname}—like choosing to express your real feelings even when it's hard.`,
      },
      {
        title: `Creativity`,
        description: `You value self-expression and imagination, like finding new ways to share ideas that touch others.`,
      },
      {
        title: `Compassion`,
        description: `You believe in treating everyone with kindness, like taking time to help someone who's struggling.`,
      },
      {
        title: `Meaning`,
        description: `You seek purpose in everything, like choosing work that contributes to a better world.`,
      },
    ],
    motivators: [
      {
        title: `Making a Difference`,
        description: `You're driven to help others and leave a positive mark on the world.`,
      },
      {
        title: `Personal Growth`,
        description: `You're motivated by becoming your best self and exploring your potential.`,
      },
      {
        title: `Emotional Connection`,
        description: `Having authentic relationships energizes you and gives you purpose.`,
      },
      {
        title: `Creative Expression`,
        description: `Being able to share your unique voice and ideas lights you up inside.`,
      },
    ],
    actionItems: [
      {
        number: 1,
        description: `Take 10 minutes each week to jot down your thoughts on these questions in a journal—it'll keep you connected to what matters most to you.`,
      },
    ],
  },
  communityConnection: {
    summary:
      `You don't have to figure this out alone, {firstname}! Come hang out with other INFPs and career starters in our growing community. Share your dreams, swap ideas, and let's build something awesome together.`,
    suggestions: [
      `Drop your MBTI type in our community chat—say hi to other Mediators who get you!`,
      `Join our weekly "Dreamy Ideas" chat to share your latest thoughts and inspirations.`,
    ],
  },
};
