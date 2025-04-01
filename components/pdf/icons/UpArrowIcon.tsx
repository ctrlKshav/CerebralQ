import React from "react";
import { Svg, Path } from "@react-pdf/renderer";
import { PDFIconProps } from "./types";

const UpArrowIcon: React.FC<PDFIconProps> = ({ color, size = 16 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 19V5"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M5 12L12 5L19 12"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

export default UpArrowIcon;
