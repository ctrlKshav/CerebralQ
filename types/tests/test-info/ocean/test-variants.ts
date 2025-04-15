import { ReactNode } from "react";

export interface TestVariantColorScheme {
  border: string;
  hover: string;
  accent: string;
  badge: string;
  badgeText: string;
  badgeBorder: string;
  buttonHover: string;
  buttonText: string;
  iconGradient: string; // Explicit property for icon gradient
}

export interface TestVariant {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  timeEstimate: string;
  questionCount: string;
  description: string;
  additionalInfo: string;
  testPath: string;
  acronymMeaning: string; // What the acronym stands for
  testOrigin: string; // Brief note about the test's origin
  colorScheme: TestVariantColorScheme;
} 