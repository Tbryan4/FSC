import React from 'react';
import { Coaches } from "../Components/CoachingTeam/Coaches";
import Banner from "../Components/Banner/Banner";

import BannerImg from "../assets/Banners/coaching-team-banner.webp"


// star skate coaches
import BaseCoachImg1 from "../assets/coaching-staff/jenna-hodnefield.webp";
import BaseCoachImg2 from "../assets/coaching-staff/abi.png";
import BaseCoachImg3 from "../assets/coaching-staff/rhea.png";

import SupplementalCoachImg1 from "../assets/coaching-staff/jaelyn.png";
import SupplementalCoachImg2 from "../assets/coaching-staff/marie.png";
import SupplementalCoachImg3 from "../assets/coaching-staff/grace.png"
import SupplementalCoachImg4 from "../assets/coaching-staff/melissa.png"

// learn to skate coaches
import BaseCoachImg5 from "../assets/coaching-staff/katrina-abou-rjeily.webp"
import BaseCoachImg7 from "../assets/coaching-staff/alyssa.png"
import BaseCoachImg8 from "../assets/coaching-staff/astha.png"
import BaseCoachImg9 from "../assets/coaching-staff/elene.png"
import BaseCoachImg10 from "../assets/coaching-staff/melanie.png"

// CanPower coaches
import BaseCoachImg6 from "../assets/coaching-staff/brodie-case.webp"


