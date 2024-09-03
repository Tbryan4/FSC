import React from 'react';
import { Button } from "@material-tailwind/react";

const FigureSkateParentInfo = (props) => {
    const {
        heading = "Equipment\n",
        description = "Required Equipment: skates (hockey or figure) and a CSA-approved helmet\n" +
            "All of our Learn-to-Skate programs (PreCanskate, Canskate & Adult Canskate) require skates, hockey or figure, and a CSA-approved skating helmet. We recommend purchasing the lace-up skates as the plastic-molded skates do not allow for the necessary ankle movement and fit required. All helmets must have a CSA-approved sticker on them. Helmets should fit properly and not move when the skaters nods or turns their head.\n" +
            "\n" +
            "Before the first day of skating, please ensure that the skates have been sharpened. Newly purchased skates do not come pre-sharpened. Without regular sharpening (once a season/session), skaters will not be able to properly use their edges. \n" +
            "\n" +
            "After each session, ensure that skates are dried off completely before placing them in a bag. Rust can form on the blades if not completely dried off properly.\n" +
            "\n",
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
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">Recommended
                        Clothing: gloves/mittens, warm sweater/jacket and warm pants</h4>
                    <p className="lg:text-2xl">We recommend dressing in layers. The arenas can be very cool at the start
                        of each class. We recommend that young skaters wear snow pants. This will prevent them from
                        having wet pants after the class after falling. </p>
                </div>
                <div className="mb-12">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">On Ice</h4>
                    <p className="lg:text-2xl">The first day of skating is always overwhelming and may be scary for
                        young skaters. Please encourage them to keep trying and become their 'cheerleader' from the
                        stands. Seemingly easy skills, such as standing up, can be very challenging for young skaters
                        and they may require some time to master this skill
                        Once on the ice, skaters are grouped according to ability. It is natural for skaters to be moved
                        within groups a couple of times in order to find the best fit. We strive to put skaters into
                        groups that encourage the skaters to try new skills, while ensuring that the skills are within
                        the childs ability.</p>
                </div>
                <div className="mb-12">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">Safety</h4>
                    <p className="lg:text-2xl">Our coaches and volunteers are committed to creating a safe learning
                        environment for all skaters. Please respect the coaches and volunteers decisions in respect to
                        club operations and skaters safety. To speak with a program coordinator or a board member,
                        please email federationskating@gmail.com. </p>
                </div>
                <div className="mb-12">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">Communication</h4>
                    <p className="lg:text-2xl">We communicate with parents primarily through email with program updates,
                        registration information and skating schedules. Please review your account annually to ensure
                        that you are subscribed to all club email lists.
                        Skater specific questions may be answered by the skater's coach after each session or by
                        emailing federationskating@gmail.com. Please do not approach a coach if they are on the ice,
                        this distracts the coach and takes time away from the skaters that they are working with. </p>
                </div>
                <div className="mb-12">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">Volunteer &
                        Fundraiser Requirements</h4>
                    <p className="lg:text-2xl">We do not require Learn-to-Skate families to complete any volunteer or
                        fundraiser requirements. If you wish to inquiry about volunteer or fundraising opportunities,
                        please email federationskating@gmail.com.</p>
                </div>
                <div className="mb-12">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">Age Requirements</h4>
                    <p className="lg:text-2xl">All skaters must be 3 years old before getting on the ice.

                        The age requirements for Canskate and Adult Canskate can be overridden upon approval from a program coordinator. Approval is given on a case-by-case basis and takes into consideration skating experience.  Please send all requests to federationskating@gmail.com</p>
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

export default FigureSkateParentInfo;
