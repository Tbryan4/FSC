// MyComponent.js
import React, { Component } from 'react';
import logo from "../../assets/main-website-logo.webp";

//! importing the Component class from the React library. The Component class allows us to create class components in React
//! The Component class is a JavaScript class that we can extend to create our own class components.

//? render(): This is a lifecycle method that must be implemented in all class components. It is responsible for returning the JSX (or React elements) that will be rendered to the DOM.
//? export default MyComponent: This statement exports the MyComponent class as the default export from this module. This allows other files to import and use MyComponent.
class HomeCarousel extends Component {
    render() {
        return (
            <div className="main-carousel">
                <img src={logo} alt="logo" />
                <p>This is a basic React component.</p>
            </div>
        );
    }
}

export default HomeCarousel;






