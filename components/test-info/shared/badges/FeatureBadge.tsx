export const FeatureBadge = ({
  Icon,
  label,
  color,
}: {
  Icon: any;
  label: string;
  color: string;
}) => (
  <div
    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${color}`}
  >
    <Icon className="h-4 w-4" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);
