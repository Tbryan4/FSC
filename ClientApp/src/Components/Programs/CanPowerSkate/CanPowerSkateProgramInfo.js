import React from 'react';
import { Button } from "@material-tailwind/react";

const CanPowerSkateProgramInfo = (props) => {
    const {
        heading = "Pre-CanPowerSkate\n",
        description = "CanPowerSkate is an action-packed, high energy instructional power skating program geared to hockey and ringette skaters that focuses on balance, power, agility, speed and endurance. Skills, techniques and conditioning drills are taught in a progressive format that emphasizes how the skills apply to game situations. \n" +
            "\n" +
            "This program is desired for skaters who can skate forwards and glide on one foot. This program acts as an entry into the CanPowerSkate program. Skaters are not required to wear hockey equipment and hockey/ringette sticks are not allowed. ",
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
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">What are the benefits of the CanPowerSkate program?</h4>
                    <p className="lg:text-2xl">CanPowerSkate is the only nationally regulated power skating program in Canada. It was developed by a team of hockey, figure skating and ringette experts to teach the fundamentals of power skating in a progressive and sequential manner.
                        Skaters can expect to participate in a skill testing system that has 6 stages and associated ribbons and badges. This system includes speed drills.
                        The Pre-CanPowerSkate program uses a modified CanSkate program. </p>
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

export default CanPowerSkateProgramInfo;
