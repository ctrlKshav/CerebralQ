import HeroSection from "@/components/test-info/disc/HeroSection";
import TestOverviewSection from "@/components/test-info/disc/TestOverviewSection";
import DISCTraitsSection from "@/components/test-info/disc/DISCTraitsSection";
import TestVariantsSection from "@/components/test-info/disc/TestVariantsSection";
import AcademicCitationsSection from "@/components/test-info/disc/AcademicCitationsSection";
import ComparisonSection from "@/components/test-info/disc/ComparisonSection";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DISCTestInformation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-b dark:from-gray-950 dark:to-background">
      <TooltipProvider>
        <HeroSection />
        <TestOverviewSection />
        <DISCTraitsSection />
        <TestVariantsSection />
        <ComparisonSection />
        <AcademicCitationsSection />
      </TooltipProvider>
    </main>
  );
}
