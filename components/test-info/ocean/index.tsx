import HeroSection from "@/components/test-info/ocean/HeroSection";
import TestOverviewSection from "@/components/test-info/ocean/TestOverviewSection";
import AcademicCitationsSection from "@/components/test-info/ocean/AcademicCitationsSection";
import BigFiveTraitsSection from "@/components/test-info/ocean/BigFiveTraits";
import TestVariantsSection from "@/components/test-info/ocean/TestVariantsSection";
import { TooltipProvider } from "@/components/ui/tooltip";
import RecommendedTestSection from "./RecommendedTestSection";

export default function OceanTestInformation() {

  return (
    <main>
      <TooltipProvider>
        <HeroSection />
        <TestOverviewSection />
        <BigFiveTraitsSection />
        <TestVariantsSection />
        <AcademicCitationsSection />
        <RecommendedTestSection />
      </TooltipProvider>
    </main>
  );
}
