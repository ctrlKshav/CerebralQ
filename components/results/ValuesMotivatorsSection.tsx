"use client";

import React from "react";
import { ResultData } from "@/types/tests/mbti";
import { Heart, Star, TrendingUp, Target, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SuperpowersCard from "./shared/SuperpowersCard";
import GrowthAreasCard from "./shared/GrowthAreasCard";
import ActionStepsCard from "./shared/ActionStepsCard";
import SectionHeader from "./shared/SectionHeader";
import { formatWithUsername } from "../../utils/formatWithUsername";

interface ValuesMotivatorSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const ValuesMotivatorSection = ({ data, sectionNumber = 7 }: ValuesMotivatorSectionProps) => {
  const { username, personalityType, actionItems } = data;

  const coreValues = [
    {
      title: "Achievement:",
      description: "You're driven to accomplish goals and prove your competence in everything you do."
    },
    {
      title: "Leadership:",
      description: "You value taking charge and directing others toward success with clarity and vision."
    }
  ];

  const motivators = [
    {
      title: "Recognition:",
      description: "Being recognized for your achievements and leadership drives you forward."
    },
    {
      title: "Impact:",
      description: "Working with decisive, intelligent people and seeing your efforts create real change."
    }
  ];

  const actionSteps = [
    {
      number: 1,
      description: "Set aside 15 minutes this week to reflect on your biggest achievement—what values did it fulfill for you?"
    },
    {
      number: 2,
      description: "When you feel unmotivated, reconnect with your achievement drive by setting a small, achievable goal."
    },
    {
      number: 3,
      description: "Seek out a leadership opportunity in your community or workplace to flex your leadership"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background">
      
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <SectionHeader
          title="Values & Motivators"
          subtitle={formatWithUsername("What Drives You, {username}", username)}
          description={formatWithUsername("Your values and what motivates you are the true fuel behind your success, {username}. Understanding these core drivers helps you make choices that align with your authentic self and create a life that truly fulfills you.", username)}
          sectionNumber={sectionNumber}
        />

        {/* Core Values and Motivators - Two column layout */}
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 mb-16">
          {/* Core Values */}
          <SuperpowersCard 
            title="Your Core Values"
            items={coreValues}
            icon={<Heart className="h-6 w-6" strokeWidth={2.2} />}
          />

          {/* Motivators */}
          <GrowthAreasCard
            title="What Motivates You"
            items={motivators}
            icon={<TrendingUp className="h-6 w-6" strokeWidth={2.2} />}
          />
        </div>

        {/* Let's Make It Happen section */}
        <ActionStepsCard
          steps={actionSteps}
          imageSrc="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          imageAlt="Values and motivators"
          className="mb-16 mx-auto"
        />
      </div>
    </section>
  );
};

export default ValuesMotivatorSection;
