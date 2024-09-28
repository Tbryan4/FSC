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
                description="We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Reach out to us through any of the following methods below, and we'll get back to you as soon as possible. "
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