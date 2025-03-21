import React from "react";
import { ResultData } from "@/types/tests/mbti";
import { CheckCircle, Award, MessageSquare, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SectionNumber from "@/components/ui/section-number";

interface GrowthSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const GrowthSection = ({ data, sectionNumber = 5 }: GrowthSectionProps) => {
  const { growth, username, personalityType } = data;

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
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-primary p-3 mr-4 shadow flex items-center justify-center">
                  <Award
                    className="h-6 w-6 text-primary-foreground"
                    strokeWidth={2.2}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  Your Growth Superpowers
                </h3>
              </div>

              <ul className="space-y-5 text-base ml-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <p className="text-card-foreground text-base md:text-lg">
                    <span className="font-medium">Being Ambitious:</span> You set
                    big goals and go for them, {username}—like always pushing
                    yourself to the next level.
                  </p>
                </li>
                <li className="flex items-start mt-4">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <p className="text-card-foreground text-base md:text-lg">
                    <span className="font-medium">Staying Focused:</span> You
                    don't let obstacles stop you, which makes your growth journey
                    so powerful.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Where You Can Grow a Bit */}
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-secondary p-3 mr-4 shadow flex items-center justify-center">
                  <Lightbulb
                    className="h-6 w-6 text-secondary-foreground"
                    strokeWidth={2.2}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  Where You Can Grow a Bit
                </h3>
              </div>

              <ul className="space-y-5 text-base ml-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full border-2 border-secondary mr-3 flex-shrink-0 mt-1" />
                  <p className="text-card-foreground text-base md:text-lg">
                    <span className="font-medium">Being Patient:</span> You might
                    get frustrated with delays—like stressing if a goal takes
                    longer than expected.
                  </p>
                </li>
                <li className="flex items-start mt-4">
                  <div className="h-6 w-6 rounded-full border-2 border-secondary mr-3 flex-shrink-0 mt-1" />
                  <p className="text-card-foreground text-base md:text-lg">
                    <span className="font-medium">Connecting Emotionally:</span>{" "}
                    You might focus on results over feelings—like not noticing
                    when you need a break.
                  </p>
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
                    If you're feeling impatient, take a moment to reflect—like
                    "What's one small step I can take today?"
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">
                    2
                  </div>
                  <p className="text-card-foreground text-base md:text-lg">
                    Try a new emotional check-in this week, like journaling
                    about how you're feeling, to connect with yourself.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">
                    3
                  </div>
                  <p className="text-card-foreground text-base md:text-lg">
                    Write down three things you love about being an {personalityType} when
                    you're feeling hard on yourself, {username}.
                  </p>
                </li>
              </ul>
            </div>

            {/* Image section */}
            <div className="md:w-2/5 h-auto max-h-[350px] relative border-t md:border-t-0 md:border-l border-border">
              <img
                src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Personal growth journey"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GrowthSection;
