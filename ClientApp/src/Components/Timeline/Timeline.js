import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import thanksGivingPhoto from "../../assets/events-photos/happy-thanksgiving-background-free-vector.jpg"

// Default values for the TimelineEvents component
export const TimelineDefaults = {
    tagline: "2023-2024",
    heading: "Events",
    description: "Check out our events for the 2023-2024 season!",
    timelines: [
        // {
        //     date: "October 10 - 15, 2024",
        //     heading: "No Skating - Thanksgiving Holiday",
        //     description: "Enjoy your thanksgiving holiday!",
        //     buttons: [
        //         { title: "View", variant: "secondary" }
        //     ],
        //     photo: thanksGivingPhoto,
        // },
        // {
        //     date: "November 9, 2024",
        //     heading: "Federation Competition",
        //     description: "Competition time!",
        //     location: "Kinsmen Twin Arenas",
        //     mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9503.908915811548!2d-113.5139819!3d53.4509933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01efb180d768b%3A0x63cd6491dbb20f1d!2sKinsmen%20Twin%20Arenas!5e0!3m2!1sen!2sca!4v1724820009834!5m2!1sen!2sca",
        //     buttons: [
        //         { title: "View", variant: "secondary" }
        //     ],
        // },
        {
            date: "December 21, 2024",
            time: "2:45pm - 3:45pm and 4:00pm - 5:00pm",
            heading: "Holiday Showcase",
            description: "Holiday showcase before Christmas! All Federation StarSkaters welcome! Registration information has been sent to your emails. The show will run 2:45pm - 3:45pm and 4:00pm - 5:00pm with a reception after the show and during intermission",
            location: "Kinsmen Twin Arenas",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9503.908915811548!2d-113.5139819!3d53.4509933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01efb180d768b%3A0x63cd6491dbb20f1d!2sKinsmen%20Twin%20Arenas!5e0!3m2!1sen!2sca!4v1724820009834!5m2!1sen!2sca",
            buttons: [
                { title: "View", variant: "secondary" }
            ],
        },
        {
            date: "December 28th 2024",
            time: "1:00pm - 5:00pm",
            heading: "Development Seminar",
            description: (
                <>
                    Open to all skaters! Guest coaches: Lynne Koper, Ben Ferreira, Christina Penkov, Katie Castle MC., R. Psych, Elite Dance Studio
                    <br />
                    <br />
                    Check out the <a href="https://drive.google.com/file/d/1E2a7Tpvf9xpRpLoxWWV3lbBs24zYaRmb/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>flyer</a> for more information!
                </>
            ),

            location: "Kinsmen Twin Arenas",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9503.908915811548!2d-113.5139819!3d53.4509933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01efb180d768b%3A0x63cd6491dbb20f1d!2sKinsmen%20Twin%20Arenas!5e0!3m2!1sen!2sca!4v1724820009834!5m2!1sen!2sca",
            buttons: [
                { title: "View", variant: "secondary" }
            ],
        },
        {
            date: "December 29th 2024",
            time: "1:15pm - 6:30pm",
            heading: "Development Seminar",
            description: (
                <>
                    Open to all skaters! Guest coaches: Lynne Koper, Ben Ferreira, Christina Penkov, Katie Castle MC., R. Psych, Elite Dance Studio
                    <br />
                    <br />
                    Check out the <a href="https://drive.google.com/file/d/1E2a7Tpvf9xpRpLoxWWV3lbBs24zYaRmb/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>flyer</a> for more information!
                </>
            ),            location: "Tipton arena",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.301001462776!2d-113.51403112325795!3d53.51668097233917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0220347dd7275%3A0x1a9dca81a2aff720!2sTipton%20Arena!5e0!3m2!1sen!2sca!4v1731800943943!5m2!1sen!2sca",
            buttons: [
                { title: "View", variant: "secondary" }
            ],
        },
        {
            date: "March 23, 2025",
            heading: "Annual Ice Show",
            description: "Annual Ice Show Competition on March 25!",
            location: "Confederation Leisure Centre\n\n",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9497.508024632969!2d-113.5202265!3d53.4795933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01f3fde5eab41%3A0xe77fe04023f4ce03!2sConfederation%20Leisure%20Centre!5e0!3m2!1sen!2sca!4v1726358772130!5m2!1sen!2sca",
            buttons: [
                { title: "View", variant: "secondary" }
            ],
        },
    ],
};


