import React, { useState } from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import {Button} from "@material-tailwind/react";

const FeatureCard = ({ tab }) => {
    return (
        <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
            <div className="mb-5 md:mb-6">
                <iframe
                    src={tab.content.mapUrl}
                    width="100%"
                    height="400"
                    frameBorder="0"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                    className="rounded-lg shadow-lg"
                ></iframe>
            </div>
            <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                {tab.content.heading}
            </h2>
            <p>{tab.content.description}</p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
                {tab.content.buttons.map((button, index) => (
                    <a
                        key={index}
                        href={tab.content.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <Button {...button}>
                            {button.title}
                        </Button>
                    </a>
                ))}
            </div>
        </div>
    );
};

const GoogleMapTabs = (props) => {
    const { tagline, heading, description, defaultValue, tabs } = {
        ...GoogleMapTabsDefaults,
        ...props,
    };

    const [activeTab, setActiveTab] = useState(defaultValue);
    const MotionTabsContent = motion(TabsContent);

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="container mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
                    <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                    <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
                    <p className="md:text-md">{description}</p>
                </div>
                <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    orientation="vertical"
                    className="relative grid auto-cols-fr grid-cols-1 border border-border-primary md:grid-cols-[1.5fr_1fr]"
                >
                    <AnimatePresence initial={false}>
                        {tabs.map((tab) => (
                            <MotionTabsContent
                                key={tab.value}
                                value={tab.value}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeTab === tab.value ? 1 : 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <FeatureCard tab={tab} />
                            </MotionTabsContent>
                        ))}
                    </AnimatePresence>
                    <TabsList className="relative grid h-full auto-cols-fr grid-cols-1 border-t border-border-primary md:border-l md:border-t-0">
                        {tabs.map((tab, index) => (
                            <TabsTrigger
                                key={index}
                                value={tab.value}
                                className={`items-start justify-start border-0 border-b border-border-primary px-6 py-6 text-xl font-bold last-of-type:border-0 ${
                                    activeTab === tab.value
                                        ? "bg-red-500 text-white"
                                        : "data-[state=active]:bg-background-primary data-[state=active]:text-text-primary"
                                } md:px-8 md:text-2xl`}
                            >
                                {tab.trigger}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>
        </section>
    );
};

const GoogleMapTabsDefaults = {
    tagline: "Info",
    heading: "Where We Skate",
    description:
        "The arenas we skate at are: Kinsmen Twin Arena, Tipton Arena, and Southside Arena\n",
    defaultValue: "tab-1",
    tabs: [
        {
            value: "tab-1",
            trigger: "Kinsmen Twin Arenas",
            content: {
                mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9503.908915811548!2d-113.5139819!3d53.4509933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01efb180d768b%3A0x63cd6491dbb20f1d!2sKinsmen%20Twin%20Arenas!5e0!3m2!1sen!2sca!4v1724820009834!5m2!1sen!2sca",
                heading: "Kinsmen Twin Arenas",
                description:
                    "Check out the Kinsmen Twin Arenas",
                directionsUrl: "https://www.google.com/maps/dir//Kinsmen+Twin+Arenas+1979+111+St+NW+Edmonton,+AB+T6J+7C6/@53.4509933,-113.5139819,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x53a01efb180d768b:0x63cd6491dbb20f1d",
                buttons: [
                    { title: "Directions", variant: "secondary" }
                ],
            }
        },
        {
            value: "tab-2",
            trigger: "Tipton Arena",
            content: {
                mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9489.203999656293!2d-113.5114562!3d53.516681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0220347dd7275%3A0x1a9dca81a2aff720!2sTipton%20Arena!5e0!3m2!1sen!2sca!4v1724820105664!5m2!1sen!2sca",
                heading: "Tipton Arena",
                description:
                    "Check out the Tipton Arena",
                directionsUrl: "https://www.google.com/maps/dir//Tipton+Arena+10828+80+Ave+NW+Edmonton,+AB+T6E,+Canada/@53.516681,-113.5114562,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x53a0220347dd7275:0x1a9dca81a2aff720",
                buttons: [
                    { title: "Directions", variant: "secondary" }
                ],
            },
        },
        {
            value: "tab-3",
            trigger: "Southside Arena",
            content: {
                mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9491.124069891934!2d-113.501797!3d53.5081071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02200b8c39223%3A0xff34a47400dd7898!2sGeorge%20S.%20Hughes%20South%20Side%20Arena!5e0!3m2!1sen!2sca!4v1724821176502!5m2!1sen!2sca",
                heading: "Southside Arena",
                description:
                    "Check out the Southside Arena!",
                directionsUrl: "https://www.google.com/maps/dir//George+S.+Hughes+South+Side+Arena+10525+72+Ave+NW+Edmonton,+AB+T6E+0Z6/@53.5081071,-113.501797,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x53a02200b8c39223:0xff34a47400dd7898",
                buttons: [
                    { title: "Directions", variant: "secondary" }
                ],
            },
        }
    ],
};

export default GoogleMapTabs;
