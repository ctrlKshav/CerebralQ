"use client";
import { useRef, ReactNode } from "react";
import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";
import AnimatedCard from "./AnimatedCard";

export interface TestOverviewBadgeItem {
  icon: ReactNode;
  text: string;
  bgClass: string;
  textClass: string;
  iconBgClass: string;
}

interface SharedTestOverviewSectionProps {
  sectionId?: string;
  headerBadge?: string;
  headerTitle: string;
  headerHighlightWord?: string;
  headerDescription: string;
  mainDescriptionText: ReactNode; // Allow JSX for rich text
  blockquoteText: string;
  detailCardTitle?: string;
  detailCardSubTitle?: string;
  badges: TestOverviewBadgeItem[];
  benefits: string[];
  benefitsTitle?: string;
}

const SharedTestOverviewSection: React.FC<SharedTestOverviewSectionProps> = ({
  sectionId = "overview",
  headerBadge = "Overview",
  headerTitle,
  headerHighlightWord,
  headerDescription,
  mainDescriptionText,
  blockquoteText,
  detailCardTitle = "Test Details",
  detailCardSubTitle = "Everything you need to know before taking the test",
  badges,
  benefits,
  benefitsTitle = "What You'll Get:",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <SectionContainer ref={sectionRef} id={sectionId}>
      <SectionHeader
        badge={headerBadge}
        title={headerTitle}
        highlightWord={headerHighlightWord}
        description={headerDescription}
      />

      <AnimatedCard className="mb-14 mt-12">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden max-w-4xl mx-auto border border-muted">
          <div className="absolute top-0 right-0 h-64 w-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/2 opacity-50 dark:opacity-30"></div>
          <div className="relative z-10">
            <div className="text-card-foreground text-lg md:text-xl leading-relaxed">
              {mainDescriptionText}
            </div>
            <div className="mt-6 relative pl-6 border-l-4 border-primary/50">
              <p className="text-card-foreground/90 font-medium italic">
                {blockquoteText}
              </p>
            </div>
          </div>
        </div>
      </AnimatedCard>

      <AnimatedCard delay={0.2}>
        <div className="bg-card rounded-2xl shadow-lg border border-muted overflow-hidden max-w-4xl mx-auto">
          <div className="p-8 border-b border-muted">
            <h3 className="text-2xl font-bold text-card-foreground mb-3">
              {detailCardTitle}
            </h3>
            <p className="text-muted-foreground text-base">
              {detailCardSubTitle}
            </p>
          </div>

          <div className="p-6 flex flex-wrap gap-4 border-b border-muted">
            {badges.map((badge, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-3 py-1.5 ${badge.bgClass} rounded-full`}
              >
                <span
                  className={`flex items-center justify-center w-5 h-5 ${badge.iconBgClass} rounded-full shrink-0`}
                >
                  {badge.icon}
                </span>
                <span className={`text-xs font-medium ${badge.textClass}`}>
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          <div className="p-8">
            <h4 className="text-lg font-semibold text-card-foreground mb-6">
              {benefitsTitle}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start">
                  <div className="mr-3 mt-1 text-primary shrink-0">
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
      </AnimatedCard>
    </SectionContainer>
  );
};

export default SharedTestOverviewSection;
