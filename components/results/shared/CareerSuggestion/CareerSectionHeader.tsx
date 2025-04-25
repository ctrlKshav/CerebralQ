"use client";
import { motion } from "framer-motion";

interface CareerSectionHeaderProps {
  title: string;
  description: string;
}

export function CareerSectionHeader({ title, description }: CareerSectionHeaderProps) {
  return (
    <div className="text-center mb-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
          {title}
        </h2>
      </motion.div>

      <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">
        {description}
      </p>
    </div>
  );
} 