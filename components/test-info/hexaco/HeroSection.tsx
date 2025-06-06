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
        className="max-w-7xl mx-auto px-4 xs:px-8 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10"
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
              <Button className="group">
                <Link href="/start-test/hexaco" >Take the Test Now</Link>
                <ArrowRight className="ml-1 h-3 w-3 group-hover:ml-2 group-hover:scale-110 transition-all duration-300" />
              </Button>

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

              {/* Hexagonal Visualization - Compact Version */}
              <div className="relative h-48 w-full mb-4">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Outer hexagon */}
                  <polygon
                    points="100,20 180,60 180,140 100,180 20,140 20,60"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.2"
                    strokeWidth="1"
                  />

                  {/* Grid lines */}
                  <polygon
                    points="100,50 160,80 160,120 100,150 40,120 40,80"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    strokeWidth="1"
                    strokeDasharray="4,2"
                  />

                  {/* Center lines */}
                  <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
                  <line x1="20" y1="60" x2="180" y2="140" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
                  <line x1="20" y1="140" x2="180" y2="60" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />

                  {/* Trait labels */}
                  <text x="100" y="15" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="600">H</text>
                  <text x="185" y="60" textAnchor="start" fill="currentColor" fontSize="10" fontWeight="600">E</text>
                  <text x="185" y="140" textAnchor="start" fill="currentColor" fontSize="10" fontWeight="600">X</text>
                  <text x="100" y="195" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="600">A</text>
                  <text x="15" y="140" textAnchor="end" fill="currentColor" fontSize="10" fontWeight="600">C</text>
                  <text x="15" y="60" textAnchor="end" fill="currentColor" fontSize="10" fontWeight="600">O</text>

                  {/* Data area */}
                  <motion.polygon
                    points="100,40 160,70 140,130 100,160 60,130 40,70"
                    fill="rgba(99, 102, 241, 0.15)"
                    stroke="rgb(99, 102, 241)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    initial={{ opacity: 0, scale: 0.8, transformOrigin: "center" }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />

                  {/* Data points */}
                  {[
                    [100, 40],  // H
                    [160, 70],  // E
                    [140, 130], // X
                    [100, 160], // A
                    [60, 130],  // C
                    [40, 70]    // O
                  ].map((point, i) => (
                    <motion.circle
                      key={i}
                      cx={point[0]}
                      cy={point[1]}
                      r="3"
                      fill="white"
                      stroke="rgb(99, 102, 241)"
                      strokeWidth="1.5"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + (i * 0.1),
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                      }}
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
