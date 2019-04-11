import React from 'react';
import RelatedProductCarousel from '../RelatedProductCarousel/RelatedProductCarousel.jsx';
import style from './RelatedProductCarouselWrapper.scss';

const RelatedProductCarouselWrapper = () => (
    <div className={style.relatedCarouselWrapper}>
        <div className={style.relatedCarouselWrapperWithTitle}>
            <div className={style.relatedCarouselWrapperWithTitle}>
                <p className={style.carouselHeader}>You may also like</p>
                <p className={style.carouselSubtitle}>
                    <a href="">View All</a>
                </p>
                <RelatedProductCarousel />
            </div>
        </div>
    </div>
);

export default RelatedProductCarouselWrapper;