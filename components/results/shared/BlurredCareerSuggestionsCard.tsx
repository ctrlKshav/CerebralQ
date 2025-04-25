"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { LockIcon, ChevronRight, SparklesIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CareerSuggestion } from "@/types/tests/mbti/personalityDatabase";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Upgrade overlay components
const UpgradeOverlay = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 backdrop-blur-md bg-background/60">
      <UpgradeCard />
    </div>
  );
};

const CQLogo = ({ className = "w-16 h-16" }: { className?: string }) => {
  const { theme, resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/images/logoLight.png"); // Default for SSR

  useEffect(() => {
    // Update logo when theme changes or on initial client-side render
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const isLightTheme = currentTheme === "light";

    setLogoSrc(isLightTheme ? "/images/logoLight.png" : "/images/logoDark.png");
  }, [theme, resolvedTheme]);

  return (
    <Image
      src={logoSrc}
      alt="Cerebral Quotient"
      className={`${className} object-contain`}
      priority
      width={96}
      height={96}
      quality={100}
      unoptimized
    />
  );
};

const UpgradeCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-card border rounded-xl shadow-lg max-w-md w-full mx-6"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-center mb-6">
          <CQLogo className="w-20 h-20" />
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-2">Unlock Your Full Report</h3>
        <p className="text-muted-foreground text-center mb-6">
          Gain complete access to all your personality insights and detailed career recommendations
        </p>
        
        <div className="space-y-3 mb-6">
          <BenefitItem text="Discover personalized career paths with detailed matches" />
          <BenefitItem text="Access relationship compatibility insights" />
          <BenefitItem text="Get growth journey recommendations and daily habits" />
          <BenefitItem text="Receive community connection suggestions" />
        </div>
        
        <Button 
          className="w-full py-6 text-base font-medium"
          size="lg"
        >
          Upgrade to Full Report <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
      <div className="h-2 w-2 rounded-full bg-primary" />
    </div>
    <span className="text-sm">{text}</span>
  </div>
);

// Sample static data for the blurred view
const sampleCareerData: CareerSuggestion[] = [
  {
    title: "Business Management",
    matchPercentage: 92,
    description: "Coordinate business operations by organizing teams, resources, and processes to achieve organizational goals.",
    qualityMatches: [
      {
        title: "Strategic Thinking",
        description: "Your ability to think ahead and plan strategically makes you an effective business manager."
      },
      {
        title: "Leadership",
        description: "Your natural leadership qualities help you guide teams toward success."
      },
      {
        title: "Pragmatism",
        description: "Your practical approach helps keep business operations grounded and focused on results."
      }
    ]
  },
  {
    title: "Entrepreneurship",
    matchPercentage: 89,
    description: "Create and operate your own business ventures, identifying opportunities and taking calculated risks.",
    qualityMatches: [
      {
        title: "Independence",
        description: "Your self-directed nature allows you to forge your own path in business."
      },
      {
        title: "Vision",
        description: "Your ability to see possibilities helps you identify unique business opportunities."
      },
      {
        title: "Resilience",
        description: "Your adaptability helps you navigate the challenges of entrepreneurship."
      }
    ]
  },
  {
    title: "Law",
    matchPercentage: 85,
    description: "Practice, interpret and apply legal principles in various contexts, from advocacy to advisory roles.",
    qualityMatches: [
      {
        title: "Critical Thinking",
        description: "Your analytical skills help you evaluate complex legal arguments effectively."
      },
      {
        title: "Persuasiveness",
        description: "Your communication skills enable you to advocate convincingly for clients."
      },
      {
        title: "Attention to Detail",
        description: "Your methodical approach ensures thoroughness in legal documentation and research."
      }
    ]
  },
  {
    title: "Engineering",
    matchPercentage: 82,
    description: "Design and develop innovative solutions to technical problems across various industries.",
    qualityMatches: [
      {
        title: "Problem-Solving",
        description: "Your methodical approach to challenges makes you an effective engineer."
      },
      {
        title: "Analytical Thinking",
        description: "Your ability to break down complex systems helps in engineering design."
      },
      {
        title: "Innovation",
        description: "Your creative thinking helps develop novel solutions to technical problems."
      }
    ]
  }
];

interface BlurredCareerSuggestionsCardProps {
  className?: string;
}

export default function BlurredCareerSuggestionsCard({
  className = "",
}: BlurredCareerSuggestionsCardProps) {
  const isMobile = useMediaQuery("(max-width: 968px)");

  const getCareerImage = (title: string) => {
    const images: Record<string, string> = {
      "Business Management":
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      Entrepreneurship:
        "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=800&q=80",
      Law: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      Engineering:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    };

    return images[title] || "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393726/careerSuggestions_utvtsq.jpg";
  };

  return (
    <div className={`${className} py-12 mx-auto relative`}>
      {/* Add section header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
            Career Suggestions
          </h2>
        </motion.div>

        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">
          These career paths naturally complement your personality traits and
          abilities, offering environments where you're likely to thrive and
          find fulfillment.
        </p>
      </div>
      {/* Career suggestion cards with overlay */}
      <div className="relative">
        <UpgradeOverlay />
        
        <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-16 items-center justify-center `}>
          {sampleCareerData.map((suggestion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <Card className="group overflow-hidden border bg-card h-full w-full flex flex-col">
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src={getCareerImage(suggestion.title)}
                    alt={suggestion.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index < 4}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className={`py-1.5 px-3 font-medium bg-background/90 backdrop-blur-sm text-sm ${
                        suggestion.matchPercentage >= 90
                          ? "bg-green-500/20 text-green-600"
                          : suggestion.matchPercentage >= 80
                            ? "bg-blue-500/20 text-blue-600"
                            : "bg-orange-500/20 text-orange-600"
                      }`}
                    >
                      {suggestion.matchPercentage}% Match
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 md:p-7 flex-grow flex flex-col">
                  <h3 className="font-bold text-2xl tracking-tight mb-3">
                    {suggestion.title}
                  </h3>
                  <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                    {suggestion.description}
                  </p>
                  {suggestion.qualityMatches && suggestion.qualityMatches.length > 0 && (
                    <div className="">
                      <h4 className="text-sm font-medium mb-3 text-muted-foreground flex items-center gap-4">
                        <span className="flex-none">Your Matching Traits</span>
                        <span className="inline-block w-full h-px bg-border flex-grow" />
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {suggestion.qualityMatches.map((quality, i) => (
                          <div
                            key={i}
                            className="inline-flex items-center gap-1.5 p-1.5 rounded-md bg-muted hover:bg-opacity-70 transition-colors relative w-fit whitespace-nowrap"
                          >
                            <span className="text-xs font-medium">
                              {quality.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 