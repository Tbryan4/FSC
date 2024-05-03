import React from 'react';
import { CarouselDefault } from '../Components/Carousel/Carousel';
import {ProgramCollection} from "../Components/ProgramCollection/ProgramCollection";
import logo from "../assets/main-website-logo.png";



const Home = () => {
    return (
        <div>
            <CarouselDefault heading="Welcome to Federation Skating Club"
                             description="Experience the thrill of gliding on ice while building lifelong friendships."
                             buttons={[{ title: "Register" }]}
                             image={{ src: "https://skatecanada.ca/wp-content/uploads/2019/12/CanPower-Cropped.jpg", alt: "Image Alt Text" }}>
            </CarouselDefault>
            <div className={'home-title-container'}>
                <img src={logo} width={60} alt="Main Website Logo"/>
                <h1>Welcome to Federation Skating Club</h1>
                <h2>Providing quality skating lessons for all ages and skill levels since 1947! Check out our PreCanSkate, CanSkate, Figure Skating, CanPower, and Adult Skating classes </h2>
            </div>
            <ProgramCollection/>
        </div>
    );
};

export default Home;
