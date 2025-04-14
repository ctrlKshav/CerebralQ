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
    headerSection: {
      flexDirection: "row",
      marginBottom: 25,
      marginTop: 45, // Space for logo
      height: 270,
    },
    titleContainer: {
      display: "flex",
      flexDirection: "column",
    },
    titleSection: {
      flex: 3,
      paddingRight: 15,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 36,
      color: theme.primary,
      fontFamily: "PTSans-Bold",
    },
    subtitle: {
      fontSize: 18,
      color: theme.foreground,
      fontFamily: "PTSans-Bold",
    },
    imageSection: {
      flex: 2,
    },
    headerImage: {
      marginTop: 5,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: 6,
    },
    compatibleTypesContainer: {
      marginBottom: 20,
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
    },
    leftContent: {
      flex: 3,
      paddingRight: 15,
      alignSelf: "flex-end",
    },
    rightContent: {
      flex: 2,
    },
    description: {
      fontSize: 14,
      color: theme.foreground,
      lineHeight: 1.5,
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
  imageSrc = "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=2000&auto=format&fit=crop",
  logoUrl = "/images/cq-logo.png",
}) => {
  const styles = createRelationshipSectionStyles(isDarkMode);
  const { superpowers, growthAreas, compatibleTypes, actionSteps } = relationship;
  
  return (
    <View style={styles.page}>
      {/* Logo in top right */}
      <PDFLogo logoUrl={logoUrl} />

      {/* Header section with title and image side by side */}
      <View style={styles.headerSection}>
        <View style={styles.titleSection}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{`Your ${relationship.title}`}</Text>
            <Text style={styles.subtitle}>
              {formatWithUsername(relationship.subtitle, firstname)}
            </Text>
          </View>
          <Text style={styles.description}>
            {formatWithUsername(relationship.description, firstname)}
          </Text>
          
          {/* Compatible types section */}
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
        </View>

        <View style={styles.imageSection}>
          <Image
            src={imageSrc}
            style={styles.headerImage}
          />
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
