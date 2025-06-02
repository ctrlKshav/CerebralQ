"use client";
import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import HeroSection from "./HeroSection";
import TestOverviewSection from "./TestOverviewSection";
import HEXACOTraitsSection from "./HEXACOTraitsSection";
import TestVariantsSection from "./TestVariantsSection";
import AcademicCitationsSection from "./AcademicCitationsSection";
import ComparisonSection from "./ComparisonSection";

const HexacoTestInformation = () => {
  return (
    <TooltipProvider>
      <HeroSection />
      <TestOverviewSection />
      <HEXACOTraitsSection />
      <TestVariantsSection />
      <AcademicCitationsSection />
      <ComparisonSection />
    </TooltipProvider>
  );
};

export default HexacoTestInformation;
