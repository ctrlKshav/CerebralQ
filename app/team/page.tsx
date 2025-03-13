import { TeamHero } from "@/components/team/team-hero";
import { TeamGrid } from "@/components/team/team-grid";
import { teamMembers } from "@/data/team";
import Navbar from "@/components/navbar";

export default function TeamPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-background">
        <TeamHero
          title="The CQ Crew"
          description="A group of builders, thinkers, and problem-solvers making cool things happen. We turn ideas into reality."
        />

        <TeamGrid members={teamMembers} />
      </main>
    </div>
  );
}
