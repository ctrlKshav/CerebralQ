import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";
import { TraitExplanation } from "./TraitExplanation";

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

            <div
              className="flex-grow overflow-y-auto space-y-6 pb-4"
              style={{ minHeight: "450px" }}
            >
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
                <Button
                  size="sm"
                  variant="default"
                  className="w-full sm:w-auto"
                >
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
