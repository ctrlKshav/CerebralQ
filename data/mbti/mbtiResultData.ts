import { PersonalityDatabase, ResultData } from "@/types/tests/mbti";
import { ENTJData } from "./personalityDatabase/entj";
import { ENFJData } from "./personalityDatabase/enfj";
import { ENTPData } from "./personalityDatabase/entp";
import { ESTJData } from "./personalityDatabase/estj";
import { ESTPData } from "./personalityDatabase/estp";
import { ESFJData } from "./personalityDatabase/esfj";
import { ENFPData } from "./personalityDatabase/enfp";
import { ESFPData } from "./personalityDatabase/esfp";
import { INTPData } from "./personalityDatabase/intp";
import { INFPData } from "./personalityDatabase/infp";
import { ISFPData } from "./personalityDatabase/isfp";
import { ISTPData } from "./personalityDatabase/istp";
import { INTJData } from "./personalityDatabase/intj";
import { INFJData } from "./personalityDatabase/infj";
import { ISFJData } from "./personalityDatabase/isfj";
import { ISTJData } from "./personalityDatabase/istj";

export const sampleResultData: ResultData = {
  username: null,
  firstname: null,
  personalityType: "ENTJ",
  personalityDescription: {
    alias: "The Commander",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is a bold leader with a vision for success, always ready to take charge and make big things happen. They’ve got a driven, inspiring vibe that makes them a total powerhouse, whether leading a team project or setting ambitious goals for themselves.`;
      } else if (firstname && !thirdPerson) {
        return `You’re a bold leader with a vision for success, always ready to take charge and make big things happen. You’ve got a driven, inspiring vibe that makes you a total powerhouse, whether leading a team project or setting ambitious goals for yourself, ${firstname}.`;
      } else {
        return `You’re a bold leader with a vision for success, always ready to take charge and make big things happen. You’ve got a driven, inspiring vibe that makes you a total powerhouse, whether leading a team project or setting ambitious goals for yourself.`;
      }
    },
  },
  completionDate: new Date().toLocaleDateString(),
  traitScores: {
    "E-I": {
      left: 24,
      right: 6,
      leftPercentage: 80,
      rightPercentage: 20,
      dominant: "left",
    },
    "S-N": {
      left: 9,
      right: 21,
      leftPercentage: 30,
      rightPercentage: 70,
      dominant: "right",
    },
    "T-F": {
      left: 25,
      right: 5,
      leftPercentage: 83,
      rightPercentage: 17,
      dominant: "left",
    },
    "J-P": {
      left: 22,
      right: 8,
      leftPercentage: 73,
      rightPercentage: 27,
      dominant: "left",
    },
  },
  personalityData: {
    career: {
      summary:
        "You're a total force in jobs where you can lead and strategize—like business management, entrepreneurship, or even something high-stakes like law. You love roles that let you take charge and achieve big goals, but you might get frustrated if the work feels inefficient or if others don't keep up with your pace.",
      superpowers: [
        {
          title: "Leading with Vision",
          description:
            "You inspire others with your big ideas—like pitching a game-changing plan to your team.",
        },
        {
          title: "Getting Results",
          description:
            "You're a pro at making things happen, like hitting every target on a tight deadline.",
        },
      ],
      growthAreas: [
        {
          title: "Being Patient",
          description:
            "You might push too hard for results—like getting annoyed if a project isn't moving fast enough.",
        },
        {
          title: "Listening to Others",
          description:
            "You might focus on your vision and miss input—like not hearing a teammate's alternative idea.",
        },
      ],
      suggestions: [
        {
          title: "Business Management",
          matchPercentage: 95,
          description:
            "Roles that let you lead and make strategic decisions, using your natural talent for driving results and organizing teams.",
          qualityMatches: [
            {
              title: "Strategic Vision",
              description:
                "Your ability to see the big picture and plan for long-term success aligns perfectly with leadership roles.",
            },
            {
              title: "Decisive Leadership",
              description:
                "Your confident decision-making allows you to guide teams through challenges effectively.",
            },
            {
              title: "Efficiency Focus",
              description:
                "Your drive to optimize processes and eliminate inefficiencies makes you an effective manager.",
            },
            {
              title: "Results Orientation",
              description:
                "Your natural focus on achieving objectives helps organizations meet their goals.",
            },
          ],
        },
        {
          title: "Entrepreneurship",
          matchPercentage: 92,
          description:
            "Starting and growing businesses where you can implement your vision and create impactful solutions.",
          qualityMatches: [
            {
              title: "Bold Innovation",
              description:
                "Your willingness to take calculated risks and implement new ideas makes you a natural entrepreneur.",
            },
            {
              title: "Strategic Planning",
              description:
                "Your ability to develop and execute long-term business strategies gives ventures a solid foundation.",
            },
            {
              title: "Leadership Drive",
              description:
                "Your natural command presence helps you build and inspire effective teams.",
            },
            {
              title: "Adaptability",
              description:
                "Your capacity to adjust strategies when faced with changing market conditions ensures business resilience.",
            },
          ],
        },
        {
          title: "Law",
          matchPercentage: 88,
          description:
            "High-stakes environments where your logical thinking and strategic planning help you analyze complex situations.",
          qualityMatches: [
            {
              title: "Logical Analysis",
              description:
                "Your ability to analyze complex arguments objectively benefits legal reasoning and case building.",
            },
            {
              title: "Persuasive Communication",
              description:
                "Your natural talent for articulating viewpoints clearly strengthens your advocacy skills.",
            },
            {
              title: "Strategic Thinking",
              description:
                "Your capacity to develop winning legal strategies makes you effective in litigation and negotiations.",
            },
            {
              title: "Structured Approach",
              description:
                "Your methodical way of managing cases and meeting deadlines ensures legal success.",
            },
          ],
        },
        {
          title: "Consulting",
          matchPercentage: 85,
          description:
            "Roles that let you optimize systems and provide leadership guidance to help others achieve results.",
          qualityMatches: [
            {
              title: "Problem Solving",
              description:
                "Your ability to identify core issues and develop effective solutions makes you a valuable consultant.",
            },
            {
              title: "Systems Thinking",
              description:
                "Your talent for understanding how organizational components interact helps you optimize operations.",
            },
            {
              title: "Executive Presence",
              description:
                "Your natural confidence and authoritative communication style helps you influence client decisions.",
            },
            {
              title: "Implementation Focus",
              description:
                "Your drive to turn plans into action ensures your recommendations deliver real-world results.",
            },
          ],
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            "If things are moving slowly, take a deep breath and break the task into smaller steps to keep progress steady.",
        },
        {
          number: 2,
          description:
            'Ask a coworker for their input this week—like "What do you think we could do differently here?"—to open up to new ideas.',
        },
        {
          number: 3,
          description:
            "Look for jobs that let you lead and innovate, like being a CEO or a consultant—your kind of vibe!",
        },
      ],
    },
    relationships: [
      {
        title: "Relationships",
        subtitle: "How you show up in Relationships",
        description:
          "You're the driven, inspiring one in your relationships. You show love by pushing others to be their best, like encouraging your partner to chase their dreams or organizing a family goal-setting session, but you might need to work on slowing down to connect emotionally.",
        compatibleTypes: ["ISFP", "ISTP", "ENFP", "INFP"],
        superpowers: [
          {
            title: "Being Motivational",
            description:
              "You lift people up—like cheering on a friend to go after a big opportunity.",
          },
          {
            title: "Taking Charge",
            description:
              "You make things happen, like planning a memorable anniversary dinner for your partner.",
          },
        ],
        growthAreas: [
          {
            title: "Being Vulnerable",
            description:
              "You might focus on goals and miss the emotions—like not sharing when you're feeling stressed.",
          },
          {
            title: "Slowing Down",
            description:
              "You might push too hard—like encouraging a loved one to act before they're ready.",
          },
        ],
        actionSteps: [
          {
            number: 1,
            description:
              'This week, share one feeling with someone you care about—like "I\'ve been feeling a bit overwhelmed lately."',
          },
          {
            number: 2,
            description:
              'If you\'re encouraging someone, check in first—like "I think this could be great for you, but how do you feel about it?"',
          },
          {
            number: 3,
            description:
              "Look for people who admire your drive—someone who loves your ambitious energy as much as you do.",
          },
        ],
      },
      {
        title: "Friendships",
        subtitle: "How you shine with Friends",
        description:
          "You're the friend who takes the lead—always ready to organize a group adventure or motivate your crew to tackle a challenge. You love having a solid group of friends who respect your leadership and share your drive for success.",
        compatibleTypes: ["INTP", "ENTP", "INFJ", "INTJ"],
        superpowers: [
          {
            title: "Being Inspiring",
            description:
              "Your friends look up to you—like when you motivate them to join a charity run.",
          },
          {
            title: "Planning Big Moments",
            description:
              "You create awesome experiences, like organizing a group trip everyone talks about for years.",
          },
        ],
        growthAreas: [
          {
            title: "Listening More",
            description:
              "You might focus on your ideas—like not hearing a friend's quieter suggestion during a group plan.",
          },
          {
            title: "Being Flexible",
            description:
              "You might stick to your vision—like pushing for a plan when your friends want to do something else.",
          },
        ],
        actionSteps: [
          {
            number: 1,
            description:
              'Let your friends take the lead on a plan this month—like saying, "What do you guys want to do this time?"',
          },
          {
            number: 2,
            description:
              'Practice active listening—like asking a friend, "What do you think about this?" and really hearing them out.',
          },
        ],
      },
    ],
    growth: {
      summary:
        "Growth for you is all about becoming an even better leader while learning to connect more deeply. You're amazing at setting goals and making them happen, but you might need to work on being more patient and in tune with your emotions.",
      superpowers: [
        {
          title: "Being Ambitious",
          description:
            "You set big goals and go for them—like always pushing yourself to the next level.",
        },
        {
          title: "Staying Focused",
          description:
            "You don't let obstacles stop you, which makes your growth journey so powerful.",
        },
      ],
      growthAreas: [
        {
          title: "Being Patient",
          description:
            "You might get frustrated with delays—like stressing if a goal takes longer than expected.",
        },
        {
          title: "Connecting Emotionally",
          description:
            "You might focus on results over feelings—like not noticing when you need a break.",
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            "If you're feeling impatient, take a moment to reflect—like \"What's one small step I can take today?\"",
        },
        {
          number: 2,
          description:
            "Try a new emotional check-in this week, like journaling about how you're feeling, to connect with yourself.",
        },
        {
          number: 3,
          description:
            "Write down three things you love about being an ENTJ when you're feeling hard on yourself.",
        },
      ],
    },
    dailyHabits: {
      summary:
        "You love a routine that keeps you on track, and it totally works for you—your days are focused and productive, and you feel best when you're in control. Adding a little downtime can help you recharge for your big goals.",
      habits: {
        morning: {
          title: "Morning Routine",
          description:
            "You start your day with a clear plan and a goal in mind, like mapping out your top priorities over coffee.",
        },
        afternoon: {
          title: "Afternoon Break",
          description:
            "You take a breather to recharge and refocus, like going for a walk or reading a book to clear your mind.",
        },
        evening: {
          title: "Evening Wind-Down",
          description:
            "You wrap up your day with a reflection on what you've achieved, like jotting down your wins and what you're grateful for.",
        },
      },
      communication: {
        summary:
          "You're confident and direct when you talk, always getting your point across with clarity. You love conversations that are goal-oriented, but sometimes you might come across as too intense without meaning to.",
        tips: [
          'Add a warm touch to your conversations—like starting with "I\'m really excited to hear your thoughts on this!"',
          "Ask a friend a lighter question, like \"What's been the best part of your week?\"—it'll spark a more relaxed chat.",
        ],
      },
    },

    valuesAndMotivators: {
      summary:
        "You're all about achieving success and inspiring others to do the same. You value leadership, efficiency, and progress, and you're motivated by setting big goals, overcoming challenges, and making a lasting impact.",
      coreValues: [
        {
          title: "Achievement",
          description:
            "You're driven to accomplish goals and prove your competence in everything you do.",
        },
        {
          title: "Leadership",
          description:
            "You value taking charge and directing others toward success with clarity and vision.",
        },
      ],
      motivators: [
        {
          title: "Recognition",
          description:
            "Being recognized for your achievements and leadership drives you forward.",
        },
        {
          title: "Impact",
          description:
            "Working with decisive, intelligent people and seeing your efforts create real change.",
        },
      ],
      actionItems: [
        {
          number: 1,
          description: "Journal about one big goal you're working toward.",
        },
        {
          number: 2,
          description: 'Say "What do you think we could do differently here?"',
        },
        {
          number: 3,
          description: 'Say "I\'ve been feeling a bit overwhelmed lately."',
        },
      ],
    },
    communityConnection: {
      summary:
        "You don't have to figure this out alone! Come hang out with other ENTJs and career starters in our growing community. Share your best strategies for success, swap ideas, and let's build something awesome together.",
      suggestions: [
        "Drop your MBTI type in our community chat—say hi to other Commanders who get you!",
        'Join our weekly "Leadership Goals" chat to share your latest plans and ambitions.',
      ],
    },
    actionItems: [
      {
        task: "Ask a coworker for input",
        completed: false,
        description: 'Say "What do you think we could do differently here?"',
      },
      {
        task: "Share a feeling with a loved one",
        completed: false,
        description: 'Say "I\'ve been feeling a bit overwhelmed lately."',
      },
      {
        task: "Let your friends take the lead on a plan",
        completed: false,
        description: 'Say "What do you guys want to do this time?"',
      },
      {
        task: "Reflect on what keeps you going",
        completed: false,
        description: "Journal about one big goal you're working toward.",
      },
      {
        task: "Join our community chat",
        completed: false,
        description: "Say hi to another ENTJ—you'll love connecting!",
      },
    ],
  },
};

export const personalityDatabase: { [key: string]: PersonalityDatabase } = {
  ENTJ: ENTJData,
  ENFJ: ENFJData,
  ENTP: ENTPData,
  ENFP: ENFPData,
  ESTJ: ESTJData,
  ESTP: ESTPData,
  ESFJ: ESFJData,
  ESFP: ESFPData,
  INTP: INTPData,
  INFP: INFPData,
  ISFP: ISFPData,
  ISTP: ISTPData,
  INTJ: INTJData,
  INFJ: INFJData,
  ISFJ: ISFJData,
  ISTJ: ISTJData,
};

export const getPersonalityData = (
  personalityType: string
): PersonalityDatabase => {
  return personalityDatabase[personalityType] || personalityDatabase["ENTJ"];
};
