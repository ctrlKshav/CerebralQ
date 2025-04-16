import { ResultData } from "@/types/tests/mbti/results";
import { sampleResultData } from "@/data/mbti/mbtiResultData";

import PersonalityTraits from "@/components/results/report/sections/personality-traits";
import CareerPathSection from "@/components/results/report/sections/CareerPathSection";
import RelationshipSection from "@/components/results/report/sections/RelationshipSection";
import GrowthSection from "@/components/results/report/sections/GrowthSection";
import DailyHabitsSection from "@/components/results/report/sections/DailyHabitsSection";
import ValuesMotivatorSection from "@/components/results/report/sections/ValuesMotivatorsSection";
import CommunitySection from "@/components/results/report/sections/CommunitySection";
import ActionPlanSection from "@/components/results/report/sections/ActionPlanSection";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar-custom";
import { ReportHeader } from "@/components/results/report/SiteHeader";
import { ReportSidebar } from "@/components/results/report/Sidebar";
import { User } from "@/types/supabase/users";
import { PDFViewer } from "@react-pdf/renderer";
import { PDFResultsDocument } from "@/components/pdf/PDFDocument";
import { useTheme } from "next-themes";

export interface ReportComponentProps {
  userData: User | null;
  resultData: ResultData | null;
}
export default function Report({userData, resultData}: ReportComponentProps) {
  const isDarkMode = useTheme();
  const {
    personalityType,
    personalityDescription,
    completionDate,
    traitScores,
  } = resultData || sampleResultData;
  return (
    <div className="min-h-screen bg-background [--header-height:6rem]">
      <PDFViewer className="min-h-screen w-full">
        <PDFResultsDocument resultData={sampleResultData} isDarkMode={isDarkMode.theme === "dark"} />
      </PDFViewer>
    </div>
  );
}
