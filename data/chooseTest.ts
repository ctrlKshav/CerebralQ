import { TestInfo } from "@/types/chooseTest";

export const tests: TestInfo[] = [
  {
    id: "mbti",
    title: "MBTI Test",
    description:
      "Uncover your authentic personality blueprint and discover how your mind works. Gain powerful insights into your natural strengths, ideal career paths, and relationship dynamics based on the world-renowned Myers-Briggs framework.",
    path: "/tests/mbti",
    badges: {
      quality: "Popular",
      testDuration: "12 min",
      traitCount: "16 types",
    },
    colorClass: "bg-purple-600",
    icon: "BarChart3",
    textColorClass: "text-blue-600",
    features: [
      {
        icon: "CheckCircle",
        iconBgClass: "bg-blue-100 text-blue-600",
        text: "Answer simple questions about your preferences",
        tooltip: "No right or wrong answers - just be yourself",
      },
      {
        icon: "LineChart",
        iconBgClass: "bg-blue-100 text-blue-600",
        text: "Get a detailed breakdown of your personality type",
        tooltip: "Visualize your characteristics across different dimensions",
      },
      {
        icon: "Users",
        iconBgClass: "bg-blue-100 text-blue-600",
        text: "Discover how you interact with other types",
        tooltip: "Understand relationship dynamics and communication styles",
      },
    ],
    avatars: [{ initial: "A" }, { initial: "B" }, { initial: "C" }],
    testsTaken: "8.5M+ tests taken",
  },
  {
    id: "ocean",
    title: "OCEAN Test",
    description:
      "Explore the depths of your personality with the scientifically validated Big Five assessment. Gain nuanced insights into your emotional patterns, social tendencies, and thinking style through a research-backed framework trusted by psychologists worldwide.",
    path: "/tests/ocean",
    colorClass: "bg-teal-600",
    icon: "LineChart",
    badges: {
      quality: "Scientific",
      testDuration: "8 min",
      traitCount: "5 traits",
    },
    textColorClass: "text-teal-600",
    features: [
      {
        icon: "CheckCircle",
        iconBgClass: "bg-teal-100 text-teal-600",
        text: "Rate how well statements describe you",
        tooltip:
          "Simple sliding scale from strongly disagree to strongly agree",
      },
      {
        icon: "BarChart3",
        iconBgClass: "bg-teal-100 text-teal-600",
        text: "See where you score on the five key dimensions",
        tooltip: "Personalized percentile scores compared to others",
      },
      {
        icon: "BookOpen",
        iconBgClass: "bg-teal-100 text-teal-600",
        text: "Get actionable insights for personal growth",
        tooltip: "Practical recommendations based on your unique profile",
      },
    ],
    avatars: [{ initial: "D" }, { initial: "E" }, { initial: "F" }],
    testsTaken: "5.2M+ tests taken",
  },
];
