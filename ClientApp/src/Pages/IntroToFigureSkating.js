import React from 'react';
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/intro-to-figure-skate-banner.webp";
import {IntroToFigureSkatingHeader} from "../Components/Programs/IntroToFigureSkate/IntroToFigureSkateHeader";
import IntroToFigureSkatingProgramInfo from "../Components/Programs/IntroToFigureSkate/IntroToFigureSkateProgramInfo";




const  IntroToFigureSkatingPage = () => {
    return (
        <div>
            <Banner
                image={{
                    src: BannerImg,
                    alt: "Intro To Figure Skating Page"
            }}/>
            <IntroToFigureSkatingHeader/>
            <IntroToFigureSkatingProgramInfo
            />
        </div>
    );
};

export default IntroToFigureSkatingPage;
