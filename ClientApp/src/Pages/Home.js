// src/pages/AboutPage.js
import React from 'react';
import Carousel from "../Components/Carousel/Carousel";
import {CardList} from "../Components/HomeCardSection/HomeCardSection";
import {Layout1, Layout1Props} from "../Components/ContactSection/ContactSection";
import {Layout423} from "../Components/StepsRegister/Steps";

const HomePage = () => {
    return (
        <div>
            <Carousel />
            <CardList />
            <Layout1 />
            <Layout423/>
        </div>
    );
};

export default HomePage;