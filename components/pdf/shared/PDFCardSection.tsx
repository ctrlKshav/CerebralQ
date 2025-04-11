import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { getThemeColors } from "../PDFTheme";

interface PDFCardSectionProps {
  title: string;
  icon: React.ReactNode;
  isDarkMode?: boolean;
  children: React.ReactNode;
}

const PDFCardSection: React.FC<PDFCardSectionProps> = ({
  title,
  icon,
  isDarkMode = false,
  children,
}) => {
  const styles = createCardSectionStyles(isDarkMode);

  return (
    <View style={styles.card}>
      <View style={styles.cardTitleContainer}>
        <View style={styles.cardTitleIcon}>{icon}</View>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

const createCardSectionStyles = (isDarkMode = false) => {
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    card: {
      marginBottom: 25,
      padding: 18,
      backgroundColor: theme.card,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
    },
    cardTitle: {
      fontSize: 18,
      color: theme.primary,
      fontFamily: "PTSans-Bold",
      textAlign: "center",
    },
    cardTitleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 15,
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    cardTitleIcon: {
      marginRight: 8,
    },
  });
};

export default PDFCardSection;
