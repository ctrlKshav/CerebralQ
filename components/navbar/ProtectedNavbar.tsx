"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, LogOut, Settings, User as UserIcon } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MenuSection } from "./MenuSection";
import { MobileMenuSection } from "./mobile-menu/MobileMenuSection";
import { assessmentItems, protectedCommunityItems } from "@/data/navbar";
import { MobileMenuItem } from "./mobile-menu/MobileMenuItem";
import CQLogo from "../cq-logo";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@supabase/supabase-js";
import LogoutButton from "@/components/logout-button";

interface ProtectedNavbarProps {
  className?: string;
  user: User;
  username?: string | null;
}

const ProtectedNavbar = ({
  className,
  user,
  username,
}: ProtectedNavbarProps) => {
  const router = useRouter();
  const supabase = createClient();
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
    `${className}`
  );

  const getUserInitials = () => {
    if (username) {
      return username.substring(0, 2).toUpperCase();
    }
    return "CQ";
  };

  return (
    <header className={navbarClasses}>
      <div className="flex h-24 items-center px-4 max-w-7xl mx-auto">
        {/* Three-column layout */}
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
                {/* Assessments Menu */}
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
                    <MenuSection data={protectedCommunityItems} />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Dashboard */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-auto w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50"
                    )}
                    href={`/profiles/${username}`}
                  >
                    Dashboard
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuViewport className="origin-top-center" />
            </NavigationMenu>
          </div>

          {/* User Profile and Mobile Menu - Right column */}
          <div className="flex justify-end items-center space-x-4">
            {/* User Dropdown - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={user?.user_metadata?.avatarUrl}
                        alt={username || ""}
                      />
                      <AvatarFallback>{getUserInitials()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 " align="end" forceMount>
                  <div className="flex flex-col space-y-1 p-2">
                    <p className="text-lg font-medium leading-none">
                      {username || "User"}
                    </p>
                    <p className="text-sm leading-none text-muted-foreground">
                      {user.email || ""}
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="text-md">
                    <Link href="/account">
                      <UserIcon className="mr-2 h-4 w-4" />
                      <span>Account</span>
                    </Link>
                  </DropdownMenuItem>
                 
                  <DropdownMenuItem>
                    <LogoutButton />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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

                  {/* User Info Box for Mobile */}
                  <div className="p-4 border-b">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={user?.user_metadata?.avatarUrl}
                          alt={username || ""}
                        />
                        <AvatarFallback>{getUserInitials()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">
                          {username || "User"}
                        </p>
                        <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                          {user.email || ""}
                        </p>
                      </div>
                    </div>
                  </div>

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
                          data={protectedCommunityItems}
                          setIsSheetOpen={setIsSheetOpen}
                        />
                      </div>

                      <div className="space-y-2 pb-4 border-b">
                        <MobileMenuItem
                          href="/profile"
                          isSheetOpen={isSheetOpen}
                          setIsSheetOpen={setIsSheetOpen}
                          title="Profile"
                        />
                        <MobileMenuItem
                          href="/settings"
                          isSheetOpen={isSheetOpen}
                          setIsSheetOpen={setIsSheetOpen}
                          title="Settings"
                        />
                        <MobileMenuItem
                          href={`/profiles/${username}`}
                          isSheetOpen={isSheetOpen}
                          setIsSheetOpen={setIsSheetOpen}
                          title="Dashboard"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Logout Button */}
                  <div className="sticky bottom-0 left-0 right-0 px-4 py-8 border-t">
                    <LogoutButton />
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

export default ProtectedNavbar;
