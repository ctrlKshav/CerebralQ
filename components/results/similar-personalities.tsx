"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Person {
  name: string;
  profession: string;
  image: string;
}

interface SimilarPersonalitiesProps {
  personalityType: string;
  similarPersonalities: Person[];
  sectionNumber: number;
}

export function SimilarPersonalities({
  personalityType,
  similarPersonalities,
  sectionNumber,
}: SimilarPersonalitiesProps) {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-10">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary">
          <span className="text-lg font-medium">{sectionNumber}</span>
        </div>
        <h2 className="text-3xl font-semibold text-foreground">
          Similar Personalities
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-base text-muted-foreground">
                Notable People
              </span>
              <h3 className="text-3xl font-bold text-primary">
                Who Shares Your Type
              </h3>
            </div>

            <div className="relative aspect-square w-full mx-auto">
              <Image
                src="/similar_personalities.jpeg"
                alt="Famous personalities illustration"
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1200px) 250px, 280px"
                className="object-contain"
                priority
              />
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              These notable figures are believed to share your {personalityType}{" "}
              personality type. Examining their strengths and approaches may
              provide insights into your own potential.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <div className="space-y-6">
            {similarPersonalities.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/20 transition-colors"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={person.image || "/profile-avatars/avatarPlaceholder.png"}
                    alt={`${person.name} portrait`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{person.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {person.profession}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
