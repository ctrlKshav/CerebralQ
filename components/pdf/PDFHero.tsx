import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { PersonalityDescription } from '@/types/tests/mbti';

// Create styles
const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginBottom: 20
  },
  badge: {
    alignSelf: 'center',
    padding: 6,
    backgroundColor: '#f4f4f4',
    borderRadius: 4,
    marginBottom: 10,
  },
  badgeText: {
    fontSize: 10,
    color: '#666666',
  },
  heading: {
    fontSize: 24,
    marginBottom: 5,
  },
  personalityType: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 32,
  },
  subtitle: {
    fontSize: 16,
    color: '#0070f3',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 10,
    maxWidth: 500,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 1.5,
  },
  completionDate: {
    fontSize: 10,
    color: '#999999',
    marginBottom: 10,
  },
});

interface PDFHeroProps {
  personalityType: string;
  personalityAlias: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
}

export const PDFHero: React.FC<PDFHeroProps> = ({
  personalityType,
  personalityAlias,
  personalityDescription,
  completionDate,
}) => {
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
