import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { CommunityConnection } from "@/types/tests/mbti";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import PDFCardSection from "./shared/PDFCardSection";
import PDFListItem from "./shared/PDFListItem";
import {
  UsersIcon,
  CheckboxIcon,
} from "@/components/pdf/shared/icons";

// Define specific colors for icons
const ICON_COLORS = {
  users: "#6366f1", // indigo-500
  checkbox: "#10b981", // emerald-500
};

// Extract styles to their own object outside the component
const createCommunitySectionStyles = (isDarkMode = false) => {
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
    title: {
      fontSize: 30,
      color: theme.foreground,
      fontFamily: "Helvetica-Bold",
      marginBottom: 12,
      textAlign: "center",
    },
    subtitle: {
      fontSize: 20,
      color: theme.foreground,
      fontFamily: "Helvetica-Bold",
      marginBottom: 20,
      textAlign: "center",
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
    suggestionTitle: {
      fontSize: 18,
      color: theme.foreground,
      fontFamily: "Helvetica-Bold",
      marginBottom: 15,
    },
    image: {
      width: 450,
      height: 250,
      marginTop: 30,
      borderRadius: 8,
      alignSelf: "center",
    },
    footer: baseStyles.footer,
    headerRow: baseStyles.headerRow,
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
  });
};

interface PDFCommunitySectionProps {
  community: CommunityConnection;
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber?: number;
}

const PDFCommunitySection: React.FC<PDFCommunitySectionProps> = ({
  community,
  sectionNumber,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
}) => {
  // Use the extracted styles
  const styles = createCommunitySectionStyles(isDarkMode);
  const { suggestions } = community;

  return (
    <View style={styles.page}>
      {/* Section header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionNumber}>{sectionNumber}</Text>
          <Text style={styles.sectionTitle}>Community Connection</Text>
        </View>
        <Text style={styles.subtitle}>
          {formatWithUsername("Building Your Tribe, {firstname}", firstname)}
        </Text>
        <Text style={styles.description}>
          {formatWithUsername(community.summary, firstname)}
        </Text>
      </View>

      {/* Community Suggestions */}
      <PDFCardSection
        title="Community Suggestions for You"
        icon={<UsersIcon color={ICON_COLORS.users} size={20} />}
        isDarkMode={isDarkMode}
      >
        {suggestions.map((suggestion, index) => (
          <PDFListItem
            key={`suggestion-${index}`}
            text={formatWithUsername(suggestion, firstname)}
            icon={<CheckboxIcon color={ICON_COLORS.checkbox} size={14} />}
            isDarkMode={isDarkMode}
          />
        ))}
      </PDFCardSection>

      {/* Footer inside the page */}
      <Text style={styles.footer}>
        CerebralQ Personality Assessment | Page {pageNumber}
      </Text>
    </View>
  );
};

export default PDFCommunitySection;
