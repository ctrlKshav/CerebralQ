import Hero from "@/components/landing-page/hero";
import DataVisuals from "@/components/landing-page/data-visuals";
import Profile from "@/components/landing-page/profile";
import Footer from "@/components/landing-page/footer";
import { TestsCarousel } from "@/components/landing-page/tests-carousel";

export default async function Home() {
  return (
    <>
      <Hero />
      <TestsCarousel />
      <Profile />
      <DataVisuals />
      <Footer />
    </>
  );
}
