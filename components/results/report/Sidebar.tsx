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
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))] w-[20rem] bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 border-r border-slate-200 dark:border-slate-800"
      style={{ "--sidebar-width": "20rem" } as React.CSSProperties}
      {...props}
    >
      <SidebarHeader className="mb-4">
        <SidebarMenu>
          <SidebarMenuItem className="px-4 pt-6">
            <div className="flex items-center gap-2">
              
              <span className="font-semibold text-xl text-slate-800 dark:text-white">CQ Report</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="px-4">
        <SidebarNavMain items={sidebarNavData.navMain} />
      </SidebarContent>
      <SidebarFooter className="mt-auto p-4">
        <div className="rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 p-4 shadow-sm border border-indigo-100 dark:border-indigo-900/30">
          <h4 className="text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-1">Your CQ Journey</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Explore your full report to discover insights about your personality, career, and relationships.
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
