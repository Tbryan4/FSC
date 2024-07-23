import React, {useEffect} from 'react';
import HomeCarouselItem from "./CarouselItems";
import ThumbnailItems from "./ThumbnailItems";
import img1 from '../../assets/index-carosel-img-one.jpg';
import img2 from '../../assets/index-carosel-img-two.jpg';
import img3 from '../../assets/index-carosel-img-three.jpg';
import img4 from '../../assets/index-carosel-img-four.jpg';

const HomeCarouselItems = [
    {
        imgSrc: img1,
        author: 'Welcome To The',
        title: 'Federation',
        topic: 'Skating Club 1',
        description: `1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
        imgSrc: img2,
        author: 'Welcome To The',
        title: 'Federation',
        topic: 'Skating Club 2',
        description: `1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
        imgSrc: img3,
        author: 'Welcome To The',
        title: 'Federation',
        topic: 'Skating Club 3',
        description: `1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
        imgSrc: img4,
        author: 'Welcome To The',
        title: 'Federation',
        topic: 'Skating Club 4',
        description: `1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
];
const HomeCarouselThumbnailItems = [
    {
        imgSrc: img2,
        title: "Check this out",
        description: "test 1"
    },
    {
        imgSrc: img3,
        title: "New Event",
        description: "test 2"
    },

    {
        imgSrc: img4,
        title: "Sign Up",
        description: "test 3"
    },

    {
        imgSrc: img1,
        title: "Follow us!!",
        description: "test 4"
    }

]



const Carousel = () => {
    


    useEffect(() => {
        let nextButton = document.getElementById('next');
        let prevButton = document.getElementById('prev');


        let timeAutoNext = 5000;
        let autorun = setTimeout(() => {
             nextButton.click();
        }, timeAutoNext);
        
        let timeRunning = 500;
        let runTimeOut;


        let carousel = document.querySelector('.h-carousel');
        let carouselList = document.querySelector('.h-carousel-list');
        let thumbnailList = document.querySelector('.h-carousel-thumbnail');


        
        nextButton.onclick = function () {
            showSlider('next');
        }
        prevButton.onclick = function () {
            showSlider('prev');
        }
        
        function showSlider(direction) {
            let carouselItems = document.querySelectorAll('.h-carousel-item');
            let thumbnailListItem = document.querySelectorAll('.h-carousel-thumbnail-item');

            if(direction === 'next') {
                console.log(carouselItems)
                carousel.classList.add('next-carousel');
                carouselList.appendChild(carouselItems[0]);
                thumbnailList.appendChild(thumbnailListItem[0]);
            }
            else {
                carousel.classList.add('prev-carousel');
                carouselList.insertBefore(carouselItems[carouselItems.length - 1], carouselItems[0]);
                thumbnailList.insertBefore(thumbnailListItem[thumbnailListItem.length - 1], thumbnailListItem[0]);

            }
            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carousel.classList.remove('prev-carousel');
                carousel.classList.remove('next-carousel');
            }, timeRunning);
            
            clearTimeout(autorun);
            autorun = setTimeout(() => {
                nextButton.click(); 
            }, timeAutoNext);
            
        }
    }, []);
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

            <div className="arrows">
                <button id="prev">&lt;</button>
                <button id="next">&gt;</button>
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

export default Carousel;

