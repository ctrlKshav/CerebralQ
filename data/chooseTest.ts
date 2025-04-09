import { TestInfo } from "@/types/chooseTest";

export const tests: TestInfo[] = [
  {
    id: "mbti",
    title: "MBTI Test",
    description:
      "Ready to decode your true self? Dive into the iconic Myers-Briggs framework and unlock the secrets of your personality. Discover what makes you tick, where you shine, and how you vibe with others—your personal roadmap awaits!",
    path: "/tests/mbti",
    badges: {
      quality: "Fan Favorite",
      testDuration: "12 min",
      traitCount: "16 vibes",
    },
    colorClass: "bg-rose-600",
    icon: "BarChart3",
    textColorClass: "text-rose-600",
    features: [
      {
        icon: "CheckCircle",
        iconColorClass: "text-rose-600",
        text: "Quick questions, real you—just pick what feels right",
      },
      {
        icon: "LineChart",
        iconColorClass: "text-rose-600",
        text: "Score a deep dive into your unique personality code",
      },
      {
        icon: "Users",
        iconColorClass: "text-rose-600",
        text: "See how you click (or clash) with other types",
      },
    ],
    testsTaken: "8.5M+ explorers hooked",
  },
  {
    id: "ocean",
    title: "OCEAN Test",
    description:
      "Dive into your soul with the Big Five—psychology’s gold standard. Get the raw, unfiltered scoop on your emotions, social game, and thought process. This isn’t just a test; it’s a wake-up call to own who you are.",
    path: "/tests/ocean",
    colorClass: "bg-teal-600",
    icon: "LineChart",
    badges: {
      quality: "Science-Backed",
      testDuration: "8 min",
      traitCount: "5 core traits",
    },
    textColorClass: "text-teal-600",
    features: [
      {
        icon: "CheckCircle",
        iconColorClass: "text-teal-600",
        text: "Rate yourself raw—how real are these vibes?",
      },
      {
        icon: "BarChart3",
        iconColorClass: "text-teal-600",
        text: "Map your scores across five epic dimensions",
      },
      {
        icon: "BookOpen",
        iconColorClass: "text-teal-600",
        text: "Unlock pro tips to level up your life",
      },
    ],
    testsTaken: "5.2M+ truth-seekers in",
  },
];