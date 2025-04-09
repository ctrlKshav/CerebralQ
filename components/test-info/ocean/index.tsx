"use client";

import HeroSection from "@/components/test-info/ocean/new/HeroSection";
import TestOverviewSection from "@/components/test-info/ocean/new/TestOverviewSection";
import AcademicCitationsSection from "@/components/test-info/ocean/new/AcademicCitationsSection";
import BigFiveTraitsSection from "@/components/test-info/ocean/new/BigFiveTraitsSection";
import MbtiTestSection from "@/components/test-info/ocean/new/MbtiTestSection";
import { OceanTraitKey } from "@/types/tests/ocean/traits";

// Sample type for the formatted test result
interface FormattedOceanResult {
  id: string;
  type: string;
  personalityType: string;
  label: string;
  description: string;
  date: string;
  traitScores: Record<OceanTraitKey, any>;
  details: any;
}

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
