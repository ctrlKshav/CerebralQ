"use client";
import React from "react";
import SectionContainer from "../shared/SectionContainer";
import SectionHeader from "../shared/SectionHeader";
import AnimatedCard from "../shared/AnimatedCard";
import { CheckCircle, XCircle } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      name: "DISC",
      description: "Behavioral styles assessment focusing on how you act and communicate",
      focus: "Observable behavior patterns",
      timeframe: "5-20 minutes",
      businessUse: "Very High",
      strengths: [
        "Simple and intuitive to understand",
        "Directly applicable to workplace scenarios",
        "Focuses on adaptable behaviors rather than fixed traits",
        "Excellent for team dynamics and communication"
      ],
      limitations: [
        "Doesn't measure cognitive abilities",
        "Less focused on internal motivations",
        "Not designed for clinical assessment"
      ]
    },
    {
      name: "OCEAN / Big Five",
      description: "Comprehensive personality trait assessment based on five core dimensions",
      focus: "Stable personality traits",
      timeframe: "10-30 minutes",
      businessUse: "High",
      strengths: [
        "Scientifically validated across cultures",
        "Measures stable traits over time",
        "More nuanced personality insights",
        "Strong predictive validity for various outcomes"
      ],
      limitations: [
        "More complex to interpret",
        "Less directly focused on workplace behaviors",
        "Requires more questions for accuracy"
      ]
    },
    {
      name: "MBTI",
      description: "Psychological preference assessment based on Jungian theory",
      focus: "Cognitive preferences and information processing",
      timeframe: "15-30 minutes",
      businessUse: "Medium",
      strengths: [
        "Widely recognized and used",
        "Helpful for understanding thinking styles",
        "Provides insights into decision-making approaches",
        "Popular for self-discovery"
      ],
      limitations: [
        "Lower scientific validity",
        "Binary type categories rather than spectrums",
        "Less predictive of workplace performance",
        "Results can be unstable over time"
      ]
    }
  ];

  return (
    <SectionContainer id="comparison" className="bg-muted/30">
      <SectionHeader
        badge="Comparison"
        title="How DISC Compares to Other Assessments"
        highlightWord="DISC"
        description="Understanding the differences between popular personality and behavioral assessments can help you choose the right tool for your needs."
      />

      <div className="overflow-x-auto">
        <div className="min-w-[768px]">
          <AnimatedCard>
            <div className="bg-card rounded-xl shadow-md border border-muted overflow-hidden">
              {/* Header Row */}
              <div className="grid grid-cols-4 border-b border-muted">
                <div className="p-4 font-medium text-muted-foreground">Assessment</div>
                <div className="p-4 font-medium text-muted-foreground">Focus</div>
                <div className="p-4 font-medium text-muted-foreground">Time</div>
                <div className="p-4 font-medium text-muted-foreground">Business Use</div>
              </div>
              
              {/* Data Rows */}
              {comparisons.map((assessment, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-4 border-b border-muted ${assessment.name === "DISC" ? "bg-primary/5" : ""}`}
                >
                  <div className="p-4">
                    <h3 className="font-bold text-card-foreground">{assessment.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{assessment.description}</p>
                  </div>
                  <div className="p-4 text-card-foreground">{assessment.focus}</div>
                  <div className="p-4 text-card-foreground">{assessment.timeframe}</div>
                  <div className="p-4 text-card-foreground">{assessment.businessUse}</div>
                </div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {comparisons.map((assessment, index) => (
          <AnimatedCard key={index} delay={0.1 * index}>
            <div className={`h-full bg-card rounded-xl shadow-md border ${assessment.name === "DISC" ? "border-primary/30" : "border-muted"} overflow-hidden`}>
              <div className={`p-4 ${assessment.name === "DISC" ? "bg-primary/10" : "bg-muted"}`}>
                <h3 className="font-bold text-lg text-card-foreground">{assessment.name}</h3>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-card-foreground mb-3">Strengths</h4>
                  <ul className="space-y-2">
                    {assessment.strengths.map((strength, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-card-foreground">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-card-foreground mb-3">Limitations</h4>
                  <ul className="space-y-2">
                    {assessment.limitations.map((limitation, i) => (
                      <li key={i} className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-card-foreground">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ComparisonSection;
