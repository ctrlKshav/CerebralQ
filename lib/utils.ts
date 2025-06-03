import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MBTIRawScore } from "@/types/supabase/user-test-history";
import { TraitScore, TraitScores } from "@/types/tests/mbti/traits";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const smoothScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * Parse search params to extract auth message type and content
 * Handles format like ?error=message or ?success=message
 */
export function parseAuthMessage(searchParams: URLSearchParams) {
  // Check for error message
  const errorMessage = searchParams.get("error");
  if (errorMessage) {
    return {
      type: "error",
      message: decodeURIComponent(errorMessage),
    };
  }

  // Check for success message
  const successMessage = searchParams.get("success");
  if (successMessage) {
    return {
      type: "success",
      message: decodeURIComponent(successMessage),
    };
  }

  // Check for info message
  const infoMessage = searchParams.get("info");
  if (infoMessage) {
    return {
      type: "info",
      message: decodeURIComponent(infoMessage),
    };
  }

  return null;
}

/**
 * The standard MBTI trait order
 */
export const MBTI_TRAIT_ORDER = ["E-I", "S-N", "T-F", "J-P"] as const;

/**
 * Returns MBTI trait scores in the standard order (E-I, S-N, T-F, J-P)
 * as an object with traits in the correct order
 *
 * @param traitScores - Object containing MBTI trait scores
 * @returns Object with trait scores in standard MBTI order
 */
export function getOrderedMBTITraitsObject(
  traitScores: TraitScores | undefined
): MBTIRawScore["traitScores"] {
  const defaultTraitScore: TraitScore = {
    left: 0,
    right: 0,
    leftPercentage: 50,
    rightPercentage: 50,
    dominant: "right",
  };

  // If no trait scores provided, return default values for all traits
  if (!traitScores) {
    return {
      "E-I": defaultTraitScore,
      "S-N": defaultTraitScore,
      "T-F": defaultTraitScore,
      "J-P": defaultTraitScore,
    };
  }

  // Create a new object with traits in the standard order
  // Always include all four traits, using defaults if any are missing
  return {
    "E-I": traitScores["E-I"] || defaultTraitScore,
    "S-N": traitScores["S-N"] || defaultTraitScore,
    "T-F": traitScores["T-F"] || defaultTraitScore,
    "J-P": traitScores["J-P"] || defaultTraitScore,
  };
}
