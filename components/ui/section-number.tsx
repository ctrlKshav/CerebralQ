import React from "react";

interface SectionNumberProps {
  number: number;
  className?: string;
}

const SectionNumber = ({ number, className = "" }: SectionNumberProps) => {
  return (
    <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-bold shadow ${className}`}>
      {number}
    </div>
  );
};

export default SectionNumber;
