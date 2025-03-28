import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { personalityDatabase } from '@/data/mbti/personalityDatabase';
import { createBaseStyles, getThemeColors } from './PDFTheme';

// Extract styles to their own function outside the component
const createAboutPersonalityStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);
  
  return StyleSheet.create({
    container: {
      margin: 10,
      position: "relative",
      height: "100%",
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    card: {
      padding: 15,
      marginBottom: 20,
      backgroundColor: theme.card,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.border,
    },
    cardHeader: {
      paddingBottom: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    personalityType: {
      fontSize: 16,
      fontFamily: 'Helvetica-Bold',
      marginBottom: 4,
      color: theme.foreground,
    },
    personalityAlias: {
      fontSize: 12,
      color: theme.mutedForeground,
      marginBottom: 10,
    },
    description: {
      fontSize: 11,
      color: theme.foreground,
      lineHeight: 1.5,
      marginBottom: 15,
    },
    row: {
      flexDirection: 'row',
      marginTop: 10,
    },
    column: {
      flex: 1,
      paddingHorizontal: 5,
    },
    sectionLabel: {
      fontSize: 13,
      fontFamily: 'Helvetica-Bold',
      marginBottom: 8,
    },
    bulletList: {
      marginLeft: 5,
    },
    bulletPoint: {
      flexDirection: 'row',
      marginBottom: 4,
    },
    bullet: {
      fontSize: 9,
      marginRight: 5,
    },
    bulletText: {
      fontSize: 10,
      lineHeight: 1.4,
      flex: 1,
    },
    strengthsLabel: {
      color: theme.chart2,
    },
    strengthsBullet: {
      color: theme.chart2,
    },
    strengthsText: {
      color: theme.foreground,
    },
    challengesLabel: {
      color: theme.chart4,
    },
    challengesBullet: {
      color: theme.chart4,
    },
    challengesText: {
      color: theme.foreground,
    },
    footer: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 10,
      color: theme.mutedForeground,
    },
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
  });
};

interface PDFAboutPersonalityTypeProps {
  personalityType: string;
  sectionNumber: number;
  isDarkMode?: boolean;
  pageNumber?: number; // Page number for footer
}

export const PDFAboutPersonalityType: React.FC<PDFAboutPersonalityTypeProps> = ({
  personalityType,
  sectionNumber,
  isDarkMode = false,
  pageNumber = 6,
}) => {
  const styles = createAboutPersonalityStyles(isDarkMode);
  const personalityInfo = personalityDatabase[personalityType];
  
  if (!personalityInfo) {
    return <View><Text>Personality type not found</Text></View>;
  }
  
  return (
    <View style={styles.container} wrap={false}>
      <View style={styles.header}>
        <Text style={styles.sectionNumber}>{sectionNumber}</Text>
        <Text style={styles.sectionTitle}>Personality Type</Text>
      </View>
      
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.personalityType}>{personalityType}</Text>
          <Text style={styles.personalityAlias}>{personalityInfo.alias}</Text>
        </View>
        
        <Text style={styles.description}>{personalityInfo.description}</Text>
        
        {/* Side-by-side Strengths and Growth Areas */}
        <View style={styles.row}>
          {/* Strengths column */}
          <View style={[styles.column]}>
            <Text style={[styles.sectionLabel, styles.strengthsLabel]}>Strengths</Text>
            <View style={styles.bulletList}>
              {personalityInfo.strengths.map((strength, index) => (
                <View key={`strength-${index}`} style={styles.bulletPoint}>
                  <Text style={[styles.bullet, styles.strengthsBullet]}>•</Text>
                  <Text style={[styles.bulletText, styles.strengthsText]}>{strength}</Text>
                </View>
              ))}
            </View>
          </View>
          
          {/* Growth Areas column */}
          <View style={styles.column}>
            <Text style={[styles.sectionLabel, styles.challengesLabel]}>Growth Areas</Text>
            <View style={styles.bulletList}>
              {personalityInfo.challenges.map((challenge, index) => (
                <View key={`challenge-${index}`} style={styles.bulletPoint}>
                  <Text style={[styles.bullet, styles.challengesBullet]}>•</Text>
                  <Text style={[styles.bulletText, styles.challengesText]}>{challenge}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
      
      {/* Add footer inside the page */}
      <Text style={styles.footer}>
        CerebralQ Personality Assessment | Page {pageNumber}
      </Text>
    </View>
  );
};
