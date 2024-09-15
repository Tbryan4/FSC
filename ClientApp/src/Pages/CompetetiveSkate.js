import React from 'react';
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/competitive-skate-banner.jpg";
import {
    CompetitiveSkateHeader
} from "../Components/Programs/CompetetiveSkate/CompetetiveSkateHeader";
import CompetitiveSkateProgramInfo from "../Components/Programs/CompetetiveSkate/CompetetiveSkateProgramInfo";




const  CompetitiveSkatePage = () => {
    return (
        <div>
            <Banner
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
