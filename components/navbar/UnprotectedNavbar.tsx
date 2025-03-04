"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MenuSection } from "./MenuSection";
import { MobileMenuSection } from "./mobile-menu/MobileMenuSection";
import { assessmentItems, communityItems } from "@/data/navbar";
import { MobileMenuItem } from "./mobile-menu/MobileMenuItem";
import CQLogo from "../cq-logo";

const UnprotectedNavbar = (props: { className?: string }) => {
  // ...existing code from the current navbar component...
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const prevScrollY = useRef(0);

  // ...existing scroll handling useEffect...
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
    "fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50",
    {
      "bg-white/0 backdrop-blur-none": isAtTop,
      "bg-white/50 backdrop-blur-md shadow-sm": !isAtTop && scrollDirection === "down",
      "-translate-y-full": scrollDirection === "up" && !isAtTop,
    },
    `${props.className}`
  );

  return (
    <header className={navbarClasses}>
      {/* ...existing header content... */}
      <div className="flex h-24 items-center px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 items-center w-full">
          {/* Logo - Left column */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <CQLogo className="w-36 h-36" />
            </Link>
          </div>

          {/* Navigation - Center column */}
          <div className="hidden lg:flex justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {/* ...existing navigation menu items... */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-auto p-2 bg-transparent">
                    <Link href="/tests">
                      <span className="flex items-center text-base">
                        Assessments
                      </span>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MenuSection data={assessmentItems} />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-auto p-2 bg-transparent">
                    <Link href="/community">
                      <span className="flex items-center text-base">
                        Community
                      </span>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MenuSection data={communityItems} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuViewport className="origin-top-center" />
            </NavigationMenu>
          </div>

          {/* Auth Buttons and Mobile Menu - Right column */}
          <div className="flex justify-end items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" className="text-base">
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button variant="default" className="text-base">
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden absolute top-5 right-4">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] p-0 flex flex-col"
                >
                  <SheetHeader className="border-b p-4">
                    <SheetTitle className="flex items-center space-x-2">
                      Menu
                    </SheetTitle>
                    <VisuallyHidden>
                      <SheetDescription>
                        Cerebral Quotient navigation menu
                      </SheetDescription>
                    </VisuallyHidden>
                  </SheetHeader>

                  <div className="flex-grow overflow-y-auto">
                    <div className="space-y-2 p-4">
                      {/* Mobile Assessment Items */}
                      <div className="space-y-2 pb-4 border-b">
                        <MobileMenuSection
                          title="Assessments"
                          data={assessmentItems}
                          setIsSheetOpen={setIsSheetOpen}
                        />
                      </div>

                      {/* Mobile Community Items */}
                      <div className="space-y-2 pb-4 border-b">
                        <MobileMenuSection
                          title="Community"
                          data={communityItems}
                          setIsSheetOpen={setIsSheetOpen}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Auth Buttons */}
                  <div className="sticky bottom-0 left-0 right-0 p-4 border-t bg-white space-y-2">
                    <Button
                      variant="outline"
                      className="w-full text-base"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Link href="/sign-in">Sign In</Link>
                    </Button>
                    <Button
                      variant="default"
                      className="w-full text-base"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Link href="/sign-up">Get Started</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UnprotectedNavbar;
