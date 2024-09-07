import React from 'react';
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/adult-figure-skate.webp";
import {AdultFigureSkatingHeader} from "../Components/Programs/AdultFigureSkate/AdultFigureSkateHeader";
import AdultFigureSkateProgramInfo from "../Components/Programs/AdultFigureSkate/AdultFigureSkateProgramInfo";




const  AdultFigureSkatePage = () => {
    return (
        <div>
            <Banner
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
