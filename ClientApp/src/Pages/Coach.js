// src/pages/AboutPage.js
import React from 'react';
import {Team2} from "../Components/CoachingTeam/CoachingTeam";
import {CoachingTeamBanner} from "../Components/CoachingTeamBanner/CoachingTeamBanner";

const CoachPage = () => {
    return (
        <div>
            <CoachingTeamBanner/>
            <Team2/>
        </div>
    );
};

export default CoachPage;
