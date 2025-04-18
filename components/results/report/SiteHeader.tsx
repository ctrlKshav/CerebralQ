"use client";

import { SidebarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar-custom";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import CQLogo from "@/components/CQLogo";

interface ReportHeaderProps {
  firstname?: string | null;
}

export function ReportHeader({ firstname }: ReportHeaderProps) {
  const { toggleSidebar, open, openMobile, isMobile, activeSection } =
    useSidebar();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [isAtTop, setIsAtTop] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY === 0);

      if (currentScrollY > prevScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < prevScrollY.current) {
        setScrollDirection("up");
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = cn(
    "fixed top-0 left-0 right-0 w-full bg-background transition-all duration-300 z-50",
    {
      "bg-white/0 backdrop-blur-none": isAtTop,
      "bg-background/20 backdrop-blur-md shadow-sm":
        !isAtTop && scrollDirection === "down",
      "-translate-y-full":
        scrollDirection === "up" &&
        !isAtTop &&
        (isMobile ? !openMobile : !open),
    }
  );

  // Create greeting message
  const greeting = firstname ? `Hello, ${firstname}` : "Hello, User";

  return (
    <header className={navbarClasses}>
      <div className="flex h-[--header-height] w-full max-w-7xl mx-auto items-center px-4 ">
        {/* Three-column layout */}
        <div className="grid grid-cols-3 items-center  w-full ">
          {/* Logo - Left column */}
          <div className="flex items-center  ">
            <Link href="/" className="flex items-center space-x-2">
              <CQLogo className="w-24 h-24 sm:w-28 sm:h-28" />
            </Link>
          </div>

          {/* Middle column - Section title */}
          <div
            className={`${isMobile ? "hidden" : "flex"} w-full justify-center `}
          >
            <div className="relative">
              <h1 className="text-xl font-semibold tracking-tight text-foreground py-1 px-3 rounded-md relative">
                {activeSection}
              </h1>
            </div>
          </div>

          {/* Right column - Greeting */}
          <div
            className={`flex  justify-center ${isMobile ? "justify-self-center" : "justify-self-end"} `}
          >
            <p className="text-md font-medium text-foreground text-center px-2">
              {greeting}
            </p>
          </div>

          {isMobile && (
            <div className="transition-all w-fit justify-self-end duration-300 ease-in-out   ">
              <SidebarTrigger
                className={
                  "h-10 w-10 bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent"
                }
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
