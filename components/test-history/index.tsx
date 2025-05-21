"use client";

import { useState } from "react";
import EmptyState from "./empty-state";
import TestCard from "./test-card";
import { Badge } from "../ui/badge";
import { UserTestHistoryData } from "@/types/userTestHistory";
import { getPersonalityDescription } from "@/data/tests/mbti/personalityDescription";
import { getOrderedMBTITraitsObject } from "@/lib/utils";
import { MBTIRawScore } from "@/types/supabase/user-test-history";
import { MBTIResponse } from "@/schema/mbti";

// Extend database result with static fields
export type ExtendedUserTestHistory = {
  id: string;
  takenAt: string;
  personalityType: string;
  color: string;
  image: string;
  alias: string;
  description: string;
  traits: string[];
};

function getDominantTraits(traitScores: MBTIRawScore["traitScores"]): string[] {
  const traitMap: Record<string, string> = {
    E: "Extraversion",
    I: "Introversion",
    S: "Sensing",
    N: "Intuition",
    T: "Thinking",
    F: "Feeling",
    J: "Judging",
    P: "Perceiving",
  };

  return Object.keys(traitScores).map((key) => {
    const score = traitScores[key as keyof MBTIRawScore["traitScores"]];
    const dominantTrait =
      score.dominant === "left" ? key.charAt(0) : key.charAt(2);

    return traitMap[dominantTrait];
  });
}

interface UserTestHistoryProps {
  testHistoryData: UserTestHistoryData;
  onViewDetailedReport: (testHistoryID: string) => void;
}

export default function TestHistory({
  testHistoryData,
  onViewDetailedReport,
}: UserTestHistoryProps) {
  if (!testHistoryData || testHistoryData.length === 0) {
    return <EmptyState />;
  }
  // Static data to be randomly applied in a cycle
  const staticSets = [
    {
      color: "from-violet-500 to-purple-500",
      image:
        "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=1000",
    },
    {
      color: "from-amber-500 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000",
    },
    {
      color: "from-blue-500 to-indigo-500",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
    },
    {
      color: "from-emerald-500 to-teal-500",
      image:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000",
    },
  ];

  // Merge static data with DB results in a rotating manner
  const resultsWithStaticData: ExtendedUserTestHistory[] = testHistoryData.map(
    (res, i) => {
      const setIndex = i % staticSets.length;
      return {
        id: res.id,
        takenAt: res.created_at,
        personalityType: res.raw_scores.personalityType,
        alias: getPersonalityDescription(res.raw_scores.personalityType).alias,
        description: getPersonalityDescription(
          res.raw_scores.personalityType
        ).description(null, false),
        traits: getDominantTraits(
          getOrderedMBTITraitsObject(res.raw_scores.traitScores)
        ),
        color: staticSets[setIndex].color,
        image: staticSets[setIndex].image,
      };
    }
  );

  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-background to-background/80 overflow-x-hidden">
      <div className="relative w-full">
        <div className="relative w-full px-6 sm:px-8 pt-12">
          <div className="flex flex-col gap-12">
            <div className="space-y-7 flex flex-col items-center text-center">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 animate-gradient">
                  Your MBTI Journey
                </span>
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl text-muted-foreground/90 leading-relaxed">
                Track your personal growth and discover how your personality
                evolves over time through the lens of MBTI
              </p>
            </div>
            <div className="self-center sm:self-end relative group">
              <div className="absolute rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <Badge className="bg-primary/90 dark:bg-primary text-white">
                <span className="text-sm font-semibold">Latest to Oldest</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Results Cards */}
      <div className="w-full px-6 sm:px-8 py-16 bg-gradient-to-b from-background/90 to-background">
        <div className="space-y-12">
          {resultsWithStaticData.map((result) => (
            <TestCard
              key={result.id}
              result={result}
              onViewDetailedReport={onViewDetailedReport}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
