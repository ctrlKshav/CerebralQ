import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { CareerPathFull } from "@/types/tests/mbti/personalityDatabase";
import { getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import { PDFLogo } from "./PDFLogo";
import PDFSuperPowersSection from "./shared/PDFSuperPowersSection";
import PDFGrowthAreasSection from "./shared/PDFGrowthAreasSection";
import PDFActionPlanSection from "./shared/PDFActionPlanSection";
import PDFFooter from "./shared/PDFFooter";
import PDFSectionHeader from "./shared/PDFSectionHeader";

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
  });
};

interface PDFCareerPathSectionProps {
  career: CareerPathFull;
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
      <PDFSectionHeader
        title="Your Career Path"
        subtitle="How You Shine at Work, {firstname}"
        description={summary}
        firstname={firstname}
        isDarkMode={isDarkMode}
        imageSrc="https://res.cloudinary.com/dhix3y82h/image/upload/v1745393727/careerPath_orckon.jpg"
      />

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
