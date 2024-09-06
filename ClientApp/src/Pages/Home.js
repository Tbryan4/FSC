// src/pages/AboutPage.js
import React from 'react';
import Carousel from "../Components/Carousel/Carousel";
import {CardList} from "../Components/HomeCardSection/HomeCardSection";
import Jumpstart from "../Components/JumpStart/JumpStart";
import {Layout423} from "../Components/StepsRegister/Steps";

const HomePage = () => {
    return (
        <div>
            <Carousel />
            <CardList />
            <Jumpstart />
            <Layout423/>
        </div>
    );
};

export default HomePage;