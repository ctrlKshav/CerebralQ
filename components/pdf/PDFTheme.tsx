import { StyleSheet } from "@react-pdf/renderer";

// Theme colors based on shadcn UI system from globals.css
export const lightTheme = {
  background: "#ffffff", // 0 0% 100%
  foreground: "#0f1729", // 222.2 84% 4.9%
  card: "#ffffff", // 0 0% 100%
  cardForeground: "#0f1729", // 222.2 84% 4.9%
  primary: "#6257e3", // 248 73% 62% - Royal Blue
  primaryForeground: "#ffffff", // 210 40% 98%
  secondary: "#f1f5f9", // 210 40% 96.1%
  secondaryForeground: "#1e293b", // 222.2 47.4% 11.2%
  muted: "#f1f5f9", // 210 40% 96.1%
  mutedForeground: "#64748b", // 215.4 16.3% 46.9%
  accent: "#f1f5f9", // 210 40% 96.1%
  accentForeground: "#1e293b", // 222.2 47.4% 11.2%
  destructive: "#ef4444", // 0 84.2% 60.2%
  destructiveForeground: "#f8fafc", // 210 40% 98%
  border: "#e2e8f0", // 214.3 31.8% 91.4%
  input: "#e2e8f0", // 214.3 31.8% 91.4%
  ring: "#6257e3", // 248 73% 62%
  // Chart colors
  chart1: "#4F46E5", 
  chart2: "#10B981", 
  chart3: "#F59E0B", 
  chart4: "#EC4899", 
};

export const darkTheme = {
  background: "#0f1729", // 222.2 84% 4.9%
  foreground: "#f8fafc", // 210 40% 98%
  card: "#0f1729", // 222.2 84% 4.9%
  cardForeground: "#f8fafc", // 210 40% 98%
  primary: "#6257e3", // 248 73% 62% - Royal Blue
  primaryForeground: "#ffffff", // 222.2 47.4% 11.2%
  secondary: "#1e293b", // 217.2 32.6% 17.5%
  secondaryForeground: "#f8fafc", // 210 40% 98%
  muted: "#1e293b", // 217.2 32.6% 17.5%
  mutedForeground: "#94a3b8", // 215 20.2% 65.1%
  accent: "#1e293b", // 217.2 32.6% 17.5%
  accentForeground: "#f8fafc", // 210 40% 98%
  destructive: "#7f1d1d", // 0 62.8% 30.6%
  destructiveForeground: "#f8fafc", // 210 40% 98%
  border: "#1e293b", // 217.2 32.6% 17.5%
  input: "#1e293b", // 217.2 32.6% 17.5%
  ring: "#6257e3", // 248 73% 62%
  // Chart colors
  chart1: "#818CF8", 
  chart2: "#34D399", 
  chart3: "#FBBF24", 
  chart4: "#F472B6", 
};

// Helper to get the theme based on mode
export const getThemeColors = (isDarkMode: boolean) =>
  isDarkMode ? darkTheme : lightTheme;

// Common styles that can be extended
export const createBaseStyles = (isDarkMode: boolean) => {
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: {
      paddingHorizontal: 20,
      paddingVertical: 15,
      fontFamily: "Helvetica",
      backgroundColor: theme.background,
      color: theme.foreground,
    },
    headerRow: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 15,
    },
    sectionNumber: {
      width: 32,
      height: 32,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.primary,
      color: theme.primary,
      textAlign: "center",
      fontFamily: "Helvetica-Bold",
      marginRight: 10,
      lineHeight: 1,
      paddingTop: 5, // Fix vertical alignment
    },
    sectionTitle: {
      fontSize: 24,
      fontFamily: "Helvetica-Bold",
      color: theme.foreground,
    },
    sectionSubtitle: {
      fontSize: 16,
      fontFamily: "Helvetica",
      color: theme.foreground,
      marginBottom: 30,
      textAlign: "center",
    },
    card: {
      padding: 15,
      marginBottom: 15,
      backgroundColor: theme.card,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.border,
    },
    badge: {
      padding: 6,
      backgroundColor: theme.muted,
      borderRadius: 4,
      color: theme.mutedForeground,
      fontSize: 10,
      textAlign: "center",
    },
    footer: {
      position: "absolute",
      bottom: 5,
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 10,
      color: theme.mutedForeground,
    },
  });
};

export const createTwoColumnLayoutStyles = (isDarkMode: boolean) => {
  const theme = getThemeColors(isDarkMode);
  return StyleSheet.create({
    columnsContainer: {
      flexDirection: "row",
      marginBottom: 20,
      gap: 15,
    },
    column: {
      flex: 1,
    },
    columnTitleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 8,
      marginBottom: 12,
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    columnTitle: {
      fontSize: 18,
      color: theme.primary,
      fontFamily: "Helvetica-Bold",
    },
    listSection: {
      marginBottom: 5,
    },
  });
};
