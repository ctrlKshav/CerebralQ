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
                DISC Behavioral Assessment
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-primary dark:text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Unlock Your <span className="italic font-extrabold">Behavioral</span> Style
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-2xl mb-8 text-primary/90 dark:text-foreground/90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Discover how you communicate, lead, and interact with others through this powerful assessment of your natural behavioral tendencies.
            </motion.p>
            <div className="space-y-3">
              <Button className="group">
                <Link href="/start-test/disc" >Take the Test Now</Link>
                <ArrowRight className="ml-1 h-3 w-3 group-hover:ml-2 group-hover:scale-110 transition-all duration-300" />
              </Button>

            </div>
          </div>

          {/* Visual representation of the DISC assessment */}
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
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-8a2 2 0 1 0 2 2 2 2 0 0 0-2-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary dark:text-card-foreground ml-3">DISC Profile</h3>
                </div>
                <p className="text-sm text-primary/70 dark:text-muted-foreground">Behavioral Assessment</p>
              </div>

              {/* DISC Profile Visualization */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "D - Dominance", color: "bg-red-500", value: 68 },
                  { label: "I - Influence", color: "bg-yellow-500", value: 82 },
                  { label: "S - Steadiness", color: "bg-green-500", value: 45 },
                  { label: "C - Conscientiousness", color: "bg-blue-500", value: 73 }
                ].map((trait, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-primary dark:text-card-foreground">{trait.label}</span>
                      <span className="text-xs text-primary/70 dark:text-muted-foreground">{trait.value}%</span>
                    </div>
                    <div className="h-2 bg-primary/10 dark:bg-muted rounded-full">
                      <motion.div
                        className={`h-full ${trait.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${trait.value}%` }}
                        transition={{ duration: 1, delay: 0.7 + (i * 0.1) }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Primary Style */}
              <div className="bg-primary/5 dark:bg-primary-foreground/5 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-semibold text-primary dark:text-card-foreground mb-2">Primary Style: Influencer</h4>
                <p className="text-xs text-primary/70 dark:text-muted-foreground">
                  You're naturally enthusiastic, optimistic, and people-oriented. You excel at motivating others and building relationships.
                </p>
              </div>

              {/* Certificate footer */}
              <div className="pt-4 border-t border-primary/20 dark:border-muted text-center">
                <div className="text-xs text-primary/60 dark:text-muted-foreground">Completed on May 15, 2025</div>
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
