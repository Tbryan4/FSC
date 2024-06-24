import React from 'react';
import HomeCarouselItem from "../Components/Carousel/Carousel";
import ThumbnailItems from "../Components/Carousel/ThumbnailItems";
import img1 from '../assets/index-carosel-img-one.jpeg';
import img2 from '../assets/index-carosel-img-two.jpeg';
import img3 from '../assets/index-carosel-img-three.jpeg';
import img4 from '../assets/index-carosel-img-four.jpeg';

const HomeCarouselItems = [
    {
        imgSrc: img1,
        author: 'Welcome To The',
        title: 'Federation',
        topic: 'Skating Club',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                  like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
        imgSrc: img2,
        author: 'Welcome To The',
        title: 'Federation',
        topic: 'Skating Club',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                  like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
        imgSrc: img3,
        author: 'Welcome To The',
        title: 'Federation',
        topic: 'Skating Club',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                  like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
        imgSrc: img4,
        author: 'Welcome To The',
        title: 'Federation',
        topic: 'Skating Club',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                  like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
];
const HomeCarouselThumbnailItems = [
    {
        imgSrc: img1,
        title: "test",
        description: "test"
    },
    {
        imgSrc: img2,
        title: "test",
        description: "test"
    },

    {
        imgSrc: img3,
        title: "test",
        description: "test"
    },

    {
        imgSrc: img4,
        title: "test",
        description: "test"
    }

]

const Home = () => {
    return (
        <div className="h-carousel">
            {HomeCarouselItems.map((item, index) => (
                <HomeCarouselItem
                    key={index}
                    imgSrc={item.imgSrc}
                    author={item.author}
                    title={item.title}
                    topic={item.topic}
                    description={item.description}
                />
            ))}
            <div className="h-carousel-thumbnail">
                {HomeCarouselThumbnailItems.map((item, index) => (
                    <ThumbnailItems
                        key={index}
                        imgSrc={item.imgSrc}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
            <div className="arrows">
                <button id="prev">&lt;</button>
                <button id="next">&gt;</button>
            </div>
        </div>);
};

export default Home;

