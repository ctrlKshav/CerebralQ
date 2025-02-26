"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Share2, Download, ChevronRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { ResultData } from "@/types/tests/mbti";
import { Badge } from "@/components/ui/badge";
import { PersonalityTraits } from "@/components/results/personality-traits";
import {
  getCareerSuggestions,
  getSimilarPersonalities,
} from "@/lib/mbti/results";
import { getPersonalityInsights } from "@/data/mbti";
import { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import Icon from "@/components/Icon";

// Define personality type descriptions
const personalityDescriptions: Record<string, string> = {
  INTJ: "Strategic thinkers with a plan for everything. Independent and analytical problem-solvers who drive innovation.",
  INTP: "Innovative inventors with an unquenchable thirst for knowledge. Bright and curious thinkers focused on solving complex problems.",
  ENTJ: "Bold, imaginative leaders who are always finding ways to improve systems. Natural-born leaders who see possibilities everywhere.",
  ENTP: "Quick-thinking debaters who love to push boundaries. Enthusiastic innovators constantly generating new ideas.",
  INFJ: "Quiet idealists with deep insight and conviction. Creative nurturers with strong value systems.",
  INFP: "Poetic, kind, and altruistic individuals who seek authenticity. Idealistic mediators guided by their core values.",
  ENFJ: "Charismatic inspirers dedicated to others' growth. Natural mentors who bring out the best in others.",
  ENFP: "Enthusiastic, creative free spirits who can connect with just about anyone. Warmly enthusiastic idea generators.",
  ISTJ: "Practical, fact-minded individuals who value reliability. Detail-oriented organizers who maintain order.",
  ISFJ: "Warm protectors with excellent analytical abilities. Devoted caretakers who enjoy serving others.",
  ESTJ: "Efficient organizers who bring order to environments. Practical managers focused on getting things done.",
  ESFJ: "Caring, social individuals concerned with maintaining harmony. Warm-hearted helpers who put others first.",
  ISTP: "Bold, practical experimenters who master tools. Logical problem-solvers who excel in crisis situations.",
  ISFP: "Gentle, sensitive artists who live in the moment. Quiet experimenters who express themselves through action.",
  ESTP: "Energetic thrill-seekers who solve problems practically. Smart, energetic doers who value immediate results.",
  ESFP: "Spontaneous, energetic entertainers who enjoy life to the fullest. Fun-loving performers who brighten their environments.",
};

// Define personality type aliases
const personalityAliases: Record<string, string> = {
  INTJ: "The Architect",
  INTP: "The Logician",
  ENTJ: "The Commander",
  ENTP: "The Debater",
  INFJ: "The Advocate",
  INFP: "The Mediator",
  ENFJ: "The Protagonist",
  ENFP: "The Campaigner",
  ISTJ: "The Logistician",
  ISFJ: "The Defender",
  ESTJ: "The Executive",
  ESFJ: "The Consul",
  ISTP: "The Virtuoso",
  ISFP: "The Adventurer",
  ESTP: "The Entrepreneur",
  ESFP: "The Entertainer",
};

export default function Results() {
  const searchParams = useSearchParams();
  const [resultData, setResultData] = useState<ResultData>({
    personalityType: "",
    personalityDescription: "",
    testId: "",
    completionDate: "",
    traitScores: null,
    careerSuggestions: [],
    similarPersonalities: [],
  });

  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      try {
        const data = JSON.parse(dataParam);
        const { personalityType, traitScores, testId, completionDate } = data;

        // Set all result data at once
        setResultData({
          personalityType,
          personalityDescription:
            personalityDescriptions[personalityType] || "",
          testId,
          completionDate,
          traitScores,
          careerSuggestions: getCareerSuggestions(personalityType),
          similarPersonalities: getSimilarPersonalities(personalityType),
        });
      } catch (error) {
        console.error("Error parsing result data:", error);
      }
    }
  }, [searchParams]);

  // Destructure properties from resultData for easier access in JSX
  const {
    personalityType,
    personalityDescription,
    completionDate,
    traitScores,
    careerSuggestions,
    similarPersonalities,
  } = resultData;

  // Get the alias for the current personality type
  const personalityAlias = personalityAliases[personalityType] || "";

  // Get personality insights
  const personalityInsights = getPersonalityInsights(personalityType);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Your Personality Type
          </Badge>
          <div className="space-y-2">
            <h1 className="text-6xl font-bold tracking-tighter">
              {personalityType}
            </h1>
            <h2 className="text-2xl font-medium text-primary">
              "{personalityAlias}"
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {personalityDescription}
          </p>
          <div className="text-sm text-muted-foreground">
            <p>Completed on {completionDate}</p>
          </div>
          <div className="flex justify-center gap-3 pt-2">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share Results
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>
        </motion.section>

        {/* Personality Traits */}
        {traitScores && <PersonalityTraits traitScores={traitScores} />}

        {/* Career Suggestions */}
        <div className="w-full max-w-6xl mx-auto p-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary">
              <span className="text-lg font-medium">2</span>
            </div>
            <h2 className="text-3xl font-semibold text-foreground">
              Career Recommendations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-base text-muted-foreground">
                    Professional Match
                  </span>
                  <h3 className="text-3xl font-bold text-primary">
                    Career Paths for {personalityType}
                  </h3>
                </div>

                <div className="relative aspect-square w-full max-w-[280px] mx-auto">
                  <img
                    src="/placeholder.svg"
                    alt="Career illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  These career paths tend to leverage your natural strengths and
                  align with your personality preferences. Consider these
                  options when planning your professional development.
                </p>
              </div>
            </Card>

            <Card className="p-8 space-y-6">
              {careerSuggestions.map((career, index) => (
                <motion.div
                  key={career.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg border hover:bg-muted/20 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-lg">{career.title}</div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-primary">
                        {career.match}%
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Match
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${career.match}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <Button
                variant="link"
                className="w-full mt-4 text-muted-foreground"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Explore more careers for {personalityType} types
              </Button>
            </Card>
          </div>
        </div>

        {/* Similar Personalities */}
        <div className="w-full max-w-6xl mx-auto p-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary">
              <span className="text-lg font-medium">3</span>
            </div>
            <h2 className="text-3xl font-semibold text-foreground">
              Similar Personalities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-base text-muted-foreground">
                    Notable People
                  </span>
                  <h3 className="text-3xl font-bold text-primary">
                    Who Shares Your Type
                  </h3>
                </div>

                <div className="relative aspect-square w-full max-w-[280px] mx-auto">
                  <img
                    src="/placeholder.svg"
                    alt="Famous personalities illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  These notable figures are believed to share your{" "}
                  {personalityType} personality type. Examining their strengths
                  and approaches may provide insights into your own potential.
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <div className="space-y-6">
                {similarPersonalities.map((person, index) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/20 transition-colors"
                  >
                    <img
                      src={person.image || "/placeholder.svg"}
                      alt={person.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-lg">{person.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {person.profession}
                      </p>
                    </div>
                  </motion.div>
                ))}

                <Button variant="link" className="w-full text-muted-foreground">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Discover more {personalityType} personalities
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Detailed Personality Insights */}
        <div className="w-full max-w-6xl mx-auto p-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary">
              <span className="text-lg font-medium">4</span>
            </div>
            <h2 className="text-3xl font-semibold text-foreground">
              Detailed Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <Card className="p-8 lg:col-span-1 h-fit sticky top-16 ">
              {" "}
              {/* Changed from just h-fit */}
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
                  {personalityAlias} personality type. Recognize these as
                  tendencies rather than absolutes, as individual experiences
                  may vary.
                </p>
              </div>
            </Card>
            <div className="lg:col-span-2 space-y-6">
              {/* Strengths Section */}
              <Card className="p-6 border-l-4 border-l-green-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                    <Icon
                      iconName={personalityInsights.strengths.icon}
                      className="w-5 h-5 text-green-600 dark:text-green-400"
                    />
                  </div>
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
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full">
                    <Icon
                      iconName={personalityInsights.challenges.icon}
                      className="w-5 h-5 text-amber-600 dark:text-amber-400"
                    />
                  </div>
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
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                    <Icon
                      iconName={personalityInsights.workStyle.icon}
                      className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    />
                  </div>
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
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                    <Icon
                      iconName={personalityInsights.relationships.icon}
                      className="w-5 h-5 text-purple-600 dark:text-purple-400"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {personalityInsights.relationships.title}
                  </h3>
                </div>
                <ul className="space-y-2 pl-3">
                  {personalityInsights.relationships.points.map(
                    (point, index) => (
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
                    )
                  )}
                </ul>
              </Card>

              {/* Growth Areas Section */}
              <Card className="p-6 border-l-4 border-l-teal-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full">
                    <Icon
                      iconName={personalityInsights.growthAreas.icon}
                      className="w-5 h-5 text-teal-600 dark:text-teal-400"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {personalityInsights.growthAreas.title}
                  </h3>
                </div>
                <ul className="space-y-2 pl-3">
                  {personalityInsights.growthAreas.points.map(
                    (point, index) => (
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
                    )
                  )}
                </ul>
              </Card>

              <Button variant="link" className="w-full text-muted-foreground">
                <ExternalLink className="w-3 h-3 mr-1" />
                Discover more about {personalityType} psychology
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
