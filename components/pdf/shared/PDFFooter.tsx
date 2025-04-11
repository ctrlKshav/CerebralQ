import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { getThemeColors } from "../PDFTheme";
import PDFPageNumber from "./PDFPageNumber";

interface PDFFooterProps {
  pageNumber: number;
  firstname?: string | null;
  isDarkMode?: boolean;
}

const createStyles = (isDarkMode = false) => {
  const theme = getThemeColors(isDarkMode);
  
  return StyleSheet.create({
    footer: {
      position: "absolute",
      bottom: 20,
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 10,
      color: theme.mutedForeground,
    }
  });
};

const PDFFooter: React.FC<PDFFooterProps> = ({ 
  pageNumber,
  firstname,
  isDarkMode = false
}) => {
  const styles = createStyles(isDarkMode);
  
  // Only add the third pipe if name is present
  const footerText = firstname 
    ? `Cerebral Quotient | MBTI Test Report | ${firstname}` 
    : "Cerebral Quotient | MBTI Test Report";

  return (
    <>
      <Text style={styles.footer}>{footerText}</Text>
      <PDFPageNumber pageNumber={pageNumber} isDarkMode={isDarkMode} />
    </>
  );
};

export default PDFFooter; 