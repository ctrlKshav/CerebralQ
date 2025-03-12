"use client";

import { Calendar, ClipboardCheck, Share2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { handleShare } from "@/lib/shareUtils";
import Link from "next/link";

interface ProfileHeaderProps {
  userData: {
    username: string;
    profile_image_url: string;
    bio: string;
    tests_taken: number;
    last_test_date: string;
  };
  isOwner: boolean;
}

export default function ProfileHeader({
  userData,
  isOwner,
}: ProfileHeaderProps) {
  const handleProfileShare = async () => {
    const title = `${userData.username}'s Profile`;
    const text = `Check out ${userData.username}'s personality profile on CerebralQ!`;
    const url = `profiles/${userData.username}`;

    await handleShare(title, text, url, false);
  };

  return (
    <section className="relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background rounded-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-10 p-8 rounded-3xl"
      >
        {/* Avatar with gradient border */}
        <div className="relative flex-shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary/40 rounded-full blur-sm" />
          <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-full overflow-hidden border-4 border-background">
            <div className="h-full w-full relative">
              <Image
                src={
                  userData.profile_image_url ||
                  "/placeholder.svg?height=192&width=192"
                }
                alt={`${userData.username}'s profile`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
          </div>
        </div>

        {/* Profile info */}
        <div className="flex-1 space-y-5 text-center md:text-left">
          {/* Username and verified badge */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <h1 className="text-4xl md:text-5xl font-bold">
              {userData.username}
            </h1>
          </div>

          {/* Bio with fade effect */}
          <p className="text-lg text-muted-foreground italic max-w-3xl relative overflow-hidden">
            {userData.bio}
            <span className="absolute bottom-0 right-0 bg-gradient-to-l from-background to-transparent w-12 h-full" />
          </p>

          {/* Stats ribbon */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              <span className="text-base font-medium">
                Last test:{" "}
                {new Date(userData.last_test_date).toLocaleDateString()}
              </span>
            </div>
            {isOwner ? (
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={handleProfileShare}
              >
                <Share2 className="h-5 w-5 text-green-500" />
                <span className="font-medium">Share Profile</span>
              </Button>
            ) : (
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <ClipboardCheck className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Take Test</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
