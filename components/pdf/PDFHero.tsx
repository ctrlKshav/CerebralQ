import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { PersonalityDescription } from "@/types/tests/mbti/results";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { PDFLogo } from "./PDFLogo";

// Extract styles to their own function outside the component
const createHeroStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: {
      padding: 20,
      backgroundColor: theme.background,
      height: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerSection: {
      width: "100%",
      alignItems: "center",
      marginBottom: 15,
    },
    logoContainer: {
      // position: "absolute",
      // top: 40,
      // left: "50%",
      // transform: "translateX(-50%)",
      // zIndex: 10,
      width: 92,
      height: 54,
    },
    logo: {
      width: "100%",
      height: "100%",
    },
    badge: {
      padding: 3,
      backgroundColor: theme.primary,
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 12,
      textAlign: "center",
      alignSelf: "flex-start",
    },
    badgeText: {
      fontSize: 8,
      fontWeight: "normal",
      color: "white",
      padding: "1 6",
    },
    contentLayout: {
      marginBottom: 100,
      flexDirection: "row",
      width: "100%",
      gap: 20,
    },
    leftColumn: {
      flex: 3,
      paddingRight: 10,
    },
    rightColumn: {
      flex: 2,
      alignItems: "center",
      justifyContent: "center",
    },
    greeting: {
      fontSize: 24,
      marginTop: 0,
      marginBottom: 8,
      color: theme.foreground,
      fontFamily: "PTSans-Bold",
      lineHeight: 1.3,
    },
    nameText: {
      color: theme.primary,
      fontFamily: "PTSans-Bold",
    },
    personalityType: {
      fontFamily: "PTSans-Bold",
      fontSize: 32,
      color: theme.primary,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: "normal",
      color: theme.foreground,
      fontFamily: "PTSans-Italic",
      marginBottom: 12,
    },
    imageContainer: {
      width: "100%",
      height: 280,
      marginTop: 5,
      marginBottom: 5,
    },
    personalityImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: 12,
    },
    description: {
      fontSize: 12,
      color: theme.foreground,
      marginBottom: 15,
      lineHeight: 1.4,
      textAlign: "left",
      fontFamily: "PTSans",
    },
    bottomContent: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 100,
    },

    encouragement: {
      fontSize: 12,
      color: theme.foreground,
      marginBottom: 12,
      lineHeight: 1.4,
      textAlign: "left",
      fontFamily: "PTSans",
    },
    interpretationNote: {
      fontSize: 11,
      color: theme.mutedForeground,
      marginTop: 20,
      marginBottom: 8,
      lineHeight: 1.4,
      textAlign: "left",
      width: "100%",
      padding: 10,
      backgroundColor: theme.muted,
      borderRadius: 4,
      borderLeftWidth: 3,
      borderLeftColor: theme.primary,
      fontFamily: "PTSans",
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
      paddingHorizontal: 10,
      width: "100%",
    },
    footer: baseStyles.footer,
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
    INTJ: "https://images.unsplash.com/photo-1507881902563-aaee9eskau4?q=80&w=1770&auto=format&fit=crop",
    INTP: "https://images.unsplash.com/photo-1456315138460-858d5d815b3a?q=80&w=1770&auto=format&fit=crop",
    ENTJ: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop",
    ENTP: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=1770&auto=format&fit=crop",
    INFJ: "https://images.unsplash.com/photo-1502230831726-fe5549140034?q=80&w=1887&auto=format&fit=crop",
    INFP: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1770&auto=format&fit=crop",
    ENFJ: "https://images.unsplash.com/photo-1516004857830-7b2a70fe7989?q=80&w=1932&auto=format&fit=crop",
    ENFP: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1770&auto=format&fit=crop",
    ISTJ: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1887&auto=format&fit=crop",
    ISFJ: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1770&auto=format&fit=crop",
    ESTJ: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1770&auto=format&fit=crop",
    ESFJ: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1770&auto=format&fit=crop",
    ISTP: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1770&auto=format&fit=crop",
    ISFP: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?q=80&w=1932&auto=format&fit=crop",
    ESTP: "https://images.unsplash.com/photo-1522165078649-823cf4dbaf46?q=80&w=1770&auto=format&fit=crop",
    ESFP: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1770&auto=format&fit=crop",
    default:
      "https://images.unsplash.com/photo-1563807894768-f28bee0d37b6?q=80&w=1770&auto=format&fit=crop",
  };

  const imagePath =
    personalityImages[personalityType] || personalityImages.default;
  const alias = personalityDescription.alias;
  const description = personalityDescription.description(firstname, false);

  return (
    <View style={styles.page}>
      {/* Add custom logo in top right */}
      <PDFLogo logoUrl={logoUrl} />
      
      {/* Logo at the top center */}
      <View style={styles.logoContainer}>
        {isDarkMode ? (
          <Image src="/images/logoDark.png" style={styles.logo} />
        ) : (
          <Image src="/images/logoLight.png" style={styles.logo} />
        )}
      </View>

      {/* Two-column layout */}
      <View style={styles.contentLayout}>
        {/* Left column - Content */}
        <View style={styles.leftColumn}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Assessment Completed: {completionDate}
            </Text>
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

          <Text style={styles.personalityType}>
            You are an {personalityType}
          </Text>
          <Text style={styles.subtitle}>{alias}</Text>

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
            ? The following pages will provide deeper insights into your unique
            traits and tendencies.
          </Text>
        </View>

        {/* Right column - Image */}
        <View style={styles.rightColumn}>
          <View style={styles.imageContainer}>
            <Image
              src={
                "https://images.unsplash.com/photo-1563807894768-f28bee0d37b6?q=80&w=1770&auto=format&fit=crop"
              }
              style={styles.personalityImage}
            />
          </View>
        </View>
      </View>

      <View style={styles.bottomContent}>
        {/* Bottom section - Interpretation note */}
        <Text style={styles.interpretationNote}>
          <Text style={{ fontFamily: "PTSans-Bold" }}>
            How to Interpret Your Results:{" "}
          </Text>
          This assessment identifies your primary personality type based on
          cognitive preferences. While these results represent your dominant
          traits, remember that personality exists on a spectrum. Use these
          insights as a framework for self-understanding rather than a rigid
          categorization.
        </Text>
        <Text style={styles.assessmentInfo}>
          This assessment is based on the Myers-Briggs Type Indicator® framework
          and complementary personality research. The insights provided are
          designed to help you understand your natural preferences and tendencies.
        </Text>
      
      </View>
        {/* Footer */}
        <Text style={styles.footer}>
          Cerebral Quotient | Personality Assessment | Page {pageNumber}
        </Text>
    </View>
  );
};
