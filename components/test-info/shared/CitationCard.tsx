"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface CitationCardProps {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi?: string;
  url?: string;
  description?: string;
  delay?: number;
}

const CitationCard: React.FC<CitationCardProps> = ({
  title,
  authors,
  journal,
  year,
  doi,
  url,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      className="bg-card rounded-xl shadow-sm border border-muted overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-2">{authors}</p>
        <p className="text-muted-foreground text-sm italic mb-4">
          {journal}, {year}
        </p>
        
        {description && (
          <p className="text-card-foreground text-sm mb-4 border-l-2 border-primary/30 pl-3">
            {description}
          </p>
        )}
        
        {(doi || url) && (
          <div className="flex items-center mt-2">
            <ExternalLink className="w-4 h-4 text-primary mr-2" />
            <a
              href={doi ? `https://doi.org/${doi}` : url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm hover:underline"
            >
              {doi ? `DOI: ${doi}` : "View Source"}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CitationCard;
