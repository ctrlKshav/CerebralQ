"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  Timer,
  Users,
  Zap,
  Target,
  Award,
  BookOpen,
  History,
  BarChart,
  FileSpreadsheet,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import Link from "next/link";

const MBTI_TEST = {
  name: "Myers-Briggs Type Indicator",
  short_code: "MBTI",
  description:
    "Discover how you’re wired with the MBTI—the world’s most trusted personality framework. Get your 4-letter type (like ENFP or ISTJ) and finally understand why you thrive in chaos, hate small talk, or obsess over to-do lists.",
  features: [
    { icon: Timer, label: "12 mins", color: "bg-blue-100 text-blue-700" },
    {
      icon: Users,
      label: "2M+ people tested",
      color: "bg-purple-100 text-purple-700",
    },
    { icon: Zap, label: "96% accuracy", color: "bg-amber-100 text-amber-700" },
  ],
  category: "personality",
  citations: [
    "https://pubmed.ncbi.nlm.nih.gov/12345678/",
    "Myers, I. B., & McCaulley, M. H. (1985). Manual: A guide to the development and use of the Myers-Briggs Type Indicator. Consulting Psychologists Press.",
  ],
  difficulty_level: "intermediate",
  num_questions: 60,
  time_estimate_minutes: 12,
  validity_period_days: 365,
  min_age: 16,
  result_type: "type",
  reliability_score: 85,
  scientific_validity_score: 78,
  past_results: [
    {
      type: "INTJ",
      date: "2024-03-15",
      scores: {
        introversion: 76,
        intuition: 82,
        thinking: 65,
        judging: 58,
      },
      label: "The Architect",
      description:
        "Imaginative and strategic thinkers with a plan for everything",
    },
  ],
  complementary_tests: [
    {
      name: "Big Five Personality",
      description: "Measure five core personality dimensions",
      shortCode: "big5-neo",
      icon: Target,
    },
    {
      name: "DISC Assessment",
      description: "Understand your behavioral style",
      shortCode: "disc",
      icon: Award,
    },
    {
      name: "HEXACO",
      description: "Explore six personality dimensions",
      shortCode: "hexaco",
      icon: BookOpen,
    },
  ],
  personality_dimensions: [
    {
      title: "Mind",
      description: "How you interact with the world and direct your energy",
      types: ["Extrovert (E)", "Introvert (I)"],
    },
    {
      title: "Information",
      description: "How you process and gather information",
      types: ["Sensing (S)", "Intuition (N)"],
    },
    {
      title: "Decisions",
      description: "How you make decisions and cope with emotions",
      types: ["Thinking (T)", "Feeling (F)"],
    },
    {
      title: "Structure",
      description: "How you approach work, planning and decision-making",
      types: ["Judging (J)", "Perceiving (P)"],
    },
  ],
  test_benefits: [
    {
      icon: Brain,
      title: "Career Success",
      description: "Find your ideal career path and work environment",
    },
    {
      icon: Users,
      title: "Better Relationships",
      description: "Transform how you connect with others",
    },
    {
      icon: Target,
      title: "Personal Growth",
      description: "Unlock your true potential and strengths",
    },
  ],
};

const TestTypeBadge = ({ type }: { type: string }) => {
  const colors = {
    personality: "bg-green-100 text-green-800",
    cognitive: "bg-yellow-100 text-yellow-800",
    language: "bg-red-100 text-red-800",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-medium ${
        colors[type as keyof typeof colors]
      }`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
};

const DifficultyBadge = ({ level }: { level: string }) => {
  const colors = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-medium ${
        colors[level as keyof typeof colors]
      }`}
    >
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
};

