import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import type { TraitScores } from "@/types/tests/mbti/traits";
import { getPersonalityTraitDescriptions } from "@/data/mbti/traitDescriptions";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { PDFLogo } from "./PDFLogo";

// Extract styles to their own function outside the component
const createPersonalityTraitsStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: {
      padding: 20,
      backgroundColor: theme.background,
      height: "100%",
      position: "relative",
      justifyContent: "center", // Center content vertically
    },
    headerContainer: {
      alignItems: "center",
      marginBottom: 30,
    },
    gridContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 20,
      padding: "0 15px",
    },
    traitContainer: {
      width: "45%", // Slightly narrower to account for gap
      borderRadius: 20,
      borderWidth: 1,
      padding: 15,
      paddingBottom: 20,
      height: 220,
    },
    titleContainer: {
      alignItems: "center",
      marginBottom: 15,
    },
    traitTitle: {
      fontSize: 18,
      fontFamily: "PTSans-Bold",
      textAlign: "center",
      marginBottom: 5,
    },
    labelRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    },
    label: {
      fontSize: 9,
      color: theme.mutedForeground,
      fontFamily: "PTSans",
    },
    barContainer: {
      height: 16,
      backgroundColor: theme.muted,
      borderRadius: 8,
      position: "relative",
      overflow: "hidden",
      marginTop: 5,
      marginBottom: 15,
    },
    leftBar: {
      position: "absolute",
      left: 0,
      height: "100%",
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    rightBar: {
      position: "absolute",
      right: 0,
      height: "100%",
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
    percentageOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 10,
    },
    percentageText: {
      fontSize: 8,
      fontFamily: "PTSans-Bold",
      color: "white",
    },
    traitText: {
      fontSize: 10,
      color: theme.foreground,
      lineHeight: 1.4,
    },
    sectionTitle: {
      fontSize: 36,
      fontFamily: "PTSans-Bold",
      color: theme.primary,
      marginBottom: 5,
      textAlign: "center",
    },
    sectionSubtitle: {
      fontSize: 16,
      fontFamily: "PTSans",
      color: theme.foreground,
      textAlign: "center",
      maxWidth: 500,
      alignSelf: "center",
    },
    footer: baseStyles.footer,
  });
};

interface PDFPersonalityTraitsProps {
  subtitle?: string;
  traitScores: TraitScores;
  sectionNumber: number;
  personalityType: string;
  firstname?: string;
  isDarkMode?: boolean;
  pageNumber?: number;
  logoUrl?: string;
}

export const PDFPersonalityTraits: React.FC<PDFPersonalityTraitsProps> = ({
  subtitle = "Let's break down what makes you tick—it's like a little guide to understanding yourself better!",
  traitScores,
  sectionNumber,
  personalityType,
  firstname,
  isDarkMode = false,
  pageNumber,
  logoUrl,
}) => {
  const styles = createPersonalityTraitsStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);

  // Convert traits object to array for easier manipulation
  const traitsArray = Object.entries(traitScores).map(([trait, score]) => {
    const typedTrait = trait as keyof TraitScores;
    const description =
      getPersonalityTraitDescriptions(personalityType)[typedTrait];
    const leftPercentage = score.leftPercentage;
    const rightPercentage = score.rightPercentage;
    // Use chart colors from the theme for trait colors
    const colorIndex = (Object.keys(traitScores).indexOf(trait) % 5) + 1;
    const color =
      theme[`chart${colorIndex}` as keyof typeof theme] || theme.primary;

    const dominant =
      score.dominant === "left" ? description.left : description.right;

    return {
      trait,
      typedTrait,
      description,
      leftPercentage,
      rightPercentage,
      color,
      dominant,
      score
    };
  });

  return (
    <View style={styles.page}>
      {/* Add logo to top right */}
      <PDFLogo logoUrl={logoUrl} />
      
      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>Personality Blueprint</Text>
        <Text style={styles.sectionSubtitle}>{subtitle}</Text>
      </View>

      <View style={styles.gridContainer}>
        {traitsArray.map((traitData) => {
          const dominantSide = traitData.score.dominant === "left" ? "left" : "right";
          const dominantLabel = dominantSide === "left" 
            ? traitData.description.leftLabel 
            : traitData.description.rightLabel;
          
          return (
            <View 
              key={traitData.trait} 
              style={[
                styles.traitContainer, 
                { 
                  borderColor: traitData.color
                }
              ]}
            >
              <View style={styles.titleContainer}>
                <Text style={[styles.traitTitle, { color: traitData.color }]}>
                  {dominantLabel} ({traitData.dominant.letter})
                </Text>
              </View>

              <View style={styles.labelRow}>
                <Text style={styles.label}>{traitData.description.leftLabel}</Text>
                <Text style={styles.label}>{traitData.description.rightLabel}</Text>
              </View>

              <View style={styles.barContainer}>
                <View
                  style={[
                    styles.leftBar,
                    {
                      width: `${traitData.leftPercentage}%`,
                      backgroundColor: traitData.color,
                      opacity: traitData.score.dominant === "left" ? 1 : 0.2,
                    },
                  ]}
                />
                <View
                  style={[
                    styles.rightBar,
                    {
                      width: `${traitData.rightPercentage}%`,
                      backgroundColor: traitData.color,
                      opacity: traitData.score.dominant === "right" ? 1 : 0.2,
                    },
                  ]}
                />

                {/* Display percentages directly on the bars */}
                <View style={styles.percentageOverlay}>
                  <Text
                    style={[
                      styles.percentageText,
                      { opacity: traitData.leftPercentage > 15 ? 1 : 0 }, // Only show if there's enough space
                    ]}
                  >
                    {Math.round(traitData.leftPercentage)}%
                  </Text>
                  <Text
                    style={[
                      styles.percentageText,
                      { opacity: traitData.rightPercentage > 15 ? 1 : 0 }, // Only show if there's enough space
                    ]}
                  >
                    {Math.round(traitData.rightPercentage)}%
                  </Text>
                </View>
              </View>

              <Text style={styles.traitText}>
                {traitData.description.getDominantTraitDescription(firstname)}
              </Text>
            </View>
          );
        })}
      </View>

      {/* Add footer inside the page */}
      <Text style={styles.footer}>
        Cerebral Quotient | MBTI Test Report | {firstname ? firstname : "Name"}
      </Text>
    </View>
  );
};
