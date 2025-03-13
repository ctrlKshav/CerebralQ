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
          title="The People Behind the Magic"
          description="Meet our passionate team of creators, innovators, and problem solvers. Together, we're building the future of technology, one pixel at a time."
        />
        <TeamGrid members={teamMembers} />
      </main>
    </div>
  );
}
