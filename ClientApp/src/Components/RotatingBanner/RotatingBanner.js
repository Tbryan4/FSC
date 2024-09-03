import React from 'react';
import afsfLogo from "../../assets/rotating-banner-photos/afsf-logo.png";
import blobid0 from "../../assets/rotating-banner-photos/blobid0.jpg";
import jumpstart from "../../assets/rotating-banner-photos/jumpstart.png";
import kidSport from "../../assets/rotating-banner-photos/KidSport.jpg";
import proSkate from "../../assets/rotating-banner-photos/pro-skate.jpg";
import unitedCycle from "../../assets/rotating-banner-photos/united-cycle.jpg";

const images = [
    {
        url: "https://albertafigureskatingfoundation.ca/",
        src: afsfLogo,
        alt: "Alberta Figure Skating Foundation",
    },
    {
        url: "https://kidsportcanada.ca/",
        src: blobid0,
        alt: "KidSport Canada",
    },
    {
        url: "https://jumpstart.canadiantire.ca/",
        src: jumpstart,
        alt: "Jumpstart",
    },
    {
        url: "http://111sharpening.com/",
        src: kidSport,
        alt: "111 Sharpening",
    },
    {
        url: "https://www.proskate.ca/",
        src: proSkate,
        alt: "Pro Skate",
    },
    {
        url: "https://unitedsport.ca/",
        src: unitedCycle,
        alt: "United Sport",
    },
];

export const RotatingBanner = ({ heading = "Recommended Vendors & Funding Assistance", description = "Below are the programs that offer assistance with registration fees those families who require it. Each logo will direct you to their websites, where you can apply online." }) => {
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
                    <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        {heading}
                    </h2>
                    <p className="md:text-md">{description}</p>
                </div>
                <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4">
                    {images.map((image, index) => (
                        <a key={index} href={image.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto max-h-48 object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
