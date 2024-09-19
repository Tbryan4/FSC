import React from 'react';
import { Button } from "@material-tailwind/react";

const DropInInfo = (props) => {
    const {
        heading = "Drop In Ice For Non-Federation Skating Club Members",
        description ="STARSkate Drop-In: All skaters must be Skate Canada members and must email the club before purchasing the tickets to to request permission. Drop-In coaching requests are subject to board approval. Drop-in tickets can not be used for any programs except STARSkate. If you are interested we offer 1 day tickets for you to drop in on any of STARSkate ice times. Please email us in advance to purchasing your tickets to ensure the ice time you are looking to have your skater skate on has available space. federationskating@gmail.com",
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
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">How to get set up</h4>
                    <ul className="lg:text-2xl list-disc pl-5">
                        <li>We need you to create an account with the Club.</li>
                        <li>Go to the registration tab.</li>
                        <li>
                            Click on <strong>PURCHASE OTHER PRODUCTS</strong> on the right-hand side and put in the quantity of tickets desired then add to cart.
                        </li>
                        <li>
                            Click on the shopping cart at the top of the page and make your payment online. You will get a confirmation email and then you will be able to print the tickets. <strong>BE AWARE OF THE EXPIRY DATE!</strong>
                        </li>
                        <li>
                            Please bring your tickets to the rink and give to a Federation Skating Club Coach for the ice session your skater would like to skate on.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DropInInfo;
