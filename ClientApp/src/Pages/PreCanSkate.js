import React from 'react';
import PreCanSkateInfo from "../Components/Programs/PreCanSkate/PreCanSkateProgramInfo";
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/canskatebanner.jpg";
import {PreCanSkateHeader} from "../Components/Programs/PreCanSkate/PreCanSkateHeader";




const  PreCanSkatePage = () => {
    return (
        <div>
            <Banner
                image={{
                    src: BannerImg,
                    alt: "Executive Team Image"
                }}
            />
            <PreCanSkateHeader/>
            <PreCanSkateInfo
            />
        </div>
    );
};

export default PreCanSkatePage;
