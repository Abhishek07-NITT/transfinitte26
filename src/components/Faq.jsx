import React, { memo, Suspense } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";

const FaqHeader = memo(() => (
  <div className="flex w-auto h-auto items-start select-none pointer-events-none">
    <div className="flex w-auto h-auto flex-col justify-center text-neutral-900 dark:text-offwhite font-spacegrotesk text-[2rem] sm:text-3xl md:text-4xl lg:text-[3.7rem] font-normal leading-tight transition-colors">
      FAQs
    </div>
    <div className="flex w-auto h-auto flex-col justify-center text-neutral-500 dark:text-[#A1A1A1] font-spacemono font-medium leading-[28px] transition-colors">
      (4)
    </div>
  </div>
));

const FaqAccordion = memo(() => (
  <Accordion type="single" className="w-full text-neutral-900 dark:text-neutral-100" collapsible>
    {faqs.map((item) => (
      <AccordionItem key={item.id} value={`item-${item.id}`} className="w-full border-b border-black/10 dark:border-white/15 transition-colors">
        <AccordionTrigger className="w-full text-[1.1rem] sm:text-[1.25rem] lg:text-[1.5rem] font-spacegrotesk text-left text-neutral-900 dark:text-offwhite hover:text-black dark:hover:text-white transition-colors py-4">
          {item.question}
        </AccordionTrigger>
        <AccordionContent className="w-full text-[0.9rem] sm:text-[1rem] lg:text-[1.1rem] text-neutral-600 dark:text-[#A0A0A0] font-spacemono text-left leading-relaxed transition-colors">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
));

const Faq = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mx-auto bg-white dark:bg-black max-w-[92%] md:max-w-[95%] xl:max-w-[93.194%] select-none transition-colors duration-300">
        <div className="flex py-8 sm:py-12 px-4 sm:px-6 lg:px-[46px] justify-between items-end border-r border-l border-r-edge border-l-edge">
          <div className="flex w-full h-auto flex-col items-start gap-6 lg:gap-[37px] flex-shrink-0">
            <FaqHeader />
            <div className="w-full text-neutral-600 dark:text-[#A0A0A0] font-spacemono text-[1rem]">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Faq;
