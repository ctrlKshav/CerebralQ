import { PersonalityDatabase } from "@/types/tests/mbti/results";

export const ISFPData: PersonalityDatabase = {
  career: {
    summary:
      `You thrive in creative, independent roles that allow you to express your values, {firstname}. Your gentle authenticity and eye for beauty make you valuable in artistic fields and helping professions. You prefer flexible environments that respect individuality and allow you to make a tangible difference.`,
    superpowers: [
      {
        title: `Aesthetic Sensitivity`,
        description:
          `You have a natural eye for beauty and design—instinctively knowing how to create visually pleasing arrangements or spaces.`,
      },
      {
        title: `Value-Driven Actions`,
        description:
          `You live your values through your work—like choosing assignments that align with your personal ethics and passions.`,
      },
    ],
    growthAreas: [
      {
        title: `Long-term Planning`,
        description:
          `You might focus on present enjoyment over future goals—like pursuing interesting projects without considering career trajectory.`,
      },
      {
        title: `Self-Promotion`,
        description:
          `You may understate your achievements—like downplaying your contributions during performance reviews.`,
      },
    ],
    suggestions: [
      {
        title: `Art Director`,
        matchPercentage: 92,
        description:
          `Your artistic vision and attention to aesthetic detail make you perfect for guiding the visual elements of creative projects.`,
        qualityMatches: [
          {
            title: `Creativity`,
            description: `You naturally envision unique artistic directions.`,
          },
          {
            title: `Aesthetic Sensibility`,
            description: `You have an innate understanding of visual harmony.`,
          },
        ],
      },
      {
        title: `Veterinary Technician`,
        matchPercentage: 90,
        description:
          `Your gentle nature and practical caring approach make you ideal for working hands-on with animals in need.`,
        qualityMatches: [
          {
            title: `Compassion`,
            description: `You connect deeply with animals and their needs.`,
          },
          {
            title: `Practical Care`,
            description: `You excel at providing tangible comfort and support.`,
          },
        ],
      },
      {
        title: `Massage Therapist`,
        matchPercentage: 88,
        description:
          `Your sensitivity to others' needs and your hands-on approach make you excellent at providing therapeutic touch.`,
        qualityMatches: [
          {
            title: `Physical Awareness`,
            description: `You intuitively sense physical tension and how to release it.`,
          },
          {
            title: `Personalized Approach`,
            description: `You tailor your technique to each individual client.`,
          },
        ],
      },
      {
        title: `Interior Designer`,
        matchPercentage: 91,
        description:
          `Your natural aesthetic sense and ability to create harmonious environments make you excellent at transforming spaces to reflect clients' personalities and needs.`,
        qualityMatches: [
          {
            title: `Spatial Creativity`,
            description: `You can visualize how elements will work together in a space.`,
          },
          {
            title: `Client Connection`,
            description: `You excel at translating others' preferences into beautiful, functional designs.`,
          },
        ],
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          `Create a simple portfolio of your work—even informal projects count—to help you showcase your talents when opportunities arise.`,
      },
      {
        number: 2,
        description:
          `Practice using one phrase to describe your strengths in professional settings—like "I bring creativity and attention to detail to my projects."`,
      },
      {
        number: 3,
        description:
          `Look for roles that value your aesthetic sense and allow you to work independently—your unique perspective will be appreciated.`,
      },
    ],
  },
  relationships: [
    {
      title: `Relationships`,
      subtitle: `How You Connect in Close Relationships, {firstname}`,
      description:
        `In close relationships, you bring warmth, authenticity, and a deeply caring nature, {firstname}. You show love through thoughtful gestures and creating special moments rather than grand declarations. While you may take time to fully open up, once committed, you're devoted and supportive, appreciating partners who respect your need for personal space and emotional safety.`,
      compatibleTypes: [`ENFJ`, `ESFJ`, `ESTJ`, `ENTJ`, `ISFP`, `ESFP`],
      superpowers: [
        {
          title: `Genuine Connection`,
          description:
            `You create authentic bonds based on acceptance—like remembering your partner's preferences and accommodating them without being asked.`,
        },
        {
          title: `Emotional Support`,
          description:
            `You offer calming presence during difficult times—providing quiet understanding when your partner is stressed.`,
        },
      ],
      growthAreas: [
        {
          title: `Verbal Expression`,
          description:
            `You might struggle to put feelings into words—finding it easier to show love through actions than discussing emotions.`,
        },
        {
          title: `Conflict Resolution`,
          description:
            `You tend to withdraw during disagreements—sometimes needing space before addressing issues directly.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            `Practice expressing one feeling verbally each day—even something simple like "I felt happy when we had breakfast together."`,
        },
        {
          number: 2,
          description:
            `When conflicts arise, try saying "I need some time to think, but I'd like to talk about this in an hour"—this acknowledges the issue while honoring your process.`,
        },
        {
          number: 3,
          description:
            `Look for partners who appreciate your thoughtful gestures and give you space to process emotions—your depth of feeling is a gift.`,
        },
      ],
    },
    {
      title: `Friendships`,
      subtitle: `Your Friendship Style, {firstname}`,
      description:
        `As a friend, you're loyal and attentive, preferring deep connections with a few people over large social circles. You bond through shared experiences and creative activities rather than extended conversations. Friends value your accepting nature, authentic presence, and ability to notice what really matters to them.`,
      compatibleTypes: [`ESFP`, `ESTP`, `ENFP`, `ENTP`, `ISFP`, `INFP`],
      superpowers: [
        {
          title: `Thoughtful Gestures`,
          description:
            `You remember what matters to friends—like bringing their favorite snack on a road trip or creating a playlist that matches their taste.`,
        },
        {
          title: `Non-judgmental Listening`,
          description:
            `You create safe spaces for friends to be themselves—accepting them without trying to change who they are.`,
        },
      ],
      growthAreas: [
        {
          title: `Initiating Plans`,
          description:
            `You might wait for others to suggest get-togethers rather than organizing them yourself.`,
        },
        {
          title: `Expressing Needs`,
          description:
            `You sometimes accommodate others at the expense of your own preferences without communicating your wishes.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            `Reach out to one friend this week with a specific activity suggestion—like "Would you like to check out that new café on Saturday?"`,
        },
        {
          number: 2,
          description:
            `Practice expressing a preference when asked—rather than saying "Whatever you want is fine," share what you'd genuinely enjoy.`,
        },
      ],
    },
  ],
  growth: {
    summary:
      `Personal growth for you, {firstname}, comes from honoring your artistic nature while developing confidence in your unique contributions. Finding balance between living in the moment and planning for the future will help you create a life that feels both authentic and purposeful.`,
    superpowers: [
      {
        title: `Authenticity`,
        description:
          `You naturally stay true to yourself—like choosing paths that align with your inner values even when it's difficult.`,
      },
      {
        title: `Present Awareness`,
        description:
          `You fully experience the moment—noticing beauty and sensory details others might miss.`,
      },
    ],
    growthAreas: [
      {
        title: `Self-Confidence`,
        description:
          `You might undervalue your contributions—like dismissing compliments on your creative work.`,
      },
      {
        title: `Future Focus`,
        description:
          `You tend to prioritize immediate experiences over long-term planning.`,
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          `Keep a "wins journal" and write down one accomplishment each day—even small ones count—to build recognition of your strengths.`,
      },
      {
        number: 2,
        description:
          `Set one tangible goal for three months from now and identify one small action you can take each week toward it.`,
      },
      {
        number: 3,
        description:
          `Practice accepting compliments with a simple "thank you" rather than deflecting—this honors both your work and the person appreciating it.`,
      },
    ],
  },
  actionItems: [
    {
      task: `Create a simple portfolio of your work`,
      completed: false,
      description: `Collect examples that showcase your talents.`,
    },
    {
      task: `Practice a phrase to describe your strengths`,
      completed: false,
      description: `Try using it in a conversation this week.`,
    },
    {
      task: `Share one feeling verbally with someone close to you`,
      completed: false,
      description: `Express an emotion you'd typically keep to yourself.`,
    },
    {
      task: `Write down one accomplishment in your wins journal`,
      completed: false,
      description: `Record something you're proud of, no matter how small.`,
    },
    {
      task: `Connect with other ISFPs in our community`,
      completed: false,
      description: `Share experiences and learn from others.`,
    },
  ],
  dailyHabits: {
    summary:
      `Creating daily routines that honor your need for both creativity and structure can help you thrive, {firstname}. Building habits that connect you to your values while gently stretching your comfort zone will support your personal growth journey.`,
    habits: {
      morning: {
        title: `Sensory Moment`,
        description:
          `Begin your day with 5 minutes of sensory engagement—whether savoring your tea, appreciating morning light, or feeling the texture of your favorite blanket.`,
      },
      afternoon: {
        title: `Creative Expression`,
        description:
          `Dedicate 15 minutes to creating something—sketching, arranging objects, taking photos, or any hands-on activity that feels fulfilling.`,
      },
      evening: {
        title: `Value Reflection`,
        description:
          `End your day by noting one way you expressed your values today and one opportunity for tomorrow.`,
      },
    },
    communication: {
      summary:
        `Your communication style tends to be gentle and authentic, {firstname}. You express yourself best through actions and creative expression, though you may sometimes struggle to find words for your deeper feelings, especially in group settings or during conflict.`,
      tips: [
        `When you need to express something important, try writing your thoughts first—this gives you time to find the right words without pressure.`,
        `In group settings, set a small goal to share one idea or observation—your perspective is valuable even if it differs from the majority.`,
      ],
    },
  },
  valuesAndMotivators: {
    summary:
      `At your core, {firstname}, you value authenticity, harmony, and freedom to express yourself. You're motivated by opportunities to create beauty, make a tangible difference in others' lives, and align your actions with your personal values.`,
    coreValues: [
      {
        title: `Authenticity`,
        description: `You prize being true to yourself above conforming to expectations.`,
      },
      {
        title: `Harmony`,
        description: `You value peaceful, aesthetically pleasing environments and relationships.`,
      },
      {
        title: `Freedom`,
        description: `You need space to express yourself and follow your inspirations.`,
      },
    ],
    motivators: [
      {
        title: `Creative Expression`,
        description: `You're energized by opportunities to create and appreciate beauty.`,
      },
      {
        title: `Making a Difference`,
        description: `You're driven to help others in practical, tangible ways.`,
      },
    ],
    actionItems: [
      {
        number: 1,
        description:
          `Before making major decisions this week, ask yourself: "Does this align with my values of authenticity, harmony, and freedom?"`,
      },
    ],
  },
  communityConnection: {
    summary:
      `You're not alone in your ISFP journey, {firstname}! There's a whole community of people who share your creative spirit and value-driven approach to life. Connecting with them can help you embrace your strengths and navigate challenges with fresh perspective.`,
    suggestions: [
      `Join our ISFP channel in the community—we discuss everything from creative projects to navigating relationships as a sensitive artistic type.`,
      `Check out our monthly "Creative Showcase" where fellow ISFPs share their artistic expressions, from traditional art to cooking, photography, and fashion.`,
    ],
  },
};
