"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import WaveAnimation from "./WaveAnimation"; // Assuming WaveAnimation.tsx is in the same shared folder
import React from 'react';

export type CtaItem = {
  text: string;
  href: string;
  subtext?: string;
};

export type CtaConfig = {
  type: 'button' | 'dropdown';
  buttonText: string;
  items: CtaItem[];
  buttonVariant?: ButtonProps['variant'];
  buttonSize?: ButtonProps['size'];
  buttonClassName?: string;
  dropdownAlign?: "start" | "center" | "end";
  dropdownWidth?: string; // e.g., "w-56"
  helperText?: React.ReactNode;
  icon?: React.ElementType; // For single button icon like ArrowRight
};

interface SharedHeroSectionProps {
  testTypeBadgeText: string;
  mainHeadline: React.ReactNode;
  subHeadline: string;
  ctaConfigs: CtaConfig[];
  visualRepresentation: React.ReactNode;
}

const SharedHeroSection = ({
  testTypeBadgeText,
  mainHeadline,
  subHeadline,
  ctaConfigs,
  visualRepresentation,
}: SharedHeroSectionProps) => {
  const isMobile = useIsMobile();

  return (
    <section className="relative overflow-hidden pb-24 bg-background">
      <div className="absolute inset-0 gradient-to-br from-primary/80 via-primary to-primary-foreground/90 dark:from-primary/70 dark:via-primary/80 dark:to-primary-foreground/80">
        <WaveAnimation isMobile={isMobile} />
      </div>

      <motion.div
        className="mx-auto px-4 xs:px-8 sm:px-12 md:px-16 lg:px-24 py-8 sm:py-12 lg:py-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column: Text Content */}
          <div className="text-primary dark:text-foreground max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 dark:bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary mb-6">
                {testTypeBadgeText}
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-primary dark:text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {mainHeadline}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-2xl mb-8 text-primary/90 dark:text-foreground/90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {subHeadline}
            </motion.p>
            
            {/* CTA Buttons/Dropdowns */}
            <div className="space-y-4">
              {ctaConfigs.map((cta, index) => (
                <div key={index} className="flex flex-col items-start">
                  {cta.type === 'dropdown' ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          size={cta.buttonSize || "lg"}
                          variant={cta.buttonVariant || "default"}
                          className={`font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] ${cta.buttonClassName || ''}`}
                        >
                          {cta.buttonText} <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align={cta.dropdownAlign || "start"} className={cta.dropdownWidth || "w-56"}>
                        {cta.items.map((item, itemIndex) => (
                          <Link href={item.href} key={itemIndex} passHref legacyBehavior>
                            <DropdownMenuItem className="cursor-pointer">
                              <div className="flex flex-col">
                                <span className="font-medium">{item.text}</span>
                                {item.subtext && <span className="text-xs text-muted-foreground">{item.subtext}</span>}
                              </div>
                            </DropdownMenuItem>
                          </Link>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : ( // type === 'button'
                    <Button
                      size={cta.buttonSize || "lg"}
                      variant={cta.buttonVariant || "default"}
                      className={`group ${cta.buttonClassName || ''}`}
                      asChild
                    >
                      <Link href={cta.items[0].href}>
                        {cta.buttonText}
                        {cta.icon && <cta.icon className="ml-1 h-3 w-3 group-hover:ml-2 group-hover:scale-110 transition-all duration-300" />}
                      </Link>
                    </Button>
                  )}
                  {cta.helperText && (
                    <p className="text-primary/80 dark:text-foreground/80 text-sm mt-2 ml-1">
                      {cta.helperText}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 lg:mt-0 w-full max-w-md mx-auto lg:mx-0"
          >
            {visualRepresentation}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>

      <motion.div
        className="absolute inset-0 z-0 text-primary/10 dark:text-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 1.5 }}
      >
        <motion.svg
          viewBox={isMobile ? "0 0 400 200" : "0 0 1000 1000"}
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <motion.path
            d={isMobile
              ? "M0,100 Q100,70 200,100 T400,100 L400,200 L0,200 Z"
              : "M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z"
            }
            fill="currentColor"
            animate={{
              d: isMobile ? [
                "M0,100 Q100,70 200,100 T400,100 L400,200 L0,200 Z",
                "M0,100 Q100,130 200,100 T400,100 L400,200 L0,200 Z",
                "M0,100 Q100,70 200,100 T400,100 L400,200 L0,200 Z"
              ] : [
                "M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z",
                "M0,500 Q250,600 500,500 T1000,500 L1000,1000 L0,1000 Z",
                "M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z"
              ]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 8,
              ease: "easeInOut"
            }}
          />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default SharedHeroSection;
