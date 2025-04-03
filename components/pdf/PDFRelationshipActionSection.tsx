import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { ActionStepItem, RelationshipCompatibility } from "@/types/tests/mbti";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";

// Create styles with theme variants
const createRelationshipActionStyles = (isDarkMode = false) => {
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
    relationshipImage: {
      width: 450,
      height: 250,
      borderRadius: 10,
      objectFit: "cover",
    },
    footer: baseStyles.footer,
  });
};

interface PDFRelationshipActionSectionProps {
  relationship: RelationshipCompatibility;
  isDarkMode?: boolean;
  pageNumber: number;
  firstname: string | null;
}

const PDFRelationshipActionSection: React.FC<PDFRelationshipActionSectionProps> = ({
  relationship,
  isDarkMode = false,
  pageNumber,
  firstname,
}) => {
  const styles = createRelationshipActionStyles(isDarkMode);
  const { actionSteps } = relationship;
  
  // Helper function to get appropriate image based on relationship type
  const getRelationshipImage = (relationshipType: string) => {
    if (relationshipType === "Relationships") {
      return "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=2000&auto=format&fit=crop";
    } else if (relationshipType === "Friendships") {
      return "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop";
    } else {
      return "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop";
    }
  };

  return (
    <View style={styles.page}>
      {/* "Let's get started on this!" section */}
      <View style={styles.actionStepsContainer}>
        <View style={styles.actionStepsTitleContainer}>
          <Text style={styles.actionStepsTitle}>Let's get started on this!</Text>
        </View>

        {actionSteps.map((step, index) => (
          <View style={styles.actionStep} key={`step-${index}`}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <Text style={styles.stepText}>
              {formatWithUsername(step.description, firstname)}
            </Text>
          </View>
        ))}
      </View>

      {/* Image section */}
      <View style={styles.imageContainer}>
        <Image
          src={getRelationshipImage(relationship.title)}
          style={styles.relationshipImage}
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

export default PDFRelationshipActionSection;
