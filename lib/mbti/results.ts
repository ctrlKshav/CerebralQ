// Helper function to get career suggestions based on personality type
export const getCareerSuggestions = (type: string) => {
    // This would be replaced with real data from an API
    const careerMap: Record<string, Array<{ title: string; match: number }>> = {
      INTJ: [
        { title: "Systems Architect", match: 95 },
        { title: "Management Consultant", match: 92 },
        { title: "Scientific Researcher", match: 88 },
      ],
      INTP: [
        { title: "Software Engineer", match: 96 },
        { title: "Data Scientist", match: 94 },
        { title: "Professor", match: 89 },
      ],
      ENTJ: [
        { title: "Executive Officer", match: 97 },
        { title: "Management Consultant", match: 93 },
        { title: "Business Strategist", match: 90 },
      ],
      // Add more types as needed
      ESFP: [
        { title: "Event Planner", match: 96 },
        { title: "Sales Representative", match: 93 },
        { title: "Tour Guide", match: 91 },
      ],
    };
  
    // Return default suggestions if type not found
    return (
      careerMap[type] || [
        { title: "Project Manager", match: 90 },
        { title: "Business Analyst", match: 85 },
        { title: "Human Resources Manager", match: 82 },
      ]
    );
  };
  
  // Helper function to get similar personalities
export const getSimilarPersonalities = (type: string) => {
    // This would be replaced with real data from an API
    const personalityMap: Record<
      string,
      Array<{ name: string; profession: string; image: string }>
    > = {
      INTJ: [
        {
          name: "Elon Musk",
          profession: "Entrepreneur & Inventor",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "Michelle Obama",
          profession: "Attorney & Former First Lady",
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
      INTP: [
        {
          name: "Albert Einstein",
          profession: "Physicist",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "Bill Gates",
          profession: "Business Magnate",
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
      // Add more types as needed
      ENTJ: [
        {
          name: "Steve Jobs",
          profession: "Apple Co-founder",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "Margaret Thatcher",
          profession: "Former Prime Minister",
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
    };
  
    // Return default if type not found
    return (
      personalityMap[type] || [
        {
          name: "Famous Person",
          profession: "Notable Profession",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "Historical Figure",
          profession: "Important Role",
          image: "/placeholder.svg?height=80&width=80",
        },
      ]
    );
  };