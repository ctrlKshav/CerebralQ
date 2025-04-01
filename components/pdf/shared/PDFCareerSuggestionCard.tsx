import React from "react";
import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import { CareerSuggestion } from "@/types/tests/mbti";
import { getThemeColors } from "../PDFTheme";

interface PDFCareerSuggestionCardProps {
  suggestion: CareerSuggestion;
  isDarkMode?: boolean;
}

const PDFCareerSuggestionCard: React.FC<PDFCareerSuggestionCardProps> = ({
  suggestion,
  isDarkMode = false,
}) => {
  const theme = getThemeColors(isDarkMode);
  
  const styles = StyleSheet.create({
    card: {
      marginBottom: 20,
      backgroundColor: theme.card,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.border,
      overflow: "hidden",
    },
    imageContainer: {
      height: 150,
      position: "relative",
    },
    image: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
    matchBadge: {
      position: "absolute",
      top: 10,
      right: 10,
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 4,
      backgroundColor: suggestion.matchPercentage >= 90 
        ? "#10b981" 
        : suggestion.matchPercentage >= 80 
          ? "#3b82f6" 
          : "#f59e0b",
      opacity: 0.9,
    },
    matchBadgeText: {
      color: "#ffffff",
      fontSize: 10,
      fontFamily: "Helvetica-Bold",
    },
    content: {
      padding: 16,
    },
    title: {
      fontSize: 16,
      fontFamily: "Helvetica-Bold",
      color: theme.foreground,
      marginBottom: 8,
    },
    description: {
      fontSize: 12,
      color: theme.mutedForeground,
      lineHeight: 1.4,
      marginBottom: 12,
    },
    traitsContainer: {
      marginTop: 8,
    },
    traitsHeader: {
      fontSize: 10,
      color: theme.mutedForeground,
      fontFamily: "Helvetica-Bold",
      marginBottom: 6,
    },
    traitsRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 6,
    },
    traitBadge: {
      backgroundColor: theme.muted,
      paddingVertical: 4,
      paddingHorizontal: 6,
      borderRadius: 4,
      marginRight: 6,
      marginBottom: 6,
    },
    traitText: {
      fontSize: 9,
      color: theme.mutedForeground,
      fontFamily: "Helvetica-Bold",
    },
  });
  
  // Helper function to get career image (simplified version of the React component)
  const getCareerImage = (title: string) => {
    const images: Record<string, string> = {
      "Business Management":
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      "Entrepreneurship":
        "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=800&q=80",
      "Law": 
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      "Engineering":
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    };

    return (
      images[title] ||
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80"
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          src={getCareerImage(suggestion.title)}
          style={styles.image}
          cache={true}
        />
        <View style={styles.matchBadge}>
          <Text style={styles.matchBadgeText}>{suggestion.matchPercentage}% Match</Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>{suggestion.title}</Text>
        <Text style={styles.description}>{suggestion.description}</Text>
        
        {suggestion.qualityMatches && suggestion.qualityMatches.length > 0 && (
          <View style={styles.traitsContainer}>
            <Text style={styles.traitsHeader}>Your Matching Traits</Text>
            <View style={styles.traitsRow}>
              {suggestion.qualityMatches.map((quality, index) => (
                <View key={index} style={styles.traitBadge}>
                  <Text style={styles.traitText}>{quality.title}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default PDFCareerSuggestionCard;
