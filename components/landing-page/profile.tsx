"use client"
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Personalized Insights",
    description: "See your personality traits unfold.",
    icon: CheckCircle,
  },
  {
    title: "Visual Breakdown",
    description: "Interactive charts & graphs.",
    icon: CheckCircle,
  },
  {
    title: "Famous Personalities",
    description: "Compare with well-known figures.",
    icon: CheckCircle,
  },
];

export default function Profile() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px]"
          >
            <Image
              src="https://images.pexels.com/photos/7439135/pexels-photo-7439135.jpeg"
              alt="Profile Analytics"
              fill
              className="rounded-lg shadow-xl object-cover"
            />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground">
                Discover Your Persona
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every test you take adds another piece to your profile, shaping a unique digital persona.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <feature.icon className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}