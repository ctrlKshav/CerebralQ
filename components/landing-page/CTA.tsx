import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-12 sm:py-24 px-6 sm:container">
      <div
        className="text-center space-y-8"
      >

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Ready to Discover Your True Self?
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Take the first step towards greater self-awareness and personal
          growth. Start your personality assessment today.
        </p>

        <div
          className="pt-6"
        >
          <Link href="/tests">
            <Button size="lg" className="rounded-full text-lg px-8 py-6">
              Explore Tests Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
