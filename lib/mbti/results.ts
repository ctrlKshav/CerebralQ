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
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Michelle Obama",
        profession: "Attorney & Former First Lady",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    INTP: [
      {
        name: "Albert Einstein",
        profession: "Physicist",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Bill Gates",
        profession: "Business Magnate",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    ENTJ: [
      {
        name: "Steve Jobs",
        profession: "Apple Co-founder",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Margaret Thatcher",
        profession: "Former Prime Minister",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    ESFP: [
      {
        name: "Marilyn Monroe",
        profession: "Actress",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Will Smith",
        profession: "Actor & Musician",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    ISTJ: [
      {
        name: "George Washington",
        profession: "First U.S. President",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Angela Merkel",
        profession: "Former German Chancellor",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    ISFJ: [
      {
        name: "Mother Teresa",
        profession: "Missionary",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Kate Middleton",
        profession: "Duchess of Cambridge",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    INFJ: [
      {
        name: "Martin Luther King Jr.",
        profession: "Civil Rights Leader",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Oprah Winfrey",
        profession: "Talk Show Host & Philanthropist",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    INFP: [
      {
        name: "J.K. Rowling",
        profession: "Author",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Johnny Depp",
        profession: "Actor",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    ISTP: [
      {
        name: "Clint Eastwood",
        profession: "Actor & Director",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Amelia Earhart",
        profession: "Aviator",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    ISFP: [
      {
        name: "Bob Dylan",
        profession: "Musician",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Princess Diana",
        profession: "Royal Humanitarian",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    ESTP: [
      {
        name: "Donald Trump",
        profession: "Businessman & Former President",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Madonna",
        profession: "Singer & Performer",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    ENFP: [
      {
        name: "Robin Williams",
        profession: "Comedian & Actor",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Ellen DeGeneres",
        profession: "TV Host & Comedian",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    ENTP: [
      {
        name: "Thomas Edison",
        profession: "Inventor",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Tina Fey",
        profession: "Comedian & Writer",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    ESTJ: [
      {
        name: "Henry Ford",
        profession: "Industrialist",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Martha Stewart",
        profession: "Businesswoman & TV Personality",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    ESFJ: [
      {
        name: "Taylor Swift",
        profession: "Singer-Songwriter",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Hugh Jackman",
        profession: "Actor",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
    ENFJ: [
      {
        name: "Barack Obama",
        profession: "Former U.S. President",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Maya Angelou",
        profession: "Poet & Civil Rights Activist",
        image: "/images/similar-personalities-avatar.svg",
      },
    ],
  };

  return (
    personalityMap[type] || [
      {
        name: "Famous Person",
        profession: "Notable Profession",
        image: "/images/similar-personalities-avatar.svg",
      },
      {
        name: "Historical Figure",
        profession: "Important Role",
        image: "/images/similar-personalities-avatar.svg",
      },
    ]
  );
};
