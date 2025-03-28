import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SectionNumber from "@/components/ui/section-number";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
  sectionNumber?: number;
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  description,
  sectionNumber,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <div className="text-center max-w-4xl mx-auto mb-8">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
          {sectionNumber && <SectionNumber number={sectionNumber} />}
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {title}
          </h2>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground font-medium">
          {subtitle}
        </p>
      </div>

      {description && (
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <p className="text-lg md:text-xl text-card-foreground">
              {description}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SectionHeader;
