"use client";
import { testDetails } from "@/data/test-info/hexaco/test-overview";
import SharedAcademicCitationsSection, { ProcessedCitation as SharedProcessedCitation } from "../shared/sections/SharedAcademicCitationsSection";

// Original interface for HEXACO citation data from test-overview.ts
interface HexacoCitationData {
  title: string;
  authors: string;
  description: string;
  doi?: string;
  journal?: string; 
  year?: string;
  url?: string;
}

const AcademicCitationsSection = () => {
  const sourceCitations: HexacoCitationData[] = testDetails.citations;
  
  // Process HEXACO citations to match the structure expected by SharedAcademicCitationsSection
  const processedCitations: SharedProcessedCitation[] = sourceCitations.map((c: HexacoCitationData) => ({
    title: c.title,
    authors: c.authors,
    description: c.description,
    url: c.url || (c.doi ? `https://doi.org/${c.doi}` : "#"), // Ensure URL is present
  }));

  return (
    <SharedAcademicCitationsSection
      headerTitle="HEXACO: Built on Solid Science"
      headerDescription="The HEXACO model of personality is grounded in extensive psychometric research, offering a comprehensive six-dimensional framework validated across numerous studies and cultures."
      staticCardTitle="Rigorous Scientific Basis"
      staticCardDescriptionP1="The HEXACO model (Honesty-Humility, Emotionality, Extraversion, Agreeableness, Conscientiousness, Openness to Experience) provides a robust framework for personality assessment."
      staticCardDescriptionP2="Its development and validation are documented in leading academic journals, ensuring the HEXACO test provides reliable and meaningful insights."
      staticCardAwardText="Utilized in contemporary psychological research worldwide for its nuanced personality insights."
      citations={processedCitations}
    />
  );
};

export default AcademicCitationsSection;

