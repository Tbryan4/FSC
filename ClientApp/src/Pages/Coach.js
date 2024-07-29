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
        description: "Jenna is a Regional and Club Coach Certified professional with nine years of experience in CanSkate and STARSkate. She holds a BSc in Agricultural Business Management and various skating certifications, including Gold Skills and Gold Interpretive.",
        email: "j.hodnefiel1@gmail.com",
        type: 'base' 
    },
    {
        image: {src: BaseCoachImg2, alt: "Abi Seewald"},
        name: "Abi Seewald",
        jobTitle: "Base Coach",
        description: "Abi is a Regional and Club Coach Certified professional with nine years of experience coaching CanSkate, STARSkate, and competitive skating. She has extensive experience in choreography, footwork, and partner work, with numerous achievements including multiple gold medals at sectionals and nationals, and holds a BSc with MPH and MD in progress.",
        email: "a.seewald98@gmail.com",
        type: 'base' 
    },
    {
        image: {src: BaseCoachImg3, alt: "Rhea Sherman"},
        name: "Rhea Sherman",
        jobTitle: "Base Coach",
        description: "Rhea is a Regional and Club Coach Certified professional with eight years of experience in CanSkate and STARSkate, along with five years as a program assistant. She holds certifications in Junior Silver Skills, Junior Bronze Freeskate, Junior Silver Dance, and Bronze Interpretative, and has a Bachelor of Economics. Rhea is bilingual in French and English.",
        email: "rheajsherman@gmail.com",
        type: 'base' 
    },
    {
        image: {src: BaseCoachImg4, alt: "Emily Johnston"},
        name: "Emily Johnston",
        jobTitle: "Base Coach",
        description: "\n" +
            "Emily is a Regional and Club Coach Certified professional with six years of experience in CanSkate and STARSkate. She holds Gold Skills and Gold Dance certifications, is the ITS Director for Leduc Skating Club, and has been recognized as Skate Alberta/NWT/Nunavut Central Region Volunteer Coach of the Year in 2018. Emily is also a trained Special Olympics Community Coach and Aboriginal Sport Coach, with a BSc and BEd in progress.",
        email: "emilyyjohnstonn3@gmail.com",
        type: 'base' 
    },
    {
        image: {src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg", alt: "Elène Haave Audet"},
        name: "Elène Haave Audet",
        jobTitle: "Base Coach",
        description: "\n" +
            "Eleva is a Regional and Club Coach Certified professional with nine years of experience coaching STARSkate and competitive skating. She holds quad gold certifications and Diamond dances, has competed at the Junior level at AB Sectionals, and has experience coaching all levels from Pre-CanSkate to Senior Competitive, including adults. Eleva also holds a BSc and MSc, and is a PhD candidate in biology.",
        email: "ehaaveaudet@gmail.com",
        type: 'base' 
    },
];
const supplementalStarSkateCoaches = [
    {
        image: {src: SupplementalCoachImg1, alt: "Jaelyn Hodnefield"},
        name: "Jaelyn Hodnefield",
        jobTitle: "Supplemental Coach",
        description: "\n" +
            "Jaelyn is a Club Coach Certified and Regional Coach Trained professional with three years of coaching experience and seven years as a program assistant. She holds certifications in Gold Skills, Gold Dance, Silver Artistic, and Junior Bronze Freeskate, and is pursuing a BA in Anthropology at the University of Alberta.",
        email: "jaelyn.hodnefield@example.com",
        type: 'supplemental' 
    },
    {
        image: {src: SupplementalCoachImg2, alt: "Marie-Terez Abou Rjeily"},
        name: "Marie-Terez Abou Rjeily",
        jobTitle: "Supplemental Coach",
        description: "\n" +
            "Marie is a Club Coach Certified and Regionally Trained professional with four years of coaching experience, including two years in synchronized skating. She has competitive experience in synchronized skating and has coached synchro competitions at the Sectionals level. Marie holds certifications in Star 6 Skills, Star 6 Dance, and Star 2 FreeSkate, is an active skater, and is pursuing a BA in Psychology and Political Science at the University of Alberta.",
        email: "marie-terez.abou-rjeily@example.com",
        type: 'supplemental' 
    },
    {
        image: {src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg", alt: "Melanie Cheng"},
        name: "Melanie Cheng",
        jobTitle: "Supplemental Coach",
        description: "\n" +
            "Melanie Cheng is Club Coach Certified and Regionally Coach Trained with two years of coaching experience and three years as a Program Assistant. She holds certifications in Gold Skills, Gold Artistic, Gold FreeSkate Program, STAR 10 Elements, and STAR 7 Dance, is an active figure skater, and is currently a student at Lillian Osborne High School.",
        email: "melanie.cheng@example.com",
        type: 'supplemental'
    },
    {
        image: {src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg", alt: "Grace Fedor"},
        name: "Grace Fedor",
        jobTitle: "Supplemental Coach",
        description: "Grace is Club Coach Certified and Regionally Coach Trained with two years of coaching experience and seven years as a Program Assistant. She holds certifications in Gold Dance, Gold Artistic, Gold Skills, and Star 9b FreeSkate, and is pursuing a BScN at MacEwan University.",
        email: "grace.fedor@example.com",
        type: 'supplemental' 
    },

    {
        image: {src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg", alt: "Melissa Lam"},
        name: "Melissa Lam",
        jobTitle: "Supplemental Coach",
        description: "Melissa Lam is Regionally Coach Trained.",
        email: "",
        type: 'supplemental'
    },
];
const learnToSkateCoaches = [
    {
        image: { src: BaseCoachImg5, alt: "Katrina Abou Rjeily" },
        name: "Katrina Abou Rjeily",
        jobTitle: "Base Coach",
        description: "Katrina is Club Coach Trained with three years of coaching experience and six years as a Program Assistant. She holds certifications in Star 5 Skills, Star 1 Dance, and Star 1 FreeSkate, has competitive synchro skating experience at the sectional level, and is pursuing a BEd at the University of Alberta.",
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
        description: "Ashtha is a Club Coach In-Training with four years of Program Assistant experience and is an active skater.",
        type: 'base',
    },
];
const CanPowerCoaches = [
    {
        image: { src: BaseCoachImg6, alt: "Brodie Case" },
        name: "Brodie Case",
        jobTitle: "Base Coach",
        description: "Brodie is CanPower Coach Trained with over 20 years of hockey experience, including playing Tier 1 hockey. He has completed several credited competitive coaching courses at the college and university level and is also a professional photographer with a Certificate from the New York Institute of Photography. Brodie holds a Bachelor of Kinesiology.",
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
