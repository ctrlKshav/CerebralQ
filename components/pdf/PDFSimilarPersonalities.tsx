import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { createBaseStyles, getThemeColors } from './PDFTheme';

interface Person {
  name: string;
  profession: string;
  image: string;
}

interface PDFSimilarPersonalitiesProps {
  personalityType: string;
  similarPersonalities: Person[];
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
        marginBottom: isCompact ? 10 : 15,
        lineHeight: 1.4,
      },
      personalitiesWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      personalityItem: {
        width: '48%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: isCompact ? 6 : 12,
        padding: isCompact ? 6 : 8,
        borderWidth: 1,
        borderColor: theme.border,
        borderRadius: 6,
        backgroundColor: theme.card,
      },
      imagePlaceholder: {
        width: isCompact ? 30 : 40,
        height: isCompact ? 30 : 40,
        borderRadius: isCompact ? 15 : 20,
        backgroundColor: theme.muted,
        marginRight: isCompact ? 6 : 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      placeholderText: {
        fontSize: isCompact ? 12 : 16,
        fontFamily: 'Helvetica-Bold',
        color: theme.mutedForeground,
      },
      personInfo: {
        flex: 1,
      },
      personName: {
        fontSize: isCompact ? 9 : 10,
        fontFamily: 'Helvetica-Bold',
        color: theme.foreground,
        marginBottom: isCompact ? 1 : 2,
      },
      profession: {
        fontSize: isCompact ? 7 : 8,
        color: theme.mutedForeground,
      },
      categoryLabel: {
        width: '100%',
        fontSize: 11,
        fontFamily: 'Helvetica-Bold',
        color: theme.foreground,
        marginTop: isCompact ? 5 : 10,
        marginBottom: isCompact ? 4 : 8,
      }
    }),
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
  };
};

export const PDFSimilarPersonalities: React.FC<PDFSimilarPersonalitiesProps> = ({
  personalityType,
  similarPersonalities,
  sectionNumber,
  isDarkMode = false,
  isCompact = false
}) => {
  const styles = createStyles(isDarkMode, isCompact);

  // Get the first letter of the person's name for the placeholder
  const getInitial = (name: string) => name.charAt(0);

  return (
    <View style={styles.container} wrap={false}>
      <View style={styles.header}>
        <Text style={styles.sectionNumber}>{sectionNumber}</Text>
        <Text style={styles.sectionTitle}>Similar Personalities</Text>
      </View>

      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Notable People</Text>
        <Text style={styles.cardHeading}>Who Shares Your Type</Text>
      </View>
      
      <Text style={styles.description}>
        {isCompact 
          ? `Notable figures who share your ${personalityType} personality traits and approach to life.`
          : `These notable figures are believed to share your ${personalityType} personality type. 
             Examining their strengths and approaches may provide insights into your own potential.`
        }
      </Text>

      <View style={styles.personalitiesWrapper}>
        {similarPersonalities.map((person) => (
          <View key={person.name} style={styles.personalityItem}>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.placeholderText}>{getInitial(person.name)}</Text>
            </View>
            <View style={styles.personInfo}>
              <Text style={styles.personName}>{person.name}</Text>
              <Text style={styles.profession}>{person.profession}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
