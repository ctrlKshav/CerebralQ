import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { getThemeColors } from "../PDFTheme";

interface PDFListItemProps {
  text: string;
  icon: React.ReactNode;
  isDarkMode?: boolean;
}

const PDFListItem: React.FC<PDFListItemProps> = ({
  text,
  icon,
  isDarkMode = false,
}) => {
  const styles = createListItemStyles(isDarkMode);

  return (
    <View style={styles.listItem}>
      <View style={styles.bulletIcon}>{icon}</View>
      <Text style={styles.listItemText}>{text}</Text>
    </View>
  );
};

const createListItemStyles = (isDarkMode = false) => {
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
    listItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 10,
      paddingHorizontal: 8,
    },
    bulletIcon: {
      marginRight: 8,
      marginTop: 1,
    },
    listItemText: {
      flex: 1,
      fontSize: 13,
      color: theme.foreground,
      lineHeight: 1.4,
    },
  });
};

export default PDFListItem;
