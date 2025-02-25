"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Share2, Download, ChevronRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { TraitScores } from "@/lib/calculate-mbti";
import { ComparisonChart } from "./comparison-chart";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Local type definition for a trait
interface Trait {
  letter: string;
  fullName: string;
  score: number;
  description: string;
}

// Define personality type descriptions
const personalityDescriptions: Record<string, string> = {
  INTJ: "Strategic thinkers with a plan for everything. Independent and analytical problem-solvers who drive innovation.",
  INTP: "Innovative inventors with an unquenchable thirst for knowledge. Bright and curious thinkers focused on solving complex problems.",
  ENTJ: "Bold, imaginative leaders who are always finding ways to improve systems. Natural-born leaders who see possibilities everywhere.",
  ENTP: "Quick-thinking debaters who love to push boundaries. Enthusiastic innovators constantly generating new ideas.",
  INFJ: "Quiet idealists with deep insight and conviction. Creative nurturers with strong value systems.",
  INFP: "Poetic, kind, and altruistic individuals who seek authenticity. Idealistic mediators guided by their core values.",
  ENFJ: "Charismatic inspirers dedicated to others' growth. Natural mentors who bring out the best in others.",
  ENFP: "Enthusiastic, creative free spirits who can connect with just about anyone. Warmly enthusiastic idea generators.",
  ISTJ: "Practical, fact-minded individuals who value reliability. Detail-oriented organizers who maintain order.",
  ISFJ: "Warm protectors with excellent analytical abilities. Devoted caretakers who enjoy serving others.",
  ESTJ: "Efficient organizers who bring order to environments. Practical managers focused on getting things done.",
  ESFJ: "Caring, social individuals concerned with maintaining harmony. Warm-hearted helpers who put others first.",
  ISTP: "Bold, practical experimenters who master tools. Logical problem-solvers who excel in crisis situations.",
  ISFP: "Gentle, sensitive artists who live in the moment. Quiet experimenters who express themselves through action.",
  ESTP: "Energetic thrill-seekers who solve problems practically. Smart, energetic doers who value immediate results.",
  ESFP: "Spontaneous, energetic entertainers who enjoy life to the fullest. Fun-loving performers who brighten their environments.",
};

