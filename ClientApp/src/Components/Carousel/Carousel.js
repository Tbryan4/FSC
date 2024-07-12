import React, {useEffect, useRef} from 'react';

const HomeCarouselItem = ({imgSrc, title, author, topic, description}) => {
    //?     useRef
    
    //      useRef is used to create a reference to a DOM element
    //      in this example we are using it to create a reference to the previous and next buttons so we can add event listeners to them
    
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    

    //?     useEffect
    
    //      hook to handle the carousel animation
    //      useEffect is used to handle side effects in functional components
    
    useEffect(() => {
        const prevButton = prevButtonRef.current;
        const nextButton = nextButtonRef.current;
        const carouselItemList = document.querySelector('.h-carousel-list');
        const thumbnailDom = document.querySelector('.h-carousel-thumbnail');
        const carouselDom = document.querySelector('.h-carousel');
        
        let timeRunning = 2000;
        let timeAutoNext = 5000;
        let runTimeOut;
        let autorun;
        
        const handlePrevClick = () => {
            // Retrieve the last items from carousel and thumbnail lists
            const lastCarouselItem = carouselItemList.lastElementChild;
            const lastThumbnailItem = thumbnailDom.lastElementChild;
            
            // Check if the last items exist
            if (lastCarouselItem && lastThumbnailItem) {
                
                // Remove animation classes to reset animation
                carouselDom.classList.remove('prev-carousel', 'next-carousel');

                // Move the last items to the beginning of the lists
                carouselItemList.insertBefore(lastCarouselItem, carouselItemList.firstElementChild);
                thumbnailDom.insertBefore(lastThumbnailItem, thumbnailDom.firstElementChild);

                carouselDom.classList.add('prev-carousel');
                
                clearTimeout(runTimeOut);
                clearTimeout(autorun);
                
                runTimeOut = setTimeout(() =>
                {
                    carouselDom.classList.remove('prev-carousel')
                    carouselDom.classList.remove('next-carousel')
                },timeRunning)

                autorun = setTimeout(() =>
                {
                    nextButton.click();
                },timeAutoNext )
            }
        };

        const handleNextClick = () => {
            // Retrieve the first item in the carousel and thumbnail lists and append them to the end
            const firstCarouselItem = carouselItemList.firstElementChild;
            const firstThumbnailItem = thumbnailDom.firstElementChild;
            
            // Check if the first items exist
            if(firstCarouselItem && firstThumbnailItem) {
                
                // Remove animation classes to reset animation
                carouselDom.classList.remove('prev-carousel', 'next-carousel');
                
                // Move the first items to the end of the lists
                // appendChild moves an element to the end of the list
                carouselItemList.appendChild(firstCarouselItem); 
                thumbnailDom.appendChild(firstThumbnailItem);

                // Add the next-carousel class to trigger the animation
                carouselDom.classList.add('next-carousel');

                clearTimeout(runTimeOut);
                runTimeOut = setTimeout(() =>
                {
                    console.log('Animation reset after', timeRunning, 'ms.');
                    carouselDom.classList.remove('prev-carousel')
                    carouselDom.classList.remove('next-carousel')
                },timeRunning)
                
                clearTimeout(autorun);
                autorun = setTimeout(() =>
                {
                    console.log('Autoplay triggered after', timeAutoNext, 'ms.');
                    nextButton.click();
                },timeAutoNext )
                
            }

        };
        
        prevButton.addEventListener('click', handlePrevClick);
        nextButton.addEventListener('click', handleNextClick);
        
        // Cleanup function to remove event listeners
        // we do this to prevent memory leaks
        // if we don't remove the event listeners, they will continue to exist even after the component is removed from the DOM
        
        return () => {
            prevButton.removeEventListener('click', handlePrevClick);
            nextButton.removeEventListener('click', handleNextClick);
            clearTimeout(autorun);
            clearTimeout(runTimeOut);
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