// Main TimelineEvents component
export const TimelineEvents = (props) => {
    const { tagline, heading, description, timelines } = {
        ...TimelineDefaults,
        ...props,
    };

    const [open, setOpen] = useState(false);
    const [selectedTimeline, setSelectedTimeline] = useState(null);

    const handleOpen = (timeline) => {
        setSelectedTimeline(timeline);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedTimeline(null);
    };

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="relative grid auto-cols-fr grid-cols-1 items-start justify-center gap-6 sm:gap-12 md:grid-cols-2 md:gap-24 lg:gap-32">
                    <div className="relative mt-30 z-10 md:sticky md:top-1/2 md:-translate-y-1/2 md:z-auto md:pr-4">
                        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
                        <p className="md:text-md">{description}</p>
                    </div>
                    <div className="absolute z-0 flex h-full w-8 flex-col items-center justify-self-start [grid-area:2/1/3/2] md:z-auto md:justify-self-center md:[grid-area:auto]">
                        <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
                        <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-black" />
                        <div className="h-full w-[3px] bg-neutral-lighter" />
                        <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
                        <div className="absolute top-[-50vh] h-[50vh] w-full bg-background-primary" />
                    </div>
                    <div className="grid auto-cols-fr gap-x-12 gap-y-8 sm:gap-y-12 md:gap-x-20 md:gap-y-20">
                        {timelines.map((timeline, index) => (
                            <Timeline key={index} timeline={timeline} onButtonClick={handleOpen} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Dialog for displaying timeline details */}
            {selectedTimeline && (
                <Dialog
                    open={open}
                    handler={handleClose}
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                >
                    <DialogHeader>{selectedTimeline.heading}</DialogHeader>
                    <DialogBody>
                        <p><strong>Date</strong>: {selectedTimeline.date}</p>
                        {selectedTimeline.time && (
                            <p><strong>Time:</strong> {selectedTimeline.time}</p>
                        )}
                        {selectedTimeline.location && <p><strong>Location:</strong> {selectedTimeline.location}</p>}
                        <br/>
                        <p>{selectedTimeline.description}</p>
                        {selectedTimeline.photo && (
                            <div className="mt-4">
                                <img
                                    src={selectedTimeline.photo}
                                    alt="Event"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        )}
                        {/* Embed Google Map */}
                        {selectedTimeline.mapUrl && (
                            <div className="mt-4">
                                <iframe
                                    src={selectedTimeline.mapUrl}
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="Location Map"
                                ></iframe>
                            </div>
                        )}
                    </DialogBody>
                    <DialogFooter>
                        <Button variant="text" color="red" onClick={handleClose} className="mr-1">
                            <span>Close</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            )}
        </section>
    );
};

// Timeline component for each event
const Timeline = ({ timeline, onButtonClick }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end center"],
    });
    const backgroundColor = useTransform(scrollYProgress, [0.99, 1], ["#ccc", "#000"]);

    return (
        <div className="relative">
            <div className="absolute flex h-full w-8 items-start justify-center md:-ml-24 md:w-24 lg:-ml-32 lg:w-32">
                <motion.div
                    ref={ref}
                    className="z-20 mt-7 size-4 rounded-full shadow-[0_0_0_8px_#fff] md:mt-8"
                    style={{
                        backgroundColor,
                    }}
                />
            </div>
            <div className="ml-12 mt-4 flex flex-col md:ml-0">
                <h2 className="text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                    {timeline.heading}
                </h2>
                <h3 className=" font-bold md:mb-4 md:text-2xl">{timeline.date}
                    {
                        timeline.time && (
                            <h4 className="md:text-md">
                                {timeline.time}
                            </h4>
                        )
                    }
                </h3>
                
                <p>{timeline.description}</p>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                    {timeline.buttons.map((button, index) => (
                        <Button
                            color={"red"}
                            key={index}
                            variant={button.variant}
                            onClick={() => onButtonClick(timeline)}
                        >
                            {button.title}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};
