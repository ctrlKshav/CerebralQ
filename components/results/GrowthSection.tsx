import React from "react";
import { ResultData } from "@/types/tests/mbti";
import { CheckCircle, Award, MessageSquare, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SectionNumber from "@/components/ui/section-number";
import SuperpowersCard from "./shared/SuperpowersCard";
import GrowthAreasCard from "./shared/GrowthAreasCard";
import ActionStepsCard from "./shared/ActionStepsCard";

interface GrowthSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const GrowthSection = ({ data, sectionNumber = 5 }: GrowthSectionProps) => {
  const { growth, username, personalityType } = data;

  const growthSuperpowers = [
    {
      title: "Being Ambitious:",
      description: `You set big goals and go for them, ${username}—like always pushing yourself to the next level.`
    },
    {
      title: "Staying Focused:",
      description: "You don't let obstacles stop you, which makes your growth journey so powerful."
    }
  ];

  const growthAreas = [
    {
      title: "Being Patient:",
      description: "You might get frustrated with delays—like stressing if a goal takes longer than expected."
    },
    {
      title: "Connecting Emotionally:",
      description: "You might focus on results over feelings—like not noticing when you need a break."
    }
  ];

  const growthActionSteps = [
    {
      number: 1,
      description: "If you're feeling impatient, take a moment to reflect—like \"What's one small step I can take today?\""
    },
    {
      number: 2,
      description: "Try a new emotional check-in this week, like journaling about how you're feeling, to connect with yourself."
    },
    {
      number: 3,
      description: `Write down three things you love about being an ${personalityType} when you're feeling hard on yourself, ${username}.`
    }
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
                Your Growth Journey
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Your Path to Personal Evolution, {username}
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg md:text-xl text-card-foreground">
                Growth for you is all about becoming an even better leader while
                learning to connect more deeply, {username}. You're amazing at
                setting goals and making them happen, but you might need to work
                on being more patient and in tune with your emotions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Growth Superpowers and Areas to Grow */}
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 mb-16">
          {/* Growth Superpowers */}
          <SuperpowersCard 
            title="Your Growth Superpowers"
            items={growthSuperpowers}
            icon={<Award className="h-6 w-6 " strokeWidth={2.2} />}
          />

          {/* Where You Can Grow a Bit */}
          <GrowthAreasCard
            title="Where You Can Grow a Bit"
            items={growthAreas}
            icon={<Lightbulb className="h-6 w-6 " strokeWidth={2.2} />}
          />
        </div>

        {/* Let's Make It Happen section */}
        <ActionStepsCard
          steps={growthActionSteps}
          imageSrc="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          imageAlt="Personal growth journey"
          className="mb-16 mx-auto"
        />
      </div>
    </section>
  );
};

export default GrowthSection;
