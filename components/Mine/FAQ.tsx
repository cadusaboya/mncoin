import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   
  export function FAQ() {
    return (
    <div className="px-4 lg:px-20 xl:px-32 md:mx-10 lg:mx-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-gray-600 mt-5">
            Frequently Asked Questions
        </h1>
            <Accordion type="single" collapsible className="mt-5 text-gray-600 text-justify">
                <AccordionItem value="item-1">
                <AccordionTrigger>1. Is this a legal Manganese Ore Mine?</AccordionTrigger>
                <AccordionContent>
                Yes. Eagle currently operates in compliance with all legal documents it needs to mine and sell the ore. We are providing documentation to all potential investors, soon all this info will be available on the whitepaper.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                <AccordionTrigger>2. Is tokenization legal in Brazil?</AccordionTrigger>
                <AccordionContent>
                Yes. Our legal team has taken every necessary step to avoid regulatory issues and ensure distribution of profits back to cryptocurrency in this form of buybacks.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                <AccordionTrigger>3. What will ensure that the team keep working?</AccordionTrigger>
                <AccordionContent>
                We are doxxing and our tokens will all be vested in a smart contract that will be released 
                in stages. This ensures that the team will keep working for the project to succeed long term.
                </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
  }

  export default FAQ;