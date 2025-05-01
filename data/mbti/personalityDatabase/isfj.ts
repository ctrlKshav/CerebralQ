import { PersonalityDatabase } from "@/types/tests/mbti/results";

export const ISFJData: PersonalityDatabase = {
  career: {
    summary:
      `You thrive in roles where you can help others in practical ways, {firstname}. Your natural attention to detail and reliability make you invaluable in positions requiring organization, consistency, and compassionate support. You excel when your work directly improves people's lives and your contributions are appreciated.`,
    superpowers: [
      {
        title: `Practical Caregiving`,
        description:
          `You excel at providing tangible support to others—like remembering a team member needs specific accommodations and quietly arranging them.`,
      },
      {
        title: `Detailed Follow-Through`,
        description:
          `You ensure nothing falls through the cracks—like maintaining thorough records that prove invaluable when unexpected questions arise.`,
      },
    ],
    growthAreas: [
      {
        title: `Setting Boundaries`,
        description:
          `You might take on too many responsibilities—like agreeing to additional tasks even when already overloaded.`,
      },
      {
        title: `Embracing Change`,
        description:
          `You may prefer established procedures—like feeling uncomfortable when new systems replace familiar ones.`,
      },
    ],
    suggestions: [
      {
        title: `Healthcare Administrator`,
        matchPercentage: 91,
        description:
          `Your organizational skills and genuine concern for people's wellbeing make you perfect for managing the details that keep health services running smoothly.`,
        qualityMatches: [
          {
            title: `Patient Focus`,
            description: `You naturally put patient needs at the center of all processes.`,
          },
          {
            title: `Systematic Organization`,
            description: `You excel at creating reliable systems that support quality care.`,
          },
        ],
      },
      {
        title: `HR Specialist`,
        matchPercentage: 88,
        description:
          `Your attention to detail and genuine interest in supporting others make you excellent at managing employee relations and benefits.`,
        qualityMatches: [
          {
            title: `Employee Advocacy`,
            description: `You're skilled at understanding and addressing individual needs.`,
          },
          {
            title: `Process Management`,
            description: `You maintain accurate records and ensure proper procedures are followed.`,
          },
        ],
      },
      {
        title: `Librarian`,
        matchPercentage: 86,
        description:
          `Your organizational abilities and service-oriented nature make you ideal for preserving knowledge and helping others access information.`,
        qualityMatches: [
          {
            title: `Systematic Thinking`,
            description: `You excel at organizing information logically and accessibly.`,
          },
          {
            title: `Helpful Service`,
            description: `You genuinely enjoy helping others find what they need.`,
          },
        ],
      },
      {
        title: `Dental Hygienist`,
        matchPercentage: 89,
        description:
          `Your meticulous attention to detail and warm, reassuring presence make you excellent at providing both technical care and patient comfort in dental settings.`,
        qualityMatches: [
          {
            title: `Precise Technique`,
            description: `You excel at performing detailed procedures with consistent accuracy.`,
          },
          {
            title: `Patient Comfort`,
            description: `You naturally put anxious patients at ease with your calming manner.`,
          },
        ],
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          `Practice saying "Let me check my schedule before committing" when asked to take on new responsibilities—this gives you space to consider your bandwidth.`,
      },
      {
        number: 2,
        description:
          `Identify one area where you can share your knowledge with others—your attention to detail makes you an excellent mentor.`,
      },
      {
        number: 3,
        description:
          `Look for roles that value consistency and care—your reliability and thoughtfulness are tremendous assets.`,
      },
    ],
  },
  relationships: [
    {
      title: `Relationships`,
      subtitle: `How You Connect in Close Relationships, {firstname}`,
      description:
        `In close relationships, you bring warmth, loyalty, and consistent support, {firstname}. You show love through practical acts of caring—remembering preferences, creating comfortable environments, and being there during difficult times. You value harmony and may prioritize others' needs above your own, though you flourish with partners who reciprocate your thoughtfulness.`,
      compatibleTypes: [`ESTP`, `ESFP`, `ENTP`, `ENFP`, `ESTJ`, `ISTJ`],
      superpowers: [
        {
          title: `Thoughtful Caretaking`,
          description:
            `You remember what matters to your partner—like preparing their favorite meal after a tough day without being asked.`,
        },
        {
          title: `Steady Commitment`,
          description:
            `You provide reliable emotional support—being a constant presence your partner can depend on through life's ups and downs.`,
        },
      ],
      growthAreas: [
        {
          title: `Expressing Needs`,
          description:
            `You might put your own needs aside—like not mentioning when you're feeling overwhelmed.`,
        },
        {
          title: `Confronting Issues`,
          description:
            `You may avoid addressing problems to maintain peace—like letting frustrations build rather than discussing them.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            `Practice sharing one need or preference each day—starting with small things like "I'd prefer to eat at 6:00 tonight."`,
        },
        {
          number: 2,
          description:
            `When tensions arise, try the phrase: "I care about our relationship, so I'd like to talk about something that's bothering me."`,
        },
        {
          number: 3,
          description:
            `Look for partners who notice and appreciate your efforts—your caring nature deserves to be valued and reciprocated.`,
        },
      ],
    },
    {
      title: `Friendships`,
      subtitle: `Your Friendship Style, {firstname}`,
      description:
        `As a friend, you're loyal and dependable, often serving as the glue that holds groups together. You remember birthdays, check in during tough times, and create comfortable spaces for gatherings. Your friendships tend to be long-lasting, with depth developing gradually through shared experiences and consistent presence.`,
      compatibleTypes: [`ESFP`, `ESTP`, `ENFP`, `ENTP`, `ISFP`, `INFP`],
      superpowers: [
        {
          title: `Reliable Support`,
          description:
            `Friends know they can count on you—like when you're the first person they call during a crisis.`,
        },
        {
          title: `Thoughtful Gestures`,
          description:
            `You remember what matters to each friend—like bringing their favorite snack to a gathering or checking in on significant days.`,
        },
      ],
      growthAreas: [
        {
          title: `Expanding Your Circle`,
          description:
            `You might stick with familiar friends rather than opening up to new connections.`,
        },
        {
          title: `Setting Boundaries`,
          description:
            `You sometimes take on too much responsibility in friendships—becoming the default organizer or emotional supporter.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            `Challenge yourself to attend one new social event this month—you might find connections with unexpected people.`,
        },
        {
          number: 2,
          description:
            `Practice asking friends for help occasionally—allowing others to support you deepens reciprocal bonds.`,
        },
      ],
    },
  ],
  growth: {
    summary:
      `Personal growth for you, {firstname}, involves balancing your natural caregiving tendencies with self-care and assertiveness. Learning to value your own needs as much as others' will help you maintain energy for the relationships and causes you care deeply about.`,
    superpowers: [
      {
        title: `Consistent Effort`,
        description:
          `You excel at making steady progress—like developing habits that gradually lead to significant positive changes.`,
      },
      {
        title: `Practical Application`,
        description:
          `You naturally translate concepts into real-world action—taking advice and immediately finding ways to apply it.`,
      },
    ],
    growthAreas: [
      {
        title: `Self-Prioritization`,
        description:
          `You might place others' needs before your own—like postponing self-care to help someone else.`,
      },
      {
        title: `Trying New Approaches`,
        description:
          `You may stick with familiar methods—sometimes missing opportunities for beneficial changes.`,
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          `Schedule 15 minutes of personal time each day—put it in your calendar and treat it with the same importance as commitments to others.`,
      },
      {
        number: 2,
        description:
          `When facing a challenge, brainstorm three possible approaches before moving forward—this expands your comfort with different methods.`,
      },
      {
        number: 3,
        description:
          `Practice saying "no" to one request this week that would overextend you—remember that maintaining your energy ultimately helps you better serve others.`,
      },
    ],
  },
  actionItems: [
    {
      task: `Practice checking your schedule before committing`,
      completed: false,
      description: `Pause before saying yes to new responsibilities.`,
    },
    {
      task: `Share one personal need or preference`,
      completed: false,
      description: `Express what you want, even if it feels uncomfortable.`,
    },
    {
      task: `Schedule 15 minutes of personal time`,
      completed: false,
      description: `Put it on your calendar and protect this time.`,
    },
    {
      task: `Try saying "no" to one request that would overextend you`,
      completed: false,
      description: `Practice setting a boundary to protect your energy.`,
    },
    {
      task: `Connect with other ISFJs in our community`,
      completed: false,
      description: `Share experiences and learn from others like you.`,
    },
  ],
  dailyHabits: {
    summary:
      `Creating daily routines that include self-care alongside caring for others will help you maintain balance, {firstname}. Building in moments of reflection and personal enjoyment ensures you'll have the energy to continue supporting the people and causes important to you.`,
    habits: {
      morning: {
        title: `Intention Setting`,
        description:
          `Start your day by identifying one personal need you'll attend to—before focusing on responsibilities to others.`,
      },
      afternoon: {
        title: `Connection Check`,
        description:
          `Take a moment to connect with someone who energizes rather than drains you—even a brief positive exchange can refresh your perspective.`,
      },
      evening: {
        title: `Appreciation Practice`,
        description:
          `End your day by acknowledging something you did well and something you appreciate about yourself—not just what you did for others.`,
      },
    },
    communication: {
      summary:
        `Your communication style tends to be warm and supportive, {firstname}. You excel at listening carefully and responding thoughtfully, though you might sometimes hold back your opinions to maintain harmony or avoid drawing attention to yourself.`,
      tips: [
        `When you have a different perspective, try prefacing it with "I see this a bit differently" rather than staying silent—your insights are valuable.`,
        `Practice asking for what you need directly—instead of hinting, try saying "Would you be able to help me with this?"`,
      ],
    },
  },
  valuesAndMotivators: {
    summary:
      `At your core, {firstname}, you value security, harmony, and making a tangible difference in people's lives. You're motivated by creating stable, supportive environments and seeing the practical results of your care for others.`,
    coreValues: [
      {
        title: `Reliability`,
        description: `You believe in being someone others can count on completely.`,
      },
      {
        title: `Practical Kindness`,
        description: `You value tangible acts of service over grand gestures or words.`,
      },
      {
        title: `Tradition`,
        description: `You appreciate the security and meaning found in established customs and systems.`,
      },
    ],
    motivators: [
      {
        title: `Making a Difference`,
        description: `You're energized when you can see the positive impact of your efforts on others.`,
      },
      {
        title: `Creating Stability`,
        description: `You're driven to build and maintain secure, harmonious environments.`,
      },
    ],
    actionItems: [
      {
        number: 1,
        description:
          `When making decisions this week, ask yourself: "Does this align with my values of reliability, kindness, and creating stability?"`,
      },
    ],
  },
  communityConnection: {
    summary:
      `You're not alone in your ISFJ journey, {firstname}! There's a whole community of people who share your caring nature and attention to detail. Connecting with them can help you learn new approaches to leveraging your strengths while caring for yourself.`,
    suggestions: [
      `Join our ISFJ channel in the community—we discuss everything from setting healthy boundaries to finding fulfilling ways to help others.`,
      `Check out our monthly "Care Exchange" where fellow ISFJs share their best practices for balancing self-care with caring for others.`,
    ],
  },
};
