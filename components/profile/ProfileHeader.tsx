"use client";

import { Calendar, ClipboardCheck, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { handleShare } from "@/lib/shareUtils";
import Link from "next/link";
import { UserProfile } from "@/types/supabase/user-profile";
import InsiderBadge from "@/components/InsiderBadge";

interface ProfileHeaderProps {
  profileData: UserProfile;
  isOwner: boolean;
}

export default function ProfileHeader({
  profileData,
  isOwner,
}: ProfileHeaderProps) {
  const handleProfileShare = async () => {
    const title = `${profileData.username}'s Profile`;
    const text = `I'm an ${profileData.raw_score.personalityType}! Check out my personality profile on CerebralQuotient.`;
    const url = `${profileData.username}`;

    await handleShare(title, text, url, false);
  };

  return (
    <section className="relative">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-10 p-8 rounded-3xl"
      >
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Avatar className="h-40 w-40 md:h-48 md:w-48 border-4 border-background">
            <AvatarImage 
              src={profileData.profile_image_url || "/images/profileAvatars/avatarPlaceholder.png"}
              alt={`${profileData.username}'s profile`}
            />
            <AvatarFallback className="text-4xl">
              {profileData.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Profile info */}
        <div className="flex-1 space-y-5 text-center md:text-left">
          {/* Username and verified badge */}
          <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-bold">
              {profileData.username}
            </h1>
            {profileData.is_insider && <InsiderBadge size="lg" />}
          </div>

          {/* Bio with fade effect */}
          <p className="text-lg text-muted-foreground italic max-w-3xl relative overflow-hidden">
            {profileData.bio}
            <span className="absolute bottom-0 right-0 w-12 h-full" />
          </p>

          {/* Stats ribbon */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              <span className="text-base font-medium">
                Member Since:{" "}
                {new Date(profileData.joined_at).toLocaleDateString()}
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
