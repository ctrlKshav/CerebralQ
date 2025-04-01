import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { DailyHabits } from "@/types/tests/mbti";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import PDFCardSection from "./shared/PDFCardSection";
import PDFListItem from "./shared/PDFListItem";
import {
  SunIcon,
  ClockIcon,
  MoonIcon,
  MessageSquareIcon,
  CheckboxIcon,
} from "@/components/pdf/shared/icons";

// Define specific colors for icons
const ICON_COLORS = {
  sun: "#f59e0b", // amber-500
  clock: "#6366f1", // indigo-500
  moon: "#7c3aed", // violet-600
  message: "#10b981", // emerald-500
  checkbox: "#10b981", // emerald-500
};

// Extract styles to their own object outside the component
const createDailyHabitsStyles = (isDarkMode = false) => {
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
    communicationContainer: {
      marginTop: 20,
    },
    communicationTitle: {
      fontSize: 18,
      color: theme.foreground,
      fontFamily: "Helvetica-Bold",
      marginBottom: 12,
    },
    communicationSummary: {
      fontSize: 14,
      color: theme.mutedForeground,
      marginBottom: 15,
      lineHeight: 1.6,
    },
    footer: baseStyles.footer,
    headerRow: baseStyles.headerRow,
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
  });
};

interface PDFDailyHabitsSectionProps {
  dailyHabits: DailyHabits;
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber?: number;
}

const PDFDailyHabitsSection: React.FC<PDFDailyHabitsSectionProps> = ({
  dailyHabits,
  sectionNumber,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
}) => {
  // Use the extracted styles
  const styles = createDailyHabitsStyles(isDarkMode);
  const { habits, communication } = dailyHabits;

  return (
    <View style={styles.page}>
      {/* Section header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionNumber}>{sectionNumber}</Text>
          <Text style={styles.sectionTitle}>Your Daily Habits</Text>
        </View>
        <Text style={styles.subtitle}>
          {formatWithUsername("Optimizing Your Day, {firstname}", firstname)}
        </Text>
        <Text style={styles.description}>
          {formatWithUsername(dailyHabits.summary, firstname)}
        </Text>
      </View>

      {/* Morning Habits */}
      <PDFCardSection
        title="Morning Routine"
        icon={<SunIcon color={ICON_COLORS.sun} size={20} />}
        isDarkMode={isDarkMode}
      >
        <PDFListItem
          text={formatWithUsername(habits.morning.description, firstname)}
          icon={<CheckboxIcon color={ICON_COLORS.checkbox} size={14} />}
          isDarkMode={isDarkMode}
        />
      </PDFCardSection>

      {/* Afternoon Habits */}
      <PDFCardSection
        title="Afternoon Approach"
        icon={<ClockIcon color={ICON_COLORS.clock} size={20} />}
        isDarkMode={isDarkMode}
      >
        <PDFListItem
          text={formatWithUsername(habits.afternoon.description, firstname)}
          icon={<CheckboxIcon color={ICON_COLORS.checkbox} size={14} />}
          isDarkMode={isDarkMode}
        />
      </PDFCardSection>

      {/* Evening Habits */}
      <PDFCardSection
        title="Evening Wind-down"
        icon={<MoonIcon color={ICON_COLORS.moon} size={20} />}
        isDarkMode={isDarkMode}
      >
        <PDFListItem
          text={formatWithUsername(habits.evening.description, firstname)}
          icon={<CheckboxIcon color={ICON_COLORS.checkbox} size={14} />}
          isDarkMode={isDarkMode}
        />
      </PDFCardSection>

      {/* Communication Style */}
      <PDFCardSection
        title="Your Communication Style"
        icon={<MessageSquareIcon color={ICON_COLORS.message} size={20} />}
        isDarkMode={isDarkMode}
      >
        <Text style={styles.communicationSummary}>
          {formatWithUsername(communication.summary, firstname)}
        </Text>
        {communication.tips.map((tip, index) => (
          <PDFListItem
            key={`communication-tip-${index}`}
            text={formatWithUsername(tip, firstname)}
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

export default PDFDailyHabitsSection;
