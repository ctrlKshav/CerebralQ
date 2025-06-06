"use client";

import SharedHeroSection, { type CtaConfig } from "../shared/SharedHeroSection";
import { motion } from "framer-motion";

const OceanVisual = () => (
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
                animate={{ width: `${Math.random() * 100}%` }} // Example random width
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
);

const HeroSection = () => {
  const ctaConfigs: CtaConfig[] = [
    {
      type: 'dropdown',
      buttonText: "Take the Test Now",
      items: [
        { text: "BFI-44", href: "/start-test/ocean/bfi-44", subtext: "Quick (5-10 min)" },
        { text: "IPIP-120", href: "/start-test/ocean/ipip-120", subtext: "Standard (15-20 min)" },
        { text: "IPIP-300", href: "/start-test/ocean/ipip-300", subtext: "Comprehensive (30-40 min)" },
      ],
      helperText: "Free • No registration required • Choose your test",
    }
  ];

  return (
    <SharedHeroSection
      testTypeBadgeText="OCEAN / Big Five Personality Test"
      mainHeadline={<>Discover Who You <span className="italic font-extrabold">Really</span> Are</>}
      subHeadline="A scientifically-validated personality assessment based on the Big Five model—revealing your true traits in just 10 minutes."
      ctaConfigs={ctaConfigs}
      visualRepresentation={<OceanVisual />}
      showWaveAnimation={true}
    />
  );
};

export default HeroSection;
