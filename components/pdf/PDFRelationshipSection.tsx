import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { RelationshipCompatibility } from "@/types/tests/mbti";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import { ArrowRightIcon, HeartIcon, UsersIcon, MessageSquareIcon, AwardIcon, CheckboxIcon } from "./shared/icons";
import PDFCardSection from "./shared/PDFCardSection";
import PDFListItem from "./shared/PDFListItem";
import PDFTwoColumnSection from "./shared/PDFTwoColumnSection";

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
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: {
      padding: 40,
      backgroundColor: theme.background,
      height: "100%",
      position: "relative",
    },
    headerContainer: {
      marginBottom: 25,
      alignItems: "center",
    },
    description: {
      fontSize: 14,
      color: theme.mutedForeground,
      marginBottom: 30,
      lineHeight: 1.6,
      textAlign: "center",
      alignSelf: "center",
      maxWidth: 480,
    },
    compatibleTypesContainer: {
      marginBottom: 25,
      alignItems: "center",
    },
    compatibleTypesLabel: {
      fontSize: 14,
      color: theme.foreground,
      fontFamily: "Helvetica-Bold",
      marginRight: 8,
      marginBottom: 10,
    },
    typesRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      maxWidth: 480,
    },
    typeBadge: {
      backgroundColor: `${theme.primary}20`,
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 4,
      margin: 4,
    },
    typeBadgeText: {
      fontSize: 12,
      color: theme.primary,
      fontFamily: "Helvetica-Bold",
    },
    footer: baseStyles.footer,
    headerRow: baseStyles.headerRow,
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
    sectionSubtitle: baseStyles.sectionSubtitle,
  });
};

interface PDFRelationshipSectionProps {
  relationship: RelationshipCompatibility;
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber: number;
}

const PDFRelationshipSection: React.FC<PDFRelationshipSectionProps> = ({
  relationship,
  sectionNumber,
  firstname,
  isDarkMode = false,
  pageNumber,
}) => {
  const styles = createRelationshipSectionStyles(isDarkMode);
  const { superpowers, growthAreas, compatibleTypes } = relationship;
  
  // Get the appropriate icon based on relationship type
  const getSectionIcon = (relationshipType: string) => {
    return relationshipType === "Relationships" 
      ? <HeartIcon color={ICON_COLORS.heart} size={20} />
      : <UsersIcon color={ICON_COLORS.users} size={20} />;
  };

  return (
    <View style={styles.page}>
      {/* Section header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionNumber}>{sectionNumber}</Text>
          <Text style={styles.sectionTitle}>{`Your ${relationship.title}`}</Text>
        </View>
        <Text style={styles.sectionSubtitle}>
          {formatWithUsername(relationship.subtitle, firstname)}
        </Text>
        <Text style={styles.description}>
          {formatWithUsername(relationship.description, firstname)}
        </Text>
      </View>

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

      {/* Replace superpowers and growth areas with two-column section */}
      <PDFTwoColumnSection
        leftTitle={`Superpowers`}
        leftIcon={<AwardIcon color={ICON_COLORS.award} size={20} />}
        leftItems={superpowers}
        rightTitle="Growth Areas"
        rightIcon={getSectionIcon(relationship.title)}
        rightItems={growthAreas}
        firstname={firstname}
        isDarkMode={isDarkMode}
      />

      {/* Footer inside the page */}
      <Text style={styles.footer}>
        Cerebral Quotient Personality Assessment | Page {pageNumber}
      </Text>
    </View>
  );
};

export default PDFRelationshipSection;
