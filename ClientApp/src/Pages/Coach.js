// src/pages/AboutPage.js
import React from 'react';
import {StarSkateCoaches} from "../Components/CoachingTeam/StarSkateCoaches";
import {CoachingTeamBanner} from "../Components/CoachingTeamBanner/CoachingTeamBanner";
import {LearnToSkateCoaches} from "../Components/CoachingTeam/LearnToSkateCoaches";
import {CanPowerCoaches} from "../Components/CoachingTeam/CanPowerCoaches";

const CoachPage = () => {
    return (
        <div>
            <CoachingTeamBanner/>
            <StarSkateCoaches/>
            <LearnToSkateCoaches/>
            <CanPowerCoaches/>
        </div>
    );
};

export default CoachPage;
