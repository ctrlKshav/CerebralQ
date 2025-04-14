import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { GrowthAreaItem } from "@/types/tests/mbti/results";
import { getThemeColors } from "../PDFTheme";
import { formatWithUsername } from "@/lib/formatWithUsername";

interface PDFGrowthAreasSectionProps {
  growthAreas: GrowthAreaItem[];
  firstname: string | null;
  isDarkMode?: boolean;
}

const PDFGrowthAreasSection: React.FC<PDFGrowthAreasSectionProps> = ({
  growthAreas,
  firstname,
  isDarkMode = false,
}) => {
  const styles = createGrowthAreaStyles(isDarkMode);

  return (
    <View>
      <Text style={styles.sectionTitle}>Growth Areas</Text>
      {growthAreas && growthAreas.length > 0 ? (
        growthAreas.map((area, index) => (
          <View key={`area-${index}`} style={styles.listItem}>
            <Text style={styles.listItemText}>
              {formatWithUsername(area.description, firstname)}
            </Text>
          </View>
        ))
      ) : (
        <>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              You might start a lot of projects but not finish them—like jumping to a new idea before wrapping up the last one.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              You might rush into debates—like challenging someone's idea without thinking it through first.
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

// Styles for the component
const createGrowthAreaStyles = (isDarkMode: boolean) => {
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

export default PDFGrowthAreasSection; 