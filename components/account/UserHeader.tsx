"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit2, User } from "lucide-react";
import { UserBadges } from "../account/UserBadges";

interface UserHeaderProps {
  username?: string | null;
  profileImage?: string | null;
  bio?: string | null;
  rank?: string | null;
  isInsider?: boolean | null;
}

export function UserHeader({ username, profileImage, bio, rank, isInsider }: UserHeaderProps) {
  return (
    <div className="bg-card/80 dark:bg-card/30 group rounded-xl p-4 md:p-8 backdrop-blur-sm border border-border shadow-md transition-all hover:shadow-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8">
        <div className="relative self-center md:self-auto">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 ring-3 md:ring-4 ring-primary/50 ring-offset-2 md:ring-offset-4 ring-offset-background shadow-md">
            <AvatarImage src={profileImage || ""} alt={username || "Avatar"} />
            <AvatarFallback>
              <User className="h-12 w-12 md:h-16 md:w-16" />
            </AvatarFallback>
          </Avatar>
          <Button
            size="icon"
            variant="secondary"
            className="absolute bottom-0 right-0 rounded-full bg-background border border-border shadow-sm opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity h-6 w-6 md:h-10 md:w-10"
          >
            <Edit2 className="h-3 w-3 md:h-3.5 md:w-3.5" />
          </Button>
        </div>
        
        <div className="flex-1 space-y-3 md:space-y-4 w-full text-center md:text-left">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div className="flex flex-col justify-center w-full">
              <h1 className="text-xl md:text-3xl font-bold text-foreground mb-4 ">{username || "Username"}</h1>
              <UserBadges rank={rank} isInsider={isInsider} />
            </div>
          </div>
          
          <div className="relative mt-3 md:mt-4 bg-background/50 rounded-lg p-2 md:p-3 border border-border/50">
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl pr-6 md:pr-8">
              {bio || "No bio provided. Add a short description about yourself."}
            </p>
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-1 md:top-2 right-1 md:right-2 h-5 w-5 md:h-8 md:w-8 rounded-full opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
            >
              <Edit2 className="h-3 w-3 md:h-3.5 md:w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}