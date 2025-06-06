"use client";
import { testDetails } from "@/data/test-info/disc/test-overview";
import SharedAcademicCitationsSection, { ProcessedCitation as SharedProcessedCitation } from "../shared/sections/SharedAcademicCitationsSection";

// Original interface for DISC citation data from test-overview.ts
interface DiscCitationData {
  title: string;
  authors: string;
  description: string;
  doi?: string;
  journal?: string; 
  year?: string;
  url?: string;
}

const AcademicCitationsSection = () => {
  const sourceCitations: DiscCitationData[] = testDetails.citations;
  
  // Process DISC citations to match the structure expected by SharedAcademicCitationsSection
  const processedCitations: SharedProcessedCitation[] = sourceCitations.map((c: DiscCitationData) => ({
    title: c.title,
    authors: c.authors,
    description: c.description,
    url: c.url || (c.doi ? `https://doi.org/${c.doi}` : "#"), // Ensure URL is present
  }));

  return (
    <SharedAcademicCitationsSection
      headerTitle="DISC: Grounded in Science"
      headerDescription="The DISC assessment is built upon a strong foundation of behavioral research and has been validated through extensive application in various professional and personal development contexts."
      staticCardTitle="Evidence-Based Framework"
      staticCardDescriptionP1="The DISC model, focusing on Dominance, Influence, Steadiness, and Conscientiousness, has been instrumental in understanding interpersonal dynamics for decades."
      staticCardDescriptionP2="Its practical application in organizational development, leadership training, and team building is supported by numerous studies and real-world success stories."
      staticCardAwardText="Widely adopted by HR professionals, coaches, and consultants globally."
      citations={processedCitations}
    />
  );
};

export default AcademicCitationsSection;

