"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Icon from "@/components/Icon";

interface InsightCategory {
  title: string;
  icon: string;
  points: string[];
}

interface PersonalityInsights {
  strengths: InsightCategory;
  challenges: InsightCategory;
  workStyle: InsightCategory;
  relationships: InsightCategory;
  growthAreas: InsightCategory;
}

interface DetailedPersonalityInsightsProps {
  personalityType: string;
  personalityAlias: string;
  personalityInsights: PersonalityInsights;
}

export function DetailedPersonalityInsights({
  personalityType,
  personalityAlias,
  personalityInsights,
}: DetailedPersonalityInsightsProps) {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-10">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary">
          <span className="text-lg font-medium">5</span>
        </div>
        <h2 className="text-3xl font-semibold text-foreground">
          Detailed Insights
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-8 lg:col-span-1 h-fit lg:sticky top-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-base text-muted-foreground">
                Understanding
              </span>
              <h3 className="text-3xl font-bold text-primary">
                {personalityType} Profile
              </h3>
            </div>

            <div className="relative aspect-square w-full max-w-[200px] mx-auto">
              <img
                src="/placeholder.svg"
                alt="Personality insights illustration"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              These insights highlight the key characteristics of the{" "}
              {personalityAlias} personality type. Recognize these as tendencies
              rather than absolutes, as individual experiences may vary.
            </p>
          </div>
        </Card>
        <div className="lg:col-span-2 space-y-6">
          {/* Strengths Section */}
          <Card className="p-6 border-l-4 border-l-green-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-400 dark:bg-green-700 p-2 rounded-full" />
              <h3 className="text-xl font-semibold">
                {personalityInsights.strengths.title}
              </h3>
            </div>
            <ul className="space-y-2 pl-3">
              {personalityInsights.strengths.points.map((point, index) => (
                <motion.li
                  key={`strength-${index}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-green-500 mt-1">•</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </Card>

          {/* Challenges Section */}
          <Card className="p-6 border-l-4 border-l-amber-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-400 dark:bg-amber-700 p-2 rounded-full" />

              <h3 className="text-xl font-semibold">
                {personalityInsights.challenges.title}
              </h3>
            </div>
            <ul className="space-y-2 pl-3">
              {personalityInsights.challenges.points.map((point, index) => (
                <motion.li
                  key={`challenge-${index}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-amber-500 mt-1">•</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </Card>

          {/* Work Style Section */}
          <Card className="p-6 border-l-4 border-l-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-400 dark:bg-blue-700 p-2 rounded-full" />

              <h3 className="text-xl font-semibold">
                {personalityInsights.workStyle.title}
              </h3>
            </div>
            <ul className="space-y-2 pl-3">
              {personalityInsights.workStyle.points.map((point, index) => (
                <motion.li
                  key={`work-${index}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </Card>

          {/* Relationship Dynamics Section */}
          <Card className="p-6 border-l-4 border-l-purple-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-400 dark:bg-purple-700 p-2 rounded-full" />

              <h3 className="text-xl font-semibold">
                {personalityInsights.relationships.title}
              </h3>
            </div>
            <ul className="space-y-2 pl-3">
              {personalityInsights.relationships.points.map((point, index) => (
                <motion.li
                  key={`relationship-${index}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-purple-500 mt-1">•</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </Card>

          {/* Growth Areas Section */}
          <Card className="p-6 border-l-4 border-l-teal-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-400 dark:bg-teal-700 p-2 rounded-full" />

              <h3 className="text-xl font-semibold">
                {personalityInsights.growthAreas.title}
              </h3>
            </div>
            <ul className="space-y-2 pl-3">
              {personalityInsights.growthAreas.points.map((point, index) => (
                <motion.li
                  key={`growth-${index}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-teal-500 mt-1">•</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </Card>

          <Button variant="link" className="w-full text-muted-foreground">
            <ExternalLink className="w-3 h-3 mr-1" />
            Discover more about {personalityType} psychology
          </Button>
        </div>
      </div>
    </div>
  );
}
