import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { ActionItem } from "@/types/tests/mbti";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import PDFCardSection from "./shared/PDFCardSection";
import PDFListItem from "./shared/PDFListItem";
import {
  TargetIcon,
  CheckboxIcon,
  CheckCircleIcon,
} from "@/components/pdf/shared/icons";

// Define specific colors for icons
const ICON_COLORS = {
  target: "#f43f5e", // rose-500
  checkbox: "#10b981", // emerald-500
  checkCircle: "#10b981", // emerald-500
};

// Extract styles to their own object outside the component
const createActionPlanStyles = (isDarkMode = false) => {
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
    actionItemDescription: {
      fontSize: 14,
      color: theme.mutedForeground,
      marginBottom: 10,
      lineHeight: 1.6,
      marginLeft: 25,
    },
    completedIcon: {
      marginRight: 5,
    },
    footer: baseStyles.footer,
    headerRow: baseStyles.headerRow,
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
  });
};

interface PDFActionPlanSectionProps {
  actionItems: ActionItem[];
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber?: number;
}

const PDFActionPlanSection: React.FC<PDFActionPlanSectionProps> = ({
  actionItems,
  sectionNumber,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
}) => {
  // Use the extracted styles
  const styles = createActionPlanStyles(isDarkMode);

  return (
    <View style={styles.page}>
      {/* Section header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionNumber}>{sectionNumber}</Text>
          <Text style={styles.sectionTitle}>Your Action Plan</Text>
        </View>
        <Text style={styles.subtitle}>
          {formatWithUsername("Next Steps for {firstname}", firstname)}
        </Text>
        <Text style={styles.description}>
          {formatWithUsername("Based on your personality type, we've created a personalized action plan to help you leverage your strengths and address potential growth areas. These are concrete steps you can take to move forward on your personal development journey.", firstname)}
        </Text>
      </View>

      {/* Action Items */}
      <PDFCardSection
        title="Your Personalized Action Items"
        icon={<TargetIcon color={ICON_COLORS.target} size={20} />}
        isDarkMode={isDarkMode}
      >
        {actionItems.map((item, index) => (
          <React.Fragment key={`action-item-${index}`}>
            <PDFListItem
              text={formatWithUsername(item.task, firstname)}
              icon={item.completed ? 
                <CheckCircleIcon color={ICON_COLORS.checkCircle} size={14} /> : 
                <CheckboxIcon color={ICON_COLORS.checkbox} size={14} />
              }
              isDarkMode={isDarkMode}
            />
            {item.description && (
              <Text style={styles.actionItemDescription}>
                {formatWithUsername(item.description, firstname)}
              </Text>
            )}
          </React.Fragment>
        ))}
      </PDFCardSection>

      {/* Footer inside the page */}
      <Text style={styles.footer}>
        CerebralQ Personality Assessment | Page {pageNumber}
      </Text>
    </View>
  );
};

export default PDFActionPlanSection;
