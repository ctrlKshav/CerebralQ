import { Feature } from "@/types/landing-page/features";
import { Brain, FileText, Share2, BarChart3, Lightbulb } from "lucide-react";

export const features: Feature[] = [
  {
    id: 1,
    title: "Comprehensive Personality Assessments",
    subtitle:
      "Discover your true self through scientifically-backed personality tests",
    bulletPoints: [
      "MBTI (Myers-Briggs Type Indicator)",
      "Big Five Ocean Model",
      "HEXACO Personality Inventory",
      "DISC Assessment",
      "Additional emerging personality frameworks",
    ],
    imageSrc: "/images/landingPage/features/TestSuite.png",
  },
  {
    id: 2,
    title: "In-Depth Personality Insights",
    subtitle:
      "Get comprehensive analysis of your personality traits and characteristics",
    bulletPoints: [
      "Detailed trait analysis and explanations",
      "Strengths and areas for development",
      "Behavioral patterns and tendencies",
      "Cognitive preferences and decision-making style",
      "Personalized insights based on your results",
    ],
    imageSrc: "/images/landingPage/features/PersonalityAnalysis.png",
  },
  {
    id: 3,
    title: "Professional PDF Reports",
    subtitle:
      "Download beautifully designed reports for personal use or sharing",
    bulletPoints: [
      "High-quality downloadable PDF format",
      "Professional design and layout",
      "Comprehensive analysis and insights",
      "Perfect for career development",
      "Share with mentors, coaches, or employers",
    ],
    imageSrc: "/images/landingPage/features/PDFReport.png",
  },
  {
    id: 4,
    title: "Shareable Personality Profiles",
    subtitle:
      "Create your unique personality profile and share it with the world",
    bulletPoints: [
      "Custom URL: cerebralquotient.com/username",
      "Beautiful public profile page",
      "Social sharing capabilities",
      "Connect with like-minded individuals",
      "Build your personal brand around your personality",
    ],
    imageSrc: "/images/landingPage/features/PersonalityDashboard.png",
  },
];
