import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-screen-xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-4 md:px-8 py-24">
        <div className="my-auto text-center lg:text-left">
          <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none mx-auto lg:mx-0">
            All in One Platform
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight mx-auto lg:mx-0">
            Answer a few questions, uncover something cool about yourself.
          </h1>
          <p className="mt-6 max-w-[60ch] text-base sm:text-lg mx-auto lg:mx-0">
            Take scientifically validated assessments like MBTI, Big5, HEXACO,
            and DISC at Cerebral Quotient. Get detailed PDF reports and share
            your unique profile with friends using your personalized URL.
          </p>
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="rounded-full text-base w-full sm:w-auto"
            >
              Explore Assessments <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none w-full sm:w-auto"
            >
              <CirclePlay className="!h-5 !w-5 mr-1" /> See how it works
            </Button>
          </div>
        </div>
        <div className="w-full aspect-video sm:aspect-[16/9] lg:aspect-auto lg:w-[1000px] lg:h-[calc(100vh-4rem)] bg-accent rounded-xl mt-8 lg:mt-0 mx-auto" />
      </div>
    </div>
  );
};

export default Hero;
