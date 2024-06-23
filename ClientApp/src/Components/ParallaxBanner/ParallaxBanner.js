import React from 'react';
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const MyParallaxComponent = () => {
    return (
        <ParallaxProvider>
            <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
                <ParallaxBannerLayer image="https://foo.com/foo.jpg" speed={-20} />
            </ParallaxBanner>
        </ParallaxProvider>
    );
};

export default MyParallaxComponent;


