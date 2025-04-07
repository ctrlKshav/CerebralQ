export const DifficultyBadge = ({ level }: { level: string }) => {
  const colors = {
    beginner: "bg-green-100 text-black",
    intermediate: "bg-yellow-100 text-black",
    advanced: "bg-red-100 text-black",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-medium ${
        colors[level as keyof typeof colors] || "bg-gray-100 text-black"
      }`}
    >
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
};
