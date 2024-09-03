import React from 'react';
import { Button } from "@material-tailwind/react";

const FigureSkateParentInfo = (props) => {
    const {
        heading = "Intro-to-Figure Skating\n\n",
        description = "This program serves as a gateway into the StarSkate and/or CompetitiveSkate programs. \n" +
            "\n" +
            "Equipment Required: figure skates and a CSA-approved helmet\n" +
            "\n" +
            "Upon completion of the Stage 5 Canskate skating skills, the coach/program coordinator and parents/guardians may discuss removing the childs helmet. All helmets must be worn until coach and/or program coordinator and parent approval is granted. ",
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
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Session Structure</span>: each session is broken into a Group Lesson,
                    Stroking
                    Lesson and Off-Ice Lesson.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Group Lesson</span>: the group lesson builds upon the skills learned in
                    Canskate,
                    while teaching the basic figure skating skills such as jumps, spins, turns and steps.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Stroking Lesson</span>: this lesson is combined with the StarSkate and
                    CompetitiveSkate skaters and focuses
                    on speed, stamina, turns, edges and artistic expression. Skaters will be encouraged to skate with
                    speed and engage in a variety of drills and exercises.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Off-Ice Lesson</span>: this lesson is combined with the StarSkate and
                    CompetitiveSkate skaters and focuses on flexibility, jump/spin technique and cardio. Skaters will
                    participate in a group lesson with different focus areas every week.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    Clothing Recommendation: gloves/mittens, tight-fitting pants, a light jacket or sweater.Skaters
                    should avoid wearing bulky clothes that inhibits movement. Loose pants can become caught in a
                    skaters skates, posing a safety risk.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    Events: skaters may choose to participate in a variety of events over the course of the season
                </p>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Fun Competitions </span>: skaters may choose to participate in fun
                    competitions that are held in the city and surrounding communities. These events do have additional
                    costs associated which may include: travel, coaching, registration and clothing. For more
                    information, please contact federationskating@gmail.com.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Ice Show</span>: every March, we put on a Annual Ice Show which allows
                    skaters to show-off their new skills to friends and family. This event is completely free to
                    participate in. For more information, please contact federationskating@gmail.com.
                </p>


                <div className="mb-12 mt-12 text-center md:mb-18 lg:mb-20">
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">StarSkate &
                        CompetitiveSkate</h2>
                    <p className="lg:text-2xl">StarSkate is a recreational figure skating program that teaches figure
                        skating skills to skaters of all ages.
                        CompetitiveSkate is a figure skating program for skaters who wish to compete in Skate Canada
                        competitions.
                        Equipment Required: figure skates and yoga mat
                        Session Structure: most sessions are broken into a Private/Semi-Private Lesson, Stroking Lesson
                        and Off-Ice Lesson. </p>
                </div>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Private/Semi-Private Lesson</span>: skaters will select their own coach
                    and work with this coach to build figure skating skills, programs and complete assessments. This
                    coach is responsible for the skater's development and goals.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Stroking Lesson</span>: this lesson is combined with the Intro-to-Figure
                    Skate skaters and focuses on speed, stamina, turns, edges and artistic expression. Skaters will be
                    encouraged to skate with speed and engage in a variety of drills and exercises. Skills are adjusted
                    according to the skater's skating level to ensure that everyone is challenged.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Off-Ice Lesson:</span>: this lesson is combined with the Intro-to-Figure
                    Skate skaters and focuses on flexibility, jump/spin technique and cardio. Skaters will participate
                    in a group lesson with different focus areas every week. Skills are adjusted according to the
                    skater's skating level to ensure that everyone is challenged.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    Clothing Recommendation: gloves/mittens, tight-fitting pants, a light jacket or sweater.
                    Skaters should avoid wearing bulky clothes that inhibits movement. Loose pants can become caught in
                    a skaters skates, posing a safety risk.
                    Selecting a Coach: all skaters will have the opportunity to select the coach that they will to
                    receive private or semi-private lessons from.
                    When selecting a coach, please take into consideration your skaters preference and the skaters
                    goals. Each coaches qualifications and contact information can be viewed on our Coaches Page.
                    All communications regarding your skater's development should be held with your coach before
                    approaching any other coach for additional lessons.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Competitions</span>: skaters may choose to participate in competitions.
                    These events do have additional costs associated which may include: travel, coaching, registration,
                    accommodations and clothing. For more information, please contact your coach and/or
                    federationskating@gmail.com.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Ice Show</span>: every March, we put on a Annual Ice Show which allows
                    skaters to show-off their new skills to friends and family. This event is completely free to
                    participate in. For more information, please contact federationskating@gmail.com.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Partnering Sessions</span>: once a skater reaches a particular dance
                    level, they have the opportunity to partner with a professional ice dance partner for practice and
                    then assessment days. These events do have additional costs associated which may include: travel,
                    coaching and dance partner fees. For more information please contact your coach and/or
                    federationskating@gmail.com.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Assessment Levels:</span>: skills are divided into four disciplines.
                    Each discipline is then divided into eleven levels - Star 1-10 and Gold. Each level contains a
                    number of skills and is completed upon the passing of the assessment.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Ice Dance </span>: composed of steps, turns and movements placed on a
                    pattern and skated to music. This discipline teaches edges, flow, control, unison, musicality and
                    timing. These skills are first taught in isolation and then placed on a pattern. May be performed
                    solo, shadowed or with a partner.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Skating Skills </span>: edges, turns, steps and field movements make up
                    this discipline. These skills are the basic components of all figure skating and can be found in the
                    three other disciplines. The skills are judged on edge quality, control, power and speed.
                </p>
                <br/>
                <p className="lg:text-2xl">
                    <span className="underline">Artistic </span>: designed to challenge a skaters' musicality,
                    expression, movement and creativity. This discipline gives the skaters' the opportunity to explore
                    the performance aspect of skating.
                </p>
            </div>
        </section>
    );
};

export default FigureSkateParentInfo;
