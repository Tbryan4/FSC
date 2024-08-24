// src/pages/AboutPage.js
import React from 'react';
import {Content1, Content9, Content9Props, PortfolioHeader6, Programs} from "../Components/Program/Program";
import {Banner} from "../Components/StaticBanner/StaticBanner";
import ProgramInfo from "../Components/ProgramInfo/ProgramInfo";
import BannerImg from "../assets/canskatebanner.jpg";




const ProgramPage = () => {
    return (
        <div>
            <Banner
                image={{
                    src: BannerImg,
                    alt: "Executive Team Image"
                }}
            />
            <Programs
                content="The only standardized national Learn-to-Skate program that is designed to teach
                 the basic skating skills for all ages and abilities. The skills learned can be applied to any on-ice sport,
                  including hockey, ringette, speed skating and figure skating. This program is taught by professional coaches who are specially 
                  trained and certified through the National Coaching Certification Program (NCCP)."
                
            />
            <ProgramInfo/>
        </div>
    );
};

export default ProgramPage;
