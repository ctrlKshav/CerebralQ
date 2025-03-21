import React from "react";
import { Badge } from "@/components/ui/badge";
import { PersonalityDescription } from "@/types/tests/mbti";

interface HeroSectionProps {
  personalityType: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
  username: string | null;
  onExploreClick: () => void;
}

const HeroSection = ({
  personalityType,
  personalityDescription,
  completionDate, 
  username,
  onExploreClick,
}: HeroSectionProps) => {
  const alias = personalityDescription.alias;
  const description = personalityDescription.description;
  return (
    <section className=" flex flex-col justify-center items-center py-16 px-4 overflow-hidden relative">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 max-w-lg animate-fade-in">
            <Badge className="bg-primary text-primary-foreground py-1.5 px-4 rounded-full">
              Completed on {completionDate}
            </Badge>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {`Hey ${username}! You're an ${personalityType} \n ${alias}`}
              </h1>
            </div>

            <p className="text-lg text-gray-600">{description}</p>

            <p className="text-lg text-gray-600">
              Does that sound like you,{" "}
              <span className="font-semibold">{username}</span>? Let's dive into
              what makes you so incredible!
            </p>

            <div className="pt-4">
              <button
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:shadow-lg hover:shadow-mbti-purple/20 active:scale-95"
                onClick={onExploreClick}
              >
                Explore Your Results
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative w-full h-full min-h-[300px] animate-fade-in-delayed flex justify-center">
            <div className="relative w-4/5 aspect-square">
              <div className="absolute inset-0 grid place-items-center">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full animate-float"
                >
                  <path
                    fill="#4F46E5"
                    d="M45.7,-77.2C58.9,-69.2,69.3,-56.3,76.6,-42C83.9,-27.6,88.1,-11.9,88.4,4.2C88.7,20.3,85.2,36.9,76.5,50.2C67.8,63.5,53.9,73.5,38.8,79.7C23.7,85.9,7.3,88.4,-9.5,87.5C-26.4,86.7,-43.8,82.6,-58.1,73.2C-72.5,63.8,-83.9,49.1,-89.4,32.9C-94.9,16.7,-94.5,-1,-90.7,-17.7C-86.8,-34.4,-79.5,-50.2,-67.7,-60.4C-55.9,-70.6,-39.7,-75.3,-24.7,-79.5C-9.7,-83.7,4.2,-87.3,19.4,-85.6C34.7,-83.9,51.3,-76.8,58.2,-67.4Q59.6,-65.5,59.7,-63.5L45.7,-77.2Z"
                    transform="translate(100 100)"
                    className="opacity-10"
                  />
                </svg>
              </div>

              {/* Circular elements */}
              <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-mbti-purple/10 animate-pulse-soft"></div>
              <div
                className="absolute bottom-1/3 right-1/3 w-8 h-8 rounded-full bg-mbti-indigo/20 animate-pulse-soft"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Center circle with personality personalityType */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-mbti-purple/20">
                <span className="text-2xl font-bold text-mbti-purple">
                  {personalityType}
                </span>
              </div>

              {/* Trait lines */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-transparent to-mbti-purple/30"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-t from-transparent to-mbti-purple/30"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-transparent to-mbti-purple/30"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 h-1 bg-gradient-to-l from-transparent to-mbti-purple/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
