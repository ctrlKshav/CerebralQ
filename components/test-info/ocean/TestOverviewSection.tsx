import { useRef } from "react";
import { testDetails } from "@/data/test-info/ocean/test-overview";
import {
  Medal,
  Clock,
  Lightbulb,
  BarChart2,
  CheckCircle,
  Users,
  ShieldCheck,
  Brain,
} from "lucide-react";

const TestOverviewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="py-20 md:py-28 bg-background dark:bg-background"
      id="overview"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 relative inline-block">
              What is the{" "}
              <span className="relative z-10 text-primary">OCEAN</span> Test?
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary/20 -rotate-1 transform translate-y-2 z-0"></div>
            </h2>

            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              OCEAN stands for <strong>O</strong>penness, <strong>C</strong>
              onscientiousness, <strong>E</strong>xtraversion,{" "}
              <strong>A</strong>greeableness, and <strong>N</strong>euroticism –
              the five dimensions that form the foundation of your personality.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 mb-14 shadow-lg relative overflow-hidden max-w-4xl mx-auto border border-muted">
          <div className="absolute top-0 right-0 h-64 w-64 bg-gradient-to-bl from-primary/20 to-primary-foreground/20 rounded-full transform translate-x-1/3 -translate-y-1/2 opacity-70"></div>

          <div className="relative z-10">
            <p className="text-card-foreground text-lg md:text-xl leading-relaxed">
              Based on the scientifically-validated{" "}
              <span className="font-semibold">Five Factor Model</span>, the
              OCEAN Test measures the core dimensions of your personality
              through carefully designed questions. Used by psychologists
              worldwide, this model reveals your natural tendencies, strengths,
              and potential areas for growth.
            </p>

            {/* Blockquote with gradient border instead of star icon */}
            <div className="mt-6 relative pl-6 border-l-4 border-primary/50">
              <p className="text-card-foreground/90 font-medium">
                Understand yourself with the same framework used by leading
                researchers and psychologists for decades.
              </p>
            </div>
          </div>
        </div>

        {/* Test details card */}
        <div className="bg-card rounded-2xl shadow-lg border border-muted overflow-hidden max-w-4xl mx-auto">
          <div className="p-8 border-b border-muted">
            <h3 className="text-2xl font-bold text-card-foreground mb-3">
              Test Details
            </h3>
            <p className="text-muted-foreground text-base">
              Everything you need to know before taking the test
            </p>
          </div>

          {/* Badges row */}
          <div className="p-6 flex flex-wrap gap-4 border-b border-muted">
            {[
              {
                icon: <Users className="w-3 h-3 text-primary-foreground" />,
                text: "50 Questions",
                bgClass: "bg-primary/10",
                textClass: "text-primary",
                iconBgClass: "bg-primary",
              },
              {
                icon: <Clock className="w-3 h-3 text-primary-foreground" />,
                text: "10 Minutes",
                bgClass: "bg-blue-100 dark:bg-blue-900/20",
                textClass: "text-blue-700 dark:text-blue-400",
                iconBgClass: "bg-blue-500 dark:bg-blue-600",
              },
              {
                icon: (
                  <CheckCircle className="w-3 h-3 text-primary-foreground" />
                ),
                text: "Scientifically Validated",
                bgClass: "bg-green-100 dark:bg-green-900/20",
                textClass: "text-green-700 dark:text-green-400",
                iconBgClass: "bg-green-500 dark:bg-green-600",
              },
              {
                icon: (
                  <ShieldCheck className="w-3 h-3 text-primary-foreground" />
                ),
                text: "Free & Private",
                bgClass: "bg-purple-100 dark:bg-purple-900/20",
                textClass: "text-purple-700 dark:text-purple-400",
                iconBgClass: "bg-purple-500 dark:bg-purple-600",
              },
            ].map((badge, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-3 py-1.5 ${badge.bgClass} rounded-full`}
              >
                <span
                  className={`flex items-center justify-center w-5 h-5 ${badge.iconBgClass} rounded-full`}
                >
                  {badge.icon}
                </span>
                <span className={`text-xs font-medium ${badge.textClass}`}>
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          {/* Benefits list */}
          <div className="p-8">
            <h4 className="text-lg font-semibold text-card-foreground mb-6">
              What You'll Get:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                "Detailed scores for all five dimensions",
                "Personalized trait descriptions",
                "Insights into your core strengths",
                "Understanding of potential challenges",
                "Relationship compatibility guidance",
                "Career path suggestions",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start">
                  <div className="mr-3 mt-0.5 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base text-card-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestOverviewSection;
