import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { PersonalityDescription } from "@/types/tests/mbti/results";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { handleShare } from "@/lib/shareUtils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Share2 } from "lucide-react";

interface HeroSectionProps {
  personalityType: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
  firstname: string | null;
  id?: string;
  username: string | null;
  historyPage: boolean;
}

const HeroSection = ({
  personalityType,
  personalityDescription,
  completionDate,
  firstname,
  id,
  username,
  historyPage = false,
}: HeroSectionProps) => {
  const alias = personalityDescription.alias;
  const description = personalityDescription.description(firstname,false);

  // Map personality types to their respective image paths
  const personalityImages: Record<string, string> = {
    "INTJ": "/images/personalityTypes/intj.jpg",
    "INTP": "/images/personalityTypes/intp.jpg",
    "INFJ": "/images/personalityTypes/infj.jpg",
    "INFP": "/images/personalityTypes/infp.jpg",
    "ISFJ": "/images/personalityTypes/isfj.jpg",
    "ISFP": "/images/personalityTypes/isfp.jpg",
    "ISTJ": "/images/personalityTypes/istj.jpg",
    "ISTP": "/images/personalityTypes/istp.jpg",
    "ENTP": "/images/personalityTypes/entp.jpg",
    "ENTJ": "/images/personalityTypes/entj.jpg",
    "ENFJ": "/images/personalityTypes/enfj.jpg",
    "ENFP": "/images/personalityTypes/enfp.jpg",
    "ESFJ": "/images/personalityTypes/esfj.jpg",
    "ESFP": "/images/personalityTypes/esfp.jpg",
    "ESTJ": "/images/personalityTypes/estj.jpg",
    "ESTP": "/images/personalityTypes/estp.jpg",
    default: "/images/personalityTypes/infj.jpg",
  };

  const imagePath =
    personalityImages[personalityType] || personalityImages.default;

  const [isSharing, setIsSharing] = useState(false);
  const router = useRouter();

  const shareResults = async () => {
    try {
      setIsSharing(true);

      // Handle sharing without saving to database (now handled in Results component)
      const title = `My Personality Type: ${personalityType}`;
      const text = `I'm an ${personalityType}! Check out my personality profile on CerebralQuotient.`;

      // Determine share URL based on user status
      const url = !username ? `result` : `${username}`;

      // Use the existing share function
      await handleShare(title, text, url, username ? false : true);

      // Redirect demo users to sign up
      if (!username) {
        router.push(
          "/sign-up?info=" +
            encodeURIComponent("You need an account to share your profile.")
        );
      }
    } catch (error) {
      console.error("Error sharing results:", error);
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <section
      id={id}
      className="bg-background flex flex-col justify-center items-center py-16 px-4 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center  ">
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

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <Button
                variant="default"
                size="sm"
                onClick={shareResults}
                disabled={isSharing}
              >
                <Share2 className="w-4 h-4 mr-2" />
                {isSharing
                  ? "Processing..."
                  : !username
                    ? "Save & Share"
                    : "Share Results"}
              </Button>
              <Link href={`${historyPage ? "/account/report" : "/report"}`}>
                <Button variant="outline">
                  View Detailed Report
                </Button>
              </Link>
            </div>
          </div>

          {/* Main personality image */}
          <div className="justify-self-end relative w-fit max-w-full h-fit md:h-full max-h-[80vh] flex items-center justify-center">
            <Image
              src={imagePath}
              quality={100}
              alt={`${personalityType} - ${alias} personality type illustration`}
              width={400}
              height={400}
              priority
              className="w-full h-full object-cover z-10 rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
