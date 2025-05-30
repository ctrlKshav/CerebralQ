import type { MBTIResponse } from "@/schema/mbti";
import { PROGRESS_KEY } from "./constants";

/**
 * Save in-progress test data to local storage
 * Pass null to clear the stored progress
 */
export function saveProgress(data: MBTIStorageData | null): void {
  if (data === null) {
    localStorage.removeItem(PROGRESS_KEY);
  } else {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving test progress:", error);
    }
  }
}

interface MBTIStorageData extends MBTIResponse {
  currentSectionId: number;
}

/**
 * Load saved test progress from local storage
 */
export function loadProgress(): MBTIStorageData | null {
  try {
    const storedData = localStorage.getItem(PROGRESS_KEY);
    if (!storedData) return null;
    
    return JSON.parse(storedData) as MBTIStorageData;
  } catch (error) {
    console.error("Error loading test progress:", error);
    return null;
  }
}

/**
 * Check if there's any saved progress
 */
export function hasProgress(): boolean {
  return localStorage.getItem(PROGRESS_KEY) !== null;
}
