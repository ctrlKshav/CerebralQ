import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { ValuesAndMotivators } from "@/types/tests/mbti/results";
import { getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import { PDFLogo } from "./PDFLogo";
import PDFSuperPowersSection from "./shared/PDFSuperPowersSection";
import PDFGrowthAreasSection from "./shared/PDFGrowthAreasSection";
import PDFActionPlanSection from "./shared/PDFActionPlanSection";
import PDFFooter from "./shared/PDFFooter";

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
  const { coreValues, motivators, actionItems } = valuesAndMotivators;

  return (
    <View style={styles.page}>
      {/* Logo in top right */}
      <PDFLogo logoUrl={logoUrl} />

      {/* Header section with title and image side by side */}
      <View style={styles.headerSection}>
        <View style={styles.titleSection}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Values & Motivators</Text>
            <Text style={styles.subtitle}>
              {formatWithUsername("What Drives You, {firstname}", firstname)}
            </Text>
          </View>
          <Text style={styles.description}>
            {formatWithUsername(valuesAndMotivators.summary, firstname)}
          </Text>
        </View>

        <View style={styles.imageSection}>
          <Image
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            style={styles.headerImage}
          />
        </View>
      </View>

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
