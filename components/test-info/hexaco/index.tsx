"use client";
import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import HeroSection from "./HeroSection";
import TestOverviewSection from "./TestOverviewSection";
import HEXACOTraitsSection from "./HEXACOTraitsSection";
import AcademicCitationsSection from "./AcademicCitationsSection";
import ComparisonSection from "./ComparisonSection";

const HexacoTestInformation = () => {
  return (
    <main>
      <TooltipProvider>
        <HeroSection />
        <TestOverviewSection />
        <HEXACOTraitsSection />
        <AcademicCitationsSection />
        <ComparisonSection />
      </TooltipProvider>
    </main>
  );
};

export default HexacoTestInformation;
