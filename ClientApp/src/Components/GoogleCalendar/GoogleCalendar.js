import React from 'react';
import GoogleCalendarTabs from "../GoogleCalendarTabs/GoogleCalendarTabs";

const GoogleSchedule = () => {
    return (
        /*
        <div className="GoogleSchedule mt-6">
            <div className="responsive-iframe-container">
                <iframe
                    src="https://calendar.google.com/calendar/u/0/embed?src=federationskating@gmail.com&ctz=America/Edmonton&pli=1"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
         */
        <div>
            <GoogleCalendarTabs/>
        </div>
    );
};

export default GoogleSchedule;
