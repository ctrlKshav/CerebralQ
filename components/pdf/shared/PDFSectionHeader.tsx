import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { getThemeColors } from "../PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";

interface PDFSectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  firstname: string | null;
  isDarkMode?: boolean;
  imageSrc: string;
}

const PDFSectionHeader: React.FC<PDFSectionHeaderProps> = ({
  title,
  subtitle,
  description,
  firstname,
  isDarkMode = false,
  imageSrc,
}) => {
  const styles = createHeaderStyles(isDarkMode);

  return (
    <View style={styles.headerSection}>
      <View style={styles.titleSection}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {formatWithUsername(subtitle, firstname)}
          </Text>
        </View>
        <Text style={styles.description}>
          {formatWithUsername(description, firstname)}
        </Text>
      </View>

      <View style={styles.imageSection}>
        <Image
          src={imageSrc}
          style={styles.headerImage}
        />
      </View>
    </View>
  );
};

const createHeaderStyles = (isDarkMode = false) => {
  const theme = getThemeColors(isDarkMode);

  return StyleSheet.create({
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
    description: {
      fontSize: 14,
      color: theme.foreground,
      lineHeight: 1.5,
    },
  });
};

export default PDFSectionHeader; 