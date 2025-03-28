import React, { ReactNode } from "react";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SuperpowerItem {
  title: string;
  description: string;
}

interface SuperpowersCardProps {
  title: string;
  items: SuperpowerItem[];
  icon: ReactNode;
  className?: string;
}

const SuperpowersCard = ({
  title,
  items,
  icon,
  className = "",
}: SuperpowersCardProps) => {
  return (
    <Card className={`h-full ${className} shadow-none border-0 sm:border`}>
      <CardContent className="px-0 sm:p-8">
        <div className="flex items-center mb-6">
          <div className="rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 text-white p-3 mr-4 shadow flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
            {title}
          </h3>
        </div>

        <ul className="space-y-5 text-base ml-4">
          {items.map((item, index) => (
            <li key={`superpower-${index}`} className="flex items-start">
              <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-lg mb-1 text-card-foreground">
                  {item.title}
                </p>
                <p className="text-card-foreground">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SuperpowersCard;
