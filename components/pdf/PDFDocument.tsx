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
import { createBaseStyles, getThemeColors } from './PDFTheme';

// Create styles with theme variants
const createStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);
  
  return StyleSheet.create({
    page: baseStyles.page,
    section: {
      marginBottom: 20,
    },
    footer: {
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      fontSize: 10,
      color: theme.mutedForeground,
    },
  });
};

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
      
      {/* Third Page: Combined Career Suggestions and Similar Personalities */}
      <Page size="A4" style={styles.page}>
        {/* Career Suggestions - with compact prop to make it more space-efficient */}
        <View style={styles.section}>
          <PDFCareerSuggestions
            personalityType={personalityType}
            careerSuggestions={careerSuggestions.slice(0, 6)} // Limit to top 6 career suggestions
            sectionNumber={3}
            isDarkMode={isDarkMode}
            isCompact={true} // New prop for more compact display
          />
        </View>
        
        {/* Similar Personalities - also with compact prop */}
        <View style={styles.section}>
          <PDFSimilarPersonalities
            personalityType={personalityType}
            similarPersonalities={similarPersonalities.slice(0, 6)} // Limit to top 6 personalities
            sectionNumber={4}
            isDarkMode={isDarkMode}
            isCompact={true} // New prop for more compact display
          />
        </View>
        
        <Text style={styles.footer}>
          CerebralQ Personality Assessment | Page 3
        </Text>
      </Page>
      
      {/* Fourth Page: Detailed Personality Insights */}
      <Page size="A4" style={styles.page}>
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
