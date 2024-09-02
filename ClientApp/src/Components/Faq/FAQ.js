import {
    Accordion,
    AccordionTrigger,
    AccordionContent,
    AccordionItem,
} from "@relume_io/relume-ui";

import { RxPlus } from "react-icons/rx";

import {
    Button
} from "@material-tailwind/react";

// Updated Faq component with dummy data
export const Faq = (props) => {
    const { heading, description, questions, footerHeading, footerDescription, button } = {
        ...FaqDefaults,
        ...props,
    };

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="container mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
                    <p className="md:text-md">{description}</p>
                </div>
                <Accordion
                    type="multiple"
                    className="grid w-full grid-cols-1 items-start gap-x-8 gap-y-4 md:grid-cols-2"
                >
                    {questions.map((question, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border border-border-primary px-5 md:px-6"
                        >
                            <AccordionTrigger
                                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                                icon={
                                    <RxPlus className="size-7 shrink-0 p-1 text-text-primary transition-transform duration-300 md:size-8" />
                                }
                            >
                                {question.title}
                            </AccordionTrigger>
                            <AccordionContent className="md:pb-6">{question.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                        {footerHeading}
                    </h4>
                    <p className="md:text-md">{footerDescription}</p>
                    <div className="mt-6 md:mt-8">
                        <a href="/contactus">
                            <Button {...button}>{button.title}</Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const FaqDefaults = {
    heading: "Federation Skating FAQ\n",
    description:
        "Here are some frequently asked questions about our figure skating club. If you need more information, feel free to contact us.",
    questions: [
        {
            title: "Locations",
            answer:
                "To register, visit our website and fill out the registration form. After submission, you will receive an email with further instructions and a link to schedule an evaluation session.",
        },
        {
            title: "Where can I find the schedule instead of can parents watch practices?\n",
            answer:
                "Membership fees vary depending on the program. Please check our 'Programs' section on the website or contact us directly for detailed information about fees and payment options.",
        },
        {
            title: "What are the equipment requirements for CanSkate",
            answer:
                "Yes, we offer private coaching sessions with our experienced coaches. You can book a session by contacting our administration office or speaking directly with one of our coaches.",
        },
        {
            title: "What are the equipment requirements for StarSkate",
            answer:
                "Skaters should wear comfortable, moisture-wicking clothing and appropriate figure skating attire. We recommend a fitted skating outfit, gloves, and proper skating boots. Check our website for a detailed list of recommended gear.",
        },
        {
            title: "Where do I find the cost of programs?",
            answer:
                "Yes, parents are welcome to watch their child's practices from the designated viewing area. We ask that you respect the skaters and coaches by remaining quiet and not interfering with the session.",
        },
        {
            title: "Do you have adult programming?",
            answer:
                "We host several events and competitions throughout the year. You can find a schedule of upcoming events on our website or sign up for our newsletter to receive updates.",
        },
        {
            title: "What can I expect for a first-time skater?",
            answer:
                "We welcome volunteers to help with various activities and events. If you're interested in volunteering, please contact us via email or fill out the volunteer form available on our website.",
        }
    ],
    footerHeading: "Still have questions?",
    footerDescription: "Don't hesitate to get in touch with us for more details.",
    button: {
        title: "Contact Us",
        variant: "secondary",
    },
};
