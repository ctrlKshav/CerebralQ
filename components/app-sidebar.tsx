"use client";

import * as React from "react";
import {
  BookOpen,
  Brain,
  Briefcase,
  Heart,
  Lightbulb,
  ListChecks,
  Settings2,
  Sparkles,
  Users,
  Clock,
  Coffee,
  Star,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "cerebralq",
    email: "info@cerebralq.com",
    avatar: "/avatars/cerebralq.jpg",
  },
  navMain: [
    {
      title: "Personality Traits",
      url: "#explore-traits",
      icon: Brain,
      isActive: true,
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
      icon: Users,
    },
    {
      title: "Action Plan",
      url: "#action-plan",
      icon: ListChecks,
    },
  ],
  navSecondary: [
    {
      title: "Take New Test",
      url: "/",
      icon: Star,
    },
    {
      title: "History",
      url: "#",
      icon: Clock,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))] w-[20rem]"
      style={{ "--sidebar-width": "20rem" } as React.CSSProperties}
      {...props}
    >
      <SidebarHeader className="mb-2">
        <SidebarMenu>
          <SidebarMenuItem className="px-2 pt-4">
            <span className="truncate font-medium text-lg ">CQ Report</span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
