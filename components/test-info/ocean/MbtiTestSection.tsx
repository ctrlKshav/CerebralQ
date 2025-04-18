"use client";
import { useRef } from "react";
import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionContainer from "./shared/SectionContainer";
import SectionHeader from "./shared/SectionHeader";
import AnimatedCard from "./shared/AnimatedCard";

const MbtiTestSection = () => {
  // Refs for section
  const sectionRef = useRef<HTMLDivElement>(null);

  // MBTI image from Unsplash (professional, related to personality types)
  const mbtiImageUrl =
    "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80";

  return (
    <SectionContainer
      ref={sectionRef}
      id="mbti-test"
      withDecorations={true}
    >
      {/* Section header */}
      <SectionHeader
        badge="Explore"
        title="Continue Your Journey of Self-Discovery"
        description="Now that you understand your Big Five traits, deepen your self-awareness with another powerful perspective on your personality."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left side - Content */}
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Try the MBTI Personality Test
          </h3>

          <p className="text-base text-muted-foreground mb-5 leading-relaxed">
            The Myers-Briggs Type Indicator® (MBTI®) provides a
            complementary perspective to your Big Five results, categorizing
            your personality into one of 16 distinct types. Where the Big Five
            measures traits on a spectrum, MBTI identifies your preferences
            across four dimensions.
          </p>

          <div className="bg-muted/50 p-5 rounded-lg border border-muted/80 mb-6 transition-soft">
            <h3 className="text-base font-medium text-foreground mb-3">
              How MBTI Complements Your Big Five Results:
            </h3>
            <ul className="space-y-2.5">
              {[
                "Provides a different framework for understanding your interpersonal style",
                "Offers insights into your decision-making and information processing",
                "Helps identify potential career paths that match your personality type",
                "Creates a shared vocabulary to discuss personality differences",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start text-muted-foreground text-sm"
                >
                  <div className="mr-3 mt-1 h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            <Link href="/tests/mbti">
              <Button size="lg" className="group">
                Explore MBTI
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right side - Image */}
        <AnimatedCard className="order-1 md:order-2" delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-muted/20 aspect-[4/3]">
            <img
              src={mbtiImageUrl}
              alt="MBTI Personality Types"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent opacity-50"></div>

            {/* Floating badges */}
            <div className="absolute top-4 right-4 p-2 px-3 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-full shadow-md font-medium text-sm text-primary dark:text-primary-foreground">
              16 Personality Types
            </div>
          </div>
        </AnimatedCard>
      </div>
    </SectionContainer>
  );
};

export default MbtiTestSection;
