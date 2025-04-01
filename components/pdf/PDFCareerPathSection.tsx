import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { CareerPath } from "@/types/tests/mbti";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import { AwardIcon, BriefcaseIcon, CheckboxIcon, UpArrowIcon } from "./icons";

// Define specific colors for icons
const ICON_COLORS = {
  award: "#10b981", // emerald-500
  briefcase: "#f59e0b", // amber-500
  checkbox: "#10b981", // emerald-500
  upArrow: "#f59e0b", // amber-500
};

// Extract styles to their own object outside the component
const createCareerSectionStyles = (isDarkMode = false) => {
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
    card: {
      marginBottom: 25,
      padding: 18,
      backgroundColor: theme.card,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
    },
    cardTitle: {
      fontSize: 18,
      color: theme.primary,
      fontFamily: "Helvetica-Bold",
      textAlign: "center",
    },
    cardTitleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 15,
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    cardTitleIcon: {
      marginRight: 8,
    },
    listItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 10,
      paddingHorizontal: 8,
    },
    bullet: {
      fontSize: 16,
      color: theme.primary,
      marginRight: 8,
      lineHeight: 1.2,
    },
    listItemText: {
      flex: 1,
      fontSize: 13,
      color: theme.foreground,
      lineHeight: 1.4,
    },
    actionStepsContainer: {
      marginBottom: 30,
      padding: 25,
      backgroundColor: theme.card,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
    },
    actionStepsTitle: {
      fontSize: 24,
      color: theme.primary,
      fontFamily: "Helvetica-Bold",
      textAlign: "center",
    },
    actionStepsTitleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    actionStep: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 16,
      paddingHorizontal: 10,
    },
    stepNumber: {
      width: 26,
      height: 26,
      borderRadius: 13,
      backgroundColor: theme.primary,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10,
    },
    stepNumberText: {
      color: theme.primaryForeground,
      fontSize: 14,
      fontFamily: "Helvetica-Bold",
    },
    stepText: {
      flex: 1,
      fontSize: 14,
      color: theme.foreground,
      lineHeight: 1.5,
      paddingTop: 3,
    },
    imageContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
    },
    actionImage: {
      width: 450,
      height: 250,
      borderRadius: 10,
      objectFit: "cover",
    },
    footer: baseStyles.footer,
    headerRow: baseStyles.headerRow,
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
    bulletIcon: {
      marginRight: 8,
      marginTop: 1,
    },
  });
};

interface PDFCareerPathSectionProps {
  career: CareerPath;
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
}

const PDFCareerPathSection: React.FC<PDFCareerPathSectionProps> = ({
  career,
  sectionNumber,
  firstname,
  isDarkMode = false,
}) => {
  // Use the extracted styles
  const styles = createCareerSectionStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);
  const { superpowers, growthAreas, actionSteps } = career;

  return (
    <>
      {/* Page 1: Header, Superpowers, Growth Areas */}
      <View style={styles.page}>
        {/* Section header */}
        <View style={styles.headerContainer}>
          <View style={styles.headerRow}>
            <Text style={styles.sectionNumber}>{sectionNumber}</Text>
            <Text style={styles.sectionTitle}>Your Career Path</Text>
          </View>
          <Text style={styles.subtitle}>
            {formatWithUsername(
              "How You Shine at Work, {firstname}",
              firstname
            )}
          </Text>
          <Text style={styles.description}>
            {formatWithUsername(career.summary, firstname)}
          </Text>
        </View>

        {/* Career Superpowers */}
        <View style={styles.card}>
          <View style={styles.cardTitleContainer}>
            <View style={styles.cardTitleIcon}>
              <AwardIcon color={ICON_COLORS.award} size={20} />
            </View>
            <Text style={styles.cardTitle}>Your Career Superpowers</Text>
          </View>

          {superpowers.map((item, index) => (
            <View style={styles.listItem} key={`superpower-${index}`}>
              <View style={styles.bulletIcon}>
                <CheckboxIcon color={ICON_COLORS.checkbox} size={14} />
              </View>
              <Text style={styles.listItemText}>
                {formatWithUsername(item.description, firstname)}
              </Text>
            </View>
          ))}
        </View>

        {/* Growth Areas */}
        <View style={styles.card}>
          <View style={styles.cardTitleContainer}>
            <View style={styles.cardTitleIcon}>
              <BriefcaseIcon color={ICON_COLORS.briefcase} size={20} />
            </View>
            <Text style={styles.cardTitle}>Where You Can Grow a Bit</Text>
          </View>

          {growthAreas.map((item, index) => (
            <View style={styles.listItem} key={`growth-${index}`}>
              <View style={styles.bulletIcon}>
                <UpArrowIcon color={ICON_COLORS.upArrow} size={14} />
              </View>
              <Text style={styles.listItemText}>
                {formatWithUsername(item.description, firstname)}
              </Text>
            </View>
          ))}
        </View>

        {/* Footer inside the page */}
        <Text style={styles.footer}>
          CerebralQ Personality Assessment | Page 3
        </Text>
      </View>

      {/* Page 2: Let's Make It Happen and Image */}
      <View style={styles.page}>
        {/* "Let's Make It Happen" section */}
        <View style={styles.actionStepsContainer}>
          <View style={styles.actionStepsTitleContainer}>
            <Text style={styles.actionStepsTitle}>Let's Make It Happen</Text>
          </View>

          {actionSteps.map((step, index) => (
            <View style={styles.actionStep} key={`step-${index}`}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step.description}</Text>
            </View>
          ))}
        </View>

        {/* Image section */}
        <View style={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            style={styles.actionImage}
          />
        </View>

        {/* Footer inside the page */}
        <Text style={styles.footer}>
          CerebralQ Personality Assessment | Page 4
        </Text>
      </View>
    </>
  );
};

export default PDFCareerPathSection;
