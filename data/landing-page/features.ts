import { Feature } from "@/types/landing-page/features";
import { Brain, FileText, Share2, BarChart3, Lightbulb } from "lucide-react";

export const features: Feature[] = [
  {
    id: 1,
    title: "Comprehensive Assessment Suite",
    subtitle:
      "Go beyond surface-level quizzes with assessments trusted by psychologists worldwide",
    bulletPoints: [
      "MBTI - Understand how you process information and make decisions",
      "Big Five Ocean - The most scientifically validated personality model",
      "HEXACO - Discover your honesty-humility and emotional patterns",
      "DISC - Master your communication and work style",
      "Plus emerging frameworks as psychology evolves",
    ],
    imageSrc: "/images/landingPage/features/TestSuite.png",
  },
  {
    id: 2,
    title: "Insights That Actually Matter",
    subtitle:
      "Skip the generic descriptions. Get personalized analysis that helps you grow",
    bulletPoints: [
      "Why you think and act the way you do (the psychology behind your behavior)",
      "Your natural strengths and blind spots others might not tell you about",
      "Specific situations where you thrive vs. struggle",
      "How your mind works under stress and pressure",
      "Actionable steps to leverage your personality type",
    ],
    imageSrc: "/images/landingPage/features/PersonalityAnalysis.png",
  },
  {
    id: 3,
    title: "Professional Reports You'll Actually Use",
    subtitle:
      "Beautiful, comprehensive reports designed for real-world application",
    bulletPoints: [
      "15-30 page detailed analysis (not a 2-page summary)",
      "Clean, professional design perfect for sharing with mentors",
      "Career-specific insights and role recommendations",
      "Relationship compatibility and communication tips",
      "Personal development roadmap with concrete next steps",
    ],
    imageSrc: "/images/landingPage/features/PDFReport.png",
  },
  {
    id: 4,
    title: "Your Personality, Your Brand",
    subtitle:
      "Turn self-awareness into social connection with shareable profiles",
    bulletPoints: [
      "Clean public profile at cerebralquotient.com/yourusername",
      "Show friends, colleagues, and dates who you really are",
      "Find others with compatible personality types",
      "Professional networking tool for career opportunities",
      "Build authentic relationships based on real understanding",
    ],
    imageSrc: "/images/landingPage/features/PersonalityDashboard.png",
  },
];
