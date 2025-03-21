import React from "react";
import { ResultData } from "@/types/tests/mbti";
import { Users, Heart, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionNumber from "@/components/ui/section-number";

interface RelationshipSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const RelationshipSection = ({ data, sectionNumber = 4 }: RelationshipSectionProps) => {
  const { relationships, username, personalityType } = data;

  // Compatibility data
  const compatibleTypes = [
    { type: "INFJ", description: "Visionaries who share your future focus, but bring warmth" },
    { type: "ENFP", description: "Enthusiastic innovators who balance your practicality" },
    { type: "INTJ", description: "Strategic thinkers who match your intellect and drive" }
  ];

  // Relationship strengths and challenges
  const strengths = [
    "You're loyal and committed once you've found the right person",
    "You bring structure, reliability and clear communication",
    "You're excellent at solving practical problems in relationships"
  ];

  const challenges = [
    "You may prioritize goals over emotional connection at times",
    "You might be impatient with indecisiveness or uncertainty",
    "Opening up about vulnerable feelings can be challenging for you"
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
                Relationship Insights
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              How You Connect With Others, {username}
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg md:text-xl text-card-foreground">
                In relationships, you bring reliability and directness to the table, {username}. You value clear communication and meaningful connections. Understanding your relationship patterns helps you form stronger bonds with the people who matter most.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Relationship Strengths and Challenges */}
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 mb-16">
          {/* Strengths */}
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
                  Your Relationship Strengths
                </h3>
              </div>

              <ul className="space-y-5 text-base ml-4">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <p className="text-card-foreground text-base md:text-lg">
                      {strength}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-secondary p-3 mr-4 shadow flex items-center justify-center">
                  <AlertCircle
                    className="h-6 w-6 text-secondary-foreground"
                    strokeWidth={2.2}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  Where You May Face Challenges
                </h3>
              </div>

              <ul className="space-y-5 text-base ml-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full border-2 border-secondary mr-3 flex-shrink-0 mt-1" />
                    <p className="text-card-foreground text-base md:text-lg">
                      {challenge}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Compatibility Section */}
        <Card className="mb-16 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-3/5">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-primary p-3 mr-4 shadow flex items-center justify-center">
                  <Users
                    className="h-6 w-6 text-primary-foreground"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  Personality Compatibility
                </h3>
              </div>

              <p className="text-card-foreground mb-6">
                While you can form relationships with any personality type, {username}, certain types may naturally complement your {personalityType} traits better than others. These matches often provide both harmony and personal growth.
              </p>
              
              <div className="space-y-6">
                {compatibleTypes.map((type, index) => (
                  <div key={index} className="flex items-start rounded-lg border border-border p-4">
                    <Badge className="mr-4 bg-primary h-fit py-1 px-2 text-primary-foreground font-semibold">{type.type}</Badge>
                    <p className="text-card-foreground">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image */}
            <div className="md:w-2/5 h-auto sm:min-h-[400px] relative border-t md:border-t-0 md:border-l border-border">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" 
                alt="People in a positive relationship"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Card>
        
        {/* Let's Make It Happen section */}
        <Card className="p-0 mb-16 mx-auto overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                Let's Make It Happen
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card/50 border border-border rounded-lg p-5">
                <h4 className="font-bold text-lg text-card-foreground mb-3 flex items-center">
                  <Heart className="h-5 w-5 text-primary mr-2" /> With Friends
                </h4>
                <p className="text-card-foreground mb-4">
                  Try asking a friend about their feelings instead of just their plans. Say something like, "How have you been feeling about your new job?" instead of just "How's the new job going?"
                </p>
              </div>
              
              <div className="bg-card/50 border border-border rounded-lg p-5">
                <h4 className="font-bold text-lg text-card-foreground mb-3 flex items-center">
                  <Heart className="h-5 w-5 text-primary mr-2" /> With Partners
                </h4>
                <p className="text-card-foreground mb-4">
                  Set aside time this week for a conversation with no problem-solving allowed—just connecting. Maybe ask, "What's been on your mind lately that we haven't talked about?"
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RelationshipSection;