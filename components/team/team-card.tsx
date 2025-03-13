"use client";

import { TeamMember } from "@/types/team";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="group overflow-hidden transition-all duration-300 h-full shadow-lg hover:shadow-xl hover:shadow-primary/10 bg-gradient-to-b from-card to-card/95 border-primary/10">
        <CardContent className="p-0">
          <motion.div 
            className="relative aspect-square overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={index < 4}
            />
          </motion.div>
          <div className="p-6 relative">
            <motion.h3 
              className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {member.name}
            </motion.h3>
            <motion.p 
              className="text-sm font-medium text-primary/70 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {member.role}
            </motion.p>
            <motion.p 
              className="text-sm text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {member.bio}
            </motion.p>
            {member.socialLinks && (
              <motion.div 
                className="flex gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {member.socialLinks.twitter && (
                  <Link
                    href={member.socialLinks.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={18} className="hover:scale-110 transition-transform" />
                  </Link>
                )}
                {member.socialLinks.linkedin && (
                  <Link
                    href={member.socialLinks.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} className="hover:scale-110 transition-transform" />
                  </Link>
                )}
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}