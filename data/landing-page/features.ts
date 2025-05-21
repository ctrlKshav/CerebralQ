import { Feature } from "@/types/features"
import { Brain, FileText, Share2, BarChart3, Lightbulb } from "lucide-react"

// Feature data structure with enhanced copy and styling for Cerebral Quotient
export const features: Feature[] = [
  {
    id: "comprehensive-assessments",
    title: "Comprehensive Assessment Suite",
    description:
      "Take scientifically validated personality assessments including MBTI, Big Five, HEXACO, and DISC. Discover your cognitive patterns, behavioral tendencies, and psychological preferences in one comprehensive platform.",
    details: [
      "MBTI (Myers-Briggs Type Indicator) - 16 personality types",
      "Big Five Personality Traits - Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
      "HEXACO Personality Model - Six-factor personality assessment",
      "DISC Assessment - Dominance, Influence, Steadiness, Conscientiousness",
    ],
    image: "/placeholder.svg?height=500&width=600&text=Personality+Tests",
    icon: Brain,
    color: "bg-violet-600",
    textColor: "text-violet-600",
    borderColor: "border-violet-600",
  },
  {
    id: "detailed-reports",
    title: "Professional PDF Reports",
    description:
      "Receive comprehensive PDF reports with detailed analysis of your personality profile. Our reports provide actionable insights for personal development, career planning, and relationship building.",
    details: [
      "Detailed personality type analysis and explanations",
      "Strengths and growth areas identification",
      "Career recommendations based on personality fit",
      "Relationship and communication style insights",
      "Professional-quality PDF format for easy sharing",
    ],
    image: "/placeholder.svg?height=500&width=600&text=PDF+Reports",
    icon: FileText,
    color: "bg-emerald-600",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-600",
  },
  {
    id: "shareable-profiles",
    title: "Shareable Personality Profiles",
    description:
      "Create your unique personality profile page at cerebralquotient.com/username. Share your results with friends, colleagues, or potential employers to help them understand your personality better.",
    details: [
      "Custom URL: cerebralquotient.com/your-username",
      "Beautiful, interactive personality visualizations",
      "Easy sharing with friends and colleagues",
      "Privacy settings to control what others see",
      "Professional presentation for career networking",
    ],
    image: "/placeholder.svg?height=500&width=600&text=Profile+Sharing",
    icon: Share2,
    color: "bg-rose-600",
    textColor: "text-rose-600",
    borderColor: "border-rose-600",
  },
  {
    id: "personality-insights",
    title: "Deep Personality Insights",
    description:
      "Unlock deeper understanding of your psychological makeup with our advanced analysis algorithms. Get insights into your behavioral patterns, cognitive preferences, and potential areas for growth.",
    details: [
      "Cognitive function stack analysis (MBTI)",
      "Trait-level breakdowns with percentile scores",
      "Behavioral predictions and tendencies",
      "Personalized growth recommendations",
      "Compatibility insights with other personality types",
    ],
    image: "/placeholder.svg?height=500&width=600&text=Personality+Insights",
    icon: BarChart3,
    color: "bg-amber-600",
    textColor: "text-amber-600",
    borderColor: "border-amber-600",
  },
]