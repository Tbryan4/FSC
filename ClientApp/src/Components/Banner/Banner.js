import React from 'react';
import banner from "../../assets/contact-us-banner.mp4";

const BannerDefaults = {
    heading: "Contact Us",
    description: "We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Reach out to us through any of the following methods below, and we'll get back to you as soon as possible.",
    buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
    image: {
        src: banner,
        alt: "Default video",
        type: 'video', // Default to video
    },
};

const Banner = (props) => {
    const { heading, description, buttons, image = BannerDefaults.image } = {
        ...BannerDefaults,
        ...props,
    };

    return (
        <section className="relative px-[5%]">
            <div className="container">
                <div className="flex justify-content-center contact-banner items-center py-16 md:py-24 lg:py-28">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-center font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                            {heading}
                        </h1>
                        <p className="text-base text-center text-text-alternative md:text-md">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10">
                {image.type === 'video' ? (
                    <video
                        className="absolute inset-0 aspect-video size-full object-cover"
                        autoPlay
                        loop
                        muted
                    >
                        <source src={image.src} type="video/mp4" />
                    </video>
                ) : (
                    <img
                        className="absolute inset-0 aspect-video size-full object-cover"
                        src={image.src}
                        alt={image.alt}
                    />
                )}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
        </section>
    );
};

export default Banner;
