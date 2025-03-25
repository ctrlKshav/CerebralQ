import React from "react";
import { Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CareerPath } from "@/types/tests/mbti";
import { motion } from "framer-motion";

interface CareerSuggestionsCardProps {
  career: CareerPath;
  className?: string;
}

const CareerSuggestionsCard: React.FC<CareerSuggestionsCardProps> = ({
  career,
  className = "",
}) => {
  // Career image mapping based on title
  const getCareerImage = (title: string) => {
    const images = {
      "Business Management":
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      Entrepreneurship:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      Law: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      Engineering:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    };

    const defaultImage =
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";

    return title in images
      ? images[title as keyof typeof images]
      : defaultImage;
  };

  return (
    <div className={`${className}`}>
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-5"
        >
          <h3 className="text-2xl font-bold text-foreground ml-4 tracking-tight">
            Career Suggestions
          </h3>
        </motion.div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          Based on your personality traits, these careers align well with your
          natural strengths and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {career.matches.map((match, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={getCareerImage(match.title)}
                  alt={match.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <Badge
                    variant="secondary"
                    className="py-1 px-2 font-medium shadow-sm bg-background/90 backdrop-blur-sm"
                  >
                    {match.matchPercentage}% Match
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg text-card-foreground tracking-tight mb-2">
                  {match.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {match.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerSuggestionsCard;
