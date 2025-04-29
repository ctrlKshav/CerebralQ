"use client";
import { useRef } from "react";
import SectionContainer from "./shared/SectionContainer";
import SectionHeader from "./shared/SectionHeader";
import TestVariantCard from "./shared/TestVariantCard";
import { testVariants } from "@/data/test-info/ocean/test-variants";

const TestVariantsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <SectionContainer
      ref={sectionRef}
      id="test-variants"
    >
      <SectionHeader
        badge="Test Options"
        title="Choose Your Ideal Test"
        highlightWord="Ideal"
        description="We offer three scientifically validated OCEAN personality assessments, each providing unique benefits for different needs and goals."
      />

      {/* 3-column grid on desktop, single column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testVariants.map((variant, index) => (
          <TestVariantCard
            key={`${variant.id}-${index}`}
            {...variant}
            delay={0.1 * (index + 1)} // Staggered delay for each card
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default TestVariantsSection; 