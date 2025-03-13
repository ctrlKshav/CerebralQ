import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { PersonalityDescription } from '@/types/tests/mbti';

// Create styles with theme variants
const createStyles = (isDarkMode = false) => StyleSheet.create({
  container: {
    textAlign: 'center',
    marginBottom: 20
  },
  badge: {
    alignSelf: 'center',
    padding: 6,
    backgroundColor: isDarkMode ? '#27272a' : '#f4f4f4',
    borderRadius: 4,
    marginBottom: 10,
  },
  badgeText: {
    fontSize: 10,
    color: isDarkMode ? '#a1a1aa' : '#666666',
  },
  heading: {
    fontSize: 24,
    marginBottom: 5,
    color: isDarkMode ? '#ffffff' : '#000000',
  },
  personalityType: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 32,
    color: isDarkMode ? '#ffffff' : '#000000',
  },
  subtitle: {
    fontSize: 16,
    color: isDarkMode ? '#60a5fa' : '#0070f3',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    color: isDarkMode ? '#a1a1aa' : '#666666',
    marginBottom: 10,
    maxWidth: 500,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 1.5,
  },
  completionDate: {
    fontSize: 10,
    color: isDarkMode ? '#71717a' : '#999999',
    marginBottom: 10,
  },
});

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
