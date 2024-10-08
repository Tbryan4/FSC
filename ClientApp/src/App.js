import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import { GlobalNavbar } from './Components/Navbar/Navbar';
import { FooterWithSocialLinks } from './Components/Footer/Footer';
import AboutPage from "./Pages/AboutUs";
import HomePage from "./Pages/Home";
import ContactUsPage from "./Pages/ContactUs";
import Team2Props from "./Pages/Coach";
import ExecutiveTeam from "./Pages/ExecutiveTeam";
import EventsPage from "./Pages/Events";
import BlogsPage from "./Pages/Blogs";
import SchedulePage from "./Pages/Schedule";
import CanSkatePage from "./Pages/CanSkate";
import PreCanSkatePage from "./Pages/PreCanSkate";
import AdultCanSkatePage from "./Pages/AdultCanSkate";
import CanPowerSkatePage from "./Pages/CanPowerSkate";
import IntroToFigureSkatingPage from "./Pages/IntroToFigureSkating";
import AdultFigureSkatingPage from "./Pages/AdultFigureSkating";
import StarSkatePage from "./Pages/StarSkate";
import CompetitiveSkatePage from "./Pages/CompetetiveSkate";
import DropInPage from "./Pages/DropIn";
import RecommendedVendorsPage from "./Pages/RecommendedVendors";
import FigureSkateParentInformationPage from "./Pages/FigureSkateParentInformation";
import LearnToSkateInformationPage from "./Pages/LearnToSkateParentInformation";

import ReactGA from 'react-ga4';

ReactGA.initialize('G-JRWRLDDGCR');

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <TrackPageViews />
                <GlobalNavbar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/aboutus" component={AboutPage} />
                    <Route path="/coach" component={Team2Props} />
                    <Route path="/contactus" component={ContactUsPage} />
                    <Route path="/executives" component={ExecutiveTeam}/>
                    <Route path="/events" component={EventsPage}/>
                    <Route path="/blogs" component={BlogsPage}/>
                    <Route path="/schedule" component={SchedulePage}/>
                    {/* Programs */}
                    <Route path="/adultcanskate" component={AdultCanSkatePage}/>
                    <Route path="/canpower" component={CanPowerSkatePage}/>
                    <Route path="/canskate" component={CanSkatePage}/>
                    <Route path="/precanskate" component={PreCanSkatePage}/>
                    <Route path="/introtofigureskating" component={IntroToFigureSkatingPage}/>
                    <Route path="/adultfigureskating" component={AdultFigureSkatingPage}/>
                    <Route path="/starskate" component={StarSkatePage}/>
                    <Route path="/competitiveskate" component={CompetitiveSkatePage}/>
                    <Route path="/dropin" component={DropInPage}/>
                    <Route path="/recommendedvendors" component={RecommendedVendorsPage}/>
                    <Route path="/fsparentinformation" component={FigureSkateParentInformationPage}/>
                    <Route path="/ltsparentinformation" component={LearnToSkateInformationPage}/>
                </Switch>
                <FooterWithSocialLinks />
            </Router>
        </ThemeProvider>
    );
};

// New component to handle tracking page views
const TrackPageViews = () => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: location.pathname });
    }, [location]);

    return null; // This component doesn't render anything
};

export default App;
