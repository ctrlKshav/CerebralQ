import React from "react";
import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import { ActionStepItem } from "@/types/tests/mbti";
import { createBaseStyles, getThemeColors } from "../PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";

// Create styles with theme variants
const createActionStepsStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: {
      padding: 40,
      backgroundColor: theme.background,
      height: "100%",
      position: "relative",
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
  });
};

interface PDFActionStepsSectionProps {
  firstname: string | null;
  actionSteps: ActionStepItem[];
  imageSrc?: string;
  isDarkMode?: boolean;
  pageNumber?: number;
}

const PDFActionStepsSection: React.FC<PDFActionStepsSectionProps> = ({
  firstname,
  actionSteps,
  imageSrc = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  isDarkMode = false,
  pageNumber = 4,
}) => {
  const styles = createActionStepsStyles(isDarkMode);

  return (
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
            <Text style={styles.stepText}>{formatWithUsername(step.description, firstname)}</Text>
          </View>
        ))}
      </View>

      {/* Image section */}
      <View style={styles.imageContainer}>
        <Image
          src={imageSrc}
          style={styles.actionImage}
          cache={true}
        />
      </View>

      {/* Footer inside the page */}
      <Text style={styles.footer}>
        CerebralQ Personality Assessment | Page {pageNumber}
      </Text>
    </View>
  );
};

export default PDFActionStepsSection;
