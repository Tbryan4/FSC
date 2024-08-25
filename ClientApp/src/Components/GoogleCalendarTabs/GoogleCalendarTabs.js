import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";

const GoogleCalendarTabs = (props) => {
    const { tagline, heading, description, defaultValue, tabs } = {
        ...GoogleCalendarTabsDefaults,
        ...props,
    };

    const [activeTab, setActiveTab] = useState(defaultValue);
    const [isMobile, setIsMobile] = useState(false);
    const MotionTabsContent = motion(TabsContent);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Check initial window size
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="container mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
                    <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                    <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
                    <p className="md:text-md">{description}</p>
                </div>
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
                                    <FeatureCard tab={tab} isMobile={isMobile} />
                                </MotionTabsContent>
                            ))}
                        </AnimatePresence>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ tab, isMobile }) => {
    const iframeSrc = isMobile ? `${tab.content.iframeSrc}&mode=AGENDA` : tab.content.iframeSrc;

    return (
        <div className="p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <iframe
                    src={iframeSrc}
                    className="w-full h-80 md:h-[450px] lg:h-[600px] border-0"
                    title={tab.content.iframeTitle}
                    allowFullScreen
                ></iframe>
                {tab.content.ical && (
                    <div>
                        {tab.content.category && (
                            <p className="mt-2 md:text-md">
                                Download the {tab.content.category}{" "}
                                <a
                                    style={{ color: 'red' }}
                                    href={tab.content.ical}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    iCal
                                </a>{" "}
                                link.
                            </p>
                        )}
                    </div>
                )}
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
                iframeSrc: "https://calendar.google.com/calendar/embed?src=federationskating%40gmail.com&ctz=America%2FEdmonton",
                iframeTitle: "Calendar 1",
                ical: "https://calendar.google.com/calendar/ical/federationskating%40gmail.com/public/basic.ics",
                category: "StarSkate",
            },
        },
        {
            value: "tab-2",
            trigger: "Learn To Skate",
            content: {
                iframeSrc: "https://calendar.google.com/calendar/embed?src=a22668c2091cb38b7053b4db1a64bb3d3e993a0e9f6080beffb9abaae835cf85%40group.calendar.google.com&ctz=America%2FEdmonton",
                iframeTitle: "Calendar 2",
                ical: "https://calendar.google.com/calendar/ical/a22668c2091cb38b7053b4db1a64bb3d3e993a0e9f6080beffb9abaae835cf85%40group.calendar.google.com/public/basic.ics",
                category: "Learn To Skate",
            },
        },
        {
            value: "tab-3",
            trigger: "Intro to Figure Skating",
            content: {
                iframeSrc: "https://calendar.google.com/calendar/embed?src=0c4f1b78e382d2c7b92d84ea6c9e70fd2faa4f2957bde7d71594897feedb642e%40group.calendar.google.com&ctz=America%2FEdmonton",
                iframeTitle: "Calendar 3",
                ical: "https://calendar.google.com/calendar/ical/0c4f1b78e382d2c7b92d84ea6c9e70fd2faa4f2957bde7d71594897feedb642e%40group.calendar.google.com/public/basic.ics",
                category: "Intro to Figure Skating",
            },
        },
        {
            value: "tab-4",
            trigger: "CanPower",
            content: {
                iframeSrc: "https://calendar.google.com/calendar/embed?src=78fb86290132d6eebf5420b417b0ed635e9bc25a45700635dd7543cf2102b2f1%40group.calendar.google.com&ctz=America%2FEdmonton",
                iframeTitle: "Calendar 4",
                ical: "https://calendar.google.com/calendar/ical/78fb86290132d6eebf5420b417b0ed635e9bc25a45700635dd7543cf2102b2f1%40group.calendar.google.com/public/basic.ics",
                category: "CanPower",
            },
        },
    ],
};

export default GoogleCalendarTabs;
