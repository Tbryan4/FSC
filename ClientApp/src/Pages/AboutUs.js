import React from 'react';
import {ScrollingBanner} from "../Components/ScrollingBanner/ScrollingBanner";
import img1 from "../assets/about-us-scrolling-banner/scrolling-banner-img1.webp"
import img2 from "../assets/about-us-scrolling-banner/scrolling-banner-img2.webp"
import img3 from "../assets/about-us-scrolling-banner/scrolling-banner-img3.webp"
import img4 from "../assets/about-us-scrolling-banner/scrolling-banner-img4.webp"
import img5 from "../assets/about-us-scrolling-banner/scrolling-banner-img5.webp"
import img6 from "../assets/about-us-scrolling-banner/scrolling-banner-img6.webp"
import img7 from "../assets/about-us-scrolling-banner/scrolling-banner-img7.webp"
import {Faq} from "../Components/Faq/FAQ";

const buttons = [
    { title: "View More" },
];

const images = [
    {
        src: img1,
        alt: "Image 1 description",
    },
    {
        src: img2,
        alt: "Image 2 description",
    },
    {
        src: img3,
        alt: "Image 3 description",
    },
    {
        src: img4,
        alt: "Image 4 description",
    },
    {
        src: img5,
        alt: "Image 5 description",
    },
    {
        src: img6,
        alt: "Image 6 description",
    },
    {
        src: img7,
        alt: "Image 7 description",
    },
];

const AboutPage = () => {
    return (
        <div>
            <ScrollingBanner
                heading={"About Us"}
                description={"Federation Skating Club is a welcoming figure skating club where skaters of all levels can thrive. Our certified coaches are committed to helping each skater improve, whether they're just starting out or competing. Join us to enjoy the sport, refine your skills, and be part of our skating community."}
                images={images} 
                buttons={buttons}
            />
            <Faq/>
        </div>
    );
};

export default AboutPage;
