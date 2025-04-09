import { useRef } from "react";
import { citations } from "@/data/test-info/ocean/citations";
import { FileText, BookOpen, Award } from "lucide-react";

const AcademicCitationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const citationIcons = [
    <BookOpen className="w-6 h-6" />,
    <Award className="w-6 h-6" />,
    <FileText className="w-6 h-6" />,
  ];

  return (
    <section
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      id="science"
      ref={sectionRef}
    >
      {/* Background decorative elements without animation */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full opacity-50 translate-x-1/3"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full opacity-50 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header without animations */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Academic Research
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 relative inline-block">
            Science You Can Trust
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary/20 -rotate-1 transform translate-y-2 z-0"></div>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The OCEAN Test is built on decades of scientific research and
            academic validation. Here are some of the key studies that form its
            foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left side card without animation */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary-foreground/10 rounded-2xl transform rotate-3 opacity-70"></div>
              <div className="relative bg-card p-8 rounded-xl shadow-lg border border-muted">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-foreground flex items-center justify-center text-white mr-4">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    Evidence-Based Approach
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  The Big Five personality model has been validated across
                  cultures, age groups, and research contexts for over 40 years.
                </p>
                <p className="text-muted-foreground">
                  This scientific rigor ensures the OCEAN Test provides reliable
                  insights into your personality traits, backed by research
                  published in top psychological journals.
                </p>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-primary font-medium text-sm">
                      Used by researchers at Harvard, Stanford, Oxford, and
                      other leading institutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Citations list without animation */}
          <div className="lg:col-span-3 space-y-6">
            {citations.map((citation, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-md overflow-hidden border border-muted transform transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-primary-foreground flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0">
                      {citationIcons[index % citationIcons.length]}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground mb-1">
                        {citation.title}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {citation.authors}
                      </p>
                      <p className="text-muted-foreground">
                        {citation.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicCitationsSection;