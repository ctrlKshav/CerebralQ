import { useRef } from "react";
import { ArrowRight, ExternalLink, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MbtiTestSection = () => {
  // Refs for section
  const sectionRef = useRef<HTMLDivElement>(null);

  // MBTI image from Unsplash (professional, related to personality types)
  const mbtiImageUrl = "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80";
  
  return (
    <section ref={sectionRef} id="mbti-test" className="py-20 md:py-28 bg-background dark:bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full opacity-70 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full opacity-70 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 border-0 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5 mr-1.5 inline-block" />
              Explore More Tests
            </Badge>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative inline-block">
            Continue Your Journey of Self-Discovery
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary/20 -rotate-1 transform translate-y-2 z-0"></div>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Now that you understand your Big Five traits, deepen your self-awareness with another 
            powerful perspective on your personality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side - Content */}
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Try the MBTI Personality Test
            </h3>
            
            <p className="text-base text-muted-foreground mb-5 leading-relaxed">
              The Myers-Briggs Type Indicator® (MBTI®) provides a complementary perspective to your
              Big Five results, categorizing your personality into one of 16 distinct types. Where the 
              Big Five measures traits on a spectrum, MBTI identifies your preferences across four dimensions.
            </p>
            
            <div className="bg-muted/50 p-5 rounded-lg border border-muted/80 mb-6 transition-soft">
              <h3 className="text-base font-medium text-foreground mb-3">How MBTI Complements Your Big Five Results:</h3>
              <ul className="space-y-2.5">
                {[
                  "Provides a different framework for understanding your interpersonal style",
                  "Offers insights into your decision-making and information processing",
                  "Helps identify potential career paths that match your personality type",
                  "Creates a shared vocabulary to discuss personality differences"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-muted-foreground text-sm">
                    <div className="mr-3 mt-1 h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group"
              >
                Take the MBTI Test Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="transition-soft"
              >
                Compare MBTI & Big Five
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="order-1 md:order-2">
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
              
              <div className="absolute bottom-4 left-4 p-2 px-3 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-full shadow-md font-medium text-sm text-foreground">
                <Star className="h-3.5 w-3.5 mr-1 inline-block text-amber-500" />
                Includes MBTI Type Descriptions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MbtiTestSection;