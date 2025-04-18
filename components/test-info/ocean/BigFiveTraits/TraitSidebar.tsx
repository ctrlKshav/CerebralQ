import { useEffect, useState } from "react";
import TraitSvgIcon from "./TraitSvgIcon";
import { ChevronRight } from "lucide-react";
import { traits } from "@/data/test-info/ocean/traits";
import Link from "next/link";

interface TraitSidebarProps {
  isSectionInView: boolean;
  activeTraitIndex: number;
}
const TraitSidebar = ({
  isSectionInView,
  activeTraitIndex,
}: TraitSidebarProps) => {
  // Add state to track animation state
  const [animationVisible, setAnimationVisible] = useState(false);

  // Add a slight delay to prevent flickering
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isSectionInView) {
      // Add delay before showing animations
      timeout = setTimeout(() => {
        setAnimationVisible(true);
      }, 100); // Short delay to prevent flickering
    } else {
      // When hiding, set immediate so exit animations work
      setAnimationVisible(false);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isSectionInView]);

  return (
    <div
      className={`hidden lg:block transition-all duration-500 ${
        isSectionInView ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="fixed top-1/2 left-10 transform -translate-y-1/2 z-20 w-72 max-w-[32vw]">
        <div className="bg-card rounded-lg shadow-md p-4 border border-muted  hover:shadow-lg">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 px-1">
            Explore Traits:
          </h3>
          <div className="flex flex-col space-y-1.5 overflow-hidden">
            {traits.map((trait, index) => (
              <Link
                key={index}
                href={`#trait-${trait.name.toLowerCase()}`}
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-500
                  ${
                    activeTraitIndex === index
                      ? `${trait.gradient} text-white shadow-sm`
                      : "hover:bg-muted/80 text-card-foreground"
                  }
                  transform transition-all origin-left
                  ${
                    animationVisible
                      ? "translate-x-0 translate-y-0 rotate-0 opacity-100"
                      : "translate-x-[-100px] translate-y-[20px] rotate-[-10deg] opacity-0"
                  }
                `}
              >
                <div
                  className={`mr-4 flex items-center justify-center w-10 h-10 rounded-md text-white transition-all duration-500 ${trait.gradient}
                    ${activeTraitIndex === index ? `shadow-md` : `shadow-none`}
                  `}
                >
                  <TraitSvgIcon
                    traitName={trait.name}
                    size={20}
                    className="text-white"
                  />
                </div>
                <span className="font-medium">{trait.name}</span>
                <div
                  className={`ml-auto transition-opacity duration-500 ${activeTraitIndex === index ? "opacity-100" : "opacity-0"}`}
                >
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraitSidebar;
