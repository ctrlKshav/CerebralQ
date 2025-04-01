import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { CareerPath } from "@/types/tests/mbti";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import PDFCareerSuggestionCard from "./shared/PDFCareerSuggestionCard";
import { formatWithUsername } from "@/lib/formatWithUsername";

// Create styles with theme variants
const createCareerSuggestionsStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: {
      padding: 40,
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
    title: {
      fontSize: 30,
      color: theme.foreground,
      fontFamily: "Helvetica-Bold",
      marginBottom: 12,
      textAlign: "center",
    },
    subtitle: {
      fontSize: 20,
      color: theme.foreground,
      fontFamily: "Helvetica-Bold",
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
      maxWidth: 480,
    },
    cardsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    cardColumn: {
      width: "48%",
    },
    footer: baseStyles.footer,
  });
};

interface PDFCareerSuggestionsSectionProps {
  career: CareerPath;
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
}

const PDFCareerSuggestionsSection: React.FC<PDFCareerSuggestionsSectionProps> = ({
  career,
  sectionNumber,
  firstname,
  isDarkMode = false,
}) => {
  const styles = createCareerSuggestionsStyles(isDarkMode);
  
  if (!career.suggestions || career.suggestions.length === 0) {
    return null;
  }

  // Split suggestions into two columns
  const leftColumn = career.suggestions.filter((_, i) => i % 2 === 0);
  const rightColumn = career.suggestions.filter((_, i) => i % 2 === 1);

  return (
    <View style={styles.page}>
      {/* Section header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionNumber}>{sectionNumber}</Text>
          <Text style={styles.sectionTitle}>Career Suggestions</Text>
        </View>
        
        <Text style={styles.description}>
          These career paths naturally complement your personality traits and
          abilities, offering environments where you're likely to thrive and
          find fulfillment.
        </Text>
      </View>

      {/* Career suggestions in two columns */}
      <View style={styles.cardsContainer}>
        <View style={styles.cardColumn}>
          {leftColumn.map((suggestion, index) => (
            <PDFCareerSuggestionCard 
              key={`suggestion-left-${index}`}
              suggestion={suggestion}
              isDarkMode={isDarkMode}
            />
          ))}
        </View>
        
        <View style={styles.cardColumn}>
          {rightColumn.map((suggestion, index) => (
            <PDFCareerSuggestionCard 
              key={`suggestion-right-${index}`}
              suggestion={suggestion}
              isDarkMode={isDarkMode}
            />
          ))}
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        CerebralQ Personality Assessment | Page 5
      </Text>
    </View>
  );
};

export default PDFCareerSuggestionsSection;
