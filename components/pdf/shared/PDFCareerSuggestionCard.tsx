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
      flex: 1,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.border,
      overflow: "hidden",
    },
    imageContainer: {
      width: "100%",
      height: 150, // Reduced height for image
    },
    image: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
    contentContainer: {
      padding: 5,
    },
    roleContainer: {
      marginBottom: 6,
    },
    title: {
      fontSize: 18, // Reduced font size
      fontFamily: "PTSans-Bold",
      color: theme.primary,
      textAlign: "center",
    },
    description: {
      fontSize: 9, // Small font for description
      lineHeight: 1.4,
      color: theme.mutedForeground,
      textAlign: "left",
      paddingHorizontal: 5,
      marginBottom: 5,
    },
    traitsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 4,
      marginBottom: 8,
    },
    traitBadge: {
      backgroundColor: theme.muted,
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 4,
      fontSize: 8, // Smaller font size
      color: theme.mutedForeground,
      textAlign: "center",
    },
  });

  // Helper function to get career image
  const getCareerImage = (title: string) => {
    const images: Record<string, string> = {
      "Business Management":
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      Entrepreneur:
        "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=800&q=80",
      Entrepreneurship:
        "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=800&q=80",
      Law: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      Engineering:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      "Role Here":
        "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?auto=format&fit=crop&w=800&q=80",
    };

    return (
      images[title] ||
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80"
    );
  };

  // We will only display up to 3 traits per card
  const displayTraits = suggestion?.qualityMatches?.slice(0, 3) || [];

  // Create a shorter description if needed
  const shortDescription = suggestion?.description
    ? suggestion.description.length > 150
      ? suggestion.description.substring(0, 147) + "..."
      : suggestion.description
    : "Career path that naturally complements your personality traits and abilities.";

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          src={getCareerImage(suggestion.title)}
          style={styles.image}
          cache={true}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.roleContainer}>
          <Text style={styles.title}>{suggestion.title}</Text>
        </View>
        <View style={styles.traitsContainer}>
          {displayTraits.map((trait, index) => (
            <Text key={index} style={styles.traitBadge}>
              {trait.title}
            </Text>
          ))}
        </View>
        <Text style={styles.description}>{shortDescription}</Text>
      </View>
    </View>
  );
};

export default PDFCareerSuggestionCard;
