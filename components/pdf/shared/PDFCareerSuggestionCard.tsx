import React from "react";
import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import { CareerSuggestion } from "@/types/tests/mbti/results";
import { getThemeColors } from "../PDFTheme";
import { CareerSuggestionsURL, CareerSuggestionsURLType } from "@/data/tests/mbti/careerSuggestionsUrls";

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

  function getCareerImage(careerName: string, imageData: CareerSuggestionsURLType): string {
    // Clean the career name: remove spaces, special characters and convert to lowercase
    const words = careerName
      .toLowerCase()
      .replace(/[^a-z\s]/g, '')
      .split(/\s+/);

    // Search through the resources to find a matching resource based on tags
    const matchingResource = imageData.resources.find((resource) => {
      // Check if any of the career name words match any of the resource's tags
      return words.some(word => 
        resource.tags.some(tag => 
          tag.toLowerCase().includes(word)
        )
      );
    });

    // Return the secure_url if found, otherwise return default image
    return matchingResource ? matchingResource.secure_url : "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393726/careerSuggestions_utvtsq.jpg";
  }


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
          src={getCareerImage(suggestion.title, CareerSuggestionsURL)}
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
