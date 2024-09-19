import React from 'react';
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/intro-to-figure-skate-banner.webp";
import {IntroToFigureSkatingHeader} from "../Components/Programs/IntroToFigureSkate/IntroToFigureSkateHeader";
import IntroToFigureSkatingProgramInfo from "../Components/Programs/IntroToFigureSkate/IntroToFigureSkateProgramInfo";




const  IntroToFigureSkatingPage = () => {
    return (
        <div>
            <Banner
                heading="Intro To Figure Skating"
                description="
Intro-to-Figure Skating (IFS) is a fun group program for skaters entering figure skating, teaching foundational skills like edges, turns, jumps, and spins. With a 1:10 coach-to-student ratio, skaters progress at their own pace through engaging sessions filled with teaching aids, music, and activities."
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
