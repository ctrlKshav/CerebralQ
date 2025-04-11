import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { DailyHabits } from "@/types/tests/mbti/results";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import {
  SunIcon,
  ClockIcon,
  MoonIcon,
  MessageSquareIcon,
} from "@/components/pdf/shared/icons";

// Define specific colors for icons
const ICON_COLORS = {
  sun: "#f59e0b", // amber-500
  clock: "#6366f1", // indigo-500
  moon: "#7c3aed", // violet-600
  message: "#10b981", // emerald-500
};

// Extract styles to their own object outside the component
const createCombinedSectionStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: {
      padding: 10,
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
    },
    headerRow: baseStyles.headerRow,
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
    sectionSubtitle: baseStyles.sectionSubtitle,

    sectionContainer: {},
    sectionHeader: {
      fontSize: 18,
      color: theme.primary,
      fontFamily: "Helvetica-Bold",
      marginBottom: 12,
      paddingBottom: 4,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    contentContainer: {
      width: "100%",
      marginBottom: 12,
    },
    imageContainer: {
      width: "100%",
      alignItems: "center",
      marginBottom: 12,
    },
    sectionImage: {
      width: "100%",
      height: 160,
      borderRadius: 4,
      objectFit: "cover",
    },
    habitList: {
      marginBottom: 12,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    habitItem: {
      width: "48%",
      flexDirection: "row",
      marginBottom: 16,
    },
    habitIconContainer: {
      width: 24,
      height: 24,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 8,
      marginTop: 2,
    },
    sunIconContainer: {
      backgroundColor: "#fff7ed",
    },
    clockIconContainer: {
      backgroundColor: "#eef2ff",
    },
    moonIconContainer: {
      backgroundColor: "#f3e8ff",
    },
    iconContainer: {
      marginRight: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    habitContent: {
      flex: 1,
    },
    habitTitle: {
      fontSize: 12,
      fontFamily: "Helvetica-Bold",
      color: theme.foreground,
      marginBottom: 4,
    },
    habitDescription: {
      fontSize: 10,
      color: theme.mutedForeground,
      lineHeight: 1.4,
    },
    communicationContainer: {
      marginTop: 15,
      marginBottom: 20,
    },
    communicationTitle: {
      fontSize: 18,
      color: theme.primary,
      fontFamily: "Helvetica-Bold",
      marginBottom: 12,
      paddingBottom: 4,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    communicationSummary: {
      fontSize: 12,
      color: theme.mutedForeground,
      marginBottom: 14,
      lineHeight: 1.5,
    },
    stepsContent: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    tipItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 8,
      width: "48%", // Two columns of steps
    },
    stepNumber: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: theme.primary,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 8,
    },
    stepNumberText: {
      color: theme.primaryForeground,
      fontSize: 11,
      fontFamily: "Helvetica-Bold",
    },
    tipText: {
      flex: 1,
      fontSize: 12,
      color: theme.foreground,
      lineHeight: 1.4,
      paddingTop: 2,
    },
    footer: baseStyles.footer,
  });
};

interface PDFDailyHabitsCommunicationSectionProps {
  dailyHabits: DailyHabits;
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber?: number;
}

const PDFDailyHabitsCommunicationSection: React.FC<
  PDFDailyHabitsCommunicationSectionProps
> = ({
  dailyHabits,
  sectionNumber,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
}) => {
  // Use the extracted styles
  const styles = createCombinedSectionStyles(isDarkMode);
  const { habits, communication } = dailyHabits;

  return (
    <View style={styles.page}>
      {/* Section header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionNumber}>{sectionNumber}</Text>
          <Text style={styles.sectionTitle}>Daily Habits & Communication</Text>
        </View>
        <Text style={styles.sectionSubtitle}>
          {formatWithUsername(
            "Your Productivity & Communication Style, {firstname}",
            firstname
          )}
        </Text>
        <Text style={styles.description}>
          {formatWithUsername(dailyHabits.summary, firstname)}
        </Text>
      </View>

      {/* Daily Habits Section - Content above, Image below */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Daily Habits</Text>

        <View style={styles.contentContainer}>
          <View style={styles.habitList}>
            {/* Morning Routine */}
            <View style={styles.habitItem}>
              <View
                style={[styles.habitIconContainer, styles.sunIconContainer]}
              >
                <SunIcon color={ICON_COLORS.sun} size={12} />
              </View>
              <View style={styles.habitContent}>
                <Text style={styles.habitTitle}>{habits.morning.title}</Text>
                <Text style={styles.habitDescription}>
                  {formatWithUsername(habits.morning.description, firstname)}
                </Text>
              </View>
            </View>

            {/* Afternoon Approach */}
            <View style={styles.habitItem}>
              <View
                style={[styles.habitIconContainer, styles.clockIconContainer]}
              >
                <ClockIcon color={ICON_COLORS.clock} size={12} />
              </View>
              <View style={styles.habitContent}>
                <Text style={styles.habitTitle}>{habits.afternoon.title}</Text>
                <Text style={styles.habitDescription}>
                  {formatWithUsername(habits.afternoon.description, firstname)}
                </Text>
              </View>
            </View>

            {/* Evening Wind-down */}
            <View style={styles.habitItem}>
              <View
                style={[styles.habitIconContainer, styles.moonIconContainer]}
              >
                <MoonIcon color={ICON_COLORS.moon} size={12} />
              </View>
              <View style={styles.habitContent}>
                <Text style={styles.habitTitle}>{habits.evening.title}</Text>
                <Text style={styles.habitDescription}>
                  {formatWithUsername(habits.evening.description, firstname)}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Image below content */}
        <View style={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            style={styles.sectionImage}
          />
        </View>
      </View>

      {/* Communication Section - Redesigned to match action steps format */}
      <View style={styles.communicationContainer}>
        <Text style={styles.communicationTitle}>
          <View style={styles.iconContainer}>
            <MessageSquareIcon color={ICON_COLORS.message} size={16} />
          </View>
          Communication Style
        </Text>

        <Text style={styles.communicationSummary}>
          {formatWithUsername(communication.summary, firstname)}
        </Text>

        <View style={styles.stepsContent}>
          {communication.tips.slice(0, 4).map((tip, index) => (
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
      </View>

      {/* Footer inside the page */}
      <Text style={styles.footer}>
        Cerebral Quotient Personality Assessment | Page {pageNumber}
      </Text>
    </View>
  );
};

export default PDFDailyHabitsCommunicationSection;
