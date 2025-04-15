import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  highlightWord?: string;
  titleClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  className = "",
  highlightWord,
  titleClassName = "",
}) => {
  // Function to render title with optional highlighted word
  const renderTitle = () => {
    if (!highlightWord) return title;

    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="relative z-10 text-primary">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`text-center mb-16 ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-6 relative inline-block ${titleClassName}`}>
        {renderTitle()}
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary/20 -rotate-1 transform translate-y-2 z-0"></div>
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader; 