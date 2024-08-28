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
        author: 'Registration',
        title: 'is open for',
        topic: 'Fall and Winter!',
        description: `Spots are filling fast! Find the program that suits you best under our Program tab`,
    },
    {
        imgSrc: img2,
        author: 'Find the',
        title: 'Fall and Winter',
        topic: 'Schedule here!',
        description: `We are skating Tuesday, Thursday, Friday, Saturday, and Sunday. Definitely an option for you!`,
    },
    {
        imgSrc: img3,
        author: 'Upcoming',
        title: 'Federation Star 1-3 Competition on',
        topic: 'November 9, 2024',
        description: `Join us on November 9th for a Star 1-3 competition! We will host many events including FreeSkate Programs, FreeSkate Elements, Team Elements, and Dance!`,
    },
    {
        imgSrc: img4,
        author: 'Now offering',
        title: 'Thursday Learn To',
        topic: 'Skate sessions!',
        description: `Masked-only sessions at 2 pm and regular sessions at 3 pm. Excited to see everyone on the ice!`,
    },
];
const HomeCarouselThumbnailItems = [
    {
        imgSrc: img2,
        title: "New Schedule",
    },
    {
        imgSrc: img3,
        title: "Competition",
    },

    {
        imgSrc: img4,
        title: "Learn To Skate",
    },

    {
        imgSrc: img1,
        title: "Registration",
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

