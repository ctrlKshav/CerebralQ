import { TestInfo } from "@/types/chooseTest";

export const tests: TestInfo[] = [
  {
    id: "mbti",
    title: "MBTI Test",
    description:
      "Unlock the blueprint of your personality with the world's most trusted personality framework. Discover your unique combination of preferences that shape how you think, feel, and interact with the world around you.",
    path: "/tests/mbti",
    badges: {
      quality: "Most Popular",
      testDuration: "15 min",
      traitCount: "16 types",
    },
    colorClass: "bg-rose-600",
    icon: "BarChart3",
    textColorClass: "text-rose-600",
    features: [
      {
        icon: "CheckCircle",
        iconColorClass: "text-rose-600",
        text: "Simple questions that reveal your natural preferences",
      },
      {
        icon: "LineChart",
        iconColorClass: "text-rose-600",
        text: "Get your unique four-letter personality type",
      },
      {
        icon: "Users",
        iconColorClass: "text-rose-600",
        text: "Understand how you naturally connect with others",
      },
    ],
    testsTaken: "10M+ people discovered",
  },
  {
    id: "ocean",
    title: "OCEAN Test",
    description:
      "Explore the five fundamental dimensions of your personality with psychology's most scientifically validated assessment. Understand your unique blend of traits that shape your thoughts, emotions, and behaviors.",
    path: "/tests/ocean",
    colorClass: "bg-blue-600",
    icon: "LineChart",
    badges: {
      quality: "Research-Backed",
      testDuration: "10 min",
      traitCount: "5 dimensions",
    },
    textColorClass: "text-blue-600",
    features: [
      {
        icon: "CheckCircle",
        iconColorClass: "text-blue-600",
        text: "Rate yourself on key personality traits",
      },
      {
        icon: "BarChart3",
        iconColorClass: "text-blue-600",
        text: "Get your scores across five core dimensions",
      },
      {
        icon: "BookOpen",
        iconColorClass: "text-blue-600",
        text: "Receive personalized insights and growth tips",
      },
    ],
    testsTaken: "6M+ assessments completed",
  },
  {
    id: "disc",
    title: "DISC Assessment",
    description:
      "Master your communication style and workplace dynamics with the DISC model. Learn how you naturally behave in different situations and discover your unique approach to challenges, relationships, and leadership.",
    path: "/tests/disc",
    colorClass: "bg-teal-600",
    icon: "Users",
    badges: {
      quality: "Career Essential",
      testDuration: "12 min",
      traitCount: "4 styles",
    },
    textColorClass: "text-teal-600",
    features: [
      {
        icon: "CheckCircle",
        iconColorClass: "text-teal-600",
        text: "Identify your dominant behavioral style",
      },
      {
        icon: "LineChart",
        iconColorClass: "text-teal-600",
        text: "Learn how to adapt your communication",
      },
      {
        icon: "Target",
        iconColorClass: "text-teal-600",
        text: "Enhance your professional relationships",
      },
    ],
    testsTaken: "4M+ professionals assessed",
  },
  {
    id: "hexaco",
    title: "HEXACO Test",
    description:
      "Dive deep into the six dimensions of your personality with this comprehensive assessment. From honesty-humility to emotionality, discover how these traits influence your decisions, relationships, and life choices.",
    path: "/tests/hexaco",
    colorClass: "bg-amber-600",
    icon: "Brain",
    badges: {
      quality: "Academic Standard",
      testDuration: "20 min",
      traitCount: "6 dimensions",
    },
    textColorClass: "text-amber-600",
    features: [
      {
        icon: "CheckCircle",
        iconColorClass: "text-amber-600",
        text: "Explore your core personality dimensions",
      },
      {
        icon: "LineChart",
        iconColorClass: "text-amber-600",
        text: "Get detailed trait-level insights",
      },
      {
        icon: "Lightbulb",
        iconColorClass: "text-amber-600",
        text: "Understand your decision-making patterns",
      },
    ],
    testsTaken: "2M+ in-depth assessments",
  },
];