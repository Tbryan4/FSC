import React from 'react';
import {RotatingBanner} from "../Components/RotatingBanner/RotatingBanner";
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/vendors-banner.webp";

const RecommendedVendorsPage = () => {
    return (
        <div>
            <Banner
                heading="Recommended Vendors & Funding Assistance"
                description={"For all of your skating accessories and sharpening needs we recommend the vendors below. Click on the logo to be directed to their websites for more information."}
                footer={""}
                buttons={[{ title: "Contact Us" }]}
                image={{
                    src: BannerImg,
                    alt: "Executive Team Image"
                }}
            />            
            <RotatingBanner/>
        </div>
    );
};

export default RecommendedVendorsPage;
