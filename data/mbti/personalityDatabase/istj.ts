import { FullPersonalityDatabase } from "@/types/tests/mbti/results";

export const ISTJData: FullPersonalityDatabase = {
  career: {
    summary:
      `You excel in roles requiring organization and reliability, {firstname}. Your methodical approach to solving problems and attention to detail make you invaluable in roles that require precision and consistency. While you thrive in structured environments with clear expectations, you might find overly chaotic or constantly changing workplaces draining.`,
    superpowers: [
      {
        title: `Organization`,
        description:
          `You can bring order to chaos, like taking a messy project and creating a clear plan forward.`,
      },
      {
        title: `Reliability`,
        description:
          `People know they can count on you—always following through on commitments.`,
      },
    ],
    growthAreas: [
      {
        title: `Adaptability`,
        description:
          `You might find unexpected changes challenging—like when project requirements shift suddenly.`,
      },
      {
        title: `Big-Picture Thinking`,
        description:
          `You sometimes focus so much on details that you miss broader implications or strategic opportunities.`,
      },
    ],
    suggestions: [
      {
        title: `Project Coordinator`,
        matchPercentage: 90,
        description:
          `Your organizational skills and reliability make you perfect for ensuring projects stay on track and meet deadlines.`,
        qualityMatches: [
          {
            title: `Organization`,
            description: `You excel at tracking details and maintaining order.`,
          },
          {
            title: `Dependability`,
            description: `Team members can count on you to follow through.`,
          },
        ],
      },
      {
        title: `Data Analyst`,
        matchPercentage: 88,
        description:
          `Your analytical mindset and attention to detail make you excellent at finding patterns in data and providing accurate insights.`,
        qualityMatches: [
          {
            title: `Precision`,
            description: `You're meticulous and thorough in your analysis.`,
          },
          {
            title: `Logic`,
            description: `You apply clear reasoning to complex information.`,
          },
        ],
      },
      {
        title: `Accountant`,
        matchPercentage: 86,
        description:
          `Your precision and dependability make you well-suited for maintaining financial records and ensuring compliance with regulations.`,
        qualityMatches: [
          {
            title: `Attention to Detail`,
            description: `You catch discrepancies others might miss.`,
          },
          {
            title: `Process Orientation`,
            description: `You follow established procedures meticulously.`,
          },
        ],
      },
      {
        title: `Quality Assurance Specialist`,
        matchPercentage: 89,
        description:
          `Your eye for detail and commitment to standards make you exceptional at ensuring products and processes meet quality requirements. You excel at creating and implementing thorough testing procedures.`,
        qualityMatches: [
          {
            title: `Methodical Approach`,
            description: `You develop comprehensive testing protocols that leave no stone unturned.`,
          },
          {
            title: `Consistency`,
            description: `You maintain high standards across all your work, ensuring reliable outcomes.`,
          },
        ],
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          `Try a small experiment this week: when a plan changes, take three deep breaths before responding and look for one positive in the change.`,
      },
      {
        number: 2,
        description:
          `During your next project, schedule 15 minutes to think about how your work connects to larger goals or impacts others.`,
      },
      {
        number: 3,
        description:
          `Look for jobs that value precision and follow-through—your detail-oriented approach will shine!`,
      },
    ],
  },
  relationships: [
    {
      title: `Relationships`,
      subtitle: `How You Connect in Close Relationships, {firstname}`,
      description:
        `In close relationships, you're loyal and dependable, {firstname}—someone people can truly count on. You show your love through practical acts like making sure your partner's car is maintained or remembering important dates. You value stability and commitment, and once you're in, you're all in.`,
      compatibleTypes: [`ESFP`, `ESTP`, `ENFP`, `ENTP`, `ISTJ`, `ISFJ`, `ESTJ`],
      superpowers: [
        {
          title: `Steadfast Loyalty`,
          description:
            `Once you commit to someone, you're there through thick and thin—like making soup when they're sick or helping them move across town.`,
        },
        {
          title: `Practical Support`,
          description:
            `You show love through tangible help, like fixing things around the house or making sure bills are paid on time.`,
        },
      ],
      growthAreas: [
        {
          title: `Emotional Expression`,
          description:
            `You might find it challenging to share your deeper feelings—like telling your partner when something is bothering you instead of keeping it inside.`,
        },
        {
          title: `Embracing Spontaneity`,
          description:
            `You prefer structure and might resist last-minute plans—like when your partner suggests an impromptu weekend trip.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            `Practice sharing one feeling each day with someone close to you, even something simple like "I felt happy when we had dinner together."`,
        },
        {
          number: 2,
          description:
            `Once a month, say yes to a spontaneous activity your partner or friend suggests, even if it feels out of your comfort zone.`,
        },
        {
          number: 3,
          description:
            `Look for someone who appreciates your loyalty and practical nature but can also gently encourage you to open up emotionally.`,
        },
      ],
    },
    {
      title: `Friendships`,
      subtitle: `Your Friendship Style, {firstname}`,
      description:
        `As a friend, you're reliable and genuine. You may have a smaller circle of friends, but your connections are deep and long-lasting. You'll be there when your friends need practical help or sound advice, and they know they can count on you to follow through.`,
      compatibleTypes: [`ESFP`, `ESTP`, `ENFP`, `ENTP`, `ISTJ`, `ISFJ`, `ESTJ`],
      superpowers: [
        {
          title: `Reliable Presence`,
          description:
            `Your friends know they can count on you—like when you always show up to help them move or drive them to the airport at 5 am.`,
        },
        {
          title: `Thoughtful Advice`,
          description:
            `You give practical, well-considered guidance that actually helps people solve their problems.`,
        },
      ],
      growthAreas: [
        {
          title: `Initiating Get-Togethers`,
          description:
            `You might wait for others to make plans rather than suggesting activities yourself.`,
        },
        {
          title: `Opening Up`,
          description:
            `You might keep conversations on the surface rather than sharing what's really on your mind or asking deeper questions.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            `Take the initiative to plan one friendship activity this month, like inviting a friend for coffee or organizing a small gathering.`,
        },
        {
          number: 2,
          description:
            `During your next conversation with a close friend, share something you've been thinking about lately that you normally wouldn't bring up.`,
        },
      ],
    },
  ],
  growth: {
    summary:
      `Personal growth for you, {firstname}, involves building on your natural strengths while gently pushing yourself to try new experiences. It's about being a little kinder to yourself when things don't go according to plan and recognizing that sometimes the most valuable learning comes from unexpected detours.`,
    superpowers: [
      {
        title: `Systematic Approach`,
        description:
          `You excel at breaking down goals into manageable steps—like creating a detailed plan to learn a new skill.`,
      },
      {
        title: `Commitment`,
        description:
          `Once you decide to grow in an area, you stick with it—consistently showing up to practice or study.`,
      },
    ],
    growthAreas: [
      {
        title: `Self-Compassion`,
        description:
          `You might be too hard on yourself when things don't go perfectly—like when you make a minor mistake on a project.`,
      },
      {
        title: `Comfort with Uncertainty`,
        description:
          `You might avoid growth opportunities that don't have clear paths or outcomes—like declining a position that has evolving responsibilities.`,
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          `When you make a mistake this week, practice saying to yourself: "This is a normal part of learning, and it doesn't define my worth."`,
      },
      {
        number: 2,
        description:
          `Try one new activity this month that doesn't have a clear "right way" to do it—maybe an art class or improv workshop.`,
      },
      {
        number: 3,
        description:
          `Create a small, consistent practice that builds a skill you want to develop—even just 10 minutes daily can lead to meaningful growth.`,
      },
    ],
  },
  actionItems: [
    {
      task: `Practice taking deep breaths when plans change`,
      completed: false,
      description: `Three deep breaths, then find one positive aspect.`,
    },
    {
      task: `Share a feeling with someone close to you`,
      completed: false,
      description: `Even a simple one like "I enjoyed our conversation."`,
    },
    {
      task: `Initiate plans with a friend`,
      completed: false,
      description: `Invite someone for coffee or a walk.`,
    },
    {
      task: `Practice self-compassion after a mistake`,
      completed: false,
      description: `Remind yourself that everyone makes mistakes.`,
    },
    {
      task: `Connect with other ISTJs in our community`,
      completed: false,
      description: `Share your experiences and learn from others.`,
    },
  ],
  dailyHabits: {
    summary:
      `Your natural preference for structure and routine can be a tremendous asset, {firstname}. By thoughtfully designing your daily habits, you can create a life that feels both productive and meaningful. The key is to maintain the structure you thrive in while building in small variations that keep things fresh.`,
    habits: {
      morning: {
        title: `Mindful Morning`,
        description:
          `Start your day with 5 minutes of planning—reviewing your calendar and setting your top 3 priorities for the day.`,
      },
      afternoon: {
        title: `Reflection Break`,
        description:
          `Take a 10-minute break to step back from details and consider the bigger picture of what you're working on.`,
      },
      evening: {
        title: `Preparation Period`,
        description:
          `Spend 15 minutes preparing for tomorrow—laying out clothes, prepping lunch, or reviewing your schedule.`,
      },
    },
    communication: {
      summary:
        `Your communication style tends to be clear and direct, {firstname}. You say what you mean and mean what you say, which people appreciate. However, you might sometimes come across as overly blunt or miss emotional cues in conversations.`,
      tips: [
        `Before important conversations, take a moment to consider not just what you need to say, but how the other person might feel hearing it.`,
        `When someone shares a problem, try asking "Do you want suggestions or just someone to listen?" before offering solutions.`,
      ],
    },
  },
  valuesAndMotivators: {
    summary:
      `At your core, {firstname}, you value honesty, responsibility, and creating order from chaos. You're motivated by doing the right thing, being depended upon, and building a solid foundation for yourself and those you care about.`,
    coreValues: [
      {
        title: `Integrity`,
        description: `You believe in being honest and following through on commitments.`,
      },
      {
        title: `Structure`,
        description: `You value creating systems that bring efficiency and predictability.`,
      },
      {
        title: `Competence`,
        description: `You believe in developing mastery and doing things well.`,
      },
    ],
    motivators: [
      {
        title: `Creating Security`,
        description: `You're driven to build stable, reliable foundations.`,
      },
      {
        title: `Solving Problems`,
        description: `You're energized by finding practical solutions to real-world challenges.`,
      },
    ],
    actionItems: [
      {
        number: 1,
        description:
          `When making decisions this week, pause to ask yourself: "Does this align with my values of integrity, structure, and competence?"`,
      },
    ],
  },
  communityConnection: {
    summary:
      `You're not alone in your ISTJ journey, {firstname}! There's a whole community of people who share your practical approach to life and value systems. Connecting with them can help you learn new strategies for leveraging your strengths and navigating challenges.`,
    suggestions: [
      `Join our ISTJ channel in the community—we discuss everything from productivity systems to how to balance work and personal life.`,
      `Check out our weekly "Ask Me Anything" sessions where experienced ISTJs share how they've navigated career decisions and relationship dynamics.`,
    ],
  },
};
