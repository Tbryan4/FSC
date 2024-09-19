import React from 'react';
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/adult-figure-skate.webp";
import {AdultFigureSkatingHeader} from "../Components/Programs/AdultFigureSkate/AdultFigureSkateHeader";
import AdultFigureSkateProgramInfo from "../Components/Programs/AdultFigureSkate/AdultFigureSkateProgramInfo";




const  AdultFigureSkatePage = () => {
    return (
        <div>
            <Banner
                heading="Adult Figure Skating"
                description="Intro-to-Figure Skating (IFS) is a group program designed for skaters who wish to enter into the sport of figure skating. Skaters are taught the basic figure skating skills, including edges, turns, jumps and spins, in a group lesson format. "
                image={{
                    src: BannerImg,
                    alt: "Executive Team Image"
                }}
            />
            <AdultFigureSkatingHeader/>
            <AdultFigureSkateProgramInfo
            />
        </div>
    );
};

export default AdultFigureSkatePage;
