import { getPersonalityDescription } from "@/data/mbti/personalityDescription";
import { PersonalityDescription } from "@/types/tests/mbti/results";

export interface TestHistoryResult {
  id: number;
  date: Date;
  type: string;
  traits: string[];
  alias: PersonalityDescription['alias'];
  description: PersonalityDescription["description"];
  image: string;
  color: string;
}

export const mockResults: TestHistoryResult[] = [
  {
    id: 1,
    date: new Date("2024-03-20"),
    type: "INFJ",
    alias: getPersonalityDescription("INFJ").alias,
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=1000",
    color: "from-violet-500 to-purple-500",
    traits: ["Introverted", "Intuitive", "Feeling", "Judging"],
    description: getPersonalityDescription("INFJ").description,
  },
  {
    id: 2,
    date: new Date("2024-03-15"),
    type: "ENFP",
    alias: getPersonalityDescription("ENFP").alias,
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000",
    color: "from-amber-500 to-orange-500",
    traits: ["Extroverted", "Intuitive", "Feeling", "Perceiving"],
    description: getPersonalityDescription("ENFP").description,
  },
  {
    id: 3,
    date: new Date("2024-03-10"),
    type: "INTJ",
    alias: getPersonalityDescription("INTJ").alias,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
    color: "from-blue-500 to-indigo-500",
    traits: ["Introverted", "Intuitive", "Thinking", "Judging"],
    description: getPersonalityDescription("INTJ").description,},
  {
    id: 4,
    date: new Date("2024-03-05"),
    type: "ENTP",
    alias: getPersonalityDescription("ENTP").alias,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000",
    color: "from-emerald-500 to-teal-500",
    traits: ["Extroverted", "Intuitive", "Thinking", "Perceiving"],
    description: getPersonalityDescription("ENTP").description,
  }
];
