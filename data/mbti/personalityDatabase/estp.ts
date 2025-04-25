import { FullPersonalityDatabase, FreePersonalityDatabase } from "@/types/tests/mbti/results";
export const ESTPData: FullPersonalityDatabase = {
  career: {
    summary: `You're a total rockstar in jobs where you can take action and think on your feet—like sales, event planning, or even something hands-on like construction. You love roles that keep you moving and let you solve problems in the moment, but you might get bored if the work feels too slow or doesn't give you enough freedom.`,
    superpowers: [
      {
        title: `Taking Action`,
        description: `You make things happen, {firstname}—like jumping in to fix a last-minute issue at work.`,
      },
      {
        title: `Staying Cool Under Pressure`,
        description: `You handle chaos like a pro, like leading a team through a tight deadline.`,
      },
    ],
    growthAreas: [
      {
        title: `Planning Ahead`,
        description: `You might focus on the now and miss the bigger picture—like not prepping for a future project.`,
      },
      {
        title: `Slowing Down`,
        description: `You might rush into things—like making a quick decision without thinking it through.`,
      },
    ],
    suggestions: [
      {
        title: `Sales Representative`,
        matchPercentage: 89,
        description: `Your charm and quick thinking make you a natural at closing deals. You'd thrive in the fast-paced, action-driven world of sales.`,
        qualityMatches: [
          {
            title: `Persuasion`,
            description: `You win people over effortlessly.`,
          },
          {
            title: `Adaptability`,
            description: `You roll with the punches like a champ.`,
          },
        ],
      },
      {
        title: `Event Coordinator`,
        matchPercentage: 87,
        description: `Your ability to handle chaos and keep the energy up is perfect for pulling off big events. You'd love the thrill of making it all come together.`,
        qualityMatches: [
          {
            title: `Quick Decisions`,
            description: `You solve problems on the fly.`,
          },
          {
            title: `Energy`,
            description: `You keep the party going strong.`,
          },
        ],
      },
      {
        title: `Outdoor Adventure Guide`,
        matchPercentage: 85,
        description: `Leading groups through thrilling experiences fits your bold, hands-on style. You'd shine keeping everyone pumped and safe.`,
        qualityMatches: [
          {
            title: `Boldness`,
            description: `You dive into adventure headfirst.`,
          },
          {
            title: `Practicality`,
            description: `You handle real-world challenges with ease.`,
          },
        ],
      },
      {
        title: `Emergency First Responder`,
        matchPercentage: 90,
        description: `Your quick reflexes and ability to stay calm under pressure make you perfect for emergency response. You'd excel handling high-stress situations that require immediate, practical action.`,
        qualityMatches: [
          {
            title: `Crisis Management`,
            description: `You thrive when others panic.`,
          },
          {
            title: `Tactical Thinking`,
            description: `You assess situations and act decisively in real-time.`,
          },
        ],
      },
    ],
    actionSteps: [
      {
        number: 1,
        description: `Take 5 minutes to plan your week—like jotting down one big task you need to tackle.`,
      },
      {
        number: 2,
        description: `Before making a big decision, pause and ask yourself, "What's the best long-term choice here?"—it'll help you think ahead.`,
      },
      {
        number: 3,
        description: `Look for jobs that keep you moving, like being a fitness trainer or a marketing coordinator—your kind of vibe!`,
      },
    ],
  },
  relationships: [
    {
      title: `Relationships`,
      subtitle: `How You Show Up in Relationships, {firstname}`,
      description: `You're the fun, spontaneous one in your relationships, {firstname}—whether it's with your partner, family, or friends. You show love by keeping things exciting, like taking your partner on a surprise date or rallying your family for a game night, but you might need to work on slowing down to connect on a deeper level.`,
      compatibleTypes: [`ISFJ`, `ISTJ`, `INFJ`, `INTJ`, `ESFP`, `ISTP`, `ISFP`],
      superpowers: [
        {
          title: `Bringing Energy`,
          description: `You make every moment fun, {firstname}—like turning a boring day into an adventure.`,
        },
        {
          title: `Being Reliable`,
          description: `You're there when it counts, like showing up for a friend who needs a quick fix.`,
        },
      ],
      growthAreas: [
        {
          title: `Listening Deeply`,
          description: `You might jump to solutions too fast—like trying to fix a problem instead of just listening.`,
        },
        {
          title: `Sticking to Plans`,
          description: `You might change things up last minute—like canceling a dinner to do something more exciting.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description: `This week, really listen to someone you care about—like letting them vent without jumping in to solve things.`,
        },
        {
          number: 2,
          description: `If you're tempted to switch plans, check in first—like "Hey, I had an idea for something else, you cool with that?"`,
        },
        {
          number: 3,
          description: `Look for people who love your adventurous side, {firstname}—someone who's down for your spontaneous energy.`,
        },
      ],
    },
    {
      title: `Friendships`,
      subtitle: `How You Shine with Friends, {firstname}`,
      description: `You're the friend who's always up for a good time, {firstname}—whether it's organizing a last-minute beach trip or cracking everyone up with your quick wit. You love having a big group of friends who are down for fun and action.`,
      compatibleTypes: [`ISTP`, `ESTP`, `ENTP`, `ESTJ`, `ENTJ`, `ESFP`, `ENFP`],
      superpowers: [
        {
          title: `Being Fun`,
          description: `Your friends love your "let's do this!" vibe—like suggesting a spontaneous karaoke night.`,
        },
        {
          title: `Solving Problems`,
          description: `You're great at helping friends out, like fixing a flat tire on a group road trip.`,
        },
      ],
      growthAreas: [
        {
          title: `Deepening Bonds`,
          description: `You might keep things light—like not diving into deeper conversations with friends.`,
        },
        {
          title: `Following Through`,
          description: `You might forget to follow up—like not checking in after a big group hangout.`,
        },
      ],
      actionSteps: [
        {
          number: 1,
          description: `Have a deeper chat with a friend this month—like asking, "How have you been feeling lately?"`,
        },
        {
          number: 2,
          description: `Set a reminder to check in with a friend after a hangout—like sending a quick "That was so fun, let's do it again soon!" text.`,
        },
      ],
    },
  ],
  growth: {
    summary: `You're a total pro at navigating life's challenges, {firstname}—you just do it with a bold, fun-loving attitude. You might get a bad rep for being "just about the action," but you've actually got some amazing strengths waiting to shine even brighter.`,
    superpowers: [
      {
        title: `Adaptability`,
        description: `You roll with changes like a champ, {firstname}—like quickly pivoting when plans fall through.`,
      },
      {
        title: `Living in the Moment`,
        description: `You make the most of now, like fully enjoying a great concert without worrying about tomorrow.`,
      },
    ],
    growthAreas: [
      {
        title: `Building Patience`,
        description: `You might get impatient—like feeling frustrated when things move slowly.`,
      },
      {
        title: `Looking Ahead`,
        description: `You might focus too much on the present—like not planning for future goals.`,
      },
    ],
    actionSteps: [
      {
        number: 1,
        description: `Try a mindfulness practice, like counting to 10 when you're feeling impatient.`,
      },
      {
        number: 2,
        description: `Set one long-term goal and break it into small steps—like saving for a trip by putting aside a little each week.`,
      },
      {
        number: 3,
        description: `Lean into your hands-on nature while stretching yourself—like taking a woodworking class that requires patience.`,
      },
    ],
  },
  actionItems: [
    {
      task: "Take 5 minutes to plan your week",
      completed: false,
      description: "Jot down one big task to tackle.",
    },
    {
      task: "Really listen to a loved one",
      completed: false,
      description: "Let them vent without jumping in to solve things.",
    },
    {
      task: "Set a reminder to check in after a hangout",
      completed: false,
      description: `Send a "That was so fun, let's do it again!" text.`,
    },
    {
      task: "Reflect on what keeps you going",
      completed: false,
      description: "Journal about one exciting thing you've done lately.",
    },
    {
      task: "Join our community chat and say hi to another ESTP",
      completed: false,
      description: "You'll love connecting!",
    },
  ],
  dailyHabits: {
    summary: `You thrive on action and excitement in your day-to-day life, {firstname}. Your ideal day probably includes some physical activity, solving hands-on problems, and connecting with people in the real world. You're at your best when life keeps moving!`,
    habits: {
      morning: {
        title: `Morning Physical Activity`,
        description: `Start your day with movement—like a quick workout or bike ride—to fire up your natural energy.`,
      },
      afternoon: {
        title: `Hands-On Problem-Solving`,
        description: `Find ways to use your tactical skills daily—like fixing something around the house or building something new.`,
      },
      evening: {
        title: `Real-World Connections`,
        description: `Make time for in-person interactions—like meeting a friend for coffee instead of just texting.`,
      },
    },

    communication: {
      summary: `You're direct, energetic, and focused on action in your communication. You get to the point quickly and prefer practical conversations over theoretical ones.`,
      tips: [
        `Add a warm touch to your conversations—like starting with "I'm really glad we're talking about this!"`,
        `Ask a friend a fun question, like "What's the best thing that happened to you this week?"—it'll spark a lighter chat.`,
      ],
    },
  },
  valuesAndMotivators: {
    summary: `At your core, {firstname}, you value freedom, excitement, and practicality. You're motivated by new experiences and solving real problems in the moment. Understanding these core drives helps you make choices that feel right for you.`,
    coreValues: [
      {
        title: `Freedom`,
        description: `You need room to move and act without excessive constraints—like having flexibility in how you approach tasks.`,
      },
      {
        title: `Excitement`,
        description: `You crave a certain level of thrill in life—like the rush of trying something new or taking calculated risks.`,
      },
      {
        title: `Practicality`,
        description: `You value what works in the real world—like solutions that can be implemented right away.`,
      },
    ],
    motivators: [
      {
        title: `Variety Is Key`,
        description: `Build some change into your routines—like taking different routes to work or trying new workout styles.`,
      },
      {
        title: `Make It Competitive`,
        description: `Add friendly competition to motivate yourself—like challenging a friend to see who can reach a goal first.`,
      },
      {
        title: `See Immediate Results`,
        description: `Choose projects where you can see progress quickly—like breaking big goals into smaller, visible wins.`,
      },
    ],
    actionItems: [
      {
        number: 1,
        description: `Take 10 minutes each week to jot down your thoughts on these questions in a journal—it'll keep you connected to what matters most to you.`,
      },
      {
        number: 2,
        description: `Practice active listening—like asking a friend, "What do you think about this?" and really hearing them out.`,
      },
    ],
  },
  communityConnection: {
    summary: `Connect with other ESTPs to share experiences and strategies, {firstname}! You'll likely find kindred spirits who understand your love of action and practical approach to life.`,
    suggestions: [
      `How do you channel your love of excitement into productive pursuits?`,
      `What strategies have helped you develop more patience for slower-moving situations?`,
      `How do you balance your in-the-moment lifestyle with making plans for the future?`,
    ],
  },
};

export const ESTPDataFree: FreePersonalityDatabase = {
  valuesAndMotivators: ESTPData.valuesAndMotivators,
  career: {
    summary: ESTPData.career.summary,
    superpowers: ESTPData.career.superpowers,
    growthAreas: ESTPData.career.growthAreas,
    actionSteps: ESTPData.career.actionSteps,
  },
};
