import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { PersonalityDescription } from "@/types/tests/mbti/results";
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
      justifyContent: "flex-start",
      height: "100%",
      position: "relative", // Important for absolute positioning
    },
    contentContainer: {
      width: "100%",
      alignItems: "center",
      marginBottom: 15,
      paddingTop: 20, // Add padding to account for the logo at the top
    },
    logoContainer: {
      position: "absolute",
      top: 10, // Position at the very top of the page
      left: 10, // Position at the very left of the page
      width: 86,
      height: 52,
      zIndex: 10,
    },
    logo: {
      width: "100%",
      height: "100%",
    },
    badge: {
      padding: 3,
      backgroundColor: theme.muted,
      borderRadius: 10,
      marginTop: 0,
      marginBottom: 12,
      textAlign: "center",
      width: "auto",
      alignSelf: "center",
    },
    badgeText: {
      fontSize: 8, // Smaller font
      fontWeight: "normal",
      color: theme.mutedForeground,
      padding: "1 6", // Reduced padding
    },
    reportTitle: {
      fontSize: 14,
      color: theme.mutedForeground,
      fontFamily: "Times-Roman",
      marginBottom: 4,
      textAlign: "center",
    },
    greeting: {
      fontSize: 24, // Slightly smaller
      marginTop: 8,
      marginBottom: 8, // Reduced margin
      color: theme.foreground,
      fontFamily: "Times-Bold", // More clinical font
      textAlign: "center",
      lineHeight: 1.3,
      width: "60%", // Control width
      wordBreak: "normal", // Prevent overflow
      
    },
    nameText: {
      color: theme.primary,
      fontFamily: "Times-Bold",
    },
    personalityType: {
      fontFamily: "Times-Bold",
      fontSize: 28,
      color: theme.primary,
    },
    subtitle: {
      fontSize: 18,
      color: theme.foreground,
      fontFamily: "Times-Italic", // Italics for the alias
      marginBottom: 12,
      textAlign: "center",
    },
    imageContainer: {
      width: "90%",
      height: "200",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 5,
      marginBottom: 12,
      padding: 2,
    },
    personalityImage: {
      width: "100%", // Wider image
      height: "100%", // Adjusted height for better aspect ratio
      objectFit: "cover"
    },
    description: {
      fontSize: 12,
      color: theme.foreground, // Darker text for better readability
      marginBottom: 5,
      marginTop: 16,
      lineHeight: 1.4,
      textAlign: "left", // Left aligned for easier reading
      width: "90%", // Control width
      fontFamily: "Times-Roman", // More clinical font
    },
    encouragement: {
      fontSize: 12,
      color: theme.foreground,
      marginBottom: 8,
      marginTop: 8,
      lineHeight: 1.4,
      textAlign: "center",
      width: "90%", // Control width
      fontFamily: "Times-Italic",
    },
    interpretationNote: {
      fontSize: 11,
      color: theme.mutedForeground,
      marginTop: 12,
      marginBottom: 8,
      lineHeight: 1.4,
      textAlign: "left",
      width: "90%",
      padding: 10,
      backgroundColor: theme.muted,
      borderRadius: 4,
      borderLeftWidth: 3,
      borderLeftColor: theme.primary,
      fontFamily: "Helvetica",
    },
    assessmentInfo: {
      fontSize: 10,
      color: theme.mutedForeground,
      lineHeight: 1.4,
      textAlign: "center",
      marginTop: 8,
      borderTopWidth: 1,
      borderTopColor: theme.border,
      paddingTop: 8,
      width: "80%",
    },
    footer: baseStyles.footer,
    headerContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
    },
  });
};

interface PDFHeroProps {
  personalityType: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
  firstname: string | null;
  isDarkMode?: boolean;
  profileImage?: string;
}

export const PDFHero: React.FC<PDFHeroProps> = ({
  personalityType,
  personalityDescription,
  completionDate,
  firstname,
  isDarkMode = false,
  profileImage,
}) => {
  const styles = createHeroStyles(isDarkMode);

  // Use a more professional image URL for personality types
  const personalityImages: Record<string, string> = {
    INTJ: "https://cdn.pixabay.com/photo/2018/03/10/09/45/businessman-3213659_1280.jpg",
    INTP: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
    ENTJ: "https://cdn.pixabay.com/photo/2017/08/06/09/50/people-2590997_1280.jpg",
    ENTP: "https://cdn.pixabay.com/photo/2015/07/31/15/01/man-869215_1280.jpg",
    // Add other types with appropriate images
    default: "/results_artsy_board.jpeg",
  };

  const imagePath =
    personalityImages[personalityType] || personalityImages.default;

  const alias = personalityDescription.alias;
  const description = personalityDescription.description(firstname, false);

  return (
    <View style={styles.page}>
      {/* Logo absolutely positioned to the page (not the content container) */}
      <View style={styles.logoContainer}>
        <Image 
          src="/images/logoLight.png" 
          style={styles.logo} 
        />
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Assessment Completed: {completionDate}</Text>
        </View>

        <Text style={styles.greeting}>
          {firstname ? (
            <>
              Welcome, <Text style={styles.nameText}>{firstname}!</Text>
            </>
          ) : (
            <>Welcome, User!</>
          )}
        </Text>

        <Text style={styles.personalityType}>You are an {personalityType}</Text>
        <Text style={styles.subtitle}>{alias}</Text>

        <View style={styles.imageContainer}>
          <Image src={imagePath} style={styles.personalityImage} />
        </View>

        <Text style={styles.description}>{description}</Text>

        <Text style={styles.encouragement}>
          Does this personality profile resonate with you
          {firstname ? (
            <Text>
              , <Text style={styles.nameText}>{firstname}</Text>
            </Text>
          ) : (
            ""
          )}
          ? The following pages will provide deeper insights into your unique traits and tendencies.
        </Text>

        <Text style={styles.interpretationNote}>
          <Text style={{ fontFamily: "Helvetica-Bold" }}>How to Interpret Your Results: </Text>
          This assessment identifies your primary personality type based on cognitive preferences. 
          While these results represent your dominant traits, remember that personality exists on a 
          spectrum. Use these insights as a framework for self-understanding rather than a rigid 
          categorization.
        </Text>

        <Text style={styles.assessmentInfo}>
          This assessment is based on the Myers-Briggs Type Indicator® framework and complementary 
          personality research. The insights provided are designed to help you understand your 
          natural preferences and tendencies.
        </Text>
      </View>

      {/* Add footer inside the page */}
      <Text style={styles.footer}>
        Cerebral Quotient | Personality Assessment | Page 1
      </Text>
    </View>
  );
};
