import React from "react";
import { Button } from "@/components/ui/button";
import { Circle, MessageCircle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "../../shared/SectionHeader";
import { formatWithUsername } from "../../../../lib/formatWithUsername";
import { CommunityConnection, ResultData } from "@/types/tests/mbti";
import Image from "next/image";
import Link from "next/link";

interface CommunitySectionProps {
  firstname: string | null;
  communityConnection: CommunityConnection;
  sectionNumber?: number;
  id?: string;
}

const CommunitySection = ({
  firstname,
  communityConnection,
  sectionNumber = 9,
  id = "community-section",
}: CommunitySectionProps) => {
  const { summary, suggestions } = communityConnection;
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background" id={id}>
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <SectionHeader
          title="Community Connection"
          subtitle="Find Your Tribe"
          description={formatWithUsername(summary, firstname)}
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
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">
                      {(index + 1).toString()}
                    </div>
                    <p className="ml-4 text-lg text-card-foreground">
                      {suggestion}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link href={"/sign-up?source=newsletter"}>
                  <Button
                    size="lg"
                    className="text-primary-foreground py-6 px-8 rounded-full text-lg font-medium"
                  >
                    Join Our Community!
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image section */}
            <div className="md:w-2/5 h-auto max-h-[450px] relative border-t md:border-t-0 md:border-l border-border flex">
              <Image
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Diverse group of people in a community setting"
                width={1470}
                height={980}
                className="object-cover w-full"
                style={{ maxHeight: "450px" }}
                priority={false}
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CommunitySection;
