import { DISCResponse } from "@/schema/disc";
import { PROGRESS_KEY } from "./constants";

export const saveProgress = (data: DISCResponse) => {
    try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
    } catch (error) {
        console.error("Error saving progress:", error);
    }
};

export const loadProgress = (): (DISCResponse | null) => {
    try {
        const savedData = localStorage.getItem(PROGRESS_KEY);
        return savedData ? JSON.parse(savedData) : null;
    } catch (error) {
        console.error("Error loading progress:", error);
        return null;
    }
}; 