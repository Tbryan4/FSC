import React from 'react';
import HomeCarouselItem from "../Components/Carousel/Carousel";
import ThumbnailItems from "../Components/Carousel/ThumbnailItems";
import img1 from '../assets/index-carosel-img-one.jpg';
import img2 from '../assets/index-carosel-img-two.jpg';
import img3 from '../assets/index-carosel-img-three.jpg';
import img4 from '../assets/index-carosel-img-four.jpg';

const HomeCarouselItems = [
    {
        imgSrc: img1,
        author: 'Welcome To The',
        title: 'Federation',
        topic: 'Skating Club 1',
        description: `1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
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
        topic: 'Skating Club 2',
        description: `2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
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
        topic: 'Skating Club 3',
        description: `3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
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
        topic: 'Skating Club 4',
        description: `4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
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
        imgSrc: img2,
        title: "Thumbnail 1",
        description: "test 1"
    },
    {
        imgSrc: img3,
        title: "thumbnail 2",
        description: "test 2"
    },

    {
        imgSrc: img4,
        title: "thumbnail 3",
        description: "test 3"
    },

    {
        imgSrc: img1,
        title: "thumbnail 4",
        description: "test 4"
    }

]

const Home = () => {
    return (
        <div className="h-carousel">
            <div className="h-carousel-list">
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
            </div>
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


        </div>);
};

export default Home;

