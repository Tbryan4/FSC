import React from 'react';

const HomeCarouselItem = ({imgSrc, title, author, topic, description}) => {

    return (
        <div className="h-carousel-item overlay">
            <div className="image-wrapper">
                <img src={imgSrc} alt={title}/>
            </div>
                <div className="max-width">
                    <div className="h-carousel-content">
                        <div className="h-carousel-author">{author}</div>
                        <div className="h-carousel-title">{title}</div>
                        <div className="h-carousel-topic">{topic}</div>
                        <div className="h-carousel-description">{description}</div>
                        <div className="h-carousel-buttons">
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default HomeCarouselItem;
