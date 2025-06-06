"use client";
import { useRef } from "react";
import {
  ArrowRight,
  // ExternalLink, // Not used in the target MbtiTestSection design for the main CTA
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionContainer from "../SectionContainer";
import SectionHeader from "../SectionHeader";
import AnimatedCard from "../AnimatedCard";
import { allTestData, TestRecommendationEntry } from "@/data/test-info/allTestsData";

interface SharedRecommendedTestSectionProps {
  recommendedTestId: string;
  currentTestName?: string; // To customize the SectionHeader
  sectionId?: string;
}

const SharedRecommendedTestSection: React.FC<SharedRecommendedTestSectionProps> = ({
  recommendedTestId,
  currentTestName,
  sectionId = "recommended-test",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const recommendedTest = allTestData.find(test => test.id === recommendedTestId);

  if (!recommendedTest) {
    console.warn(`Recommended test with ID "${recommendedTestId}" not found.`);
    return null;
  }

  // Customize SectionHeader based on currentTestName if provided
  const headerBadge = currentTestName ? "Next Steps" : "Explore More";
  const headerTitle = currentTestName 
    ? `After ${currentTestName}, Discover the ${recommendedTest.name}` 
    : `Explore the ${recommendedTest.name}`;
  const headerDescription = `Deepen your self-awareness with another powerful perspective. The ${recommendedTest.name} offers unique insights into your personality.`;
  
  return (
    <SectionContainer
      ref={sectionRef}
      id={sectionId}
      withDecorations={true}
      className="overflow-hidden" // Added to match original MbtiTestSection styling if needed
    >
      <SectionHeader
        badge={headerBadge}
        title={headerTitle}
        highlightWord={recommendedTest.name.split(' ')[0]} // Highlight first word of recommended test name
        description={headerDescription}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mt-12">
        {/* Left side - Content (Text, details, CTA) */}
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {/* Using fullName for a more descriptive title here */}
            Try the {recommendedTest.fullName}
          </h3>

          <p className="text-base text-muted-foreground mb-5 leading-relaxed">
            {recommendedTest.description}
          </p>
          
          {/* Optional: Placeholder for a generic benefits list or additional info */}
          {/* For now, this part is simplified compared to the original MbtiTestSection's specific bullet points */}
          <div className="bg-muted/50 p-5 rounded-lg border border-muted/80 mb-6 transition-soft">
            <h4 className="text-base font-medium text-foreground mb-3">
              Key Aspects of the {recommendedTest.name}:
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start text-muted-foreground text-sm">
                <div className="mr-3 mt-1 h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0"></div>
                Provides a unique framework for understanding personality.
              </li>
              <li className="flex items-start text-muted-foreground text-sm">
                <div className="mr-3 mt-1 h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0"></div>
                Offers insights into your preferences and behaviors.
              </li>
              <li className="flex items-start text-muted-foreground text-sm">
                <div className="mr-3 mt-1 h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0"></div>
                Helps identify strengths and areas for development.
              </li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            <Link href={recommendedTest.pageUrl} passHref>
              <Button size="lg" className="group">
                {recommendedTest.ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right side - Image */}
        <AnimatedCard className="order-1 md:order-2" delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-muted/20 aspect-[4/3]">
            <img
              src={recommendedTest.imageUrl}
              alt={`${recommendedTest.name} visualization`}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Overlay gradient - kept from original MbtiTestSection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent opacity-50"></div>
            {/* Floating badge - using badgeText from data */}
            {recommendedTest.badgeText && (
              <div className="absolute top-4 right-4 p-2 px-3 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-full shadow-md font-medium text-sm text-primary dark:text-primary-foreground">
                {recommendedTest.badgeText}
              </div>
            )}
          </div>
        </AnimatedCard>
      </div>
    </SectionContainer>
  );
};

export default SharedRecommendedTestSection;

