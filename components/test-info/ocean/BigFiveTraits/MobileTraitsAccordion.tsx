import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TraitContent from "./TraitContent";
import TraitIcon from "./TraitIcon";
import { Trait } from "@/types/tests/ocean/test-info";

interface MobileTraitsAccordionProps {
  traits: Trait[];
}

const MobileTraitsAccordion = ({ traits }: MobileTraitsAccordionProps) => {
  return (
    <div className="mb-10">
      <Accordion type="single" collapsible className="space-y-4">
        {traits.map((trait, index) => (
          <div key={index}>
            <AccordionItem 
              value={trait.name}
              className="bg-card rounded-xl shadow-sm border border-muted overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <AccordionTrigger 
                className={`${trait.gradient} text-white px-6 py-4 hover:no-underline`}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-md bg-white/20 flex items-center justify-center mr-3">
                    <TraitIcon traitName={trait.name} size={16} className="text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-base">{trait.name}</h3>
                    <p className="text-xs font-normal opacity-90">{trait.tagline}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent 
                className="px-4 py-6 overflow-hidden"
              >
                <div className="content-wrapper">
                  <TraitContent trait={trait} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default MobileTraitsAccordion;
