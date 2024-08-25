import React from 'react';
import GoogleSchedule from "../Components/GoogleCalendar/GoogleCalendar";
import {Banner} from "../Components/StaticBanner/StaticBanner";
import BannerImg from "../assets/schedule-banner.jpg"

const SchedulePage = () => {
    return (
        <div>
            <Banner
                heading="Schedule"
                description="Check out our 2024 fall/winter schedule!"
                image={{
                    src: BannerImg,
                    alt: "Schedule Banner"
                }}
            />
            <GoogleSchedule />
        </div>
    );
};

export default SchedulePage;
