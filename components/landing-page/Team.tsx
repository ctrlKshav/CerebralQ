import { TeamGrid } from "@/components/team/TeamGrid"
import { SectionHeader } from "@/components/test-info/mbti/SectionHeader"
import { teamMembers } from "@/data/team"

export default function Team() {
  return (
   <section
        className="max-w-7xl mx-auto px-4 pb-20 scroll-mt-36 mb-12"
        id="team"
      >
        {/* Team Section */}
        <SectionHeader
          title="The CQ Crew"
          description="A group of builders, thinkers, and problem-solvers making cool things happen. We turn ideas into reality."
        />

        <TeamGrid members={teamMembers} />
      </section>
  )
}

