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
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar-custom";

import { sidebarNavData } from "@/data/report/sidebarNav";

export function ReportSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile, state } = useSidebar();
  const triggerButtonTopPosition = "calc(var(--header-height) + 1.5rem)";
  
  // Common button styles
  const buttonStyle = "h-9 w-9 bg-white hover:bg-white dark:bg-slate-950/80 dark:hover:bg-slate-950/80  z-50";
  
  return (
    <>
      {/* Trigger button that moves with the sidebar */}
      <div 
        className="fixed z-50 transition-all duration-300 ease-in-out"
        style={{ 
          top: state === "expanded" 
            ? "calc(var(--header-height) + 1.7rem)" // Consistent vertical position
            : triggerButtonTopPosition,
          left: state === "expanded" 
            ? isMobile ? 'calc(100% - 4rem)' : 'calc(20rem - 4rem)' // Moved inside sidebar when expanded
            : isMobile ? '12px' : '16px',
        }}
      >
        <SidebarTrigger 
          className={`${buttonStyle} ${isMobile ? "h-10 w-10" : ""}`} 
        />
      </div>
      
      <Sidebar
        className="top-[--header-height] !h-[calc(100svh-var(--header-height))] w-[20rem] bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 border-r border-slate-200 dark:border-slate-800"
        style={{ "--sidebar-width": "20rem" } as React.CSSProperties}
        {...props}
      >
        <SidebarHeader className="mb-4">
          <SidebarMenu>
            <SidebarMenuItem className="px-4 pt-6">
              <div className="flex items-center justify-between w-full">
                <span className="font-semibold text-xl text-slate-800 dark:text-white">CQ Report</span>
                {/* Empty placeholder to maintain spacing */}
                <div className="w-9"></div>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="px-4">
          <SidebarNavMain items={sidebarNavData.navMain} />
        </SidebarContent>
      </Sidebar>
    </>
  );
}
