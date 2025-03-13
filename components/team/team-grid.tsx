"use client";

import { TeamMember } from "@/types/team";
import { TeamCard } from "./team-card";

interface TeamGridProps {
  members: TeamMember[];
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="relative px-4 pb-16 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {members.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] pointer-events-none" />
    </div>
  );
}