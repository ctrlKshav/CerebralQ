"use client";

import { TeamMember } from "@/types/team";
import { TeamCard } from "./TeamCard";

interface TeamGridProps {
  members: TeamMember[];
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto">
        {members.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>
      
    </div>
  );
}