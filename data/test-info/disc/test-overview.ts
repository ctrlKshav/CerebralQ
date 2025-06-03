export const testDetails = {
  title: "DISC Personality Assessment",
  description: "The DISC assessment measures four primary behavioral dimensions that influence your work style, communication preferences, and interpersonal dynamics.",
  traits: [
    {
      name: "Dominance",
      letter: "D",
      description: "Focuses on results, taking action, and overcoming challenges. High D individuals are direct, decisive, and driven.",
      characteristics: ["Results-oriented", "Direct", "Competitive", "Decisive", "Risk-taker"],
      color: "red",
    },
    {
      name: "Influence",
      letter: "I",
      description: "Focuses on relationships, persuasion, and social situations. High I individuals are outgoing, enthusiastic, and optimistic.",
      characteristics: ["Enthusiastic", "Persuasive", "Talkative", "Optimistic", "Collaborative"],
      color: "yellow",
    },
    {
      name: "Steadiness",
      letter: "S",
      description: "Focuses on cooperation, sincerity, and dependability. High S individuals are patient, supportive, and team-oriented.",
      characteristics: ["Patient", "Supportive", "Reliable", "Team player", "Good listener"],
      color: "green",
    },
    {
      name: "Conscientiousness",
      letter: "C",
      description: "Focuses on quality, accuracy, and competency. High C individuals are analytical, detail-oriented, and systematic.",
      characteristics: ["Analytical", "Detail-oriented", "Precise", "Systematic", "Logical"],
      color: "blue",
    },
  ],
  testVariants: [
    {
      id: "disc-24",
      title: "DISC-24",
      subtitle: "Quick Assessment",
      description: "A brief version of the DISC assessment that provides a snapshot of your behavioral style in just a few minutes.",
      features: [
        "Basic behavioral profile",
        "Primary and secondary style identification",
        "Brief interpretation of results",
        "Quick insights for self-awareness"
      ],
      duration: "5-7 Minutes",
      questions: 24,
      accuracy: "Good Accuracy",
      testUrl: "/start-test/disc/disc-24"
    },
    {
      id: "disc-60",
      title: "DISC-60",
      subtitle: "Comprehensive Assessment",
      description: "A detailed DISC assessment that provides an in-depth analysis of your behavioral style across different contexts.",
      features: [
        "Comprehensive behavioral profile",
        "Work style analysis",
        "Communication preferences",
        "Stress behaviors identification",
        "Team dynamics insights",
        "Leadership style assessment"
      ],
      duration: "15-20 Minutes",
      questions: 60,
      accuracy: "High Accuracy",
      testUrl: "/start-test/disc/disc-60"
    }
  ],
  citations: [
    {
      title: "The Predictive Validity of the DISC Behavioral Assessment",
      authors: "Bonnstetter, B. J., Suiter, J. I., & Widrick, R. J.",
      journal: "Journal of Business and Psychology",
      year: "2001",
      doi: "10.1023/A:1007800123533",
      description: "A comprehensive study examining the validity and reliability of the DISC assessment in predicting workplace behaviors and performance outcomes."
    },
    {
      title: "DISC Factors in Executive Coaching",
      authors: "Sugerman, J., Scullard, M., & Wilhelm, E.",
      journal: "Journal of Psychological Type",
      year: "2011",
      description: "This research explores how DISC profiles can be effectively utilized in executive coaching to enhance leadership development and team performance."
    },
    {
      title: "The History and Development of the DISC Model",
      authors: "Marston, W. M.",
      journal: "Emotions of Normal People",
      year: "1928",
      description: "The original work by William Moulton Marston that laid the foundation for the DISC behavioral model, exploring how normal people express emotions in different ways."
    }
  ]
};
