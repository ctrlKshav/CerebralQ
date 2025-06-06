"use client";
import {
  Clock,
  CheckCircle,
  Users,
  ShieldCheck,
} from "lucide-react";
import SharedTestOverviewSection, { TestOverviewBadgeItem } from "../shared/SharedTestOverviewSection";

const TestOverviewSection = () => {
  const discBadges: TestOverviewBadgeItem[] = [
    {
      icon: <Users className="w-3 h-3 text-primary-foreground" />,
      text: "24/60 Questions",
      bgClass: "bg-primary/10",
      textClass: "text-primary",
      iconBgClass: "bg-primary",
    },
    {
      icon: <Clock className="w-3 h-3 text-primary-foreground" />,
      text: "5-20 Minutes",
      bgClass: "bg-blue-100 dark:bg-blue-900/20",
      textClass: "text-blue-700 dark:text-blue-400",
      iconBgClass: "bg-blue-500 dark:bg-blue-600",
    },
    {
      icon: <CheckCircle className="w-3 h-3 text-primary-foreground" />,
      text: "Business Standard",
      bgClass: "bg-green-100 dark:bg-green-900/20",
      textClass: "text-green-700 dark:text-green-400",
      iconBgClass: "bg-green-500 dark:bg-green-600",
    },
    {
      icon: <ShieldCheck className="w-3 h-3 text-primary-foreground" />,
      text: "Free & Private",
      bgClass: "bg-purple-100 dark:bg-purple-900/20",
      textClass: "text-purple-700 dark:text-purple-400",
      iconBgClass: "bg-purple-500 dark:bg-purple-600",
    },
  ];

  const discBenefits: string[] = [
    "Your primary and secondary DISC styles",
    "Detailed behavioral tendencies analysis",
    "Communication style insights",
    "Team dynamics recommendations",
    "Leadership approach assessment",
    "Stress response patterns",
    "Career compatibility guidance",
    "Personal development strategies"
  ];

  return (
    <SharedTestOverviewSection
      headerTitle="What is the DISC Assessment?"
      headerHighlightWord="DISC"
      headerDescription="DISC stands for Dominance, Influence, Steadiness, and Conscientiousness – the four behavioral dimensions that shape how you interact with the world."
      mainDescriptionText={
        <>
          Developed by psychologist William Moulton Marston in the 1920s, the{" "}
          <span className="font-semibold">DISC Assessment</span> identifies your behavioral tendencies across four key dimensions. 
          Unlike personality tests that measure who you are, DISC reveals{" "}
          <span className="font-semibold">how you behave</span> in different situations and environments.
        </>
      }
      blockquoteText="Gain powerful insights into your communication style, leadership approach, and how others perceive you in professional and personal settings."
      badges={discBadges}
      benefits={discBenefits}
    />
  );
};

export default TestOverviewSection;

