import React from 'react';
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/learn-to-skate-parent-information.webp";
import LearnToSkateParentInformation from "../Components/ParentInformation/LearnToSkateParentInfo";

const LearnToSkateInformationPage = () => {
    return (
        <div>
            <Banner
                heading="Learn To Skate Parent Information"
                footer={""}
                buttons={[{ title: "Contact Us" }]}
                image={{
                    src: BannerImg,
                    alt: "Executive Team Image"
                }}
            />
            <LearnToSkateParentInformation/>
        </div>
    );
};

export default LearnToSkateInformationPage;
