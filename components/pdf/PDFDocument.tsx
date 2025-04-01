import React from "react";
import { Document, Page, StyleSheet, View, Text } from "@react-pdf/renderer";
import { PDFHero } from "@/components/pdf/PDFHero";
import { PDFPersonalityTraits } from "@/components/pdf/PDFPersonalityTraits";
import { ResultData } from "@/types/tests/mbti";
import { getPersonalityInsights } from "@/data/mbti/oldData/personalityInsights";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import PDFCareerPathSection from "./PDFCareerPathSection";
import PDFActionStepsSection from "./shared/PDFActionStepsSection";
import PDFCareerSuggestionsSection from "./PDFCareerSuggestionsSection";

// Create styles with theme variants
const createStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: baseStyles.page,
    section: {
      marginBottom: 20,
    },
    footer: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 10,
      color: theme.mutedForeground,
    },
  });
};

interface PDFDocumentProps {
  resultData: ResultData;
  isDarkMode?: boolean;
}

export const PDFResultsDocument: React.FC<PDFDocumentProps> = ({
  resultData,
  isDarkMode = false,
}) => {
  const styles = createStyles(isDarkMode);

  const {
    personalityType,
    personalityDescription,
    completionDate,
    traitScores,
  } = resultData;

  // Get career suggestions and split them into chunks of 2 per page
  const { career } = resultData.personalityData;
  const suggestions = career.suggestions || [];
  const suggestionPages = [];
  
  // Split suggestions into chunks of 2
  for (let i = 0; i < suggestions.length; i += 2) {
    suggestionPages.push(suggestions.slice(i, i + 2));
  }

  return (
    <Document>
      {/* First Page: Introduction and Personality Type Overview */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <PDFHero
            firstname={resultData.firstname}
            personalityType={personalityType}
            personalityDescription={personalityDescription}
            completionDate={completionDate}
            isDarkMode={isDarkMode}
          />
        </View>
      </Page>

      {/* Second Page: Detailed Traits */}
      <Page size="A4" style={styles.page}>
        {traitScores && (
          <View style={styles.section}>
            <PDFPersonalityTraits
              traitScores={traitScores}
              sectionNumber={1}
              isDarkMode={isDarkMode}
              firstname={resultData.firstname ?? undefined}
              personalityType={personalityType}
            />
          </View>
        )}
      </Page>

      {/* Third Page: Career Path - Superpowers and Growth Areas */}
      <Page size="A4" style={styles.page}>
        <PDFCareerPathSection
          firstname={resultData.firstname}
          sectionNumber={2}
          career={resultData.personalityData.career}
          isDarkMode={isDarkMode}
        />
      </Page>

      {/* Fourth Page: Action Steps */}
      <Page size="A4" style={styles.page}>
        <PDFActionStepsSection
          actionSteps={resultData.personalityData.career.actionSteps}
          isDarkMode={isDarkMode}
          pageNumber={4}
        />
      </Page>

      {/* Career Suggestions Pages - One page per 2 suggestions */}
      {suggestionPages.map((pageSuggestions, pageIndex) => (
        <Page key={`suggestions-page-${pageIndex}`} size="A4" style={styles.page}>
          <PDFCareerSuggestionsSection
            suggestions={pageSuggestions}
            sectionNumber={3}
            firstname={resultData.firstname}
            isDarkMode={isDarkMode}
            pageNumber={5 + pageIndex}
            isFirstPage={pageIndex === 0}
          />
        </Page>
      ))}
    </Document>
  );
};
