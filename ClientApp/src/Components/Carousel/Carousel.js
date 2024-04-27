import { Button } from "@relume_io/relume-ui";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../../styles.css';
import 'swiper/swiper-bundle.css';



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

export const CarouselDefault = ({ heading, description, buttons, image }: HeaderProps) => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <header className="grid grid-cols-1 items-center gap-y-16 pt-16 lg:grid-cols-2 lg:pt-0">
            <Swiper
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="image-container" src="https://skatecanada.ca/wp-content/uploads/2019/12/CanPower-Cropped.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-container" src="https://www.federationskatingclub.ca/sites/files/soap-37_EDIT1.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-container" src="https://live.staticflickr.com/8506/8466271033_841b82d0fc_z.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-container" src="https://www.federationskatingclub.ca/sites/files/DSC_8897.jpg"/>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </header>
    );
};



