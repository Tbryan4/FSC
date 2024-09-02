import React from 'react';
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/intro-to-figure-skate-banner.webp";
import {IntroToFigureSkateHeader} from "../Components/Programs/IntroToFigureSkate/IntroToFigureSkateHeader";
import IntroToFigureSkateProgramInfo from "../Components/Programs/IntroToFigureSkate/IntroToFigureSkateProgramInfo";




const  IntroToFigureSkatePage = () => {
    return (
        <div>
            <Banner
                image={{
                    src: BannerImg,
                    alt: "Executive Team Image"
                }}
            />
            <IntroToFigureSkateHeader/>
            <IntroToFigureSkateProgramInfo
            />
        </div>
    );
};

export default IntroToFigureSkatePage;
