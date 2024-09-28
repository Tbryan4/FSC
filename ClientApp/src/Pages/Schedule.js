import React from 'react';
import GoogleSchedule from "../Components/GoogleCalendar/GoogleCalendar";
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/schedule-banner.webp"

const SchedulePage = () => {
    return (
        <div>
            <Banner
                heading="Schedule"
                description="Check out the schedule for the 2024/2025 season!"
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
