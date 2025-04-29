import React from "react";
import { RelationshipCompatibility, ResultData } from "@/types/tests/mbti/results";
import {
  Heart,
  Users,
  Briefcase,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Award,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SuperpowersCard from "../../shared/SuperpowersCard";
import GrowthAreasCard from "../../shared/GrowthAreasCard";
import ActionStepsCard from "../../shared/ActionStepsCard";
import SectionHeader from "../../shared/SectionHeader";
import { formatWithUsername } from "../../../../lib/formatWithUsername";

interface RelationshipSectionProps {
  firstname: string | null;
  relationships: RelationshipCompatibility[];
  sectionNumber?: number;
  id?: string;
}

const RelationshipSection = ({
  firstname,
  relationships,
  sectionNumber = 4,
  id = "relationships",
}: RelationshipSectionProps) => {
  return (
    <>
      {relationships.map((relationship, index) => (
        <section
          key={`relationship-section-${relationship.title}-${index}`}
          className="py-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background scroll-mt-16"
          id={`${relationship.title.toLowerCase()}`}
        >
          <div className="">
            {/* Section header */}
            <SectionHeader
              title={`Your ${relationship.title}`}
              subtitle={formatWithUsername(relationship.subtitle, firstname)}
              description={formatWithUsername(
                relationship.description,
                firstname
              )}
              sectionNumber={index + sectionNumber}
            />

            <div className="flex flex-col items-center justify-center -mt-10 mb-10">
              {/* Compatible types display - works on all devices */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                <span className="text-sm font-medium text-foreground">
                  Compatible with:
                </span>
                <div className="flex flex-wrap gap-2 justify-center">
                  {relationship?.compatibleTypes.map((type) => (
                    <Badge
                      key={type}
                      className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1"
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Superpowers card */}
              <SuperpowersCard
                firstname={firstname}
                title={`Your ${relationship.title} Superpowers`}
                items={relationship.superpowers}
                icon={<Award className="h-6 w-6 " />}
              />

              {/* Growth areas card */}
              <GrowthAreasCard
                firstname={firstname}
                title="Where You Can Grow a Bit"
                items={relationship.growthAreas}
                icon={<ArrowRight className="h-6 w-6 " />}
              />
            </div>

            {/* Let's get started on this! card with image */}
            <ActionStepsCard
              firstname={firstname}
              steps={relationship.actionSteps}
              imageSrc={
                relationship.title === "Relationships"
                  ? "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393725/relationship_xvrs0h.jpg"
                  : relationship.title === "Friendships"
                    ? "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
              }
              imageAlt={`${relationship.title}`}
              className="mb-16"
              objectFit="object-cover"
            />
          </div>
        </section>
      ))}
    </>
  );
};

export default RelationshipSection;
