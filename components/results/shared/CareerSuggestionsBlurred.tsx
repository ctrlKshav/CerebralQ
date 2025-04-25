"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lock, Sparkles, ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface CareerSuggestionsBlurredProps {
  className?: string;
  onUpgradeClick?: () => void;
}

export default function CareerSuggestionsBlurred({
  className = "",
  onUpgradeClick,
}: CareerSuggestionsBlurredProps) {
  const isMobile = useMediaQuery("(max-width: 968px)");

  // Static mock data for preview with unique images
  const mockCareers = [
    {
      title: "Business Management",
      matchPercentage: 95,
      description: "Lead teams and organizations to achieve strategic goals and optimize operations...",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Entrepreneurship",
      matchPercentage: 92,
      description: "Start and grow your own ventures, bringing innovative solutions to market...",
      imageUrl: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Data Science",
      matchPercentage: 88,
      description: "Analyze complex datasets to extract insights and drive decision-making...",
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Marketing Strategy",
      matchPercentage: 85,
      description: "Develop comprehensive marketing plans to build brand awareness and drive growth...",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <div className={`${className} py-12 mx-auto relative`}>
      {/* Section header */}
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
          Discover career paths that naturally align with your personality traits and abilities,
          offering environments where you're likely to thrive and find fulfillment.
        </p>
      </div>

      {/* Career suggestions grid with lighter blur */}
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-8 md:gap-12 items-start filter blur-[3px] pointer-events-none select-none mx-auto`}
        >
          {mockCareers.map((career, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <Card className="group overflow-hidden border bg-card h-full w-full flex flex-col hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={career.imageUrl}
                    alt={career.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500"
                    priority={true}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className={`py-1.5 px-3 font-medium bg-background/90 backdrop-blur-sm text-sm ${
                        career.matchPercentage >= 90
                          ? "bg-green-500/20 text-green-600"
                          : career.matchPercentage >= 80
                          ? "bg-blue-500/20 text-blue-600"
                          : "bg-orange-500/20 text-orange-600"
                      }`}
                    >
                      {career.matchPercentage}% Match
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="font-bold text-2xl tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {career.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                    {career.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Semi-transparent overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background/80 via-background/70 to-background/60 backdrop-blur-[2px]"
      >
        <div className="max-w-xl p-8 text-center bg-background/80 backdrop-blur-md rounded-xl shadow-lg">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
            <Lock className="w-8 h-8" />
          </div>
          
          <h3 className="text-3xl font-bold mb-4">Unlock Your Career Potential</h3>
          
          <p className="text-muted-foreground text-lg mb-8">
            Discover personalized career suggestions that match your unique personality traits, skills, and aspirations. Find work that feels fulfilling and meaningful.
          </p>
          
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 mt-0.5 text-primary" />
              <p className="text-sm">Personalized match scores based on your traits</p>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 mt-0.5 text-primary" />
              <p className="text-sm">Detailed career path descriptions</p>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 mt-0.5 text-primary" />
              <p className="text-sm">Insights on matching personality qualities</p>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 mt-0.5 text-primary" />
              <p className="text-sm">Exclusive career recommendations</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="group px-8 py-6 text-base"
            onClick={onUpgradeClick}
          >
            Upgrade to Full Report
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
} 