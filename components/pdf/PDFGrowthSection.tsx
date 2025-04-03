import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { GrowthJourney } from "@/types/tests/mbti";
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
      padding: 40,
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
    footer: baseStyles.footer,
    headerRow: baseStyles.headerRow,
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
  });
};

interface PDFGrowthSectionProps {
  growth: GrowthJourney;
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber?: number;
}

const PDFGrowthSection: React.FC<PDFGrowthSectionProps> = ({
  growth,
  sectionNumber,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
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
        <Text style={styles.subtitle}>
          {formatWithUsername("Your Path to Personal Evolution, {firstname}", firstname)}
        </Text>
        <Text style={styles.description}>
          {formatWithUsername(growth.summary, firstname)}
        </Text>
      </View>

      {/* Growth Superpowers */}
      <PDFCardSection
        title="Your Growth Superpowers"
        icon={<AwardIcon color={ICON_COLORS.award} size={20} />}
        isDarkMode={isDarkMode}
      >
        {superpowers.map((item, index) => (
          <PDFListItem
            key={`growth-superpower-${index}`}
            text={formatWithUsername(item.description, firstname)}
            icon={<CheckboxIcon color={ICON_COLORS.checkbox} size={14} />}
            isDarkMode={isDarkMode}
          />
        ))}
      </PDFCardSection>

      {/* Growth Areas */}
      <PDFCardSection
        title="Where You Can Grow a Bit"
        icon={<LightbulbIcon color={ICON_COLORS.lightbulb} size={20} />}
        isDarkMode={isDarkMode}
      >
        {growthAreas.map((item, index) => (
          <PDFListItem
            key={`growth-area-${index}`}
            text={formatWithUsername(item.description, firstname)}
            icon={<UpArrowIcon color={ICON_COLORS.upArrow} size={14} />}
            isDarkMode={isDarkMode}
          />
        ))}
      </PDFCardSection>

      {/* Footer inside the page */}
      <Text style={styles.footer}>
        Cerebral Quotient Personality Assessment | Page {pageNumber}
      </Text>
    </View>
  );
};

export default PDFGrowthSection;
