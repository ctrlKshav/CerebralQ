import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TraitProgress } from "./TraitProgress";

export interface Trait {
  title: string;
  value: number;
  icon: ReactNode;
  color?: string;
}

interface TestIllustrationProps {
  testType: string;
  title: string;
  subtitle: string;
  traits: Trait[];
  centerIcon: ReactNode;
  summary: string;
  footerIcon: ReactNode;
  footerText: string;
  className?: string;
  cardClassName?: string;
}

export function TestIllustration({
  testType,
  title,
  subtitle,
  traits,
  centerIcon,
  summary,
  footerIcon,
  footerText,
  className = "",
  cardClassName = "border border-border rounded-xl shadow-md"
}: TestIllustrationProps) {
  return (
    <div className={`relative w-full max-w-md ${className}`}>
      <Card className={cardClassName}>
        <CardContent className="p-6">
          <div className="rounded-lg p-5 relative">
            <div className="flex justify-center mb-4">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                {centerIcon}
              </div>
            </div>
            
            <h3 className="text-center text-lg font-semibold mb-1">{title}</h3>
            <p className="text-center text-xs text-muted-foreground mb-4">{subtitle}</p>
            
            <div className={testType === "OCEAN" ? "space-y-3 mb-4" : "grid grid-cols-2 gap-3 mb-6"}>
              {traits.map((trait, index) => (
                <TraitProgress
                  key={index}
                  title={trait.title}
                  value={trait.value}
                  icon={trait.icon}
                  color={trait.color}
                  showPercentage={testType === "OCEAN"}
                />
              ))}
            </div>
            
            <div className="text-xs text-center text-muted-foreground mt-4">
              <p>{summary}</p>
            </div>
            
            <div className="flex justify-center mt-4">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <div className="h-6 w-6 rounded-full border border-border flex items-center justify-center">
                  {footerIcon}
                </div>
                <span>{footerText}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
