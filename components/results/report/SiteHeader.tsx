"use client";

import { SidebarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar-custom";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

interface ReportHeaderProps {
  firstname?: string | null;
}

export function ReportHeader({ firstname }: ReportHeaderProps) {
  const { toggleSidebar, open, openMobile, isMobile, activeSection } = useSidebar();
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
      "-translate-y-full": scrollDirection === "up" && !isAtTop && (isMobile ? !openMobile : !open),
    }
  );

  // Create greeting message
  const greeting = firstname ? `Hello, ${firstname}` : "Hello, User";

  return (
    <header className={navbarClasses}>
      <div className="flex h-[--header-height] w-full items-center px-4">
        {/* Three-column layout */}
        <div className="grid grid-cols-3 items-center w-full">
          {/* Left column - Sidebar button */}
          <div className="flex items-center gap-2">
            <Button
              className="h-9 w-9 hover:bg-primary/10 transition-colors"
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
            >
              <SidebarIcon className="h-5 w-5" />
            </Button>
            <Separator orientation="vertical" className="h-6 mx-1" />
            <Link href={"/"} className="text-lg font-medium text-foreground">
              Home
            </Link>
          </div>

          {/* Middle column - Section title */}
          <div className="flex justify-center">
            <div className="relative">
              <h1 className="text-xl font-semibold tracking-tight text-foreground py-1 px-3 rounded-md relative">
                {activeSection}
              </h1>
            </div>
          </div>

          {/* Right column - Greeting */}
          <div className="flex justify-end">
            <p className="text-md font-medium text-foreground px-2">
              {greeting}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
