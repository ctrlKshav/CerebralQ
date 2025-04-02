import React from "react";
import {
  Svg,
  Path,
  Circle,
  Rect,
  Line,
  Polyline,
  G,
  Polygon,
} from "@react-pdf/renderer";

// Common interface for all icons
interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
}

// Award Icon
export const AwardIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Circle cx="12" cy="8" r="7" strokeWidth={strokeWidth} fill="none" />
    <Polyline
      points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
      strokeWidth={strokeWidth}
      fill="none"
    />
  </Svg>
);

// Briefcase Icon
export const BriefcaseIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Rect
      x="2"
      y="7"
      width="20"
      height="14"
      rx="2"
      ry="2"
      strokeWidth={strokeWidth}
      fill="none"
    />
    <Path
      d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
      strokeWidth={strokeWidth}
      fill="none"

    />
  </Svg>
);

// Checkbox Icon (for completed items)
export const CheckboxIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Path
      d="M9 11l3 3L22 4"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

// UpArrow Icon (for growth areas)
export const UpArrowIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Line
      x1="12"
      y1="19"
      x2="12"
      y2="5"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Polyline
      points="5 12 12 5 19 12"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

// Lightbulb Icon
export const LightbulbIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Path
      d="M9 18h6"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M10 22h4"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M12 2v2"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M17.8 6.2l-1.4 1.4"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M6.2 6.2l1.4 1.4"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M16 16a4 4 0 0 0-8 0"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M8 13a7 7 0 1 1 8 0"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

// Sun Icon
export const SunIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Circle cx="12" cy="12" r="5" strokeWidth={strokeWidth} fill="none" />
    <Line
      x1="12"
      y1="1"
      x2="12"
      y2="3"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Line
      x1="12"
      y1="21"
      x2="12"
      y2="23"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Line
      x1="4.22"
      y1="4.22"
      x2="5.64"
      y2="5.64"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Line
      x1="18.36"
      y1="18.36"
      x2="19.78"
      y2="19.78"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Line
      x1="1"
      y1="12"
      x2="3"
      y2="12"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Line
      x1="21"
      y1="12"
      x2="23"
      y2="12"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Line
      x1="4.22"
      y1="19.78"
      x2="5.64"
      y2="18.36"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Line
      x1="18.36"
      y1="5.64"
      x2="19.78"
      y2="4.22"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

// Clock Icon
export const ClockIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} fill="none" />
    <Polyline
      points="12 6 12 12 16 14"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Moon Icon
export const MoonIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

// MessageSquare Icon
export const MessageSquareIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Path
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

// Heart Icon
export const HeartIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

// TrendingUp Icon
export const TrendingUpIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Polyline
      points="23 6 13.5 15.5 8.5 10.5 1 18"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Polyline
      points="17 6 23 6 23 12"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Users Icon
export const UsersIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Path
      d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"

    />
    <Circle cx="9" cy="7" r="4" strokeWidth={strokeWidth} fill="none" />
    <Path
      d="M23 21v-2a4 4 0 0 0-3-3.87"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M16 3.13a4 4 0 0 1 0 7.75"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

// Target Icon
export const TargetIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} />
    <Circle cx="12" cy="12" r="6" strokeWidth={strokeWidth} />
    <Circle cx="12" cy="12" r="2" strokeWidth={strokeWidth} />
  </Svg>
);

// CheckCircle Icon
export const CheckCircleIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Path
      d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Polyline
      points="22 4 12 14.01 9 11.01"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Arrow Right Icon
export const ArrowRightIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Line
      x1="5"
      y1="12"
      x2="19"
      y2="12"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Polyline
      points="12 5 19 12 12 19"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Star Icon (for ratings and special indicators)
export const StarIcon: React.FC<IconProps> = ({
  color = "#000000",
  size = 24,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
  >
    <Polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
