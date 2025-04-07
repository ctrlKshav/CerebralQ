import React from "react";
import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import { CareerSuggestion } from "@/types/tests/mbti/results";
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
      marginBottom: 30,
      backgroundColor: theme.card,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.border,
      overflow: "hidden",
      flexDirection: "row",
      height: 300, // Fixed height for consistency
    },
    imageContainer: {
      width: "35%",
      height: "100%", // Full height of the card
    },
    image: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
    contentContainer: {
      width: "65%",
      padding: 0,
      position: "relative",
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
      marginBottom: 12,
    },
    title: {
      fontSize: 16,
      fontFamily: "Helvetica-Bold",
      color: theme.foreground,
      maxWidth: "70%", // Prevent title from running into match badge
    },
    matchBadge: {
      paddingVertical: 6,
      paddingHorizontal: 8,
      borderRadius: 5,
      backgroundColor: suggestion.matchPercentage >= 90 
        ? "#10b981" 
        : suggestion.matchPercentage >= 80 
          ? "#3b82f6" 
          : "#f59e0b",
    },
    matchBadgeText: {
      color: "#ffffff",
      fontSize: 9,
      fontFamily: "Helvetica",
    },
    content: {
      padding: 16,
      paddingBottom: 8,
      paddingTop: 0,
    },
    description: {
      fontSize: 11,
      color: theme.mutedForeground,
      lineHeight: 1.6,
      marginBottom: 14,
    },
    traitsContainer: {
      marginTop: 2,
    },
    traitsHeader: {
      fontSize: 11,
      color: theme.mutedForeground,
      fontFamily: "Helvetica-Bold",
      marginBottom: 8,
    },
    traitsRow: {
      flexDirection: "column",
    },
    traitBadge: {
      backgroundColor: theme.muted,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      marginBottom: 8,
    },
    traitTitle: {
      fontSize: 10,
      color: theme.mutedForeground,
      fontFamily: "Helvetica-Bold",
      marginBottom: 6,
    },
    traitDescription: {
      fontSize: 8,
      color: theme.mutedForeground,
      fontFamily: "Helvetica",
      marginBottom: 3,

    },
  });
  
  // Helper function to get career image
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

  // Ensure we only show the first 3-4 quality matches to avoid overflow
  const displayQualityMatches = suggestion.qualityMatches?.slice(0, 3) || [];

  return (
    <View style={styles.card}>
      {/* Left side - Image */}
      <View style={styles.imageContainer}>
        <Image
          src={getCareerImage(suggestion.title)}
          style={styles.image}
          cache={true}
        />
      </View>
      
      {/* Right side - Content */}
      <View style={styles.contentContainer}>
        {/* Header with title and match percentage */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{suggestion.title}</Text>
          <View style={styles.matchBadge}>
            <Text style={styles.matchBadgeText}>{suggestion.matchPercentage}% Match</Text>
          </View>
        </View>
        
        {/* Main content */}
        <View style={styles.content}>
          <Text style={styles.description}>{suggestion.description}</Text>
          
          {displayQualityMatches.length > 0 && (
            <View style={styles.traitsContainer}>
              <Text style={styles.traitsHeader}>Your Matching Traits</Text>
              <View style={styles.traitsRow}>
                {displayQualityMatches.map((quality, index) => (
                  <View key={index} style={styles.traitBadge}>
                    <Text style={styles.traitTitle}>{quality.title}</Text>
                    <Text style={styles.traitDescription}>{quality.description}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default PDFCareerSuggestionCard;
