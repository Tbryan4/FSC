import React from 'react';
import banner from "../../assets/contact-us-banner.mp4";

// Default properties for the component
const Header9Defaults = {
    heading: "Contact Us",
    description: "We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Reach out to us through any of the following methods below, and we'll get back to you as soon as possible.",
    buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
    image: {
        src: banner,
        alt: "Placeholder image",
    },
};

const Header9 = (props) => {
    const { heading, description, buttons, image } = {
        ...Header9Defaults,
        ...props,
    };

    return (
        <section className="relative px-[5%]">
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

export default Header9;
