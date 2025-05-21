import { motion } from "framer-motion";
import { Play, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";
import { useState } from "react";

export function VideoDemo() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" id="video-demo">
      <SectionHeader
        icon={<Film className="h-5 w-5 text-primary" />}
        label="Video Demo"
        title="Personality Insights, Visualized"
        description="Watch how Cerebral Quotient transforms complex personality data into intuitive, actionable insights through our interactive platform."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video max-w-4xl mx-auto"
      >
        {/* Video container */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/60 backdrop-blur-sm">
          <iframe
            src={`https://player.cloudinary.com/embed/?cloud_name=${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}&public_id=${process.env.NEXT_PUBLIC_CLOUDINARY_PUBLIC_ID_DEMO}`}
            className="w-full h-full"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 left-4">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
