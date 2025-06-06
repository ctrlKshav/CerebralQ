import HeroSection from "@/components/test-info/disc/HeroSection";
import TestOverviewSection from "@/components/test-info/disc/TestOverviewSection";
import DISCTraitsSection from "@/components/test-info/disc/DISCTraitsSection";
import AcademicCitationsSection from "@/components/test-info/disc/AcademicCitationsSection";
import ComparisonSection from "@/components/test-info/disc/ComparisonSection";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DISCTestInformation() {
  return (
    <main>
      <TooltipProvider>
        <HeroSection />
        <TestOverviewSection />
        <DISCTraitsSection />
        <ComparisonSection />
        <AcademicCitationsSection />
      </TooltipProvider>
    </main>
  );
}
