"use client";
import { citations as oceanCitations } from "@/data/test-info/ocean/citations";
import SharedAcademicCitationsSection, { ProcessedCitation } from "../shared/sections/SharedAcademicCitationsSection";

const AcademicCitationsSection = () => {
  // Ensure citations match the ProcessedCitation structure, especially the 'url' field.
  // If original oceanCitations have doi but not url, they need to be processed.
  const processedCitations: ProcessedCitation[] = oceanCitations.map(c => ({
    // Assuming c from oceanCitations has title, authors, description, and a string url.
    // The lint error indicates 'doi' is not a property of 'c'.
    title: c.title,
    authors: c.authors,
    description: c.description,
    url: c.url, // Directly use c.url, assuming it's a non-optional string as per original usage.
  }));

  return (
    <SharedAcademicCitationsSection
      headerTitle="Science You Can Trust"
      headerDescription="The OCEAN Test is built on decades of scientific research and academic validation. Here are some of the key studies that form its foundation."
      staticCardTitle="Evidence-Based Approach"
      staticCardDescriptionP1="The Big Five personality model has been validated across cultures, age groups, and research contexts for over 40 years."
      staticCardDescriptionP2="This scientific rigor ensures the OCEAN Test provides reliable insights into your personality traits, backed by research published in top psychological journals."
      staticCardAwardText="Used by researchers at Harvard, Stanford, Oxford, and other leading institutions"
      citations={processedCitations}
    />
  );
};

export default AcademicCitationsSection;

