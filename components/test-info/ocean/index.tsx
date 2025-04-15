"use client";

import HeroSection from "@/components/test-info/ocean/HeroSection";
import TestOverviewSection from "@/components/test-info/ocean/TestOverviewSection";
import AcademicCitationsSection from "@/components/test-info/ocean/AcademicCitationsSection";
import BigFiveTraitsSection from "@/components/test-info/ocean/BigFiveTraits";
import MbtiTestSection from "@/components/test-info/ocean/MbtiTestSection";

export default function OceanTestInformation() {
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-b dark:from-gray-950 dark:to-background">
      <HeroSection />
      <TestOverviewSection />
      <BigFiveTraitsSection />
      <AcademicCitationsSection />
      <MbtiTestSection />
    </main>
  );
}
