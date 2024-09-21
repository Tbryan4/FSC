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
        <div className="relative min-h-[80vh]">
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
                <TabsList
                    className="absolute bottom-12 left-0 right-0 top-auto z-20 mx-auto flex justify-center gap-2 px-2 sm:gap-4 sm:px-[5vw] md:bottom-16 lg:bottom-20 lg:max-w-xl">
                    {tabs.trigger.map((trigger, index) => (
                        <TabsTrigger
                            key={index}
                            value={trigger.value}
                            onClick={() => setActiveTab(trigger.value)}
                            className="relative flex-1 min-w-0 whitespace-normal border-0 bg-transparent px-2 py-2 text-center text-sm text-neutral-light duration-0 data-[state=active]:bg-transparent data-[state=active]:text-neutral-white sm:px-4 sm:py-4 sm:text-base"
                        >
                            <span>{trigger.text}</span>
                            <div className="absolute inset-0 top-auto h-1 w-full bg-white/20">
                                <motion.div
                                    className="h-full bg-white"
                                    initial={{width: "0%"}}
                                    animate={{width: activeTab === trigger.value ? "100%" : "0%"}}
                                    transition={{
                                        duration: activeTab === trigger.value ? 10 : 0.3, // 10 seconds for expanding, 0.3 seconds for collapsing
                                        ease: "easeInOut", // use the same easing for both transitions
                                    }}
                                />
                            </div>

                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
        </div>

    );
};

const TabContent = ({heading, description, buttons, image}) => {
    return (
        <div className="flex h-[80vh] flex-col items-center justify-center"> {/* Updated height */}
            <div className="px-[5%] py-16 md:py-24 lg:py-28">
                <motion.div
                    className="mx-auto max-w-lg text-center"
                    initial={{y: "20%", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: "-20%", opacity: 0}}
                    transition={{duration: 0.4, ease: "easeOut"}}
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
                <motion.div
                    className="absolute inset-0 bg-black"
                    initial={{opacity: 1}}  // Start fully opaque (black)
                    animate={{opacity: 0}}  // Fade out to reveal the image
                    exit={{opacity: 1}}     // Fade back to black on exit
                    transition={{duration: 0.5}}  // Control the duration of the fade
                />

                {/* Image fade */}
                <motion.img
                    className="size-full object-cover"
                    src={image.src}
                    alt={image.alt}
                    initial={{opacity: 0}}  // Image starts invisible
                    animate={{opacity: 1}}  // Fade in the image to full visibility
                    exit={{opacity: 0}}     // Fade out the image on exit
                    transition={{duration: 0.5}}  // Control the duration of the fade-in and fade-out
                />
            </div>
</div>
)
    ;
};

const HomeBannerDefaults = {
    defaultTabValue: "tab-one",
    autoSwitchInterval: 10000, // 5 seconds interval for auto-switch
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
                    alt: "Banner Img 1",
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
                    alt: "Banner Img 2",
                },
            },
            {
                value: "tab-three",
                heading: "Upcoming Competition on November 9, 2024",
                description:
                    "Join us on November 9th for a Star 1-3 competition! We will host many events including FreeSkate Programs, FreeSkate Elements, Team Elements, and Dance!",
                image: {
                    src: img3,
                    alt: "Banner Img 3",
                },
            },
            {
                value: "tab-four",
                heading: "Now offering Thursday Learn To Skate sessions!",
                description:
                    "Masked-only sessions at 2 pm and regular sessions at 3 pm. Excited to see everyone on the ice!",
                image: {
                    src: img4,
                    alt: "Banner Img 4",
                },
            },
        ],
    },
};

export default HomeBanner;
