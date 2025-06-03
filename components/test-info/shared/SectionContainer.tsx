import React, { forwardRef } from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  withDecorations?: boolean;
}

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  ({ children, id, className = "", withDecorations = false }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`py-20 md:py-28 bg-background relative overflow-hidden ${className}`}
      >
        {withDecorations && (
          <>
            <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full opacity-50 translate-x-1/3"></div>
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full opacity-50 -translate-x-1/3"></div>
          </>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {children}
        </div>
      </section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
