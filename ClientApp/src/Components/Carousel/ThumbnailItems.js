import React from 'react';

const ThumbnailItems = ({imgSrc, title, description}) => {
    return (
        <div className="h-carousel-thumbnail-item">
            <img src={imgSrc} alt={title}/>
            <div className="h-carousel-thumbnail-content">
                <div className="h-carousel-thumbnail-title">{title}</div>
                <div className="h-carousel-thumbnail-description">{description}</div>
            </div>
        </div>
    );
};

export default ThumbnailItems;