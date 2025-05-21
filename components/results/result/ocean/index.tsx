import { useEffect, useState } from "react";
import { ResultData } from "@/types/tests/ocean/results";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import our components
import { sampleResultData } from "@/data/tests/ocean/oceanSampleData";

import HeroSection from "@/components/results/result/ocean/HeroSection";
import { User } from "@/types/supabase/users";
import LoadingSkeleton from "@/components/LoadingSkeleton";

interface ResultCertificateProps {
  resultData: ResultData | null;
  historyPage: boolean,
}

export default function ResultCertificate({ resultData, historyPage = false }: ResultCertificateProps) {
  const {
    personalityType,
    personalityDescription,
    completionDate,
  } = resultData || sampleResultData;

  return (
    <div className="min-h-screen bg-background">
      <main className="md:mt-14 lg:mt-4 mx-auto transition-all duration-300 space-y-8 p-4">
        <HeroSection
          personalityType={personalityType}
          personalityDescription={personalityDescription}
          completionDate={completionDate}
          firstname={resultData?.firstname || null}
          username={resultData?.username || null}
          historyPage={historyPage}
          traitScores={resultData?.traitScores || null}
        />
      </main>
    </div>
  );
}
