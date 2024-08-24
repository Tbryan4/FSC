import React from 'react';
import {
    Button
} from "@material-tailwind/react";
import type {ButtonProps} from "@relume_io/relume-ui";

type ImageProps = {
    src: string;
    alt?: string;
};

type Props = {
    heading: string;
    description: string;
    buttons: ButtonProps[];
    image: ImageProps;
};

export type BannerProps = React.ComponentPropsWithoutRef<"header"> & Partial<Props>;

export const BannerDefaults: Props = {
    heading: "",
    description: "",
    buttons: [{title: ""}],
    image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Banner image",
    },
};

export const Banner = (props: BannerDefaults) => {
    const {
        heading = BannerDefaults.heading,
        description = BannerDefaults.description,
        buttons = BannerDefaults.buttons,
        image = BannerDefaults.image,
    } = props;

    return (
        <header className="relative px-[5%] z-10">
            <div className="container">
                <div
                    className="flex max-h-[10rem] min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28">
                    <div className="w-full max-w-lg">
                        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                            {heading}
                        </h1>
                        <p className="text-base text-text-alternative md:text-md">{description}
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                            {buttons.map((button, index) => (
                                button && button.title ? (
                                    <a href="/contactus" key={index}>
                                        <Button {...button}>
                                            {button.title}
                                        </Button>
                                    </a>
                                ) : null
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10">
                <img src={image.src} className="size-full object-cover" alt={image.alt}/>
                <div className="absolute inset-0 bg-black/50"/>
            </div>
        </header>
    );
};

Banner.displayName = "Header30";
