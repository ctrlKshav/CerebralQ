import React, { useState } from "react";
import { ReactNode } from "react";
import Image from "next/image";
import { ResultData } from "@/types/tests/mbti";
import { CheckCircle, Clock, Sun, Moon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionNumber from "@/components/ui/section-number";
import SuperpowersCard from "./shared/SuperpowersCard";
import GrowthAreasCard from "./shared/GrowthAreasCard";
import SectionHeader from "./shared/SectionHeader";
import { formatWithUsername } from "../../lib/formatWithUsername";

interface DailyHabitsSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const DailyHabitsSection = ({
  data,
  sectionNumber = 6,
}: DailyHabitsSectionProps) => {
  const { dailyHabits, username } = data;
  const { morning , afternoon, evening } = dailyHabits.habits;
  const communicationTips = dailyHabits.communication.tips;

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background">
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <SectionHeader
          title="Daily Habits & Communication"
          subtitle={formatWithUsername(
            "Your Daily Habits, {username}",
            username
          )}
          description={formatWithUsername(
            dailyHabits.summary,
            username
          )}
          sectionNumber={sectionNumber}
        />

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
              title={morning.title}
              description={morning.description}
              gradientFrom="cyan-400"
              gradientTo="blue-500"
            />
            <HabitItem
              icon={<Clock className="h-5 w-5" strokeWidth={2} />}
              title={afternoon.title}
              description={afternoon.description}
              gradientFrom="yellow-400"
              gradientTo="amber-500"
            />
            <HabitItem
              icon={<Moon className="h-5 w-5" strokeWidth={2} />}
              title={evening.title}
              description={evening.description}
              gradientFrom="indigo-400"
              gradientTo="gray-700"
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
            {formatWithUsername(dailyHabits.communication.summary, username)}
          </p>

          <div className="ml-2 space-y-5">
            <h4 className="font-medium text-lg text-card-foreground mb-3 flex items-center">
              Let's Make it Happen
            </h4>

            <GrowthAreasCard
              title=""
              items={communicationTips.map((tip, index) => ({
                title: `Step ${index + 1}`,
                description: tip,
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
          <div
            className="relative w-full h-full"
            style={{ minHeight: "350px", maxHeight: "500px" }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority={false}
              className="object-cover"
              quality={85}
            />
          </div>
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
      <div
        className={`flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-${gradientFrom} to-${gradientTo} text-white mr-4 flex-shrink-0 shadow-md`}
      >
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg text-card-foreground mb-2">{title}</h4>
        <p className="text-card-foreground text-base md:text-lg">
          {description}
        </p>
      </div>
    </li>
  );
};

export { HabitItem };
