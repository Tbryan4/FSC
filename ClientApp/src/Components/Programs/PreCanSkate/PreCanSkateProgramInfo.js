import React from 'react';
import { Button } from "@material-tailwind/react";

const PreCanSkateInfo = (props) => {
    const {
        heading = "Why Sign up for CanSkate?",
        description = "CanSkate is a dynamic learn-to-skate program that focuses on fun, participation, and basic skill development. Based on Sport Canada's long term athlete development (LTAD) principles, CanSkate centers on physical literacy and the fundamental skills needed to take part in any ice sport or to skate as a recreational activity.",
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
                <div className="mb-12">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">What can you expect?</h4>
                    <p className="lg:text-2xl">Action, movement and fun! Lessons are given in a group format with a coach-to-student ratio of a maximum 1:8. Skaters progress at their own rate and coaches make sessions active using teaching aids, upbeat music and a wide variety of activities that create a motivational environment and promote learning. Ribbons and other incentives are used to benchmark skaters' progress and reward effort and participation. </p>
                </div>
                <div className="mb-12">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">What do you need to participate?</h4>
                    <p className="lg:text-2xl">All your child needs are skates, a CSA-approved hockey helmet, long pants, mittens, warm sweater or jacket. *We recommend purchasing skates with laces and avoiding skates that are molded plastic. These plastic skates can inhibit skating performance.</p>
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

export default PreCanSkateInfo;
