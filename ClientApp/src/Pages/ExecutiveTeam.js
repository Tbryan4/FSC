import React from 'react';
import ExecutiveTeam from "../Components/ExecutiveTeams/ExecutiveTeams";
import { Banner } from "../Components/StaticBanner/StaticBanner";
import BannerImg from "../assets/execteam.jpg";
import img1 from "../assets/executiveteam/scott-sutton.png";
import img2 from "../assets/executiveteam/cat-h.png";
import img3 from "../assets/executiveteam/vicky-b.png";
import img4 from "../assets/executiveteam/abby-s.png";
import img5 from "../assets/executiveteam/mr-hung.png";
import img6 from "../assets/executiveteam/kara-h.png";
import img7 from "../assets/executiveteam/Jenna-h.png";
import img8 from "../assets/executiveteam/Jessica-y.png";
import img9 from "../assets/executiveteam/monica-w.png";
import img10 from "../assets/executiveteam/ctn.png";
import img11 from "../assets/executiveteam/Kar.png"
import img12 from "../assets/executiveteam/LL.png"
import img13 from "../assets/executiveteam/ela.png"
import img14 from "../assets/executiveteam/mar.png"
import img15 from "../assets/executiveteam/as.png"
import img16 from "../assets/executiveteam/RS.png"


const ExecutiveTeamPage = () => {
    const BoardMembers = [
        {
            image: { src: img1, alt: "Scott Sutton" },
            name: "Scott Sutton",
            jobTitle: "President",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
            image: { src: img5, alt: "Nam Hoang" },
            name: "Nam Hoang",
            jobTitle: "Vice President",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
            image: { src: img8, alt: "Jessica Yu" },
            name: "Jessica Yu",
            jobTitle: "Treasurer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
            image: { src: img9, alt: "Monica Wang" },
            name: "Monica Wang",
            jobTitle: "Secretary",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
            image: { src: img3, alt: "Vicky Bu" },
            name: "Vicky Bu",
            jobTitle: "Volunteer Coordinator",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
            image: { src: img10, alt: "Cat Trinh Nguyen" },
            name: "Cat Trinh Nguyen",
            jobTitle: "Ice Show Coordinator",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
    ];

    const IceShowPlanningCommittee = [

        {
            image: { src: img11, alt: "Nam Hoang" },
            name: "Katie Abou Rjeily",
            jobTitle: "Ice Show Planning Committee",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
            image: { src: img4, alt: "Abigail Seewald" },
            name: "Abigail Seewald",
            jobTitle: "Ice Show Planning Committee",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
            image: { src: img3, alt: "Nam Hoang" },
            name: "Nam Hoang",
            jobTitle: "Ice Show Planning Committee",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
            image: { src: img2, alt: "Cat Trinh Nguyen" },
            name: "Cat Trinh Nguyen",
            jobTitle: "Ice Show Planning Committee",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
            image: { src: img12, alt: "Larry Laliberte" },
            name: "Larry Laliberte",
            jobTitle: "Ice Show Planning Committee",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
            image: { src: img13, alt: "Elène Haave Audet" },
            name: "Elène Haave Audet",
            jobTitle: "Ice Show Planning Committee",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
    ];
    
    const BanquetPlanningComittee = [
        {
            image: { src: img14, alt: "Marie Abou Rjeily" },
            name: "Marie Abou Rjeily",
            jobTitle: "Banquet Planning Committee",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
            image: { src: img15, alt: "Marie Abou Rjeily" },
            name: "Astha Shah",
            jobTitle: "Banquet Planning Committee",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
            image: { src: img16, alt: "Rhea Sherman" },
            name: "Rhea Sherman",
            jobTitle: "Banquet Planning Committee",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
            image: { src: img12, alt: "Larry Laliberte" },
            name: "Larry Laliberte",
            jobTitle: "Banquet Planning Committee",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
    ]

    const footer = {
        heading: "We're hiring!",
        description: "Volunteer with us! We are always looking for enthusiastic volunteers to get involved in our club to support our programming, events, and skaters. Email us today at federationskating@gmail.com with any interest. We are currently looking for: Test Chair (Board Position), Planning Committee members for the Banquet and Ice Show. ",
    };

    const footer2 = {
        heading: "",
        description: "",
    };

    return (
        <div>
            <Banner
                heading="Meet Our Executive Team"
                description="Our executive team is a dynamic part of the Federation Skating Club that shapes the vision and direction of our organization. Their strategic leadership and dedication enable us to continually grow and achieve excellence in all our programs."
                footer={""}
                buttons={[{ title: "Contact Us" }]}
                image={{
                    src: BannerImg,
                    alt: "Executive Team Image"
                }}
            />
            <ExecutiveTeam
                tagline="Meet our"
                heading="Board Members"
                description="All Board positions have a $150 credit given to the member account per season that they are an active board member. Thank you for helping our club run!"
                teamMembers={BoardMembers}
            />

            <ExecutiveTeam
                tagline="Meet our"
                heading="Ice Show Planning Committee"
                description=""
                teamMembers={IceShowPlanningCommittee}
            />
            
            <ExecutiveTeam
                tagline="Meet our"
                heading="Banquet Planning Committee"
                description=""
                teamMembers={BanquetPlanningComittee}
                footer={footer}

            />
        </div>
    );
};

export default ExecutiveTeamPage;
