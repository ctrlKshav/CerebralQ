"use client";
import React from "react";
import { testDetails } from "@/data/test-info/hexaco/test-overview";
import SectionContainer from "../shared/SectionContainer";
import SectionHeader from "../shared/SectionHeader";
import CitationCard from "../shared/CitationCard";

const AcademicCitationsSection = () => {
  const { citations } = testDetails;

  return (
    <SectionContainer id="research">
      <SectionHeader
        badge="Research"
        title="Academic Foundation"
        description="The HEXACO model is supported by extensive scientific research and validation studies."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {citations.map((citation, index) => (
          <CitationCard
            key={index}
            title={citation.title}
            authors={citation.authors}
            journal={citation.journal}
            year={citation.year}
            doi={citation.doi}
            description={citation.description}
            delay={0.1 * index}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default AcademicCitationsSection;
