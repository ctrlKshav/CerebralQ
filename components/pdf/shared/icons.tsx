import React from "react";
import { Path, Svg } from "@react-pdf/renderer";

interface IconProps {
  color?: string;
  size?: number;
}

// Add these new icons to your existing icons file

export const HeartIcon: React.FC<IconProps> = ({ 
  color = "#000000", 
  size = 16 
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const UsersIcon: React.FC<IconProps> = ({ 
  color = "#000000", 
  size = 16 
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23 21v-2a4 4 0 0 0-3-3.87"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 3.13a4 4 0 0 1 0 7.75"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ 
  color = "#000000", 
  size = 16 
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M5 12h14M12 5l7 7-7 7"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const MessageSquareIcon: React.FC<IconProps> = ({ 
  color = "#000000", 
  size = 16 
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
