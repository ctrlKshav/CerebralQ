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
  const description = personalityDescription.description(firstname, false);

  // Use high-quality professional Unsplash images for each personality type
  const personalityImages: Record<string, string> = {
    INTJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/intj_tvtwmy.jpg",
    INTP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/intp_njepy8.jpg",
    ISFP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/isfp_vk5cdp.jpg",
    INFJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393680/infj_t8zhg7.jpg",
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
      className="flex flex-col justify-center items-center py-20 px-4 sm:px-24 overflow-hidden"
    >
      <div className="mx-auto text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 justify-center items-center  ">
          <div className="space-y-6  animate-fade-in">
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
                <br />
                You're an{" "}
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

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
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
                <Button variant="outline">View Detailed Report</Button>
              </Link>
            </div>
          </div>

          {/* Main personality image */}
          <div className="w-full h-full max-h-[70vh]">
            <Image
              src={imagePath}
              quality={100}
              alt={`${personalityType} - ${alias} personality type illustration`}
              width={1000}
              height={1000}
              priority
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
