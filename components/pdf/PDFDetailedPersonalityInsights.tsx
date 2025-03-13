import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { PersonalityTypeInsights } from "@/types/tests/mbti";

// Create styles with theme variants
const createStyles = (isDarkMode = false) => StyleSheet.create({
  container: {
    margin: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: isDarkMode ? '#60a5fa' : "#0070f3",
    color: isDarkMode ? '#60a5fa' : "#0070f3",
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: isDarkMode ? '#ffffff' : '#000000',
  },
  subtitle: {
    fontSize: 11,
    color: isDarkMode ? '#a1a1aa' : "#666666",
    marginBottom: 15,
    lineHeight: 1.5,
  },
  cardHeader: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: isDarkMode ? '#60a5fa' : "#0070f3",
    marginBottom: 8,
  },
  insightSection: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: isDarkMode ? '#27272a' : "#fafafa",
    borderRadius: 6,
    borderLeftWidth: 4,
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
    color: isDarkMode ? '#e4e4e7' : '#000000',
  },
  insightPoint: {
    flexDirection: "row",
    marginBottom: 6,
    paddingLeft: 4,
  },
  bulletPoint: {
    fontSize: 11,
    marginRight: 6,
    width: 10,
    color: isDarkMode ? '#a1a1aa' : '#666666',
  },
  pointText: {
    fontSize: 10,
    flex: 1,
    lineHeight: 1.5,
    color: isDarkMode ? '#d4d4d8' : '#444444',
  },
  // Color styles for different sections
  strengthsSection: {
    borderLeftColor: isDarkMode ? "#4ade80" : "#4ade80",
  },
  strengthsIcon: {
    backgroundColor: isDarkMode ? "#4ade80" : "#4ade80",
  },
  challengesSection: {
    borderLeftColor: isDarkMode ? "#fbbf24" : "#fbbf24",
  },
  challengesIcon: {
    backgroundColor: isDarkMode ? "#fbbf24" : "#fbbf24",
  },
  workStyleSection: {
    borderLeftColor: isDarkMode ? "#60a5fa" : "#60a5fa",
  },
  workStyleIcon: {
    backgroundColor: isDarkMode ? "#60a5fa" : "#60a5fa",
  },
  relationshipsSection: {
    borderLeftColor: isDarkMode ? "#a78bfa" : "#a78bfa",
  },
  relationshipsIcon: {
    backgroundColor: isDarkMode ? "#a78bfa" : "#a78bfa",
  },
  growthAreasSection: {
    borderLeftColor: isDarkMode ? "#2dd4bf" : "#2dd4bf",
  },
  growthAreasIcon: {
    backgroundColor: isDarkMode ? "#2dd4bf" : "#2dd4bf",
  },
  pageBreak: {
    marginTop: 30,
    marginBottom: 30,
    borderTopWidth: 1,
    borderTopColor: isDarkMode ? '#3f3f46' : "#e5e5e5",
    paddingTop: 30,
  },
});

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
  isDarkMode = false
}) => {
  const styles = createStyles(isDarkMode);
  
  // Helper function to render an insight section
  const renderInsightSection = (sectionType: string, section: { title: string; points: string[] }) => {
    const sectionStyles = getSectionStyles(styles, sectionType);

    return (
      <View wrap={false} style={[styles.insightSection, sectionStyles.section]}>
        <View style={styles.insightHeader}>
          <View style={[styles.insightIcon, sectionStyles.icon]} />
          <Text style={styles.insightTitle}>{section.title}</Text>
        </View>

        {section.points.map((point, index) => (
          <View key={`point-${index}`} style={styles.insightPoint}>
            <Text style={styles.bulletPoint}>→</Text>
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
