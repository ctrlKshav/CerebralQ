"use client"
import React, { useState, useEffect, useRef } from "react"
import { Brain, FlaskConical, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  NavigationMenuViewport 
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription,  SheetTrigger } from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

import { cn } from "@/lib/utils"

import { MobileMenuItem } from "@/components/navbar/mobile-menu/MobileMenuItem"
import { MobileSection } from "@/components/navbar/mobile-menu/MobileMenuSection"

import { MenuSection } from "@/components/navbar/MenuSection"
import  Link  from "next/link"

const Navbar: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false)
  
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const [isAtTop, setIsAtTop] = useState(true)
  const prevScrollY = useRef(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsAtTop(currentScrollY === 0)
  
      if (currentScrollY > prevScrollY.current) {
        setScrollDirection("down")
      } else if (currentScrollY < prevScrollY.current) {
        setScrollDirection("up")
      }
  
      prevScrollY.current = currentScrollY
    }
  
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  

  const navbarClasses = cn("fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50", {
    "bg-white/0 backdrop-blur-none": isAtTop,
    "bg-white/50 backdrop-blur-md shadow-sm": !isAtTop && scrollDirection === "down",
    "-translate-y-full": scrollDirection === "up" && !isAtTop,
  })

  return (
    <header className={navbarClasses}>
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between space-x-4 lg:space-x-12 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2"> 
            <Brain className="h-8 w-8" color="blue" />
            <span className="text-2xl font-semibold">Cerebral Quotient</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Products Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-auto p-2 bg-transparent">
                    <Link href="/products">
                      <span className="flex items-center text-base">Products</span>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>

                    <MenuSection />
                    
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-auto w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-primary hover:text-background focus:bg-primary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50",
                    )}
                    href="https://c4e.in/"
                    target="_blank"
                  >
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Pricing Menu Item */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-auto w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-primary hover:text-background focus:bg-primary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50",
                    )}
                    href="/coming-soon"
                  >
                    Community
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
              <NavigationMenuViewport className="origin-top-center" />
            </NavigationMenu>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="hidden sm:block">
              <Button variant={"default"} className="text-base">
                <Link href="/">Get Started</Link>
              </Button>
            </div>
          </div>

           {/* Mobile Menu */}
           <div className="lg:hidden order-last ml-4">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="default" size="icon">
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
                    <span>Cerebral Quotient</span>
                  </SheetTitle>
                  
                  <VisuallyHidden>
                  <SheetDescription>
                    Explore innovative micro SaaS projects and transform your ideas into reality
                  </SheetDescription>
                  </VisuallyHidden>
                </SheetHeader>

                {/* Scrollable Menu Content */}
                <div className="flex-grow overflow-y-auto">
                  <div className="space-y-2 pb-20">
                    <MobileSection title="Products" setIsSheetOpen={setIsSheetOpen} />

                    {/* Direct Links */}
                    <div className="border-b">
                      <MobileMenuItem href="https://c4e.in/" isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen}>
                        Blog
                      </MobileMenuItem>
                      <MobileMenuItem href="/coming-soon" isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen}>
                        Community
                      </MobileMenuItem>
                    </div>
                  </div>
                </div>

                {/* Sticky Bottom Auth Buttons */}
                <div className="sticky bottom-0 left-0 right-0 p-4 border-t bg-white">
                  <Button variant="default" className="w-full text-base" onClick={() => setIsSheetOpen(false)}>
                    <Link href="/">Get Started</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar