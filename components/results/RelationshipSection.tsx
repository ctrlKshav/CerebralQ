import React, { useState } from "react";
import { ResultData } from "@/types/tests/mbti";
import { Heart, Users, Briefcase, CheckCircle, ArrowRight, MessageSquare, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionNumber from "@/components/ui/section-number";

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
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="rounded-full bg-primary p-3 mr-4 shadow-lg">
                        <Award className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                        Your {relationship.type} Superpowers
                      </h3>
                    </div>

                    <ul className="space-y-5 text-base ml-4">
                      {relationship.type === "Romantic" ? (
                        <>
                          <li className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-lg mb-1 text-card-foreground">Being Motivational:</p>
                              <p className="text-muted-foreground">You lift people up, {username}—like cheering on a partner to go after a big opportunity.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-lg mb-1 text-card-foreground">Taking Charge:</p>
                              <p className="text-muted-foreground">You make things happen, like planning a memorable anniversary dinner for your partner.</p>
                            </div>
                          </li>
                        </>
                      ) : relationship.type === "Friendship" ? (
                        <>
                          <li className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-lg mb-1 text-card-foreground">Being Inspiring:</p>
                              <p className="text-muted-foreground">Your friends look up to you, {username}—like when you motivate them to join a charity run.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-lg mb-1 text-card-foreground">Planning Big Moments:</p>
                              <p className="text-muted-foreground">You create awesome experiences, like organizing a group trip everyone talks about for years.</p>
                            </div>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-lg mb-1 text-card-foreground">Natural Leadership:</p>
                              <p className="text-muted-foreground">You excel at taking charge, {username}—like confidently leading a team through a challenging project.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-lg mb-1 text-card-foreground">Strategic Thinking:</p>
                              <p className="text-muted-foreground">You're excellent at seeing the big picture and creating plans to reach ambitious goals.</p>
                            </div>
                          </li>
                        </>
                      )}
                    </ul>
                  </CardContent>
                </Card>

                {/* Growth areas card */}
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="rounded-full bg-primary p-3 mr-4 shadow-lg">
                        <ArrowRight className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                        Where You Can Grow a Bit
                      </h3>
                    </div>

                    <ul className="space-y-5 text-base ml-4">
                      {relationship.type === "Romantic" ? (
                        <>
                          <li className="flex items-start">
                            <div className="h-6 w-6 rounded-full border-2 border-primary mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-lg mb-1 text-card-foreground">Being Vulnerable:</p>
                              <p className="text-muted-foreground">You might focus on goals and miss the emotions—like not sharing when you're feeling stressed.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="h-6 w-6 rounded-full border-2 border-primary mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-lg mb-1 text-card-foreground">Slowing Down:</p>
                              <p className="text-muted-foreground">You might push too hard—like encouraging a loved one to act before they're ready.</p>
                            </div>
                          </li>
                        </>
                      ) : relationship.type === "Friendship" ? (
                        <>
                          <li className="flex items-start">
                            <div className="h-6 w-6 rounded-full border-2 border-primary mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-lg mb-1 text-card-foreground">Listening More:</p>
                              <p className="text-muted-foreground">You might focus on your ideas—like not hearing a friend's quieter suggestion during a group plan.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="h-6 w-6 rounded-full border-2 border-primary mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-lg mb-1 text-card-foreground">Being Flexible:</p>
                              <p className="text-muted-foreground">You might stick to your vision—like pushing for a plan when your friends want to do something else.</p>
                            </div>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start">
                            <div className="h-6 w-6 rounded-full border-2 border-primary mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-lg mb-1 text-card-foreground">Delegating Effectively:</p>
                              <p className="text-muted-foreground">You might take on too much—like handling tasks yourself instead of trusting team members with responsibilities.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="h-6 w-6 rounded-full border-2 border-primary mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-lg mb-1 text-card-foreground">Patience with Process:</p>
                              <p className="text-muted-foreground">You might rush toward results—like skipping important steps when you're excited about a project.</p>
                            </div>
                          </li>
                        </>
                      )}
                    </ul>
                  </CardContent>
                </Card>
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