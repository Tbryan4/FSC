import React from 'react';
import AdultCanSkateProgramInfo from "../Components/Programs/AdultCanSkate/AdultCanSkateProgramInfo";
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/canskatebanner.jpg";
import {AdultCanSkateHeader} from "../Components/Programs/AdultCanSkate/AdultCanSkateHeader";

const  AdultCanSkatePage = () => {
    return (
        <div>
            <Banner
                heading="Adult CanSkate"
                description="Adult CanSkate offers a safe, supportive, and fun environment for adults looking to learn to skate or continue developing their skills. Skaters are grouped by skill level, allowing each person to progress at their own pace."
                image={{
                    src: BannerImg,
                    alt: "Executive Team Image"
                }}
            />
            <AdultCanSkateHeader/>
            <AdultCanSkateProgramInfo
            />
        </div>
    );
};

export default AdultCanSkatePage;
