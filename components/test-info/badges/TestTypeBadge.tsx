export const TestTypeBadge = ({ type }: { type: string }) => {
  const colors = {
    personality: "bg-green-100 text-black",
    cognitive: "bg-yellow-100 text-black",
    language: "bg-red-100 text-black",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-medium ${
        colors[type as keyof typeof colors] || "bg-gray-100 text-black"
      }`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
};
