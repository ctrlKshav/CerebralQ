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
    borderColor: isDarkMode ? '#60a5fa' : '#0070f3',
    color: isDarkMode ? '#60a5fa' : '#0070f3',
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
    color: isDarkMode ? '#60a5fa' : '#0070f3',
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    color: isDarkMode ? '#a1a1aa' : '#666666',
    marginBottom: 15,
    lineHeight: 1.4,
  },
  careerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  careerItem: {
    width: '48%',
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: isDarkMode ? '#3f3f46' : '#e5e5e5',
    borderRadius: 6,
    backgroundColor: isDarkMode ? '#27272a' : '#ffffff',
  },
  careerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  careerTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: isDarkMode ? '#e4e4e7' : '#000000',
    maxWidth: '75%',
  },
  matchContainer: {
    backgroundColor: isDarkMode ? '#374151' : '#f5f5f5',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
  },
  matchPercentage: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: isDarkMode ? '#60a5fa' : '#0070f3',
  },
  progressBar: {
    height: 4,
    backgroundColor: isDarkMode ? '#3f3f46' : '#e5e5e5',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: isDarkMode ? '#60a5fa' : '#0070f3',
    borderRadius: 2,
  },
  careerCategory: {
    fontSize: 8,
    color: isDarkMode ? '#a1a1aa' : '#666666',
    marginTop: 6,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: isDarkMode ? '#3f3f46' : '#e5e5e5',
    marginVertical: 12,
  },
});

export const PDFCareerSuggestions: React.FC<PDFCareerSuggestionsProps> = ({
  personalityType,
  careerSuggestions,
  sectionNumber,
  isDarkMode = false
}) => {
  const styles = createStyles(isDarkMode);

  // Group careers by industry/category for more organized display
  const getCareerCategory = (career: Career): string => {
    // This is a simplified version - in a real app you might have actual categories
    if (career.match > 85) return "Excellent Match";
    if (career.match > 75) return "Strong Match";
    return "Good Match";
  };

  const categorizedCareers: Record<string, Career[]> = {};
  careerSuggestions.forEach(career => {
    const category = getCareerCategory(career);
    if (!categorizedCareers[category]) {
      categorizedCareers[category] = [];
    }
    categorizedCareers[category].push(career);
  });

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
      
      <Text style={styles.description}>
        These career paths tend to leverage your natural strengths and
        align with your personality preferences. Consider these
        options when planning your professional development.
      </Text>

      {Object.entries(categorizedCareers).map(([category, careers], categoryIndex) => (
        <View key={category}>
          {categoryIndex > 0 && <View style={styles.divider} />}
          
          <Text style={[styles.cardTitle, { marginVertical: 10 }]}>{category}</Text>
          
          <View style={styles.careerGrid}>
            {careers.map((career) => (
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
                <Text style={styles.careerCategory}>
                  {category === "Excellent Match" ? "⭐️ Highly Recommended" : ""}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};
