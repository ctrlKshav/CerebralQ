import { Crown } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface InsiderBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function InsiderBadge({ className, size = "md" }: InsiderBadgeProps) {
  const sizeClasses = {
    sm: "text-xs py-0.5",
    md: "text-sm",
    lg: "text-base py-1.5 px-3"
  };
  
  const iconSizes = {
    sm: "h-3 w-3 mr-1",
    md: "h-3.5 w-3.5 mr-1",
    lg: "h-4 w-4 mr-1.5"
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Badge 
            variant="outline"
            className={cn(
              "bg-violet-100 text-violet-800 border-violet-300 hover:bg-violet-200 dark:bg-violet-900/30 dark:border-violet-800 dark:text-violet-300 dark:hover:bg-violet-900/50",
              "font-medium",
              sizeClasses[size],
              className
            )}
          >
            <Crown className={cn(iconSizes[size])} />
            <span>Insider</span>
          </Badge>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>C4E Organisation Member</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
