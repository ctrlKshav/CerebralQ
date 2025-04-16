export interface TraitDescription {
  name: string;
  description: string;
}

export interface TraitScores {
  [key: string]: {
    score: number;
    percentage: number;
    description: string;
  };
}

export interface PersonalityDescription {
  alias: string;
  description: (firstname: string | null, thirdPerson?: boolean) => string;
}

export interface PersonalityBlueprint {
  traits: TraitDescription[];
  summary: string;
}

export interface CareerPath {
  summary: string;
  superpowers: SuperpowerItem[];
  growthAreas: GrowthAreaItem[];
  suggestions: CareerSuggestion[];
  actionSteps: ActionStepItem[];
}

export interface CareerSuggestion {
  title: string;
  matchPercentage: number;
  description: string;
  qualityMatches: CareerQualityMatch[];
}

export interface CareerQualityMatch {
  title: string;
  description: string;
}

export type RelationshipSectionTitle = "Relationships" | "Friendships";

export interface RelationshipCompatibility {
  title: RelationshipSectionTitle;
  subtitle: string;
  description: string;
  compatibleTraits: string[];
  superpowers: SuperpowerItem[];
  growthAreas: GrowthAreaItem[];
  actionSteps: ActionStepItem[];
}

export interface GrowthJourney {
  summary: string;
  superpowers: SuperpowerItem[];
  growthAreas: GrowthAreaItem[];
  actionSteps: ActionStepItem[];
}

export interface DailyHabits {
  summary: string;
  habits: {
    morning: HabitItem;
    afternoon: HabitItem;
    evening: HabitItem;
  };
  communication: CommunicationStyle;
}

export interface CommunicationStyle {
  summary: string;
  tips: string[];
}

export interface ValuesAndMotivators {
  summary: string;
  coreValues: SuperpowerItem[];
  motivators: GrowthAreaItem[];
  actionItems: ActionStepItem[];
}

export interface CommunityConnection {
  summary: string;
  suggestions: string[];
}

export interface ActionItem {
  task: string;
  completed: boolean;
  description?: string;
}

export interface SuperpowerItem {
  title: string;
  description: string;
}

export interface GrowthAreaItem {
  title: string;
  description: string;
}

export interface HabitItem {
  title: string;
  description: string;
}

export interface ActionStepItem {
  number: number;
  description: string;
}

export interface ResultData {
  username: string | null;
  firstname: string | null;
  personalityType: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
  traitScores: TraitScores | null;
  personalityData: PersonalityDatabase;
}

