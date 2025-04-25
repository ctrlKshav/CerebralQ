import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import { ValuesAndMotivators } from "@/types/tests/mbti/personalityDatabase";
import { getThemeColors } from "./PDFTheme";
import { PDFLogo } from "./PDFLogo";
import PDFSuperPowersSection from "./shared/PDFSuperPowersSection";
import PDFGrowthAreasSection from "./shared/PDFGrowthAreasSection";
import PDFActionPlanSection from "./shared/PDFActionPlanSection";
import PDFFooter from "./shared/PDFFooter";
import PDFSectionHeader from "./shared/PDFSectionHeader";

// Extract styles to their own object outside the component
const createValuesSectionStyles = (isDarkMode = false) => {
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
  logoUrl = "/images/cq-logo.png",
}) => {
  // Use the extracted styles
  const styles = createValuesSectionStyles(isDarkMode);
  const { coreValues, motivators, actionItems, summary } = valuesAndMotivators;

  return (
    <View style={styles.page}>
      {/* Logo in top right */}
      <PDFLogo logoUrl={logoUrl} />

      {/* Header section with title and image side by side */}
      <PDFSectionHeader
        title="Values & Motivators"
        subtitle="What Drives You, {firstname}"
        description={summary}
        firstname={firstname}
        isDarkMode={isDarkMode}
        imageSrc="https://res.cloudinary.com/dhix3y82h/image/upload/v1745393724/valuesMotivators_l2yvwd.jpg"
      />

      {/* Main content section */}
      <View style={styles.contentSection}>
        <View style={styles.leftContent}>
          {/* Core Values as Superpowers section */}
          <PDFSuperPowersSection
            superpowers={coreValues}
            firstname={firstname}
            isDarkMode={isDarkMode}
          />

          {/* Motivators as Growth Areas section */}
          <PDFGrowthAreasSection
            growthAreas={motivators}
            firstname={firstname}
            isDarkMode={isDarkMode}
            expandToFill={true}
          />
        </View>

        <View style={styles.rightContent}>
          {/* Action Plan section */}
          <PDFActionPlanSection
            actionSteps={actionItems}
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

export default PDFValuesAndMotivatorsSection;
