import React from 'react';
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/adult-figure-skate.webp";
import {AdultFigureSkateHeader} from "../Components/Programs/AdultFigureSkate/AdultFigureSkateHeader";
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
            <AdultFigureSkateHeader/>
            <AdultFigureSkateProgramInfo
            />
        </div>
    );
};

export default AdultFigureSkatePage;
