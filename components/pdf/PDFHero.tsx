import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { PersonalityDescription } from '@/types/tests/mbti';
import { createBaseStyles, getThemeColors } from './PDFTheme';

// Create styles with theme variants
const createStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);
  
  return {
    ...StyleSheet.create({
      container: {
        textAlign: 'center',
        marginBottom: 30,
      },
      badge: {
        alignSelf: 'center',
        padding: 6,
        backgroundColor: theme.muted,
        borderRadius: 4,
        marginBottom: 15,
      },
      badgeText: {
        fontSize: 10,
        color: theme.mutedForeground,
      },
      heading: {
        fontSize: 24,
        marginBottom: 5,
        color: theme.foreground,
        fontFamily: 'Helvetica',
      },
      personalityType: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 32,
        color: theme.foreground,
      },
      subtitle: {
        fontSize: 16,
        color: theme.primary,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 15,
      },
      description: {
        fontSize: 12,
        color: theme.mutedForeground,
        marginBottom: 15,
        maxWidth: 500,
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: 1.5,
      },
      completionDate: {
        fontSize: 10,
        color: theme.mutedForeground,
        marginBottom: 10,
      },
    }),
  };
};

interface PDFHeroProps {
  personalityType: string;
  personalityAlias: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
  isDarkMode?: boolean;
}

export const PDFHero: React.FC<PDFHeroProps> = ({
  personalityType,
  personalityAlias,
  personalityDescription,
  completionDate,
  isDarkMode = false,
}) => {
  const styles = createStyles(isDarkMode);
  
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Your Personality Type</Text>
      </View>
      
      <Text style={styles.heading}>
        Hey, you're an <Text style={styles.personalityType}>{personalityType}</Text>
      </Text>
      
      <Text style={styles.subtitle}>{personalityAlias}</Text>
      
      <Text style={styles.description}>{personalityDescription.description}</Text>
      
      <Text style={styles.completionDate}>Completed on {completionDate}</Text>
    </View>
  );
};
