import React from "react";
import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import { CareerSuggestion } from "@/types/tests/mbti/results";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import PDFCareerSuggestionCard from "./shared/PDFCareerSuggestionCard";
import PDFFooter from "./shared/PDFFooter";

// Create styles with theme variants
const createCareerSuggestionsStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: {
      padding: 20,
      backgroundColor: theme.background,
      height: "100%",
      position: "relative",
    },
    header: {
      marginBottom: 20,
      alignItems: "center",
    },
    title: {
      fontSize: 40,
      color: theme.primary,
      fontFamily: "PTSans-Bold",
      marginBottom: 12,
      textAlign: "center",
    },
    description: {
      fontSize: 14,
      color: theme.foreground,
      marginBottom: 20,
      lineHeight: 1.6,
      textAlign: "center",
      alignSelf: "center",
      paddingHorizontal: 50,
    },
    grid: {
      flexDirection: "column",
      marginHorizontal: 15,
      gap: 20,
    },
    row: {
      flexDirection: "row",
      gap: 20,
      marginBottom: 5,
    },
    footer: {
      position: "absolute",
      bottom: 15,
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 10,
      color: theme.mutedForeground,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    footerText: {
      fontSize: 10,
      color: theme.mutedForeground,
    },
    heartIcon: {
      width: 20,
      height: 20,
      marginLeft: 5,
    },
  });
};

interface PDFCareerSuggestionsSectionProps {
  suggestions: CareerSuggestion[];
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber?: number;
  logoUrl?: string;
}

const PDFCareerSuggestionsSection: React.FC<PDFCareerSuggestionsSectionProps> = ({
  suggestions,
  sectionNumber,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
  logoUrl,
}) => {
  const styles = createCareerSuggestionsStyles(isDarkMode);

  // Ensure we always have suggestions to display, even if empty
  const displaySuggestions = suggestions || [];
  
  // Function to chunk the array into pairs for grid layout
  const chunkArray = (array: CareerSuggestion[], size: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  // Create rows of 2 items each
  const rows = chunkArray(displaySuggestions, 2);

  return (
    <View style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Career Suggestions</Text>
        <Text style={styles.description}>
          These career paths naturally complement your personality traits and abilities, 
          offering environments where you're likely to thrive and find fulfillment.
        </Text>
      </View>

      {/* Grid of career cards - dynamic layout */}
      <View style={styles.grid}>
        {rows.map((row, rowIndex) => (
          <View key={`row-${rowIndex}`} style={styles.row}>
            {row.map((suggestion, colIndex) => (
              <PDFCareerSuggestionCard
                key={`suggestion-${rowIndex}-${colIndex}`}
                suggestion={suggestion}
                isDarkMode={isDarkMode}
              />
            ))}
            
            {/* Add a placeholder if there's only one item in the row */}
            {row.length === 1 && (
              <View style={{ flex: 1 }} />
            )}
          </View>
        ))}
      </View>

      <PDFFooter pageNumber={pageNumber} firstname={firstname} isDarkMode={isDarkMode} />

    </View>
  );
};

export default PDFCareerSuggestionsSection;
