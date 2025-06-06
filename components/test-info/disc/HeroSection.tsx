"use client";

import SharedHeroSection, { type CtaConfig } from "../shared/SharedHeroSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const DiscVisual = () => (
  <div className="relative w-full max-w-md">
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
  </div>
);

const HeroSection = () => {
  const ctaConfigs: CtaConfig[] = [
    {
      type: 'button',
      buttonText: "Take the Test Now",
      items: [{ text: "DISC Test", href: "/start-test/disc" }],
      icon: ArrowRight,
    }
  ];

  return (
    <SharedHeroSection
      testTypeBadgeText="DISC Behavioral Assessment"
      mainHeadline={<>Unlock Your <span className="italic font-extrabold">Behavioral</span> Style</>}
      subHeadline="Discover how you communicate, lead, and interact with others through this powerful assessment of your natural behavioral tendencies."
      ctaConfigs={ctaConfigs}
      visualRepresentation={<DiscVisual />}
    />
  );
};

export default HeroSection;
