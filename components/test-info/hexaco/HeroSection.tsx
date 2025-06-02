"use client";
import { Button } from "@/components/ui/button";
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
import WaveAnimation from "../shared/WaveAnimation";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative overflow-hidden pb-24 bg-background">
      <div className="absolute inset-0 gradient-to-br from-primary/80 via-primary to-primary-foreground/90 dark:from-primary/70 dark:via-primary/80 dark:to-primary-foreground/80">
        {/* Using the reusable wave animation component */}
        <WaveAnimation isMobile={isMobile} />
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-primary dark:text-foreground max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 dark:bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary mb-6">
                HEXACO Personality Assessment
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-primary dark:text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Explore the <span className="italic font-extrabold">Six Dimensions</span> of Your Personality
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-2xl mb-8 text-primary/90 dark:text-foreground/90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Discover your unique personality profile with the scientifically-validated HEXACO model—revealing deeper insights than traditional assessments.
            </motion.p>
            <div className="space-y-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    size="lg"
                    variant="default"
                    className="font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
                  >
                    Take the Test Now <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <Link href="/start-test/hexaco/hexaco-60">
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex flex-col">
                        <span className="font-medium">HEXACO-60</span>
                        <span className="text-xs text-muted-foreground">Standard (10-15 min)</span>
                      </div>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/start-test/hexaco/hexaco-100">
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex flex-col">
                        <span className="font-medium">HEXACO-100</span>
                        <span className="text-xs text-muted-foreground">Comprehensive (20-25 min)</span>
                      </div>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/start-test/hexaco/hexaco-200">
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex flex-col">
                        <span className="font-medium">HEXACO-200</span>
                        <span className="text-xs text-muted-foreground">Professional (35-45 min)</span>
                      </div>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <div className="flex items-center mt-4">
                <Link href="#overview" className="text-primary/80 dark:text-foreground/80 hover:text-primary dark:hover:text-foreground text-sm font-medium flex items-center transition-colors">
                  Learn more about HEXACO
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
                <div className="mx-3 h-1 w-1 rounded-full bg-primary/30 dark:bg-foreground/30"></div>
                <span className="text-primary/60 dark:text-foreground/60 text-sm">
                  Trusted by <span className="font-medium">800K+</span> individuals
                </span>
              </div>
            </div>
          </div>
          
          {/* Visual representation of the HEXACO assessment */}
          <motion.div
            className="relative w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 dark:border-gray-700/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary-foreground/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary dark:text-primary-foreground">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary dark:text-card-foreground ml-3">HEXACO Profile</h3>
                </div>
                <p className="text-sm text-primary/70 dark:text-muted-foreground">Personality Assessment</p>
              </div>
              
              {/* Hexagonal Visualization */}
              <div className="relative h-64 w-full mb-6">
                <svg viewBox="0 0 300 260" className="w-full h-full">
                  {/* Hexagon background */}
                  <polygon 
                    points="150,10 280,75 280,185 150,250 20,185 20,75" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeOpacity="0.2" 
                    strokeWidth="1"
                  />
                  
                  {/* Inner hexagons for scale */}
                  <polygon 
                    points="150,50 240,95 240,165 150,210 60,165 60,95" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeOpacity="0.15" 
                    strokeWidth="1"
                  />
                  
                  <polygon 
                    points="150,90 200,115 200,145 150,170 100,145 100,115" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeOpacity="0.1" 
                    strokeWidth="1"
                  />
                  
                  {/* Axes */}
                  <line x1="150" y1="10" x2="150" y2="250" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
                  <line x1="20" y1="75" x2="280" y2="185" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
                  <line x1="20" y1="185" x2="280" y2="75" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
                  
                  {/* Trait labels */}
                  <text x="150" y="5" textAnchor="middle" fill="currentColor" fontSize="12">H</text>
                  <text x="290" y="75" textAnchor="start" fill="currentColor" fontSize="12">E</text>
                  <text x="290" y="185" textAnchor="start" fill="currentColor" fontSize="12">X</text>
                  <text x="150" y="260" textAnchor="middle" fill="currentColor" fontSize="12">A</text>
                  <text x="10" y="185" textAnchor="end" fill="currentColor" fontSize="12">C</text>
                  <text x="10" y="75" textAnchor="end" fill="currentColor" fontSize="12">O</text>
                  
                  {/* Data polygon - animated via framer-motion in real implementation */}
                  <motion.polygon 
                    points="150,40 230,90 250,170 150,220 70,160 50,90" 
                    fill="rgba(99, 102, 241, 0.2)" 
                    stroke="rgb(99, 102, 241)" 
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0.8, transformOrigin: "center" }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                  
                  {/* Data points */}
                  {[
                    [150, 40], // H
                    [230, 90], // E
                    [250, 170], // X
                    [150, 220], // A
                    [70, 160], // C
                    [50, 90]  // O
                  ].map((point, i) => (
                    <motion.circle 
                      key={i}
                      cx={point[0]} 
                      cy={point[1]} 
                      r="4" 
                      fill="rgb(99, 102, 241)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + (i * 0.1) }}
                    />
                  ))}
                </svg>
              </div>
              
              {/* Summary */}
              <div className="bg-primary/5 dark:bg-primary-foreground/5 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-semibold text-primary dark:text-card-foreground mb-2">Profile Summary</h4>
                <p className="text-xs text-primary/70 dark:text-muted-foreground">
                  Your profile shows high Extraversion and Emotionality with balanced scores across other dimensions, suggesting a socially engaged personality with rich emotional experiences.
                </p>
              </div>
              
              {/* Certificate footer */}
              <div className="pt-3 border-t border-primary/20 dark:border-muted text-center">
                <div className="text-xs text-primary/60 dark:text-muted-foreground">Completed on May 28, 2025</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
