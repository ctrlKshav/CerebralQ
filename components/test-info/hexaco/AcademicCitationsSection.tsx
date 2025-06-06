"use client";
import { useRef } from "react";
import { testDetails } from "@/data/test-info/hexaco/test-overview";
import {
  FileText,
  PersonStanding,
  Check,
  BookOpen,
  Award,
} from "lucide-react";
import SectionContainer from "../shared/SectionContainer";
import SectionHeader from "../shared/SectionHeader";
import CitationCard from "../shared/CitationCard";
import { Card, CardContent } from "@/components/ui/card";

interface CitationData {
  title: string;
  authors: string;
  description: string;
  doi?: string;
  journal?: string; 
  year?: string;
  url?: string; // Allow url to be directly in data too
}

interface ProcessedCitation extends CitationData {
  url: string; // Ensure url is always a string after processing
}

const AcademicCitationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const sourceCitations: CitationData[] = testDetails.citations;
  const citations: ProcessedCitation[] = sourceCitations.map((c: CitationData) => ({
    ...c,
    url: c.url || (c.doi ? `https://doi.org/${c.doi}` : "#"),
  }));

  const citationIcons = [
    <PersonStanding key="person" className="w-6 h-6" />,
    <Check key="check" className="w-6 h-6" />,
    <FileText key="file" className="w-6 h-6" />,
  ];

  return (
    <SectionContainer
      ref={sectionRef}
      id="science"
      withDecorations={true}
    >
      <SectionHeader
        badge="Academic Research"
        title="HEXACO: Built on Solid Science"
        description="The HEXACO model of personality is grounded in extensive psychometric research, offering a comprehensive six-dimensional framework validated across numerous studies and cultures."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Left side card */}
        <div className="lg:col-span-2 hidden lg:block">
          <div className="relative">
            <Card className="relative bg-card p-8 rounded-xl shadow-lg border border-muted hover:rotate-3">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white mr-4">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    Rigorous Scientific Basis
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  The HEXACO model (Honesty-Humility, Emotionality, Extraversion, Agreeableness, Conscientiousness, Openness to Experience) provides a robust framework for personality assessment.
                </p>
                <p className="text-muted-foreground">
                  Its development and validation are documented in leading academic journals, ensuring the HEXACO test provides reliable and meaningful insights.
                </p>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-primary font-medium text-sm">
                      Utilized in contemporary psychological research worldwide for its nuanced personality insights.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Citations list */}
        <div className="lg:col-span-3 space-y-6">
          {citations.map((citation: ProcessedCitation, index: number) => {
            const colorClass = index === 0 
              ? "bg-emerald-600" 
              : (index === 1 ? "bg-amber-600" : "bg-rose-600");
            
            return (
              <CitationCard
                key={index}
                url={citation.url}
                title={citation.title}
                authors={citation.authors}
                description={citation.description}
                icon={citationIcons[index % citationIcons.length]}
                colorClass={colorClass}
              />
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default AcademicCitationsSection;
