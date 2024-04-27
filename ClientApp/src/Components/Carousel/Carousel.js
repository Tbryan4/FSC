import { Button } from "@relume_io/relume-ui";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";
import { EffectFade, Autoplay } from 'swiper/modules';
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
                    <img alt={"img-one"} className="image-container" src="https://www.federationskatingclub.ca/sites/files/DSC_8897.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={"img-one"} className="image-container" src="https://64.media.tumblr.com/f2140e991e53a9fcedf1752f641b1a25/tumblr_n1o421rxSs1s24qdco1_500.gif"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={"img-one"} className="image-container" src="https://i.pinimg.com/originals/05/98/00/0598001e5c36eae7490f9accab56d583.gif"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={"img-one"} className="image-container" src="https://i.gifer.com/YsD.gif"/>
                </SwiperSlide>
            </Swiper>
        </header>
    );
};



