import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { formatWithUsername } from "@/lib/formatWithUsername";
import { createBaseStyles, getThemeColors } from "../PDFTheme";

// Extract styles to their own object outside the component
const createActionSectionStyles = (isDarkMode = false, totalSteps = 1) => {
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    container: {
      marginTop: 15,
      marginBottom: 20,
    },
    imageContainer: {
      marginBottom: 12,
      width: '100%',
      height: 180,
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: "cover",
      borderRadius: 6,
    },
    title: {
      fontSize: 18,
      color: theme.primary,
      fontFamily: "Helvetica-Bold",
      marginBottom: 12,
      paddingBottom: 4,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    stepsContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: totalSteps < 3 ? 'space-between' : 'center',
    },
    step: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 8,
      width: '48%', // Two columns of steps
    },
    stepNumber: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: theme.primary,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 8,
    },
    stepNumberText: {
      color: theme.primaryForeground,
      fontSize: 11,
      fontFamily: "Helvetica-Bold",
    },
    stepText: {
      flex: 1,
      fontSize: 12,
      color: theme.foreground,
      lineHeight: 1.4,
      paddingTop: 2,
    },
  });
};

interface ActionStep {
  description: string;
  number?: number;
}

interface PDFActionImageSectionProps {
  actionSteps: ActionStep[];
  imageSrc: string;
  title?: string;
  firstname: string | null;
  isDarkMode?: boolean;
}

const PDFActionImageSection: React.FC<PDFActionImageSectionProps> = ({
  actionSteps,
  imageSrc,
  title = "Let's Get Started on this!",
  firstname,
  isDarkMode = false,
}) => {
  const styles = createActionSectionStyles(isDarkMode, actionSteps.length);

  return (
    <View style={styles.container}>
      {/* Image above action steps */}
      <View style={styles.imageContainer}>
        <Image
          src={imageSrc}
          style={styles.image}
        />
      </View>
      
      {/* Full width action steps */}
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.stepsContent}>
        {actionSteps && actionSteps.map((step, index) => (
          <View key={`step-${index}`} style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{step.number || index + 1}</Text>
            </View>
            <Text style={styles.stepText}>
              {formatWithUsername(step.description, firstname)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PDFActionImageSection;
