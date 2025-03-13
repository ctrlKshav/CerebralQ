import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { PersonalityTypeInsights } from '@/types/tests/mbti';

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
  subtitle: {
    fontSize: 11,
    color: '#666666',
    marginBottom: 15,
    lineHeight: 1.5,
  },
  insightSection: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#fafafa',
    borderRadius: 6,
    borderLeftWidth: 4,
  },
  insightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  insightIcon: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  insightTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
  },
  insightPoint: {
    flexDirection: 'row',
    marginBottom: 6,
    paddingLeft: 4,
  },
  bulletPoint: {
    fontSize: 11,
    marginRight: 6,
    width: 10,
  },
  pointText: {
    fontSize: 10,
    flex: 1,
    lineHeight: 1.5,
  },
  // Color styles for different sections
  workStyleSection: {
    borderLeftColor: '#60a5fa',
  },
  workStyleIcon: {
    backgroundColor: '#60a5fa',
  },
  relationshipsSection: {
    borderLeftColor: '#a78bfa',
  },
  relationshipsIcon: {
    backgroundColor: '#a78bfa',
  },
  growthAreasSection: {
    borderLeftColor: '#2dd4bf',
  },
  growthAreasIcon: {
    backgroundColor: '#2dd4bf',
  },
});

interface PDFWorkAndRelationshipsProps {
  personalityType: string;
  personalityInsights: PersonalityTypeInsights;
  sectionNumber: number;
}

// Helper function to get section styles
const getSectionStyles = (sectionType: string) => {
  switch(sectionType) {
    case 'workStyle':
      return {
        section: styles.workStyleSection,
        icon: styles.workStyleIcon
      };
    case 'relationships':
      return {
        section: styles.relationshipsSection,
        icon: styles.relationshipsIcon
      };
    case 'growthAreas':
      return {
        section: styles.growthAreasSection,
        icon: styles.growthAreasIcon
      };
    default:
      return {
        section: {},
        icon: {}
      };
  }
};

export const PDFWorkAndRelationships: React.FC<PDFWorkAndRelationshipsProps> = ({
  personalityType,
  personalityInsights,
  sectionNumber
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionNumber}>{sectionNumber}</Text>
        <Text style={styles.sectionTitle}>Work Style & Relationships</Text>
      </View>
      
      <Text style={styles.subtitle}>
        How {personalityType} types typically interact in professional and personal contexts.
      </Text>
      
      {renderInsightSection('workStyle', personalityInsights.workStyle)}
      {renderInsightSection('relationships', personalityInsights.relationships)}
      {renderInsightSection('growthAreas', personalityInsights.growthAreas)}
    </View>
  );
};

// Helper function to render an insight section
const renderInsightSection = (sectionType: string, section: { title: string, points: string[] }) => {
  const sectionStyles = getSectionStyles(sectionType);
  
  return (
    <View wrap={false} style={[styles.insightSection, sectionStyles.section]}>
      <View style={styles.insightHeader}>
        <View style={[styles.insightIcon, sectionStyles.icon]} />
        <Text style={styles.insightTitle}>{section.title}</Text>
      </View>
      
      {section.points.map((point, index) => (
        <View key={`point-${index}`} style={styles.insightPoint}>
          <Text style={styles.bulletPoint}>→</Text>
          <Text style={styles.pointText}>{point}</Text>
        </View>
      ))}
    </View>
  );
};
