import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { PersonalityTypeInsights } from "@/types/tests/mbti";
import { createBaseStyles, getThemeColors } from "./PDFTheme";

// Create styles with theme variants
const createStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);

  return {
    ...StyleSheet.create({
      container: {
        margin: 10,
      },
      header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
      },
      subtitle: {
        fontSize: 11,
        color: theme.mutedForeground,
        marginBottom: 15,
        lineHeight: 1.5,
      },
      cardHeader: {
        marginBottom: 15,
      },
      cardTitle: {
        fontSize: 16,
        fontFamily: "Helvetica-Bold",
        color: theme.primary,
        marginBottom: 8,
      },
      insightSection: {
        marginBottom: 30, // Increased spacing between sections
        padding: 15, // Slightly more padding inside sections
        backgroundColor: theme.card,
        borderRadius: 6,
        borderLeftWidth: 4,
        // Add a subtle bottom border for additional separation
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
        borderTopWidth: 1,
        borderTopColor: theme.border,
      },
      // Section separator
      sectionSeparator: {
        height: 1,
        backgroundColor: theme.border,
        marginVertical: 15, // Space above and below separator
        opacity: 0.6, // Make it subtle
      },
      insightHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
      },
      insightIcon: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 8,
      },
      insightTitle: {
        fontSize: 14,
        fontFamily: "Helvetica-Bold",
        color: theme.foreground,
      },
      insightPoint: {
        flexDirection: "row",
        marginBottom: 6,
        paddingLeft: 4,
        alignItems: "center", // Center items vertically
      },
      bulletPoint: {
        fontSize: 12,
        marginRight: 6,
        width: 10,
        // color is now applied dynamically n the component
        fontFamily: "Helvetica-Bold", // Make bullet point bolder
      },
      pointText: {
        paddingTop:4,
        fontSize:8,
        lineHeight: 1.5,
        color: theme.cardForeground,        
      },
      // Color styles for different sections
      strengthsSection: {
        borderLeftColor: theme.chart2,
      },
      strengthsIcon: {
        backgroundColor: theme.chart2,
      },
      challengesSection: {
        borderLeftColor: theme.chart4,
      },
      challengesIcon: {
        backgroundColor: theme.chart4,
      },
      workStyleSection: {
        borderLeftColor: theme.chart1,
      },
      workStyleIcon: {
        backgroundColor: theme.chart1,
      },
      relationshipsSection: {
        borderLeftColor: theme.chart5,
      },
      relationshipsIcon: {
        backgroundColor: theme.chart5,
      },
      growthAreasSection: {
        borderLeftColor: theme.chart3,
      },
      growthAreasIcon: {
        backgroundColor: theme.chart3,
      },
      pageBreak: {
        marginTop: 30,
        marginBottom: 30,
        borderTopWidth: 1,
        borderTopColor: theme.border,
        paddingTop: 30,
      },
    }),
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
  };
};

interface PDFDetailedPersonalityInsightsProps {
  personalityType: string;
  personalityAlias: string;
  personalityInsights: PersonalityTypeInsights;
  sectionNumber: number;
  isDarkMode?: boolean;
}

// Helper function to get section styles
const getSectionStyles = (styles: any, sectionType: string) => {
  switch (sectionType) {
    case "strengths":
      return {
        section: styles.strengthsSection,
        icon: styles.strengthsIcon,
      };
    case "challenges":
      return {
        section: styles.challengesSection,
        icon: styles.challengesIcon,
      };
    case "workStyle":
      return {
        section: styles.workStyleSection,
        icon: styles.workStyleIcon,
      };
    case "relationships":
      return {
        section: styles.relationshipsSection,
        icon: styles.relationshipsIcon,
      };
    case "growthAreas":
      return {
        section: styles.growthAreasSection,
        icon: styles.growthAreasIcon,
      };
    default:
      return {
        section: {},
        icon: {},
      };
  }
};

export const PDFDetailedPersonalityInsights: React.FC<
  PDFDetailedPersonalityInsightsProps
> = ({
  personalityType,
  personalityAlias,
  personalityInsights,
  sectionNumber,
  isDarkMode = false,
}) => {
  const styles = createStyles(isDarkMode);

  // Helper function to render an insight section
  const renderInsightSection = (
    sectionType: string,
    section: { title: string; points: string[] }
  ) => {
    const sectionStyles = getSectionStyles(styles, sectionType);
    
    // Get the section color (same as icon background color)
    const sectionColor = sectionStyles.icon.backgroundColor;

    return (
      <View wrap={false} style={[styles.insightSection, sectionStyles.section]}>
        <View style={styles.insightHeader}>
          <View style={[styles.insightIcon, sectionStyles.icon]} />
          <Text style={styles.insightTitle}>{section.title}</Text>
        </View>

        {section.points.map((point, index) => (
          <View key={`point-${index}`} style={styles.insightPoint}>
            <Text style={[styles.bulletPoint, { color: sectionColor }]}>›</Text>
            <Text style={styles.pointText}>{point}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionNumber}>{sectionNumber}</Text>
        <Text style={styles.sectionTitle}>Detailed Insights</Text>
      </View>

      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>
          {personalityType} Profile: {personalityAlias}
        </Text>
      </View>

      <Text style={styles.subtitle}>
        These insights highlight key characteristics of {personalityType}{" "}
        personality types. Remember that these are tendencies, and individual
        experiences may vary.
      </Text>

      {/* First part: Strengths and Challenges */}
      {renderInsightSection("strengths", personalityInsights.strengths)}
      {renderInsightSection("challenges", personalityInsights.challenges)}
      {renderInsightSection("workStyle", personalityInsights.workStyle)}

      {/* Second part: Relationships, and Growth Areas */}
      <View break>
        {renderInsightSection(
          "relationships",
          personalityInsights.relationships
        )}
        {renderInsightSection("growthAreas", personalityInsights.growthAreas)}
      </View>
    </View>
  );
};
