"use client";

import { type LucideIcon } from "lucide-react";
import { Lock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar-custom";
import { SidebarNavDataType } from "@/data/report/sidebarNav";
import { useCallback } from "react";
import Link from "next/link";
import {
  HybridTooltip,
  HybridTooltipContent,
  HybridTooltipTrigger,
} from "@/components/ui/tooltip-hybrid";

export function SidebarNavMain({
  items,
  isPaidUser,
}: {
  items: SidebarNavDataType["navMain"];
  isPaidUser: boolean;
}) {
  const { activeSection, setActiveSection, isMobile, setOpenMobile } =
    useSidebar();

  useEffect(() => {
    document.getElementById(activeSection)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [activeSection]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <SidebarGroup>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <SidebarGroupLabel className="text-sm font-semibold mb-4 pl-3 tracking-wide text-slate-600 dark:text-slate-300">
          Sections
        </SidebarGroupLabel>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SidebarMenu className="gap-2">
          {items.map((item, index) => {
            const isActive = item.title === activeSection;
            const isDisabled = item.disabled && !isPaidUser;

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ x: isDisabled ? 0 : 5 }}
                transition={{ duration: 0.2 }}
              >
                <SidebarMenuItem className="my-1.5" id={item.title}>
                  <SidebarMenuButton
                    variant={"default"}
                    asChild
                    tooltip={
                      isDisabled ? `${item.title} (Coming Soon)` : item.title
                    }
                    isActive={isActive && !isDisabled}
                    onClick={
                      isDisabled ? undefined : () => setOpenMobile(false)
                    }
                    className={cn(
                      "h-12 px-3 py-3 text-base font-medium transition-all duration-200 rounded-xl relative overflow-hidden",
                      !isDisabled && "hover:translate-x-1",
                      isActive && !isDisabled
                        ? "bg-white dark:bg-slate-800 shadow-md"
                        : !isDisabled
                          ? "hover:bg-white/50 dark:hover:bg-slate-800/50"
                          : "opacity-60 cursor-not-allowed"
                    )}
                    style={{
                      boxShadow:
                        isActive && !isDisabled
                          ? `0 4px 12px ${item.bgColor}`
                          : "",
                    }}
                  >
                    {isDisabled ? (
                      <div className="flex items-center gap-3">
                        {/* Icon wrapper with background */}
                        <motion.div
                          className="flex items-center justify-center rounded-lg p-2 transition-all duration-200"
                          style={{
                            backgroundColor: "transparent",
                          }}
                        >
                          <item.icon className="size-5 flex-shrink-0 text-slate-400 dark:text-slate-500" />
                        </motion.div>

                        {/* Title with custom styling */}
                        <span className="truncate text-slate-400 dark:text-slate-500">
                          {item.title}
                        </span>

                        {/* Lock icon with hybrid tooltip */}
                        <HybridTooltip>
                          <HybridTooltipTrigger asChild>
                            <div className="ml-auto cursor-pointer">
                              <Lock className="size-4 text-slate-400 dark:text-slate-500" />
                            </div>
                          </HybridTooltipTrigger>
                          <HybridTooltipContent
                            side="right"
                            align="center"
                            className="max-w-[280px] p-4 text-sm"
                          >
                            <p className="font-medium">{item.title} (Premium Feature)</p>
                            <p className="mt-1.5">
                              Purchase the full report to unlock detailed insights about your {item.title.toLowerCase()} and personalized recommendations.
                            </p>
                          </HybridTooltipContent>
                        </HybridTooltip>
                      </div>
                    ) : (
                      <Link href={item.url} className="flex items-center gap-3">
                        {/* Icon wrapper with background */}
                        <motion.div
                          className={cn(
                            "flex items-center justify-center rounded-lg p-2 transition-all duration-200",
                            isActive ? "scale-110" : "scale-100"
                          )}
                          style={{
                            backgroundColor: "transparent",
                          }}
                          whileHover={{ scale: 1.2 }}
                          animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <item.icon
                            className="size-5 flex-shrink-0"
                            style={{
                              color: isActive ? item.color : "currentColor",
                              transition:
                                "color 0.2s ease, transform 0.2s ease",
                              transform: isActive ? "scale(1.1)" : "scale(1)",
                            }}
                          />
                        </motion.div>

                        {/* Title with custom styling */}
                        <motion.span
                          className={cn(
                            "truncate transition-all duration-200",
                            isActive ? "font-semibold" : ""
                          )}
                          style={{
                            color: isActive ? item.color : "currentColor",
                          }}
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.title}
                        </motion.span>

                        {/* Active indicator */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              className="absolute right-0 top-0 h-full w-1 rounded-l-full"
                              style={{ backgroundColor: item.color }}
                              initial={{ opacity: 0, scaleY: 0 }}
                              animate={{ opacity: 1, scaleY: 1 }}
                              exit={{ opacity: 0, scaleY: 0 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </AnimatePresence>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </motion.div>
            );
          })}
        </SidebarMenu>
      </motion.div>
    </SidebarGroup>
  );
}
