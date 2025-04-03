import React from "react";
import { CareerPath } from "@/types/tests/mbti";
import {
  CheckCircle,
  Briefcase,
  Award,
  MessageSquare,
  Target,
} from "lucide-react";
import SuperpowersCard from "../../shared/SuperpowersCard";
import GrowthAreasCard from "../../shared/GrowthAreasCard";
import ActionStepsCard from "../../shared/ActionStepsCard";
import SectionHeader from "../../shared/SectionHeader";
import CareerSuggestionsCard from "../../shared/CareerSuggestionsCard";
import { formatWithUsername } from "../../../../lib/formatWithUsername";

interface CareerPathSectionProps {
  firstname: string | null;
  career: CareerPath;
  sectionNumber?: number;
  id?: string;
}

const CareerPathSection = ({
  firstname,
  career,
  sectionNumber = 3,
  id = "career-path",
}: CareerPathSectionProps) => {
  const { superpowers, growthAreas, actionSteps } = career;

  return (
    <section
      id={id}
      className="py-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background scroll-mt-16"
    >
      <div className="">
        {/* Section header */}
        <SectionHeader
          title="Your Career Path"
          subtitle={formatWithUsername(
            "How You Shine at Work, {firstname}",
            firstname
          )}
          description={formatWithUsername(
            "You're a total force in jobs where you can lead and strategize—like business management, entrepreneurship, or even something high-stakes like law. You love roles that let you take charge and achieve big goals, but you might get frustrated if the work feels inefficient or if others don't keep up with your pace.",
            firstname
          )}
          sectionNumber={sectionNumber}
        />

        {/* Career Superpowers and Growth Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Career Superpowers */}
          <SuperpowersCard 
            firstname={firstname}
            title="Your Career Superpowers"
            items={superpowers}
            icon={<Award className="h-6 w-6" strokeWidth={2.2} />}
          />

          {/* Growth Areas */}
          <GrowthAreasCard
            firstname={firstname}
            title="Where You Can Grow a Bit"
            items={growthAreas}
            icon={<Briefcase className="h-6 w-6 " strokeWidth={2.2} />}
          />
        </div>

        {/* "Let's get started on this!" section */}
        <div className="">
          <ActionStepsCard
            firstname={firstname}
            steps={actionSteps}
            imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            imageAlt="Team collaboration"
            className="mb-16"
          />
        </div>

        {/* Career Suggestions Section */}
        <div className="">
          <CareerSuggestionsCard
            careerSuggestions={career.suggestions}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default CareerPathSection;
