import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { DailyHabits } from "@/types/tests/mbti/results";
import { getThemeColors } from "./PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";
import {
  SunIcon,
  ClockIcon,
  MoonIcon,
  MessageSquareIcon,
} from "@/components/pdf/shared/icons";
import PDFFooter from "./shared/PDFFooter";
import { PDFLogo } from "./PDFLogo";
import PDFActionPlanSection from "./shared/PDFActionPlanSection";

// Define specific colors for icons
const ICON_COLORS = {
  sun: "#f59e0b", // amber-500
  clock: "#6366f1", // indigo-500
  moon: "#7c3aed", // violet-600
  message: "#10b981", // emerald-500
};

// Extract styles to their own object outside the component
const createCombinedSectionStyles = (isDarkMode = false) => {
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
    contentSection: {
      flexDirection: "row",
    },
    leftContent: {
      flex: 3,
      paddingRight: 15,
    },
    rightContent: {
      flex: 2,
    },
    description: {
      fontSize: 14,
      color: theme.foreground,
      lineHeight: 1.5,
    },
    // Habits styles
    habitsContainer: {
      marginBottom: 20,
    },
    habitsTitle: {
      fontSize: 18,
      color: theme.primary,
      fontFamily: "PTSans-Bold",
      marginBottom: 12,
      paddingBottom: 4,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    habitList: {
      marginBottom: 12,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    habitItem: {
      width: "100%",
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
      fontSize: 14,
      fontFamily: "PTSans-Bold",
      color: theme.foreground,
      marginBottom: 4,
    },
    habitDescription: {
      fontSize: 12,
      color: theme.foreground,
      lineHeight: 1.4,
    },
    // Communication styles
    communicationContainer: {
      marginTop: 15,
      marginBottom: 20,
    },
    communicationTitle: {
      fontSize: 18,
      color: theme.primary,
      fontFamily: "PTSans-Bold",
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
      color: theme.foreground,
      marginBottom: 14,
      lineHeight: 1.5,
    },
    tipItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 8,
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
      fontFamily: "PTSans-Bold",
    },
    tipText: {
      flex: 1,
      fontSize: 12,
      color: theme.foreground,
      lineHeight: 1.4,
      paddingTop: 2,
    },
  });
};

interface PDFDailyHabitsCommunicationSectionProps {
  dailyHabits: DailyHabits;
  sectionNumber: number;
  firstname: string | null;
  isDarkMode?: boolean;
  pageNumber?: number;
  logoUrl?: string;
}

const PDFDailyHabitsCommunicationSection: React.FC<
  PDFDailyHabitsCommunicationSectionProps
> = ({
  dailyHabits,
  sectionNumber,
  firstname,
  isDarkMode = false,
  pageNumber = 1,
  logoUrl = "/images/cq-logo.png",
}) => {
  // Use the extracted styles
  const styles = createCombinedSectionStyles(isDarkMode);
  const { habits, communication } = dailyHabits;

  // Create action steps from communication tips for the right column
  const communicationActionSteps = communication.tips.slice(0, 3).map((tip, index) => ({
    description: tip,
    number: index + 1
  }));

  return (
    <View style={styles.page}>
      {/* Logo in top right */}
      <PDFLogo logoUrl={logoUrl} />

      {/* Header section with title and image side by side */}
      <View style={styles.headerSection}>
        <View style={styles.titleSection}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Daily Habits & Communication</Text>
            <Text style={styles.subtitle}>
              {formatWithUsername(
                "Your Productivity & Communication Style, {firstname}",
                firstname
              )}
            </Text>
          </View>
          <Text style={styles.description}>
            {formatWithUsername(dailyHabits.summary, firstname)}
          </Text>
        </View>

        <View style={styles.imageSection}>
          <Image
            src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            style={styles.headerImage}
          />
        </View>
      </View>

      {/* Main content section */}
      <View style={styles.contentSection}>
        <View style={styles.leftContent}>
          {/* Daily Habits Section */}
          <View style={styles.habitsContainer}>
            <Text style={styles.habitsTitle}>Daily Habits</Text>
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

          {/* Communication Section */}
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

            {/* First tip */}
            {communication.tips.length > 0 && (
              <View style={styles.tipItem}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>1</Text>
                </View>
                <Text style={styles.tipText}>
                  {formatWithUsername(communication.tips[0], firstname)}
                </Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.rightContent}>
          {/* Action Plan section with remaining communication tips */}
          <PDFActionPlanSection
            actionSteps={communicationActionSteps.slice(1)}
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

export default PDFDailyHabitsCommunicationSection;
