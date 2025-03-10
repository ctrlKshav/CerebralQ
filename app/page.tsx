import Hero from "@/components/landing-page/hero";
import DataVisuals from "@/components/landing-page/data-visuals";
import Features from "@/components/landing-page/features";
import { TestsCarousel } from "@/components/landing-page/tests-carousel";
import Navbar from "@/components/navbar";
import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/tests/mbti")
  return (
    <>
      <Navbar className="" />
      <Hero />
      {/* <TestsCarousel /> */}
      <Features />
      <DataVisuals />
    </>
  );
}
