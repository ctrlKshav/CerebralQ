import { traits } from "@/data/test-info/ocean/traits";

import TraitSvgIcon from "./TraitSvgIcon";

// Function to render a trait header
const TraitHeader = ({ trait }: { trait: (typeof traits)[0] }) => (
    <div className="bg-card rounded-lg shadow-sm border border-muted overflow-hidden transition-soft hover:border-primary/20 hover:shadow-md h-full">
      {/* Header section with solid color background */}
      <div
        className={`${trait.gradient} text-white p-6 relative overflow-hidden`}
      >
        <div className="absolute right-0 top-0 w-40 h-40 opacity-10">
          <TraitSvgIcon
            traitName={trait.name}
            size={160}
            className="text-white"
          />
        </div>
  
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-14 h-14 rounded-md bg-white/20 flex items-center justify-center">
            <TraitSvgIcon
              traitName={trait.name}
              size={32}
              className="text-white"
            />
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-1">
              {trait.name}
            </h3>
            <p className="text-sm opacity-90">{trait.tagline}</p>
          </div>
        </div>
      </div>
  </div>
);

export default TraitHeader;
