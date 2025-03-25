import React, { useState } from "react";
import { RelationshipCompatibility, ResultData } from "@/types/tests/mbti";
import { Heart, Users, Briefcase, CheckCircle, ArrowRight, MessageSquare, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SuperpowersCard from "./shared/SuperpowersCard";
import GrowthAreasCard from "./shared/GrowthAreasCard";
import ActionStepsCard from "./shared/ActionStepsCard";
import SectionHeader from "./shared/SectionHeader";
import { formatWithUsername } from "../../lib/formatWithUsername";

interface RelationshipSectionProps {
  username: string | null;
  relationships: RelationshipCompatibility[];
  sectionNumber?: number;
}

const RelationshipSection = ({ username, relationships, sectionNumber = 4 }: RelationshipSectionProps) => {

  const [activeTab, setActiveTab] = useState("Friendship");
  
  const getIconForType = (type: string, className: string) => {
    switch (type) {
      case "Romantic": return <Heart className={`h-5 w-5 ${className}`} />;
      case "Friendship": return <Users className={`h-5 w-5 ${className}`} />;
      default: return <Users className={`h-5 w-5 ${className}`} />;
    }
  };

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background">
     
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <SectionHeader
          title="Your Relationships"
          subtitle={formatWithUsername("How you shine in relationships, {username}", username)}
          description={formatWithUsername("You're a total force in your relationships—whether romantic, friendship, or professional. You love taking charge and helping others achieve their goals, but you might get frustrated if things move too slowly or if others don't keep up with your pace.", username)}
          sectionNumber={sectionNumber}
        />
        
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full mb-16"
        >
          <div className="flex flex-col items-center justify-center mb-10">
            {/* Tab triggers */}
            <TabsList className="grid grid-cols-2 gap-4 h-full w-full p-0  max-w-lg  rounded-lg">
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
                  items={relationship.superpowers}
                  icon={<Award className="h-6 w-6 " />}
                />

                {/* Growth areas card */}
                <GrowthAreasCard
                  title="Where You Can Grow a Bit"
                  items={relationship.growthAreas}
                  icon={<ArrowRight className="h-6 w-6 " />}
                />
              </div>

              {/* Let's Make It Happen card with image */}
              <ActionStepsCard
                title="Let's Make It Happen:"
                steps={relationship.actionSteps}
                imageSrc={relationship.type === "Romantic" 
                  ? "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=2000&auto=format&fit=crop" 
                  : relationship.type === "Friendship" 
                  ? "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop"
                  : "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
                }
                imageAlt={`${relationship.type} relationships`}
                className="mb-16"
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default RelationshipSection;