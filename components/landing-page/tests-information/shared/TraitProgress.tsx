import { Progress } from "@/components/ui/progress";
import { ReactNode } from "react";

interface TraitProgressProps {
  title: string;
  value: number;
  icon: ReactNode;
  color?: string;
  showPercentage?: boolean;
  className?: string;
}

export function TraitProgress({ 
  title, 
  value, 
  icon, 
  color = "primary", 
  showPercentage = false,
  className = ""
}: TraitProgressProps) {
  // Map color names to actual color classes
  const colorMap: Record<string, string> = {
    primary: "bg-primary",
    blue: "bg-blue-500",
    green: "bg-emerald-500",
    amber: "bg-amber-500",
    purple: "bg-purple-500",
    red: "bg-red-500",
    violet: "bg-violet-500"
  };

  const bgColor = colorMap[color] || colorMap.primary;

  return (
    <div className={`flex items-center ${className}`}>
      <div className="mr-2">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-xs">
          <span className="font-medium">{title}</span>
          {showPercentage && <span>{value}%</span>}
        </div>
        <Progress value={value} className="h-1.5 mt-1" indicatorClassName={bgColor} />
      </div>
    </div>
  );
}
