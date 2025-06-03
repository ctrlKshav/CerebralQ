export const testDetails = {
  title: "HEXACO Personality Assessment",
  description: "The HEXACO model measures six major dimensions of personality, providing a comprehensive framework for understanding individual differences in behavior and character.",
  traits: [
    {
      name: "Honesty-Humility",
      letter: "H",
      description: "Measures sincerity, fairness, greed avoidance, and modesty. High H individuals are honest, fair, and unassuming.",
      characteristics: ["Sincere", "Fair", "Modest", "Ethical", "Genuine"],
      color: "purple",
    },
    {
      name: "Emotionality",
      letter: "E",
      description: "Measures fearfulness, anxiety, dependence, and sentimentality. High E individuals experience more fear, worry, and emotional attachment.",
      characteristics: ["Empathetic", "Sensitive", "Emotional", "Cautious", "Sentimental"],
      color: "red",
    },
    {
      name: "eXtraversion",
      letter: "X",
      description: "Measures social self-esteem, social boldness, sociability, and liveliness. High X individuals are outgoing, sociable, and enthusiastic.",
      characteristics: ["Outgoing", "Sociable", "Lively", "Confident", "Energetic"],
      color: "yellow",
    },
    {
      name: "Agreeableness",
      letter: "A",
      description: "Measures forgiveness, gentleness, flexibility, and patience. High A individuals are forgiving, tolerant, and easy to get along with.",
      characteristics: ["Forgiving", "Patient", "Gentle", "Flexible", "Tolerant"],
      color: "green",
    },
    {
      name: "Conscientiousness",
      letter: "C",
      description: "Measures organization, diligence, perfectionism, and prudence. High C individuals are organized, disciplined, and careful.",
      characteristics: ["Organized", "Diligent", "Careful", "Disciplined", "Thorough"],
      color: "blue",
    },
    {
      name: "Openness to Experience",
      letter: "O",
      description: "Measures aesthetic appreciation, inquisitiveness, creativity, and unconventionality. High O individuals are curious, creative, and open to new ideas.",
      characteristics: ["Creative", "Curious", "Unconventional", "Imaginative", "Artistic"],
      color: "orange",
    },
  ],
  testVariants: [
    {
      id: "hexaco-60",
      title: "HEXACO-60",
      subtitle: "Standard Assessment",
      description: "A balanced version of the HEXACO assessment that provides a comprehensive analysis of your personality traits in a reasonable timeframe.",
      features: [
        "Complete six-factor personality profile",
        "Detailed analysis of each dimension",
        "Facet-level insights for each trait",
        "Comparison to population norms",
        "Personalized interpretation guide"
      ],
      duration: "10-15 Minutes",
      questions: 60,
      accuracy: "High Accuracy",
      testUrl: "/start-test/hexaco/hexaco-60"
    },
    {
      id: "hexaco-100",
      title: "HEXACO-100",
      subtitle: "Comprehensive Assessment",
      description: "An in-depth HEXACO assessment that provides detailed analysis of your personality across all six dimensions and their constituent facets.",
      features: [
        "Comprehensive six-factor personality profile",
        "In-depth analysis of 24 personality facets",
        "Detailed strength and challenge areas",
        "Interpersonal compatibility insights",
        "Career alignment recommendations",
        "Personal development strategies"
      ],
      duration: "20-25 Minutes",
      questions: 100,
      accuracy: "Very High Accuracy",
      testUrl: "/start-test/hexaco/hexaco-100"
    },
    {
      id: "hexaco-200",
      title: "HEXACO-200",
      subtitle: "Professional Assessment",
      description: "The most comprehensive HEXACO assessment available, providing the highest level of detail and nuance in personality measurement.",
      features: [
        "Professional-grade personality assessment",
        "Maximum precision and reliability",
        "Comprehensive facet analysis with nuanced insights",
        "Detailed behavioral tendencies across situations",
        "Advanced interpersonal dynamics analysis",
        "Specialized career and relationship guidance"
      ],
      duration: "35-45 Minutes",
      questions: 200,
      accuracy: "Highest Accuracy",
      testUrl: "/start-test/hexaco/hexaco-200"
    }
  ],
  citations: [
    {
      title: "The HEXACO Personality Inventory-Revised: A Measure of the Six Major Dimensions of Personality",
      authors: "Ashton, M. C., & Lee, K.",
      journal: "Journal of Research in Personality",
      year: "2009",
      doi: "10.1016/j.jrp.2008.08.002",
      description: "The seminal paper introducing the revised HEXACO Personality Inventory, detailing its psychometric properties and validity across different populations."
    },
    {
      title: "The HEXACO Model of Personality Structure and the Importance of the H Factor",
      authors: "Lee, K., & Ashton, M. C.",
      journal: "Social and Personality Psychology Compass",
      year: "2008",
      doi: "10.1111/j.1751-9004.2008.00134.x",
      description: "An exploration of how the HEXACO model differs from the Big Five by including the Honesty-Humility dimension, which captures important aspects of personality not covered by other models."
    },
    {
      title: "The H Factor of Personality: Why Some People Are Manipulative, Self-Entitled, Materialistic, and Exploitive—And Why It Matters for Everyone",
      authors: "Lee, K., & Ashton, M. C.",
      journal: "Wilfrid Laurier University Press",
      year: "2012",
      description: "A comprehensive examination of the Honesty-Humility factor and its implications for understanding ethical and unethical behavior in various contexts."
    },
    {
      title: "Empirical, Theoretical, and Practical Advantages of the HEXACO Model of Personality Structure",
      authors: "Ashton, M. C., Lee, K., & de Vries, R. E.",
      journal: "Personality and Social Psychology Review",
      year: "2014",
      doi: "10.1177/1088868314523838",
      description: "A review of research demonstrating the advantages of the HEXACO model over other personality frameworks in predicting and explaining various behaviors and outcomes."
    }
  ]
};
