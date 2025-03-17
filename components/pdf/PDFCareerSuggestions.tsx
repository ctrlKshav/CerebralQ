import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { createBaseStyles, getThemeColors } from './PDFTheme';

interface Career {
  title: string;
  match: number;
}

interface PDFCareerSuggestionsProps {
  personalityType: string;
  careerSuggestions: Career[];
  sectionNumber: number;
  isDarkMode?: boolean;
  isCompact?: boolean; // New prop for compact display
}

// Create styles with theme variants
const createStyles = (isDarkMode = false, isCompact = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);
  
  return {
    ...StyleSheet.create({
      container: {
        margin: isCompact ? 5 : 10,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: isCompact ? 10 : 20,
      },
      cardHeader: {
        marginBottom: isCompact ? 8 : 15,
      },
      cardTitle: {
        fontSize: 10,
        color: theme.mutedForeground,
        marginBottom: 2,
      },
      cardHeading: {
        fontSize: isCompact ? 14 : 16,
        fontFamily: 'Helvetica-Bold',
        color: theme.primary,
        marginBottom: isCompact ? 5 : 10,
      },
      description: {
        fontSize: 10,
        color: theme.mutedForeground,
        marginBottom: isCompact ? 8 : 15,
        lineHeight: 1.4,
      },
      careerGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      careerItem: {
        width: '48%',
        marginBottom: isCompact ? 6 : 12,
        padding: isCompact ? 6 : 10,
        borderWidth: 1,
        borderColor: theme.border,
        borderRadius: 6,
        backgroundColor: theme.card,
      },
      careerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: isCompact ? 4 : 8,
      },
      careerTitle: {
        fontSize: isCompact ? 9 : 10,
        fontFamily: 'Helvetica-Bold',
        color: theme.foreground,
        maxWidth: '75%',
      },
      matchContainer: {
        backgroundColor: theme.muted,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 10,
      },
      matchPercentage: {
        fontSize: 9,
        fontFamily: 'Helvetica-Bold',
        color: theme.primary,
      },
      progressBar: {
        height: 4,
        backgroundColor: theme.muted,
        borderRadius: 2,
      },
      progressFill: {
        height: '100%',
        backgroundColor: theme.primary,
        borderRadius: 2,
      },
      careerCategory: {
        fontSize: 8,
        color: theme.mutedForeground,
        marginTop: isCompact ? 3 : 6,
      },
      divider: {
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
        marginVertical: isCompact ? 8 : 12,
      },
    }),
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
  };
};

export const PDFCareerSuggestions: React.FC<PDFCareerSuggestionsProps> = ({
  personalityType,
  careerSuggestions,
  sectionNumber,
  isDarkMode = false,
  isCompact = false
}) => {
  const styles = createStyles(isDarkMode, isCompact);

  return (
    <View style={styles.container} wrap={false}>
      <View style={styles.header}>
        <Text style={styles.sectionNumber}>{sectionNumber}</Text>
        <Text style={styles.sectionTitle}>Career Recommendations</Text>
      </View>

      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Professional Match</Text>
        <Text style={styles.cardHeading}>Career Paths for {personalityType}</Text>
      </View>
      
      {!isCompact && (
        <Text style={styles.description}>
          These career paths tend to leverage your natural strengths and
          align with your personality preferences. Consider these
          options when planning your professional development.
        </Text>
      )}
      
      {isCompact && (
        <Text style={styles.description}>
          Top career recommendations that align with your {personalityType} personality type.
        </Text>
      )}

      <View style={styles.careerGrid}>
        {careerSuggestions.map((career) => (
          <View key={career.title} style={styles.careerItem}>
            <View style={styles.careerHeader}>
              <Text style={styles.careerTitle}>{career.title}</Text>
              <View style={styles.matchContainer}>
                <Text style={styles.matchPercentage}>{career.match}%</Text>
              </View>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${career.match}%` }]} />
            </View>
            {!isCompact && career.match > 85 && (
              <Text style={styles.careerCategory}>
                ⭐️ Highly Recommended
              </Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};
