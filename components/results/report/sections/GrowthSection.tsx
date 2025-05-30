import React from "react";
import { GrowthJourney, ResultData } from "@/types/tests/mbti/results";
import { CheckCircle, Award, MessageSquare, Lightbulb } from "lucide-react";
import SuperpowersCard from "../../shared/SuperpowersCard";
import GrowthAreasCard from "../../shared/GrowthAreasCard";
import ActionStepsCard from "../../shared/ActionStepsCard";
import SectionHeader from "../../shared/SectionHeader";
import { formatWithUsername } from "../../../../lib/formatWithUsername";

interface GrowthSectionProps {
  firstname: string | null;
  growth: GrowthJourney
  sectionNumber?: number;
  id?: string;
}

const GrowthSection = ({ firstname, growth, sectionNumber = 5, id = "growth-section" }: GrowthSectionProps) => {
  const { superpowers: growthSuperpowers, growthAreas, actionSteps: growthActionSteps } = growth;

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background scroll-mt-16" id={id}>
      
      <div className="">
        {/* Section header */}
        <SectionHeader
          title="Your Growth Journey"
          subtitle={formatWithUsername("Your Path to Personal Evolution, {firstname}", firstname)}
          description={formatWithUsername("Growth for you is all about becoming an even better leader while learning to connect more deeply, {firstname}. You're amazing at setting goals and making them happen, but you might need to work on being more patient and in tune with your emotions.", firstname)}
          sectionNumber={sectionNumber}
        />

        {/* Growth Superpowers and Areas to Grow */}
        <div className="grid md:grid-cols-2 gap-8  mb-16">
          {/* Growth Superpowers */}
          <SuperpowersCard 
            firstname={firstname}
            title="Your Growth Superpowers"
            items={growthSuperpowers}
            icon={<Award className="h-6 w-6 " strokeWidth={2.2} />}
          />

          {/* Where You Can Grow a Bit */}
          <GrowthAreasCard
            firstname={firstname}
            title="Where You Can Grow a Bit"
            items={growthAreas}
            icon={<Lightbulb className="h-6 w-6 " strokeWidth={2.2} />}
          />
        </div>

        {/* Let's get started on this! section */}
        <ActionStepsCard
          firstname={firstname}
          steps={growthActionSteps}
          imageSrc="https://res.cloudinary.com/dhix3y82h/image/upload/v1745393725/growthJourney_xq7axf.jpg"
          imageAlt="Personal growth journey"
          className="mb-16 mx-auto"
        />
      </div>
    </section>
  );
};

export default GrowthSection;
