import React from 'react';
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import BaseCoachImg1 from "../../assets/coaching-staff/katrina-abou-rjeily  .jpg"
import BaseCoachImg2 from "../../assets/coaching-staff/darci-wilson  .jpg"
import BaseCoachImg3 from "../../assets/coaching-staff/rhea-sherman.jpg"
import BaseCoachImg4 from "../../assets/coaching-staff/emily-johnston.jpg"


type ImageProps = {
    src: string;
    alt?: string;
};

type FooterProps = {
    heading: string;
    description: string;
    button: ButtonProps;
};

type SocialLinkProps = {
    href: string;
    icon: React.ReactNode;
};

type TeamMembersProps = {
    image: ImageProps;
    name: string;
    jobTitle: string;
    description: string;
    socialLinks: SocialLinkProps[];
};

type Props = {
    tagline: string;
    heading: string;
    description: string;
    teamMembers: TeamMembersProps[];
    footer: FooterProps;
};

export type LearnToSkateCoachesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LearnToSkateCoachesDefaults: Props = {
    tagline: "coaches",
    heading: "Learn To Skate",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    teamMembers: [
        {
            image: {
                src: BaseCoachImg1,
                alt: BaseCoachImg1,
            },
            name: "Katrina Abou Rjeily",
            jobTitle: "Base Coach",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            socialLinks: [
                { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
                { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
                { href: "#", icon: <BiLogoDribbble className="size-6" /> },
            ],
        },

        {
            image: {
                src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
                alt: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
            },
            name: "Amy Warnke",
            jobTitle: "Base Coach",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            socialLinks: [
                { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
                { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
                { href: "#", icon: <BiLogoDribbble className="size-6" /> },
            ],
        },

        {
            image: {
                src: BaseCoachImg2,
                alt: BaseCoachImg2,
            },
            name: "Darci Wilson",
            jobTitle: "Base Coach",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            socialLinks: [
                { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
                { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
                { href: "#", icon: <BiLogoDribbble className="size-6" /> },
            ],
        },
        {
            image: {
                src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
                alt: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
            },
            name: "Ellen Kim",
            jobTitle: "Base Coach",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            socialLinks: [
                { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
                { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
                { href: "#", icon: <BiLogoDribbble className="size-6" /> },
            ],
        },
        {
            image: {
                src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
                alt: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
            },
            name: "Sofia Arzayus Trujillo",
            jobTitle: "Base Coach",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            socialLinks: [
                { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
                { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
                { href: "#", icon: <BiLogoDribbble className="size-6" /> },
            ],
        },
        {
            image: {
                src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
                alt: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
            },
            name: "Astha Shah",
            jobTitle: "Base Coach",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            socialLinks: [
                { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
                { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
                { href: "#", icon: <BiLogoDribbble className="size-6" /> },
            ],
        },
    ],
    footer: {
        heading: "Alyssa Higo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        button: { title: "Open positions", variant: "secondary", size: "medium", iconRight: undefined, iconLeft: undefined },
    },
};

export const LearnToSkateCoaches: React.FC<LearnToSkateCoachesProps> = (props) => {
    const { tagline, heading, description, teamMembers, footer } = {
        ...LearnToSkateCoachesDefaults,
        ...props,
    };

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
                    <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
                    <p className="md:text-md">{description}</p>
                </div>

                <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4 ">
                    {teamMembers.map((member, index) => (
                        <div className="flex flex-col items-stretch text-center" key={index}>
                            <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
                                <img
                                    src={member.image.src}
                                    alt={member.image.alt}
                                    className="absolute inset-0 size-full object-cover"
                                />
                            </div>
                            <div className="mb-3 md:mb-4">
                                <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
                                <h6 className="md:text-md">{member.jobTitle}</h6>
                            </div>

                            <p>{member.description}</p>
                            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                                {member.socialLinks.map((link, linkIndex) => (
                                    <a
                                        key={linkIndex}
                                        href={link.href}
                                        className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

LearnToSkateCoaches.displayName = "Team2";
