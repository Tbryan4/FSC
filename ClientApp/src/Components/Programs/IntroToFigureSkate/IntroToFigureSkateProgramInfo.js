import React from 'react';
import { Button } from "@material-tailwind/react";

const IntroToFigureSkatingInfo = (props) => {
    const {
        heading = "Learn the Basics of Figure Skating\n",
        description ="\n" +
            "Skaters can expect action, movement and fun, both on and off the ice! Lessons are taught in a group format with a coach-to-student ratio of a maximum 1:10. Skaters progress at their own rate and coaches makes sessions active using teaching aids, upbeat music, and a wide variety of activities that create a motivational environment and promote learning. Ribbons and other incentives are used to benchmark skaters' progress and reward effort and participation.",
        footerHeading = "What do you need to participate?",
        footerDescription = "All you need are skates, a CSA-approved hockey helmet, long pants, mittens, warm sweater or jacket. Dress in layers - it will get warm!",
        button = { title: "Register Now", variant: "secondary", link: "https://www.registrationfederation.ca/registration/" }
    } = props;

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto">
                <div className="mb-12 text-center md:mb-18 lg:mb-20">
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
                    <p className="lg:text-2xl">{description}</p>
                </div>
                <div className="mb-12">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">Pre-requisites:</h4>
                    <p className="lg:text-2xl">Skaters must demonstrate good forwards one foot glides and backwards
                        skating before entering this program. To book an assessment, please contact us. </p>
                </div>
                <div className="mb-12">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">Next
                        Steps:</h4>
                    <p className="lg:text-2xl">Once skaters have successfully demonstrated the skills in this program,
                        they may join the STARSkate program and select a coach.</p>
                </div>
                <div className="mb-12">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">Next
                        Fees:</h4>
                    <p className="lg:text-2xl">The program fee includes all coaching, ice costs, program materials, and
                        supplies. The Skate Canada fee is an annual fee, that renews in August. Lastly, there is a small
                        admin fee. </p>
                </div>
                <div className="mb-12">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">Next
                        Equipment Requirements: </h4>
                    <p className="lg:text-2xl">Figure skates and a CSA-approved hockey helmet. We recommend lace up
                        figure skates, with good ankle support. Poor ankle support can lead to injury and the plastic
                        skates do not allow for the proper ankle movement. </p>
                </div>
                <div className="mb-12">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                        The typical session format is as follows:</h4>
                    <table
                        style={{
                            borderCollapse: 'collapse',
                            width: '100%', // Stretches to fit the container
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            border: '1px solid black', // Add border to the table
                            textAlign:"center",
                            fontSize:"0.5rem",
                        }}
                    >
                        <tbody>
                        <tr>
                            <td style={{width: '33.33%', border: '1px solid black'}}>
                                <span style={{fontSize: '11pt', fontWeight: 'bold'}}>Activity</span>
                            </td>
                            <td style={{width: '33.33%', border: '1px solid black'}}>
                                <span style={{fontSize: '11pt', fontWeight: 'bold'}}>Information</span>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: '33.33%', border: '1px solid black'}}>
                                <span style={{fontSize: '11pt'}}>Group Lesson</span>
                            </td>
                            <td style={{width: '33.33%', border: '1px solid black'}}>
                        <span style={{fontSize: '11pt'}}>
                            This group session develops upon the basic skating skills taught in Canskate while teaching the basic jumps, spins, turns, and steps that make up the sport of figure skating. Additionally, the class will have dedicated time towards developing speed, edges, turns, creative expression, and flexibility. 
                        </span>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: '33.33%', border: '1px solid black'}}>
                                <span style={{fontSize: '11pt'}}>Group Off-Ice Lesson</span>
                            </td>
                            <td style={{width: '33.33%', border: '1px solid black'}}>
                        <span style={{fontSize: '11pt'}}>
                            This group session is combined with the Starskate program and develops strength, flexibility, stamina, and jump/spin technique. Topics such as goal setting are also covered.
                        </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
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

export default IntroToFigureSkatingInfo;
