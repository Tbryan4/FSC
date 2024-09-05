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
                "We are conveniently located very centrally in the city for most of our skating days. On Thursdays, Fridays, and Sundays you can find us at Tipton Arena. On Tuesdays, we skate at SouthSide Arena. And on Saturdays, we skate at Kinsmen Twin Arenas (111st and 23rd ave).",
        },
        {
            title: "Where can I find the Schedule?",
            answer: (
                <>
                    Here is the link to the schedule:{" "}
                    <a
                        href="/schedule"
                        className="text-blue-500 underline"
                    >
                        Schedule
                    </a>. You will find a Google Calendar and iCal options to keep track of the session times.
                    Reminder that you can only attend the specific day you registered for!
                </>
            ),
        },

        {
            title: "What are the equipment requirements for CanSkate",
            answer: (
                <>
                    <ul className="list-disc list-inside">
                        <li>Skates</li>
                        <li>CSA-approved hockey helmet</li>
                        <li>Long pants</li>
                        <li>Mittens</li>
                        <li>Warm sweater or jacket</li>
                    </ul>
                    <p className="mt-2">
                        For skates, the most important aspect is good ankle support and appropriate size.{" "}
                        <a
                            href="https://unitedsport.ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            United Cycle
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://www.proskate.ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            ProSkate
                        </a>{" "}
                        are great stores to learn about skates, get expert advice, and get skate sharpenings. 111 Street Skate Sharpening does an excellent job for regular skate sharpenings.
                    </p>
                    <p className="mt-2">
                        Find more information here:{" "}
                        <a
                            href="/ltsparentinformation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            Learn to Skate Parent Info Page
                        </a>.
                    </p>
                </>
            ),
        },


        {
            title: "What are the equipment requirements for StarSkate",
            answer: (
                <>
                    <ul className="list-disc list-inside">
                        <li>
                            A pair of figure skates with strong ankle support — you should not be able to bend the ankle with your hands!
                        </li>
                        <li>Yoga mat and running shoes for off-ice training</li>
                        <li>
                            Dress comfortably and safely for both on-ice and off-ice training. Avoid any clothing that may accidentally get hooked on something.
                        </li>
                    </ul>
                </>
            ),
        },

        {
            title: "Where do I find the cost of programs?",
            answer: (
                <>
                    <ul className="list-disc list-inside">
                        <li>
                            Cost varies per program. Please find a breakdown for each session on our{" "}
                            <a
                                href="https://www.federationskatingclub.ca/registration/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                registration page
                            </a>.
                        </li>
                        <li>
                            The cost of the class applies only to the specific day listed!
                        </li>
                        <li>
                            For StarSkate and IFS programs, the cost includes group programming such as off-ice and stroking but does <strong>NOT</strong> include coaching fees for additional lessons.
                        </li>
                    </ul>
                </>
            ),
        },

        {
            title: "Do you have adult programming?",
            answer:
                "We offer a broad range of adult programming! There is something for every level of learning and interest. Learn to Skate for those beginning their skating journey. Intro to Figure Skating for those building basic skating skills but interested in getting exposure to figure skating skills. StarSkate is for those with some figure skating experience and who are interested in expanding that skill set through focused private and semi-private lessons. Lastly, we offer group CanPower lessons for those looking to augment hockey and ringette skills through power and edge training.",
        },
        {
            title: "What can I expect for a first-time skater?",
            answer: (
                <>
                    <ul className="list-disc list-inside">
                        <li>
                            When you arrive at the rink (~15m before class begins), you should see a table with nametags. Retrieve your skater’s name tag (e.g., John Doe, Saturday CanSkate 2).
                        </li>
                        <li>
                            If your skater’s name is not at the table, please let a coach know so we can have one ready for the next class.
                        </li>
                        <li>
                            Check the rink boards for the dressing room assigned to your class.
                        </li>
                        <li>
                            Coaches will prompt skaters onto the ice surface when class is ready to begin.
                        </li>
                        <li>
                            During class, skaters will be assigned a group for the session. Please be patient for the first one to two classes as we are assessing skaters, assigning them to the correct group, and helping first-time skaters adjust to the new environment.
                        </li>
                        <li>
                            At the end of class, meet your skater in the dressing rooms and return their nametag to the table at the front.
                        </li>
                    </ul>
                </>
            ),
        }

    ],
    footerHeading: "Still have questions?",
    footerDescription: "Don't hesitate to get in touch with us for more details.",
    button: {
        title: "Contact Us",
        variant: "secondary",
    },
};
