import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { PersonalityTypeInsights } from "@/types/tests/mbti";

// Create styles
const styles = StyleSheet.create({
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
    borderColor: "#0070f3",
    color: "#0070f3",
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
  },
  subtitle: {
    fontSize: 11,
    color: "#666666",
    marginBottom: 15,
    lineHeight: 1.5,
  },
  cardHeader: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: "#0070f3",
    marginBottom: 8,
  },
  insightSection: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: "#fafafa",
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
  },
  pointText: {
    fontSize: 10,
    flex: 1,
    lineHeight: 1.5,
  },
  // Color styles for different sections
  strengthsSection: {
    borderLeftColor: "#4ade80",
  },
  strengthsIcon: {
    backgroundColor: "#4ade80",
  },
  challengesSection: {
    borderLeftColor: "#fbbf24",
  },
  challengesIcon: {
    backgroundColor: "#fbbf24",
  },
  workStyleSection: {
    borderLeftColor: "#60a5fa",
  },
  workStyleIcon: {
    backgroundColor: "#60a5fa",
  },
  relationshipsSection: {
    borderLeftColor: "#a78bfa",
  },
  relationshipsIcon: {
    backgroundColor: "#a78bfa",
  },
  growthAreasSection: {
    borderLeftColor: "#2dd4bf",
  },
  growthAreasIcon: {
    backgroundColor: "#2dd4bf",
  },
  pageBreak: {
    marginTop: 30,
    marginBottom: 30,
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
    paddingTop: 30,
  },
});

interface PDFDetailedPersonalityInsightsProps {
  personalityType: string;
  personalityAlias: string;
  personalityInsights: PersonalityTypeInsights;
  sectionNumber: number;
}

// Helper function to get section styles
const getSectionStyles = (sectionType: string) => {
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
}) => {
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

// Helper function to render an insight section
const renderInsightSection = (
  sectionType: string,
  section: { title: string; points: string[] }
) => {
  const sectionStyles = getSectionStyles(sectionType);

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
