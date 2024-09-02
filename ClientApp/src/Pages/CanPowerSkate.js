import React from 'react';
import CanPowerSkateProgramInfo from "../Components/Programs/CanPowerSkate/CanPowerSkateProgramInfo";
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/can-power-skate-banner.webp";
import {CanPowerSkateHeader} from "../Components/Programs/CanPowerSkate/CanPowerSkateHeader";

const  CanPowerSkatePage = () => {
    return (
        <div>
            <Banner
                image={{
                    src: BannerImg,
                    alt: "Executive Team Image"
                }}
            />
            <CanPowerSkateHeader/>
            <CanPowerSkateProgramInfo/>
        </div>
    );
};

export default CanPowerSkatePage;
