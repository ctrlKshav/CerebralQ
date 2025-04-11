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
      padding: 0,
      backgroundColor: theme.background,
      height: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    contentContainer: {
      width: "100%",
      padding: 20,
      paddingTop: 20,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    logoContainer: {
      width: 92,
      height: 68,
      marginBottom: 20,
    },
    logo: {
      width: "100%",
      height: "100%",
    },
    personalityContainer: {
      marginBottom: 20,
      alignItems: "center",
    },
    nameTypeText: {
      fontSize: 42,
      fontFamily: "PTSans",
      textAlign: "center",
      marginBottom: 10,
    },
    nameText: {
      color: theme.primary,
      fontFamily: "PTSans-Bold",
    },
    typeText: {
      color: theme.primary,
      fontFamily: "PTSans-Bold",
    },
    normalText: {
      color: "#000000",
      fontFamily: "PTSans",
    },
    subtitle: {
      fontSize: 28,
      color: theme.foreground,
      fontFamily: "PTSans-Italic",
      textAlign: "center",
    },
    imageContainer: {
      width: "100%",
      height: 340,
      marginTop: 20,
      marginBottom: 20,
      overflow: "hidden",
      borderRadius: 20,
    },
    personalityImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    description: {
      fontSize: 14,
      color: theme.foreground,
      lineHeight: 1.6,
      textAlign: "center",
      width: "80%",
      marginBottom: 40,
      alignSelf: "center",
    },
    badgeContainer: {
      marginTop: 10,
      marginBottom: 40,
      alignSelf: "center",
    },
    badgeText: {
      fontSize: 8,
      color: "white",
      textAlign: "center",
      lineHeight: 1.2,
      paddingTop: 8,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 10,
      backgroundColor: theme.primary,
    },
    footer: {
      fontSize: 10,
      color: theme.mutedForeground,
      textAlign: "center",
      marginBottom: 20,
      width: "100%",
    },
    interpretationNote: {
      fontSize: 9,
      color: theme.mutedForeground,
      lineHeight: 1.4,
      textAlign: "center",
      width: "80%",
      marginBottom: 20,
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
  pageNumber?: number;
  logoUrl?: string;
}

export const PDFHero: React.FC<PDFHeroProps> = ({
  personalityType,
  personalityDescription,
  completionDate,
  firstname,
  isDarkMode = false,
  profileImage,
  pageNumber = 1,
  logoUrl,
}) => {
  const styles = createHeroStyles(isDarkMode);

  // Use high-quality professional Unsplash images for each personality type
  const personalityImages: Record<string, string> = {
    INTJ: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2000&auto=format&fit=crop",
    INTP: "https://images.unsplash.com/photo-1456315138460-858d5d815b3a?q=80&w=2000&auto=format&fit=crop",
    ENTJ: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
    ENTP: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2000&auto=format&fit=crop",
    INFJ: "https://images.unsplash.com/photo-1502230831726-fe5549140034?q=80&w=2000&auto=format&fit=crop",
    INFP: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2000&auto=format&fit=crop",
    ENFJ: "https://images.unsplash.com/photo-1516004857830-7b2a70fe7989?q=80&w=2000&auto=format&fit=crop",
    ENFP: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2000&auto=format&fit=crop",
    ISTJ: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=2000&auto=format&fit=crop",
    ISFJ: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
    ESTJ: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
    ESFJ: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2000&auto=format&fit=crop",
    ISTP: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2000&auto=format&fit=crop",
    ISFP: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?q=80&w=2000&auto=format&fit=crop",
    ESTP: "https://images.unsplash.com/photo-1522165078649-823cf4dbaf46?q=80&w=2000&auto=format&fit=crop",
    ESFP: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2000&auto=format&fit=crop",
    default: "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=2000&auto=format&fit=crop",
  };

  // Use the architect-specific image for INTJ type (as shown in the reference)
  const architectImage = "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=2000&auto=format&fit=crop";

  const alias = personalityDescription.alias;
  const description = personalityDescription.description(firstname, false);

  // Determine which image to use - prioritize the architect image for INTJ
  const imageToUse = personalityType === "INTJ" 
    ? architectImage 
    : (personalityImages[personalityType] || personalityImages.default);

  return (
    <View style={styles.page}>
      <View style={styles.contentContainer}>
        {/* Logo at the top center */}
        <View style={styles.logoContainer}>
          <Image 
            src={logoUrl || "/images/cq-logo.png"} 
            style={styles.logo} 
          />
        </View>

        {/* Personality title with name */}
        <View style={styles.personalityContainer}>
          <Text style={styles.nameTypeText}>
            <Text style={styles.nameText}>{firstname || "Hey there"}, </Text>
            <Text style={styles.normalText}>you are an </Text>
            <Text style={styles.typeText}>{personalityType}!</Text>
          </Text>
          <Text style={styles.subtitle}>{alias}</Text>
        </View>

        {/* Full-width personality image */}
        <View style={styles.imageContainer}>
          <Image
            src={imageToUse}
            style={styles.personalityImage}
          />
        </View>

        {/* Personality description */}
        <Text style={styles.description}>{description}</Text>

        {/* Assessment date badge */}
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>
            Assessment Completed on: {completionDate}
          </Text>
        </View>

        {/* Legal/interpretation note at bottom */}
        <Text style={styles.interpretationNote}>
          This report will provide deeper insights into your unique traits and tendencies.
          This assessment is based on the Myers-Briggs Type Indicator® framework and
          complementary personality research. The insights provided are designed to
          help you understand your natural preferences and tendencies.
        </Text>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        Cerebral Quotient | MBTI Test Report | {firstname || "Name"}
      </Text>
    </View>
  );
};
