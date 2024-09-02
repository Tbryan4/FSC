import React from 'react';
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/star-skate-banner.webp";
import {StarSkateHeader} from "../Components/Programs/StarSkate/StarSkateHeader";
import StarSkateProgramInfo from "../Components/Programs/StarSkate/StarSkateProgramInfo";




const  StarSkatePage = () => {
    return (
        <div>
            <Banner
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
