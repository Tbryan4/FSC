import React from 'react';
import PreCanSkateInfo from "../Components/Programs/PreCanSkate/PreCanSkateProgramInfo";
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/canskatebanner.jpg";
import {PreCanSkateHeader} from "../Components/Programs/PreCanSkate/PreCanSkateHeader";




const  PreCanSkatePage = () => {
    return (
        <div>
            <Banner
                heading="PreCanSkate"
                description="Pre-CanSkate is all about action, movement, and fun! Lessons are delivered in a group setting with a maximum 1:8 coach-to-student ratio. Skaters progress at their own pace, with coaches using teaching aids, lively music, and engaging activities to create a motivating and enjoyable environment. Ribbons and incentives are awarded to celebrate progress, effort, and participation."
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
