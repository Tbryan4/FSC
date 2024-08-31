import React from 'react';
import Banner from "../Components/Banner/Banner";
import GoogleMapTabs from "../Components/GoogleMapTabs/GoogleMapTabs";
import {ContactSection} from "../Components/ContactForm/ContactForm";
import banner from "../assets/Banners/contact-us-banner.webp"

const ContactPage = () => {
    return (
        <div>
            <Banner
                image={{
                    src: banner,
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