import React from 'react';
import GoogleSchedule from "../Components/GoogleCalendar/GoogleCalendar";
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/schedule-banner.jpg"

const SchedulePage = () => {
    return (
        <div>
            <Banner
                heading="Schedule"
                description="We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Reach out to us through any of the following methods below, and we'll get back to you as soon as possible."
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
