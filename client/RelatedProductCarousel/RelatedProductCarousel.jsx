import React from 'react';
import CarouselItem from '../Carouseltem/Carouseltem.jsx';
import style from './RelatedProductCarousel.scss';

class RelatedProductCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [1,2,3,4,5]
        }
    }

    render() {
        return(
            <div className={style.carouselProduct}>
                <div className={style.carousel}>
                    <div className={style.buttonWrapper}>
                        <button className={`${style.button} ${style.buttonBack}`}>Back</button>
                    </div>
                    <div className={style.carouselViewport}>
                        <div className={style.carouselItems}>
                        {
                            this.state.products.map(product => {
                                return <CarouselItem />
                            })
                        }
                        </div>
                    </div>
                    <div className={style.buttonWrapper}>
                        <button className={`${style.button} ${style.buttonForward}`}>Forward</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RelatedProductCarousel;