"use client";
import {
  Clock,
  CheckCircle,
  Users,
  ShieldCheck,
  Hexagon, // Specific to HEXACO
} from "lucide-react";
import SharedTestOverviewSection, { TestOverviewBadgeItem } from "../shared/SharedTestOverviewSection";

const TestOverviewSection = () => {
  const hexacoBadges: TestOverviewBadgeItem[] = [
    {
      icon: <Users className="w-3 h-3 text-primary-foreground" />,
      text: "60/100/200 Questions",
      bgClass: "bg-primary/10",
      textClass: "text-primary",
      iconBgClass: "bg-primary",
    },
    {
      icon: <Clock className="w-3 h-3 text-primary-foreground" />,
      text: "10-25 Minutes",
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
    {
      icon: <Hexagon className="w-3 h-3 text-primary-foreground" />,
      text: "Six Dimensions",
      bgClass: "bg-orange-100 dark:bg-orange-900/20",
      textClass: "text-orange-700 dark:text-orange-400",
      iconBgClass: "bg-orange-500 dark:bg-orange-600",
    },
  ];

  const hexacoBenefits: string[] = [
    "Scores for all six HEXACO dimensions",
    "In-depth Honesty-Humility analysis",
    "Understanding of your ethical tendencies",
    "Insights into social cooperation styles",
    "Comprehensive personality profile",
    "Personal growth recommendations",
    "Career and relationship insights"
  ];

  return (
    <SharedTestOverviewSection
      headerTitle="What is the HEXACO Test?"
      headerHighlightWord="HEXACO"
      headerDescription="HEXACO stands for Honesty-Humility, Emotionality, Extraversion, Agreeableness, Conscientiousness, and Openness to Experience – the six dimensions that define your personality."
      mainDescriptionText={
        <>
          The <span className="font-semibold">HEXACO Model</span> is a modern
          framework that expands on the Big Five by adding a crucial sixth
          dimension: <span className="font-semibold">Honesty-Humility</span>.
          This addition provides a more nuanced understanding of personality,
          particularly in areas like ethical behavior and social cooperation.
        </>
      }
      blockquoteText="Discover a comprehensive view of your personality that includes the often-overlooked but vital aspect of Honesty-Humility."
      badges={hexacoBadges}
      benefits={hexacoBenefits}
    />
  );
};

export default TestOverviewSection;
