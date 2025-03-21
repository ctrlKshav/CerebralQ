"use client";

import React from "react";
import { ResultData } from "@/types/tests/mbti";
import { Heart, Star, TrendingUp, Target, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionNumber from "@/components/ui/section-number";
import { CheckCircle } from "lucide-react";

interface ValuesMotivatorSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const ValuesMotivatorSection = ({ data, sectionNumber = 7 }: ValuesMotivatorSectionProps) => {
  const { username = "there", personalityType, actionItems } = data;

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background">
      
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <SectionNumber number={sectionNumber} />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Values & Motivators
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              What Drives You, {username}
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg md:text-xl text-card-foreground">
                Your values and what motivates you are the true fuel behind your success, {username}. Understanding these core drivers helps you make choices that align with your authentic self and create a life that truly fulfills you.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values and Motivators - Two column layout */}
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 mb-16">
          {/* Core Values */}
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-primary p-3 mr-4 shadow flex items-center justify-center">
                  <Heart
                    className="h-6 w-6 text-primary-foreground"
                    strokeWidth={2.2}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  Your Core Values
                </h3>
              </div>

              <ul className="space-y-5 text-base ml-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lg mb-1 text-card-foreground">Achievement:</p>
                    <p className="text-card-foreground">
                      You're driven to accomplish goals and prove your competence in everything you do.
                    </p>
                  </div>
                </li>
                <li className="flex items-start mt-4">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lg mb-1 text-card-foreground">Leadership:</p>
                    <p className="text-card-foreground">
                      You value taking charge and directing others toward success with clarity and vision.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Motivators */}
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-secondary p-3 mr-4 shadow flex items-center justify-center">
                  <TrendingUp
                    className="h-6 w-6 text-secondary-foreground"
                    strokeWidth={2.2}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  What Motivates You
                </h3>
              </div>

              <ul className="space-y-5 text-base ml-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full border-2 border-secondary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lg mb-1 text-card-foreground">Recognition:</p>
                    <p className="text-card-foreground">
                      Being recognized for your achievements and leadership drives you forward.
                    </p>
                  </div>
                </li>
                <li className="flex items-start mt-4">
                  <div className="h-6 w-6 rounded-full border-2 border-secondary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lg mb-1 text-card-foreground">Impact:</p>
                    <p className="text-card-foreground">
                      Working with decisive, intelligent people and seeing your efforts create real change.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Let's Make It Happen section */}
        <Card className="mb-16 mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-3/5">
              <div className="flex items-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  Let's Make It Happen
                </h3>
              </div>

              <ul className="space-y-6 ml-4">
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">
                    1
                  </div>
                  <p className="text-card-foreground text-base md:text-lg">
                    Set aside 15 minutes this week to reflect on your biggest achievement—what values did it fulfill for you?
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">
                    2
                  </div>
                  <p className="text-card-foreground text-base md:text-lg">
                    When you feel unmotivated, reconnect with your achievement drive by setting a small, achievable goal.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">
                    3
                  </div>
                  <p className="text-card-foreground text-base md:text-lg">
                    {actionItems.length > 0 ? actionItems[3].description : "Journal about one big goal you're working toward and identify small steps toward progress."}
                  </p>
                </li>
              </ul>
            </div>

            {/* Image section */}
            <div className="md:w-2/5 h-auto max-h-[350px] relative border-t md:border-t-0 md:border-l border-border">
              <img
                src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Values and motivators"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Card>

        {/* Pro Tip Section */}
        <Card className="p-8 mb-16 mx-auto max-w-4xl">
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-primary p-2 mr-3 shadow">
              <Star className="h-5 w-5 text-primary-foreground" />
            </div>
            <h4 className="text-lg font-bold text-card-foreground">Pro Tip</h4>
          </div>
          <p className="text-card-foreground">
            When you're feeling unmotivated, try reconnecting with one of these core drivers, {username}. For example, set a challenging short-term goal that can get your achievement drive fired up again.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ValuesMotivatorSection;
