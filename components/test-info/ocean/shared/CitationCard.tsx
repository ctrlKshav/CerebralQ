import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface CitationCardProps {
  title: string;
  authors: string;
  description: string;
  icon: React.ReactNode;
  colorClass?: string;
}

const CitationCard: React.FC<CitationCardProps> = ({
  title,
  authors,
  description,
  icon,
  colorClass = "bg-primary",
}) => {
  return (
    <Card className="shadow-md overflow-hidden border border-muted transform transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div
            className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0`}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-card-foreground mb-1">
              {title}
            </h3>
            <p className="text-primary font-medium mb-3">
              {authors}
            </p>
            <p className="text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CitationCard; 