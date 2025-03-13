import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { personalityDatabase } from '@/data/mbti/personalityDatabase';

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
  card: {
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  cardHeader: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  personalityType: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  personalityAlias: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 10,
  },
  description: {
    fontSize: 11,
    color: '#333333',
    lineHeight: 1.5,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  column: {
    flex: 1,
    paddingHorizontal: 5,
  },
  sectionLabel: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
  },
  bulletList: {
    marginLeft: 5,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  bullet: {
    fontSize: 9,
    marginRight: 5,
    color: '#0070f3',
  },
  bulletText: {
    fontSize: 10,
    lineHeight: 1.4,
    color: '#444444',
    flex: 1,
  },
  strengthsLabel: {
    color: '#4ade80',
  },
  challengesLabel: {
    color: '#fbbf24',
  },
});

interface PDFAboutPersonalityTypeProps {
  personalityType: string;
  sectionNumber: number;
}

export const PDFAboutPersonalityType: React.FC<PDFAboutPersonalityTypeProps> = ({
  personalityType,
  sectionNumber,
}) => {
  const personalityInfo = personalityDatabase[personalityType];
  
  if (!personalityInfo) {
    return <View><Text>Personality type not found</Text></View>;
  }
  
  return (
    <View style={styles.container} wrap={false}>
      <View style={styles.header}>
        <Text style={styles.sectionNumber}>{sectionNumber}</Text>
        <Text style={styles.sectionTitle}>Personality Type</Text>
      </View>
      
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.personalityType}>{personalityType}</Text>
          <Text style={styles.personalityAlias}>{personalityInfo.alias}</Text>
        </View>
        
        <Text style={styles.description}>{personalityInfo.description}</Text>
        
        {/* Side-by-side Strengths and Growth Areas */}
        <View style={styles.row}>
          {/* Strengths column */}
          <View style={styles.column}>
            <Text style={[styles.sectionLabel, styles.strengthsLabel]}>Strengths</Text>
            <View style={styles.bulletList}>
              {personalityInfo.strengths.map((strength, index) => (
                <View key={`strength-${index}`} style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{strength}</Text>
                </View>
              ))}
            </View>
          </View>
          
          {/* Growth Areas column */}
          <View style={styles.column}>
            <Text style={[styles.sectionLabel, styles.challengesLabel]}>Growth Areas</Text>
            <View style={styles.bulletList}>
              {personalityInfo.challenges.map((challenge, index) => (
                <View key={`challenge-${index}`} style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{challenge}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
