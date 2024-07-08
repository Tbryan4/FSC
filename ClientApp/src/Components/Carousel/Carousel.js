import React, {useEffect, useRef} from 'react';

const HomeCarouselItem = ({imgSrc, title, author, topic, description}) => {
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    let carouselTimer = 3000;
    let runTimeout;

    useEffect(() => {
        const prevButton = prevButtonRef.current;
        const nextButton = nextButtonRef.current;
        const carouselItemList = document.querySelector('.h-carousel-list');
        const thumbnailDom = document.querySelector('.h-carousel-thumbnail');

        const carouselDom = document.querySelector('.h-carousel');
        const itemSlider = document.querySelectorAll('.h-carousel-item');
        const itemThumbnail = document.querySelectorAll('.h-carousel-thumbnail-item');

        const handlePrevClick = () => {
            //retrieve the last item in the list and insert it at the beginning of the list
            // we subtract 1 from the length of the list to get the last item because the list is 0-indexed

            const lastCarouselItem = carouselItemList.children[carouselItemList.children.length - 1];
            carouselItemList.insertBefore(lastCarouselItem, carouselItemList.children[0]);

            const lastThumbnailItem = thumbnailDom.children[thumbnailDom.children.length - 1];
            thumbnailDom.insertBefore(lastThumbnailItem, thumbnailDom.children[0]);
            carouselDom.classList.remove('next-carousel')
            carouselDom.classList.add('prev-carousel');
        };

        const handleNextClick = () => {
            //retrieve the first item in the list and append it to the end of the list
            //append child means to add a new child to the end of the list of children

            const firstCarouselItem = carouselItemList.children[0];
            const firstThumbnailItem = thumbnailDom.children[0];
            carouselItemList.appendChild(firstCarouselItem);
            thumbnailDom.appendChild(firstThumbnailItem);
            carouselDom.classList.remove('prev-carousel')
            carouselDom.classList.add('next-carousel');
        };

        prevButton.addEventListener('click', handlePrevClick);
        nextButton.addEventListener('click', handleNextClick);
        
        //set the timer to run the carousel
        //clear the timer if the user clicks on the carousel
        //this is to prevent the carousel from running when the user is interacting with it
        clearTimeout(runTimeout);
        runTimeout = setTimeout(() => {
            carouselDom.classList.remove('next-carousel');
            carouselDom.classList.remove('prev-carousel');
        }, carouselTimer)

        return () => {
            prevButton.removeEventListener('click', handlePrevClick);
            nextButton.removeEventListener('click', handleNextClick);
        };
    }, []);

    return (
        <div className="h-carousel-item overlay">
            <div className="image-wrapper">
                <img src={imgSrc} alt={title}/>
            </div>
            <div className="h-carousel-content">
                <div className="h-carousel-author">{author}</div>
                <div className="h-carousel-title">{title}</div>
                <div className="h-carousel-topic">{topic}</div>
                <div className="h-carousel-description">{description}</div>
                <div className="h-carousel-buttons">
                    <button>SEE MORE</button>
                    <button>ABOUT US</button>
                </div>
                <div className="arrows">
                    <button ref={prevButtonRef} id="prev">&lt;</button>
                    <button ref={nextButtonRef} id="next">&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default HomeCarouselItem;
