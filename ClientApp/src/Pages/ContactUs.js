// src/pages/AboutPage.js
import React from 'react';
import Header9 from "../Components/ContactUsBanner/ContactUsBanner";
import GoogleMapTabs from "../Components/GoogleMapTabs/GoogleMapTabs";
import {ContactSection} from "../Components/ContactForm/ContactForm";

const ContactPage = () => {
    return (
        <div>
            <Header9/>
            <ContactSection/>
            <GoogleMapTabs/>
        </div>
    );
};

export default ContactPage;