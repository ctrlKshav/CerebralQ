import React from "react";
import { Document, Page, StyleSheet, View, Text } from "@react-pdf/renderer";
import { PDFHero } from "@/components/pdf/PDFHero";
import { PDFPersonalityTraits } from "@/components/pdf/PDFPersonalityTraits";
import { PDFCareerSuggestions } from "@/components/pdf/PDFCareerSuggestions";
import { PDFSimilarPersonalities } from "@/components/pdf/PDFSimilarPersonalities";
import { PDFDetailedPersonalityInsights } from "@/components/pdf/PDFDetailedPersonalityInsights";
import { PDFAboutPersonalityType } from "@/components/pdf/PDFAboutPersonalityType";
import { ResultData } from "@/types/tests/mbti";
import { getPersonalityInsights } from "@/data/mbti/oldData/personalityInsights";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import PDFCareerSection from "./PDFCareerSection";

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

  // Get personality insights
  const personalityInsights = getPersonalityInsights(personalityType);

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
              sectionNumber={2}
              isDarkMode={isDarkMode}
              firstname={resultData.firstname ?? undefined}
              personalityType={personalityType}
            />
          </View>
        )}
      </Page>

      {/* Third Page: Combined Career Suggestions and Similar Personalities */}
      <Page size="A4" style={styles.page}>
        {/* Career Suggestions - with compact prop to make it more space-efficient */}
        <PDFCareerSection
          firstname={resultData.firstname}
          career={resultData.personalityData.career}
          isDarkMode={isDarkMode}
        />
      </Page>

      {/* Fourth Page: Detailed Personality Insights */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <PDFDetailedPersonalityInsights
            personalityType={personalityType}
            personalityAlias={personalityDescription.alias}
            personalityInsights={personalityInsights}
            sectionNumber={5}
            isDarkMode={isDarkMode}
          />
        </View>
      </Page>
    </Document>
  );
};