const starSkateBaseCoaches = [
    {
        image: { src: BaseCoachImg1, alt: "Jenna Hodnefield" },
        name: "Jenna Hodnefield",
        jobTitle: "Base Coach",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>Regional Coach Certified</li>
                    <li>Club Coach Certified</li>
                    <li>Program Coordinator</li>
                    <li>10 yrs experience coaching CanSkate and STARSkate</li>
                    <li>7 yrs Program Assistant experience</li>
                    <li>Gold Skills, Gold Interpretive, Gold Dance, Rhumba Diamond Dance, Senior Bronze FreeSkate Elements & Program, Accredited Star 7 Elements</li>
                    <li>Experience coaching up to gold levels</li>
                    <li>STAR competition coaching experience</li>
                    <li>Coordinator - Devon Skating Club</li>
                    <li>BSc in Agricultural Business Management</li>
                </ul>
            </>
        ),
        email: "j.hodnefiel1@gmail.com",
        type: 'base',
    }
    ,

    {
        image: {src: BaseCoachImg2, alt: "Abi Seewald"},
        name: "Abi Seewald",
        jobTitle: "Base Coach",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>Regional Coach Certified</li>
                    <li>Club Coach Certified</li>
                    <li>Program Coordinator</li>
                    <li>10 yrs experience coaching CanSkate, STARSkate, Competitive</li>
                    <li>Diamond Dances, Gold Skills, Gold Interpretive, Senior Silver Freeskate (now Star 10 Freeskate)</li>
                    <li>4th, 6th at 2012 Nationals, two-time Gold medalist at AB/NWT/NUN Sectionals Novice & Junior Ice Dance, 3-time Challenge competitor</li>
                    <li>Experience coaching Star 1 to gold levels, diamond dance, and competitive</li>
                    <li>Specialized in choreography, footwork, and partner work</li>
                    <li>16+ yrs Dance experience (RAD Ballet, Contemporary, Ballroom, Bharathanatyam, and Bollywood)</li>
                    <li>BSc, MPH, MD in progress</li>
                </ul>
            </>
        ),        
        email: "a.seewald98@gmail.com",
        type: 'base' 
    },
    {
        image: {src: BaseCoachImg3, alt: "Rhea Sherman"},
        name: "Rhea Sherman",
        jobTitle: "Base Coach",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>Regional Coach Certified</li>
                    <li>Club Coach Certified</li>
                    <li>CanPowerSkate Certified</li>
                    <li>9 yrs experience coaching CanSkate and STARSkate</li>
                    <li>5 years program assistant experience</li>
                    <li>Junior Silver Skills, Junior Bronze Freeskate, Junior Silver Dance, and Bronze Interpretative</li>
                    <li>Bachelor of Economics</li>
                    <li>Bilingual (French - English)</li>
                </ul>
            </>
        ),        email: "rheajsherman@gmail.com",
        type: 'base' 
    },
    {
        image: {src: BaseCoachImg9, alt: "Elène Haave Audet"},
        name: "Elène Haave Audet",
        jobTitle: "Base Coach",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>Regional Coach Certified</li>
                    <li>Club Coach Certified</li>
                    <li>9 years coaching experience of STARSkate and competitive skate</li>
                    <li>Quad gold (FreeSkate, Dance, Skills, Artistic) and Diamond dances</li>
                    <li>FreeSkate competitor and competed at the Junior level at AB Sectionals (Provincials)</li>
                    <li>Experience coaching all levels, from Pre-CanSkate to Senior Competitive, and adults</li>
                    <li>STAR competition coaching experience</li>
                    <li>French fluency</li>
                    <li>BSc, MSc, and a PhD candidate in biology</li>
                </ul>
            </>
        ),
        email: "ehaaveaudet@gmail.com",
        type: 'base' 
    },
];
const supplementalStarSkateCoaches = [
    {
        image: {src: SupplementalCoachImg1, alt: "Jaelyn Hodnefield"},
        name: "Jaelyn Hodnefield",
        jobTitle: "Supplemental Coach",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>Club Coach Certified</li>
                    <li>Regional Coach Certified</li>
                    <li>Event Assistant Administrator</li>
                    <li>4 years coaching experience</li>
                    <li>7 years program assistant experience</li>
                    <li>Gold Skills, Gold Dance, Silver Artistic, Junior Bronze Freeskate</li>
                    <li>BA in Anthropology at U of A in progress</li>
                </ul>
            </>
        ),
        email: "jaelyn.hodnefield@example.com",
        type: 'supplemental' 
    },
    {
        image: {src: SupplementalCoachImg2, alt: "Marie-Terez Abou Rjeily"},
        name: "Marie-Terez Abou Rjeily",
        jobTitle: "Supplemental Coach",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>Club Coach Certified</li>
                    <li>Regional Coach Certified</li>
                    <li>PA Coordinator</li>
                    <li>5 years coaching experience</li>
                    <li>3 years coaching synchronized skating</li>
                    <li>Competitive synchronized skating experience</li>
                    <li>Coaching synchro competition experience (Sectionals)</li>
                    <li>Star 6 Skills, Star 6 Dance, Star 2 FreeSkate, Pre-Novice Synchro</li>
                    <li>Active skater</li>
                    <li>French and Arabic fluency</li>
                    <li>BA in Psychology and Political Science at UofA in progress</li>
                </ul>
            </>
        ),
        email: "marie-terez.abou-rjeily@example.com",
        type: 'supplemental' 
    },
    {
        image: {src: BaseCoachImg10, alt: "Melanie Cheng"},
        name: "Melanie Cheng",
        jobTitle: "Supplemental Coach",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>Club Coach Certified</li>
                    <li>Regional Coach Trained</li>
                    <li>French speaking</li>
                    <li>3 years experience coaching</li>
                    <li>3 years Program Assistant experience</li>
                    <li>Gold Skills, Gold Artistic, Gold FreeSkate Program, STAR 10 Elements, STAR 7 Dance</li>
                    <li>Active figure skater</li>
                    <li>Student at Lillian Osborne High School</li>
                </ul>
            </>
        ),
        email: "melanie.cheng@example.com",
        type: 'supplemental'
    },
    {
        image: {src: SupplementalCoachImg3, alt: "Grace Fedor"},
        name: "Grace Fedor",
        jobTitle: "Supplemental Coach",
        description: (
                        <>
                            <ul className="list-disc pl-5 text-left">
                                <li>Regional Coach Trained</li>
                                <li>Club Coach Certified</li>
                                <li>3 years coaching experience</li>
                                <li>7 years Program Assistant experience</li>
                                <li>Gold Dance, Gold Artistic, Gold Skills, Star 9b Freeskate</li>
                                <li>BScN in progress at MacEwan University</li>
                            </ul>
                        </>
                    ),

    email: "grace.fedor@example.com",
        type: 'supplemental' 
    },

    {
        image: {src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg", alt: "Nidhi Patel"},
        name: "Nidhi Patel",
        jobTitle: "Supplemental Coach",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>Club Coach Certified</li>
                    <li>Regional Coach Certified in Training</li>
                    <li>3 years of coaching experience</li>
                    <li>4 years of Program Assistant experience</li>
                    <li>Gold Artistic, Star 8 Skills, Star 8 Dances, Star 8 Freeskate, Star 8 Freeskate Program</li>
                    <li>Active figure skater</li>
                    <li>Current student at the University of Alberta studying Physiology</li>
                </ul>
            </>
        ),
        email: "",
        type: 'supplemental'
    },

    {
        image: {src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg", alt: "Nidhi Patel"},
        name: "Andrea Parry",
        jobTitle: "Supplemental Coach",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>National Trained Coach</li>
                    <li>12 years coaching experience</li>
                    <li>Coaches all disciplines from STARSkate levels 1 through Gold and competitive programming</li>
                    <li>Coached to Provincial Medalist</li>
                    <li>Competed Junior Competitive U19 with Gold Freeskate, Gold Dances, Gold Skills, and Gold Interpretive (artistic)</li>
                    <li>Bachelor of Social Work with a focus on child psychology</li>
                </ul>
            </>
        ),
        email: "",
        type: 'supplemental'
    },

    {
        image: {src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg", alt: "Megan Semmens"},
        name: "Megan Semmens",
        jobTitle: "Supplemental Coach",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>CanSkate Certified</li>
                    <li>Regional Trained</li>
                    <li>Learn to Skate Assistant Administrator</li>
                    <li>3 years coaching experience</li>
                    <li>4 years Program Assistant experience</li>
                    <li>Gold Artistic, Star 8 Skills, Star 7B Dance, Star 6 Freeskate</li>
                    <li>Active skater</li>
                    <li>Diploma in Christian Leadership and Mission</li>
                </ul>
            </>
        ),
        email: "",
        type: 'supplemental'
    },

    {
        image: {src: SupplementalCoachImg4, alt: "Melissa Lam"},
        name: "Melissa Lam",
        jobTitle: "Supplemental Coach",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>CanSkate Certified</li>
                    <li>Regional Trained</li>
                    <li>4 years coaching experience</li>
                    <li>5 years Program Assistant experience</li>
                    <li>Star 9 Artistic, Star 7 Dance, Star 5 Skills, Star 5 Freeskate</li>
                    <li>Active Skater</li>
                    <li>Master of Counselling in progress at City University of Seattle</li>
                </ul>
            </>
        ),
        email: "",
        type: 'supplemental'
    },
];
const learnToSkateCoaches = [
    {
        image: { src: BaseCoachImg5, alt: "Katrina Abou Rjeily" },
        name: "Katrina Abou Rjeily",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>Club Coach Trained</li>
                    <li>3 years experience coaching</li>
                    <li>6 years Program Assistant experience</li>
                    <li>Star 5 Skills, Star 2 Dance, Star 1 Freeskate</li>
                    <li>Competitive synchro skating experience - sectional</li>
                    <li>French fluency</li>
                    <li>BEd from the University of Alberta</li>
                </ul>
            </>
        ),
        type: 'base',
    },
    {
        image: { src: BaseCoachImg7, alt: "Alyssa Higo" },
        name: "Alyssa Higo",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>Club Coach Trained</li>
                    <li>Regional Trained</li>
                    <li>Trained Special Olympics Community Coach</li>
                    <li>2 years coaching experience</li>
                    <li>Star 3 FreeSkate, Star 6 Skills, Star 7 Dance, Star 5 Artistic</li>
                    <li>Program Assistant experience</li>
                    <li>Active skater</li>
                </ul>
            </>
        ),
        type: 'base',
    },
    {
        image: { src: BaseCoachImg8, alt: "Astha Shah" },
        name: "Astha Shah",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>Club Coach Trained</li>
                    <li>Regional In-Training</li>
                    <li>4 years PA experience</li>
                    <li>1 year coaching experience</li>
                    <li>Star 5 FreeSkate, Star 6 Skills, Star 6 Dance</li>
                    <li>Hindi fluency</li>
                    <li>Active skater</li>
                </ul>
            </>
        ),
        type: 'base',
    },
    {
        image: { src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg", alt: "Astha Shah" },
        name: "Ellen Kim",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>Club Coach Trained</li>
                    <li>Regional In-Training</li>
                    <li>1 year PA experience</li>
                    <li>1 year coaching experience</li>
                    <li>Star 7 FreeSkate, Star 7 Skills, Star 6ac Dance</li>
                    <li>Korean fluency</li>
                    <li>Active skater</li>
                </ul>
            </>
        ),
        type: 'base',
    },
];
const CanPowerCoaches = [
    {
        image: { src: BaseCoachImg6, alt: "Brodie Case" },
        name: "Brodie Case",
        description: (
            <>
                <ul className="list-disc pl-5 text-left">
                    <li>CanPower Coach Trained</li>
                    <li>20+ years of hockey experience</li>
                    <li>Played Tier 1 hockey</li>
                    <li>Taken several credited competitive coaching courses at the college and university level</li>
                    <li>Professional photographer with a Certificate from the New York Institute of Photography</li>
                    <li>Bachelor of Kinesiology</li>
                </ul>
            </>
        ),
        type: 'base',
        email: "brodoe15@gmail.com",
    },
];
const CoachPage = () => {
    return (
        <div>
            <Banner
                heading="Coaching Staff"
                description="Our coaching team is a dynamic part of the Federation Skating Club that molds and shapes the atmosphere on and off the ice. Their enthusiastic dedication to the skaters and our programs enables them to pass on knowledge and build the basic skills of all our skaters."
                buttons={[{ title: "Contact Us" }]}
                image={{
                    src: BannerImg,
                    alt: "Coach Image"
                }}
            />
            
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
