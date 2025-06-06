"use client";
import { useRef } from "react";
import { citations } from "@/data/test-info/ocean/citations";
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

const AcademicCitationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
        title="Science You Can Trust"
        description="The OCEAN Test is built on decades of scientific research and academic validation. Here are some of the key studies that form its foundation."
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
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Citations list */}
        <div className="lg:col-span-3 space-y-6">
          {citations.map((citation, index) => {
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
