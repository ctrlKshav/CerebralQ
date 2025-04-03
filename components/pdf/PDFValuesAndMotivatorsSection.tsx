import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { ValuesAndMotivators } from "@/types/tests/mbti";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import PDFCardSection from "./shared/PDFCardSection";
import PDFListItem from "./shared/PDFListItem";
import {
  HeartIcon,
  TrendingUpIcon,
  CheckboxIcon,
  UpArrowIcon,
} from "@/components/pdf/shared/icons";
import PDFTwoColumnSection from "./shared/PDFTwoColumnSection";

// Define specific colors for icons
const ICON_COLORS = {
  heart: "#ec4899", // pink-500
  trendingUp: "#10b981", // emerald-500
  checkbox: "#10b981", // emerald-500
  upArrow: "#f59e0b", // amber-500
};

// Extract styles to their own object outside the component
const createValuesSectionStyles = (isDarkMode = false) => {
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
    sectionSubtitle: baseStyles.sectionSubtitle,
  });
};

interface PDFValuesAndMotivatorsSectionProps {
  valuesAndMotivators: ValuesAndMotivators;
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber?: number;
}

const PDFValuesAndMotivatorsSection: React.FC<PDFValuesAndMotivatorsSectionProps> = ({
  valuesAndMotivators,
  sectionNumber,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
}) => {
  // Use the extracted styles
  const styles = createValuesSectionStyles(isDarkMode);
  const { coreValues, motivators } = valuesAndMotivators;

  return (
    <View style={styles.page}>
      {/* Section header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionNumber}>{sectionNumber}</Text>
          <Text style={styles.sectionTitle}>Values & Motivators</Text>
        </View>
        <Text style={styles.sectionSubtitle}>
          {formatWithUsername("What Drives You, {firstname}", firstname)}
        </Text>
        <Text style={styles.description}>
          {formatWithUsername(valuesAndMotivators.summary, firstname)}
        </Text>
      </View>

      <PDFTwoColumnSection
        leftTitle="Your Core Values"
        leftIcon={<HeartIcon color={ICON_COLORS.heart} size={20} />}
        leftItems={coreValues}
        rightTitle="What Motivates You"
        rightIcon={<TrendingUpIcon color={ICON_COLORS.trendingUp} size={20} />}
        rightItems={motivators}
        firstname={firstname}
        isDarkMode={isDarkMode}
      />

      {/* Footer inside the page */}
      <Text style={styles.footer}>
        Cerebral Quotient Personality Assessment | Page {pageNumber}
      </Text>
    </View>
  );
};

export default PDFValuesAndMotivatorsSection;
