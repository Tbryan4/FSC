import React from 'react';
import Banner from "../Components/Banner/Banner";
import GoogleMapTabs from "../Components/GoogleMapTabs/GoogleMapTabs";
import {ContactSection} from "../Components/ContactForm/ContactForm";
import BannerImg from "../assets/Banners/contact-us-banner.webp";

const ContactPage = () => {
    return (
        <div>
            <Banner
                heading="Contact Us"
                description="Join us for exciting events throughout the season! Whether you're looking to participate in skating showcases, competitions, or community gatherings, our club offers something for everyone. "
                image={{
                    src: BannerImg,
                    alt: "Contact Us Banner",
                    type: "image"
                }}
            />           
            <ContactSection/>
            <GoogleMapTabs/>
        </div>
    );
};

export default ContactPage;