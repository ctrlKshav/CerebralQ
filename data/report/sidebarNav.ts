import { Brain, Briefcase, Heart, Handshake, Sparkles, Coffee, Lightbulb, Smile, ListChecks } from "lucide-react";


export type SidebarNavLink = {
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items?: {
    title: string;
    url: string;
  }[];
};

export type SidebarNavDataType = {
  navMain: SidebarNavLink[];
}
export const sidebarNavData: SidebarNavDataType = {
  navMain: [
    {
      title: "Personality Traits",
      url: "#explore-traits",
      icon: Brain,
    },
    {
      title: "Career Path",
      url: "#career-path",
      icon: Briefcase,
    },
    {
      title: "Relationships",
      url: "#relationships",
      icon: Heart,
    },
    {
      title: "Friendships",
      url: "#friendships",
      icon: Handshake,
    },
    {
      title: "Growth Journey",
      url: "#growth-journey",
      icon: Sparkles,
    },
    {
      title: "Daily Habits",
      url: "#daily-habits",
      icon: Coffee,
    },
    {
      title: "Values & Motivators",
      url: "#values-motivators",
      icon: Lightbulb,
    },
    {
      title: "Community",
      url: "#community",
      icon: Smile,
    },
    {
      title: "Action Plan",
      url: "#action-plan",
      icon: ListChecks,
    },
  ],
};