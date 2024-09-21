import React from 'react';
import img from "../../../assets/can-power.jpg";

export const CanPowerSkateHeader = ({
                             heading = "CanPower\n",
                             description = "CanPowerSkate is an action-packed, high energy instructional power skating program geared to hockey and ringette skaters that focuses on balance, power, agility, speed and endurance. Skills, techniques and conditioning drills are taught in a progressive format that emphasizes how the skills apply to game situations. ",
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
                                     title: "Level Requirement",
                                     description: "Stage 3 CanSkate",
                                 },
                                 {
                                     title: "Level",
                                     description: "Intermediate to senior skaters",
                                 },
                                 {
                                     url: "https://www.federationskatingclub.ca/registration/",
                                     title: "Registration",
                                     description: "https://www.federationskatingclub.ca/registration/",
                                 },
                             ],
                             content = "\n" +
                             "\n" +
                             "\n" +
                             "This program is desired for skaters ages 6 and passed Stage 3 CanSkate. Skaters may wear full hockey equipment and use a hockey/ringette stick. Skaters may be asked to leave their stick at the boards. "
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
