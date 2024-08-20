// src/pages/AboutPage.js
import React from 'react';
import {TimelineEvents} from "../Components/Timeline/Timeline";
import EventsBanner from "../Components/EventsBanner/EventsBanner";

const EventsPage = () => {
    return (
        <div>
            <EventsBanner/>
            <TimelineEvents/>
        </div>
    );
};

export default EventsPage;