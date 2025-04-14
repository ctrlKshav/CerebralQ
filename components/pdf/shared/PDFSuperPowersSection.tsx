import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { SuperpowerItem } from "@/types/tests/mbti/results";
import { getThemeColors } from "../PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";

interface PDFSuperPowersSectionProps {
  superpowers: SuperpowerItem[];
  firstname: string | null;
  isDarkMode?: boolean;
}

const PDFSuperPowersSection: React.FC<PDFSuperPowersSectionProps> = ({
  superpowers,
  firstname,
  isDarkMode = false,
}) => {
  const styles = createSuperPowerStyles(isDarkMode);

  return (
    <View>
      <Text style={styles.sectionTitle}>Superpowers</Text>
      {superpowers && superpowers.length > 0 ? (
        superpowers.map((power, index) => (
          <View key={`power-${index}`} style={styles.listItem}>
            <Text style={styles.listItemText}>
              {formatWithUsername(power.description, firstname)}
            </Text>
          </View>
        ))
      ) : (
        <>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              You come up with ideas on the spot, {firstname}—like pitching a new campaign during a meeting.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              You're great at finding creative solutions, like figuring out a workaround for a tech issue.
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

// Styles for the component
const createSuperPowerStyles = (isDarkMode: boolean) => {
  const theme = getThemeColors(isDarkMode);
  
  return StyleSheet.create({
    sectionTitle: {
      fontSize: 16,
      color: theme.foreground,
      fontFamily: "PTSans-Bold",
      marginBottom: 15,
    },
    listItem: {
      marginBottom: 8,
      paddingLeft: 10,
    },
    listItemText: {
      fontSize: 13,
      color: theme.foreground,
      lineHeight: 1.4,
    },
  });
};

export default PDFSuperPowersSection; 