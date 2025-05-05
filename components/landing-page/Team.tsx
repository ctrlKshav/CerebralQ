import { TeamGrid } from "@/components/team/TeamGrid"
import { teamMembers } from "@/data/team"
import { SectionHeader } from "./SectionHeader"
import { Users } from "lucide-react"

export default function Team() {
  return (
   <section
        className="max-w-7xl mx-auto px-4 pb-20 scroll-mt-36 mb-12"
        id="team"
      >
        <SectionHeader
          icon={<Users className="h-5 w-5 text-primary" />}
          label="Team"
          title="The CQ Crew"
          description="A group of builders, thinkers, and problem-solvers making cool things happen. We turn ideas into reality."
        />

        <TeamGrid members={teamMembers} />
      </section>
  )
}

