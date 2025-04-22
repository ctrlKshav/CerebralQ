import React, { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpCircle } from "lucide-react";
import { formatWithUsername } from "@/lib/formatWithUsername";

interface GrowthAreaItem {
  title: string;
  description: string;
}

interface GrowthAreasCardProps {
  firstname?: string | null;
  title: string;
  items: GrowthAreaItem[];
  icon: ReactNode;
  className?: string;
  showHeader?: boolean;
  numberCircles?: boolean;
}

const GrowthAreasCard = ({
  firstname,
  title,
  items,
  icon,
  className = "",
  showHeader = true,
  numberCircles = false,
}: GrowthAreasCardProps) => {
  return (
    <Card className={`h-full ${className} shadow-none border-0 sm:border`}>
      <CardContent className="px-0 sm:p-8">
        {showHeader && (
          <div className="flex items-center mb-6">
            <div className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white p-3 mr-4 shadow flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
              {title}
            </h3>
          </div>
        )}

        <ul className="space-y-5 text-base ml-4">
          {items.map((item, index) => (
            <li key={`growth-area-${index}`} className="flex items-start">
              {numberCircles ? (
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">
                  {index + 1}
                </div>
              ) : (
                <ArrowUpCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              )}
              <div>
                <p className="font-medium text-lg mb-1 text-card-foreground">
                  {item.title}
                </p>
                <p className="text-card-foreground">{formatWithUsername(item.description, firstname)}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default GrowthAreasCard;