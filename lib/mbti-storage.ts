import type { MBTIResponse } from "@/schema/mbti";

const STORAGE_KEY = 'mbti-test-progress';

export function saveProgress(data: MBTIResponse): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
}

export function loadProgress(): MBTIResponse | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Failed to load progress:', error);
    return null;
  }
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear progress:', error);
  }
}
