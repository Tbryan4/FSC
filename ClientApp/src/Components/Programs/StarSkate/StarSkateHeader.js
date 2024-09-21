import React from 'react';
import img from "../../../assets/can-power.jpg";

export const StarSkateHeader = ({
                                   heading = "StarSkate",
                                   description = "STARSKATE offers opportunities for skaters of all ages to develop fundamental figure skating skills in the areas of ice dance, skating skills, free skate and artistic skating. Unique in Canada, this program teaches figure skating skills in a group and/or private lesson format in a progressive and sequential manner.",
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
                                           title: "Level requirement",
                                           description: "Completion of IFS program OR discretion of program coordinators",
                                       },
                                       {
                                           title: "Registration Start Date",
                                           description: "March 2025",
                                       },
                                       {
                                           title: "Level",
                                           description: "Experienced Skaters",
                                       },
                                       {
                                           url: "#",
                                           title: "Registration",
                                           description: "https://www.federationskatingclub.ca/registration/",
                                       },
                                   ],
content="Skaters have the opportunity to take part in Skate Canada assessments through a nationally standardized assessments system and/or competitions. \n" +
"\n"                               }) => {
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
