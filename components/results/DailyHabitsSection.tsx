import React, { useState } from "react";
import { ReactNode } from "react";
import { ResultData } from "@/types/tests/mbti";
import {
  CheckCircle,
  Clock,
  Sun,
  Moon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionNumber from "@/components/ui/section-number";
import SuperpowersCard from "./shared/SuperpowersCard";
import GrowthAreasCard from "./shared/GrowthAreasCard";

interface DailyHabitsSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const DailyHabitsSection = ({
  data,
  sectionNumber = 6,
}: DailyHabitsSectionProps) => {
  const { growth, username } = data;

  const morningHabit = {
    title: "Morning Routine",
    description: "Start your morning with a 5-minute goal check—like writing down one thing you want to achieve today."
  };

  const dayHabit = {
    title: "During the Day",
    description: "Add a small, relaxing habit—like taking a quick walk after lunch—to give your mind a break."
  };

  const eveningHabit = {
    title: "Evening Wind-down",
    description: "Wind down with a 10-minute habit, like reading a chapter of a book, to relax before bed."
  };

  const communicationTips = [
    "Add a warm touch to your conversations—like starting with \"I'm really excited to hear your thoughts on this!\"",
    "Ask a friend a lighter question, like \"What's been the best part of your week?\"—it'll spark a more relaxed chat."
  ];

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background">
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <SectionNumber number={sectionNumber} />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Daily Habits & Communication
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Your Daily Habits, {username}
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg md:text-xl text-card-foreground">
                You love a routine that keeps you on track, {username}, and it
                totally works for you—your days are focused and productive, and
                you feel best when you're in control. Adding a little downtime
                can help you recharge for your big goals.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Daily Habits Section */}
        <ContentImageCard 
          title="Let's Make It Happen"
          imageSrc="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          imageAlt="Structured morning routine"
          className="mb-16"
        >
          <ul className="space-y-6 ml-4">
            <HabitItem 
              icon={<Sun className="h-5 w-5" strokeWidth={2} />}
              title={morningHabit.title}
              description={morningHabit.description}
              gradientFrom="yellow-400"
              gradientTo="amber-500"
            />
            <HabitItem 
              icon={<Clock className="h-5 w-5" strokeWidth={2} />}
              title={dayHabit.title}
              description={dayHabit.description}
              gradientFrom="cyan-400"
              gradientTo="blue-500"
            />
            <HabitItem 
              icon={<Moon className="h-5 w-5" strokeWidth={2} />}
              title={eveningHabit.title}
              description={eveningHabit.description}
              gradientFrom="indigo-400"
              gradientTo="mbti-purple"
            />
          </ul>
        </ContentImageCard>

        {/* Communication Section */}
        <ContentImageCard 
          title="How You Chat with Others"
          imageSrc="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          imageAlt="People in conversation"
          className="mb-16"
        >
          <p className="text-card-foreground text-base md:text-lg mb-6 ml-2">
            You're confident and direct when you talk, {username}, always
            getting your point across with clarity. You love conversations
            that are goal-oriented, but sometimes you might come across as
            too intense without meaning to.
          </p>

          <div className="ml-2 space-y-5">
            <h4 className="font-medium text-lg text-card-foreground mb-3 flex items-center">
              Let's Make it Happen
            </h4>
            
            <GrowthAreasCard 
              title=""
              items={communicationTips.map((tip, index) => ({
                title: `Step ${index + 1}`,
                description: tip
              }))}
              icon={null}
              showHeader={false}
              className="shadow-none bg-transparent"
              numberCircles={true}
            />
          </div>
        </ContentImageCard>
      </div>
    </section>
  );
};

export default DailyHabitsSection;


interface ContentImageCardProps {
  title: string;
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const ContentImageCard = ({
  title,
  children,
  imageSrc,
  imageAlt,
  className = "",
}: ContentImageCardProps) => {
  return (
    <div className={`glass-card rounded-xl p-0 overflow-hidden ${className}`}>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="p-8 lg:w-3/5">
          <div className="flex items-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
              {title}
            </h3>
          </div>
          {children}
        </div>

        <div className="lg:w-2/5 sm:min-h-[350px] lg:min-h-full relative">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export { ContentImageCard };

interface HabitItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

const HabitItem = ({
  icon,
  title,
  description,
  gradientFrom,
  gradientTo,
}: HabitItemProps) => {
  return (
    <li className="flex items-start">
      <div className={`flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-${gradientFrom} to-${gradientTo} text-white mr-4 flex-shrink-0 shadow-md`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg text-card-foreground mb-2">
          {title}
        </h4>
        <p className="text-card-foreground text-base md:text-lg">
          {description}
        </p>
      </div>
    </li>
  );
};

export  { HabitItem };