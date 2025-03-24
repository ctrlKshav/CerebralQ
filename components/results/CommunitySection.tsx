import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "./shared/SectionHeader";
import { formatWithUsername } from "../../utils/formatWithUsername";

interface CommunitySectionProps {
  username?: string;
  type?: string;
  sectionNumber?: number;
}

const CommunitySection = ({ 
  username, 
  type = "ENTJ", 
  sectionNumber = 9 
}: CommunitySectionProps) => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background">
      
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <SectionHeader
          title="Community Connection"
          subtitle="Find Your Tribe"
          description={formatWithUsername(`You don't have to figure this out alone, {username}! Come hang out with other ${type}s and career starters in our growing community. Share your best strategies for success, swap ideas, and let's build something awesome together.`, username)}
          sectionNumber={sectionNumber}
        />

        {/* Main content with image - full width layout */}
        <Card className="mb-16 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-3/5">
              <div className="flex items-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  Let's Make It Happen
                </h3>
              </div>
              
              <ul className="space-y-6 ml-4">
                <li className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">1</div>
                  <p className="text-card-foreground text-base md:text-lg mt-0.5">
                    Drop your MBTI type in our community chat—say hi to other Commanders who get you!
                  </p>
                </li>
                <li className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">2</div>
                  <p className="text-card-foreground text-base md:text-lg mt-0.5">
                    Join our weekly "Leadership Goals" chat to share your latest plans and ambitions.
                  </p>
                </li>
              </ul>
              
              <div className="mt-10">
                <Button size="lg" className="text-primary-foreground py-6 px-8 rounded-full text-lg font-medium">
                  Join Our Community!
                </Button>
              </div>
            </div>
            
            {/* Image section */}
            <div className="md:w-2/5 h-auto sm:min-h-[350px] relative border-t md:border-t-0 md:border-l border-border">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Diverse group of people in a community setting"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CommunitySection;
