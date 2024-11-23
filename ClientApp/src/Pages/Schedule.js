import React from 'react';
import GoogleSchedule from "../Components/GoogleCalendar/GoogleCalendar";
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/schedule-banner.webp"

const currentYear = new Date().getFullYear();
const season = `${currentYear}-${currentYear + 1}`;

const description = `Check out the schedule for the ${season} season!`

const SchedulePage = () => {
    return (
        <div>
            <Banner
                heading="Schedule"
                description= {description}
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
