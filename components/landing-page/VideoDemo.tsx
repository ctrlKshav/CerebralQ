import { motion } from "framer-motion";
import { Play, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";
import { videoDemoData } from "@/data/landing-page/video-demo";

export function VideoDemo() {
  const { label, title, description, video } = videoDemoData;

  return (
    <section className="py-12 sm:py-24 px-6 sm:container" id="video-demo">
      <SectionHeader
        icon={<Film className="h-5 w-5 text-primary" />}
        label={label}
        title={title}
        description={description}
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
            src={`https://player.cloudinary.com/embed/?cloud_name=${video.cloudName}&public_id=${video.publicId}`}
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
