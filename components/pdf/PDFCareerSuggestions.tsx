import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

interface Career {
  title: string;
  match: number;
}

interface PDFCareerSuggestionsProps {
  personalityType: string;
  careerSuggestions: Career[];
  sectionNumber: number;
}

// Create styles
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0070f3',
    color: '#0070f3',
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
  },
  cardHeader: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 2,
  },
  cardHeading: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: '#0070f3',
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 15,
    lineHeight: 1.4,
  },
  careerItem: {
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 6,
  },
  careerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  careerTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
  },
  matchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  matchPercentage: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#0070f3',
    marginRight: 2,
  },
  matchText: {
    fontSize: 8,
    color: '#666666',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e5e5e5',
    borderRadius: 3,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#0070f3',
    borderRadius: 3,
  },
});

export const PDFCareerSuggestions: React.FC<PDFCareerSuggestionsProps> = ({
  personalityType,
  careerSuggestions,
  sectionNumber
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionNumber}>{sectionNumber}</Text>
        <Text style={styles.sectionTitle}>Career Recommendations</Text>
      </View>

      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Professional Match</Text>
        <Text style={styles.cardHeading}>Career Paths for {personalityType}</Text>
      </View>
      
      <Text style={styles.description}>
        These career paths tend to leverage your natural strengths and
        align with your personality preferences. Consider these
        options when planning your professional development.
      </Text>

      {careerSuggestions.map((career) => (
        <View key={career.title} style={styles.careerItem}>
          <View style={styles.careerHeader}>
            <Text style={styles.careerTitle}>{career.title}</Text>
            <View style={styles.matchContainer}>
              <Text style={styles.matchPercentage}>{career.match}%</Text>
              <Text style={styles.matchText}>Match</Text>
            </View>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${career.match}%` }]} />
          </View>
        </View>
      ))}
    </View>
  );
};
