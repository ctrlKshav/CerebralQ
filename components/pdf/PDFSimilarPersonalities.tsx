import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

interface Person {
  name: string;
  profession: string;
  image: string;
}

interface PDFSimilarPersonalitiesProps {
  personalityType: string;
  similarPersonalities: Person[];
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
  personalityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 6,
  },
  imagePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e5e5e5',
    marginRight: 10,
  },
  personInfo: {
    flex: 1,
  },
  personName: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
  },
  profession: {
    fontSize: 10,
    color: '#666666',
  },
});

export const PDFSimilarPersonalities: React.FC<PDFSimilarPersonalitiesProps> = ({
  personalityType,
  similarPersonalities,
  sectionNumber
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionNumber}>{sectionNumber}</Text>
        <Text style={styles.sectionTitle}>Similar Personalities</Text>
      </View>

      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Notable People</Text>
        <Text style={styles.cardHeading}>Who Shares Your Type</Text>
      </View>
      
      <Text style={styles.description}>
        These notable figures are believed to share your {personalityType} personality type. 
        Examining their strengths and approaches may provide insights into your own potential.
      </Text>

      {similarPersonalities.map((person) => (
        <View key={person.name} style={styles.personalityItem}>
          <View style={styles.imagePlaceholder} />
          <View style={styles.personInfo}>
            <Text style={styles.personName}>{person.name}</Text>
            <Text style={styles.profession}>{person.profession}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
