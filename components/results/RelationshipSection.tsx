import React, { useState } from "react";
import { ResultData } from "@/types/tests/mbti";
import { Heart, Users, Briefcase, CheckCircle, ArrowRight, MessageSquare, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionNumber from "@/components/ui/section-number";
import SuperpowersCard from "./shared/SuperpowersCard";
import GrowthAreasCard from "./shared/GrowthAreasCard";

interface RelationshipSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const RelationshipSection = ({ data, sectionNumber = 4 }: RelationshipSectionProps) => {
  const { relationships, username } = data;
  const [activeTab, setActiveTab] = useState("Friendship");
  
  const getIconForType = (type: string, className: string) => {
    switch (type) {
      case "Romantic": return <Heart className={`h-5 w-5 ${className}`} />;
      case "Friendship": return <Users className={`h-5 w-5 ${className}`} />;
      default: return <Users className={`h-5 w-5 ${className}`} />;
    }
  };

  // Define the relationship superpowers and growth areas for each type
  const getRelationshipSuperpowers = (type: string) => {
    if (type === "Romantic") {
      return [
        {
          title: "Being Motivational:",
          description: `You lift people up, ${username}—like cheering on a partner to go after a big opportunity.`
        },
        {
          title: "Taking Charge:",
          description: "You make things happen, like planning a memorable anniversary dinner for your partner."
        }
      ];
    } else if (type === "Friendship") {
      return [
        {
          title: "Being Inspiring:",
          description: `Your friends look up to you, ${username}—like when you motivate them to join a charity run.`
        },
        {
          title: "Planning Big Moments:",
          description: "You create awesome experiences, like organizing a group trip everyone talks about for years."
        }
      ];
    } else {
      return [
        {
          title: "Natural Leadership:",
          description: `You excel at taking charge, ${username}—like confidently leading a team through a challenging project.`
        },
        {
          title: "Strategic Thinking:",
          description: "You're excellent at seeing the big picture and creating plans to reach ambitious goals."
        }
      ];
    }
  };

  const getRelationshipGrowthAreas = (type: string) => {
    if (type === "Romantic") {
      return [
        {
          title: "Being Vulnerable:",
          description: "You might focus on goals and miss the emotions—like not sharing when you're feeling stressed."
        },
        {
          title: "Slowing Down:",
          description: "You might push too hard—like encouraging a loved one to act before they're ready."
        }
      ];
    } else if (type === "Friendship") {
      return [
        {
          title: "Listening More:",
          description: "You might focus on your ideas—like not hearing a friend's quieter suggestion during a group plan."
        },
        {
          title: "Being Flexible:",
          description: "You might stick to your vision—like pushing for a plan when your friends want to do something else."
        }
      ];
    } else {
      return [
        {
          title: "Delegating Effectively:",
          description: "You might take on too much—like handling tasks yourself instead of trusting team members with responsibilities."
        },
        {
          title: "Patience with Process:",
          description: "You might rush toward results—like skipping important steps when you're excited about a project."
        }
      ];
    }
  };
  
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background">
     
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <SectionNumber number={sectionNumber} />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Your Relationships
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              How you shine in relationships, {username}
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg md:text-xl text-card-foreground">
                You're a total force in your relationships—whether romantic, friendship, or professional. 
                You love taking charge and helping others achieve their goals, but you might get 
                frustrated if things move too slowly or if others don't keep up with your pace.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full mb-16"
        >
          <div className="flex flex-col items-center justify-center mb-10">
            {/* Tab triggers */}
            <TabsList className="grid grid-cols-2 w-full h-full max-w-lg bg-muted rounded-lg">
              {relationships.map((rel) => (
                <TabsTrigger 
                  key={rel.type} 
                  value={rel.type}
                  className="flex items-center justify-center gap-2 py-3 px-6 text-base font-medium rounded-md transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-transparent data-[state=inactive]:text-foreground hover:text-primary/90"
                >
                  {getIconForType(rel.type, "")}
                  <span>{rel.type}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {/* Compatible types display - works on all devices */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <span className="text-sm font-medium text-foreground">Compatible with:</span>
              <div className="flex flex-wrap gap-2 justify-center">
                {relationships.find(r => r.type === activeTab)?.compatibleTypes.map((type) => (
                  <Badge key={type} className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1">
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {relationships.map((relationship) => (
            <TabsContent 
              key={relationship.type} 
              value={relationship.type}
              className="px-4 sm:px-8"
            >
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Superpowers card */}
                <SuperpowersCard 
                  title={`Your ${relationship.type} Superpowers`}
                  items={getRelationshipSuperpowers(relationship.type)}
                  icon={<Award className="h-6 w-6 " />}
                />

                {/* Growth areas card */}
                <GrowthAreasCard
                  title="Where You Can Grow a Bit"
                  items={getRelationshipGrowthAreas(relationship.type)}
                  icon={<ArrowRight className="h-6 w-6 " />}
                />
              </div>

              {/* Let's Make It Happen card with image */}
              <Card className="mb-16 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="p-8 md:w-3/5">
                    <h4 className="text-xl md:text-2xl font-bold mb-6 flex items-center text-card-foreground">
                      Let's Make It Happen:
                    </h4>
                    <ul className="space-y-6">
                      {relationship.type === "Romantic" ? (
                        <>
                          <li className="flex items-start">
                            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">1</div>
                            <p className="text-muted-foreground text-base md:text-lg">
                              This week, share one feeling with someone you care about—like "I've been feeling a bit overwhelmed lately."
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">2</div>
                            <p className="text-muted-foreground text-base md:text-lg">
                              If you're encouraging someone, check in first—like "I think this could be great for you, but how do you feel about it?"
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">3</div>
                            <p className="text-muted-foreground text-base md:text-lg">
                              Look for people who admire your drive, {username}—someone who loves your ambitious energy as much as you do.
                            </p>
                          </li>
                        </>
                      ) : relationship.type === "Friendship" ? (
                        <>
                          <li className="flex items-start">
                            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">1</div>
                            <p className="text-muted-foreground text-base md:text-lg">
                              Let your friends take the lead on a plan this month—like saying, "What do you guys want to do this time?"
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">2</div>
                            <p className="text-muted-foreground text-base md:text-lg">
                              Practice active listening—like asking a friend, "What do you think about this?" and really hearing them out.
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">3</div>
                            <p className="text-muted-foreground text-base md:text-lg">
                              Consider seeking deeper friendships with people who appreciate your energy and directness.
                            </p>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start">
                            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">1</div>
                            <p className="text-muted-foreground text-base md:text-lg">
                              This month, delegate one important task you'd normally handle yourself—and resist the urge to micromanage.
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">2</div>
                            <p className="text-muted-foreground text-base md:text-lg">
                              Practice active listening in your next meeting—try to speak less and listen more to team members' perspectives.
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">3</div>
                            <p className="text-muted-foreground text-base md:text-lg">
                              Look for mentors or colleagues with complementary skills to yours—especially those who excel at details you might overlook.
                            </p>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div className="md:w-2/5 h-auto sm:min-h-[400px] relative border-t md:border-t-0 md:border-l border-border">
                    <img 
                      src={relationship.type === "Romantic" 
                        ? "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=2000&auto=format&fit=crop" 
                        : relationship.type === "Friendship" 
                        ? "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop"
                        : "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
                      } 
                      alt={`${relationship.type} relationships`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default RelationshipSection;