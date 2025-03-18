import { UserBadges } from "./UserBadges";

interface UserProfileHeaderProps {
  username?: string | null;
  rank?: string | null;
  isInsider?: boolean | null;
}

export function UserProfileHeader({ username, rank, isInsider }: UserProfileHeaderProps) {
  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="text-xl md:text-3xl font-bold text-foreground mb-4">
        {username || "Username"}
      </h1>
      <UserBadges rank={rank} isInsider={isInsider} />
    </div>
  );
}
