import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { ValuesAndMotivators } from "@/types/tests/mbti/results";
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
import PDFActionImageSection from "./shared/PDFActionImageSection";
import { PDFLogo } from "./PDFLogo";

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
      padding: 10, // Reduced from 40
      backgroundColor: theme.background,
      height: "100%",
      position: "relative",
    },
    description: {
      fontSize: 14,
      color: theme.mutedForeground,
      marginBottom: 10,
      lineHeight: 1.6, // Reduced from 1.6
      textAlign: "center",
      alignSelf: "center",
    },
    headerContainer: {
      marginBottom: 10, // Reduced from 25
      alignItems: "center",
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
  logoUrl?: string;
}

const PDFValuesAndMotivatorsSection: React.FC<
  PDFValuesAndMotivatorsSectionProps
> = ({
  valuesAndMotivators,
  sectionNumber,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
  logoUrl,
}) => {
  // Use the extracted styles
  const styles = createValuesSectionStyles(isDarkMode);
  const { coreValues, motivators } = valuesAndMotivators;

  return (
    <View style={styles.page}>
      {/* Add logo to top right */}
      <PDFLogo logoUrl={logoUrl} />
      
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

      <PDFActionImageSection
        title="Let's Get Started on this!"
        firstname={firstname}
        imageSrc="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        actionSteps={valuesAndMotivators.actionItems}
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
