import { useRef } from "react";
import { 
  ClipboardList, 
  Clock, 
  BarChart2,
  Lightbulb,
  Target,
  BarChart
} from "lucide-react";

const TestVariantsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="py-20 md:py-28 bg-background dark:bg-background"
      id="test-variants"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Test Options
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 relative inline-block">
              Choose Your{" "}
              <span className="relative z-10 text-primary">Ideal</span> Test
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary/20 -rotate-1 transform translate-y-2 z-0"></div>
            </h2>

            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We offer three scientifically validated OCEAN personality assessments, 
              each with different depths of analysis and time commitments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* BFI-44 Test Card */}
          <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-muted transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <div className="p-6 border-b border-muted">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ClipboardList className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-card-foreground text-center mb-2">BFI-44</h3>
              <p className="text-muted-foreground text-sm text-center">Quick & Efficient Assessment</p>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-card-foreground font-medium">Time Required</p>
                  <p className="text-muted-foreground text-sm">5-10 minutes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ClipboardList className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-card-foreground font-medium">Question Count</p>
                  <p className="text-muted-foreground text-sm">44 questions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Target className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-card-foreground font-medium">Accuracy</p>
                  <p className="text-muted-foreground text-sm">Good reliability and validity</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Lightbulb className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-card-foreground font-medium">Best For</p>
                  <p className="text-muted-foreground text-sm">Quick insights, casual assessment, limited time</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* IPIP-120 Test Card */}
          <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-muted transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <div className="p-6 border-b border-muted">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <BarChart className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-card-foreground text-center mb-2">IPIP-120</h3>
              <p className="text-muted-foreground text-sm text-center">Balanced Depth & Time</p>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-card-foreground font-medium">Time Required</p>
                  <p className="text-muted-foreground text-sm">15-20 minutes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ClipboardList className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-card-foreground font-medium">Question Count</p>
                  <p className="text-muted-foreground text-sm">120 questions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Target className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-card-foreground font-medium">Accuracy</p>
                  <p className="text-muted-foreground text-sm">High reliability and validity</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Lightbulb className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-card-foreground font-medium">Best For</p>
                  <p className="text-muted-foreground text-sm">Deeper insights, expanded facets, moderate time investment</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* IPIP-300 Test Card */}
          <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-muted transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <div className="p-6 border-b border-muted">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <BarChart2 className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-card-foreground text-center mb-2">IPIP-300</h3>
              <p className="text-muted-foreground text-sm text-center">Comprehensive Analysis</p>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-card-foreground font-medium">Time Required</p>
                  <p className="text-muted-foreground text-sm">30-40 minutes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ClipboardList className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-card-foreground font-medium">Question Count</p>
                  <p className="text-muted-foreground text-sm">300 questions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Target className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-card-foreground font-medium">Accuracy</p>
                  <p className="text-muted-foreground text-sm">Highest reliability and detailed facet analysis</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Lightbulb className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-card-foreground font-medium">Best For</p>
                  <p className="text-muted-foreground text-sm">Professional insights, academic research, detailed personality analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default TestVariantsSection; 