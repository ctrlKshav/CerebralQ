import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { CareerPath } from "@/types/tests/mbti/results";
import { getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import { PDFLogo } from "./PDFLogo";
import PDFSuperPowersSection from "./shared/PDFSuperPowersSection";
import PDFGrowthAreasSection from "./shared/PDFGrowthAreasSection";
import PDFActionPlanSection from "./shared/PDFActionPlanSection";
import PDFFooter from "./shared/PDFFooter";

// Extract styles to their own object outside the component
const createCareerSectionStyles = (isDarkMode = false) => {
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
    },
    titleSection: {
      flex: 3,
      paddingRight: 15,
    },
    title: {
      fontSize: 36,
      color: theme.primary,
      fontFamily: "PTSans-Bold",
      marginBottom: 5,
    },
    subtitle: {
      fontSize: 18,
      color: theme.foreground,
      fontFamily: "PTSans-Bold",
      marginBottom: 20,
    },
    imageSection: {
      flex: 2,
    },
    headerImage: {
      marginTop: 5,
      width: "100%",
      height: 250,
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
      marginBottom: 15,
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

interface PDFCareerPathSectionProps {
  career: CareerPath;
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber?: number;
  logoUrl?: string;
}

const PDFCareerPathSection: React.FC<PDFCareerPathSectionProps> = ({
  career,
  sectionNumber,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
  logoUrl = "/images/cq-logo.png",
}) => {
  // Use the extracted styles
  const styles = createCareerSectionStyles(isDarkMode);
  const { summary, superpowers, growthAreas, actionSteps } = career;

  return (
    <View style={styles.page}>
      {/* Logo in top right */}
      <PDFLogo logoUrl={logoUrl} />

      {/* Header section with title and image side by side */}
      <View style={styles.headerSection}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Your Career Path</Text>
          <Text style={styles.subtitle}>
            {formatWithUsername(
              "How You Shine at Work, {firstname}",
              firstname
            )}
          </Text>
          <Text style={styles.description}>
            {formatWithUsername(summary, firstname)}
          </Text>
        </View>

        <View style={styles.imageSection}>
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
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

export default PDFCareerPathSection;
