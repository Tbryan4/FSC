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
            <div  className="mx-[5%] md:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
                <h1 className="mb-5 text-10xl font-bold md:mb-6 md:text-10xl lg:text-10xl">{heading}</h1>
                <p className="md:text-md">{description}</p>
                <div className="mt-6 flex gap-x-4 md:mt-8">
                    {buttons && buttons.map((button, index) => (
                        <Button
                            style={{ color:"white", backgroundColor:"#cf1123" }}
                            key={`${button.title}-${index}`}
                            variant={button.variant}
                            size={button.size}
                            iconRight={button.iconRight}
                            iconLeft={button.iconLeft}
                        >
                            {button.title}
                        </Button>
                    ))}
                </div>
            </div>
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



