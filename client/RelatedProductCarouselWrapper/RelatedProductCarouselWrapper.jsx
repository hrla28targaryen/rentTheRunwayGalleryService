import React from 'react';
import RelatedProductCarousel from '../RelatedProductCarousel/RelatedProductCarousel.jsx';
import style from './RelatedProductCarouselWrapper.scss';
import axios from 'axios';

class RelatedProductCarouselWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            similarProduct : []
        }

        this.fetchDataByID = this.fetchDataByID.bind(this);
    }

    componentDidMount() {
        this.fetchDataByID('HRLA010');
    }

    fetchDataByID(id) {
        axios.get(`/api/gallery/${id}`)
        .then( data => {
            this.setState({ similarProduct: data.data[0].similarProduct })
        }).catch( err => console.error(err));
    }

    render() {
        return (
            <div className={style.relatedCarouselWrapper}>
                <div className={style.relatedCarouselWrapperWithTitle}>
                    <div className={style.relatedCarouselWrapperWithTitle}>
                        <p className={style.carouselHeader}>You may also like</p>
                        <p className={style.carouselSubtitle}>
                            <a href="">View All</a>
                        </p>
                        <RelatedProductCarousel similarProduct={this.state.similarProduct} key={this.state.similarProduct.length}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default RelatedProductCarouselWrapper;