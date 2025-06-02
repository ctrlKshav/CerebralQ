"use client";
import React from "react";
import { testDetails } from "@/data/test-info/disc/test-overview";
import SectionContainer from "../shared/SectionContainer";
import SectionHeader from "../shared/SectionHeader";
import TestVariantCard from "../shared/TestVariantCard";

const TestVariantsSection = () => {
  const { testVariants } = testDetails;

  return (
    <SectionContainer id="variants" className="bg-muted/30">
      <SectionHeader
        badge="Test Options"
        title="Choose Your Assessment"
        description="Select the DISC assessment that best fits your needs and time availability."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testVariants.map((variant, index) => (
          <TestVariantCard
            key={variant.id}
            title={variant.title}
            subtitle={variant.subtitle}
            description={variant.description}
            features={variant.features}
            duration={variant.duration}
            questions={variant.questions}
            accuracy={variant.accuracy}
            testUrl={variant.testUrl}
            delay={0.2 * index}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default TestVariantsSection;
