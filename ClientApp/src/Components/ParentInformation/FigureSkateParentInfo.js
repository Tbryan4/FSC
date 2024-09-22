import React from 'react';
import ParentInformationFAQ from "../Faq/ParentInformationFAQ";

const IFSfaqs = [
    {
        title: "What equipment is required?",
        answer: "Figure skates and a CSA-approved helmet. Upon completion of the Stage 5 Canskate skating skills, the coach/program coordinator and parents/guardians may discuss removing the child's helmet. All helmets must be worn until coach and/or program coordinator and parent approval is granted."
    },
    {
        title: "How is the session structured?",
        answer: "Each session is broken into a Group Lesson, Stroking Lesson, and Off-Ice Lesson."
    },
    {
        title: "What is included in the Group Lesson?",
        answer: "The group lesson builds upon the skills learned in Canskate while teaching the basic figure skating skills such as jumps, spins, turns, and steps."
    },
    {
        title: "What happens during the Stroking Lesson?",
        answer: "This lesson is combined with the StarSkate and CompetitiveSkate skaters and focuses on speed, stamina, turns, edges, and artistic expression. Skaters will be encouraged to skate with speed and engage in a variety of drills and exercises."
    },
    {
        title: "What does the Off-Ice Lesson entail?",
        answer: "This lesson is combined with the StarSkate and CompetitiveSkate skaters and focuses on flexibility, jump/spin technique, and cardio. Skaters will participate in a group lesson with different focus areas every week."
    },
    {
        title: "What clothing is recommended for skating?",
        answer: "Gloves/mittens, tight-fitting pants, a light jacket or sweater. Skaters should avoid wearing bulky clothes that inhibit movement. Loose pants can become caught in a skater's skates, posing a safety risk."
    },
    {
        title: "What events can skaters participate in?",
        answer: "Skaters may choose to participate in a variety of events over the course of the season, including fun competitions and an Annual Ice Show in March. Fun Competitions have additional costs, including travel, coaching, registration, and clothing. The Ice Show is completely free to participate in."
    }
];

const SSCSfaqs = [
    {
        title: "What is the session structure?",
        answer: (
            <div className="text-left">
                <div>
                    <div className="mb-4">
                        <strong className="text-lg">Private/Semi-Private Lesson:</strong> <br />
                        <span className="text-xl">Skaters will select their own coach and work with this coach to build figure skating skills, programs, and complete assessments. This coach is responsible for the skater's development and goals.</span>
                    </div>
                    <div className="mb-4">
                        <strong className="text-lg">Stroking Lesson:</strong> <br />
                        <span className="text-xl">This lesson is combined with the Intro-to-Figure Skate skaters and focuses on speed, stamina, turns, edges, and artistic expression. Skaters will be encouraged to skate with speed and engage in a variety of drills and exercises. Skills are adjusted according to the skater's skating level to ensure that everyone is challenged.</span>
                    </div>
                    <div className="mb-4">
                        <strong className="text-lg">Off-Ice Lesson:</strong> <br />
                        <span className="text-xl">This lesson is combined with the Intro-to-Figure Skate skaters and focuses on flexibility, jump/spin technique, and cardio. Skaters will participate in a group lesson with different focus areas every week. Skills are adjusted according to the skater's skating level to ensure that everyone is challenged.</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "What clothing is recommended for skating?",
        answer: "Gloves/mittens, tight-fitting pants, a light jacket or sweater. Skaters should avoid wearing bulky clothes that inhibit movement. Loose pants can become caught in a skater's skates, posing a safety risk."
    },
    {
        title: "How do skaters select a coach?",
        answer: "All skaters will have the opportunity to select the coach they will receive private or semi-private lessons from. When selecting a coach, please consider your skater's preference and goals. Each coach's qualifications and contact information can be viewed on our Coaches Page."
    },
    {
        title: "Events",
        answer: (
            <div className="text-left">
                Skaters may choose to participate in a variety of events over the course of the season.
                <br /><br />
                <strong>Competitions:</strong> <br />
                Skaters may choose to participate in competitions. These events do have additional costs associated which may include: travel, coaching, registration, accommodations, and clothing. For more information, please contact your coach and/or federationskating@gmail.com.
                <br /><br />
                <strong>Ice Show:</strong> <br />
                Every March, we put on an Annual Ice Show which allows skaters to show off their new skills to friends and family. This event is completely free to participate in. For more information, please contact federationskating@gmail.com.
                <br /><br />
                <strong>Partnering Sessions:</strong> <br />
                Once a skater reaches a particular dance level, they have the opportunity to partner with a professional ice dance partner for practice and then assessment days. These events do have additional costs associated which may include: travel, coaching, and dance partner fees. For more information, please contact your coach and/or federationskating@gmail.com.
            </div>
        )
    },
    {
        title: "Assessment Levels",
        answer: (
            <div className="text-left">
                Skills are divided into four disciplines. Each discipline is then divided into eleven levels—Star 1-10 and Gold. Each level contains a number of skills and is completed upon the passing of the assessment.
                <br /><br />
                <strong>Ice Dance:</strong> <br />
                Composed of steps, turns, and movements placed on a pattern and skated to music. This discipline teaches edges, flow, control, unison, musicality, and timing. These skills are first taught in isolation and then placed on a pattern. May be performed solo, shadowed, or with a partner.
                <br /><br />
                <strong>Skating Skills:</strong> <br />
                Edges, turns, steps, and field movements make up this discipline. These skills are the basic components of all figure skating and can be found in the three other disciplines. The skills are judged on edge quality, control, power, and speed.
                <br /><br />
                <strong>Artistic:</strong> <br />
                Designed to challenge a skater's musicality, expression, movement, and creativity. This discipline gives the skaters the opportunity to explore the performance aspect of skating.
                <br /><br />
                <strong>Free Skate:</strong> <br />
                Consists of jumps, spins, footwork, and stroking. These skills are performed individually or in sequences. This discipline is split into program performance and elements in isolation assessments.
            </div>
        )
    }
];

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
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Figure Skating Parent
                        Information</h2>
                    <p className="lg:text-2xl">
                        This page outlines important information pertaining to the Intro-to-Figure Skating program and
                        the StarSkate/CompetitiveSkate programs. For more information, please contact{" "}
                        <a href="mailto:federationskating@gmail.com">federationskating@gmail.com</a>.
                    </p>
                </div>
                <br/>
                <div className="mb-12 text-center md:mb-18 lg:mb-20">
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
                    <p className="lg:text-2xl">{description}</p>
                </div>
                <ParentInformationFAQ
                    heading="Intro-to-Figure Skating FAQs"
                    description="Find answers to your questions about skating."
                    questions={IFSfaqs}
                />                <div className="mb-12 mt-12 text-center md:mb-18 lg:mb-20">
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">StarSkate &
                        CompetitiveSkate</h2>
                    <p className="lg:text-2xl">StarSkate is a recreational figure skating program that teaches figure
                        skating skills to skaters of all ages.
                        CompetitiveSkate is a figure skating program for skaters who wish to compete in Skate Canada
                        competitions.
                        Equipment Required: figure skates and yoga mat
                        Session Structure: most sessions are broken into a Private/Semi-Private Lesson, Stroking Lesson
                        and Off-Ice Lesson. </p>

                <ParentInformationFAQ
                    heading="StarSkate & CompetitiveSkate FAQs"
                    description="Find answers to your questions about skating."
                    questions={SSCSfaqs}
                />
            </div>
            </div>
        </section>
    );
};

export default FigureSkateParentInfo;
