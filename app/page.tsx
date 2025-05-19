"use client";
import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/navbar";
import Team from "@/components/landing-page/Team";
import { useUserDataContext } from "@/context/user-data";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { VideoDemo } from "@/components/landing-page/VideoDemo";
import { FinalCTA } from "@/components/landing-page/CTA";
import { MBTISection } from "@/components/landing-page/MBTIInfo";
import { OCEANSection } from "@/components/landing-page/OCEANInfo";
import { Features } from "@/components/landing-page/features";

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
      <Hero />
      <MBTISection />
      <OCEANSection />
      <Features />
      <VideoDemo />
      <Team />
      <FinalCTA />
    </>
  );
}
