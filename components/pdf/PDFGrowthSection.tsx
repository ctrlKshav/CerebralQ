import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
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
import { PDFLogo } from "./PDFLogo";
import PDFSuperPowersSection from "./shared/PDFSuperPowersSection";
import PDFGrowthAreasSection from "./shared/PDFGrowthAreasSection";
import PDFActionPlanSection from "./shared/PDFActionPlanSection";

// Define specific colors for icons
const ICON_COLORS = {
  award: "#10b981", // emerald-500
  lightbulb: "#f59e0b", // amber-500
  checkbox: "#10b981", // emerald-500
  upArrow: "#f59e0b", // amber-500
};

// Extract styles to their own object outside the component
const createGrowthSectionStyles = (isDarkMode = false) => {
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: {
      padding: 30,
      backgroundColor: theme.background,
      height: "100%",
      position: "relative",
    },
    headerSection: {
      flexDirection: "row",
      marginBottom: 25,
      marginTop: 45, // Space for logo
      height: 270,
    },
    titleContainer: {
      display: "flex",
      flexDirection: "column",
    },
    titleSection: {
      flex: 3,
      paddingRight: 15,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 36,
      color: theme.primary,
      fontFamily: "PTSans-Bold",
    },
    subtitle: {
      fontSize: 18,
      color: theme.foreground,
      fontFamily: "PTSans-Bold",
    },
    imageSection: {
      flex: 2,
    },
    headerImage: {
      marginTop: 5,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: 6,
    },
    contentSection: {
      flexDirection: "row",
    },
    leftContent: {
      flex: 3,
      paddingRight: 15,
      alignSelf: "flex-end",
    },
    rightContent: {
      flex: 2,
    },
    description: {
      fontSize: 14,
      color: theme.foreground,
      lineHeight: 1.5,
    },
    pageNumber: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 12,
      color: theme.mutedForeground,
    },
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
  logoUrl = "/images/cq-logo.png",
}) => {
  // Use the extracted styles
  const styles = createGrowthSectionStyles(isDarkMode);
  const { superpowers, growthAreas, actionSteps } = growth;

  return (
    <View style={styles.page}>
      {/* Logo in top right */}
      <PDFLogo logoUrl={logoUrl} />

      {/* Header section with title and image side by side */}
      <View style={styles.headerSection}>
        <View style={styles.titleSection}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Your Growth Journey</Text>
            <Text style={styles.subtitle}>
              {formatWithUsername(
                "Your Path to Personal Evolution, {firstname}",
                firstname
              )}
            </Text>
          </View>
          <Text style={styles.description}>
            {formatWithUsername(growth.summary, firstname)}
          </Text>
        </View>

        <View style={styles.imageSection}>
          <Image
            src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            style={styles.headerImage}
          />
        </View>
      </View>

      {/* Main content section */}
      <View style={styles.contentSection}>
        <View style={styles.leftContent}>
          {/* Superpowers section */}
          <PDFSuperPowersSection
            superpowers={superpowers}
            firstname={firstname}
            isDarkMode={isDarkMode}
          />

          {/* Growth Areas section with expandToFill to match action plan height */}
          <PDFGrowthAreasSection
            growthAreas={growthAreas}
            firstname={firstname}
            isDarkMode={isDarkMode}
            expandToFill={true}
          />
        </View>

        <View style={styles.rightContent}>
          {/* Action Plan section */}
          <PDFActionPlanSection
            actionSteps={actionSteps}
            firstname={firstname}
            isDarkMode={isDarkMode}
          />
        </View>
      </View>

      <PDFFooter
        firstname={firstname}
        isDarkMode={isDarkMode}
        pageNumber={pageNumber}
      />
    </View>
  );
};

export default PDFGrowthSection;
