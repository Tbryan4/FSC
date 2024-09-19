// src/pages/AboutPage.js
import React from 'react';
import {CardList} from "../Components/HomeCardSection/HomeCardSection";
import Jumpstart from "../Components/JumpStart/JumpStart";
import {RegisterHere} from "../Components/StepsRegister/Steps";
import HomeBanner from "../Components/HomeBanner/HomeBanner";

const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <CardList />
            <Jumpstart />
            <RegisterHere/>
        </div>
    );
};

export default HomePage;