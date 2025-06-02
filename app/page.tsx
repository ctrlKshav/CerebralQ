"use client";
import HeroSection from "@/components/landing-page/Hero";
import Navbar from "@/components/navbar";
import Team from "@/components/landing-page/Team";
import { useUserDataContext } from "@/context/user-data";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { VideoDemo } from "@/components/landing-page/VideoDemo";
import { CTA } from "@/components/landing-page/CTA";
import { MBTISection } from "@/components/landing-page/tests-information/mbti/MBTIInfo";
import { OCEANSection } from "@/components/landing-page/tests-information/ocean/OCEANInfo";
import { Features } from "@/components/landing-page/features";
import { DISCSection } from "@/components/landing-page/tests-information/disc/DISCInfo";
import { HEXACOSection } from "@/components/landing-page/tests-information/hexaco/HEXACOInfo";
export default function Home() {
  const userDataContext = useUserDataContext();

  if (userDataContext === null) {
    return null;
  }

  const { userData, loading } = userDataContext;

  if (loading) return <LoadingSkeleton />;
  return (
    <>
      <Navbar user={userData} />
      <HeroSection />
      <MBTISection />
      <OCEANSection />
      <DISCSection />
      <HEXACOSection />
      <Features />
      <VideoDemo />
      <Team />
      <CTA />
    </>
  );
}
