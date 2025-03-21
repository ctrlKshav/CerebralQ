"use client";

import React from "react";
import type { ResultData } from "@/types/tests/mbti";
import { CheckCircle, Star, Lightbulb, BookOpen } from "lucide-react";

interface ValuesMotivatorsSectionProps {
  data?: ResultData;
  sectionNumber?: number;
}

const ValuesMotivatorSection = ({ data, sectionNumber = 8 }: ValuesMotivatorsSectionProps) => {
  // Default values when data is undefined
  const username = data?.username || "there";

  // Sample data for values and motivators
  const valuesData = {
    description:
      "You're all about achieving success and inspiring others to do the same. You value leadership, efficiency, and progress, and you're motivated by setting big goals, overcoming challenges, and making a lasting impact.",
    coreValues: [
      {
        title: "Leadership",
        description:
          "You naturally take charge and enjoy guiding others toward a shared vision.",
      },
      {
        title: "Efficiency",
        description:
          "You value systems and processes that eliminate waste and maximize results.",
      },
      {
        title: "Progress",
        description:
          "You're motivated by forward movement and continuous improvement in all areas.",
      },
    ],
    reflectionQuestions: [
      "What's one big goal you're working toward? How can you take a small step toward it this month?",
      "When do you feel most in your element—like you're unstoppable? How can you make that happen more?",
      "Who do you look up to for their leadership? What trait do you share with them?",
    ],
    actionSteps: [
      "Take 10 minutes each week to jot down your thoughts on these questions in a journal—it'll keep you connected to what matters most to you.",
      "Create a vision board that represents your core values and goals—visual reminders can be powerful motivators.",
      "Share your values with someone you trust and ask for their perspective on how these show up in your actions.",
    ],
  };

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
     
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-mbti-purple text-white text-lg font-bold shadow-md">
                {sectionNumber}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-mbti-purple">
                Your Values & Motivators
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              What Keeps You Going, {username}
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700">
              {valuesData.description}
            </p>
          </div>
        </div>

        {/* Core Values and Reflection Questions */}
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 mb-16">
          {/* Core Values */}
          <div className="glass-card rounded-xl p-8 h-full">
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-gradient-to-r from-amber-400 to-amber-600 p-3 mr-4 shadow-lg flex items-center justify-center">
                <Star
                  className="h-6 w-6 text-white drop-shadow-sm"
                  strokeWidth={2.2}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">
                Your Core Values
              </h3>
            </div>

            <ul className="space-y-5 text-base ml-4">
              {valuesData.coreValues.map((value, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lg mb-1">{value.title}:</p>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Reflection Questions */}
          <div className="glass-card rounded-xl p-8 h-full">
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-gradient-to-r from-purple-400 to-violet-500 p-3 mr-4 shadow-lg flex items-center justify-center">
                <Lightbulb
                  className="h-6 w-6 text-white drop-shadow-sm"
                  strokeWidth={2.2}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">
                Let's Think About This
              </h3>
            </div>

            <ul className="space-y-5 text-base ml-4">
              {valuesData.reflectionQuestions.map((question, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full border-2 border-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{question}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* "Let's Make It Happen" section with image */}
        <div className="glass-card rounded-xl p-0 mb-16 mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-3/5">
              <div className="flex items-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold">
                  Let's Make It Happen
                </h3>
              </div>

              <ul className="space-y-6 ml-4">
                {valuesData.actionSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-mbti-purple text-white text-base grid place-items-center mr-4 mt-1 flex-shrink-0">

                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-base md:text-lg">{step}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image section */}
            <div className="md:w-2/5 h-auto sm:min-h-[400px] relative">
              <img
                src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Person journaling"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesMotivatorSection;
