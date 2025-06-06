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
        className="mx-auto px-4 xs:px-8 sm:px-12 md:px-16 lg:px-24 py-8 sm:py-12 lg:py-16 relative z-10"
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
                OCEAN / Big Five Personality Test
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-primary dark:text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Discover Who You <span className="italic font-extrabold">Really</span> Are
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-2xl mb-8 text-primary/90 dark:text-foreground/90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              A scientifically-validated personality assessment based on the Big Five model—revealing your true traits in just 10 minutes.
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
                  <Link href="/start-test/ocean/bfi-44">
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex flex-col">
                        <span className="font-medium">BFI-44</span>
                        <span className="text-xs text-muted-foreground">Quick (5-10 min)</span>
                      </div>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/start-test/ocean/ipip-120">
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex flex-col">
                        <span className="font-medium">IPIP-120</span>
                        <span className="text-xs text-muted-foreground">Standard (15-20 min)</span>
                      </div>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/start-test/ocean/ipip-300">
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex flex-col">
                        <span className="font-medium">IPIP-300</span>
                        <span className="text-xs text-muted-foreground">Comprehensive (30-40 min)</span>
                      </div>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
              <p className="text-primary/80 dark:text-foreground/80 text-sm ml-1">Free • No registration required • Choose your test</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-md mx-auto">

              {/* Ocean Test Certificate */}
              <div className="relative bg-white dark:bg-card rounded-lg p-6 shadow-xl transform transition-all hover:rotate-3 border border-primary/20 dark:border-muted overflow-hidden">
                {/* Certificate header */}
                <div className="text-center mb-4 pb-2 border-b border-primary/20 dark:border-muted">
                  <div className="flex justify-center mb-2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/90 to-primary/70 flex items-center justify-center text-white dark:text-primary-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-8a2 2 0 1 0 2 2 2 2 0 0 0-2-2z"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-primary dark:text-card-foreground">OCEAN Test Results</h3>
                  <p className="text-sm text-primary/70 dark:text-muted-foreground">Personality Assessment</p>
                </div>

                {/* Certificate content */}
                <div className="space-y-3">
                  {["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"].map((trait, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary/70 mr-3"></div>
                      <div className="text-primary dark:text-card-foreground font-medium text-sm">{trait}</div>
                      <div className="ml-auto h-2 bg-primary/10 dark:bg-muted rounded-full w-24 lg:w-32">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.random() * 100}%` }}
                          transition={{ duration: 1, delay: 0.7 + (i * 0.1) }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certificate footer */}
                <div className="mt-6 pt-4 border-t border-primary/20 dark:border-muted text-center">
                  <div className="text-xs text-primary/60 dark:text-muted-foreground">Completed on April 8, 2025</div>
                  <div className="mt-2 flex justify-center">
                    <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className="h-6 text-primary/50 dark:text-white/50">
                      <path d="M0,20 Q25,5 50,20 T100,20" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
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

export default HeroSection;
