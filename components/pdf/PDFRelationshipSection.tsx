import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { RelationshipCompatibility } from "@/types/tests/mbti/results";
import { getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import { PDFLogo } from "./PDFLogo";
import PDFSuperPowersSection from "./shared/PDFSuperPowersSection";
import PDFGrowthAreasSection from "./shared/PDFGrowthAreasSection";
import PDFActionPlanSection from "./shared/PDFActionPlanSection";
import PDFFooter from "./shared/PDFFooter";
import PDFSectionHeader from "./shared/PDFSectionHeader";

// Define specific colors for icons
const ICON_COLORS = {
  award: "#10b981", // emerald-500
  heart: "#ec4899", // pink-500
  users: "#3b82f6", // blue-500
  arrowRight: "#f59e0b", // amber-500
  messageSquare: "#8b5cf6", // violet-500
};

// Create styles with theme variants
const createRelationshipSectionStyles = (isDarkMode = false) => {
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: {
      padding: 30,
      backgroundColor: theme.background,
      height: "100%",
      position: "relative",
    },
    compatibleTypesContainer: {
      marginBottom: 15,
      marginTop: 5,
    },
    compatibleTypesLabel: {
      fontSize: 14,
      fontFamily: "PTSans",
      color: theme.foreground,
      marginRight: 8,
      marginBottom: 10,
    },
    typesRow: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    typeBadge: {
      backgroundColor: `${theme.muted}`,
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 4,
      margin: 4,
    },
    typeBadgeText: {
      fontSize: 12,
      color: theme.primary,
      fontFamily: "PTSans-Bold",
    },
    contentSection: {
      flexDirection: "row",
      marginTop: 5,
    },
    leftContent: {
      flex: 3,
      paddingRight: 15,
      alignSelf: "flex-end",
    },
    rightContent: {
      flex: 2,
    },
  });
};

interface PDFRelationshipSectionProps {
  relationship: RelationshipCompatibility;
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber?: number;
  imageSrc?: string;
  logoUrl?: string;
}

const PDFRelationshipSection: React.FC<PDFRelationshipSectionProps> = ({
  relationship,
  sectionNumber,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
  imageSrc = "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393691/relationship_zqyq0y.jpg",
  logoUrl = "/images/cq-logo.png",
}) => {
  const styles = createRelationshipSectionStyles(isDarkMode);
  const { superpowers, growthAreas, compatibleTypes, actionSteps, description } = relationship;
  
  return (
    <View style={styles.page}>
      {/* Logo in top right */}
      <PDFLogo logoUrl={logoUrl} />

      {/* Header section with title and image side by side */}
      <PDFSectionHeader
        title={`Your ${relationship.title}`}
        subtitle={relationship.subtitle}
        description={description}
        firstname={firstname}
        isDarkMode={isDarkMode}
        imageSrc={imageSrc}
      />
      
      {/* Compatible types section - separate component */}
      <View style={styles.compatibleTypesContainer}>
        <Text style={styles.compatibleTypesLabel}>Compatible with:</Text>
        <View style={styles.typesRow}>
          {compatibleTypes.map((type, index) => (
            <View key={`type-${index}`} style={styles.typeBadge}>
              <Text style={styles.typeBadgeText}>{type}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Main content section */}
      <View style={styles.contentSection}>
        <View style={styles.leftContent}>
          {/* Superpowers section */}
          <PDFSuperPowersSection
            superpowers={superpowers}
            firstname={firstname}
            isDarkMode={isDarkMode}
          />

          {/* Growth Areas section with expandToFill to match action plan height */}
          <PDFGrowthAreasSection
            growthAreas={growthAreas}
            firstname={firstname}
            isDarkMode={isDarkMode}
            expandToFill={true}
          />
        </View>

        <View style={styles.rightContent}>
          {/* Action Plan section */}
          <PDFActionPlanSection
            actionSteps={actionSteps || [
              { description: "Reflect on your superpowers and growth areas." },
              { description: "Discuss them with someone you trust." },
            ]}
            firstname={firstname}
            isDarkMode={isDarkMode}
          />
        </View>
      </View>

      <PDFFooter
        firstname={firstname}
        isDarkMode={isDarkMode}
        pageNumber={pageNumber}
      />
    </View>
  );
};

export default PDFRelationshipSection;
