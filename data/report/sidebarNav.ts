import {
  Brain,
  Briefcase,
  Heart,
  Handshake,
  Sparkles,
  Coffee,
  Lightbulb,
  Smile,
  ListChecks,
} from "lucide-react";

export type SidebarNavLink = {
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  bgColor: string;
  disabled: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

export type SidebarNavDataType = {
  navMain: SidebarNavLink[];
};

export const sidebarNavData: SidebarNavDataType = {
  navMain: [
    {
      title: "Personality Traits",
      url: "#explore-traits",
      icon: Brain,
      color: "#8b5cf6",
      bgColor: "rgba(139, 92, 246, 0.1)",
      disabled: false,
    },
    {
      title: "Values & Motivators",
      url: "#values-motivators",
      icon: Lightbulb,
      color: "#eab308",
      bgColor: "rgba(234, 179, 8, 0.1)",
      disabled: false,
    },
    {
      title: "Career Path",
      url: "#career-path",
      icon: Briefcase,
      color: "#3b82f6",
      bgColor: "rgba(59, 130, 246, 0.1)",
      disabled: false,
    },
    {
      title: "Relationships",
      url: "#relationships",
      icon: Heart,
      color: "#ec4899",
      bgColor: "rgba(236, 72, 153, 0.1)",
      disabled: true,
    },
    {
      title: "Friendships",
      url: "#friendships",
      icon: Handshake,
      color: "#f59e0b",
      bgColor: "rgba(245, 158, 11, 0.1)",
      disabled: true,
    },
    {
      title: "Growth Journey",
      url: "#growth-journey",
      icon: Sparkles,
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.1)",
      disabled: true,
    },
    {
      title: "Daily Habits",
      url: "#daily-habits",
      icon: Coffee,
      color: "#6366f1",
      bgColor: "rgba(99, 102, 241, 0.1)",
      disabled: true,
    },
    {
      title: "Community",
      url: "#community",
      icon: Smile,
      color: "#06b6d4",
      bgColor: "rgba(6, 182, 212, 0.1)",
      disabled: true,
    },
    {
      title: "Action Plan",
      url: "#action-plan",
      icon: ListChecks,
      color: "#ef4444",
      bgColor: "rgba(239, 68, 68, 0.1)",
      disabled: true,
    },
  ],
};
