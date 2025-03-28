import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { PersonalityDescription } from "@/types/tests/mbti";
import { createBaseStyles, getThemeColors } from "./PDFTheme";

// Extract styles to their own function outside the component
const createHeroStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 40,
      justifyContent: "space-between",
      height: "100%",
      position: "relative",
    },
    contentContainer: {
      width: "100%",
      alignItems: "center",
      marginBottom: 20,
    },
    badge: {
      padding: 8,
      backgroundColor: theme.primary,
      borderRadius: 20,
      marginBottom: 20,
    },
    badgeText: {
      fontSize: 12,
      color: theme.primaryForeground,
      padding: "2 10",
    },
    greeting: {
      fontSize: 28,
      marginBottom: 12,
      color: theme.foreground,
      fontFamily: "Helvetica",
      textAlign: "center",
      lineHeight: 1.4,
    },
    nameText: {
      color: theme.primary,
      fontFamily: "Helvetica-Bold",
    },
    personalityType: {
      fontFamily: "Helvetica-Bold",
      fontSize: 32,
      color: theme.primary,
    },
    subtitle: {
      fontSize: 20,
      color: theme.foreground,
      fontFamily: "Helvetica-Bold",
      marginBottom: 18,
      textAlign: "center",
    },
    description: {
      fontSize: 14,
      color: theme.mutedForeground,
      marginBottom: 15,
      lineHeight: 1.5,
      textAlign: "center",
      maxWidth: 500,
    },
    encouragement: {
      fontSize: 14,
      color: theme.mutedForeground,
      marginBottom: 20,
      lineHeight: 1.5,
      textAlign: "center",
    },
    imageContainer: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 5,
      marginBottom: 15,
    },
    personalityImage: {
      width: 280,
      height: 280,
    },
    footer: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 10,
      color: theme.mutedForeground,
    },
  });
};

interface PDFHeroProps {
  personalityType: string;
  personalityAlias: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
  firstname: string | null;
  isDarkMode?: boolean;
}

export const PDFHero: React.FC<PDFHeroProps> = ({
  personalityType,
  personalityAlias,
  personalityDescription,
  completionDate,
  firstname,
  isDarkMode = false,
}) => {
  const styles = createHeroStyles(isDarkMode);

  // Map personality types to their respective image paths (same as in HeroSection)
  const personalityImages: Record<string, string> = {
    default: "/ENTJ.jpeg",
  };

  const imagePath =
    personalityImages[personalityType] || personalityImages.default;

  return (
    <View style={styles.page}>
      <View style={styles.contentContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Completed on {completionDate}</Text>
        </View>

        <Text style={styles.greeting}>
          Hey{" "}
          {firstname ? (
            <Text style={styles.nameText}>{firstname}!</Text>
          ) : (
            <>there!</>
          )}{" "}
          {"\n"}
          You're an{" "}
          <Text style={styles.personalityType}>{personalityType}.</Text>
        </Text>

        <Text style={styles.subtitle}>{personalityAlias}</Text>

        <Text style={styles.description}>
          {personalityDescription.description}
        </Text>

        <Text style={styles.encouragement}>
          Does that sound like you
          {firstname ? (
            <Text>
              , <Text style={styles.nameText}>{firstname}</Text>
            </Text>
          ) : (
            ""
          )}
          ? Let's dive into what makes you so incredible!
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image src={imagePath} style={styles.personalityImage} />
      </View>
      
      {/* Add footer inside the page */}
      <Text style={styles.footer}>
        CerebralQ Personality Assessment | Page 1
      </Text>
    </View>
  );
};