export default function Results() {
  const searchParams = useSearchParams();
  const [personalityType, setPersonalityType] = useState("");
  const [personalityDescription, setPersonalityDescription] = useState("");
  const [testId, setTestId] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [traits, setTraits] = useState<Trait[]>([]);
  const [traitScores, setTraitScores] = useState<TraitScores | null>(null);
  const [careerSuggestions, setCareerSuggestions] = useState<any[]>([]);
  const [similarPersonalities, setSimilarPersonalities] = useState<any[]>([]);

  // Local mapping from letter to trait info
  const traitMapping: Record<string, { fullName: string; description: string }> = {
    E: { 
      fullName: "Extraversion", 
      description: "You gain energy from social interaction and tend to be talkative and expressive. You enjoy being in the spotlight and working with others."
    },
    I: { 
      fullName: "Introversion", 
      description: "You recharge through solitude and prefer deep one-on-one conversations. You think before speaking and enjoy working independently."
    },
    S: { 
      fullName: "Sensing", 
      description: "You focus on concrete facts and details, trust experience over theory, and prefer practical, proven solutions."
    },
    N: { 
      fullName: "Intuition", 
      description: "You see the big picture and patterns, enjoy exploring possibilities and innovations, and are future-oriented."
    },
    T: { 
      fullName: "Thinking", 
      description: "You make decisions based on logic and objective analysis. You value truth over tact and seek clarity and fairness."
    },
    F: { 
      fullName: "Feeling", 
      description: "You make decisions based on values and how they affect people. You seek harmony and consider the human element in all areas of life."
    },
    J: { 
      fullName: "Judging", 
      description: "You prefer structure, planning, and organization. You like to make decisions quickly and work steadily toward goals."
    },
    P: { 
      fullName: "Perceiving", 
      description: "You prefer flexibility, spontaneity, and keeping options open. You adapt easily to change and enjoy exploring possibilities."
    },
  };

  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      const data = JSON.parse(dataParam);
      const { personalityType, traitScores, testId, completionDate } = data;
      setTestId(testId);
      setCompletionDate(completionDate);
      setPersonalityType(personalityType);
      setPersonalityDescription(personalityDescriptions[personalityType] || "");
      setTraitScores(traitScores);
      
      const dimensions = ["E-I", "S-N", "T-F", "J-P"];
      const computedTraits: Trait[] = dimensions.map((dim, index) => {
        const letter = personalityType[index];
        const scoreObj = traitScores[dim];
        const score = scoreObj.dominant === "left" ? scoreObj.leftPercentage : scoreObj.rightPercentage;
        return {
          letter,
          fullName: traitMapping[letter].fullName,
          score: Math.round(score),
          description: traitMapping[letter].description,
        };
      });
      setTraits(computedTraits);

      // Career suggestions based on personality type
      // This would normally come from an API or database
      setCareerSuggestions(getCareerSuggestions(personalityType));
      setSimilarPersonalities(getSimilarPersonalities(personalityType));
    }
  }, [searchParams]);
  
  // Helper function to get career suggestions based on personality type
  const getCareerSuggestions = (type: string) => {
    // This would be replaced with real data from an API
    const careerMap: Record<string, Array<{title: string, match: number}>> = {
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
      ]
    };
    
    // Return default suggestions if type not found
    return careerMap[type] || [
      { title: "Project Manager", match: 90 },
      { title: "Business Analyst", match: 85 },
      { title: "Human Resources Manager", match: 82 },
    ];
  };
  
  // Helper function to get similar personalities
  const getSimilarPersonalities = (type: string) => {
    // This would be replaced with real data from an API
    const personalityMap: Record<string, Array<{name: string, profession: string, image: string}>> = {
      INTJ: [
        { name: "Elon Musk", profession: "Entrepreneur & Inventor", image: "/placeholder.svg?height=80&width=80" },
        { name: "Michelle Obama", profession: "Attorney & Former First Lady", image: "/placeholder.svg?height=80&width=80" },
      ],
      INTP: [
        { name: "Albert Einstein", profession: "Physicist", image: "/placeholder.svg?height=80&width=80" },
        { name: "Bill Gates", profession: "Business Magnate", image: "/placeholder.svg?height=80&width=80" },
      ],
      // Add more types as needed
      ENTJ: [
        { name: "Steve Jobs", profession: "Apple Co-founder", image: "/placeholder.svg?height=80&width=80" },
        { name: "Margaret Thatcher", profession: "Former Prime Minister", image: "/placeholder.svg?height=80&width=80" },
      ]
    };
    
    // Return default if type not found
    return personalityMap[type] || [
      { name: "Famous Person", profession: "Notable Profession", image: "/placeholder.svg?height=80&width=80" },
      { name: "Historical Figure", profession: "Important Role", image: "/placeholder.svg?height=80&width=80" },
    ];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Your Personality Type
          </Badge>
          <h1 className="text-6xl font-bold tracking-tighter">{personalityType}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {personalityDescription}
          </p>
          <div className="text-sm text-muted-foreground">
            <p>Test ID: {testId}</p>
            <p>Completed on {completionDate}</p>
          </div>
          <div className="flex justify-center gap-3 pt-2">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share Results
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>
        </motion.section>

        {/* Main Results Card */}
        <CardContent className="space-y-10">
          {/* Dimension comparison chart */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-4">Personality Dimension Comparison</h3>
            {traitScores && <ComparisonChart traitScores={traitScores} />}
            <p className="text-sm text-muted-foreground mt-4 max-w-3xl">
              The chart above shows your preference distribution across each personality dimension. 
              Longer bars indicate stronger preferences. The more balanced the bars are, the more adaptable 
              you are between the two styles.
            </p>
          </div>
          
          <Separator />
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Your Dominant Traits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.letter}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3 p-5 border rounded-lg bg-muted/10"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <span className=" w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        {trait.letter}
                      </span>
                      <span>{trait.fullName}</span>
                    </h3>
                    <span className="text-lg font-bold">{trait.score}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{trait.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>

        {/* Career Suggestions */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Recommended Career Paths</CardTitle>
            <CardDescription>
              Career paths that typically align well with your personality type.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {careerSuggestions.map((career, index) => (
                <motion.div
                  key={career.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="font-medium">{career.title}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{career.match}% Match</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="pt-0 border-t px-6 py-4">
            <Button variant="link" className="text-xs text-muted-foreground" size="sm">
              <ExternalLink className="w-3 h-3 mr-1" />
              Learn more about careers for {personalityType} types
            </Button>
          </CardFooter>
        </Card>

        {/* Similar Personalities */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Notable People with Similar Type</CardTitle>
            <CardDescription>
              Historical figures and leaders who share your {personalityType} personality type.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {similarPersonalities.map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/20 transition-colors"
                >
                  <img
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{person.name}</h3>
                    <p className="text-sm text-muted-foreground">{person.profession}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
