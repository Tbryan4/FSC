import React from 'react';
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/ice-skating-banner.webp";
import DropInInfoProgramInfo from "../Components/Programs/DropInInfo/DropInInfoProgramInfo";




const  DropInPage = () => {
    return (
        <div>
            <Banner
                heading="Drop In Ice Information"
                description="Join our STARSkate drop-in sessions—Skate Canada members can enjoy flexible ice times with convenient pre-purchased tickets!"
                image={{
                    src: BannerImg,
                    alt: "Executive Team Image"
                }}
            />
            <DropInInfoProgramInfo/>
        </div>
    );
};

export default DropInPage;
