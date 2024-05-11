

import { Button, ChevronRight } from "@relume_io/relume-ui";
import { ImageProps, ButtonProps } from "@relume_io/relume-ui";
import adultcanskateimg from "../../assets/program-adult-can-skate.png"
import figureskateimg from "../../assets/program-intro-to-figure-skate.jpeg"
import canskateimg from "../../assets/program-canskate.jpeg"
import canpowerskateimg from "../../assets/program-canpowerskate.jpeg"

type BlogPost = {
    url: string;
    image: ImageProps;
    category: string;
    readTime: string;
    title: string;
    description: string;
    button: ButtonProps;
};

type Props = {
    tagline: string;
    heading: string;
    description: string;
    button: ButtonProps;
    blogPosts: BlogPost[];
};

export type Blog44Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const ProgramCollection = (props: Blog44Props) => {
    const { tagline, heading, description, button, blogPosts } = {
        ...Blog44Defaults,
        ...props,
    };
    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div>
                    <p className="text-black text-lg">Courses</p>
                    <p className="text-black text-6xl mt-4 font-bold">Find Your Perfect Program</p>
                    <p className="text-black mt-4 text-lg">Explore Your Perfect Program</p>
                </div>
                <div
                    className="mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
                    <div className="w-full max-w-lg">
                        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                        <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">{heading}</h1>
                        <p className="md:text-md">{description}</p>
                    </div>
                    <div className="hidden flex-wrap items-center justify-end md:block">
                        <Button
                            variant={button.variant}
                            size={button.size}
                            iconRight={button.iconRight}
                            iconLeft={button.iconLeft}
                            className="pc-view-all-btn"
                        >
                            {button.title}
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
                    {blogPosts.map((post, index) => (
                        <a
                            style={{color: "black"}}
                            key={`${post.title}-${index}`}
                            href={post.url}
                            className="flex size-full flex-col items-center justify-start border border-border-primary ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                        >
                            <div className="relative w-full overflow-hidden pt-[66%]">
                                <img
                                    src={post.image.src}
                                    alt={post.image.alt}
                                    className="absolute inset-0 size-full object-cover"
                                />
                            </div>
                            <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6">
                                <div className="mb-4 flex items-center">
                                    <p style={{color: "white", backgroundColor: "red"}}
                                       className="mr-4 p-2 text-sm font-semibold rounded-3xl">
                                        {post.category}
                                    </p>
                                    <p className="inline text-sm font-semibold">{post.readTime}</p>
                                </div>

                                <div className="flex w-full flex-col items-start justify-start">
                                    <h2 className="mb-2 text-xl font-bold md:text-2xl">{post.title}</h2>
                                    <p>{post.description}</p>
                                    <Button
                                        variant={post.button.variant}
                                        size={post.button.size}
                                        iconRight={post.button.iconRight}
                                        iconLeft={post.button.iconLeft}
                                        className="mt-6 flex items-center justify-center gap-x-1 "
                                    >
                                        {post.button.title}
                                    </Button>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <Button
                    variant={button.variant}
                    size={button.size}
                    iconRight={button.iconRight}
                    iconLeft={button.iconLeft}
                    className="mt-12 md:hidden"
                    
                >
                    {button.title}
                </Button>
            </div>
        </section>
    );
};

export const Blog44Defaults: Blog44Props = {
    tagline: "Blog",
    heading: "Short heading goes here",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    button: { className: "pc-view-all-btn" , title: "View all", variant: "secondary" },
    blogPosts: [
        {
            url: "#",
            image: {
                src: canpowerskateimg,
                alt: "Placeholder image 1",
            },
            category: "Introductory",
            readTime: "5 min read",
            title: "CanPowerSkate\n",
            description: "Learn how to skate in a upbeat and progressive environment. Skaters are split into groups based on skill level and age.",
            button: { title: "Learn more", variant: "link", size: "link", iconRight: <ChevronRight /> },
        },
        {
            url: "#",
            image: {
                src: figureskateimg,
                alt: "Placeholder image 2",
            },
            category: "Beginner",
            readTime: "10 min read",
            title: "Intro-to-Figure Skate",
            description: "Develop the basic figure skating skills in group lesson. Acts as a transition between CanSkate and StarSkate.",
            button: { title: "Learn more", variant: "link", size: "link", iconRight: <ChevronRight /> },
        },
        {
            url: "#",
            image: {
                src: canskateimg,
                alt: "Placeholder image 3",
            },
            category: "Intermediate",
            readTime: "15 min read",
            title: "CanSkate",
            description:
                "Enter the sport of figure skating. Skaters have the opportunity to participate in competitions and/or assessments.",
            button: { title: "Learn more", variant: "link", size: "link", iconRight: <ChevronRight /> },
        },

        {
            url: "#",
            image: {
                src: adultcanskateimg,
                alt: "Adult Can Skate",
            },
            category: "Advanced",
            readTime: "20 min read",
            title: "Adult Can Skate",
            description: "Learn how to skate in a safe and supportive environment. Skaters are split into groups based on skill level to ensure all skaters progress.",
            button: { title: "Learn more", variant: "link", size: "link", iconRight: <ChevronRight /> },
        },
        
    ],
};
