"use client";

import { Share2 } from "lucide-react";
import { AvatarEditor } from "./AvatarEditor";
import { BioEditor } from "./BioEditor";
import { UserProfileHeader } from "./UserProfileHeader";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface UserHeaderProps {
  username?: string | null;
  profileImage?: string | null;
  bio?: string | null;
  rank?: string | null;
  isInsider?: boolean | null;
  userId?: string;
}

export function UserHeader({ username, profileImage, bio, rank, isInsider, userId }: UserHeaderProps) {
  const handleShareProfile = () => {
    if (!username) return;
    
    // Copy profile URL to clipboard
    const profileUrl = `${window.location.origin}/profiles/${username}`;
    navigator.clipboard.writeText(profileUrl);
    
    // Show success message
    toast.success("Profile link copied to clipboard!", {
      description: "Now you can share it with your friends!",
    });
    
    // If Web Share API is available, offer native sharing
    if (navigator.share) {
      navigator.share({
        title: `${username}'s Profile on CerebralQuotient`,
        text: "Check out my personality profile on CerebralQuotient!",
        url: profileUrl,
      }).catch(err => console.error("Share failed:", err));
    }
  };

  return (
    <div className="bg-card/80 dark:bg-card/30 group rounded-xl p-4 md:p-8 backdrop-blur-sm border border-border shadow-md transition-all hover:shadow-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8">
        <AvatarEditor 
          profileImage={profileImage} 
          username={username} 
          userId={userId} 
        />
        
        <div className="flex-1 space-y-3 md:space-y-4 w-full text-center md:text-left">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <UserProfileHeader 
              username={username} 
              rank={rank} 
              isInsider={isInsider} 
            />
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShareProfile}
              className="mt-2 md:mt-0 text-foreground flex items-center gap-2 self-center md:self-start transition-all "
            >
              <Share2 className="h-4 w-4 text-blue-500" />
              <span>Share Profile</span>
            </Button>
          </div>
          
          <BioEditor 
            bio={bio} 
            userId={userId} 
          />
        </div>
      </div>
    </div>
  );
}