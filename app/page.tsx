import Hero from "@/components/hero";
import DataVisuals from "@/components/landing-page/data-visual";
import Profile from "@/components/profile";

export default async function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <DataVisuals />
    </>
  );
}
