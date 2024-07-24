import React from "react";
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import Fade from "react-reveal/Fade";
import img from "../../assets/jump-start.jpg"
import img2 from "../../assets/coaching-team.jpg"
import websitelogo from "../../assets/main-website-logo.jpg"

export function FeatureSection16() {
    return (
        <Fade>
            <section className="lg:py-28 py-10 px-8">
                <div className="container mx-auto mb-10 text-center lg:mb-20">
                    <Typography
                        color="blue-gray"
                        className="mb-2 font-bold uppercase"
                    >
                        Features
                    </Typography>
                    <Typography
                        color="blue-gray"
                        className="mb-4 !text-2xl font-bold lg:!text-4xl"
                    >
                        Turn your idea into a startup
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto max-w-lg !text-gray-500"
                    >
                        We&apos;re constantly trying to express ourselves and actualize our
                        dreams. If you have the opportunity to play
                    </Typography>
                </div>
                <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
                    <Card
                        className="col-span-1 bg-gray-100/50 overflow-hidden"
                        shadow={false}
                    >
                        <CardBody className="text-center">
                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Jumpstart
                            </Typography>
                            <Typography
                                className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
                                We are excited to share that Federation Skating Club has been selected by Canadian Tire Jumpstart program to receive a grant from their Sport Relief Fund. This fund helps community sport organizations, like ours continue to provide access to sport and play for Canadian kids. This grant will go a long ways towards helping us continue to offer affordable, quality programs learn-to-skate for children of all ages and abilities.

                            </Typography>
                            <img
                                src={img}
                                alt="iphone"
                                className="w-full xl:h-[370px] lg:h-[360px] lg:translate-y-8 translate-y-7 object-cover object-center"
                            />
                        </CardBody>
                    </Card>
                    <Card
                        className="col-span-2 bg-gray-100/50 overflow-hidden"
                        shadow={false}
                    >
                        <CardBody className="text-center">
                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Coaching Team
                            </Typography>
                            <Typography
                                className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
                                Our coaching team takes pride in developing a safe and supportive learning environment for all people. They work together to ensure that all of our programs are delivered with quality and consistency, truly ensuring that everyone can learn how to skate.
                            </Typography>
                            <img
                                src={img2}
                                alt="laptop"
                                className="w-full lg:h-[380px] md:h-[300px] h-[220px] lg:translate-y-16 translate-y-10 object-cover object-center"
                            />
                        </CardBody>
                    </Card>
                </div>
            </section>
        </Fade>
    );
}

export default FeatureSection16;