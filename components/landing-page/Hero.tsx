import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import { heroData } from "@/data/landing-page/hero";
export default function HeroSection() {
  const { title, description, cta, announcement } = heroData;

  return (
    <main className="min-h-screen w-full mt-24 ">
      <section className="px-6 py-2">
        <div className="mx-auto flex flex-col items-center text-center max-w-4xl gap-10">
          {announcement && (
            <Link
              href={announcement.href}
              className="inline-flex items-center group"
            >
              <Badge
                variant="outline"
                className="rounded-full bg-primary/10 text-primary border-transparent px-3 py-1 text-xs"
              >
                {announcement.label}
              </Badge>
              <span className="ml-2 text-sm font-medium">
                {announcement.text}
              </span>
              <ArrowRight className="ml-1 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight  py-4">
            {title.prefix}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary-foreground">
                {title.highlight}
              </span>
              <span className="absolute inset-0 bg-purple-500 -rotate-1 z-0"></span>
            </span>{" "}
            {title.suffix}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground  max-w-3xl">
            {description.split("\n\n").map((paragraph, index) => (
              <span key={index} className={`${index > 0 ? "hidden sm:inline" : "inline"}`}>
                {paragraph}
                {index < description.split("\n\n").length - 1 && <br />}
              </span>
            ))}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-medium">
              <Link href={cta.primary.href}>{cta.primary.text}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link href={cta.secondary.href} className="flex items-center">
                <Play className="mr-2 h-4 w-4 fill-current" />
                {cta.secondary.text}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
