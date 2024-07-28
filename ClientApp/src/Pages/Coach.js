import React from 'react';
import { Coaches } from "../Components/CoachingTeam/Coaches";
import { CoachingTeamBanner } from "../Components/CoachingTeamBanner/CoachingTeamBanner";

// star skate coaches
import BaseCoachImg1 from "../assets/coaching-staff/jenna-hodnefield.jpg";
import BaseCoachImg2 from "../assets/coaching-staff/abi-seewald.jpeg";
import BaseCoachImg3 from "../assets/coaching-staff/rhea-sherman.jpg";
import BaseCoachImg4 from "../assets/coaching-staff/emily-johnston.jpg";

import SupplementalCoachImg1 from "../assets/coaching-staff/jaelyn-hodnefield.jpg";
import SupplementalCoachImg2 from "../assets/coaching-staff/marie-terez-abou-rjeily  .jpg";

// learn to skate coaches
import BaseCoachImg5 from "../assets/coaching-staff/katrina-abou-rjeily  .jpg"

// CanPower coaches
import BaseCoachImg6 from "../assets/coaching-staff/brodie-case.jpg"


const starSkateBaseCoaches = [
    {
        image: {src: BaseCoachImg1, alt: "Jenna Hodnefield"},
        name: "Jenna Hodnefield",
        jobTitle: "Base Coach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        email: "j.hodnefiel1@gmail.com",
        type: 'base' 
    },
    {
        image: {src: BaseCoachImg2, alt: "Abi Seewald"},
        name: "Abi Seewald",
        jobTitle: "Base Coach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        email: "a.seewald98@gmail.com",
        type: 'base' 
    },
    {
        image: {src: BaseCoachImg3, alt: "Rhea Sherman"},
        name: "Rhea Sherman",
        jobTitle: "Base Coach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        email: "rheajsherman@gmail.com",
        type: 'base' 
    },
    {
        image: {src: BaseCoachImg4, alt: "Emily Johnston"},
        name: "Emily Johnston",
        jobTitle: "Base Coach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        email: "emilyyjohnstonn3@gmail.com",
        type: 'base' 
    },
    {
        image: {src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg", alt: "Elène Haave Audet"},
        name: "Elène Haave Audet",
        jobTitle: "Base Coach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        email: "ehaaveaudet@gmail.com",
        type: 'base' 
    },
];
const supplementalStarSkateCoaches = [
    {
        image: {src: SupplementalCoachImg1, alt: "Jaelyn Hodnefield"},
        name: "Jaelyn Hodnefield",
        jobTitle: "Supplemental Coach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        email: "jaelyn.hodnefield@example.com",
        type: 'supplemental' 
    },
    {
        image: {src: SupplementalCoachImg2, alt: "Marie-Terez Abou Rjeily"},
        name: "Marie-Terez Abou Rjeily",
        jobTitle: "Supplemental Coach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        email: "marie-terez.abou-rjeily@example.com",
        type: 'supplemental' 
    },
    {
        image: {src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg", alt: "Melanie Cheng"},
        name: "Melanie Cheng",
        jobTitle: "Supplemental Coach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        email: "melanie.cheng@example.com",
        type: 'supplemental'
    },
    {
        image: {src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg", alt: "Grace Fedor"},
        name: "Grace Fedor",
        jobTitle: "Supplemental Coach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        email: "grace.fedor@example.com",
        type: 'supplemental' 
    },

    {
        image: {src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg", alt: "Melissa Lam"},
        name: "Melissa Lam",
        jobTitle: "Supplemental Coach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        email: "",
        type: 'supplemental'
    },
];
const learnToSkateCoaches = [
    {
        image: { src: BaseCoachImg5, alt: "Katrina Abou Rjeily" },
        name: "Katrina Abou Rjeily",
        jobTitle: "Base Coach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        type: 'base',
    },
    {
        image: { src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg", alt: "Allysa Higo" },
        name: "Allysa Higo",
        jobTitle: "Base Coach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        type: 'base',
    },
    {
        image: { src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg", alt: "Astha Shah" },
        name: "Astha Shah",
        jobTitle: "Base Coach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        type: 'base',
    },
];
const CanPowerCoaches = [
    {
        image: { src: BaseCoachImg6, alt: "Brodie Case" },
        name: "Brodie Case",
        jobTitle: "Base Coach",
        description: "CanPower Coach Trained\n" +
            "20+ yrs of hockey experience\n" +
            "Played Tier 1 hockey\n" +
            "Taken several credited competitive coaching courses at the college and university level\n" +
            "Professional photographer with a Certificate from the New York Institute of Photography\n" +
            "Bachelor of Kinesiology ",
        type: 'base',
        email: "brodoe15@gmail.com",
    },
];
const CoachPage = () => {
    return (
        <div>
            <CoachingTeamBanner/>
            
            {/*Star Skate Coaches*/}
            
            <Coaches
                tagline="Base Coaches"
                heading="StarSkate"
                description="Check Out Our StarSkate Coaches!"
                teamMembers={starSkateBaseCoaches}
            />
            <Coaches
                tagline="Supplemental Coaches"
                heading="StarSkate"
                description="Check Out Our Supplemental StarSkate Coaches!"
                teamMembers={supplementalStarSkateCoaches}
            />
            
            {/*Supplemental Coaches*/}

            <Coaches
                tagline="Base Coaches"
                heading="Learn To Skate"
                description="Check Out Our Learn To Skate Coaches!"
                teamMembers={learnToSkateCoaches}
            />
            
            {/*Can Power Coaches*/}

            <Coaches
                tagline="Base Coaches"
                heading="CanPower"
                description="Check Out Our CanPower Coaches!"
                teamMembers={CanPowerCoaches}
            />
            
            
        </div>
    );
};

export default CoachPage;
