"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { FeatureBadge } from "..//shared/badges/FeatureBadge";
import { TestOverviewCard } from "./TestOverviewCard";
import { TestDimensionsCard } from "./TestDimensionsCard";
import { TestResultSection } from "./TestResultSection";
import { TestCitationsCard } from "../shared/CitationsCard";
import { TestRecommendationsSection } from "../shared/TestRecommendationsSection";
import { SectionHeader } from "./SectionHeader";
import { oceanTestInfo } from "@/data/tests/ocean/testInfo";
import { OceanTraitKey } from "@/types/tests/ocean/traits";

// Mock constant for Ocean test ID (should be replaced with actual constant)
const OCEAN_TEST_ID = 2;

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
  
  const formatDescriptionWithLineBreaks = (description: string) => {
    const segments = description.split("\n");
    return (
      <>
        {segments.map((segment, index) => (
          <span key={index}>
            {segment}
            {index < segments.length - 1 && (
              <>
                <br />
                <br />
              </>
            )}
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="px-4 py-4 sm:py-0 min-h-screen flex flex-col justify-start sm:justify-center relative overflow-hidden">
        {/* Background decoration elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        
        <div className="mb-12 max-w-7xl mx-auto text-center space-y-8 sm:space-y-10 relative z-10">
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
            {oceanTestInfo.name}{" "}
            <span className="text-2xl">
              ({oceanTestInfo.short_code.toUpperCase()})
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {formatDescriptionWithLineBreaks(oceanTestInfo.description)}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {oceanTestInfo.features.map((feature, index) => (
              <FeatureBadge
                key={index}
                Icon={feature.icon}
                label={feature.label}
                color={feature.color}
              />
            ))}
          </div>
          
          <div className="pt-4">
            <Link href={`/start-test`}>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Begin Test →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-4 pb-20 scroll-mt-36 mb-12"
        id="test-details-section"
      >
        <SectionHeader
          title="About the OCEAN Test"
          description="Explore the science and structure behind this assessment, including five core personality dimensions and major benefits."
        />
        <div className="grid gap-12 md:gap-6 md:grid-cols-2 text-md">
          {/* Test Overview Card */}
          <TestOverviewCard testData={oceanTestInfo} />
          {/* Personality Dimensions Card */}
          <TestDimensionsCard dimensions={oceanTestInfo.personality_dimensions} />
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-4 pb-20 scroll-mt-36 mb-12"
        id="citations-section"
      >
        <SectionHeader
          title="Scientific Foundation"
          description="Discover the robust research and academic citations supporting the OCEAN personality model."
        />
        <TestCitationsCard citations={oceanTestInfo.citations} />
      </section>

      {/* <section
        className="max-w-7xl mx-auto px-4 pb-20 scroll-mt-36 mb-12"
        id="recommendations-section"
      >
        <SectionHeader
          title="Complementary Assessments"
          description="Enhance your self-awareness with these complementary tests that work well with your OCEAN results."
        />
        <TestRecommendationsSection recommendations={oceanTestInfo.complementary_tests} />
      </section> */}

    </div>
  );
}
