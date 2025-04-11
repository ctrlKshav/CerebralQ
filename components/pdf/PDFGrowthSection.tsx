import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { GrowthJourney } from "@/types/tests/mbti/results";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import PDFCardSection from "./shared/PDFCardSection";
import PDFListItem from "./shared/PDFListItem";
import {
  AwardIcon,
  LightbulbIcon,
  CheckboxIcon,
  UpArrowIcon,
} from "@/components/pdf/shared/icons";
import PDFActionImageSection from "./shared/PDFActionImageSection";
import PDFTwoColumnSection from "./shared/PDFTwoColumnSection";
import PDFFooter from "./shared/PDFFooter";

// Define specific colors for icons
const ICON_COLORS = {
  award: "#10b981", // emerald-500
  lightbulb: "#f59e0b", // amber-500
  checkbox: "#10b981", // emerald-500
  upArrow: "#f59e0b", // amber-500
};

// Extract styles to their own object outside the component
const createGrowthSectionStyles = (isDarkMode = false) => {
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
    title: {
      fontSize: 30,
      color: theme.foreground,
      fontFamily: "PTSans-Bold",
      marginBottom: 12,
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
    footer: baseStyles.footer,
    headerRow: baseStyles.headerRow,
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
    sectionSubtitle: baseStyles.sectionSubtitle,
  });
};

interface PDFGrowthSectionProps {
  growth: GrowthJourney;
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber?: number;
  logoUrl?: string;
}

const PDFGrowthSection: React.FC<PDFGrowthSectionProps> = ({
  growth,
  sectionNumber,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
  logoUrl,
}) => {
  // Use the extracted styles
  const styles = createGrowthSectionStyles(isDarkMode);
  const { superpowers, growthAreas } = growth;

  return (
    <View style={styles.page}>
      {/* Section header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionNumber}>{sectionNumber}</Text>
          <Text style={styles.sectionTitle}>Your Growth Journey</Text>
        </View>
        <Text style={styles.sectionSubtitle}>
          {formatWithUsername(
            "Your Path to Personal Evolution, {firstname}",
            firstname
          )}
        </Text>
        <Text style={styles.description}>
          {formatWithUsername(growth.summary, firstname)}
        </Text>
      </View>

      {/* Replace separate card sections with two-column layout */}
      <PDFTwoColumnSection
        leftTitle="Superpowers"
        leftIcon={<AwardIcon color={ICON_COLORS.award} size={20} />}
        leftItems={superpowers}
        rightTitle="Growth Areas"
        rightIcon={<LightbulbIcon color={ICON_COLORS.lightbulb} size={20} />}
        rightItems={growthAreas}
        firstname={firstname}
        isDarkMode={isDarkMode}
      />

      <PDFActionImageSection
        actionSteps={growth.actionSteps}
        imageSrc="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        firstname={firstname}
        isDarkMode={isDarkMode}
      />

      {/* Replace footer with centralized component */}
      <PDFFooter pageNumber={pageNumber} firstname={firstname} isDarkMode={isDarkMode} />
    </View>
  );
};

export default PDFGrowthSection;
