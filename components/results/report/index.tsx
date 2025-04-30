import { ResultData } from "@/types/tests/mbti/results";
import { sampleResultData } from "@/data/tests/mbti/mbtiResultData";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar-custom";
import { ReportHeader } from "@/components/results/report/SiteHeader";
import { ReportSidebar } from "@/components/results/report/Sidebar";
import { User } from "@/types/supabase/users";
import { CQReport } from "./CQReport";
import { useEffect } from "react";
export interface ReportComponentProps {
  userData: User | null;
  resultData: ResultData | null;
}
export default function Report({ userData, resultData }: ReportComponentProps) {
  const {
    personalityType,
    traitScores,
  } = resultData || sampleResultData;
  return (
    <div className="min-h-screen bg-background [--header-height:6rem]">
      <SidebarProvider className="flex flex-col">
        <ReportHeader firstname={resultData?.firstname} />
        <div className="flex flex-1">
          <ReportSidebar />
          <SidebarInset>
            <CQReport
              traitScores={traitScores}
              personalityType={personalityType}
              resultData={resultData || sampleResultData}
            />  
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
