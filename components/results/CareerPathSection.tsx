import React from "react";
import { ResultData } from "@/types/tests/mbti";
import {
  CheckCircle,
  Briefcase,
  Award,
  MessageSquare,
  Target,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import SuperpowersCard from "./shared/SuperpowersCard";
import GrowthAreasCard from "./shared/GrowthAreasCard";
import ActionStepsCard from "./shared/ActionStepsCard";
import SectionHeader from "./shared/SectionHeader";
import { formatWithUsername } from "../../utils/formatWithUsername";

interface CareerPathSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const CareerPathSection = ({ data, sectionNumber = 3 }: CareerPathSectionProps) => {
  const { career, username } = data;

  const careerSuperpowers = [
    {
      title: "Leading with Vision:",
      description: `You inspire others with your big ideas, ${username}—like pitching a game-changing plan to your team.`
    },
    {
      title: "Getting Results:",
      description: "You're a pro at making things happen, like hitting every target on a tight deadline."
    }
  ];

  const careerGrowthAreas = [
    {
      title: "Being Patient:",
      description: "You might push too hard for results—like getting annoyed if a project isn't moving fast enough."
    },
    {
      title: "Listening to Others:",
      description: "You might focus on your vision and miss input—like not hearing a teammate's alternative idea."
    }
  ];

  const careerActionSteps = [
    {
      number: 1,
      description: "If things are moving slowly, take a deep breath and break the task into smaller steps to keep progress steady."
    },
    {
      number: 2,
      description: "Ask a coworker for their input this week—like \"What do you think we could do differently here?\"—to open up to new ideas."
    },
    {
      number: 3,
      description: "Look for jobs that let you lead and innovate, like being a CEO or a consultant—your kind of vibe!"
    }
  ];

  // Career image mapping based on title
  const getCareerImage = (title: string) => {
    const images = {
      "Business Management":
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "Entrepreneurship":
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "Law":
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "Engineering":
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    };

    const defaultImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";
    
    return (title in images) 
      ? images[title as keyof typeof images] 
      : defaultImage;
  };

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background">
    
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <SectionHeader
          title="Your Career Path"
          subtitle={formatWithUsername("How You Shine at Work, {username}", username)}
          description={formatWithUsername("You're a total force in jobs where you can lead and strategize—like business management, entrepreneurship, or even something high-stakes like law. You love roles that let you take charge and achieve big goals, but you might get frustrated if the work feels inefficient or if others don't keep up with your pace.", username)}
          sectionNumber={sectionNumber}
        />

        {/* Career Superpowers and Growth Areas */}
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 mb-16">
          {/* Career Superpowers */}
          <SuperpowersCard 
            title="Your Career Superpowers"
            items={careerSuperpowers}
            icon={<Award className="h-6 w-6" strokeWidth={2.2} />}
          />

          {/* Growth Areas */}
          <GrowthAreasCard
            title="Where You Can Grow a Bit"
            items={careerGrowthAreas}
            icon={<Briefcase className="h-6 w-6 " strokeWidth={2.2} />}
          />
        </div>

        {/* "Let's Make It Happen" section */}
        <ActionStepsCard
          steps={careerActionSteps}
          imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          imageAlt="Team collaboration"
          className="mb-16"
        />

        {/* Career Suggestions Section */}
        <div className="mb-16 px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-5">
              <div className="p-3 bg-primary rounded-full shadow">
                <Target
                  className="h-6 w-6 text-primary-foreground"
                  strokeWidth={2.2}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground ml-4">
                Career Suggestions
              </h3>
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg">
              Based on your personality traits, these careers align well with
              your natural strengths and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {career.matches.map((match, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={getCareerImage(match.title)}
                    alt={match.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg text-card-foreground">
                      {match.title}
                    </h4>
                    <Badge variant="secondary" className="py-1 px-2">
                      {match.matchPercentage}%
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {match.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPathSection;
