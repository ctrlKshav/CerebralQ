import React from "react"
import * as Icons from "lucide-react"

interface IconProps {
  iconName: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ iconName, className = 'w-8 h-8 text-primary' }) => {
  const IconComponent = (Icons as any)[iconName];

  if (!IconComponent) return null;

  return <IconComponent className={`${className}`} />;
};

export default Icon;
