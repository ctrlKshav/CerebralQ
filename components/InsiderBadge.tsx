import { Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  HybridTooltip,
  HybridTooltipContent,
  HybridTooltipTrigger,
} from "@/components/ui/tooltip-hybrid";
import Link from "next/link";

interface InsiderBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function InsiderBadge({
  className,
  size = "md",
}: InsiderBadgeProps) {
  const sizeClasses = {
    sm: "text-xs py-0.5",
    md: "text-sm",
    lg: "text-base py-1.5 px-3",
  };

  const iconSizes = {
    sm: "h-3 w-3 mr-1",
    md: "h-3.5 w-3.5 mr-1",
    lg: "h-4 w-4 mr-1.5",
  };

  return (
    <TooltipProvider>
      <HybridTooltip delayDuration={100}>
        <HybridTooltipTrigger asChild>
          <Badge
            variant="default"
            className={cn(
              "bg-primary text-white",
              "font-medium",
              sizeClasses[size],
              className
            )}
          >
            <Crown className={cn(iconSizes[size])} />
            <span>Insider</span>
          </Badge>
        </HybridTooltipTrigger>
        <HybridTooltipContent side="bottom" className="text-white">
          <p>
            <Link href={"/sign-up?source=newsletter"} className="font-bold underline">
              C4E
            </Link>{" "}
            organization member
          </p>
        </HybridTooltipContent>
      </HybridTooltip>
    </TooltipProvider>
  );
}
