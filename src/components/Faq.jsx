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
    <div className="flex w-auto h-[73px] flex-col justify-center text-offwhite font-spacegrotesk text-[2rem] sm:text-[3.7rem] font-normal leading-[60px]">
      FAQs
    </div>
    <div className="flex w-auto h-auto flex-col justify-center text-[#A1A1A1] font-spacemono font-medium leading-[28px]">
      (4)
    </div>
  </div>
));

const FaqAccordion = memo(() => (
  <Accordion type="single" className="w-full text-red-50 " collapsible>
    {faqs.map((item) => (
      <AccordionItem key={item.id} value={`item-${item.id}`} className="w-full">
        <AccordionTrigger className="w-full text-[1.25rem] sm:text-[1.5rem] font-spacegrotesk text-left">
          {item.question}
        </AccordionTrigger>
        <AccordionContent className="w-full text-[1rem] sm:text-[1.1rem] text-[#A0A0A0] font-spacemono text-left">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
));
const Faq = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mx-auto bg-black max-w-[91.467%] sm:max-w-[93.194%] select-none">
        <div className="flex py-9 px-4 sm:px-[46px] justify-between items-end border-r border-l border-r-edge border-l-edge">
          <div className="flex w-full h-auto flex-col items-start gap-[37px] flex-shrink-0">
            <FaqHeader />
            <div className="w-full text-[#A0A0A0] font-spacemono text-[1rem]">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Faq;
