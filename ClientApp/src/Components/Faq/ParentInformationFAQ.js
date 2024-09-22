import {
    Accordion,
    AccordionTrigger,
    AccordionContent,
    AccordionItem,
} from "@relume_io/relume-ui";
import { RxPlus } from "react-icons/rx";
import React, { useState } from "react";

const ParentInformationFAQ = ({
                                  heading = "FAQs",
                                  questions = [
                                      {
                                          title: "Question text goes here",
                                          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                                      },
                                      {
                                          title: "Question text goes here",
                                          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                                      },
                                      // Additional questions...
                                  ],
                              }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="relume" className="px-[5%] py-16">
            <div className="container">
                <div className="container mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
                    <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        {heading}
                    </h2>
                </div>
                <Accordion type="single" collapsible className="grid w-full grid-cols-1 items-start gap-x-8 gap-y-4 md:grid-cols-2">
                    {questions.map((question, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border border-border-primary px-5 md:px-6"
                        >
                            <AccordionTrigger
                                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                                onClick={() => handleToggle(index)}
                                icon={<RxPlus className="size-7 shrink-0 p-1 text-text-primary transition-transform duration-300 md:size-8" />}
                            >
                                {question.title}
                            </AccordionTrigger>
                            <AccordionContent className="md:pb-6 text-xl text-left">
                                {openIndex === index && <>{question.answer}</>}
                            </AccordionContent>

                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default ParentInformationFAQ;
