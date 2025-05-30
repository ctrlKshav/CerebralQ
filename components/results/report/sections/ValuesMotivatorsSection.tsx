﻿import React from "react";
import { ResultData, ValuesAndMotivators } from "@/types/tests/mbti/results";
import { Heart, Star, TrendingUp, Target, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SuperpowersCard from "../../shared/SuperpowersCard";
import GrowthAreasCard from "../../shared/GrowthAreasCard";
import ActionStepsCard from "../../shared/ActionStepsCard";
import SectionHeader from "../../shared/SectionHeader";
import { formatWithUsername } from "../../../../lib/formatWithUsername";

interface ValuesMotivatorSectionProps {
  firstname: string | null;
  valuesAndMotivators: ValuesAndMotivators;
  sectionNumber?: number;
  id?: string;
}

const ValuesMotivatorSection = ({
  firstname,
  valuesAndMotivators,
  sectionNumber = 7,
  id = "values-motivators-section",
}: ValuesMotivatorSectionProps) => {
  const { actionItems, coreValues, motivators } = valuesAndMotivators;

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background scroll-mt-16" id={id}>
      <div className=" ">
        {/* Section header */}
        <SectionHeader
          title="Values & Motivators"
          subtitle={formatWithUsername(
            "What Drives You, {firstname}",
            firstname
          )}
          description={formatWithUsername(
            "Your values and what motivates you are the true fuel behind your success, {firstname}. Understanding these core drivers helps you make choices that align with your authentic self and create a life that truly fulfills you.",
            firstname
          )}
          sectionNumber={sectionNumber}
        />

        {/* Core Values and Motivators - Two column layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Core Values */}
          <SuperpowersCard
            firstname={firstname}
            title="Your Core Values"
            items={coreValues}
            icon={<Heart className="h-6 w-6" strokeWidth={2.2} />}
          />

          {/* Motivators */}
          <GrowthAreasCard
            firstname={firstname}
            title="What Motivates You"
            items={motivators}
            icon={<TrendingUp className="h-6 w-6" strokeWidth={2.2} />}
          />
        </div>

        {/* Let's get started on this! section */}
        <ActionStepsCard
          firstname={firstname}
          steps={actionItems}
          imageSrc="https://res.cloudinary.com/dhix3y82h/image/upload/v1745393724/valuesMotivators_l2yvwd.jpg"
          imageAlt="Values and motivators"
          className="mb-16 mx-auto"
          objectFit="object-cover object-bottom"
        />
      </div>
    </section>
  );
};

export default ValuesMotivatorSection;
