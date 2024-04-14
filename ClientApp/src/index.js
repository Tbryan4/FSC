import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar2} from "./Components/Navbar/Navbar";
import Home from "./Pages/home"; // Import MyComponent instead of Carousel

const Root = () => {
    return (
        <div> {/* Or use <>...</> for a fragment */}
            <Navbar2 />
            <Home />
        </div>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
