import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Timer, Users, Target, Award, BookOpen, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const TestTypeBadge = ({ type }: { type: string }) => {
  const colors = {
    personality: "bg-green-100 text-black",
    cognitive: "bg-yellow-100 text-black",
    language: "bg-red-100 text-black",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-medium ${
        colors[type as keyof typeof colors] || "bg-gray-100 text-black"
      }`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
};

export const DifficultyBadge = ({ level }: { level: string }) => {
  const colors = {
    beginner: "bg-green-100 text-black",
    intermediate: "bg-yellow-100 text-black",
    advanced: "bg-red-100 text-black",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-medium ${
        colors[level as keyof typeof colors] || "bg-gray-100 text-black"
      }`}
    >
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
};

export const ResultTypeBadge = ({ type }: { type: string }) => {
  const colors = {
    type: "bg-purple-100 text-black",
    numerical: "bg-blue-100 text-black",
    category: "bg-green-100 text-black",
    "multi-dimensional": "bg-orange-100 text-black",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-medium ${
        colors[type as keyof typeof colors] || "bg-gray-100 text-black"
      }`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
};

export const FeatureBadge = ({
  Icon,
  label,
  color,
}: {
  Icon: any;
  label: string;
  color: string;
}) => (
  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${color}`}>
    <Icon className="h-4 w-4" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export const TestOverviewCard = ({ testData }: { testData: any }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-2xl">
        <Brain className="h-6 w-6" />
        Test Overview
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-6 text-lg">
      <div className="flex flex-wrap gap-2">
        <TestTypeBadge type={testData.category} />
        <DifficultyBadge level={testData.difficulty_level} />
        <ResultTypeBadge type={testData.result_type} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Questions</span>
          <span className="font-medium">{testData.num_questions}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Duration</span>
          <span className="font-medium">{testData.time_estimate_minutes} minutes</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Age Range</span>
          <span className="font-medium">{testData.min_age}+ years</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Validity Period</span>
          <span className="font-medium">{testData.validity_period_days} days</span>
        </div>
      </div>
      <div className="space-y-3 pt-2">
        <h4 className="font-medium">Key Benefits:</h4>
        <div className="grid gap-2">
          {testData.test_benefits.map((benefit: any, index: number) => (
            <div key={index} className="flex items-center gap-2 bg-primary/5 p-2 rounded-lg">
              <benefit.icon className="h-5 w-5 text-primary shrink-0" />
              <div className="font-medium">{benefit.title}</div>
              <div className="text-sm text-muted-foreground ml-auto">{benefit.description}</div>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

export const TestDimensionsCard = ({ dimensions }: { dimensions: any[] }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-2xl">
        <FileSpreadsheet className="h-6 w-6" />
        How MBTI Works?
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {dimensions.map((dimension, index) => (
        <div key={index} className="space-y-2">
          <h3 className="font-medium text-xl">{dimension.title}</h3>
          <p className="text-md text-muted-foreground">{dimension.description}</p>
          <div className="flex gap-2">
            {dimension.types.map((type: string, i: number) => (
              <Badge key={i} variant={"default"}>
                {type}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

export const TestResultSection = ({ 
  result, 
  testShortCode 
}: { 
  result: any,
  testShortCode: string
}) => (
  <div className="mt-24 rounded-xl p-8">
    <h2 className="text-3xl font-bold mb-8 text-center">Your Latest Result</h2>
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Image Column */}
      <div className="relative aspect-square">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary rounded-lg flex items-center justify-center">
          <div className="text-center space-y-4">
            <span className="text-6xl font-bold text-primary-foreground">
              {result.personalityType || result.type}
            </span>
            <p className="text-2xl text-primary-foreground/90">
              {result.label}
            </p>
          </div>
        </div>
      </div>

      {/* Results Column */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">{result.label}</h3>
          <p className="text-lg text-muted-foreground mb-4">
            Test taken on{" "}
            {new Date(result.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-lg leading-relaxed">{result.description}</p>
        </div>

        {result.traitScores && (
          <div className="space-y-6">
            <h4 className="text-xl font-medium">Personality Breakdown</h4>
            {Object.entries(result.traitScores).map(([trait, score]: [string, any]) => (
              <div key={trait} className="space-y-2">
                <div className="flex justify-between text-lg">
                  <span className="capitalize font-medium">{trait}</span>
                  <span>{score.dominant === "left" ? score.leftPercentage.toFixed(0) : score.rightPercentage.toFixed(0)}%</span>
                </div>
                <Progress 
                  value={score.dominant === "left" ? score.leftPercentage.toFixed(0) : score.rightPercentage.toFixed(0)} 
                  className="h-3 bg-primary/20" 
                />
              </div>
            ))}
          </div>
        )}

        <Link href={`/tests/${testShortCode}/start-test`}>
          <Button className="my-6" variant="outline">
            Retake Test
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export const TestCitationsCard = ({ citations }: { citations: any[] }) => (
  <Card className="max-w-3xl mx-auto w-full">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-2xl">
        <BookOpen className="h-6 w-6" />
        Academic Citations
      </CardTitle>
      <CardDescription>Peer-reviewed sources informing our methodology</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-6 space-y-4 text-lg">
        {citations.map((citation, index) => (
          <li key={index} className="flex flex-col gap-1">
            <a
              href={citation.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {new URL(citation.link).hostname}
            </a>
            <span className="text-muted-foreground">{citation.name}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export const TestRecommendationsSection = ({ recommendations }: { recommendations: any[] }) => (
  <div className="mt-24">
    <h2 className="text-3xl font-bold mb-8 text-center">Recommended Tests</h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {recommendations.map((test, index) => (
        <Card key={index} className="group hover:shadow-lg transition-shadow">
          <CardContent className="pt-8 p-6">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-lg bg-primary/5 text-primary">
                <test.icon className="h-8 w-8" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-semibold">{test.name}</h3>
                <p className="text-lg text-muted-foreground">{test.description}</p>
                <Button variant="link" className="p-0 h-auto font-normal text-lg text-primary">
                  Take Test →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);
