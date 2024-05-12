import {Button} from "@relume_io/relume-ui";
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import type {ImageProps, ButtonProps} from "@relume_io/relume-ui";
import {EffectFade, Autoplay} from 'swiper/modules';
import '../../styles.css';
import 'swiper/swiper-bundle.css';
import adultcanskateimg from "../../assets/program-adult-can-skate.png"
import figureskateimg from "../../assets/program-intro-to-figure-skate.jpeg"
import canskateimg from "../../assets/program-canskate.jpeg"
import canpowerskateimg from "../../assets/program-canpowerskate.jpeg"

//Defines a type named Props which represents the expected shape of props that the CarouselDefault component will receive. 
// It includes properties for heading, description, an array of buttons, and an image.
type Props = {
    heading: string;
    description: string;
    buttons: ButtonProps[];
    image: ImageProps;
};

//This defines a type named HeaderProps which represents the props expected by the CarouselDefault component.
// It extends React.ComponentPropsWithoutRef<"section">, which means it includes all the props that a <section> element can accept,
// along with the custom props defined in Props.
export type HeaderProps = React.ComponentPropsWithoutRef<"section"> & Props;

export const CarouselDefault = ({heading, description, buttons, image}: HeaderProps) => {
    return (
        <header className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:pt-0">
            <Swiper
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img alt={"img-one"} className="image-container"
                         src={canpowerskateimg}/>
                    <div className="container position-relative">
                        <div className="overlay-text ">
                            <h1>Welcome to Federation Skating Club!</h1>
                            <p>Providing quality skating lessons for all ages and skill levels since 1947! Check out our
                                PreCanSkate, CanSkate, Figure Skating, CanPower, and Adult Skating classes!</p>

                            <button className="animated-button">
                                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                                <span className="text">Read More</span>
                                <span className="circle"></span>
                                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img height={"5rem"} alt={"img-two"} className="image-container"
                         src={canskateimg}/>
                    <div className="container-lg position-relative">
                        <div className="overlay-text">
                                <h1>Learn to Figure Skate</h1>
                                <p>Get ready to elevate your skating skills! Join our group lessons as a bridge from CanSkate to StarSkate, mastering the basics of figure skating in a supportive setting</p>
                                <button className="animated-button">
                                    <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                    <span className="text">Read More</span>
                                    <span className="circle"></span>
                                    <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={"img-three"} className="image-container"
                         src={adultcanskateimg}/>
                    <div className="container position-relative">
                        <div className="overlay-text">
                            <h1>Adult Can Skate</h1>
                            <p>Enter the sport of figure skating. Skaters have the opportunity to participate in competitions and/or assessments.</p>
                            <button className="animated-button">
                                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                                <span className="text">Read More</span>
                                <span className="circle"></span>
                                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <img alt={"img-four"} className="image-container"
                         src={figureskateimg}/>
                    <div className="container position-relative">
                        <div className="overlay-text">
                            <h1>Intro to Figure Skate </h1>
                            <p>Develop the basic figure skating skills in group lesson. Acts as a transition between CanSkate and StarSkate.</p>
                            <button className="animated-button">
                                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                                <span className="text">Read More</span>
                                <span className="circle"></span>
                                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </header>
    );
};



