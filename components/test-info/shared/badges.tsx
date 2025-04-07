import { Badge } from "@/components/ui/badge";
import { LucideIcon, Star, BookText, Sparkles, ChevronsUp, BarChart3 } from "lucide-react";

export const FeatureBadge = ({
  Icon,
  label,
  color,
}: {
  Icon: LucideIcon;
  label: string;
  color?: string;
}) => (
  <Badge
    variant="outline"
    className={`py-2 px-3 ${color ? color : "bg-primary/10 text-primary"}`}
  >
    <Icon className="h-4 w-4 mr-1.5" />
    {label}
  </Badge>
);

export const TestTypeBadge = ({ type }: { type: string }) => {
  const badgeVariants: Record<string, any> = {
    personality: {
      icon: Sparkles,
      bg: "bg-violet-100 text-violet-800",
    },
    cognitive: {
      icon: Brain,
      bg: "bg-blue-100 text-blue-800",
    },
    emotional: {
      icon: Heart,
      bg: "bg-pink-100 text-pink-800",
    },
    default: {
      icon: BookText,
      bg: "bg-slate-100 text-slate-800",
    },
  };

  const badge = badgeVariants[type] || badgeVariants.default;
  const Icon = badge.icon;

  return (
    <Badge variant="outline" className={`${badge.bg} py-1 px-3`}>
      <Icon className="h-3.5 w-3.5 mr-1" />
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </Badge>
  );
};

export const DifficultyBadge = ({ level }: { level: string }) => {
  const levels: Record<string, any> = {
    beginner: {
      color: "bg-green-100 text-green-800",
      icon: null,
    },
    intermediate: {
      color: "bg-yellow-100 text-yellow-800",
      icon: ChevronsUp,
    },
    advanced: {
      color: "bg-red-100 text-red-800",
      icon: BarChart3,
    },
  };

  const badge = levels[level] || levels.beginner;
  const Icon = badge.icon;

  return (
    <Badge variant="outline" className={`${badge.color} py-1 px-3`}>
      {Icon && <Icon className="h-3.5 w-3.5 mr-1" />}
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </Badge>
  );
};

export const ReliabilityBadge = ({ score }: { score: number }) => {
  let color = "bg-green-100 text-green-800";
  
  if (score < 70) color = "bg-red-100 text-red-800";
  else if (score < 85) color = "bg-yellow-100 text-yellow-800";
  
  return (
    <Badge variant="outline" className={`${color} py-1 px-3`}>
      <Star className="h-3.5 w-3.5 mr-1" />
      {score}% Reliable
    </Badge>
  );
};

// Add these imports at the top of the file
import { Brain, Heart } from "lucide-react";
