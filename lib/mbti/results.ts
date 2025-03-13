export const getCareerSuggestions = (type: string) => {
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
    ESFP: [
      { title: "Event Planner", match: 96 },
      { title: "Sales Representative", match: 93 },
      { title: "Tour Guide", match: 91 },
    ],
    ISTJ: [
      { title: "Accountant", match: 95 },
      { title: "Logistics Manager", match: 92 },
      { title: "Compliance Officer", match: 89 },
    ],
    ISFJ: [
      { title: "Nurse", match: 94 },
      { title: "Librarian", match: 91 },
      { title: "Social Worker", match: 88 },
    ],
    INFJ: [
      { title: "Counselor", match: 96 },
      { title: "Writer", match: 93 },
      { title: "Nonprofit Director", match: 90 },
    ],
    INFP: [
      { title: "Artist", match: 95 },
      { title: "Therapist", match: 92 },
      { title: "Journalist", match: 89 },
    ],
    ISTP: [
      { title: "Mechanical Engineer", match: 94 },
      { title: "Pilot", match: 91 },
      { title: "Forensic Scientist", match: 88 },
    ],
    ISFP: [
      { title: "Graphic Designer", match: 95 },
      { title: "Chef", match: 92 },
      { title: "Veterinarian", match: 89 },
    ],
    ESTP: [
      { title: "Entrepreneur", match: 96 },
      { title: "Marketing Specialist", match: 93 },
      { title: "Paramedic", match: 90 },
    ],
    ENFP: [
      { title: "Creative Director", match: 95 },
      { title: "Life Coach", match: 92 },
      { title: "Public Relations Specialist", match: 89 },
    ],
    ENTP: [
      { title: "Startup Founder", match: 96 },
      { title: "Lawyer", match: 93 },
      { title: "Inventor", match: 90 },
    ],
    ESTJ: [
      { title: "Operations Manager", match: 97 },
      { title: "Military Officer", match: 94 },
      { title: "Financial Advisor", match: 91 },
    ],
    ESFJ: [
      { title: "Teacher", match: 95 },
      { title: "Human Resources Specialist", match: 92 },
      { title: "Healthcare Administrator", match: 89 },
    ],
    ENFJ: [
      { title: "Motivational Speaker", match: 96 },
      { title: "Community Organizer", match: 93 },
      { title: "Psychologist", match: 90 },
    ],
  };

  return (
    careerMap[type] || [
      { title: "Project Manager", match: 90 },
      { title: "Business Analyst", match: 85 },
      { title: "Human Resources Manager", match: 82 },
    ]
  );
};

export const getSimilarPersonalities = (type: string) => {
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
    ESFP: [
      {
        name: "Marilyn Monroe",
        profession: "Actress",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Will Smith",
        profession: "Actor & Musician",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    ISTJ: [
      {
        name: "George Washington",
        profession: "First U.S. President",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Angela Merkel",
        profession: "Former German Chancellor",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    ISFJ: [
      {
        name: "Mother Teresa",
        profession: "Missionary",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Kate Middleton",
        profession: "Duchess of Cambridge",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    INFJ: [
      {
        name: "Martin Luther King Jr.",
        profession: "Civil Rights Leader",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Oprah Winfrey",
        profession: "Talk Show Host & Philanthropist",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    INFP: [
      {
        name: "J.K. Rowling",
        profession: "Author",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Johnny Depp",
        profession: "Actor",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    ISTP: [
      {
        name: "Clint Eastwood",
        profession: "Actor & Director",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Amelia Earhart",
        profession: "Aviator",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    ISFP: [
      {
        name: "Bob Dylan",
        profession: "Musician",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Princess Diana",
        profession: "Royal Humanitarian",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    ESTP: [
      {
        name: "Donald Trump",
        profession: "Businessman & Former President",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Madonna",
        profession: "Singer & Performer",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    ENFP: [
      {
        name: "Robin Williams",
        profession: "Comedian & Actor",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Ellen DeGeneres",
        profession: "TV Host & Comedian",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    ENTP: [
      {
        name: "Thomas Edison",
        profession: "Inventor",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Tina Fey",
        profession: "Comedian & Writer",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    ESTJ: [
      {
        name: "Henry Ford",
        profession: "Industrialist",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Martha Stewart",
        profession: "Businesswoman & TV Personality",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    ESFJ: [
      {
        name: "Taylor Swift",
        profession: "Singer-Songwriter",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Hugh Jackman",
        profession: "Actor",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    ENFJ: [
      {
        name: "Barack Obama",
        profession: "Former U.S. President",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Maya Angelou",
        profession: "Poet & Civil Rights Activist",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
  };

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
