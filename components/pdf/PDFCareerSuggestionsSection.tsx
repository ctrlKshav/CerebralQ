import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { CareerPath, CareerSuggestion } from "@/types/tests/mbti/results";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import PDFCareerSuggestionCard from "./shared/PDFCareerSuggestionCard";
import { formatWithUsername } from "@/lib/formatWithUsername";

// Create styles with theme variants
const createCareerSuggestionsStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: {
      padding: 10,
      backgroundColor: theme.background,
      height: "100%",
      position: "relative",
    },
    headerContainer: {
      marginBottom: 25,
      alignItems: "center",
    },
    headerRow: baseStyles.headerRow,
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,

    subtitle: {
      fontSize: 20,
      color: theme.foreground,
      fontFamily: "PTSans-Bold",
      marginBottom: 20,
      textAlign: "center",
    },
    description: {
      fontSize: 14,
      color: theme.mutedForeground,
      marginBottom: 30,
      lineHeight: 1.6,
      textAlign: "center",
      alignSelf: "center",
    },
    cardsContainer: {
      flexDirection: "column",
    },
    footer: baseStyles.footer,
  });
};

interface PDFCareerSuggestionsSectionProps {
  suggestions: CareerSuggestion[];
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber: number;
}

const PDFCareerSuggestionsSection: React.FC<
  PDFCareerSuggestionsSectionProps
> = ({
  suggestions,
  sectionNumber,
  firstname,
  isDarkMode = false,
  pageNumber
}) => {
  const styles = createCareerSuggestionsStyles(isDarkMode);

  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <View style={styles.page}>
      {/* Only show the header on the first page */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.sectionTitle}>Career Suggestions</Text>
        </View>

        <Text style={styles.description}>
          These career paths naturally complement your personality traits and
          abilities, offering environments where you're likely to thrive and
          find fulfillment.
        </Text>
      </View>

      {/* Show one card per row, maximum 3 per page */}
      <View style={styles.cardsContainer}>
        {suggestions.map((suggestion, index) => (
          <PDFCareerSuggestionCard
            key={`suggestion-${index}`}
            suggestion={suggestion}
            isDarkMode={isDarkMode}
          />
        ))}
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        Cerebral Quotient Personality Assessment | Page {pageNumber}
      </Text>
    </View>
  );
};

export default PDFCareerSuggestionsSection;
