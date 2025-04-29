import type { OceanResponse } from "@/schema/ocean";
import { OCEAN_PROGRESS_KEY } from "./constants";

/**
 * Save in-progress test data to local storage
 * Pass null to clear the stored progress
 */
export function saveProgress(data: OceanStorageData | null, testVariant: string): void {
  if (data === null) {
    localStorage.removeItem(OCEAN_PROGRESS_KEY + "_" + testVariant);
  } else {
    try {
      localStorage.setItem(OCEAN_PROGRESS_KEY + "_" + testVariant, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving Ocean test progress:", error);
    }
  }
}

interface OceanStorageData extends OceanResponse {
  currentSectionId: number;
}

/**
 * Load saved test progress from local storage
 */
export function loadProgress(testVariant: string): OceanStorageData | null {
  try {
    const storedData = localStorage.getItem(OCEAN_PROGRESS_KEY + "_" + testVariant);
    if (!storedData) return null;
    
    return JSON.parse(storedData) as OceanStorageData;
  } catch (error) {
    console.error("Error loading Ocean test progress:", error);
    return null;
  }
}

/**
 * Check if there's any saved progress
 */
export function hasProgress(testVariant: string): boolean {
  return localStorage.getItem(OCEAN_PROGRESS_KEY + "_" + testVariant) !== null;
} 