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
    heading: "Figure Skating Club FAQs",
    description:
        "Here are some frequently asked questions about our figure skating club. If you need more information, feel free to contact us.",
    questions: [
        {
            title: "What is the registration process for new skaters?",
            answer:
                "To register, visit our website and fill out the registration form. After submission, you will receive an email with further instructions and a link to schedule an evaluation session.",
        },
        {
            title: "What are the membership fees?",
            answer:
                "Membership fees vary depending on the program. Please check our 'Programs' section on the website or contact us directly for detailed information about fees and payment options.",
        },
        {
            title: "Do you offer private coaching?",
            answer:
                "Yes, we offer private coaching sessions with our experienced coaches. You can book a session by contacting our administration office or speaking directly with one of our coaches.",
        },
        {
            title: "What should my child wear to practice?",
            answer:
                "Skaters should wear comfortable, moisture-wicking clothing and appropriate figure skating attire. We recommend a fitted skating outfit, gloves, and proper skating boots. Check our website for a detailed list of recommended gear.",
        },
        {
            title: "Can parents watch the practices?",
            answer:
                "Yes, parents are welcome to watch their child's practices from the designated viewing area. We ask that you respect the skaters and coaches by remaining quiet and not interfering with the session.",
        },
        {
            title: "Are there any upcoming events or competitions?",
            answer:
                "We host several events and competitions throughout the year. You can find a schedule of upcoming events on our website or sign up for our newsletter to receive updates.",
        },
        {
            title: "How can I volunteer with the club?",
            answer:
                "We welcome volunteers to help with various activities and events. If you're interested in volunteering, please contact us via email or fill out the volunteer form available on our website.",
        },
        {
            title: "What is the cancellation policy for classes?",
            answer:
                "If you need to cancel a class, please inform us at least 24 hours in advance to receive a refund or reschedule. For more details, refer to our cancellation policy on the website.",
        },
        {
            title: "Do you provide equipment for beginners?",
            answer:
                "We provide basic equipment for beginners during their introductory classes. However, skaters are encouraged to invest in their own gear as they progress.",
        },
        {
            title: "Who should I contact for more information?",
            answer:
                "For any additional information, please contact our office at (123) 456-7890 or email us at info@eliteskatingclub.com. We are here to assist you with any questions or concerns.",
        },
    ],
    footerHeading: "Still have questions?",
    footerDescription: "Don't hesitate to get in touch with us for more details.",
    button: {
        title: "Contact Us",
        variant: "secondary",
    },
};
