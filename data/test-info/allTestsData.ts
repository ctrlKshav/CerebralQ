export interface TestRecommendationEntry {
  id: string;
  name: string;
  fullName: string;
  badgeText: string;
  description: string;
  imageUrl: string;
  pageUrl: string;
  ctaText: string;
}

export const allTestData: TestRecommendationEntry[] = [
  {
    id: "ocean",
    name: "OCEAN Test",
    fullName: "The OCEAN Personality Test",
    badgeText: "Big Five Model",
    description:
      "Based on the Five Factor Model, the OCEAN Test measures Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism to reveal your core personality traits.",
    imageUrl:
      "https://images.unsplash.com/photo-1508385082359-f38ae991e832?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80", // Placeholder image
    pageUrl: "/ocean",
    ctaText: "Explore OCEAN Test",
  },
  {
    id: "disc",
    name: "DISC Assessment",
    fullName: "The DISC Behavioral Assessment",
    badgeText: "Behavioral Styles",
    description:
      "The DISC Assessment identifies your behavioral tendencies across Dominance, Influence, Steadiness, and Conscientiousness, revealing how you behave in various situations.",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80", // Placeholder image
    pageUrl: "/disc",
    ctaText: "Explore DISC Assessment",
  },
  {
    id: "hexaco",
    name: "HEXACO Test",
    fullName: "The HEXACO Personality Inventory",
    badgeText: "Six Dimensions",
    description:
      "The HEXACO model expands on the Big Five by adding Honesty-Humility, providing a nuanced understanding of personality, ethical behavior, and social cooperation.",
    imageUrl:
      "https://images.unsplash.com/photo-1605206928593-999955763744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80", // Placeholder image
    pageUrl: "/hexaco",
    ctaText: "Explore HEXACO Test",
  },
  {
    id: "mbti",
    name: "MBTI Assessment",
    fullName: "Myers-Briggs Type Indicator (MBTI)",
    badgeText: "16 Personality Types",
    description:
      "Delve into the Myers-Briggs Type Indicator to uncover your 16-type personality profile. Understand your preferences in how you perceive the world and make decisions.",
    imageUrl:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80",
    pageUrl: "/mbti",
    ctaText: "Explore MBTI Assessment",
  },
];
