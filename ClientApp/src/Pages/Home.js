// src/pages/AboutPage.js
import React from 'react';
import Carousel from "../Components/Carousel/Carousel";
import {CardList} from "../Components/HomeCardSection/HomeCardSection";
import FeatureSection16 from "../Components/ContactSection/ContactSection";

const HomePage = () => {
    return (
        <div>
            <Carousel />
            <CardList />
            <FeatureSection16 />
        </div>
    );
};

export default HomePage;