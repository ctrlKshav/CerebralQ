import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  BookOpen,
  InfoIcon,
  FileSpreadsheet,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { traitDescriptions } from "@/data/mbti/traitDescriptions";

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

export const FeatureBadge = ({
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

export const TestOverviewCard = ({ testData }: { testData: any }) => (
  <Card className="h-full flex flex-col">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-2xl">
        <Brain className="h-6 w-6" />
        Test Overview
      </CardTitle>
      <CardDescription>
        A comprehensive overview of the {testData.name} assessment
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6 flex-grow flex flex-col justify-between">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <TestTypeBadge type={testData.category} />
          <DifficultyBadge level={testData.difficulty_level} />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary/5 p-3 rounded-lg">
            <div className="text-sm text-muted-foreground">Questions</div>
            <div className="font-medium text-lg">{testData.num_questions}</div>
          </div>
          
          <div className="bg-primary/5 p-3 rounded-lg">
            <div className="text-sm text-muted-foreground">Duration</div>
            <div className="font-medium text-lg">{testData.time_estimate_minutes} minutes</div>
          </div>
          
          <div className="bg-primary/5 p-3 rounded-lg">
            <div className="text-sm text-muted-foreground">Age Range</div>
            <div className="font-medium text-lg">{testData.min_age}+ years</div>
          </div>
          
          <div className="bg-primary/5 p-3 rounded-lg">
            <div className="text-sm text-muted-foreground flex items-center gap-1.5">
              Validity Period
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 cursor-help text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-xs p-3 text-white">
                    <p>Sign up for an account and we'll send you a reminder before your test results expire!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="font-medium text-lg">{testData.validity_period_days} days</div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-medium text-lg border-b pb-1">Key Benefits</h4>
        <div className="space-y-3">
          {testData.test_benefits.map((benefit: any, index: number) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-primary/5 p-3 rounded-lg"
            >
              <div className="p-2 bg-background rounded-md">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{benefit.title}</div>
                <div className="text-sm text-muted-foreground">{benefit.description}</div>
              </div>
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
        What Makes You, You?
      </CardTitle>
      <CardDescription>
        The MBTI looks at four parts of your personality to uncover your unique
        type. Let’s break it down:
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {dimensions.map((dimension, index) => (
        <div key={index} className="space-y-3">
          <h3 className="font-medium text-xl">{dimension.title}</h3>
          <p className="text-md text-muted-foreground">
            {dimension.description}
          </p>
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
  testShortCode,
}: {
  result: any;
  testShortCode: string;
}) => (
  <div className="mt-16 rounded-xl p-6">
    <h2 className="text-3xl font-bold mb-16 text-center">Your Latest Result</h2>

    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left Column - Type, Alias, Date, Description, Image */}
      <div className="lg:w-2/5 flex flex-col text-center">
        <div className="space-y-4 mb-6 text-center">
          <div className="mb-4">
            <span className="text-5xl font-bold text-primary">
              {result.personalityType || result.type}
            </span>
            <p className="text-xl mt-1">{result.label}</p>
          </div>

          <p className="text-sm text-muted-foreground">
            Test taken on{" "}
            {new Date(result.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="text-sm md:text-base leading-relaxed w-3/4 mx-auto lg:w-full">
            {result.description}
          </p>
        </div>

        {/* Responsive Image Container */}
        <div className="relative aspect-square w-full max-w-md mx-auto mt-auto">
          <Image
            src="/latest_test_result_paint.jpeg"
            alt={`${result.personalityType || result.type} Personality Type Visualization`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-cover"
            priority={true}
            quality={85}
          />
        </div>
      </div>

      {/* Right Column - Trait Scores */}
      <div className="lg:w-3/5 px-6 flex flex-col">
        {result.traitScores && (
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <h4 className="text-xl font-medium border-b pb-1">
                Your {result.personalityType || "INTJ"} Blueprint
              </h4>
            </div>

            <div className="flex-grow overflow-y-auto space-y-6 pb-4" style={{ minHeight: "450px" }}>
              {Object.entries(result.traitScores).map(
                ([trait, score]: [string, any]) => (
                  <div key={trait} className="space-y-2">
                    <div className="flex justify-between text-md">
                      <span className="capitalize font-medium">{trait}</span>
                      <span>
                        {score.dominant === "left"
                          ? score.leftPercentage.toFixed(0)
                          : score.rightPercentage.toFixed(0)}
                        %
                      </span>
                    </div>
                    <Progress
                      value={
                        score.dominant === "left"
                          ? score.leftPercentage.toFixed(0)
                          : score.rightPercentage.toFixed(0)
                      }
                      className="h-2 bg-primary/20"
                    />

                    <TraitExplanation traitKey={trait} score={score} />
                  </div>
                )
              )}
            </div>

            <div className="mt-auto pt-4 border-t border-border">
              <Link href={`/`} className="block w-full sm:w-auto">
                <Button size="sm" variant="default" className="w-full sm:w-auto">
                  Retake Test
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

// Make the trait explanation more compact
export const TraitExplanation = ({
  traitKey,
  score,
}: {
  traitKey: string;
  score: any;
}) => {
  const traitInfo = traitDescriptions[traitKey as keyof typeof traitDescriptions];
  const dominant = score.dominant === "left" ? traitInfo.left : traitInfo.right;

  return (
    <div className="mt-2 p-3 bg-primary/5 rounded-lg">
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="text-sm py-0.5 px-2 font-semibold">
          {dominant.letter}
        </Badge>
        <h5 className="text-sm font-medium">{dominant.name}</h5>
        <span className="ml-auto text-xs text-muted-foreground">
          {traitInfo.title}
        </span>
      </div>
      <p className="text-xs md:text-sm mt-1">{dominant.description}</p>
    </div>
  );
};

export const TestCitationsCard = ({ citations }: { citations: any[] }) => (
  <Card className="max-w-3xl mx-auto w-full">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-2xl">
        <BookOpen className="h-6 w-6" />
        Academic Citations
      </CardTitle>
      <CardDescription>
        Peer-reviewed sources informing our methodology
      </CardDescription>
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

export const TestRecommendationsSection = ({
  recommendations,
}: {
  recommendations: any[];
}) => (
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
                <p className="text-lg text-muted-foreground">
                  {test.description}
                </p>
                <Link href={"/coming-soon"} className="">
                  <Button variant="link" className="">
                    Take Test →
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);
