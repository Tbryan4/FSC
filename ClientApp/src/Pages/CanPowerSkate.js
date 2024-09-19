import React from 'react';
import CanPowerSkateProgramInfo from "../Components/Programs/CanPowerSkate/CanPowerSkateProgramInfo";
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/can-power-skate-banner.webp";
import {CanPowerSkateHeader} from "../Components/Programs/CanPowerSkate/CanPowerSkateHeader";

const  CanPowerSkatePage = () => {
    return (
        <div>
            <Banner
                heading="CanPower"
                description="CanPowerSkate is a dynamic power skating program designed for hockey and ringette players. It focuses on developing balance, power, agility, speed, and endurance through progressive drills and techniques that translate directly to game situations."
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
