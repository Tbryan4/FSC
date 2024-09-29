import React, { useEffect } from 'react';
import { CardList } from "../Components/HomeCardSection/HomeCardSection";
import Jumpstart from "../Components/JumpStart/JumpStart";
import { RegisterHere } from "../Components/StepsRegister/Steps";
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import ReactGA from "react-ga4";

const HomePage = () => {
    useEffect(() => {
        // Send pageview to Google Analytics
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

        // Start timing when the component mounts
        const startTime = Date.now();

        // Track duration when component unmounts
        return () => {
            const duration = Math.floor((Date.now() - startTime) / 1000); // Duration in seconds
            ReactGA.event({
                category: 'User Engagement',
                action: 'Page Duration',
                label: 'Home Page',
                value: duration
            });
        };
    }, []);

    return (
        <div>
            <HomeBanner />
            <CardList />
            <Jumpstart />
            <RegisterHere />
        </div>
    );
};

export default HomePage;
