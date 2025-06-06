"use client";
import { useRef } from "react";
import {
  FileText,
  PersonStanding,
  Check,
  BookOpen,
  Award,
} from "lucide-react";
import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";
import CitationCard from "./CitationCard";
import { Card, CardContent } from "@/components/ui/card";

export interface ProcessedCitation {
  title: string;
  authors: string;
  description: string;
  url: string;
}

interface SharedAcademicCitationsSectionProps {
  sectionId?: string;
  headerBadge?: string;
  headerTitle: string;
  headerDescription: string;
  staticCardTitle: string;
  staticCardDescriptionP1: string;
  staticCardDescriptionP2: string;
  staticCardAwardText: string;
  citations: ProcessedCitation[];
}

const SharedAcademicCitationsSection: React.FC<SharedAcademicCitationsSectionProps> = ({
  sectionId = "science",
  headerBadge = "Academic Research",
  headerTitle,
  headerDescription,
  staticCardTitle,
  staticCardDescriptionP1,
  staticCardDescriptionP2,
  staticCardAwardText,
  citations,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  const citationIcons = [
    <PersonStanding key="person" className="w-6 h-6" />,
    <Check key="check" className="w-6 h-6" />,
    <FileText key="file" className="w-6 h-6" />,
  ];

  return (
    <SectionContainer
      ref={sectionRef}
      id={sectionId}
      withDecorations={true}
    >
      <SectionHeader
        badge={headerBadge}
        title={headerTitle}
        description={headerDescription}
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start mt-12">
        {/* Left side card */}
        <div className="lg:col-span-2 hidden lg:block">
          <div className="relative">
            <Card className="relative bg-card p-8 rounded-xl shadow-lg border border-muted transition-transform duration-300 ease-out hover:rotate-[-2deg] hover:scale-[1.02]">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground mr-4 shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    {staticCardTitle}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  {staticCardDescriptionP1}
                </p>
                <p className="text-muted-foreground text-sm">
                  {staticCardDescriptionP2}
                </p>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 shrink-0">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-primary font-medium text-xs">
                      {staticCardAwardText}
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
            const colorClasses = [
              "bg-emerald-500 text-emerald-50 border-emerald-500/30 hover:border-emerald-500/70", // Icon bg, text, border, hover border
              "bg-sky-500 text-sky-50 border-sky-500/30 hover:border-sky-500/70",
              "bg-amber-500 text-amber-50 border-amber-500/30 hover:border-amber-500/70",
              "bg-rose-500 text-rose-50 border-rose-500/30 hover:border-rose-500/70",
            ];
            const colorClass = colorClasses[index % colorClasses.length];
            
            return (
              <CitationCard
                key={index}
                url={citation.url}
                title={citation.title}
                authors={citation.authors}
                description={citation.description}
                icon={citationIcons[index % citationIcons.length]}
                colorClass={colorClass} // This prop might need adjustment based on CitationCard's expectation
              />
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default SharedAcademicCitationsSection;
