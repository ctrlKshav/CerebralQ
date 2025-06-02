"use client";
import React from "react";
import SectionContainer from "../shared/SectionContainer";
import SectionHeader from "../shared/SectionHeader";
import AnimatedCard from "../shared/AnimatedCard";

const ComparisonSection = () => {
  const comparisonData = [
    {
      model: "HEXACO",
      focus: "Six-factor personality model with emphasis on ethical aspects",
      strengths: [
        "Includes Honesty-Humility dimension",
        "Better predicts ethical behavior",
        "Strong cross-cultural validity",
        "More comprehensive trait coverage"
      ],
      limitations: [
        "Less widely known than Big Five",
        "Fewer career-specific applications",
        "More recent with evolving research base"
      ]
    },
    {
      model: "OCEAN (Big Five)",
      focus: "Five-factor personality model widely used in psychology",
      strengths: [
        "Extensive research validation",
        "Well-established in psychology",
        "Strong predictive validity",
        "Many practical applications"
      ],
      limitations: [
        "Lacks ethical dimension",
        "Less sensitive to integrity aspects",
        "Some cultural limitations"
      ]
    },
    {
      model: "MBTI",
      focus: "Categorizes people into 16 personality types",
      strengths: [
        "Intuitive and accessible",
        "Popular in business settings",
        "Helpful for team dynamics",
        "Easy to understand"
      ],
      limitations: [
        "Limited scientific validity",
        "Binary type categories",
        "Less predictive power",
        "Lacks ethical dimension"
      ]
    }
  ];

  return (
    <SectionContainer id="comparison" withDecorations>
      <SectionHeader
        badge="Comparison"
        title="How HEXACO Compares"
        highlightWord="HEXACO"
        description="See how the HEXACO model compares to other popular personality assessments like the Big Five (OCEAN) and MBTI."
      />

      {/* Mobile view: Cards */}
      <div className="md:hidden space-y-6 max-w-md mx-auto">
        {comparisonData.map((item, index) => (
          <AnimatedCard key={index} delay={0.1 * index}>
            <div className="bg-card rounded-xl shadow-md border border-muted overflow-hidden">
              <div className="p-5 border-b border-muted bg-muted/30">
                <h3 className="text-xl font-bold text-card-foreground">
                  {item.model}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.focus}
                </p>
              </div>
              <div className="p-5">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-card-foreground mb-2">
                    Strengths:
                  </h4>
                  <ul className="space-y-1">
                    {item.strengths.map((strength, i) => (
                      <li key={i} className="text-sm text-card-foreground flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-card-foreground mb-2">
                    Limitations:
                  </h4>
                  <ul className="space-y-1">
                    {item.limitations.map((limitation, i) => (
                      <li key={i} className="text-sm text-card-foreground flex items-start">
                        <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>

      {/* Desktop view: Table */}
      <div className="hidden md:block">
        <AnimatedCard>
          <div className="overflow-hidden rounded-xl border border-muted shadow-md">
            <table className="min-w-full divide-y divide-muted">
              <thead className="bg-muted/30">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-card-foreground">
                    Model
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-card-foreground">
                    Focus
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-card-foreground">
                    Strengths
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-card-foreground">
                    Limitations
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-muted">
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index === 0 ? "bg-primary/5" : ""}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-card-foreground">
                      {item.model}
                      {index === 0 && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          Recommended
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-card-foreground">
                      {item.focus}
                    </td>
                    <td className="px-6 py-4 text-sm text-card-foreground">
                      <ul className="space-y-1">
                        {item.strengths.map((strength, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 text-sm text-card-foreground">
                      <ul className="space-y-1">
                        {item.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedCard>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <AnimatedCard delay={0.4}>
          <p className="text-muted-foreground text-lg">
            While each model has its strengths, the HEXACO assessment provides the most comprehensive view of personality by including the crucial ethical dimension that other models miss.
          </p>
        </AnimatedCard>
      </div>
    </SectionContainer>
  );
};

export default ComparisonSection;
