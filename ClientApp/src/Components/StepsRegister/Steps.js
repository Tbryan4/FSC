import React, { useState } from "react";
import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";
import register from "../../assets/register.jpg"
import register2 from "../../assets/register-program.jpg"
import register3 from "../../assets/register-skate.jpg"
import {Typography} from "@material-tailwind/react";

const slideVariants = {
    hidden: {
        opacity: 0,
        height: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        height: "auto",
        y: 0,
    },
};

const Layout423Defaults = {
    features: [
        {
            tagline: "Step 1",
            url: "#",
            heading: "View Programs",
            description:
                "Find which program is the best fit for your skater’s training!",
            image: {
                src: register,
                alt: "Placeholder image 1",
            },
            button: {
                variant: "link",
                size: "link",
                iconRight: <RxChevronRight />,
            },
        },
        {
            tagline: "Step 2",
            url: "/schedule",
            heading: "View Schedule",
            description:
                "Secure your spot in the program of your choice!",
            image: {
                src: register3,
                alt: "Placeholder image 3",
            },
            button: {
                variant: "link",
                size: "link",
                iconRight: <RxChevronRight />,
            },
        },
        {
            tagline: "Step 3",
            url: "https://www.federationskatingclub.ca/registration/",
            heading: "Register for Program",
            description:
                "Decide which rink and time works for you!\n",
            image: {
                src: register2,
                alt: "Placeholder image 2",
            },
            button: {
                variant: "link",
                size: "link",
                iconRight: <RxChevronRight />,
            },
        },

    ],
};

const Layout423 = (props) => {
    const { tagline, heading, description, features } = {
        ...Layout423Defaults,
        ...props,
    };

    const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState(null);

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto mb-10 text-center">
                <Typography
                    color="blue-gray"
                    className="mb-2 font-bold uppercase"
                >
                    Where To
                </Typography>
                <Typography
                    color="blue-gray"
                    className="mb-4 !text-2xl font-bold lg:!text-4xl"
                >
                    Get Started
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto max-w-lg !text-gray-500"
                >

                    To get started, simply follow three easy steps: first, explore our range of skating programs designed for all skill levels; next, check the schedule to find the perfect time; and finally, register for the program that suits you best. We can't wait to see you on the ice!
                </Typography>
            </div>
            <div className="container">
                <div className="mx-auto w-full max-w-lg text-center md:mb-18 lg:mb-40">
                    <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                    <h2 className=" text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
                    <p className="md:text-md">{description}</p>
                </div>
                <div className="flex flex-col items-stretch justify-between gap-6 md:gap-8 lg:flex-row">
                    {features.map((feature, index) => (
                        <motion.a
                            key={index}
                            href={feature.url}
                            className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
                            onMouseEnter={() => setHoveredFeatureIdx(index)}
                            onMouseLeave={() => setHoveredFeatureIdx(null)}
                        >
                            <div
                                className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
                                <div className="absolute inset-0 bg-black/50"/>
                                <img
                                    src={feature.image.src}
                                    alt={feature.image.alt}
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
                                <div
                                    className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50"/>
                                <div className="z-10">
                                    <p className="mb-2 font-semibold text-text-alternative">{feature.tagline}</p>
                                    <h3 className="text-2xl font-bold text-text-alternative md:text-3xl md:leading-[1.3] lg:text-4xl">
                                        {feature.heading}
                                    </h3>
                                </div>
                                <AnimatePresence>
                                    {hoveredFeatureIdx === index && (
                                        <motion.div
                                            className="z-10 hidden lg:block lg:w-[340px]"
                                            variants={slideVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            transition={{duration: 0.3, ease: "easeInOut"}}
                                        >
                                            <p className="mt-5 text-text-alternative md:mt-6">{feature.description}</p>
                                            <div className="mt-6 md:mt-8">
                                                <Button
                                                    variant={feature.button.variant}
                                                    size={feature.button.size}
                                                    iconRight={feature.button.iconRight}
                                                    iconLeft={feature.button.iconLeft}
                                                    className="text-text-alternative"
                                                >
                                                    Learn More
                                                </Button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <div className="lg:hidden">
                                    <p className="mt-5 text-text-alternative md:mt-6">{feature.description}</p>
                                    <div className="mt-6 md:mt-8">
                                        <Button
                                            variant={feature.button.variant}
                                            size={feature.button.size}
                                            iconRight={feature.button.iconRight}
                                            iconLeft={feature.button.iconLeft}
                                            className="text-text-alternative"
                                        >
                                            Button
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export {Layout423, Layout423Defaults};
