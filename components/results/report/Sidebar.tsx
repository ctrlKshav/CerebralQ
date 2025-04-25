"use client";

import * as React from "react";
import { useEffect, useState } from "react";
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
import { motion } from "framer-motion";
import { sidebarNavData } from "@/data/report/sidebarNav";

export function ReportSidebar({ isPaidUser = false }: { isPaidUser: boolean }) {
  const { isMobile, state, activeSection, setActiveSection } = useSidebar();
  const [hasAnimated, setHasAnimated] = useState(false);

  const triggerButtonTopPosition = "calc(var(--header-height) + 1.7rem)";
  // Common button styles
  const buttonStyle =
    "h-9 w-9 bg-white hover:bg-white dark:bg-slate-950/80 dark:hover:bg-slate-950/80 z-50";

  const sections = sidebarNavData.navMain.map((item) => ({
    id: item.url.replace("#", ""),
    title: item.title,
  }));

  const handleScroll = () => {
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section.id);
      if (!element) return false;

      const rect = element.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom > 100;
    });

    if (currentSection) {
      setActiveSection(currentSection.title);
    }
  };

  // Update active item based on scroll position
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    document.getElementById(activeSection)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [activeSection]);

  // Set hasAnimated to true after initial animation
  useEffect(() => {
    // Set hasAnimated to true after a small delay to ensure animation runs once
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Header animation variants
  const headerVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.1 },
    },
  };

  return (
    <>
      <motion.div
        className={`${isMobile ? "hidden" : "fixed"} z-50`}
        style={{
          top: triggerButtonTopPosition,
          left: state === "expanded" ? "calc(20rem - 4rem)" : "16px",
          transition: "left 0.3s ease-out",
        }}
        initial={!hasAnimated ? { opacity: 0, scale: 0.9 } : false}
        animate={
          !hasAnimated
            ? {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.3, ease: "easeOut" },
              }
            : {}
        }
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SidebarTrigger className={buttonStyle} />
      </motion.div>

      <Sidebar
        className="top-[--header-height] !h-[calc(100svh-var(--header-height))] w-[20rem] bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 border-r border-slate-200 dark:border-slate-800"
        style={{ "--sidebar-width": "20rem" } as React.CSSProperties}
        side={isMobile ? "right" : "left"}
      >
        <motion.div
          initial={!hasAnimated ? "hidden" : false}
          animate={!hasAnimated ? "visible" : false}
          variants={headerVariants}
        >
          <SidebarHeader className="mb-4">
            <SidebarMenu>
              <SidebarMenuItem className="px-4 pt-6">
                <div className="flex items-center justify-between w-full">
                  <motion.span
                    className="font-semibold text-xl text-slate-800 dark:text-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    CQ Report
                  </motion.span>
                  <div className="w-9"></div>
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
        </motion.div>
        <SidebarContent className="px-4">
          <SidebarNavMain items={sidebarNavData.navMain} isPaidUser={isPaidUser} />
        </SidebarContent>
      </Sidebar>
    </>
  );
}
