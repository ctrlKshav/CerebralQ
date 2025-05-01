import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { PersonalityDescription } from "@/types/tests/ocean/results";
import { Button } from "@/components/ui/button";
import { handleShare } from "@/lib/shareUtils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Share2 } from "lucide-react";
import { sampleResultData } from "@/data/tests/ocean/oceanSampleData";
import OceanTraitChart from "./OceanTraitChart";
import { OceanTraitScores } from "@/types/tests/ocean/traits";

interface HeroSectionProps {
  personalityType: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
  firstname: string | null;
  id?: string;
  username: string | null;
  historyPage: boolean;
  traitScores: OceanTraitScores | null;
}



const HeroSection = ({
  personalityType,
  personalityDescription,
  completionDate,
  firstname,
  id,
  username,
  historyPage = false,
  traitScores = sampleResultData.traitScores,
}: HeroSectionProps) => {
  const alias = personalityDescription.alias;
  const description = personalityDescription.description(firstname, false);

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
      className="flex flex-col justify-center items-center py-16 px-4 overflow-hidden relative max-w-[95vw] mx-auto"
    >
      <div className="w-full mx-auto text-center md:text-left">
        {/* Desktop layout: Two columns side by side */}
        <div className="hidden md:flex flex-row justify-between items-stretch gap-8 lg:gap-16">
          <div className="w-1/2 space-y-6 animate-fade-in">
            <Badge className="bg-primary text-primary-foreground py-1.5 px-4 rounded-full">
              Completed on {completionDate}
            </Badge>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Hey{" "}
                <span
                  className={`${firstname ? "text-primary decoration-2" : "decoration-1"}`}
                >
                  {firstname || "there"}!
                </span>{" "}
                <br />
                You're a{" "}
                <span className="text-primary decoration-2">
                  {personalityType}.
                </span>
                <br />
                <span className="font-semibold">{alias}.</span>
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
              <Link href={`${historyPage ? "/account/report/mbti" : "/report/mbti"}`}>
                <Button variant="outline">View Detailed Report</Button>
              </Link>
            </div>
          </div>

          <div className="w-1/2 flex items-center justify-center animate-fade-in">
            <OceanTraitChart traitScores={traitScores} />
          </div>
        </div>
        
        {/* Mobile layout: Stacked (two rows) */}
        <div className="flex flex-col md:hidden gap-8">
          <div className="space-y-5 animate-fade-in">
            <Badge className="bg-primary text-primary-foreground py-1.5 px-4 rounded-full">
              Completed on {completionDate}
            </Badge>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                Hey{" "}
                <span
                  className={`${firstname ? "text-primary decoration-2" : "decoration-1"}`}
                >
                  {firstname || "there"}!
                </span>
                <br />
                You're a{" "}
                <span className="text-primary decoration-2">
                  {personalityType}.
                </span>
                <br />
                <span className="font-semibold">{alias}.</span>
              </h1>
            </div>

            <p className="text-base text-muted-foreground">{description}</p>
          </div>

          <div className="w-full animate-fade-in">
            <OceanTraitChart traitScores={traitScores} className="max-w-full" />
          </div>
          
          <div className="space-y-4 animate-fade-in">
            <p className="text-base text-muted-foreground">
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

            <div className="pt-2 flex flex-col gap-3 items-center justify-center">
              <Button
                variant="default"
                size="sm"
                onClick={shareResults}
                disabled={isSharing}
                className="w-full"
              >
                <Share2 className="w-4 h-4 mr-2" />
                {isSharing
                  ? "Processing..."
                  : !username
                    ? "Save & Share"
                    : "Share Results"}
              </Button>
              <Link href={`${historyPage ? "/account/report/mbti" : "/report/mbti"}`} className="w-full">
                <Button variant="outline" className="w-full">View Detailed Report</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
