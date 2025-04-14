
import TraitSvgIcon from "./TraitSvgIcon";
import { ChevronRight } from "lucide-react";
import { traits } from "@/data/test-info/ocean/traits";

interface TraitSidebarProps {
  isSectionInView: boolean;
  scrollToSection: (index: number) => void;
  activeTraitIndex: number;
}
const TraitSidebar = ({
  isSectionInView,
  scrollToSection,
  activeTraitIndex,
}: TraitSidebarProps) => {
  return (
    <div
      className={`hidden lg:block transition-all duration-500 ${
        isSectionInView
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="fixed top-1/2 left-10 transform -translate-y-1/2 z-20 w-72 max-w-[32vw]">
                <div className="bg-card rounded-lg shadow-md p-4 border border-muted transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3 px-1">
                    Explore Traits:
                  </h3>
                  <div className="flex flex-col space-y-1.5">
                    {traits.map((trait, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(index)}
                        className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 
                          ${
                            activeTraitIndex === index
                              ? `${trait.gradient} text-white shadow-sm`
                              : "hover:bg-muted/80 text-card-foreground"
                          }`}
                      >
                        <div
                          className={`mr-4 flex items-center justify-center w-10 h-10 rounded-md text-white transition-all duration-200
                    ${activeTraitIndex === index ? `  bg-white/20` : `${trait.gradient}`}
                    `}
                        >
                          <TraitSvgIcon
                            traitName={trait.name}
                            size={20}
                            className="text-white"
                          />
                        </div>
                        <span className="font-medium">{trait.name}</span>
                        {activeTraitIndex === index && (
                          <div className="ml-auto">
                            <ChevronRight className="h-4 w-4" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
      </div>
    </div>
  );
};

export default TraitSidebar;