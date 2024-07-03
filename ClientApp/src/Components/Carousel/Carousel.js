// MyComponent.js
import React from 'react';




//! importing the Component class from the React library. The Component class allows us to create class components in React
//! The Component class is a JavaScript class that we can extend to create our own class components.

//? render(): This is a lifecycle method that must be implemented in all class components. It is responsible for returning the JSX (or React elements) that will be rendered to the DOM.
//? export default MyComponent: This statement exports the MyComponent class as the default export from this module. This allows other files to import and use MyComponent.
const HomeCarouselItem = ({imgSrc, author, title, topic, description}) => {
    return (
        <div className="h-carousel-item">
            <img src={imgSrc} alt={title}/>
            <div className="h-carousel-content">
                <div className="h-carousel-author">{author}</div>
                <div className="h-carousel-title">{title}</div>
                <div className="h-carousel-topic">{topic}</div>
                <div className="h-carousel-description">{description}</div>
                <div className="h-carousel-buttons">
                    <button>SEE MORE</button>
                    <button>ABOUT US</button>
                </div>
                <div className="arrows">
                    <button id="prev">&lt;</button>
                    <button id="next">&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default HomeCarouselItem;






