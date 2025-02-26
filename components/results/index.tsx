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
import { getCareerSuggestions, getSimilarPersonalities } from "@/lib/mbti/results";

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




export default function Results() {
  const searchParams = useSearchParams();
  const [resultData, setResultData] = useState<ResultData>({
    personalityType: "",
    personalityDescription: "",
    testId: "",
    completionDate: "",
    traitScores: null,
    careerSuggestions: [],
    similarPersonalities: []
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
          personalityDescription: personalityDescriptions[personalityType] || "",
          testId,
          completionDate,
          traitScores,
          careerSuggestions: getCareerSuggestions(personalityType),
          similarPersonalities: getSimilarPersonalities(personalityType)
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
    similarPersonalities
  } = resultData;

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
          <h1 className="text-6xl font-bold tracking-tighter">
            {personalityType}
          </h1>
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
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Recommended Career Paths</CardTitle>
            <CardDescription>
              Career paths that typically align well with your personality type.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {careerSuggestions.map((career, index) => (
                <motion.div
                  key={career.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="font-medium">{career.title}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {career.match}% Match
                    </span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="pt-0 border-t px-6 py-4">
            <Button
              variant="link"
              className="text-xs text-muted-foreground"
              size="sm"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Learn more about careers for {personalityType} types
            </Button>
          </CardFooter>
        </Card>

        {/* Similar Personalities */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Notable People with Similar Type</CardTitle>
            <CardDescription>
              Historical figures and leaders who share your {personalityType}{" "}
              personality type.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{person.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {person.profession}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
