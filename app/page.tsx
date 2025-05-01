"use client";
import Hero from "@/components/landing-page/Hero";
import DataVisuals from "@/components/landing-page/DataVisuals";
import Features from "@/components/landing-page/Features";
import TestsCarousel from "@/components/landing-page/TestsCarousel";
import Navbar from "@/components/navbar";
import Team from "@/components/landing-page/Team";
import { useUserDataContext } from "@/context/user-data";
import LoadingSkeleton from "@/components/LoadingSkeleton";

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
      <TestsCarousel />
      <Features />
      <DataVisuals />
      <Team />
    </>
  );
}
