import { Brain, Timer, Users, Award, BookOpen, Target, BarChart, Layers, Heart, Star, Zap } from "lucide-react";

export const oceanTestInfo = {
  name: "Ocean Big Five Personality Test",
  short_code: "ocean",
  description:
    "Discover your unique personality profile with the scientifically-backed Ocean (Big Five) assessment. Uncover insights about your Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.\n This comprehensive test measures the fundamental dimensions of your personality that shape how you interact with the world around you.\n Ready to gain valuable insights about yourself?\n",
  features: [
    { icon: Timer, label: "15 mins", color: "bg-teal-100 text-teal-700" },
    {
      icon: Users,
      label: "1.5M+ people tested",
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      icon: Star,
      label: "99% accuracy",
      color: "bg-amber-100 text-amber-700",
    },
  ],
  category: "personality",
  citations: [
    {
      name: "McCrae, R. R., & Costa, P. T. (1987). Validation of the five-factor model of personality across instruments and observers. Journal of Personality and Social Psychology, 52(1), 81-90.",
      link: "https://doi.org/10.1037/0022-3514.52.1.81",
    },
    {
      name: "Goldberg, L. R. (1993). The structure of phenotypic personality traits. American Psychologist, 48(1), 26-34.",
      link: "https://doi.org/10.1037/0003-066X.48.1.26",
    },
    {
      name: "John, O. P., & Srivastava, S. (1999). The Big Five trait taxonomy: History, measurement, and theoretical perspectives. Handbook of personality: Theory and research, 2(1999), 102-138.",
      link: "https://pages.uoregon.edu/sanjay/pubs/bigfive.pdf",
    },
  ],
  difficulty_level: "intermediate",
  num_questions: 75,
  time_estimate_minutes: 15,
  validity_period_days: 365,
  min_age: 16,
  result_type: "spectrum",
  reliability_score: 92,
  scientific_validity_score: 95,
  personality_dimensions: [
    {
      title: "Openness to Experience (O)",
      description:
        "Measures your appreciation for art, emotion, adventure, unusual ideas, curiosity, and variety of experience.",
      types: ["Low Openness", "High Openness"],
    },
    {
      title: "Conscientiousness (C)",
      description:
        "Reflects your tendency to be organized, disciplined, dutiful, achievement-oriented, and thoughtful in planning.",
      types: ["Low Conscientiousness", "High Conscientiousness"],
    },
    {
      title: "Extraversion (E)",
      description:
        "Assesses your sociability, assertiveness, energy, and tendency to seek stimulation in the company of others.",
      types: ["Low Extraversion", "High Extraversion"],
    },
    {
      title: "Agreeableness (A)",
      description:
        "Evaluates your compassion, cooperativeness, and concern for social harmony over self-interest.",
      types: ["Low Agreeableness", "High Agreeableness"],
    },
    {
      title: "Neuroticism (N)",
      description:
        "Measures your tendency toward emotional instability, anxiety, moodiness, irritability, and sadness.",
      types: ["Low Neuroticism", "High Neuroticism"],
    },
  ],
  complementary_tests: [
    {
      name: "Myers-Briggs Type Indicator",
      description: "Discover your 16-type personality profile",
      shortCode: "mbti",
      icon: Layers,
    },
    {
      name: "Emotional Intelligence",
      description: "Measure your emotional awareness and skills",
      shortCode: "eq",
      icon: Heart,
    },
    {
      name: "Cognitive Abilities",
      description: "Assess your cognitive strengths",
      shortCode: "cognitive",
      icon: Brain,
    },
  ],
  test_benefits: [
    {
      icon: Zap,
      title: "Self-Awareness",
      description: "Gain a deeper understanding of your natural tendencies and behaviors",
    },
    {
      icon: BarChart,
      title: "Personal Development",
      description: "Identify areas for growth and leverage your natural strengths",
    },
    {
      icon: Users,
      title: "Relationship Enhancement",
      description: "Improve communication and understanding in personal and professional relationships",
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "Find roles and environments that align with your personality traits",
    },
  ],
};