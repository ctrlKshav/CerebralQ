import React from "react";
import { ResultData } from "@/types/tests/mbti";
import { CheckCircle, Award, MessageSquare, Lightbulb } from "lucide-react";
import SuperpowersCard from "./shared/SuperpowersCard";
import GrowthAreasCard from "./shared/GrowthAreasCard";
import ActionStepsCard from "./shared/ActionStepsCard";
import SectionHeader from "./shared/SectionHeader";
import { formatWithUsername } from "../../lib/formatWithUsername";

interface GrowthSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const GrowthSection = ({ data, sectionNumber = 5 }: GrowthSectionProps) => {
  const { growth, username } = data;
  const { superpowers: growthSuperpowers, growthAreas, actionSteps: growthActionSteps } = growth;

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background">
      
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <SectionHeader
          title="Your Growth Journey"
          subtitle={formatWithUsername("Your Path to Personal Evolution, {username}", username)}
          description={formatWithUsername("Growth for you is all about becoming an even better leader while learning to connect more deeply, {username}. You're amazing at setting goals and making them happen, but you might need to work on being more patient and in tune with your emotions.", username)}
          sectionNumber={sectionNumber}
        />

        {/* Growth Superpowers and Areas to Grow */}
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 mb-16">
          {/* Growth Superpowers */}
          <SuperpowersCard 
            title="Your Growth Superpowers"
            items={growthSuperpowers}
            icon={<Award className="h-6 w-6 " strokeWidth={2.2} />}
          />

          {/* Where You Can Grow a Bit */}
          <GrowthAreasCard
            title="Where You Can Grow a Bit"
            items={growthAreas}
            icon={<Lightbulb className="h-6 w-6 " strokeWidth={2.2} />}
          />
        </div>

        {/* Let's Make It Happen section */}
        <ActionStepsCard
          steps={growthActionSteps}
          imageSrc="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          imageAlt="Personal growth journey"
          className="mb-16 mx-auto"
        />
      </div>
    </section>
  );
};

export default GrowthSection;
