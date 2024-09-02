import {
    Button
} from "@material-tailwind/react";
import {motion } from "framer-motion";
const ScrollingBannerDefaults = {
    heading: "Medium length hero heading goes here",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    buttons: [{ title: "Button" }],
};


export const ScrollingBanner = (props) => {
    const { heading, description, buttons, images } = {
        ...ScrollingBannerDefaults,
        ...props,
    };

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    return (
        <section className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0">
            <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
                <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
                <p className="md:text-lg">{description}</p>
                <div className="mt-6 flex gap-x-4 md:mt-8">
                    {buttons.map((button, index) => (
                        <Button className="btn-12" variant="gradient" size="md" color="red" key={index} {...button}>
                            {button.title}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
                <div className="grid w-full grid-cols-2 gap-x-4">
                    <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
                        {images.slice(0, 3).map((image, index) => (
                            <motion.div
                                key={index}
                                className="grid size-full grid-cols-1 gap-4"
                                initial="hidden"
                                animate="visible"
                                variants={fadeInVariants}
                            >
                                <div className="relative w-full pt-[120%]">
                                    <img
                                        className="absolute inset-0 size-full object-cover"
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
                        {images.slice(3).map((image, index) => (
                            <motion.div
                                key={index}
                                className="grid size-full grid-cols-1 gap-4"
                                initial="hidden"
                                animate="visible"
                                variants={fadeInVariants}
                            >
                                <div className="relative w-full pt-[120%]">
                                    <img
                                        className="absolute inset-0 size-full object-cover"
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
