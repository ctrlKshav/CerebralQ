import { FullPersonalityDatabase } from "@/types/tests/mbti/results";

export const ENFPData: FullPersonalityDatabase = {
  career: {
    summary:
      `You're a total star in jobs where you can be creative and connect with others—like teaching, counseling, or even something entrepreneurial. You love roles that let you bring fresh ideas and work with all kinds of people, but you might get bored if the work feels too repetitive or restricted by too many rules.`,
    superpowers: [
      {
        title: `Sparking Ideas`,
        description:
          `You're a pro at brainstorming, {firstname}—like coming up with ten awesome solutions to a tough problem.`,
      },
      {
        title: `Connecting with People`,
        description:
          `You build rapport easily, like making a new hire feel welcome on their first day.`,
      },
    ],
    growthAreas: [
      {
        title: `Following Through`,
        description:
          `You might jump to new ideas—like starting a project before finishing the last one.`,
      },
      {
        title: `Staying Organized`,
        description:
          `You might lose track of details—like forgetting about a meeting because you didn't put it in your calendar.`,
      },
    ],
    suggestions: [
      {
        title: `Creative Writer`,
        matchPercentage: 90,
        description:
          `Your imagination and people skills make storytelling your superpower. You'd thrive crafting content that moves hearts and minds.`,
        qualityMatches: [
          {
            title: `Creativity`,
            description: `Your endless ideas translate into engaging content.`,
          },
          {
            title: `Emotional Depth`,
            description: `You intuitively understand what resonates with people.`,
          },
        ],
      },
      {
        title: `Career Counselor`,
        matchPercentage: 88,
        description:
          `Helping others find their path lights you up. You'd excel guiding people with your enthusiasm and insight.`,
        qualityMatches: [
          {
            title: `Inspiration`,
            description: `You help others see possibilities they hadn't considered.`,
          },
          {
            title: `Empathy`,
            description: `You connect with people's hopes and understand their fears.`,
          },
        ],
      },
      {
        title: `Travel Blogger`,
        matchPercentage: 86,
        description:
          `Exploring new places and sharing your experiences would feed your adventurous spirit. You'd shine connecting your audience to exciting destinations.`,
        qualityMatches: [
          {
            title: `Adventurousness`,
            description: `Your love of new experiences comes through in your content.`,
          },
          {
            title: `Storytelling`,
            description: `You make people feel like they're right there with you.`,
          },
        ],
      },
      {
        title: `User Experience Designer`,
        matchPercentage: 89,
        description:
          `Your empathy and creativity are perfect for designing products people love to use. You'd excel at understanding user needs and creating intuitive, engaging interfaces.`,
        qualityMatches: [
          {
            title: `User Empathy`,
            description: `You naturally understand what makes people tick and how they interact with technology.`,
          },
          {
            title: `Creative Problem-Solving`,
            description: `You find innovative solutions that balance functionality with delight.`,
          },
        ],
      },
    ],
    actionSteps: [
      {
        number: 1,
        description:
          `Try using a simple task app to track your projects—like updating it for just 5 minutes each morning.`,
      },
      {
        number: 2,
        description:
          `This week, pick one project to finish before starting something new—it'll feel amazing to complete it!`,
      },
      {
        number: 3,
        description:
          `Look for jobs that value creativity and people skills—your enthusiasm will shine!`,
      },
    ],
  },
  relationships: [
    {
      title: `Relationships`,
      subtitle: `How You Show Up in Relationships, {firstname}`,
      description:
        `You're the enthusiastic, warm one in your relationships, {firstname}—whether it's with your partner, family, or friends. You show love through excitement and support, like planning a surprise date or texting your partner funny memes throughout the day, but you might need to work on consistency.`,
      compatibleTypes: [`INTJ`, `INFJ`, `ENTJ`, `ENFJ`, `INTP`, `INFP`, `ENTP`],
      superpowers: [
        {
          title: `Being Inspiring`,
          description:
            `You light people up, {firstname}—like motivating your partner to chase their dreams.`,
        },
        {
          title: `Spreading Joy`,
          description:
            `You bring fun to relationships, like turning a regular Tuesday into an impromptu dance party.`,
        },
      ],
      growthAreas: [
        {
          title: `Staying Grounded`,
          description:
            `You might get caught up in possibilities—like planning an elaborate future before checking if your partner's on the same page.`,
        },
        {
          title: `Following Through`,
          description:
            `You might forget commitments—like being late to pick up your partner because you lost track of time.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            `Check in with the people you love about everyday things—like "How was your day?" before jumping to big ideas.`,
        },
        {
          number: 2,
          description:
            `Set reminders for important relationship stuff—like putting date night in your calendar so you don't double-book.`,
        },
        {
          number: 3,
          description:
            `Look for people who appreciate your enthusiasm, {firstname}—someone who loves your energy as much as you do.`,
        },
      ],
    },
    {
      title: `Friendships`,
      subtitle: `How You Shine with Friends, {firstname}`,
      description:
        `You're the friend who brings energy and new ideas to the group, {firstname}—always down for an adventure or a deep late-night chat. You love bringing people together and making sure everyone feels included in the fun.`,
      compatibleTypes: [`INTJ`, `INFJ`, `INTP`, `INFP`, `ENTJ`, `ENFJ`, `ENTP`],
      superpowers: [
        {
          title: `Being Exciting`,
          description:
            `Your friends love your spontaneity—like texting "Let's go for a road trip!" on a random Saturday.`,
        },
        {
          title: `Seeing the Best in People`,
          description:
            `You're great at bringing out hidden talents in your friends, like encouraging their secret passion project.`,
        },
      ],
      growthAreas: [
        {
          title: `Listening More`,
          description:
            `You might sometimes talk more than you listen—like jumping in with a story before your friend finishes theirs.`,
        },
        {
          title: `Keeping Plans`,
          description:
            `You might cancel at the last minute—like forgetting you already have plans when something new comes up.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            `Try asking a follow-up question next time a friend tells you something—like "How did that make you feel?"`,
        },
        {
          number: 2,
          description:
            `Put friend hangouts in your calendar and stick to them—even if something shiny and new pops up.`,
        },
      ],
    },
  ],
  growth: {
    summary:
      `Growth for you is all about channeling your amazing energy into action while staying a little more focused, {firstname}. You're incredible at dreaming big and inspiring others, but you might need to work on finishing what you start and grounding your ideas.`,
    superpowers: [
      {
        title: `Being Imaginative`,
        description:
          `Your creativity helps you grow, {firstname}—like always seeing new possibilities in every situation.`,
      },
      {
        title: `Staying Positive`,
        description:
          `Your optimism keeps you bouncing back, making growth feel exciting.`,
      },
    ],
    growthAreas: [
      {
        title: `Finishing What You Start`,
        description:
          `You might drop things halfway—like abandoning a project when a shinier idea comes along.`,
      },
      {
        title: `Staying Present`,
        description:
          `You might drift into the future—like daydreaming instead of focusing on now.`,
      },
    ],
    actionSteps: [
      {
        number: 1,
        description: `Pick one goal to finish this month—like "I'll complete that painting"—and break it into tiny steps.`,
      },
      {
        number: 2,
        description:
          `Try a grounding activity this week, like a quick meditation, to stay in the moment.`,
      },
      {
        number: 3,
        description:
          `Write down three things you love about being an ENFP when you're feeling scattered, {firstname}.`,
      },
    ],
  },
  actionItems: [
    {
      task: `Pick one project to finish this week`,
      completed: false,
      description: `Wrap up a creative idea you've been playing with.`,
    },
    {
      task: `Spend 5 minutes really listening to a loved one`,
      completed: false,
      description: `Ask "How's your day been?" and soak it in.`,
    },
    {
      task: `Set a reminder for a friend hangout`,
      completed: false,
      description: `Like "Meet at 6 p.m.!" so you don't miss it.`,
    },
    {
      task: `Reflect on what keeps you going`,
      completed: false,
      description: `Journal about one dream you're excited about.`,
    },
    {
      task: `Join our community chat and say hi to another ENFP`,
      completed: false,
      description: `You'll love connecting!`,
    },
  ],
  dailyHabits: {
    summary:
      `You love a routine that keeps you inspired, {firstname}, and it totally works for you—your days are full of energy and possibilities, and you feel best when you're free to explore. Adding a little structure can help you turn your dreams into reality.`,
    habits: {
      morning: {
        title: `Dream Session`,
        description:
          `Start your morning with a 5-minute dream session—like writing down one big idea you're excited about today.`,
      },
      afternoon: {
        title: `Inspiring Habit`,
        description:
          `Add a small, inspiring habit—like reading a poem while you sip your coffee—to spark your day.`,
      },
      evening: {
        title: `Wind Down`,
        description:
          `Wind down with a 10-minute habit, like sketching or listening to music, to relax before bed.`,
      },
    },
    communication: {
      summary:
        `You're warm and enthusiastic when you talk, {firstname}, always lighting up the room with your ideas. You love conversations that are big and dreamy, but sometimes you might miss the details if you're too caught up in the vibe.`,
      tips: [
        `Slow down in conversations—like pausing to really hear someone before sharing your thoughts.`,
        `Ask a friend a fun question, like "What's your wildest dream?"—it'll spark an awesome chat.`,
      ],
    },
  },
  valuesAndMotivators: {
    summary:
      `You're all about chasing your dreams and lifting others up, {firstname}. You value freedom, creativity, and connection, and you're motivated by exploring new possibilities and making the world a brighter place.`,
    coreValues: [
      {
        title: `Freedom`,
        description: `You thrive when you're free to explore and create.`,
      },
      {
        title: `Creativity`,
        description: `You love expressing yourself in bold, new ways.`,
      },
    ],
    motivators: [
      {
        title: `Exploring New Possibilities`,
        description: `Fresh ideas keep you buzzing.`,
      },
      {
        title: `Making the World Brighter`,
        description: `You're driven to spread joy and inspiration.`,
      },
    ],
    actionItems: [
      {
        number: 1,
        description:
          `Take 10 minutes each week to jot down your thoughts on these questions in a journal—it'll keep you connected to what matters most to you.`,
      },
    ],
  },
  communityConnection: {
    summary:
      `You don't have to figure this out alone, {firstname}! Come hang out with other ENFPs and career starters in our growing community. Share your wildest ideas, swap inspiration, and let's build something awesome together.`,
    suggestions: [
      `Drop your MBTI type in our community chat—say hi to other Campaigners who get you!`,
      `Join our weekly Dream Big chat to share your latest passions and plans.`,
    ],
  },
};
