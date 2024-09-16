"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@relume_io/relume-ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";

import img1 from '../../assets/carousel-banner-images/index-carosel-img-one.webp';
import img2 from '../../assets/carousel-banner-images/index-carosel-img-two.webp';
import img3 from '../../assets/carousel-banner-images/index-carosel-img-three.webp';
import img4 from '../../assets/carousel-banner-images/index-carosel-img-four.webp';

const HomeBanner = (props) => {
    const { defaultTabValue, tabs, autoSwitchInterval } = {
        ...HomeBannerDefaults,
        ...props,
    };

    const [activeTab, setActiveTab] = useState(defaultTabValue);

    // Automatically switch tabs after a specified interval
    useEffect(() => {
        const currentIndex = tabs.trigger.findIndex((tab) => tab.value === activeTab);
        const nextIndex = (currentIndex + 1) % tabs.trigger.length;

        const timer = setTimeout(() => {
            setActiveTab(tabs.trigger[nextIndex].value);
        }, autoSwitchInterval);

        return () => clearTimeout(timer); // Cleanup the timer on unmount or when activeTab changes
    }, [activeTab, tabs.trigger, autoSwitchInterval]);

    return (
        <section>
            <div className="relative min-h-[80vh]"> {/* Updated height */}
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <AnimatePresence initial={false}>
                        {tabs.content.map(
                            (content, index) =>
                                content.value === activeTab && (
                                    <TabsContent
                                        key={index}
                                        value={content.value}
                                        className="relative max-h-[40rem] min-h-[80vh] overflow-visible" // Smaller height
                                    >
                                        <TabContent {...content} />
                                    </TabsContent>
                                ),
                        )}
                    </AnimatePresence>
                    <TabsList className="absolute bottom-12 left-0 right-0 top-auto z-20 mx-auto flex justify-center gap-4 px-[5vw] md:bottom-16 lg:bottom-20 lg:max-w-xl">
                        {tabs.trigger.map((trigger, index) => (
                            <TabsTrigger
                                key={index}
                                value={trigger.value}
                                onClick={() => setActiveTab(trigger.value)}
                                className="relative flex-1 whitespace-normal border-0 bg-transparent px-4 py-4 text-center text-neutral-light duration-0 data-[state=active]:bg-transparent data-[state=active]:text-neutral-white sm:px-8 md:min-w-32"
                            >
                                <span>{trigger.text}</span>
                                <div className="absolute inset-0 top-auto h-1 w-full bg-white/20">
                                    <motion.div
                                        className="h-full bg-white"
                                        initial={{ width: "0%" }}
                                        animate={{ width: activeTab === trigger.value ? "100%" : "0%" }}
                                        transition={{
                                            duration: activeTab === trigger.value ? 1.5 : 0.3,
                                            ...(activeTab === trigger.value
                                                ? {
                                                    type: "spring",
                                                    stiffness: 25,
                                                    damping: 30,
                                                }
                                                : { ease: "easeInOut" }),
                                        }}
                                    />
                                </div>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>
        </section>
    );
};

const TabContent = ({ heading, description, buttons, image }) => {
    return (
        <div className="flex h-[80vh] flex-col items-center justify-center"> {/* Updated height */}
            <div className="px-[5%] py-16 md:py-24 lg:py-28">
                <motion.div
                    className="mx-auto max-w-lg text-center"
                    initial={{ y: "20%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-20%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                        {heading}
                    </h1>
                    <p className="text-text-alternative md:text-md">{description}</p>
                    <div className="h-carousel-buttons d-flex justify-content-center">
                        {buttons && buttons.length > 0 && (
                            buttons.map((button, index) => (
                                <a key={index} href={button.href}>
                                    <Button key={index} {...button}>
                                        {button.title}
                                    </Button>
                                </a>
                            ))
                        )}
                    </div>
                </motion.div>
            </div>
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 z-10 bg-black/50"/>
                <motion.img
                    className="size-full object-cover"
                    src={image.src}
                    alt={image.alt}
                    initial={{ opacity: 0 }}   // Initial fade-in state
                    animate={{ opacity: 1 }}   // Fade in to full opacity
                    exit={{ opacity: 0 }}      // Fade out when switching
                    transition={{ duration: 0.8 }}  // Control the duration of the fade-in
                />
            </div>
        </div>
    );
};

const HomeBannerDefaults = {
    defaultTabValue: "tab-one",
    autoSwitchInterval: 5000, // 5 seconds interval for auto-switch
    tabs: {
        trigger: [
            {
                value: "tab-one",
                text: "Welcome To The Club",
            },
            {
                value: "tab-two",
                text: "Schedule",
            },
            {
                value: "tab-three",
                text: "Competition",
            },
            {
                value: "tab-four",
                text: "Skate Sessions",
            },
        ],
        content: [
            {
                value: "tab-one",
                heading: "Welcome To Federation Skating Club",
                description:
                "Registration is open for Fall and Winter! Spots are filling fast! Find the program that suits you best under our Program tab",
                buttons: [{
                    title: "See More" ,
                    href: "#program-section"

                }],
                image: {
                    src: img1,
                    alt: "Relume placeholder image 1",
                },
            },
            {
                value: "tab-two",
                heading: "Check Out Our Fall and Winter Schedule",
                description:
                    "We are skating Tuesday, Thursday, Friday, Saturday, and Sunday. Definitely an option for you!",
                buttons: [{ title: "See More", href: "/schedule" }],
                image: {
                    src: img2,
                    alt: "Relume placeholder image 2",
                },
            },
            {
                value: "tab-three",
                heading: "Upcoming Federation Star 1-3 Competition on November 9, 2024",
                description:
                    "Join us on November 9th for a Star 1-3 competition! We will host many events including FreeSkate Programs, FreeSkate Elements, Team Elements, and Dance!",
                image: {
                    src: img3,
                    alt: "Relume placeholder image 3",
                },
            },
            {
                value: "tab-four",
                heading: "Now offering Thursday Learn To Skate sessions!",
                description:
                    "Masked-only sessions at 2 pm and regular sessions at 3 pm. Excited to see everyone on the ice!",
                image: {
                    src: img4,
                    alt: "Relume placeholder image 4",
                },
            },
        ],
    },
};

export default HomeBanner;
