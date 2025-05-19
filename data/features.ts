
import { Feature } from "@/types/features"
import { Brain, FileText, Share2, BarChart3, Lightbulb } from "lucide-react"

// Feature data structure with enhanced copy and styling
export const features: Feature[] = [
  {
    id: "comprehensive-assessments",
    title: "Complete Assessment Suite",
    description:
      "Access all major personality frameworks in one platform. Get insights from MBTI, Big Five, HEXACO, and DISC to understand your complete psychological profile.",
    details: [
      "Myers-Briggs Type Indicator (MBTI)",
      "Big Five Personality Dimensions",
      "HEXACO Personality Inventory",
      "DISC Behavioral Assessment",
      "Unified results across all frameworks",
    ],
    image: "/placeholder.svg?height=500&width=600&text=Assessments",
    icon: Brain,
    color: "bg-violet-600",
    textColor: "text-violet-600",
    borderColor: "border-violet-600",
  },
  {
    id: "detailed-reports",
    title: "In-Depth PDF Reports",
    description:
      "Receive beautifully designed reports with actionable insights. Each report includes career guidance, relationship compatibility, and personal growth recommendations.",
    details: [
      "Comprehensive personality analysis",
      "Career path recommendations",
      "Relationship compatibility insights",
      "Personal growth strategies",
      "Downloadable and shareable formats",
    ],
    image: "/placeholder.svg?height=500&width=600&text=Reports",
    icon: FileText,
    color: "bg-emerald-600",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-600",
  },
  {
    id: "shareable-profiles",
    title: "Custom Profile Pages",
    description:
      "Create your digital personality identity with a custom URL. Share your profile with employers, partners, or friends to help them understand your unique traits.",
    details: [
      "Personal URL (cerebralquotient.com/username)",
      "Interactive personality visualizations",
      "Social media integration",
      "Privacy control settings",
      "Professional presentation options",
    ],
    image: "/placeholder.svg?height=500&width=600&text=Profiles",
    icon: Share2,
    color: "bg-rose-600",
    textColor: "text-rose-600",
    borderColor: "border-rose-600",
  },
  {
    id: "advanced-analytics",
    title: "Powerful Analytics Dashboard",
    description:
      "Track your psychological evolution over time. Our analytics platform shows how life events shape your personality and helps you understand your behavioral patterns.",
    details: [
      "Longitudinal trait tracking",
      "Comparative analysis tools",
      "Behavioral pattern recognition",
      "Historical data visualization",
      "Personalized insight reports",
    ],
    image: "/placeholder.svg?height=500&width=600&text=Analytics",
    icon: BarChart3,
    color: "bg-amber-600",
    textColor: "text-amber-600",
    borderColor: "border-amber-600",
  },
  {
    id: "expert-science",
    title: "Research-Backed Methodology",
    description:
      "Trust assessments built on solid psychological science. Our platform uses validated methodologies developed with leading researchers and academic institutions.",
    details: [
      "Psychometrically validated instruments",
      "Evidence-based assessment design",
      "Ongoing validation studies",
      "Academic research partnerships",
      "Transparent reliability metrics",
    ],
    image: "/placeholder.svg?height=500&width=600&text=Science",
    icon: Lightbulb,
    color: "bg-blue-600",
    textColor: "text-blue-600",
    borderColor: "border-blue-600",
  },
]