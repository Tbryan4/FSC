import React from 'react';
import banner from "../../assets/events-banner-video.mp4";

// Default properties for the component
const EventsBannerDefaults = {
    heading: "Events",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum ",
    buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
    image: {
        src: banner,
        alt: "Placeholder image",
    },
};

const EventsBanner = (props) => {
    const { heading, description, buttons, image } = {
        ...EventsBannerDefaults,
        ...props,
    };

    return (
        <section className="relative px-[5%] z-10">
            <div className="container">
                <div className="flex contact-banner items-center py-16 md:py-24 lg:py-28">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                            {heading}
                        </h1>
                        <p className="text-base text-text-alternative md:text-md">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10">
                <video
                    className="absolute inset-0 aspect-video size-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src={banner} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
        </section>
    );
};

export default EventsBanner;
