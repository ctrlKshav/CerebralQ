import { PersonalityDatabase } from "@/types/tests/mbti/results";

export const INTJData: PersonalityDatabase = {
  career: {
    summary:
      `You excel in roles requiring strategy and vision, {firstname}. Your analytical mind and future-focused thinking make you exceptional at creating systems and implementing long-term plans. You quickly see inefficiencies in processes and can develop innovative solutions to complex problems. While you thrive in environments that value competence and allow for autonomy, you might find highly social or chaotic workplaces draining.`,
    superpowers: [
      {
        title: `Strategic Vision`,
        description:
          `You naturally see the big picture and can map out the steps to get there—like planning a multi-year project roadmap that others can't envision.`,
      },
      {
        title: `Analytical Thinking`,
        description:
          `You excel at breaking down complex problems into solvable parts—spotting patterns and solutions others miss.`,
      },
    ],
    growthAreas: [
      {
        title: `Team Communication`,
        description:
          `You might sometimes struggle to explain your insights to others—like when your team doesn't immediately grasp your vision.`,
      },
      {
        title: `Patience with Process`,
        description:
          `You can become frustrated when implementation doesn't match your vision—like when bureaucracy slows down your innovative ideas.`,
      },
    ],
    suggestions: [
      {
        title: `Systems Architect`,
        matchPercentage: 92,
        description:
          `Your ability to see the big picture and design elegant solutions makes you ideal for creating and refining complex systems.`,
        qualityMatches: [
          {
            title: `Strategic Thinking`,
            description: `You excel at designing comprehensive systems that work well over time.`,
          },
          {
            title: `Problem Solving`,
            description: `You naturally identify inefficiencies and develop innovative solutions.`,
          },
        ],
      },
      {
        title: `Management Consultant`,
        matchPercentage: 89,
        description:
          `Your analytical skills and ability to see what others miss make you excellent at diagnosing organizational issues and recommending improvements.`,
        qualityMatches: [
          {
            title: `Process Improvement`,
            description: `You quickly identify inefficiencies in systems and operations.`,
          },
          {
            title: `Strategic Analysis`,
            description: `You excel at evaluating complex situations and developing actionable insights.`,
          },
        ],
      },
      {
        title: `Financial Analyst`,
        matchPercentage: 87,
        description:
          `Your analytical mindset and attention to detail make you well-suited for analyzing market trends and making sound investment recommendations.`,
        qualityMatches: [
          {
            title: `Data Analysis`,
            description: `You excel at interpreting complex financial information.`,
          },
          {
            title: `Long-term Planning`,
            description: `You naturally consider future implications of current decisions.`,
          },
        ],
      },
      {
        title: `Research Scientist`,
        matchPercentage: 90,
        description:
          `Your intellectual curiosity and methodical approach make you ideal for pursuing advanced research and developing groundbreaking theories or technologies. You thrive when given independence to explore complex problems.`,
        qualityMatches: [
          {
            title: `Conceptual Thinking`,
            description: `You excel at developing theoretical frameworks and testing hypotheses.`,
          },
          {
            title: `Innovation`,
            description: `You're driven to discover new approaches and challenge conventional wisdom.`,
          },
        ],
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          `Practice explaining your ideas using analogies or visual aids to help others understand your vision more easily.`,
      },
      {
        number: 2,
        description:
          `When implementing a project, build in checkpoints to gather feedback from stakeholders, even if it seems unnecessary to you.`,
      },
      {
        number: 3,
        description:
          `Look for roles that value your strategic thinking and allow you independence to implement your ideas—your visionary approach will be appreciated.`,
      },
    ],
  },
  relationships: [
    {
      title: `Relationships`,
      subtitle: `How You Connect in Close Relationships, {firstname}`,
      description:
        `In close relationships, you value depth and intellectual connection, {firstname}. You're selective about who you let in, but once committed, you're deeply loyal and devoted. You show your love through thoughtful gestures and meaningful conversations rather than grand displays of emotion. You need a partner who respects your independence while forming a strong bond with you.`,
      compatibleTypes: [`ENFP`, `ENTP`, `INFP`, `INTP`, `INTJ`, `ENTJ`, `INFJ`],
      superpowers: [
        {
          title: `Unwavering Loyalty`,
          description:
            `Once you commit to someone, you're all in—like remembering every important date and being there through life's challenges.`,
        },
        {
          title: `Intellectual Connection`,
          description:
            `You create deep bonds through meaningful conversations—discussing ideas, theories, and life's big questions.`,
        },
      ],
      growthAreas: [
        {
          title: `Emotional Expression`,
          description:
            `You might find it challenging to verbalize your feelings—like saying "I love you" even when you deeply care.`,
        },
        {
          title: `Flexibility`,
          description:
            `You may struggle with unexpected changes in plans or routines within your relationship.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            `Set a reminder to express appreciation to your partner once a day—even a simple "I value how you handled that situation."`,
        },
        {
          number: 2,
          description:
            `When your partner wants to try something spontaneous, practice saying yes at least half the time, even if it disrupts your plans.`,
        },
        {
          number: 3,
          description:
            `Look for a partner who appreciates your depth and strategic mind but can also help you open up emotionally.`,
        },
      ],
    },
    {
      title: `Friendships`,
      subtitle: `Your Friendship Style, {firstname}`,
      description:
        `As a friend, you're selective but intensely loyal. You prefer a small circle of deep connections over a wide network of acquaintances. Your friendships are built on mutual respect, intellectual stimulation, and shared values rather than just social activities.`,
      compatibleTypes: [`ENFP`, `ENTP`, `INFP`, `INTP`, `INTJ`, `ENTJ`, `INFJ`],
      superpowers: [
        {
          title: `Insightful Support`,
          description:
            `You offer friends valuable perspective and advice—like helping them see the bigger picture when they're stuck on a problem.`,
        },
        {
          title: `Long-term Loyalty`,
          description:
            `You maintain friendships over decades, staying connected even through long distances or life changes.`,
        },
      ],
      growthAreas: [
        {
          title: `Initiating Social Contact`,
          description:
            `You might wait for others to reach out rather than organizing get-togethers yourself.`,
        },
        {
          title: `Casual Conversation`,
          description:
            `You might find small talk challenging, preferring to dive straight into deeper topics.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            `Take the initiative to plan one social event this month—it doesn't need to be elaborate, even a coffee meet-up counts.`,
        },
        {
          number: 2,
          description:
            `Practice active listening in conversations—ask follow-up questions about topics your friends bring up, even if they seem mundane to you.`,
        },
      ],
    },
  ],
  growth: {
    summary:
      `Personal growth for you, {firstname}, involves balancing your natural strategic thinking with emotional awareness and interpersonal skills. Developing your already impressive intellectual abilities while expanding your comfort with emotions can lead to powerful personal transformation.`,
    superpowers: [
      {
        title: `Self-Improvement`,
        description:
          `You're naturally driven to enhance your capabilities—constantly seeking new knowledge and skills.`,
      },
      {
        title: `Independent Learning`,
        description:
          `You excel at teaching yourself new concepts—diving deep into subjects that interest you.`,
      },
    ],
    growthAreas: [
      {
        title: `Emotional Awareness`,
        description:
          `You might sometimes overlook the emotional aspects of life—like focusing on solutions when a friend just needs empathy.`,
      },
      {
        title: `Celebrating Small Wins`,
        description:
          `You tend to focus on the next goal rather than acknowledging current achievements.`,
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          `Set aside 5 minutes each day to reflect on your emotions—not analyzing them, but simply acknowledging how you feel.`,
      },
      {
        number: 2,
        description:
          `After completing a project or reaching a milestone, take time to celebrate before moving to the next goal—even a small acknowledgment helps.`,
      },
      {
        number: 3,
        description:
          `Join a group activity that pushes you slightly outside your comfort zone—like a discussion group or workshop on emotional intelligence.`,
      },
    ],
  },
  actionItems: [
    {
      task: `Use visuals or analogies to explain your ideas`,
      completed: false,
      description: `Help others understand your concepts more easily.`,
    },
    {
      task: `Express appreciation to someone close to you`,
      completed: false,
      description: `Something simple like "I value your perspective."`,
    },
    {
      task: `Initiate a get-together with a friend`,
      completed: false,
      description: `Suggest coffee or a virtual chat.`,
    },
    {
      task: `Reflect on your emotions for 5 minutes`,
      completed: false,
      description: `Simply acknowledge feelings without analysis.`,
    },
    {
      task: `Connect with other INTJs in our community`,
      completed: false,
      description: `Share your experiences and learn from others.`,
    },
  ],
  dailyHabits: {
    summary:
      `Your natural tendency toward structure and efficiency can be channeled into powerful daily habits, {firstname}. By thoughtfully designing your routines, you can maximize your productivity while also creating space for personal growth and relationships.`,
    habits: {
      morning: {
        title: `Strategic Planning`,
        description:
          `Start your day with 10 minutes of planning—reviewing your goals and prioritizing tasks for maximum impact.`,
      },
      afternoon: {
        title: `Knowledge Acquisition`,
        description:
          `Block 30 minutes to learn something new related to your goals or interests—like reading research or taking an online course.`,
      },
      evening: {
        title: `Reflection Period`,
        description:
          `End your day with 5 minutes to evaluate what went well and what could be improved tomorrow.`,
      },
    },
    communication: {
      summary:
        `Your communication style tends to be direct and logical, {firstname}. You convey ideas clearly and precisely, though sometimes you might forget that others don't process information the same way you do.`,
      tips: [
        `Before important conversations, consider your audience and how they might best receive your message—some people need context before conclusions.`,
        `When sharing ideas, start with the "why" before diving into the "how"—this helps others understand your reasoning.`,
      ],
    },
  },
  valuesAndMotivators: {
    summary:
      `At your core, {firstname}, you value knowledge, competence, and independence. You're motivated by intellectual challenges, creating effective systems, and the freedom to pursue your vision without unnecessary constraints.`,
    coreValues: [
      {
        title: `Competence`,
        description: `You value excellence and mastery in yourself and others.`,
      },
      {
        title: `Intellectual Growth`,
        description: `You're committed to continuous learning and improvement.`,
      },
      {
        title: `Autonomy`,
        description: `You value the freedom to pursue goals your own way.`,
      },
    ],
    motivators: [
      {
        title: `Complex Challenges`,
        description: `You're energized by solving difficult problems that require strategic thinking.`,
      },
      {
        title: `Creating Order`,
        description: `You're driven to improve systems and bring clarity to chaos.`,
      },
    ],
    actionItems: [
      {
        number: 1,
        description:
          `When making decisions this week, ask yourself: "Does this align with my values of competence, growth, and autonomy?"`,
      },
    ],
  },
  communityConnection: {
    summary:
      `You're not alone in your INTJ journey, {firstname}! There's a whole community of people who share your strategic thinking and vision. Connecting with them can help you learn new approaches to leveraging your strengths and navigating challenges.`,
    suggestions: [
      `Join our INTJ channel in the community—we discuss everything from productivity systems to navigating social situations as an introvert.`,
      `Check out our weekly "Strategic Thinking" workshops where fellow INTJs share their approaches to problem-solving and long-term planning.`,
    ],
  },
};