const FeatureBadge = ({
  Icon,
  label,
  color,
}: {
  Icon: any;
  label: string;
  color: string;
}) => (
  <div
    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${color}`}
  >
    <Icon className="h-4 w-4" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const ResultTypeBadge = ({ type }: { type: string }) => {
  const colors = {
    type: "bg-purple-100 text-purple-800",
    numerical: "bg-blue-100 text-blue-800",
    category: "bg-green-100 text-green-800",
    "multi-dimensional": "bg-orange-100 text-orange-800",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-medium ${colors[type as keyof typeof colors]}`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
};
export default function TestInformation() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
            {MBTI_TEST.name}{" "}
            <span className="text-2xl">({MBTI_TEST.short_code})</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {MBTI_TEST.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {MBTI_TEST.features.map((feature, index) => (
              <FeatureBadge
                key={index}
                Icon={feature.icon}
                label={feature.label}
                color={feature.color}
              />
            ))}
          </div>
          <div className="pt-4">
            <Link href={`/tests/${MBTI_TEST.short_code}/start-test`}>
              <Button size="lg" className="text-lg px-8 py-6">
                Begin Test →
              </Button>
            </Link>
          </div>
          <button
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            onClick={() => {
              document
                .getElementById("test-details-section")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-4 pb-20"
        id="test-details-section"
      >
        <div className="grid gap-12 md:gap-6 md:grid-cols-2 text-md">
          {/* Test Overview Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Brain className="h-6 w-6" />
                Test Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <div className="flex flex-wrap gap-2">
                <TestTypeBadge type={MBTI_TEST.category} />
                <DifficultyBadge level={MBTI_TEST.difficulty_level} />
                <ResultTypeBadge type={MBTI_TEST.result_type} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Questions</span>
                  <span className="font-medium">{MBTI_TEST.num_questions}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">
                    {MBTI_TEST.time_estimate_minutes} minutes
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Age Range</span>
                  <span className="font-medium">
                    {MBTI_TEST.min_age}+ years
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Validity Period</span>
                  <span className="font-medium">
                    {MBTI_TEST.validity_period_days} days
                  </span>
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <h4 className="font-medium">Key Benefits:</h4>
                <div className="grid gap-2">
                  {MBTI_TEST.test_benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-primary/5 p-2 rounded-lg"
                    >
                      <benefit.icon className="h-5 w-5 text-primary shrink-0" />
                      <div className="font-medium">{benefit.title}</div>
                      <div className="text-sm text-muted-foreground ml-auto">
                        {benefit.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personality Dimensions Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileSpreadsheet className="h-6 w-6" />
                How MBTI Works?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {MBTI_TEST.personality_dimensions.map((dimension, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium text-xl">{dimension.title}</h3>
                  <p className="text-md text-muted-foreground">
                    {dimension.description}
                  </p>
                  <div className="flex gap-2">
                    {dimension.types.map((type, i) => (
                      <Badge
                        key={i}
                        variant={i === 0 ? "default" : "secondary"}
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Past Results Section */}
        <div className="mt-24  rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Your Latest Result
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Column */}
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <span className="text-6xl font-bold text-primary-foreground">
                    {MBTI_TEST.past_results[0].type}
                  </span>
                  <p className="text-2xl text-primary-foreground/90">
                    {MBTI_TEST.past_results[0].label}
                  </p>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  {MBTI_TEST.past_results[0].label}
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Test taken on{" "}
                  {new Date(MBTI_TEST.past_results[0].date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
                <p className="text-lg leading-relaxed">
                  {MBTI_TEST.past_results[0].description}
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-medium">Personality Breakdown</h4>
                {Object.entries(MBTI_TEST.past_results[0].scores).map(
                  ([trait, score]) => (
                    <div key={trait} className="space-y-2">
                      <div className="flex justify-between text-lg">
                        <span className="capitalize font-medium">{trait}</span>
                        <span>{score}%</span>
                      </div>
                      <Progress value={score} className="h-3 bg-primary/20" />
                    </div>
                  )
                )}
              </div>

            <Link href={`/tests/${MBTI_TEST.short_code}/start-test`}>
                <Button className="w-full text-lg py-6" variant="outline">
                  Retake Test
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Validation Section */}
        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {/* Reliability Metrics Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BarChart className="h-6 w-6" />
                Reliability Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Test Consistency</span>
                  <span className="text-lg text-muted-foreground">
                    {MBTI_TEST.reliability_score}%
                  </span>
                </div>
                <Progress value={MBTI_TEST.reliability_score} className="h-3" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Scientific Basis</span>
                  <span className="text-lg text-muted-foreground">
                    {MBTI_TEST.scientific_validity_score}%
                  </span>
                </div>
                <Progress
                  value={MBTI_TEST.scientific_validity_score}
                  className="h-3"
                />
              </div>
            </CardContent>
          </Card>

          {/* Citations Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BookOpen className="h-6 w-6" />
                Citations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-4 text-lg">
                {MBTI_TEST.citations.map((citation, index) => (
                  <li key={index}>
                    {citation.startsWith("http") ? (
                      <a
                        href={citation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {new URL(citation).hostname}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{citation}</span>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Related Tests Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Recommended Tests
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {MBTI_TEST.complementary_tests.map((test, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-8 p-6">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-lg bg-primary/5 text-primary">
                      <test.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-semibold">{test.name}</h3>
                      <p className="text-lg text-muted-foreground">
                        {test.description}
                      </p>
                      <Button
                        variant="link"
                        className="p-0 h-auto font-normal text-lg text-primary"
                      >
                        Take Test →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
