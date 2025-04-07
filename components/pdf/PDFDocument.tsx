import React from "react";
import { Document, Page, StyleSheet, View, Text } from "@react-pdf/renderer";
import { PDFHero } from "@/components/pdf/PDFHero";
import { PDFPersonalityTraits } from "@/components/pdf/PDFPersonalityTraits";
import { ResultData } from "@/types/tests/mbti/results";
import { getPersonalityInsights } from "@/data/mbti/oldData/personalityInsights";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import PDFCareerPathSection from "./PDFCareerPathSection";
import PDFActionStepsSection from "./shared/PDFActionStepsSection";
import PDFCareerSuggestionsSection from "./PDFCareerSuggestionsSection";
import PDFRelationshipSection from "./PDFRelationshipSection";
import PDFRelationshipActionSection from "./PDFRelationshipActionSection";
import PDFGrowthSection from "./PDFGrowthSection";
import PDFDailyHabitsSection from "./PDFDailyHabitsSection";
import PDFValuesAndMotivatorsSection from "./PDFValuesAndMotivatorsSection";
import PDFValuesActionSection from "./PDFValuesActionSection";
import PDFCommunicationSection from "./PDFCommunicationSection";
import PDFActionImageSection from "./shared/PDFActionImageSection";

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
  const suggestionPages = [];

  // Split suggestions into chunks of 3
  for (let i = 0; i < suggestions.length; i += 2) {
    suggestionPages.push(suggestions.slice(i, i + 2));
  }

  // Calculate the starting page numbers for different sections
  const careerStartPage = 5;
  const relationshipStartPage = careerStartPage + suggestionPages.length;
  const growthStartPage = relationshipStartPage + relationships.length * 2;
  const dailyHabitsPage = growthStartPage + 2;
  const communicationPage = dailyHabitsPage + 1;
  const valuesStartPage = communicationPage + 1;
  const communityPage = valuesStartPage + 2;
  const actionPlanPage = communityPage + 1;

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

      {/* Career Suggestions Pages - One page per 2 suggestions */}
      {suggestionPages.map((pageSuggestions, pageIndex) => (
        <Page
          key={`suggestions-page-${pageIndex}`}
          size="A4"
          style={styles.page}
        >
          <PDFCareerSuggestionsSection
            suggestions={pageSuggestions}
            sectionNumber={3}
            firstname={resultData.firstname}
            isDarkMode={isDarkMode}
            pageNumber={careerStartPage + pageIndex}
            isFirstPage={pageIndex === 0}
          />
        </Page>
      ))}

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
              sectionNumber={4 + index}
              firstname={resultData.firstname}
              isDarkMode={isDarkMode}
              pageNumber={relationshipStartPage + index * 2}
            />
          </Page>
        </React.Fragment>
      ))}

      {/* Growth Journey Section - Two pages */}
      <Page size="A4" style={styles.page}>
        <PDFGrowthSection
          growth={growth}
          sectionNumber={4 + relationships.length}
          firstname={resultData.firstname}
          isDarkMode={isDarkMode}
          pageNumber={growthStartPage}
        />
      </Page>

      {/* Daily Habits Section - Two pages */}
      <Page size="A4" style={styles.page}>
        <PDFDailyHabitsSection
          dailyHabits={dailyHabits}
          sectionNumber={5 + relationships.length}
          firstname={resultData.firstname}
          isDarkMode={isDarkMode}
          pageNumber={dailyHabitsPage}
        />
      </Page>

      <Page size="A4" style={styles.page}>
        <PDFCommunicationSection
          dailyHabits={dailyHabits}
          firstname={resultData.firstname}
          isDarkMode={isDarkMode}
          pageNumber={communicationPage}
        />
      </Page>

      {/* Values and Motivators Section - Two pages */}
      <Page size="A4" style={styles.page}>
        <PDFValuesAndMotivatorsSection
          valuesAndMotivators={valuesAndMotivators}
          sectionNumber={6 + relationships.length}
          firstname={resultData.firstname}
          isDarkMode={isDarkMode}
          pageNumber={valuesStartPage}
        />
      </Page>

    
    </Document>
  );
};
