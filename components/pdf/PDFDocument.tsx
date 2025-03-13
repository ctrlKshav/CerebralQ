import React from 'react';
import { Document, Page, StyleSheet, View, Text } from '@react-pdf/renderer';
import { PDFHero } from '@/components/pdf/PDFHero';
import { PDFPersonalityTraits } from '@/components/pdf/PDFPersonalityTraits';
import { PDFCareerSuggestions } from '@/components/pdf/PDFCareerSuggestions';
import { PDFSimilarPersonalities } from '@/components/pdf/PDFSimilarPersonalities';
import { PDFDetailedPersonalityInsights } from '@/components/pdf/PDFDetailedPersonalityInsights';
import { PDFAboutPersonalityType } from '@/components/pdf/PDFAboutPersonalityType';
import { ResultData } from '@/types/tests/mbti';
import { getPersonalityInsights } from '@/data/mbti/personalityInformation';

// Create styles with theme variants
const createStyles = (isDarkMode = false) => StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    backgroundColor: isDarkMode ? '#18181b' : '#ffffff',
    color: isDarkMode ? '#e4e4e7' : '#000000',
  },
  section: {
    marginBottom: 30,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 10,
    color: isDarkMode ? '#71717a' : '#999999',
  },
});

interface PDFDocumentProps {
  resultData: ResultData;
  isDarkMode?: boolean;
}

export const PDFResultsDocument: React.FC<PDFDocumentProps> = ({ 
  resultData,
  isDarkMode = false 
}) => {
  const styles = createStyles(isDarkMode);
  
  const {
    personalityType,
    personalityDescription,
    completionDate,
    traitScores,
    careerSuggestions,
    similarPersonalities,
  } = resultData;

  // Get the alias for the current personality type
  const personalityAlias = personalityDescription.alias;

  // Get personality insights
  const personalityInsights = getPersonalityInsights(personalityType);

  return (
    <Document>
      {/* First Page: Introduction and Personality Type Overview */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <PDFHero
            personalityType={personalityType}
            personalityAlias={personalityAlias}
            personalityDescription={personalityDescription}
            completionDate={completionDate}
            isDarkMode={isDarkMode}
          />
        </View>
        
        {/* About Personality Type Section */}
        <View style={styles.section}>
          <PDFAboutPersonalityType
            personalityType={personalityType}
            sectionNumber={1}
            isDarkMode={isDarkMode}
          />
        </View>
        
        <Text style={styles.footer}>
          CerebralQ Personality Assessment | Page 1
        </Text>
      </Page>
      
      {/* Second Page: Detailed Traits */}
      <Page size="A4" style={styles.page}>
        {/* Personality Traits Section */}
        {traitScores && (
          <View style={styles.section}>
            <PDFPersonalityTraits 
              traitScores={traitScores} 
              sectionNumber={2}
              isDarkMode={isDarkMode}
            />
          </View>
        )}
        
        <Text style={styles.footer}>
          CerebralQ Personality Assessment | Page 2
        </Text>
      </Page>
      
      {/* Third Page: Careers and Similar Personalities */}
      <Page size="A4" style={styles.page}>
        {/* Career Suggestions */}
        <View style={styles.section}>
          <PDFCareerSuggestions
            personalityType={personalityType}
            careerSuggestions={careerSuggestions}
            sectionNumber={3}
            isDarkMode={isDarkMode}
          />
        </View>
        
        {/* Similar Personalities */}
        <View style={styles.section}>
          <PDFSimilarPersonalities
            personalityType={personalityType}
            similarPersonalities={similarPersonalities}
            sectionNumber={4}
            isDarkMode={isDarkMode}
          />
        </View>
        
        <Text style={styles.footer}>
          CerebralQ Personality Assessment | Page 3
        </Text>
      </Page>
      
      {/* Fourth Page: Detailed Personality Insights (now consolidated into one section) */}
      <Page size="A4" style={styles.page}>
        {/* Consolidated detailed insights */}
        <View style={styles.section}>
          <PDFDetailedPersonalityInsights
            personalityType={personalityType}
            personalityAlias={personalityAlias}
            personalityInsights={personalityInsights}
            sectionNumber={5}
            isDarkMode={isDarkMode}
          />
        </View>
        
        <Text style={styles.footer}>
          CerebralQ Personality Assessment | Page 4
        </Text>
      </Page>
    </Document>
  );
};
