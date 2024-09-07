"use client";

import jumpstartlogo from "../../assets/jump-start.webp";
import jumpstartvideothumbnail from "../../assets/canadiantire-jumpstart-thumbnail.webp";
import thirdjumpstartbanner from "../../assets/jumpstart-3rd-banner.webp"
import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Typography} from "@material-tailwind/react";

const Jumpstart = (props) => {
    const { tabs } = {
        ...JumpstartDefaults,
        ...props,
    };
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto mb-10 mt-10 text-center lg:mb-20">
                <Typography
                    color="blue-gray"
                    className="mb-2 font-bold uppercase"
                >
                    Support Your Skaters With
                </Typography>
                <Typography
                    color="blue-gray"
                    className="mb-4 !text-2xl font-bold lg:!text-4xl"
                >
                    JumpStart
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto max-w-lg !text-gray-500"
                >
                    Founded in 2005, Jumpstart helps kids overcome financial and accessibility barriers to sport and recreation in an effort to provide inclusive play for kids of all abilities.
                </Typography>
            </div>
            <div className="container grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
                <div
                    className="col-start-1 col-end-2 row-start-1 row-end-2 grid grid-cols-1 items-center gap-x-4 gap-y-10">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={clsx("cursor-pointer pl-8", {
                                "border-l-2 border-black": activeTab === index,
                                "border-l-2 border-transparent": activeTab !== index,
                            })}
                        >
                            <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                {tab.heading}
                            </h3>
                            <p>{tab.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex max-h-full w-full items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait" initial={false}>
                        {tabs.map((tab, index) => {
                            if (activeTab !== index) return null;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.2}}
                                    exit={{opacity: 0}}
                                >
                                    {tab.image && (
                                        <img
                                            src={tab.image.src}
                                            alt={tab.image.alt}
                                            className="size-full object-cover"
                                        />
                                    )}
                                    {tab.video && (
                                        <a
                                            href={tab.video.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative flex w-full items-center justify-center"
                                        >
                                            <img
                                                src={tab.video.image.src}
                                                alt={tab.video.image.alt}
                                                className="size-full object-cover"
                                            />
                                            <Play className="absolute z-20 text-white"/>
                                            <span className="absolute inset-0 z-10 bg-black/50"/>
                                        </a>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export const JumpstartDefaults = {
    tabs: [
        {
            heading: "What Is JumpStart?",
            description:
                "Jumpstart is more than just about getting kids active. It's about giving kids from families in financial need the same chance to participate as their neighbours, their classmates and their friends. Whether it's the chance to try a new sport or to continue with a favourite one, no kid should be left out.",
            image: {
                src: jumpstartlogo,
                alt: "Jumpstart logo",
            },
        },
        {
            heading: "100% of your donation goes directly to helping kids play.",
            description: "Thanks to the generous support of Canadian Tire Corporation, who covers all of Jumpstart's general and administrative expenses, 100% of donations help kids access sport and play.",
            video: {
                image: {
                    src: jumpstartvideothumbnail,
                    alt: "Canadian Tire Jumpstart video thumbnail",
                },
                url: "https://www.youtube.com/embed/glfyoNp0dyw?si=Je78oYrUgtEHrDMG",
            },
        },
        {
            heading: "Empowering The Community",
            description:
            "Giving kids the opportunity to access sport and play is essential for their growth and development, which is why Jumpstart funds a variety of different sports and activities all with the goal of giving all kids the chance to discover their passion.",
            image: {
                src: thirdjumpstartbanner,
                alt: "Placeholder image",
            },
        },
    ],
};

const Play = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={64}
            height={64}
            viewBox="0 0 64 64"
            fill="none"
            {...props}
        >
            <path
                fill="currentColor"
                d="M5.333 32C5.333 17.272 17.273 5.333 32 5.333A26.667 26.667 0 0 1 58.666 32c0 14.728-11.939 26.667-26.666 26.667-14.728 0-26.667-11.94-26.667-26.667ZM27.12 43.413l15.546-9.706a2.027 2.027 0 0 0 0-3.414l-15.6-9.706A2 2 0 0 0 24 22.267v19.466a2 2 0 0 0 3.12 1.68Z"
            />
        </svg>
    );
};

export default Jumpstart;
