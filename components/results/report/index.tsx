import { FullResultData, FreeResultData } from "@/types/tests/mbti/results";
import { sampleResultData } from "@/data/mbti/mbtiResultData";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar-custom";
import { ReportHeader } from "@/components/results/report/SiteHeader";
import { ReportSidebar } from "@/components/results/report/Sidebar";
import { User } from "@/types/supabase/users";
import { CQReportFull } from "./CQReportFull";
import { useEffect } from "react";
import { CQReportFree } from "./CQReportFree";
export interface ReportComponentProps {
  userData: User | null;
  resultData: FullResultData | FreeResultData | null;
}
export default function Report({ userData, resultData }: ReportComponentProps) {
  if (resultData === null) {
    resultData = sampleResultData;
  }

  const { personalityType, traitScores } = resultData;

  const isFull = "relationships" in resultData.personalityData;
  return (
    <div className="min-h-screen bg-background [--header-height:6rem]">
      <SidebarProvider className="flex flex-col">
        <ReportHeader firstname={resultData?.firstname} />
        <div className="flex flex-1">
          <ReportSidebar />
          <SidebarInset>
            {isFull ? (
              <CQReportFull
                traitScores={traitScores}
                personalityType={personalityType}
                resultData={(resultData as FullResultData) || sampleResultData}
              />
            ) : (
              <CQReportFree
                traitScores={traitScores}
                personalityType={personalityType}
                resultData={(resultData as FreeResultData) || sampleResultData}
              />
            )}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
