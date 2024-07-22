import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalNavbar} from "./Components/Navbar/Navbar";
import Carousel from './Components/Carousel/Carousel';
import {ThemeProvider} from "@material-tailwind/react";
import {CardList} from "./Components/HomeCardSection/HomeCardSection";
import {FooterWithSocialLinks} from "./Components/Footer/Footer";
import {BuildYourIdea, ImgWithShadow} from "./Components/ContactSection/ContactSection";



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <React.StrictMode>
        <ThemeProvider>
            <GlobalNavbar/>
            <Carousel />
                <CardList/>
            <BuildYourIdea/>
            <FooterWithSocialLinks/>
        </ThemeProvider>
    </React.StrictMode>
);

