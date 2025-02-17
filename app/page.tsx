import Hero from "@/components/landing-page/hero";
import DataVisuals from "@/components/landing-page/data-visuals";
import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import { TestsCarousel } from "@/components/landing-page/tests-carousel";

export default async function Home() {
  return (
    <>
      <Hero />
      <TestsCarousel />
      <Features />
      <DataVisuals />
      <Footer />
    </>
  );
}
