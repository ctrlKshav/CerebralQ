import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { PersonalityDescription } from "@/types/tests/mbti/personalityDatabase";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import PDFPageNumber from "./shared/PDFPageNumber";
import PDFFooter from "./shared/PDFFooter";

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
      height: 60,
      marginBottom: 15,
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
      color: theme.foreground,
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
   INTJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/intj_tvtwmy.jpg",
   INTP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/intp_njepy8.jpg",
   ISFP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/isfp_vk5cdp.jpg",
   INFJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/infj_ytry83.jpg",
   ISFJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/isfj_qhxdy3.jpg",
   ISTP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/istp_zpck32.jpg",
   ISTJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/istj_myx8ge.jpg",
   INFP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/infp_vir8zp.jpg",
   ENFP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/enfp_mj348n.jpg",
   ENFJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/enfj_ytry83.jpg",
   ESTJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/estj_i4o71p.jpg",
   ENTP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/entp_utpbo4.jpg",
   ENTJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/entj_wcww09.jpg",
   ESFJ: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/esfj_d2jmws.jpg",
   ESTP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/estp_xgu6es.jpg",
   ESFP: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/esfp_eycynf.jpg",
   default: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/enfj_ytry83.jpg",
  };

  const alias = personalityDescription.alias;
  const description = personalityDescription.description(firstname, false);

  // Determine which image to use - prioritize the architect image for INTJ
  const imageToUse =  (personalityImages[personalityType] || personalityImages.default);

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

      {/* Replace footer with centralized component */}
      <PDFFooter pageNumber={pageNumber} firstname={firstname} isDarkMode={isDarkMode} />
    </View>
  );
};
