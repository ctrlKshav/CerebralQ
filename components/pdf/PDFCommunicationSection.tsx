import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { DailyHabits } from "@/types/tests/mbti";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import { MessageSquareIcon } from "@/components/pdf/shared/icons";

// Define specific colors for icons
const ICON_COLORS = {
  message: "#10b981", // emerald-500
};

// Extract styles to their own object outside the component
const createCommunicationStyles = (isDarkMode = false) => {
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
    subtitle: {
      fontSize: 22,
      color: theme.foreground,
      fontFamily: "Helvetica-Bold",
      marginBottom: 20,
      textAlign: "center",
    },
    cardContainer: {
      backgroundColor: theme.card,
      borderRadius: 10,
      padding: 20,
      marginBottom: 30,
      borderWidth: 1,
      borderColor: theme.border,
    },
    cardTitle: {
      fontSize: 18,
      color: theme.foreground,
      fontFamily: "Helvetica-Bold",
      marginBottom: 15,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    iconContainer: {
      marginRight: 8,
    },
    communicationSummary: {
      fontSize: 14,
      color: theme.mutedForeground,
      marginBottom: 20,
      lineHeight: 1.5,
    },
    tipsTitle: {
      fontSize: 16,
      color: theme.foreground,
      fontFamily: "Helvetica-Bold",
      marginBottom: 15,
      marginTop: 5,
    },
    tipsList: {
      marginBottom: 25,
    },
    tipItem: {
      flexDirection: 'row',
      marginBottom: 12,
      alignItems: 'flex-start',
    },
    stepNumber: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      marginTop: 2,
    },
    stepNumberText: {
      color: theme.primaryForeground,
      fontSize: 12,
      fontFamily: "Helvetica-Bold",
    },
    tipText: {
      fontSize: 14,
      color: theme.foreground,
      flex: 1,
      lineHeight: 1.5,
    },
    imageContainer: {
      marginTop: 5,
      alignItems: 'center',
    },
    cardImage: {
      width: 400,
      height: 200,
      borderRadius: 8,
      objectFit: 'cover',
    },
    footer: baseStyles.footer,
  });
};

interface PDFCommunicationSectionProps {
  dailyHabits: DailyHabits;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber?: number;
}

const PDFCommunicationSection: React.FC<PDFCommunicationSectionProps> = ({
  dailyHabits,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
}) => {
  // Use the extracted styles
  const styles = createCommunicationStyles(isDarkMode);
  const { communication } = dailyHabits;

  return (
    <View style={styles.page}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.subtitle}>
          {formatWithUsername("How You Communicate, {firstname}", firstname)}
        </Text>
      </View>

      {/* Communication Card with content above, image below */}
      <View style={styles.cardContainer}>
        <View style={styles.cardTitle}>
          <View style={styles.iconContainer}>
            <MessageSquareIcon color={ICON_COLORS.message} size={18} />
          </View>
          <Text>How You Chat with Others</Text>
        </View>
        
        <Text style={styles.communicationSummary}>
          {formatWithUsername(communication.summary, firstname)}
        </Text>
        
        <Text style={styles.tipsTitle}>Let's Make it Happen</Text>
        
        <View style={styles.tipsList}>
          {communication.tips.map((tip, index) => (
            <View key={`tip-${index}`} style={styles.tipItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.tipText}>
                {formatWithUsername(tip, firstname)}
              </Text>
            </View>
          ))}
        </View>

        {/* Image now below the content */}
        <View style={styles.imageContainer}>
          <Image 
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            style={styles.cardImage}
          />
        </View>
      </View>

      {/* Footer inside the page */}
      <Text style={styles.footer}>
        CerebralQ Personality Assessment | Page {pageNumber}
      </Text>
    </View>
  );
};

export default PDFCommunicationSection;
