import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";
import { TraitExplanation } from "./TraitExplanation";
import { TraitKey, TraitScore } from "@/types/tests/mbti/traits";
import { FormattedTestResult } from "@/types/supabase/user-test-history";
import { useState } from "react";

export const TestResultSection = ({
  result,
}: {
  result: FormattedTestResult;
}) => {
  const [copied, setCopied] = useState(false);
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

  // Share handler
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(
        `I just discovered my MBTI type: ${result.personalityType} (${result.label}) on CerebralQ!`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative rounded-3xl p-1 md:p-2 shadow-md overflow-hidden">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/30 backdrop-blur-2xl z-0" />
      {/* Animated accent gradient blob */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 md:gap-12 p-6 md:p-12">
        {/* Left Column - Type, Alias, Date, Description, Image */}
        <div className="lg:w-2/5 flex flex-col items-center text-center gap-6">
          <div className="space-y-4">
            <div>
              <span className="text-6xl md:text-7xl font-extrabold text-primary drop-shadow-lg tracking-tight">
                {result.personalityType || result.type}
              </span>
              <p className="text-2xl md:text-3xl font-semibold text-foreground/90 mt-2">
                {result.label}
              </p>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              Test taken on {new Date(result.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-base md:text-lg leading-relaxed max-w-xs md:max-w-md mx-auto text-muted-foreground/90">
              {result.description}
            </p>
          </div>
          <div className="relative w-fit md:w-[24rem] mx-auto mt-2 shadow-md rounded-2xl overflow-hidden">
            <Image
              src={imagePath}
              alt={`${result.personalityType || result.type} Personality Type Visualization`}
              className="object-cover h-full w-full"
              priority={true}
              width={300}
              height={300}
            />
          </div>
        
        </div>
        {/* Right Column - Trait Scores */}
        <div className="lg:w-3/5 flex flex-col justify-between ">
          {result.traitScores && (
            <div className="flex flex-col h-full gap-8 ">
              <div className="mb-2 ">
                <h4 className="text-2xl md:text-3xl font-bold border-b border-border pb-2 text-foreground/90">
                  Your {result.personalityType || "INTJ"} Blueprint
                </h4>
              </div>
              <div
                className="flex-grow flex flex-col justify-between "
                style={{ minHeight: "450px" }}
              >
                {Object.entries(result.traitScores).map(
                  ([trait, score]: [string, TraitScore], idx) => (
                    <div key={trait} className="space-y-2">
                      <div className="flex justify-between items-center text-lg font-medium">
                        <span className="capitalize tracking-wide text-foreground/90">
                          {trait}
                        </span>
                        <span className="font-bold text-primary">
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
                        className="h-3 bg-gradient-to-r from-primary/30 to-indigo-400/30 rounded-full shadow-inner transition-all duration-700"
                      />
                      <TraitExplanation
                        traitKey={trait as TraitKey}
                        personalityType={result.personalityType }
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
