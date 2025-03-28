export interface TestResult {
  id: number;
  date: Date;
  type: string;
  highlight: string;
  image: string;
  color: string;
  traits: string[];
  description: string;
}

export const mockResults: TestResult[] = [
  {
    id: 1,
    date: new Date("2024-03-20"),
    type: "INFJ",
    highlight: "Introspective visionary with strong empathetic abilities",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=1000",
    color: "from-violet-500 to-purple-500",
    traits: ["Introverted", "Intuitive", "Feeling", "Judging"],
    description: "The Counselor • Imaginative • Determined • Sensitive"
  },
  {
    id: 2,
    date: new Date("2024-03-15"),
    type: "ENFP",
    highlight: "Enthusiastic innovator with creative problem-solving skills",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000",
    color: "from-amber-500 to-orange-500",
    traits: ["Extroverted", "Intuitive", "Feeling", "Perceiving"],
    description: "The Champion • Creative • Enthusiastic • Free-Spirited"
  },
  {
    id: 3,
    date: new Date("2024-03-10"),
    type: "INTJ",
    highlight: "Strategic thinker with exceptional analytical abilities",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
    color: "from-blue-500 to-indigo-500",
    traits: ["Introverted", "Intuitive", "Thinking", "Judging"],
    description: "The Architect • Analytical • Strategic • Independent"
  },
  {
    id: 4,
    date: new Date("2024-03-05"),
    type: "ENTP",
    highlight: "Innovative explorer with quick-thinking adaptability",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000",
    color: "from-emerald-500 to-teal-500",
    traits: ["Extroverted", "Intuitive", "Thinking", "Perceiving"],
    description: "The Visionary • Innovative • Versatile • Charismatic"
  }
];
