"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit2, User } from "lucide-react";
import { UserBadges } from "../account/UserBadges";

interface UserHeaderProps {
  username: string;
  profileImage: string;
  bio: string;
  rank: string;
  isInsider: boolean;
  onEditBio: (newBio: string) => void;
}

export function UserHeader({ username, profileImage, bio, rank, isInsider, onEditBio }: UserHeaderProps) {
  return (
    <div className="bg-slate-900/30 rounded-xl p-8 backdrop-blur-sm border border-slate-800/50">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="relative group">
          <Avatar className="h-32 w-32 ring-4 ring-primary/50 ring-offset-4 ring-offset-slate-950">
            <AvatarImage src={profileImage} alt={username} />
            <AvatarFallback>
              <User className="h-16 w-16" />
            </AvatarFallback>
          </Avatar>
          <Button
            size="icon"
            variant="ghost"
            className="absolute bottom-0 right-0 rounded-full bg-slate-900 border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Edit2 className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-100 mb-2">{username}</h1>
            <UserBadges rank={rank} isInsider={isInsider} />
          </div>
          
          <p className="text-slate-300 max-w-2xl">{bio}</p>
        </div>
      </div>
    </div>
  );
}