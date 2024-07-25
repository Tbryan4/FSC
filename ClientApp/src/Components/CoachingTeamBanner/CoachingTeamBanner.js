import React from 'react';
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import img from "../../assets/coaching-staff/coaching-staff.jpg"

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

export type CoachingTeanBannerProps = React.ComponentPropsWithoutRef<"header"> & Partial<Props>;

export const CoachingTeanBannerDefaults: Props = {
    heading: "Meet Our Coaching Staff",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    buttons: [{ title: "Contact Us" }],
    image: {
        src: img,
        alt: "Coach Image",
    },
};

export const CoachingTeamBanner = (props: CoachingTeanBannerProps) => {
    const {
        heading = CoachingTeanBannerDefaults.heading,
        description = CoachingTeanBannerDefaults.description,
        buttons = CoachingTeanBannerDefaults.buttons,
        image = CoachingTeanBannerDefaults.image,
    } = props;

    return (
        <header className="relative px-[5%]">
            <div className="container">
                <div className="flex max-h-[20rem] min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28">
                    <div className="w-full max-w-lg">
                        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                            {heading}
                        </h1>
                        <p className="text-base text-text-alternative md:text-md">{description}</p>
                        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                            {buttons.map((button, index) => (
                                <Button key={index} {...button}>
                                    {button.title}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10">
                <img src={image.src} className="size-full object-cover" alt={image.alt} />
                <div className="absolute inset-0 bg-black/50" />
            </div>
        </header>
    );
};

CoachingTeamBanner.displayName = "Header30";
