import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { ValuesAndMotivators } from "@/types/tests/mbti/results";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import PDFActionStepsSection from "./shared/PDFActionStepsSection";

// Extract styles to their own object outside the component
const createValuesActionStyles = (isDarkMode = false) => {
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
    sectionSubtitle: {
      fontSize: 22,
      color: theme.foreground,
      fontFamily: "Helvetica-Bold",
      marginBottom: 20,
      textAlign: "center",
    },
    footer: baseStyles.footer,
  });
};

interface PDFValuesActionSectionProps {
  valuesAndMotivators: ValuesAndMotivators;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber?: number;
}

const PDFValuesActionSection: React.FC<PDFValuesActionSectionProps> = ({
  valuesAndMotivators,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
}) => {
  // Use the extracted styles
  const styles = createValuesActionStyles(isDarkMode);
  const { actionItems } = valuesAndMotivators;

  return (
    <View style={styles.page}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.sectionSubtitle}>
          {formatWithUsername("Aligning Your Life with Your Values, {firstname}", firstname)}
        </Text>
      </View>

      {/* Action Steps Section */}
      <PDFActionStepsSection
        firstname={firstname}
        actionSteps={actionItems}
        isDarkMode={isDarkMode}
        pageNumber={pageNumber}
        imageSrc="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      />

    </View>
  );
};

export default PDFValuesActionSection;
