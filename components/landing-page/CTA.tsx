import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ctaData } from "@/data/landing-page/cta";

export function CTA() {
  const { title, description, button } = ctaData;

  return (
    <section className="py-12 sm:py-24 px-6 sm:px-24">
      <div className="text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>

        <div className="pt-6">
          <Link href={button.href}>
            <Button size="lg" className="rounded-full text-lg px-8 py-6">
              {button.text}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
