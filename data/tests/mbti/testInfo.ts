import { Brain, Timer, Users, Award, BookOpen, Target } from "lucide-react";

export const mbtiTestInfo = {
  name: "Myers-Briggs Type Indicator",
  short_code: "mbti",
  description:
    "You are about to go on a self-discovery journey. With MBTI—the world’s most beloved personality tool — let’s find out who you really are.\n Get your unique 4-letter type (like ENFP or ISTJ) and start to see why you light up in chaos, shy away from small talk, or love checking off those to-do lists.\n Ready?\n",
  features: [
    { icon: Timer, label: "12 mins", color: "bg-blue-100 text-blue-700" },
    {
      icon: Users,
      label: "2M+ people tested",
      color: "bg-purple-100 text-purple-700",
    },
  ],
  category: "personality",
  citations: [
    {
      name: "The Myers-Briggs Type Indicator: Manual (1962): A guide to the development and use of the Myers-Briggs Type Indicator. Consulting Psychologists Press.",
      link: "https://psycnet.apa.org/record/2013-29682-000",
    },
    {
      name: "Myers-Briggs Type Indicator Score Reliability Across Studies: A Meta-Analytic Reliability Generalization Study. ",
      link: "https://www.researchgate.net/publication/237444046_Myers-Briggs_Type_Indicator_Score_Reliability_Across_Studies_A_Meta-Analytic_Reliability_Generalization_Study",
    },
  ],
  difficulty_level: "intermediate",
  num_questions: 60,
  time_estimate_minutes: 12,
  validity_period_days: 365,
  min_age: 16,
  result_type: "type",
  reliability_score: 85,
  scientific_validity_score: 78,
  personality_dimensions: [
    {
      title: "How Do You Recharge? (Mind)",
      description:
        "Are you energized by people and action (Extrovert, E), or do you love your own space and deep thoughts (Introvert, I)?",
      types: ["Extrovert (E)", "Introvert (I)"],
    },
    {
      title: "How Do You See the World? (Information)",
      description:
        "Do you focus on the here-and-now details (Sensing, S), or do you dream about what could be (Intuition, N)?",
      types: ["Sensing (S)", "Intuition (N)"],
    },
    {
      title: "How Do You Decide? (Decisions)",
      description:
        "Do you lead with logic and facts (Thinking, T), or do you follow your heart and values (Feeling, F)?",
      types: ["Thinking (T)", "Feeling (F)"],
    },
    {
      title: "How Do You Roll? (Structure)",
      description:
        "Do you love plans and structure (Judging, J), or do you go with the flow (Perceiving, P)?",
      types: ["Judging (J)", "Perceiving (P)"],
    },
  ],
  complementary_tests: [
    {
      name: "Big Five Personality",
      description: "Measure five core personality dimensions",
      shortCode: "big5-neo",
      icon: Target,
    },
    {
      name: "DISC Assessment",
      description: "Understand your behavioral style",
      shortCode: "disc",
      icon: Award,
    },
    {
      name: "HEXACO",
      description: "Explore six personality dimensions",
      shortCode: "hexaco",
      icon: BookOpen,
    },
  ],
  test_benefits: [
    {
      icon: Brain,
      title: "Career Success",
      description: "Find your ideal career path and work environment",
    },
    {
      icon: Users,
      title: "Better Relationships",
      description: "Transform how you connect with others",
    },
    {
      icon: Target,
      title: "Personal Growth",
      description: "Unlock your true potential and strengths",
    },
  ],
};