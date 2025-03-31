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
  Handshake,
  Smile,
} from "lucide-react";

import { SidebarNavMain } from "@/components/results/report/SidebarNavMain";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { sidebarNavData } from "@/data/report/sidebarNav";

export function ReportSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
        <SidebarNavMain items={sidebarNavData.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
