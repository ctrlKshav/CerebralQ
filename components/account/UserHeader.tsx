"use client";

import { AvatarEditor } from "./AvatarEditor";
import { BioEditor } from "./BioEditor";
import { UserProfileHeader } from "./UserProfileHeader";

interface UserHeaderProps {
  username?: string | null;
  profileImage?: string | null;
  bio?: string | null;
  rank?: string | null;
  isInsider?: boolean | null;
  userId?: string;
}

export function UserHeader({ username, profileImage, bio, rank, isInsider, userId }: UserHeaderProps) {
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