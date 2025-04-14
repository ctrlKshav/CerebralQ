import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";
import { TraitExplanation } from "./TraitExplanation";
import { OceanTraitKey } from "@/types/tests/ocean/traits";
import { Info } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

export const TestResultSection = ({
  result,
}: {
  result: any;
}) => {
  const getTraitColor = (traitKey: string, percentage: number) => {
    const colors: Record<string, string> = {
      openness: percentage > 50 ? "bg-blue-500" : "bg-blue-300",
      conscientiousness: percentage > 50 ? "bg-green-500" : "bg-green-300",
      extraversion: percentage > 50 ? "bg-yellow-500" : "bg-yellow-300",
      agreeableness: percentage > 50 ? "bg-pink-500" : "bg-pink-300",
      neuroticism: percentage > 50 ? "bg-purple-500" : "bg-purple-300",
    };
    
    return colors[traitKey] || "bg-primary";
  };

  return (
    <div className="rounded-xl p-6 bg-card shadow-sm">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Profile Summary */}
        <div className="lg:w-2/5 flex flex-col text-center">
          <div className="space-y-4 mb-6 text-center">
            <div className="mb-4">
              <span className="text-3xl font-bold text-primary block mb-1">
                {result.personalityType || "OCEAN Profile"}
              </span>
              <p className="text-xl">{result.label || "Your Big Five Personality Traits"}</p>
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

          {/* Visualization */}
          <div className="relative aspect-square w-full max-w-md mx-auto mt-auto">
            <Image
              src="/images/ocean_personality_visual.jpeg"
              alt="Ocean Big Five Personality Profile Visualization"
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
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-xl font-medium border-b pb-1">
                  Your OCEAN Personality Profile
                </h4>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>Scores represent your personality across five major dimensions. Higher percentages indicate stronger trait tendencies.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div
                className="flex-grow overflow-y-auto space-y-6 pb-4"
                style={{ minHeight: "450px" }}
              >
                {Object.entries(result.traitScores).map(
                  ([trait, score]: [string, any]) => {
                    const percentage = score.dominant === "left"
                      ? score.leftPercentage.toFixed(0)
                      : score.rightPercentage.toFixed(0);
                      
                    return (
                      <div key={trait} className="space-y-2">
                        <div className="flex justify-between text-md">
                          <span className="capitalize font-medium">{trait}</span>
                          <span>{percentage}%</span>
                        </div>
                        <Progress
                          value={percentage}
                          className="h-2 bg-primary/20"
                        />

                        <TraitExplanation 
                          traitKey={trait as OceanTraitKey}
                          personalityType={result.personalityType}
                          score={score}
                        />
                      </div>
                    );
                  }
                )}
              </div>

              <div className="mt-auto pt-4 border-t border-border flex gap-3">
                <Link href={`/start-test/mbti`} className="block sm:w-auto">
                  <Button
                    size="sm"
                    variant="default"
                    className="w-full sm:w-auto"
                  >
                    Retake Test
                  </Button>
                </Link>
                <Link href={`/profile/history`} className="block sm:w-auto">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    View History
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
