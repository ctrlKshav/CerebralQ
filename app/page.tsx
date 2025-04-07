import Hero from "@/components/landing-page/Hero";
import DataVisuals from "@/components/landing-page/DataVisuals";
import Features from "@/components/landing-page/Features";
import TestsCarousel  from "@/components/landing-page/TestsCarousel";
import Navbar from "@/components/navbar";

export default async function Home() {
  return (
    <>
      <Navbar className="" />
      <Hero />
      <TestsCarousel />
      <Features />
      <DataVisuals />
    </>
  );
}
