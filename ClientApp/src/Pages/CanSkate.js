// src/pages/AboutPage.js
import React from 'react';
import {CanSkateHeader} from "../Components/Programs/CanSkate/CanSkateHeader";
import Banner from "../Components/Banner/Banner";
import ProgramInfo from "../Components/Programs/CanSkate/CanSkateProgramInfo";
import BannerImg from "../assets/canskatebanner.jpg";




const CanSkatePage = () => {
    return (
        <div>
            <Banner
                heading="CanSkate"
                description="
CanSkate is a fun, beginner-friendly learn-to-skate program that emphasizes participation and basic skill development. Guided by Sport Canada's LTAD principles, it focuses on building physical literacy and essential skating skills for recreational skating or any ice sport."
                image={{
                    src: BannerImg,
                    alt: "Executive Team Image"
                }}
            />
            <CanSkateHeader
                content="The only standardized national Learn-to-Skate program that is designed to teach
                 the basic skating skills for all ages and abilities. The skills learned can be applied to any on-ice sport,
                  including hockey, ringette, speed skating and figure skating. This program is taught by professional coaches who are specially 
                  trained and certified through the National Coaching Certification Program (NCCP)."
                
            />
            <ProgramInfo/>
        </div>
    );
};

export default CanSkatePage;
