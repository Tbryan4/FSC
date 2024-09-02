import React from 'react';

const Banner = (props) => {
    const { heading, description, buttons, image} = {
        ...props,
    };

    return (
        <section className="banner relative px-[5%]">
            <div className="container">
                <div className="flex justify-content-center contact-banner items-center py-16 md:py-24 lg:py-28">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-center font-bold text-text-alternative text-6xl">
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
