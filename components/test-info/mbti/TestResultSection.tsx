import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";
import { TraitExplanation } from "./TraitExplanation";
import { TraitKey, TraitScore } from "@/types/tests/mbti/traits";
import { FormattedTestResult } from "@/types/supabase/user-test-history";

export const TestResultSection = ({
  result,
}: {
  result: FormattedTestResult;
}) => {
  // Use high-quality professional Unsplash images for each personality type
  const personalityImages: Record<string, string> = {
    INTJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/intj_tvtwmy.jpg",
    INTP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/intp_njepy8.jpg",
    ISFP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/isfp_vk5cdp.jpg",
    INFJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/infj_ytry83.jpg",
    ISFJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/isfj_qhxdy3.jpg",
    ISTP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/istp_zpck32.jpg",
    ISTJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/istj_myx8ge.jpg",
    INFP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/infp_vir8zp.jpg",
    ENFP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/enfp_mj348n.jpg",
    ENFJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/enfj_ytry83.jpg",
    ESTJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/estj_i4o71p.jpg",
    ENTP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/entp_utpbo4.jpg",
    ENTJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/entj_wcww09.jpg",
    ESFJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/esfj_d2jmws.jpg",
    ESTP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/estp_xgu6es.jpg",
    ESFP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/esfp_eycynf.jpg",
    default:
      "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/enfj_ytry83.jpg",
  };
  const imagePath =
    personalityImages[result.personalityType || result.type] ||
    personalityImages.default;
  return (
    <div className="rounded-xl xs:p-6">
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
              src={imagePath}
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
                <h4 className="text-2xl font-medium border-b pb-1">
                  Your {result.personalityType || "INTJ"} Blueprint
                </h4>
              </div>

              <div
                className="flex-grow overflow-y-auto space-y-6 pb-4"
                style={{ minHeight: "450px" }}
              >
                {Object.entries(result.traitScores).map(
                  ([trait, score]: [string, TraitScore]) => (
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
                            ? score.leftPercentage
                            : score.rightPercentage
                        }
                        className="h-2 bg-primary/20"
                      />

                      <TraitExplanation
                        traitKey={trait as TraitKey}
                        personalityType={result.personalityType || "INTJ"}
                        score={score}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
