import { TestInfo } from "@/types/chooseTest";

export const tests: TestInfo[] = [
  {
    id: "mbti",
    title: "MBTI Test",
    description: "Uncover your authentic personality blueprint and discover how your mind works. Gain powerful insights into your natural strengths, ideal career paths, and relationship dynamics based on the world-renowned Myers-Briggs framework.",
    path: "/test/mbti",
    badge: "Popular",
    badgeClass: "bg-blue-100 text-blue-800",
    icon: "BarChart3",
    gradientClass: "bg-gradient-to-br from-blue-500 to-purple-600",
    textColorClass: "text-blue-600",
    backgroundPattern: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236366f1' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
    testDuration: "12 min",
    traitCount: "16 types",
    features: [
      {
        icon: "CheckCircle",
        iconBgClass: "bg-blue-100 text-blue-600",
        text: "Answer simple questions about your preferences",
        tooltip: "No right or wrong answers - just be yourself"
      },
      {
        icon: "LineChart",
        iconBgClass: "bg-blue-100 text-blue-600",
        text: "Get a detailed breakdown of your personality type",
        tooltip: "Visualize your characteristics across different dimensions"
      },
      {
        icon: "Users",
        iconBgClass: "bg-blue-100 text-blue-600",
        text: "Discover how you interact with other types",
        tooltip: "Understand relationship dynamics and communication styles"
      }
    ],
    avatars: [
      { initial: "A" },
      { initial: "B" },
      { initial: "C" }
    ],
    testsTaken: "8.5M+ tests taken"
  },
  {
    id: "ocean",
    title: "OCEAN Test",
    description: "Explore the depths of your personality with the scientifically validated Big Five assessment. Gain nuanced insights into your emotional patterns, social tendencies, and thinking style through a research-backed framework trusted by psychologists worldwide.",
    path: "/test/ocean",
    badge: "Scientific",
    badgeClass: "bg-teal-100 text-teal-800",
    icon: "LineChart",
    gradientClass: "bg-gradient-to-br from-cyan-500 to-teal-600",
    textColorClass: "text-teal-600",
    backgroundPattern: "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.05'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
    testDuration: "8 min",
    traitCount: "5 traits",
    features: [
      {
        icon: "CheckCircle",
        iconBgClass: "bg-teal-100 text-teal-600",
        text: "Rate how well statements describe you",
        tooltip: "Simple sliding scale from strongly disagree to strongly agree"
      },
      {
        icon: "BarChart3",
        iconBgClass: "bg-teal-100 text-teal-600",
        text: "See where you score on the five key dimensions",
        tooltip: "Personalized percentile scores compared to others"
      },
      {
        icon: "BookOpen",
        iconBgClass: "bg-teal-100 text-teal-600",
        text: "Get actionable insights for personal growth",
        tooltip: "Practical recommendations based on your unique profile"
      }
    ],
    avatars: [
      { initial: "D" },
      { initial: "E" },
      { initial: "F" }
    ],
    testsTaken: "5.2M+ tests taken"
  }
];
