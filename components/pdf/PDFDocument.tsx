import React from "react";
import { Document, Page, Font } from "@react-pdf/renderer";
import { PDFHero } from "@/components/pdf/PDFHero";
import { PDFPersonalityTraits } from "@/components/pdf/PDFPersonalityTraits";
import { ResultData } from "@/types/tests/mbti/results";
import { getPersonalityInsights } from "@/data/mbti/oldData/personalityInsights";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import PDFCareerPathSection from "./PDFCareerPathSection";
import PDFCareerSuggestionsSection from "./PDFCareerSuggestionsSection";
import PDFRelationshipSection from "./PDFRelationshipSection";
import PDFGrowthSection from "./PDFGrowthSection";
import PDFValuesAndMotivatorsSection from "./PDFValuesAndMotivatorsSection";
import PDFDailyHabitsCommunicationSection from "./PDFDailyHabitsAndCommunicationSection";

interface PDFDocumentProps {
  resultData: ResultData;
  isDarkMode?: boolean;
}

export const PDFResultsDocument: React.FC<PDFDocumentProps> = ({
  resultData,
  isDarkMode = false,
}) => {
  Font.register({ family: "PTSans", src: "/fonts/PT_Sans/PTSans-Regular.ttf" });
  Font.register({
    family: "PTSans-Bold",
    src: "/fonts/PT_Sans/PTSans-Bold.ttf",
  });
  Font.register({
    family: "PTSans-Italic",
    src: "/fonts/PT_Sans/PTSans-Italic.ttf",
  });
  Font.register({
    family: "PTSans-BoldItalic",
    src: "/fonts/PT_Sans/PTSans-BoldItalic.ttf",
  });
  const styles = createBaseStyles(isDarkMode);

  const {
    personalityType,
    personalityDescription,
    completionDate,
    traitScores,
  } = resultData;

  // Get career suggestions and split them into chunks of 2 per page
  const {
    career,
    relationships,
    growth,
    dailyHabits,
    valuesAndMotivators,
    communityConnection,
    actionItems,
  } = resultData.personalityData;
  const suggestions = career.suggestions || [];
  const suggestionPages = suggestions.slice(0, 3);

  // Logo URL for consistent branding across all pages
  const logoUrl = isDarkMode
    ? "/images/logoDark.png"
    : "/images/logoLight.png";

  return (
    <Document>
      {/* First Page: Introduction and Personality Type Overview */}
      <Page size="A4" style={styles.page}>
        <PDFHero
          firstname={resultData.firstname}
          personalityType={personalityType}
          personalityDescription={personalityDescription}
          completionDate={completionDate}
          isDarkMode={isDarkMode}
          pageNumber={1}
          logoUrl={logoUrl}
        />
      </Page>

      {/* Second Page: Detailed Traits */}
      <Page size="A4" style={styles.page}>
        {traitScores && (
          <PDFPersonalityTraits
            traitScores={traitScores}
            isDarkMode={isDarkMode}
            firstname={resultData.firstname ?? undefined}
            personalityType={personalityType}
            sectionNumber={1}
            pageNumber={2}
            logoUrl={logoUrl}
          />
        )}
      </Page>

      {/* Values and Motivators Section - Two pages */}
      <Page size="A4" style={styles.page}>
        <PDFValuesAndMotivatorsSection
          valuesAndMotivators={valuesAndMotivators}
          firstname={resultData.firstname}
          isDarkMode={isDarkMode}
          sectionNumber={2}
          pageNumber={3}
          logoUrl={logoUrl}
        />
      </Page>

      {/* Third Page: Career Path - Superpowers and Growth Areas */}
      <Page size="A4" style={styles.page}>
        <PDFCareerPathSection
          firstname={resultData.firstname}
          career={resultData.personalityData.career}
          isDarkMode={isDarkMode}
          sectionNumber={3}
          pageNumber={4}
          logoUrl={logoUrl}
        />
      </Page>

      <Page
        size="A4"
        style={styles.page}
      >
        <PDFCareerSuggestionsSection
          suggestions={suggestionPages}
          sectionNumber={4}
          firstname={resultData.firstname}
          isDarkMode={isDarkMode}
          pageNumber={5}
          logoUrl={logoUrl}
        />
      </Page>

      {/* Relationship and Friendship Pages - Two pages per relationship */}
      {relationships.map((relationship, index) => (
        <React.Fragment key={`relationship-${index}`}>
          {/* First page with overview, superpowers, and growth areas */}
          <Page size="A4" style={styles.page}>
            <PDFRelationshipSection
              imageSrc={
                index === 0
                  ? "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=2000&auto=format&fit=crop"
                  : "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop"
              }
              relationship={relationship}
              sectionNumber={5 + index}
              firstname={resultData.firstname}
              isDarkMode={isDarkMode}
              pageNumber={6 + index}
              logoUrl={logoUrl}
            />
          </Page>
        </React.Fragment>
      ))}

      {/* Growth Journey Section - Two pages */}
      <Page size="A4" style={styles.page}>
        <PDFGrowthSection
          growth={growth}
          sectionNumber={5 + relationships.length}
          firstname={resultData.firstname}
          isDarkMode={isDarkMode}
          pageNumber={8}
          logoUrl={logoUrl}
        />
      </Page>

      {/* Combined Daily Habits & Communication Section */}
      <Page size="A4" style={styles.page}>
        <PDFDailyHabitsCommunicationSection
          dailyHabits={dailyHabits}
          sectionNumber={6 + relationships.length}
          firstname={resultData.firstname}
          isDarkMode={isDarkMode}
          pageNumber={9}
        />
      </Page>
    </Document>
  );
};
