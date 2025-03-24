import React, { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface GrowthAreaItem {
  title: string;
  description: string;
}

interface GrowthAreasCardProps {
  title: string;
  items: GrowthAreaItem[];
  icon: ReactNode;
  className?: string;
}

const GrowthAreasCard = ({ title, items, icon, className = "" }: GrowthAreasCardProps) => {
  return (
    <Card className={`h-full ${className}`}>
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white p-3 mr-4 shadow flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
            {title}
          </h3>
        </div>

        <ul className="space-y-5 text-base ml-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="h-6 w-6 rounded-full border-2 border-secondary mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-lg mb-1 text-card-foreground">{item.title}</p>
                <p className="text-card-foreground">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default GrowthAreasCard;
