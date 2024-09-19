import React from 'react';
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/star-skate-banner.webp";
import {StarSkateHeader} from "../Components/Programs/StarSkate/StarSkateHeader";
import StarSkateProgramInfo from "../Components/Programs/StarSkate/StarSkateProgramInfo";




const  StarSkatePage = () => {
    return (
        <div>
            <Banner
                heading="StarSkate"
                description="
STARSkate helps skaters of all ages develop skills in ice dance, free skate, artistic skating, and more through group or private lessons. Skaters can participate in Skate Canada assessments and competitions, working with a coach of their choice to set goals and training plans."
                image={{
                    src: BannerImg,
                    alt: "Executive Team Image"
                }}
            />
            <StarSkateHeader/>
            <StarSkateProgramInfo/>
        </div>
    );
};

export default StarSkatePage;
