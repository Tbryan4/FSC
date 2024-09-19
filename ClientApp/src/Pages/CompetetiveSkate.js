import React from 'react';
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/competetive-skate-banner.webp";
import {
    CompetitiveSkateHeader
} from "../Components/Programs/CompetetiveSkate/CompetetiveSkateHeader";
import CompetitiveSkateProgramInfo from "../Components/Programs/CompetetiveSkate/CompetetiveSkateProgramInfo";




const  CompetitiveSkatePage = () => {
    return (
        <div>
            <Banner
                heading="CompetitiveSkate"
                description="
CompetitiveSkate offers skaters the chance to develop skills in ice dance, freeskate, and artistic skating through both group and private lessons. "
                image={{
                    src: BannerImg,
                    alt: "Executive Team Image"
                }}
            />
            <CompetitiveSkateHeader/>
            <CompetitiveSkateProgramInfo/>
        </div>
    );
};

export default CompetitiveSkatePage;
