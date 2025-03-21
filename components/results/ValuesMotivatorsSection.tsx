"use client";

import React from "react";
import { ResultData } from "@/types/tests/mbti";
import { Heart, Star, TrendingUp, Target, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ValuesMotivatorSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const ValuesMotivatorSection = ({ data, sectionNumber = 7 }: ValuesMotivatorSectionProps) => {
  const { username = "there", personalityType } = data;

  // Example values and motivations
  const coreValues = [
    { name: "Achievement", description: "You're driven to accomplish goals and prove your competence", icon: <TrendingUp className="h-5 w-5 text-primary" /> },
    { name: "Leadership", description: "You value taking charge and directing others toward success", icon: <Star className="h-5 w-5 text-primary" /> },
    { name: "Efficiency", description: "You value systems that work smoothly and effectively", icon: <Target className="h-5 w-5 text-primary" /> },
  ];

  const motivators = [
    "Setting and achieving ambitious goals",
    "Being recognized for your achievements and leadership",
    "Having your expertise and competence acknowledged",
    "Working with decisive, intelligent, and results-oriented people"
  ];

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background">
      
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-bold shadow">
                {sectionNumber}
              </div>
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

        {/* Core Values Section */}
        <Card className="mb-16 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-3/5">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-primary p-3 mr-4 shadow flex items-center justify-center">
                  <Heart
                    className="h-6 w-6 text-primary-foreground"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  Your Core Values
                </h3>
              </div>

              <p className="text-card-foreground mb-8">
                These values define what's most important to you and guide your decisions, {username}. They're the foundation of your authentic self.
              </p>

              <div className="space-y-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start p-4 rounded-lg bg-card/50 border border-border">
                    <div className="mr-4 mt-1">{value.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg text-card-foreground">{value.name}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image */}
            <div className="md:w-2/5 h-auto sm:min-h-[350px] relative border-t md:border-t-0 md:border-l border-border">
              <img 
                src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Person reflecting on values"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Card>

        {/* Motivators Section */}
        <Card className="mb-16 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image - Flipped to left side */}
            <div className="md:w-2/5 h-auto sm:min-h-[350px] relative border-b md:border-b-0 md:border-r border-border">
              <img 
                src="https://images.unsplash.com/photo-1533228100845-08145b01de14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" 
                alt="Motivated person achieving goals"
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="p-8 md:w-3/5">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-secondary p-3 mr-4 shadow flex items-center justify-center">
                  <TrendingUp
                    className="h-6 w-6 text-secondary-foreground"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  What Motivates You
                </h3>
              </div>

              <p className="text-card-foreground mb-8">
                These are the things that energize you and push you to action, {username}. When you align your activities with these motivators, you'll find yourself naturally engaged and fulfilled.
              </p>
              
              <ul className="space-y-4">
                {motivators.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <p className="text-card-foreground">{item}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
                <p className="text-card-foreground font-medium">
                  <span className="text-primary font-bold">Pro tip:</span> When you're feeling unmotivated, try reconnecting with one of these core drivers, {username}. For example, set a challenging short-term goal that can get your achievement drive fired up again.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ValuesMotivatorSection;
