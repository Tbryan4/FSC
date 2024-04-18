import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalNavbar} from "./Components/Navbar/Navbar";
import Home from "./Pages/home"; // Import MyComponent instead of Carousel
import { ThemeProvider } from "@material-tailwind/react";


//If you want to return multiple components, you can wrap them in a div or a fragment. A fragment is a lightweight syntax that doesn't create an extra div in the DOM.

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <React.StrictMode>
        <ThemeProvider>
            <GlobalNavbar/>
            <Home />
        </ThemeProvider>
    </React.StrictMode>
);

