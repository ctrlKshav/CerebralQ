import { useEffect, useState } from "react";
import { ResultData } from "@/types/tests/mbti/results";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import our components
import { sampleResultData } from "@/data/mbti/mbtiResultData";

import HeroSection from "@/components/results/result/HeroSection";
import { User } from "@/types/supabase/users";
import LoadingSkeleton from "@/components/LoadingSkeleton";

interface ResultCertificateProps {
  userData: User | null;
  resultData: ResultData | null;
}

export default function ResultCertificate({userData, resultData}: ResultCertificateProps) {
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
        />
      </main>
    </div>
  );
}
