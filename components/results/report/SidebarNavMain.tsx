"use client";

import { type LucideIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

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

export function SidebarNavMain({
  items,
}: {
  items: SidebarNavDataType["navMain"];
}) {
  const { activeSection, setActiveSection, isMobile, setOpenMobile } =
    useSidebar();

  const handleScroll = () => {
    const sections = items.map((item) => ({
      id: item.url.replace("#", ""),
      title: item.title,
    }));

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
    window.addEventListener("scroll", handleScroll);
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

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sm font-semibold mb-4 pl-3 tracking-wide text-slate-600 dark:text-slate-300">
        Sections
      </SidebarGroupLabel>
      <SidebarMenu className="gap-2">
        {items.map((item) => {
          const isActive = item.title === activeSection;

          return (
            <SidebarMenuItem
              key={item.title}
              className="my-1.5"
              id={item.title}
            >
              <SidebarMenuButton
                variant={"default"}
                asChild
                tooltip={item.title}
                isActive={isActive}
                onClick={() => setOpenMobile(false)}
                className={cn(
                  "h-12 px-3 py-3 text-base font-medium transition-all duration-200 rounded-xl relative overflow-hidden",
                  "hover:translate-x-1",
                  isActive
                    ? "bg-white dark:bg-slate-800 shadow-md"
                    : "hover:bg-white/50 dark:hover:bg-slate-800/50"
                )}
                style={{
                  boxShadow: isActive ? `0 4px 12px ${item.bgColor}` : "",
                }}
              >
                <Link href={item.url} className="flex items-center gap-3">
                  {/* Icon wrapper with background */}
                  <div
                    className={cn(
                      "flex items-center justify-center rounded-lg p-2 transition-all duration-200",
                      isActive ? "scale-110" : "scale-100"
                    )}
                    style={{
                      backgroundColor: "transparent",
                    }}
                  >
                    <item.icon
                      className="size-5 flex-shrink-0"
                      style={{
                        color: isActive ? item.color : "currentColor",
                        transition: "color 0.2s ease, transform 0.2s ease",
                        transform: isActive ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                  </div>

                  {/* Title with custom styling */}
                  <span
                    className={cn(
                      "truncate transition-all duration-200",
                      isActive ? "font-semibold" : ""
                    )}
                    style={{
                      color: isActive ? item.color : "currentColor",
                    }}
                  >
                    {item.title}
                  </span>

                  {/* Active indicator */}
                  {isActive && (
                    <div
                      className="absolute right-0 top-0 h-full w-1 rounded-l-full"
                      style={{ backgroundColor: item.color }}
                    />
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
