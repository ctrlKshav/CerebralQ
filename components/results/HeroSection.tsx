import React from "react";
import { Badge } from "@/components/ui/badge";
import { PersonalityDescription } from "@/types/tests/mbti";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSectionProps {
  personalityType: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
  firstname: string | null;
  onExploreClick: () => void;
  id?: string;
}

const HeroSection = ({
  personalityType,
  personalityDescription,
  completionDate,
  firstname,
  onExploreClick,
  id,
}: HeroSectionProps) => {
  const alias = personalityDescription.alias;
  const description = personalityDescription.description;

  // Map personality types to their respective image paths
  const personalityImages: Record<string, string> = {
    default: "/ENTJ.jpeg",
  };

  const imagePath =
    personalityImages[personalityType] || personalityImages.default;

  return (
    <section
      id={id}
      className="bg-background flex flex-col justify-center items-center py-16 px-4 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 max-w-lg animate-fade-in">
            <Badge className="bg-primary text-primary-foreground py-1.5 px-4 rounded-full">
              Completed on {completionDate}
            </Badge>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Hey{" "}
                <span
                  className={`${
                    firstname ? "text-primary decoration-2" : "decoration-1"
                  }`}
                >
                  {firstname || "there"}!
                </span>{" "}
                You're an{" "}
                <span className="text-primary decoration-2">
                  {personalityType}.
                </span>
                <br />
                <span className=" font-semibold">{alias}.</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">{description}</p>

            <p className="text-lg text-muted-foreground">
              Does that sound like you
              {firstname ? (
                <>
                  ,{" "}
                  <span className="font-semibold text-primary">
                    {firstname}
                  </span>
                </>
              ) : (
                ""
              )}
              ? Let's dive into what makes you so incredible!
            </p>

            <div className="pt-4">
              <Button
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:shadow"
                onClick={onExploreClick}
              >
                Explore Your Results
              </Button>
            </div>
          </div>

          {/* Main personality image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={imagePath}
              alt={`${personalityType} - ${alias} personality type illustration`}
              width={400}
              height={400}
              priority
              className="object-contain z-10"
              sizes="(max-width: 768px) 80vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
