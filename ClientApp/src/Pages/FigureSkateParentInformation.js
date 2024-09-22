import React from 'react';
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/fs-parentinformation.webp";
import FigureSkateParentInformation from "../Components/ParentInformation/FigureSkateParentInfo";

const FigureSkateParentInformationPage = () => {
    return (
        <div>
            <Banner
                heading="Figure Skating Parent Information"
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