export interface PersonalityDatabase {
  career: CareerPath;
  relationships: RelationshipCompatibility[];
  growth: GrowthJourney;
  actionItems: ActionItem[];
  dailyHabits: DailyHabits;
  valuesAndMotivators: ValuesAndMotivators;
  communityConnection: CommunityConnection;
}
export const sampleOceanResultData: ResultData = {
  username: null,
  firstname: null,
  personalityType: "High OCEAN",
  personalityDescription: {
    alias: "The Visionary Collaborator",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is an imaginative and cooperative individual, blending creativity with a strong sense of teamwork. They thrive in environments that value innovation and emotional connection, making them a dynamic force in any group setting.`;
      } else if (firstname && !thirdPerson) {
        return `You're an imaginative and cooperative individual, ${firstname}, blending creativity with a strong sense of teamwork. You thrive in environments that value innovation and emotional connection, making you a dynamic force in any group setting.`;
      } else {
        return `You're an imaginative and cooperative individual, blending creativity with a strong sense of teamwork. You thrive in environments that value innovation and emotional connection, making you a dynamic force in any group setting.`;
      }
    },
  },
  completionDate: new Date().toLocaleDateString(),
  traitScores: {
    Openness: {
      score: 85,
      percentage: 85,
      description: "Highly open to new experiences and ideas",
    },
    Conscientiousness: {
      score: 70,
      percentage: 70,
      description: "Organized and goal-oriented",
    },
    Extraversion: {
      score: 65,
      percentage: 65,
      description: "Moderately outgoing and energetic",
    },
    Agreeableness: {
      score: 80,
      percentage: 80,
      description: "Compassionate and cooperative",
    },
    Neuroticism: {
      score: 30,
      percentage: 30,
      description: "Emotionally stable and resilient",
    },
  },
  personalityData: {
    career: {
      summary:
        "Your high openness and agreeableness make you a natural fit for creative and collaborative roles, such as design, marketing, or team leadership. You excel in environments that encourage innovation and teamwork, but you might struggle with highly rigid or solitary tasks.",
      superpowers: [
        {
          title: "Creative Problem-Solving",
          description:
            "You generate innovative solutions, like designing a unique marketing campaign that captures attention.",
        },
        {
          title: "Team Synergy",
          description:
            "You foster collaboration, ensuring everyone’s ideas are heard during a brainstorming session.",
        },
      ],
      growthAreas: [
        {
          title: "Handling Routine Tasks",
          description:
            "You might lose focus on repetitive tasks, like neglecting administrative paperwork.",
        },
        {
          title: "Asserting Boundaries",
          description:
            "Your agreeableness might lead you to overcommit, like taking on too many team responsibilities.",
        },
      ],
      suggestions: [
        {
          title: "Creative Direction",
          matchPercentage: 94,
          description:
            "Leading projects that require innovative thinking and collaboration, like overseeing a brand’s visual identity.",
          qualityMatches: [
            {
              title: "Imaginative Vision",
              description:
                "Your openness fuels unique ideas that set trends in creative industries.",
            },
            {
              title: "Collaborative Leadership",
              description:
                "Your ability to unite diverse perspectives drives team success.",
            },
            {
              title: "Adaptability",
              description:
                "Your flexibility helps you navigate evolving project demands.",
            },
            {
              title: "Empathy in Action",
              description:
                "Your agreeableness ensures team members feel valued and heard.",
            },
          ],
        },
        {
          title: "Marketing Strategy",
          matchPercentage: 90,
          description:
            "Crafting campaigns that blend creativity with audience connection, using your ability to understand people’s needs.",
          qualityMatches: [
            {
              title: "Consumer Insight",
              description:
                "Your empathy helps you create campaigns that resonate emotionally.",
            },
            {
              title: "Creative Flair",
              description:
                "Your openness drives bold, out-of-the-box marketing ideas.",
            },
            {
              title: "Team Coordination",
              description:
                "Your agreeableness ensures smooth collaboration across departments.",
            },
            {
              title: "Strategic Thinking",
              description:
                "Your conscientiousness keeps campaigns aligned with goals.",
            },
          ],
        },
        {
          title: "Team Leadership",
          matchPercentage: 87,
          description:
            "Guiding diverse teams with empathy and vision, ensuring both innovation and harmony.",
          qualityMatches: [
            {
              title: "Empathetic Leadership",
              description:
                "Your agreeableness builds trust and motivates team members.",
            },
            {
              title: "Visionary Direction",
              description:
                "Your openness inspires creative solutions to team challenges.",
            },
            {
              title: "Emotional Stability",
              description:
                "Your low neuroticism keeps the team calm under pressure.",
            },
            {
              title: "Goal Orientation",
              description:
                "Your conscientiousness ensures projects stay on track.",
            },
          ],
        },
        {
          title: "Social Impact Consulting",
          matchPercentage: 85,
          description:
            "Advising organizations on initiatives that drive positive change, combining your creativity and compassion.",
          qualityMatches: [
            {
              title: "Purpose-Driven Innovation",
              description:
                "Your openness creates impactful, innovative solutions.",
            },
            {
              title: "Empathy for Stakeholders",
              description:
                "Your agreeableness ensures solutions meet community needs.",
            },
            {
              title: "Resilient Problem-Solving",
              description:
                "Your emotional stability helps you navigate complex challenges.",
            },
            {
              title: "Organized Execution",
              description:
                "Your conscientiousness ensures initiatives are delivered effectively.",
            },
          ],
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            "Break routine tasks into smaller, creative steps—like turning paperwork into a checklist game.",
        },
        {
          number: 2,
          description:
            'Practice saying "I’d love to help, but I need to prioritize this first" to set healthy boundaries.',
        },
        {
          number: 3,
          description:
            "Explore roles in creative industries or team leadership where your imagination and collaboration shine.",
        },
      ],
    },
    relationships: [
      {
        title: "Relationships",
        subtitle: "How you connect in Relationships",
        description:
          "You bring warmth and creativity to your relationships, always encouraging your partner to explore new ideas or experiences. Your empathy creates deep connections, but you might need to work on balancing your giving nature with your own needs.",
        compatibleTraits: [
          "High Agreeableness",
          "High Openness",
          "Low Neuroticism",
        ],
        superpowers: [
          {
            title: "Emotional Support",
            description:
              "You’re there for your partner, like listening patiently when they’ve had a tough day.",
          },
          {
            title: "Creative Bonding",
            description:
              "You plan unique experiences, like a spontaneous art workshop date.",
          },
        ],
        growthAreas: [
          {
            title: "Setting Boundaries",
            description:
              "You might prioritize your partner’s needs over your own, like agreeing to plans when you’re exhausted.",
          },
          {
            title: "Managing Sensitivity",
            description:
              "You might take criticism personally, like feeling hurt by a small disagreement.",
          },
        ],
        actionSteps: [
          {
            number: 1,
            description:
              'Practice saying "I need some time for myself today" to prioritize your needs.',
          },
          {
            number: 2,
            description:
              'If you feel sensitive, pause and ask, "What’s the intention behind this feedback?"',
          },
          {
            number: 3,
            description:
              "Seek partners who share your openness and value emotional connection.",
          },
        ],
      },
      {
        title: "Friendships",
        subtitle: "How you shine with Friends",
        description:
          "You’re the friend who brings people together, always suggesting fun, creative group activities. Your warmth and openness make you a go-to for advice, but you might need to ensure you’re not always the one organizing.",
        compatibleTraits: [
          "High Extraversion",
          "High Agreeableness",
          "High Openness",
        ],
        superpowers: [
          {
            title: "Creating Connection",
            description:
              "You make everyone feel included, like hosting a game night where everyone bonds.",
          },
          {
            title: "Inspiring Ideas",
            description:
              "You spark excitement, like suggesting a group trip to an art festival.",
          },
        ],
        growthAreas: [
          {
            title: "Delegating Plans",
            description:
              "You might take on too much, like always being the one to plan outings.",
          },
          {
            title: "Balancing Energy",
            description:
              "Your enthusiasm might lead to burnout, like overcommitting to social events.",
          },
        ],
        actionSteps: [
          {
            number: 1,
            description:
              'Ask a friend to plan the next group hangout, like saying, "What should we do next?"',
          },
          {
            number: 2,
            description:
              "Schedule a quiet evening for yourself after a busy social week to recharge.",
          },
        ],
      },
    ],

    growth: {
      summary:
        "Your growth journey is about channeling your creativity and empathy into balanced, sustainable progress. You shine when exploring new ideas and supporting others, but you can grow by setting boundaries and embracing routine tasks.",
      superpowers: [
        {
          title: "Imaginative Thinking",
          description:
            "You dream big and explore new possibilities, like starting a passion project.",
        },
        {
          title: "Empathetic Connection",
          description:
            "You build meaningful relationships that fuel your growth.",
        },
      ],
      growthAreas: [
        {
          title: "Embracing Structure",
          description:
            "You might resist routine, like procrastinating on repetitive tasks.",
        },
        {
          title: "Balancing Giving",
          description:
            "You might overextend yourself, like always putting others’ needs first.",
        },
      ],
      actionSteps: [
        {
          number: 1,
          description:
            "Create a small daily routine, like 10 minutes of organizing, to build structure.",
        },
        {
          number: 2,
          description:
            "Reflect on your needs weekly, like journaling about what energizes you.",
        },
        {
          number: 3,
          description:
            "Celebrate your creativity by starting a new project that excites you.",
        },
      ],
    },
    dailyHabits: {
      summary:
        "Your days are filled with creative and social energy, keeping you inspired and connected. Adding a bit of structure and downtime can help you sustain your vibrant lifestyle.",
      habits: {
        morning: {
          title: "Morning Inspiration",
          description:
            "You kick off your day with something creative, like sketching or listening to music.",
        },
        afternoon: {
          title: "Afternoon Connection",
          description:
            "You reach out to a friend or colleague, like grabbing a quick coffee to catch up.",
        },
        evening: {
          title: "Evening Reflection",
          description:
            "You wind down by reflecting, like writing about your day’s highlights.",
        },
      },
      communication: {
        summary:
          "You communicate with warmth and enthusiasm, making others feel heard. Sometimes, your excitement can overshadow quieter voices, so pacing yourself can enhance your impact.",
        tips: [
          'Start conversations with a question, like "What’s been inspiring you lately?"',
          "Pause to listen fully before sharing your ideas, ensuring everyone feels included.",
        ],
      },
    },
    valuesAndMotivators: {
      summary:
        "You’re driven by creativity, connection, and making a positive impact. You value collaboration and growth, and you’re motivated by opportunities to inspire and be inspired.",
      coreValues: [
        {
          title: "Creativity",
          description:
            "You thrive when expressing ideas and exploring new possibilities.",
        },
        {
          title: "Empathy",
          description:
            "You value understanding and supporting others in meaningful ways.",
        },
      ],
      motivators: [
        {
          title: "Collaboration",
          description:
            "Working with others to create something meaningful fuels your drive.",
        },
        {
          title: "Positive Impact",
          description:
            "Seeing your efforts make a difference keeps you motivated.",
        },
      ],
      actionItems: [
        {
          number: 1,
          description: "Start a creative project that aligns with your values.",
        },
        {
          number: 2,
          description:
            'Ask a colleague, "How can we make this project even better?"',
        },
        {
          number: 3,
          description:
            'Say "I need some time for myself today" to a loved one.',
        },
      ],
    },
    communityConnection: {
      summary:
        "You’re a natural community builder! Join our creative and collaborative network to share ideas, inspire others, and grow together.",
      suggestions: [
        "Share your latest creative project in our community forum to spark discussion.",
        "Join our monthly ‘Innovation Hub’ meetup to connect with like-minded visionaries.",
      ],
    },
    actionItems: [
      {
        task: "Start a creative routine",
        completed: false,
        description:
          "Spend 10 minutes daily on a creative task, like sketching.",
      },
      {
        task: "Practice boundary-setting",
        completed: false,
        description: 'Say "I need some time for myself today" when needed.',
      },
      {
        task: "Delegate a group plan",
        completed: false,
        description: 'Ask a friend, "What should we do for our next hangout?"',
      },
      {
        task: "Reflect on motivations",
        completed: false,
        description: "Journal about a project that excites you.",
      },
      {
        task: "Join our community",
        completed: false,
        description: "Introduce yourself in our creative forum.",
      },
    ],
  },
};
