import { StyleSheet } from "@react-pdf/renderer";

// Theme colors based on shadcn UI system from globals.css
export const lightTheme = {
  background: "#ffffff", // 0 0% 100%
  foreground: "#0f1729", // 222.2 84% 4.9%
  card: "#ffffff", // 0 0% 100%
  cardForeground: "#0f1729", // 222.2 84% 4.9%
  primary: "#6257e3", // 248 73% 62% - Royal Blue
  primaryForeground: "#f8fafc", // 210 40% 98%
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
  chart1: "#f97316", // 12 76% 61%
  chart2: "#10b981", // 173 58% 39%
  chart3: "#1e293b", // 197 37% 24%
  chart4: "#eab308", // 43 74% 66%
  chart5: "#f59e0b", // 27 87% 67%
};

export const darkTheme = {
  background: "#0f1729", // 222.2 84% 4.9%
  foreground: "#f8fafc", // 210 40% 98%
  card: "#0f1729", // 222.2 84% 4.9%
  cardForeground: "#f8fafc", // 210 40% 98%
  primary: "#6257e3", // 248 73% 62% - Royal Blue
  primaryForeground: "#1e293b", // 222.2 47.4% 11.2%
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
  chart1: "#3b82f6", // 220 70% 50%
  chart2: "#10b981", // 160 60% 45%
  chart3: "#cbd5e1", // 30 80% 55%
  chart4: "#a855f7", // 280 65% 60%
  chart5: "#ec4899", // 340 75% 55%
};

// Helper to get the theme based on mode
export const getThemeColors = (isDarkMode: boolean) =>
  isDarkMode ? darkTheme : lightTheme;

// Common styles that can be extended
export const createBaseStyles = (isDarkMode: boolean) => {
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    page: {
      padding: 30,
      fontFamily: "Helvetica",
      backgroundColor: theme.background,
      color: theme.foreground,
    },
    sectionNumber: {
      width: 28,
      height: 28,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: theme.primary,
      color: theme.primary,
      textAlign: "center",
      fontFamily: "Helvetica-Bold",
      marginRight: 10,
      // Fix vertical alignment with flexbox
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // Remove paddingTop that was causing misalignment
    },
    sectionTitle: {
      fontSize: 18,
      fontFamily: "Helvetica-Bold",
      color: theme.foreground,
      marginBottom: 5,
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
  });
};
