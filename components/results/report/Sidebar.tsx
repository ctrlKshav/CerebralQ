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
  const { state } = useSidebar();
  const triggerButtonTopPosition = "calc(var(--header-height) + 1.5rem)";
  
  // Common button styles for both states
  const buttonStyle = "h-9 w-9 bg-white hover:bg-white dark:bg-slate-950/80 dark:hover:bg-slate-950/80";
  
  return (
    <>
      {/* External trigger with smooth transitions */}
      <div 
        className={`fixed left-4 z-30 transition-all duration-300 ease-in-out ${
          state === "expanded" ? "opacity-0 pointer-events-none transform -translate-x-2" : "opacity-100 transform translate-x-0"
        }`}
        style={{ top: triggerButtonTopPosition }}
      >
        <SidebarTrigger className={`${buttonStyle} transition-all duration-300 ease-in-out`} />
      </div>
      
      <Sidebar
        className="top-[--header-height] !h-[calc(100svh-var(--header-height))] w-[20rem] bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 border-r border-slate-200 dark:border-slate-800"
        style={{ "--sidebar-width": "20rem" } as React.CSSProperties}
        {...props}
      >
        <SidebarHeader className="relative mb-4">
          <SidebarMenu>
            <SidebarMenuItem className="px-4 pt-6">
              <div className="flex items-center justify-between w-full">
                <span className="font-semibold text-xl text-slate-800 dark:text-white">CQ Report</span>
                
                {/* Internal trigger with matching styling and transitions */}
                <div 
                  className={`right-4 transition-all duration-300 ease-in-out ${
                    state === "collapsed" ? "opacity-0 pointer-events-none transform translate-x-2" : "opacity-100 transform translate-x-0"
                  }`}
                  style={{ top: `calc(${triggerButtonTopPosition} - var(--header-height))` }}
                >
                  <SidebarTrigger className={`${buttonStyle} transition-all duration-300 ease-in-out`} />
                </div>
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
