import React from 'react';
import cx from 'classnames';
import style from './CarouselItem.scss';

const CarouselItem = () => (
    <div className={style.carouselItem}>
        <div className={style.gridProductCard}>
            <div className={style.gridProductCardHeart}>
                <div className={style.heart}>
                    <button className={style.heartButton}>Add to Hearts</button>
                </div>
            </div>
            <a href="" className={style.gridProductCardInner}>
                <div className={style.gridProductCardImageWrapper}>
                    <div className={cx(style.gridProductCardImage, style.img1)}>
                        <img src="https://s3.amazonaws.com/hrla28renttherunway/productCarousel/Dress/LKB18/LKB18.jpg" />
                    </div>
                    <div className={cx(style.gridProductCardImage, style.img2)}>
                        <img src="https://s3.amazonaws.com/hrla28renttherunway/productCarousel/Dress/LKB18/LKB18_1.jpg" />
                    </div>
                    <div className={cx(style.gridProductCardImage, style.img3)}>
                        <img src="https://s3.amazonaws.com/hrla28renttherunway/productCarousel/Dress/LKB18/LKB18_2.jpg" />
                    </div>
                    <div className={cx(style.gridProductCardImage, style.img4)}>
                        <img src="https://s3.amazonaws.com/hrla28renttherunway/productCarousel/Dress/LKB18/LKB18_3.jpg" />
                    </div>
                </div>
                <div className={style.gridProductCardMeta}>
                    <div className="gridProductCardInfo">
                        <h2>
                            <span className="gridProductCardDisplayName"></span>
                        </h2>
                        <div className="productCardPrice">
                            <span className="productCardPriceRegular"></span>
                            <span className="productCardPriceRetailQuiet"></span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
);

export default CarouselItem;