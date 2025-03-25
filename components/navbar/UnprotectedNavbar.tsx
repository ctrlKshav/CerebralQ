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
import CQLogo from "../CQLogo";


const UnprotectedNavbar = (props: { className?: string }) => {
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
      "bg-background/20 backdrop-blur-md shadow-sm":
        !isAtTop && scrollDirection === "down",
      "-translate-y-full": scrollDirection === "up" && !isAtTop,
    },
    `${props.className}`
  );

  return (
    <header className={navbarClasses}>
      <div className="flex h-24 items-center px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 items-center w-full">
          {/* Logo - Left column */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <CQLogo className="w-24 h-24 sm:w-28 sm:h-28" />
            </Link>
          </div>

          {/* Navigation - Center column */}
          <div className="hidden lg:flex justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Newsletter Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="h-auto w-max rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50"
                    href="/sign-up?source=newsletter"
                  >
                    Newsletter coming soon! Click{" "}
                    <span className="font-bold">here</span> to sign up.
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
                      {/* Mobile Newsletter Link */}

                      <MobileMenuItem
                        href={`/sign-up?source=newsletter`}
                        isSheetOpen={isSheetOpen}
                        setIsSheetOpen={setIsSheetOpen}
                        title="Newsletter"
                      />

                      <MobileMenuItem
                        href={`/blog`}
                        isSheetOpen={isSheetOpen}
                        setIsSheetOpen={setIsSheetOpen}
                        title="Blog"
                      />
                    </div>
                  </div>

                  {/* Mobile Auth Buttons */}
                  <div className="sticky bottom-0 left-0 right-0 px-4 py-8 border-t space-y-2">
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
