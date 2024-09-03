import React from 'react';
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/learn-to-skate-parent-information.webp";
import FigureSkateParentInformation from "../Components/ParentInformation/FigureSkateParentInfo";

const FigureSkateParentInformationPage = () => {
    return (
        <div>
            <Banner
                heading="Figure Skate Parent Information"
                footer={""}
                buttons={[{ title: "Contact Us" }]}
                image={{
                    src: BannerImg,
                    alt: "Executive Team Image"
                }}
            />
            <FigureSkateParentInformation/>
        </div>
    );
};

export default FigureSkateParentInformationPage;
