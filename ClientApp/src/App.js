import React from 'react';
import { ThemeProvider } from '@material-tailwind/react';
import { GlobalNavbar } from './Components/Navbar/Navbar';
import { FooterWithSocialLinks } from './Components/Footer/Footer';
import AboutPage from "./Pages/AboutUs";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./Pages/Home";
import ContactUsPage from "./Pages/ContactUs";
import Team2Props from "./Pages/Coach";
import EquipmentPage from "./Pages/Equipment";
import ExecutiveTeam from "./Pages/ExecutiveTeam";

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <GlobalNavbar />
                <Switch>
                    <Route exact path="/" component={HomePage} /> 
                    <Route path="/aboutus" component={AboutPage} />
                    <Route path="/coach" component={Team2Props} />
                    <Route path="/contactus" component={ContactUsPage} />
                    <Route path="/equipment" component={EquipmentPage} />
                    <Route path="/executives" component={ExecutiveTeam}/>
                </Switch>
                <FooterWithSocialLinks />
            </Router>

        </ThemeProvider>
    );
};

export default App;
