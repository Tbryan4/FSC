import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import React from 'react';
import img from "../../assets/canadian-tire-jumpstart.jpg"

type ImageProps = {
    src: string;
    alt?: string;
};

type Props = {
    tagline: string;
    heading: string;
    description: string;
    buttons: { title: string } & ButtonProps[]; // Ensure ButtonProps is properly extended
    image: ImageProps;
};

export type Layout1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout1 = (props: Layout1Props) => {
    const {
        tagline = Layout1Defaults.tagline,
        heading = Layout1Defaults.heading,
        description = Layout1Defaults.description,
        buttons = Layout1Defaults.buttons,
        image = Layout1Defaults.image,
    } = props;

    return (
        <section className="px-[5%] py-16">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
                        <p className="md:text-md">{description}</p>
                        <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                            {buttons.map((button, index) => (
                                <Button key={index} {...button}>
                                    {button.title}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <img src={img} className="w-full object-cover" alt={image.alt} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Layout1Defaults: Layout1Props = {
    tagline: "Tagline",
    heading: "JumpStart",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    buttons: [
        { title: "Button", variant: "secondary" },
        {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight className="size-6" />,
        },
    ],
    image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image",
    },
};

Layout1.displayName = "Layout1";
