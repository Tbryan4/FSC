import React from 'react';
import img from "../../../assets/can-power.jpg";

export const PreCanSkateHeader = ({
                                   heading = "PreCanSkate",
                                   description = "August Learn to Skate Registration is Open\n" +
                                   " \n" +
                                   "Schedule is available under the 'Schedule' tab.\n" +
                                   " \n" +
                                   "Fall & Winter Registration is Open",
                                   image = {
                                       src: img,
                                       alt: "Placeholder image",
                                   },
                                   tags = [
                                       {
                                           label: "Program",
                                       }
                                   ],
                                   metaDataSections = [
                                       {
                                           title: "Age Requirement",
                                           description: "3-4 years of age",
                                       },
                                       {
                                           title: "Registration Start Date",
                                           description: "March 2025",
                                       },
                                       {
                                           title: "Level",
                                           description: "Beginner skaters",
                                       },
                                       {
                                           url: "#",
                                           title: "Registration",
                                           description: "https://www.federationskatingclub.ca/registration/",
                                       },
                                   ],
    content="This Learn-to-Skate program is designed for young skaters ages 3-5 with little to no previous skating experience. Skaters learn the basic skating skills, such as standing up, moving forwards, jumping and marching on the spot. These skills are taught using on-ice aids and games in order to keep skating interesting and fun!"
                               }) => {
    return (
        <section className="flex flex-col">
            <div className="px-[5%] py-12 md:py-16 lg:py-20">
                <div className="container grid grid-cols-1 items-start gap-12 md:grid-cols-[1.5fr_1fr] lg:gap-x-20 lg:gap-y-16">
                    <div>
                        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
                        <p className="lg:text-2xl">{description}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <a
                                    key={index}
                                    className="bg-red-500 px-2 py-1 text-sm font-semibold text-white rounded-md"
                                >
                                    {tag.label}
                                </a>
                            ))}
                        </div>


                    </div>
                    <div className="grid auto-cols-fr grid-cols-2 gap-8">
                        {metaDataSections.map((metaDataSection, index) => (
                            <div key={index}>
                                <h2 className="mb-2 text-md font-bold leading-[1.4]">
                                    {metaDataSection.title}
                                </h2>
                                {metaDataSection.url ? (
                                    <a href={metaDataSection.url} className="underline">
                                        {metaDataSection.description}
                                    </a>
                                ) : (
                                    <p className="text-md">{metaDataSection.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="lg:text-2xl">{content}</p>
            </div>
        </section>
    );
};
