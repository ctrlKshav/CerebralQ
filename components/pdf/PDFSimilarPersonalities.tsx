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
  isDarkMode?: boolean;
}

// Create styles with theme variants
const createStyles = (isDarkMode = false) => StyleSheet.create({
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
    borderColor: isDarkMode ? '#a78bfa' : '#7c3aed',
    color: isDarkMode ? '#a78bfa' : '#7c3aed',
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    color: isDarkMode ? '#ffffff' : '#000000',
  },
  cardHeader: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 10,
    color: isDarkMode ? '#a1a1aa' : '#666666',
    marginBottom: 2,
  },
  cardHeading: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: isDarkMode ? '#a78bfa' : '#7c3aed',
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    color: isDarkMode ? '#a1a1aa' : '#666666',
    marginBottom: 15,
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
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: isDarkMode ? '#3f3f46' : '#e5e5e5',
    borderRadius: 6,
    backgroundColor: isDarkMode ? '#27272a' : '#ffffff',
  },
  imagePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: isDarkMode ? '#4b5563' : '#e5e5e5',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: isDarkMode ? '#a1a1aa' : '#9ca3af',
  },
  personInfo: {
    flex: 1,
  },
  personName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: isDarkMode ? '#e4e4e7' : '#000000',
    marginBottom: 2,
  },
  profession: {
    fontSize: 8,
    color: isDarkMode ? '#a1a1aa' : '#666666',
  },
  categoryLabel: {
    width: '100%',
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: isDarkMode ? '#d1d5db' : '#374151',
    marginTop: 10,
    marginBottom: 8,
  }
});

export const PDFSimilarPersonalities: React.FC<PDFSimilarPersonalitiesProps> = ({
  personalityType,
  similarPersonalities,
  sectionNumber,
  isDarkMode = false
}) => {
  const styles = createStyles(isDarkMode);

  // Group personalities by profession for better organization
  const personalitiesByCategory: Record<string, Person[]> = {};
  
  similarPersonalities.forEach(person => {
    // Extract general category from profession (simplified)
    const category = person.profession.split(',')[0].trim();
    if (!personalitiesByCategory[category]) {
      personalitiesByCategory[category] = [];
    }
    personalitiesByCategory[category].push(person);
  });

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
        These notable figures are believed to share your {personalityType} personality type. 
        Examining their strengths and approaches may provide insights into your own potential.
      </Text>

      {Object.entries(personalitiesByCategory).map(([category, persons]) => (
        <View key={category} wrap={false}>
          <Text style={styles.categoryLabel}>{category}</Text>
          <View style={styles.personalitiesWrapper}>
            {persons.map((person) => (
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
      ))}
    </View>
  );
};
