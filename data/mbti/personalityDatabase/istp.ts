import { FreePersonalityDatabase, FullPersonalityDatabase } from "@/types/tests/mbti/results";

export const ISTPData: FullPersonalityDatabase = {
  career: {
    summary:
      `You excel in roles requiring practical problem-solving and technical expertise, {firstname}. Your hands-on approach and ability to stay calm under pressure make you invaluable in fields that demand troubleshooting skills and quick thinking. You prefer work environments that offer variety, autonomy, and tangible results over abstract theories or rigid structures.`,
    superpowers: [
      {
        title: `Technical Problem-Solving`,
        description:
          `You have an innate ability to understand how things work—like figuring out why a system is malfunctioning when others are stumped.`,
      },
      {
        title: `Crisis Management`,
        description:
          `You remain cool-headed in emergencies—like calmly addressing an unexpected technical failure during a critical moment.`,
      },
    ],
    growthAreas: [
      {
        title: `Long-term Planning`,
        description:
          `You might focus so much on immediate solutions that you overlook future implications—like fixing a problem without documenting the solution for others.`,
      },
      {
        title: `Team Communication`,
        description:
          `You sometimes prefer to work independently rather than explaining your process—like diving into a repair without updating your team.`,
      },
    ],
    suggestions: [
      {
        title: `Mechanical Engineer`,
        matchPercentage: 92,
        description:
          `Your natural understanding of mechanical systems and hands-on approach make you ideal for designing and troubleshooting machinery.`,
        qualityMatches: [
          {
            title: `Technical Aptitude`,
            description: `You excel at understanding how complex systems work.`,
          },
          {
            title: `Practical Problem-Solving`,
            description: `You naturally find efficient solutions to technical challenges.`,
          },
        ],
      },
      {
        title: `Emergency Medical Technician`,
        matchPercentage: 90,
        description:
          `Your ability to stay calm under pressure and make quick decisions makes you well-suited for emergency medical situations.`,
        qualityMatches: [
          {
            title: `Crisis Response`,
            description: `You thrive in high-pressure situations requiring fast action.`,
          },
          {
            title: `Tactical Thinking`,
            description: `You can quickly assess situations and determine the best course of action.`,
          },
        ],
      },
      {
        title: `Computer Systems Analyst`,
        matchPercentage: 88,
        description:
          `Your analytical skills and technical mindset are perfect for evaluating computer systems and implementing improvements.`,
        qualityMatches: [
          {
            title: `Technical Analysis`,
            description: `You can quickly identify and solve system inefficiencies.`,
          },
          {
            title: `Practical Implementation`,
            description: `You excel at putting solutions into action effectively.`,
          },
        ],
      },
      {
        title: `Forensic Investigator`,
        matchPercentage: 89,
        description:
          `Your keen observation skills and logical approach make you excellent at analyzing evidence and reconstructing scenarios. Your ability to notice details others miss is invaluable in this field.`,
        qualityMatches: [
          {
            title: `Analytical Precision`,
            description: `You excel at examining physical evidence with meticulous attention to detail.`,
          },
          {
            title: `Objective Reasoning`,
            description: `You can analyze situations without letting emotions cloud your judgment.`,
          },
        ],
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          `After solving a problem, take five minutes to document your solution in a way that would help someone else understand your process.`,
      },
      {
        number: 2,
        description:
          `Practice explaining your technical reasoning to non-technical people—try describing your current project to a friend in simple terms.`,
      },
      {
        number: 3,
        description:
          `Look for roles that value your hands-on skills and give you freedom to solve problems your own way—your practical approach will be appreciated.`,
      },
    ],
  },
  relationships: [
    {
      title: `Relationships`,
      subtitle: `How You Connect in Close Relationships, {firstname}`,
      description:
        `In close relationships, you show care through practical actions rather than words, {firstname}. You're loyal and dependable, preferring to demonstrate your feelings by fixing problems, creating things, or sharing experiences rather than talking about emotions. You need space for independence while appreciating partners who understand your more reserved way of showing affection.`,
      compatibleTypes: [`ESTJ`, `ESFJ`, `ENFJ`, `ISTJ`, `ISFJ`, `ENTJ`],
      superpowers: [
        {
          title: `Practical Support`,
          description:
            `You show love through helpful actions—like fixing your partner's car or building something they mentioned wanting.`,
        },
        {
          title: `Calm Presence`,
          description:
            `You provide stability during emotional storms—remaining level-headed when your partner is stressed.`,
        },
      ],
      growthAreas: [
        {
          title: `Emotional Expression`,
          description:
            `You might find it challenging to put feelings into words—like struggling to verbalize how much someone means to you.`,
        },
        {
          title: `Future Planning`,
          description:
            `You tend to take relationships day by day rather than discussing long-term plans.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            `Practice saying one thing you appreciate about your partner each day—it doesn't need to be elaborate, just genuine.`,
        },
        {
          number: 2,
          description:
            `When your partner shares feelings, resist the urge to immediately solve the problem—sometimes they just want you to listen.`,
        },
        {
          number: 3,
          description:
            `Look for partners who appreciate your actions as expressions of love but who can also help you grow in emotional communication.`,
        },
      ],
    },
    {
      title: `Friendships`,
      subtitle: `Your Friendship Style, {firstname}`,
      description:
        `As a friend, you're reliable and straightforward, preferring quality connections over a large social circle. You bond best through shared activities and experiences rather than deep conversations about feelings. Friends value your loyalty, practical help, and drama-free approach to relationships.`,
      compatibleTypes: [`ESTP`, `ESTJ`, `ENTJ`, `ISFP`, `INFP`, `ENFP`],
      superpowers: [
        {
          title: `Reliable Presence`,
          description:
            `Friends know they can count on you when it matters—like helping them move or coming through in an emergency.`,
        },
        {
          title: `Skill Sharing`,
          description:
            `You enjoy teaching friends your practical skills—like showing a friend how to fix their bike or upgrade their computer.`,
        },
      ],
      growthAreas: [
        {
          title: `Staying Connected`,
          description:
            `You might not reach out regularly if there's no specific reason to connect.`,
        },
        {
          title: `Opening Up`,
          description:
            `You may keep personal struggles to yourself rather than sharing with friends.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            `Set a reminder to check in with one friend each week—even a quick message shows you're thinking of them.`,
        },
        {
          number: 2,
          description:
            `The next time you face a challenge, share it with a trusted friend—allow yourself to be supported occasionally.`,
        },
      ],
    },
  ],
  growth: {
    summary:
      `Personal growth for you, {firstname}, involves balancing your natural practicality with emotional awareness and long-term thinking. Exploring your feelings more deeply while maintaining your hands-on approach to life can lead to more fulfilling relationships and expanded perspective.`,
    superpowers: [
      {
        title: `Adaptability`,
        description:
          `You easily adjust to changing situations—like quickly pivoting when plans fall through.`,
      },
      {
        title: `Self-Reliance`,
        description:
          `You're comfortable handling challenges independently—learning new skills as needed.`,
      },
    ],
    growthAreas: [
      {
        title: `Emotional Awareness`,
        description:
          `You might sometimes overlook the emotional aspects of situations—like focusing on solutions when others need empathy.`,
      },
      {
        title: `Long-Term Vision`,
        description:
          `You tend to focus on present actions rather than future implications or goals.`,
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          `Take five minutes each day to check in with yourself emotionally—simply naming what you're feeling without judgment.`,
      },
      {
        number: 2,
        description:
          `Create one long-term goal and break it down into monthly action steps—this bridges your preference for immediate action with future planning.`,
      },
      {
        number: 3,
        description:
          `When someone shares a problem, ask "How are you feeling about that?" before offering solutions—this builds your emotional intelligence.`,
      },
    ],
  },
  actionItems: [
    {
      task: `Document a solution you implemented`,
      completed: false,
      description: `Take notes on how you solved a recent problem.`,
    },
    {
      task: `Express appreciation to someone close to you`,
      completed: false,
      description: `Tell them specifically what you value about them.`,
    },
    {
      task: `Check in with a friend you haven't talked to recently`,
      completed: false,
      description: `Send a message asking how they're doing.`,
    },
    {
      task: `Reflect on your emotions for 5 minutes`,
      completed: false,
      description: `Simply notice how you're feeling without trying to change anything.`,
    },
    {
      task: `Connect with other ISTPs in our community`,
      completed: false,
      description: `Share experiences and learn from others.`,
    },
  ],
  dailyHabits: {
    summary:
      `Your natural tendency toward action and efficiency can be channeled into effective daily habits, {firstname}. Creating space for both hands-on activities and moments of reflection will help you maintain your energy while growing in areas that don't come as naturally.`,
    habits: {
      morning: {
        title: `Physical Engagement`,
        description:
          `Start your day with 15 minutes of physical activity—whether it's a quick workout, bike ride, or hands-on project.`,
      },
      afternoon: {
        title: `Skill Development`,
        description:
          `Dedicate 20 minutes to improving a practical skill—something tangible that you can see progress in.`,
      },
      evening: {
        title: `Brief Reflection`,
        description:
          `End your day with 5 minutes to consider what went well and what you accomplished—acknowledging both actions and interactions.`,
      },
    },
    communication: {
      summary:
        `Your communication style tends to be concise and straightforward, {firstname}. You express yourself clearly without unnecessary details, though sometimes you might skip sharing your thought process, leaving others wondering how you reached your conclusions.`,
      tips: [
        `When explaining your ideas, include one or two steps of your thinking process—this helps others follow your reasoning.`,
        `If someone seems emotional, acknowledge their feelings before offering solutions—a simple "That sounds frustrating" goes a long way.`,
      ],
    },
  },
  valuesAndMotivators: {
    summary:
      `At your core, {firstname}, you value freedom, efficiency, and tangible results. You're motivated by solving concrete problems, mastering skills, and having the autonomy to approach situations in your own way.`,
    coreValues: [
      {
        title: `Practical Utility`,
        description: `You appreciate things that serve a clear, useful purpose.`,
      },
      {
        title: `Personal Freedom`,
        description: `You value the autonomy to make your own decisions and set your own pace.`,
      },
      {
        title: `Efficiency`,
        description: `You believe in finding the most direct path to results without unnecessary complications.`,
      },
    ],
    motivators: [
      {
        title: `Hands-On Challenges`,
        description: `You're energized by problems you can tackle directly and see immediate results.`,
      },
      {
        title: `Skill Mastery`,
        description: `You're driven to continually improve your abilities and technical expertise.`,
      },
    ],
    actionItems: [
      {
        number: 1,
        description:
          `When making decisions this week, ask yourself: "Does this align with my values of freedom, efficiency, and practical results?"`,
      },
    ],
  },
  communityConnection: {
    summary:
      `You're not alone in your ISTP journey, {firstname}! There's a whole community of people who share your practical approach and independent spirit. Connecting with them can help you learn new approaches to leveraging your strengths and navigating challenges.`,
    suggestions: [
      `Join our ISTP channel in the community—we discuss everything from technical skills to navigating relationships as a practical problem-solver.`,
      `Check out our monthly "Hands-On Projects" showcase where fellow ISTPs share their latest builds, repairs, and practical solutions.`,
    ],
  },
};

export const ISTPDataFree: FreePersonalityDatabase = {
  valuesAndMotivators: ISTPData.valuesAndMotivators,
  career: {
    summary: ISTPData.career.summary,
    superpowers: ISTPData.career.superpowers,
    growthAreas: ISTPData.career.growthAreas,
    actionSteps: ISTPData.career.actionSteps,
  },
};
