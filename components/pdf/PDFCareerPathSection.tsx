import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { CareerPath } from "@/types/tests/mbti/results";
import { getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import { PDFLogo } from "./PDFLogo";
import PDFSuperPowersSection from "./shared/PDFSuperPowersSection";
import PDFGrowthAreasSection from "./shared/PDFGrowthAreasSection";
import PDFActionPlanSection from "./shared/PDFActionPlanSection";

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
    titleContainer: {
      marginTop: 40, // Space for logo
      marginBottom: 25,
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
    mainContent: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    leftContent: {
      flex: 1,
      paddingRight: 20,
    },
    rightContent: {
      flex: 1,
    },
    description: {
      fontSize: 14,
      color: theme.foreground,
      marginBottom: 25,
      lineHeight: 1.5,
    },
    imageContainer: {
      width: '100%',
      height: 240,
      marginBottom: 20,
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 6,
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

      {/* Title and subtitle */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Your Career Path</Text>
        <Text style={styles.subtitle}>
          {formatWithUsername("How You Shine at Work, {firstname}", firstname)}
        </Text>
      </View>

      {/* Main content with image on right */}
      <View style={styles.mainContent}>
        <View style={styles.leftContent}>
          <Text style={styles.description}>
            {formatWithUsername(summary, firstname)}
          </Text>

          {/* Superpowers section */}
          <PDFSuperPowersSection 
            superpowers={superpowers} 
            firstname={firstname} 
            isDarkMode={isDarkMode} 
          />

          {/* Growth Areas section */}
          <PDFGrowthAreasSection
            growthAreas={growthAreas}
            firstname={firstname}
            isDarkMode={isDarkMode}
          />
        </View>

        <View style={styles.rightContent}>
          <View style={styles.imageContainer}>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              style={styles.image}
            />
          </View>

          {/* Action Plan section */}
          <PDFActionPlanSection
            actionSteps={actionSteps}
            firstname={firstname}
            isDarkMode={isDarkMode}
          />
        </View>
      </View>

      {/* Page number */}
      <Text style={styles.pageNumber}>
        Cerebral Quotient | MBTI Test Report | {firstname || "Name"}
        {pageNumber && ` ${pageNumber}`}
      </Text>
    </View>
  );
};

export default PDFCareerPathSection;
