import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { CareerPath } from "@/types/tests/mbti/results";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import PDFListItem from "./shared/PDFListItem";
import PDFActionImageSection from "./shared/PDFActionImageSection";
import {
  AwardIcon,
  BriefcaseIcon,
  CheckboxIcon,
  UpArrowIcon,
} from "@/components/pdf/shared/icons";
import { ICON_COLORS } from "@/lib/constants";
import PDFTwoColumnSection from "./shared/PDFTwoColumnSection";

// Extract styles to their own object outside the component
const createCareerSectionStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: {
      padding: 10, // Reduced padding to use more width
      backgroundColor: theme.background,
      height: "100%",
      position: "relative",
    },
    headerContainer: {
      marginBottom: 10,
      alignItems: "center",
    },
    description: {
      fontSize: 14,
      color: theme.mutedForeground,
      marginBottom: 10,
      lineHeight: 1.6,
      textAlign: "center",
      alignSelf: "center",
    },
    columnsContainer: {
      flexDirection: "row",
      marginBottom: 20,
      gap: 15, // Reduced gap
    },
    column: {
      flex: 1,
    },
    columnTitle: {
      fontSize: 18,
      color: theme.primary,
      fontFamily: "PTSans-Bold",
      textAlign: "center",
    },
    columnTitleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 12,
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    footer: baseStyles.footer,
    headerRow: baseStyles.headerRow,
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
    sectionSubtitle: baseStyles.sectionSubtitle,
    listSection: {
      marginBottom: 5,
    },
  });
};

interface PDFCareerPathSectionProps {
  career: CareerPath;
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
}

const PDFCareerPathSection: React.FC<PDFCareerPathSectionProps> = ({
  career,
  sectionNumber,
  firstname,
  isDarkMode = false,
}) => {
  // Use the extracted styles
  const styles = createCareerSectionStyles(isDarkMode);
  const { superpowers, growthAreas, actionSteps } = career;

  return (
    <View style={styles.page}>
      {/* Section header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionNumber}>{sectionNumber}</Text>
          <Text style={styles.sectionTitle}>Your Career Path</Text>
        </View>
        <Text style={styles.sectionSubtitle}>
          {formatWithUsername("How You Shine at Work, {firstname}", firstname)}
        </Text>
        <Text style={styles.description}>
          {formatWithUsername(career.summary, firstname)}
        </Text>
      </View>

      {/* Replace superpowers and growth areas with two-column section */}
      <PDFTwoColumnSection
        leftTitle={`Superpowers`}
        leftIcon={<AwardIcon color={ICON_COLORS.award} size={20} />}
        leftItems={superpowers}
        rightTitle="Growth Areas"
        rightIcon={<BriefcaseIcon color={ICON_COLORS.briefcase} size={20} />}
        rightItems={growthAreas}
        firstname={firstname}
        isDarkMode={isDarkMode}
      />

      {/* Action Steps - Using the new reusable component */}
      <PDFActionImageSection
        actionSteps={actionSteps || []}
        imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        firstname={firstname}
        isDarkMode={isDarkMode}
      />

      {/* Footer inside the page */}
      <Text style={styles.footer}>
        Cerebral Quotient Personality Assessment | Page 3
      </Text>
    </View>
  );
};

export default PDFCareerPathSection;
