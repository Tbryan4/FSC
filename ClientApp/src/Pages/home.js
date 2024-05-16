import React from 'react';
import { CarouselDefault } from '../Components/Carousel/Carousel';
import {ProgramCollection} from "../Components/ProgramCollection/ProgramCollection";
import {FooterWithSitemap, FooterWithSocialLinks, SimpleFooter} from "../Components/Footer/Footer";


const Home = () => {
    return (
        <div>
            <CarouselDefault heading="Welcome to Federation Skating Club"
                             description="Experience the thrill of gliding on ice while building lifelong friendships."
                             buttons={[{ title: "Register" }]}
                             image={{ src: "https://skatecanada.ca/wp-content/uploads/2019/12/CanPower-Cropped.jpg", alt: "Image Alt Text" }}>
            </CarouselDefault>
            <ProgramCollection/>
            <FooterWithSocialLinks></FooterWithSocialLinks>
        </div>
    );
};

export default Home;
