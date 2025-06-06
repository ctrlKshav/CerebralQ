"use client";
import {
  Clock,
  CheckCircle,
  Users,
  ShieldCheck,
} from "lucide-react";
import SharedTestOverviewSection, { TestOverviewBadgeItem } from "../shared/sections/SharedTestOverviewSection";

const TestOverviewSection = () => {
  const oceanBadges: TestOverviewBadgeItem[] = [
    {
      icon: <Users className="w-3 h-3 text-primary-foreground" />,
      text: "44/120/300 Questions",
      bgClass: "bg-primary/10",
      textClass: "text-primary",
      iconBgClass: "bg-primary",
    },
    {
      icon: <Clock className="w-3 h-3 text-primary-foreground" />,
      text: "5-30 Minutes",
      bgClass: "bg-blue-100 dark:bg-blue-900/20",
      textClass: "text-blue-700 dark:text-blue-400",
      iconBgClass: "bg-blue-500 dark:bg-blue-600",
    },
    {
      icon: <CheckCircle className="w-3 h-3 text-primary-foreground" />,
      text: "Scientifically Validated",
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

  const oceanBenefits: string[] = [
    "Detailed scores for all five dimensions",
    "Personalized trait descriptions",
    "Insights into your core strengths",
    "Understanding of potential challenges",
    "Relationship compatibility guidance",
    "Career path suggestions",
  ];

  return (
    <SharedTestOverviewSection
      headerTitle="What is the OCEAN Test?"
      headerHighlightWord="OCEAN"
      headerDescription="OCEAN stands for Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism – the five dimensions that form the foundation of your personality."
      mainDescriptionText={
        <>
          Based on the scientifically-validated{" "}
          <span className="font-semibold">Five Factor Model</span>, the OCEAN
          Test measures the core dimensions of your personality through
          carefully designed questions. Used by psychologists worldwide, this
          model reveals your natural tendencies, strengths, and potential areas
          for growth.
        </>
      }
      blockquoteText="Understand yourself with the same framework used by leading researchers and psychologists for decades."
      badges={oceanBadges}
      benefits={oceanBenefits}
    />
  );
};

export default TestOverviewSection;

