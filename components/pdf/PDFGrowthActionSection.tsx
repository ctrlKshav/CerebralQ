import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { GrowthJourney } from "@/types/tests/mbti";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import PDFActionStepsSection from "./shared/PDFActionStepsSection";

// Extract styles to their own object outside the component
const createGrowthActionStyles = (isDarkMode = false) => {
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
    subtitle: {
      fontSize: 22,
      color: theme.foreground,
      fontFamily: "Helvetica-Bold",
      marginBottom: 20,
      textAlign: "center",
    },
    footer: baseStyles.footer,
  });
};

interface PDFGrowthActionSectionProps {
  growth: GrowthJourney;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber?: number;
}

const PDFGrowthActionSection: React.FC<PDFGrowthActionSectionProps> = ({
  growth,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
}) => {
  // Use the extracted styles
  const styles = createGrowthActionStyles(isDarkMode);
  const { actionSteps } = growth;

  return (
    <View style={styles.page}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.subtitle}>
          {formatWithUsername("Taking Action on Your Growth Journey, {firstname}", firstname)}
        </Text>
      </View>

      {/* Action Steps Section */}
      <PDFActionStepsSection
        actionSteps={actionSteps}
        isDarkMode={isDarkMode}
        pageNumber={pageNumber}
        imageSrc="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      />

    </View>
  );
};

export default PDFGrowthActionSection;
