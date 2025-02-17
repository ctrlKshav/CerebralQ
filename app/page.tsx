import Hero from "@/components/landing-page/hero";
import DataVisuals from "@/components/landing-page/data-visuals";
import Profile from "@/components/landing-page/profile";
import Footer from "@/components/landing-page/footer";

export default async function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <DataVisuals />
      <Footer />
    </>
  );
}
