"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PersonalityTypeInsights } from "@/types/tests/mbti";
import { ChevronRight } from "lucide-react";

interface InsightCategory {
  title: string;
  icon: string[];
  points: string[];
}
interface DetailedPersonalityInsightsProps {
  personalityType: string;
  personalityAlias: string;
  personalityInsights: PersonalityTypeInsights;
  sectionNumber: number;
}

export function DetailedPersonalityInsights({
  personalityType,
  personalityAlias,
  personalityInsights,
  sectionNumber,
}: DetailedPersonalityInsightsProps) {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-10">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary">
          <span className="text-lg font-medium">{sectionNumber}</span>
        </div>
        <h2 className="text-3xl font-semibold text-foreground">
          Detailed Insights
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-12">
        <Card className="p-8 lg:col-span-1 h-fit lg:sticky top-24 sm:w-1/2">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-base text-muted-foreground">
                Understanding
              </span>
              <h3 className="text-3xl font-bold text-primary">
                {personalityType} Profile
              </h3>
            </div>

            <div className="relative aspect-square w-full max-w-[280px]  mt-4">
              <Image
                src="/images/results_artsy_board.jpeg"
                alt={`Personality trait illustration`}
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1200px) 250px, 280px"
                className="object-cover"
                quality={85}
                priority={false}
              />
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              These insights highlight the key characteristics of the{" "}
              {personalityType} personality type. Recognize these as tendencies
              rather than absolutes, as individual experiences may vary.
            </p>
          </div>
        </Card>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 ">
          <InsightSectionCard
            section={personalityInsights.strengths}
            sectionType="strengths"
          />

          <InsightSectionCard
            section={personalityInsights.challenges}
            sectionType="challenges"
          />

          <InsightSectionCard
            section={personalityInsights.workStyle}
            sectionType="workStyle"
          />

          <InsightSectionCard
            section={personalityInsights.relationships}
            sectionType="relationships"
          />

          <div className="lg:col-span-2">
            <InsightSectionCard
              section={personalityInsights.growthAreas}
              sectionType="growthAreas"
            />
          </div>
        </div>

        {/* Commented button remains the same */}
      </div>
    </div>
  );
}

// Define types for our insight section data
interface InsightSection {
  title: string;
  points: string[];
}

// Define the color combinations for each section type
type SectionType =
  | "strengths"
  | "challenges"
  | "workStyle"
  | "relationships"
  | "growthAreas";

interface SectionColors {
  border: string;
  icon: string;
  bullet: string;
  dark: string;
}

const sectionColors: Record<SectionType, SectionColors> = {
  strengths: {
    border: "border-l-green-500",
    icon: "bg-green-400",
    bullet: "text-green-500",
    dark: "dark:bg-green-700",
  },
  challenges: {
    border: "border-l-amber-500",
    icon: "bg-amber-400",
    bullet: "text-amber-500",
    dark: "dark:bg-amber-700",
  },
  workStyle: {
    border: "border-l-blue-500",
    icon: "bg-blue-400",
    bullet: "text-blue-500",
    dark: "dark:bg-blue-700",
  },
  relationships: {
    border: "border-l-purple-500",
    icon: "bg-purple-400",
    bullet: "text-purple-500",
    dark: "dark:bg-purple-700",
  },
  growthAreas: {
    border: "border-l-teal-500",
    icon: "bg-teal-400",
    bullet: "text-teal-500",
    dark: "dark:bg-teal-700",
  },
};

interface InsightSectionCardProps {
  section: InsightSection;
  sectionType: SectionType;
}

// Reusable component for each insight section
const InsightSectionCard: React.FC<InsightSectionCardProps> = ({
  section,
  sectionType,
}) => {
  const colors = sectionColors[sectionType];

  return (
    <Card className={`p-6 border-l-4 ${colors.border} `}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`${colors.icon} ${colors.dark} p-2 rounded-full`} />
        <h3 className="text-xl font-semibold">{section.title}</h3>
      </div>
      <div className="space-y-4 ml-2">
        {section.points.map((point, index) => (
          <motion.div
            key={`insight-${index}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-2"
          >
            <ChevronRight
              className={`h-5 w-5 ${colors.bullet} shrink-0 mt-0.5`}
            />
            <p>{point}</p>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};
