import HeroSection from "@/components/test-info/ocean/HeroSection";
import TestOverviewSection from "@/components/test-info/ocean/TestOverviewSection";
import AcademicCitationsSection from "@/components/test-info/ocean/AcademicCitationsSection";
import BigFiveTraitsSection from "@/components/test-info/ocean/BigFiveTraits";
import MbtiTestSection from "@/components/test-info/ocean/MbtiTestSection";
import TestVariantsSection from "@/components/test-info/ocean/TestVariantsSection";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function OceanTestInformation() {
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-b dark:from-gray-950 dark:to-background">
      <TooltipProvider>
        <HeroSection />
        <div id="test-overview">
          <TestOverviewSection />
        </div>
        <BigFiveTraitsSection />
        <div id="test-variants">
          <TestVariantsSection />
        </div>
        <AcademicCitationsSection />
        <MbtiTestSection />
      </TooltipProvider>
    </main>
  );
}
