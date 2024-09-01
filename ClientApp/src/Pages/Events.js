import React from 'react';
import {TimelineEvents} from "../Components/Timeline/Timeline";
import Banner from "../Components/Banner/Banner";
import BannerImg from "../assets/Banners/events-banner.webp"

const EventsPage = () => {
    return (
        <div>
            <Banner
                heading="Events"
                description="Join us for exciting events throughout the season! Whether you're looking to participate in skating showcases, competitions, or community gatherings, our club offers something for everyone. "
                image={{
                    src: BannerImg,
                    alt: "Events Banner",
                    type: "image"
                }}
            />

            <TimelineEvents />;
        </div>
    );
};

export default EventsPage;