import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TestDetails({ test }) {
  return (
    <Accordion type="single" collapsible className="mb-8">
      <AccordionItem value="scoring">
        <AccordionTrigger>Scoring Method</AccordionTrigger>
        <AccordionContent>{test.scoring_method}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="interpretation">
        <AccordionTrigger>Result Interpretation</AccordionTrigger>
        <AccordionContent>{test.result_interpretation}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="background">
        <AccordionTrigger>Scientific Background</AccordionTrigger>
        <AccordionContent>{test.scientific_background}</AccordionContent>
      </AccordionItem>
      {test.recommended_age_range && (
        <AccordionItem value="age">
          <AccordionTrigger>Recommended Age Range</AccordionTrigger>
          <AccordionContent>{test.recommended_age_range}</AccordionContent>
        </AccordionItem>
      )}
    </Accordion>
  )
}

