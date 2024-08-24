import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";

const GoogleCalendarTabs = (props) => {
    const { tagline, heading, description, defaultValue, tabs } = {
        ...GoogleCalendarTabsDefaults,
        ...props,
    };

    const [activeTab, setActiveTab] = useState(defaultValue);
    const MotionTabsContent = motion(TabsContent);

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="container mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
                    <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                    <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
                    <p className="md:text-md">{description}</p>
                    <p className="mt-4 md:text-md">
                        Download our calendar using our{" "}
                        <a
                            style={{ color: 'red' }}
                            href="https://calendar.google.com/calendar/ical/federationskating@gmail.com/public/basic.ics"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ICal
                        </a>{" "}
                        link.
                    </p>                </div>
                <div className="relative">
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <div className="overflow-x-auto">
                            <TabsList className="flex whitespace-nowrap">
                                {tabs.map((tab, index) => (
                                    <TabsTrigger
                                        key={index}
                                        value={tab.value}
                                        className={`flex-shrink-0 px-4 py-2 text-md font-bold leading-[1.4] duration-0 
                                        ${activeTab === tab.value ? "bg-red-500 text-white border-b-2 border-red-500" : "bg-background-primary text-text-primary"}
                                        md:items-center md:justify-center md:px-8 md:py-6 md:text-xl`}
                                    >
                                        {tab.trigger}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>
                        <AnimatePresence initial={false}>
                            {tabs.map((tab) => (
                                <MotionTabsContent
                                    key={tab.value}
                                    value={tab.value}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: activeTab === tab.value ? 1 : 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                >
                                    <FeatureCard tab={tab} />
                                </MotionTabsContent>
                            ))}
                        </AnimatePresence>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ tab }) => {
    return (
        <div className="p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <iframe
                    src={tab.content.iframeSrc}
                    className="w-full h-80 md:h-[450px] lg:h-[600px] border-0"
                    title={tab.content.iframeTitle}
                    allowFullScreen
                ></iframe>
            </motion.div>
        </div>
    );
};

const GoogleCalendarTabsDefaults = {
    tagline: "Tagline",
    heading: "Fall and Winter 2024 Schedule",
    description:
        "August Learn to Skate Registration is Open\n" +
        " \n" +
        "Schedule is available under the 'Schedule' tab.\n" +
        " \n" +
        "Fall & Winter Registration is Open",
    defaultValue: "tab-1",
    tabs: [
        {
            value: "tab-1",
            trigger: "StarSkate",
            content: {
                iframeSrc: "https://calendar.google.com/calendar/u/0/embed?src=federationskating@gmail.com&ctz=America/Edmonton&pli=1",
                iframeTitle: "Calendar 1",
            },
        },
        {
            value: "tab-2",
            trigger: "CanSkate",
            content: {
                iframeSrc: "https://calendar.google.com/calendar/u/0/embed?src=federationskating@gmail.com&ctz=America/Edmonton&pli=1",
                iframeTitle: "Calendar 2",
            },
        },
        {
            value: "tab-3",
            trigger: "Adult CanSkate",
            content: {
                iframeSrc: "https://calendar.google.com/calendar/u/0/embed?src=federationskating@gmail.com&ctz=America/Edmonton&pli=1",
                iframeTitle: "Calendar 3",
            },
        },
        {
            value: "tab-4",
            trigger: "Senior StarSkate",
            content: {
                iframeSrc: "https://calendar.google.com/calendar/u/0/embed?src=federationskating@gmail.com&ctz=America/Edmonton&pli=1",
                iframeTitle: "Calendar 4",
            },
        },
        {
            value: "tab-5",
            trigger: "Adult CanPower",
            content: {
                iframeSrc: "https://calendar.google.com/calendar/u/0/embed?src=federationskating@gmail.com&ctz=America/Edmonton&pli=1",
                iframeTitle: "Calendar 5",
            },
        },
        {
            value: "tab-6",
            trigger: "Pre CanSkate",
            content: {
                iframeSrc: "https://calendar.google.com/calendar/u/0/embed?src=federationskating@gmail.com&ctz=America/Edmonton&pli=1",
                iframeTitle: "Calendar 6",
            },
        },
        {
            value: "tab-7",
            trigger: "Other Star Skate",
            content: {
                iframeSrc: "https://calendar.google.com/calendar/u/0/embed?src=federationskating@gmail.com&ctz=America/Edmonton&pli=1",
                iframeTitle: "Calendar 6",
            },
        },
        {
            value: "tab-8",
            trigger: "Other Events",
            content: {
                iframeSrc: "https://calendar.google.com/calendar/u/0/embed?src=federationskating@gmail.com&ctz=America/Edmonton&pli=1",
                iframeTitle: "Calendar 6",
            },
        },
        // Additional tabs can be added here
    ],
};

export default GoogleCalendarTabs;
