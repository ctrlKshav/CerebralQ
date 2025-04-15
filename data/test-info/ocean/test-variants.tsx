import { BeakerIcon, ClipboardCheck, FlaskConical, GraduationCap, Brain, Microscope } from "lucide-react";
import { TestVariant } from "@/types/tests/test-info/ocean/test-variants";

export const testVariants: TestVariant[] = [
  {
    id: "bfi-44",
    title: "BFI-44",
    subtitle: "Quick Assessment",
    icon: <ClipboardCheck className="w-8 h-8" />,
    timeEstimate: "5-10 min",
    questionCount: "44 questions",
    description: "The BFI-44 offers a quick yet insightful snapshot of your personality. This streamlined assessment gives you accurate results in just a few minutes, making it ideal when you're curious but short on time.",
    additionalInfo: "You'll discover your core tendencies across all five traits without the deep complexity of longer assessments, revealing your authentic personality with remarkable efficiency.",
    testPath: "/start-test/ocean/bfi-44",
    acronymMeaning: "Big Five Inventory (44 items)",
    testOrigin: "Developed by Oliver P. John and colleagues at UC Berkeley, the BFI-44 is a well-validated brief measure of the five personality dimensions.",
    colorScheme: {
      border: "border-blue-200/50 dark:border-blue-900/30",
      hover: "bg-blue-500/5 dark:bg-blue-500/10",
      accent: "bg-blue-100 dark:bg-blue-900/20",
      badge: "bg-blue-50 dark:bg-blue-900/20",
      badgeText: "text-blue-600 dark:text-blue-400",
      badgeBorder: "border-blue-200 dark:border-blue-800",
      buttonHover: "bg-blue-500",
      buttonText: "text-blue-600 dark:text-blue-400",
      iconGradient: "from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700"
    }
  },
  {
    id: "ipip-120",
    title: "IPIP-120",
    subtitle: "Balanced Depth",
    icon: <FlaskConical className="w-8 h-8" />,
    timeEstimate: "15-20 min",
    questionCount: "120 questions",
    description: "Most popular among our users, the IPIP-120 strikes the perfect balance between depth and time commitment. This assessment reveals not just your core traits, but also examines 30 individual personality facets.",
    additionalInfo: "Think of it as moving from a portrait to a detailed character study — you'll see patterns in your behavior you never noticed before, while still keeping the test accessible and manageable.",
    testPath: "/start-test/ocean/ipip-120",
    acronymMeaning: "International Personality Item Pool (120 items)",
    testOrigin: "IPIP measures were developed by Lewis R. Goldberg as a scientific, public-domain alternative to commercial personality tests, making robust personality assessment freely available for research.",
    colorScheme: {
      border: "border-purple-200/50 dark:border-purple-900/30",
      hover: "bg-purple-500/5 dark:bg-purple-500/10",
      accent: "bg-purple-100 dark:bg-purple-900/20",
      badge: "bg-purple-50 dark:bg-purple-900/20",
      badgeText: "text-purple-600 dark:text-purple-400",
      badgeBorder: "border-purple-200 dark:border-purple-800",
      buttonHover: "bg-purple-500",
      buttonText: "text-purple-600 dark:text-purple-400",
      iconGradient: "from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700"
    }
  },
  {
    id: "ipip-300",
    title: "IPIP-300",
    subtitle: "Professional Depth",
    icon: <Microscope className="w-8 h-8" />,
    timeEstimate: "30-40 min",
    questionCount: "300 questions",
    description: "The IPIP-300 represents the gold standard in personality assessment, used by researchers and psychologists worldwide. This comprehensive evaluation offers the highest resolution analysis available.",
    additionalInfo: "It's like having a master psychologist conduct a thorough analysis of your personality. You'll gain access to nuanced insights about your thinking, feeling, and behavior that shape your life choices and relationships.",
    testPath: "/start-test/ocean/ipip-300",
    acronymMeaning: "International Personality Item Pool (300 items)",
    testOrigin: "This comprehensive version of the IPIP provides the most detailed assessment of the 30 personality facets that make up the Big Five traits, comparable to professional psychological instruments.",
    colorScheme: {
      border: "border-green-200/50 dark:border-green-900/30",
      hover: "bg-green-500/5 dark:bg-green-500/10",
      accent: "bg-green-100 dark:bg-green-900/20",
      badge: "bg-green-50 dark:bg-green-900/20",
      badgeText: "text-green-600 dark:text-green-400",
      badgeBorder: "border-green-200 dark:border-green-800",
      buttonHover: "bg-green-500",
      buttonText: "text-green-600 dark:text-green-400",
      iconGradient: "from-green-500 to-green-600 dark:from-green-600 dark:to-green-700"
    }
  }
]; 