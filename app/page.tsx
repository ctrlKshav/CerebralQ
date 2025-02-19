import Hero from "@/components/landing-page/hero";
import DataVisuals from "@/components/landing-page/data-visuals";
import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import { TestsCarousel } from "@/components/landing-page/tests-carousel";
import Navbar from "@/components/navbar";

export default async function Home() {
  return (
    <>
      <Navbar className="" />
      <Hero />
      <TestsCarousel />
      <Features />
      <DataVisuals />
      <Footer />
    </>
  );
}
