import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Share2, Plus, Crown } from "lucide-react";
import BadgeDisplay from "./BadgeDisplay";
import ResultsSummary from "./ResultsSummary";
import {
  UserType,
  ProficiencyLevel,
  TestResultSummary,
} from "@/types/profileTypes";

interface ProfileHeaderProps {
  user: UserType;
  proficiencyLevel: ProficiencyLevel;
  isInsider: boolean;
  assessmentResults: TestResultSummary[];
}

export default function ProfileHeader({
  user,
  proficiencyLevel,
  isInsider,
  assessmentResults,
}: ProfileHeaderProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24">
      <div className="flex flex-col gap-12 items-start">
        {/* Top Section: User Info */}
        <div className="flex flex-col md:flex-row w-full gap-8 md:gap-16 items-center md:items-start">
          <div className="flex flex-col items-center md:items-start max-w-md">
            <Avatar className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-lg">
              <AvatarImage
                src={user.avatarUrl}
                alt={user.username}
                className="object-cover"
              />
              <AvatarFallback className="text-3xl">
                {user.username.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="mt-6 text-center md:text-left space-y-1">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">{user.username}</h1>
                {isInsider && (
                  <div className="flex items-center bg-violet-100 dark:bg-violet-900/30 px-2 py-1 rounded text-xs font-medium text-violet-700 dark:text-violet-400">
                    <Crown className="h-3 w-3 mr-1" />
                    C4E Insider
                  </div>
                )}
              </div>
              <p className="text-muted-foreground">
                Member since {user.joinDate}
              </p>
            </div>

            <p className="mt-4 text-base leading-relaxed max-w-xs text-center md:text-left">
              {user.bio}
            </p>

            <div className="flex gap-4 mt-6">
              <Button variant="outline" className="rounded-lg px-6 py-2 h-auto">
                <Share2 className="h-4 w-4 mr-2" />
                Share Profile
              </Button>
              <Button className="rounded-lg px-6 py-2 h-auto bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Take Test
              </Button>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-10 w-full">
            <div className="border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 pt-8 md:pt-0 md:pl-8 flex-grow">
              <h2 className="text-2xl font-bold mb-6">Assessment Results</h2>
              <ResultsSummary results={assessmentResults} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
