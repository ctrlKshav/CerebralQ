import React from 'react';

interface TraitSvgIconProps {
  traitName: string;
  size?: number;
  className?: string;
}

const TraitSvgIcon: React.FC<TraitSvgIconProps> = ({ traitName, size = 24, className = "" }) => {
  // Set the width and height based on size prop
  const dimensions = { width: size, height: size };
  
  // Professional, clean SVG illustrations
  switch(traitName) {
    case "Openness":
      return (
        <svg 
          viewBox="0 0 24 24" 
          {...dimensions}
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12h1m18 0h1M12 2v1m0 18v1M4.93 4.93l.7.7m12.74 12.74l.7.7M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"></path>
          <path d="M12 14.5c-.5-1.5.5-3 2-3s2.5 1 2.5 2m-9 0c0-1 .5-2 2.5-2s2.5 1.5 2 3"></path>
        </svg>
      );
      
    case "Conscientiousness":
      return (
        <svg 
          viewBox="0 0 24 24" 
          {...dimensions}
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 3H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2"></path>
          <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"></path>
          <path d="m9 14 2 2 4-4"></path>
        </svg>
      );
      
    case "Extraversion":
      return (
        <svg 
          viewBox="0 0 24 24" 
          {...dimensions}
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      );
      
    case "Agreeableness":
      return (
        <svg 
          viewBox="0 0 24 24" 
          {...dimensions}
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
        </svg>
      );
      
    case "Neuroticism":
      return (
        <svg 
          viewBox="0 0 24 24" 
          {...dimensions}
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m8 14-4.5 4.5m12.5-4.5 4.5 4.5"></path>
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
          <path d="M9 9h.01M15 9h.01"></path>
        </svg>
      );
      
    default:
      return (
        <svg 
          viewBox="0 0 24 24" 
          {...dimensions}
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      );
  }
};

export default TraitSvgIcon;
