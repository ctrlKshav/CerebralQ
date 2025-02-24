"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Share2, Download, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface Trait {
  letter: string;
  fullName: string;
  score: number;
  description: string;
}

interface CareerSuggestion {
  title: string;
  match: number;
}

interface SimilarPersonality {
  name: string;
  profession: string;
  image: string;
}

export default function Results() {
  const personalityType = "ESTJ";
  const testId = "CQ-2024-28947";
  const completionDate = "February 24, 2024";

  const traits: Trait[] = [
    {
      letter: "E",
      fullName: "Extraversion",
      score: 78,
      description:
        "Gains energy from social interaction and external stimulation",
    },
    {
      letter: "S",
      fullName: "Sensing",
      score: 65,
      description: "Focuses on concrete facts and present realities",
    },
    {
      letter: "T",
      fullName: "Thinking",
      score: 82,
      description: "Makes decisions based on logic and objective analysis",
    },
    {
      letter: "J",
      fullName: "Judging",
      score: 71,
      description: "Prefers structure, planning, and organization",
    },
  ];

  const careerSuggestions: CareerSuggestion[] = [
    { title: "Project Manager", match: 95 },
    { title: "Business Analyst", match: 92 },
    { title: "Operations Director", match: 88 },
  ];

  const similarPersonalities: SimilarPersonality[] = [
    {
      name: "Margaret Thatcher",
      profession: "Former Prime Minister",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Jack Welch",
      profession: "Business Executive",
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  const chartData = traits.map((trait) => ({
    name: trait.letter,
    score: trait.score,
  }));
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-6xl font-bold tracking-tighter">
            {personalityType}
          </h1>
          <div className="text-muted-foreground">
            <p>Test ID: {testId}</p>
            <p>Completed on {completionDate}</p>
          </div>
          <div className="flex justify-center gap-2">
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

        {/* Main Results Card */}
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Your Personality Breakdown</CardTitle>
            <CardDescription>
              Understanding your psychological preferences in how you perceive
              the world and make decisions
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.letter}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">
                        {trait.letter} - {trait.fullName}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {trait.description}
                      </p>
                    </div>
                    <span className="text-lg font-bold">{trait.score}%</span>
                  </div>
                  <Progress value={trait.score} className="h-2" />
                </motion.div>
              ))}
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar
                    dataKey="score"
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Career Suggestions */}
        <Card>
          <CardHeader>
            <CardTitle>Career Paths</CardTitle>
            <CardDescription>
              Recommended career paths based on your personality type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {careerSuggestions.map((career, index) => (
                <motion.div
                  key={career.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg border"
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
        </Card>

        {/* Similar Personalities */}
        <Card>
          <CardHeader>
            <CardTitle>Notable People with Similar Type</CardTitle>
            <CardDescription>
              Historical figures and leaders who share your personality type
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
                  className="flex items-center gap-4 p-4 rounded-lg border"
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
