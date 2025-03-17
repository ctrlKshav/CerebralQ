import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import type { TraitScores } from '@/types/tests/mbti';
import { traitDescriptions } from '@/data/mbti/traitDescriptions';
import { createBaseStyles, getThemeColors } from './PDFTheme';

// Create styles with theme variants
const createStyles = (isDarkMode = false) => {
  const baseStyles = createBaseStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);
  
  return {
    ...StyleSheet.create({
      container: {
        margin: 10,
      },
      headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      traitContainer: {
        marginTop: 25,
        marginBottom: 25,
      },
      labelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      label: {
        fontSize: 9,
        color: theme.mutedForeground,
        fontFamily: 'Helvetica',
      },
      barContainer: {
        height: 16,
        backgroundColor: theme.muted,
        borderRadius: 8,
        position: 'relative',
        overflow: 'hidden',
      },
      leftBar: {
        position: 'absolute',
        left: 0,
        height: '100%',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      },
      rightBar: {
        position: 'absolute',
        right: 0,
        height: '100%',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
      },
      percentageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
      },
      percentageText: {
        fontSize: 8,
        fontFamily: 'Helvetica-Bold',
        color: 'white',
      },
      traitDescription: {
        marginTop: 10,
        padding: 10,
        backgroundColor: theme.accent,
        borderRadius: 8,
      },
      traitTitle: {
        fontSize: 14,
        fontFamily: 'Helvetica-Bold',
        color: theme.primary,
        marginBottom: 5,
      },
      traitText: {
        fontSize: 10,
        color: theme.mutedForeground,
        lineHeight: 1.4,
      },
      badgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      badgeItem: {
        padding: 2,
        paddingHorizontal: 6,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.border,
        marginRight: 5,
      },
      badgeText: {
        fontSize: 8,
        color: theme.foreground,
        fontFamily: 'Helvetica-Bold',
      },
    }),
    sectionNumber: baseStyles.sectionNumber,
    sectionTitle: baseStyles.sectionTitle,
  };
};

interface PDFPersonalityTraitsProps {
  traitScores: TraitScores;
  sectionNumber: number;
  isDarkMode?: boolean;
}

export const PDFPersonalityTraits: React.FC<PDFPersonalityTraitsProps> = ({
  traitScores,
  sectionNumber,
  isDarkMode = false,
}) => {
  const styles = createStyles(isDarkMode);
  const theme = getThemeColors(isDarkMode);
  
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionNumber}>{sectionNumber}</Text>
        <Text style={styles.sectionTitle}>Personality Traits</Text>
      </View>

      {Object.entries(traitScores).map(([trait, score]) => {
        const typedTrait = trait as keyof TraitScores;
        const description = traitDescriptions[typedTrait];
        const leftPercentage = score.leftPercentage;
        const rightPercentage = score.rightPercentage;
        // Use chart colors from the theme for trait colors
        const colorIndex = Object.keys(traitScores).indexOf(trait) % 5 + 1;
        const color = theme[`chart${colorIndex}` as keyof typeof theme] || theme.primary;
        
        const dominant = score.dominant === "left" 
          ? description.left 
          : description.right;

        return (
          <View key={trait} style={styles.traitContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>{description.leftLabel}</Text>
              <Text style={styles.label}>{description.rightLabel}</Text>
            </View>
            
            <View style={styles.barContainer}>
              <View style={[
                styles.leftBar, 
                { width: `${leftPercentage}%`, backgroundColor: color, opacity: score.dominant === "left" ? 1 : 0.2 }
              ]} />
              <View style={[
                styles.rightBar, 
                { width: `${rightPercentage}%`, backgroundColor: color, opacity: score.dominant === "right" ? 1 : 0.2 }
              ]} />
              
              {/* Display percentages directly on the bars */}
              <View style={styles.percentageOverlay}>
                <Text style={[
                  styles.percentageText,
                  {opacity: leftPercentage > 15 ? 1 : 0} // Only show if there's enough space
                ]}>
                  {Math.round(leftPercentage)}%
                </Text>
                <Text style={[
                  styles.percentageText,
                  {opacity: rightPercentage > 15 ? 1 : 0} // Only show if there's enough space
                ]}>
                  {Math.round(rightPercentage)}%
                </Text>
              </View>
            </View>
            
            <View style={styles.traitDescription}>
              <Text style={styles.traitTitle}>
                {score.dominant === "left" ? description.leftLabel : description.rightLabel} ({dominant.letter})
              </Text>
              <Text style={styles.traitText}>{dominant.description}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};
