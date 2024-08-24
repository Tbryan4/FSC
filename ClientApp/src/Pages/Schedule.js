import React from 'react';
import GoogleSchedule from "../Components/GoogleCalendar/GoogleCalendar";
import {Banner} from "../Components/StaticBanner/StaticBanner";

const SchedulePage = () => {
    return (
        <div>
            <Banner/>
            <GoogleSchedule />
        </div>
    );
};

export default SchedulePage;
