import React from 'react';
import AdultCanSkateProgramInfo from "../Components/Programs/AdultCanSkate/AdultCanSkateProgramInfo";
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/canskatebanner.jpg";
import {AdultCanSkateHeader} from "../Components/Programs/AdultCanSkate/AdultCanSkateHeader";

const  AdultCanSkatePage = () => {
    return (
        <div>
            <Banner
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
