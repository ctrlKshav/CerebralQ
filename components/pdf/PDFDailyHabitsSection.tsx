import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { DailyHabits } from "@/types/tests/mbti/results";
import { createBaseStyles, getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import { SunIcon, ClockIcon, MoonIcon } from "@/components/pdf/shared/icons";

// Define specific colors for icons
const ICON_COLORS = {
  sun: "#f59e0b", // amber-500
  clock: "#6366f1", // indigo-500
  moon: "#7c3aed", // violet-600
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
    description: {
      fontSize: 14,
      color: theme.mutedForeground,
      marginBottom: 30,
      lineHeight: 1.6,
      textAlign: "center",
      alignSelf: "center",
      maxWidth: 480,
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
      marginBottom: 20,
    },
    habitList: {
      marginBottom: 25,
    },
    habitItem: {
      flexDirection: "row",
      marginBottom: 20,
    },
    habitIconContainer: {
      width: 32,
      height: 32,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 12,
      marginTop: 2,
    },
    sunIconContainer: {
      backgroundColor: "#fff7ed", // light amber/orange bg that complements the sun icon
    },
    clockIconContainer: {
      backgroundColor: "#eef2ff", // light indigo bg that matches the clock icon
    },
    moonIconContainer: {
      backgroundColor: "#f3e8ff", // light violet bg that matches the moon icon
    },
    habitContent: {
      flex: 1,
    },
    habitTitle: {
      fontSize: 16,
      fontFamily: "Helvetica-Bold",
      color: theme.foreground,
      marginBottom: 5,
    },
    habitDescription: {
      fontSize: 14,
      color: theme.mutedForeground,
      lineHeight: 1.5,
    },
    imageContainer: {
      marginTop: 10,
      alignItems: "center",
    },
    cardImage: {
      width: 400,
      height: 200,
      borderRadius: 8,
      objectFit: "cover",
    },
    footer: baseStyles.footer,
    headerRow: baseStyles.headerRow,
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
    sectionSubtitle: baseStyles.sectionSubtitle,
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
  const { habits } = dailyHabits;

  return (
    <View style={styles.page}>
      {/* Section header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionNumber}>{sectionNumber}</Text>
          <Text style={styles.sectionTitle}>Daily Habits & Communication</Text>
        </View>
        <Text style={styles.sectionSubtitle}>
          {formatWithUsername("Your Daily Habits, {firstname}", firstname)}
        </Text>
        <Text style={styles.description}>
          {formatWithUsername(dailyHabits.summary, firstname)}
        </Text>
      </View>

      {/* Daily Habits Card with content above, image below */}
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Let's get started on this!</Text>
        
        <View style={styles.habitList}>
          {/* Morning Routine */}
          <View style={styles.habitItem}>
            <View style={[styles.habitIconContainer, styles.sunIconContainer]}>
              <SunIcon color={ICON_COLORS.sun} size={16} />
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
              <ClockIcon color={ICON_COLORS.clock} size={16} />
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
            <View style={[styles.habitIconContainer, styles.moonIconContainer]}>
              <MoonIcon color={ICON_COLORS.moon} size={16} />
            </View>
            <View style={styles.habitContent}>
              <Text style={styles.habitTitle}>{habits.evening.title}</Text>
              <Text style={styles.habitDescription}>
                {formatWithUsername(habits.evening.description, firstname)}
              </Text>
            </View>
          </View>
        </View>

        {/* Image now below the content */}
        <View style={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            style={styles.cardImage}
          />
        </View>
      </View>

      {/* Footer inside the page */}
      <Text style={styles.footer}>
        Cerebral Quotient Personality Assessment | Page {pageNumber}
      </Text>
    </View>
  );
};

export default PDFDailyHabitsSection;
