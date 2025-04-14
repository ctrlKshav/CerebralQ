import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { getThemeColors } from "../PDFTheme";

interface PDFPageNumberProps {
  pageNumber: number;
  isDarkMode?: boolean;
}

const createStyles = (isDarkMode = false) => {
  const theme = getThemeColors(isDarkMode);
  
  return StyleSheet.create({
    container: {
      position: "absolute",
      bottom: 20,
      right: 20,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    pageNumber: {
      fontSize: 10,
      fontFamily: "PTSans",
      color: isDarkMode ? theme.foreground : theme.primary,
      backgroundColor: theme.muted,
      padding: 6,
      borderRadius: 12,
      width: 24,
      height: 24,
      textAlign: "center",
      lineHeight: 1.2,
    }
  });
};

const PDFPageNumber: React.FC<PDFPageNumberProps> = ({ 
  pageNumber,
  isDarkMode = false
}) => {
  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <Text style={styles.pageNumber}>{pageNumber}</Text>
    </View>
  );
};

export default PDFPageNumber; 