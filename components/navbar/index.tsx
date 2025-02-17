"use client";
import React, { useState, useEffect, useRef } from "react";
import { Brain, Menu, UserCircle, BarChart2, Users } from "lucide-react";
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
import { MobileSection } from "./mobile-menu/MobileMenuSection";
import { assessmentItems, communityItems } from "@/data/navbar";
import { MobileMenuItem } from "./mobile-menu/MobileMenuItem";

const Navbar = () => {
  // ... (previous state and scroll handling code remains the same)
  const [isSheetOpen, setIsSheetOpen] = useState(false);
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
    "fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50",
    {
      "bg-white/0 backdrop-blur-none": isAtTop,
      "bg-white/50 backdrop-blur-md shadow-sm":
        !isAtTop && scrollDirection === "down",
      "-translate-y-full": scrollDirection === "up" && !isAtTop,
    }
  );

  return (
    <header className={navbarClasses}>
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        {/* Three-column layout */}
        <div className="grid grid-cols-3 items-center w-full">
          {/* Logo - Left column */}
          <div className="flex items-center ">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8" color="blue" />
              <span className="text-2xl font-semibold hidden sm:block">
                Cerebral Quotient
              </span>
              <span className="text-2xl font-semibold block sm:hidden">CQ</span>
            </Link>
          </div>

          {/* Navigation - Center column */}
          <div className="hidden lg:flex  justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Assessments Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-auto p-2 bg-transparent">
                    <Link href="/assessments">
                      <span className="flex items-center text-base">
                        Assessments
                      </span>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MenuSection data={assessmentItems} />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Community */}
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

                {/* Profile */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-auto w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-primary hover:text-background focus:bg-primary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50"
                    )}
                    href="/profile"
                  >
                    Profile
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuViewport className="origin-top-center" />
            </NavigationMenu>
          </div>

          {/* Auth Buttons and Mobile Menu - Right column */}
          <div className="flex justify-end items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" className="text-base">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button variant="default" className="text-base">
                <Link href="/register">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden absolute top-3 right-4">
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
                      <Brain className="h-6 w-6" color="blue" />
                      <span>CQ</span>
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
                        <MobileSection
                          title="Assessments"
                          data={assessmentItems}
                          setIsSheetOpen={setIsSheetOpen}
                        />
                      </div>

                      {/* Mobile Community Items */}
                      <div className="space-y-2 pb-4 border-b">
                        <MobileSection
                          title="Community"
                          data={communityItems}
                          setIsSheetOpen={setIsSheetOpen}
                        />
                      </div>

                      <div className="space-y-2 pb-4 border-b">
                        <MobileMenuItem
                          href=""
                          isSheetOpen={isSheetOpen}
                          setIsSheetOpen={setIsSheetOpen}
                          title="Profile" />
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
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Button
                      variant="default"
                      className="w-full text-base"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Link href="/register">Get Started</Link>
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

export default Navbar;
