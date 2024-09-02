import React from 'react';
import { Button } from "@material-tailwind/react";

const StarSkateInfo = (props) => {
    const {
        heading = "Why Sign up for StarSkate?",
        description ="Skaters will work individually or in a small group with a coach of their choosing. With this coach, they can develop skills, goals and training pathways. When choosing a coach, please visit the coach's page and browse the club's coaches. Each coach may be contacted individually by using their email. ",
        footerHeading = "What do you need to participate?",
        footerDescription = "All you need are skates, a CSA-approved hockey helmet, long pants, mittens, warm sweater or jacket. Dress in layers - it will get warm!",
        button = { title: "Register Now", variant: "secondary", link: "https://www.federationskatingclub.ca/registration/" }
    } = props;

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto">
                <div className="mb-12 text-center md:mb-18 lg:mb-20">
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
                    <p className="lg:text-2xl">{description}</p>
                </div>
                <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">{footerHeading}</h4>
                    <p className="md:text-md">{footerDescription}</p>
                    <div className="mt-6 md:mt-8">
                        <a href={button.link} target="_blank" rel="noopener noreferrer">
                            <Button {...button}>{button.title}</Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StarSkateInfo;
