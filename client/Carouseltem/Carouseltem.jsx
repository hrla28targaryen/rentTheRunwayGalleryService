import React from 'react';
import cx from 'classnames';
import style from './CarouselItem.scss';

class CarouselItem extends React.Component{
    constructor(props) {
        super(props);

        this.state =  {
            index: 0,
            startImageDiv: null,
            currentImageDiv: null
        }

        this.interval = null;

        this.stopInterval = this.stopInterval.bind(this);
        this.init = this.init.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    stopInterval () {
        clearInterval(this.interval);
        this.state.currentImageDiv.style.opacity = '0';
        this.state.startImageDiv.style.opacity = '1';
        this.setState({ 
          index: 0, 
          startImageDiv: null,
          currentImageDiv: null 
        });
    }

    init (e) {
        var imgArr = e.target.parentNode.parentNode.querySelectorAll('div');
        this.setState({
          startImageDiv: imgArr[0],
          currentImageDiv: imgArr[0]
        })
        this.interval = setInterval( () => {this.handleImageChange(imgArr)}, 1000);
    }

    handleImageChange(imgArr) {
      var currInd = this.state.index;
      imgArr[currInd].style.opacity = '0';
      if(currInd === this.props.product.images.length-1) {
        currInd = 0;
      } else {
        currInd = this.state.index+1;
      }
      
      imgArr[currInd].style.opacity = '1';
      this.setState({
        index: this.state.index+1,
        currentImageDiv: imgArr[currInd]    
      })
    }

    render() {
        return(
            <div className={style.carouselItem}>
                <div className={style.gridProductCard}>
                    <div className={style.gridProductCardHeart}>
                        <div className={style.heart}>
                            <button className={style.heartButton}>Add to Hearts</button>
                        </div>
                    </div>
                    <a href="" className={style.gridProductCardInner}>
                        <div className={style.gridProductCardImageWrapper} onMouseEnter={this.init} onMouseLeave={this.stopInterval}>
                            {
                                this.props.product.images.map( (imageURL, index) => {
                                return (
                                  <div className={cx(style.gridProductCardImage, style.img)}>
                                    <img src={imageURL} />
                                  </div>)
                              })
                            }
                        </div>
                        <div className={style.gridProductCardMeta}>
                            <div className={style.gridProductCardInfo}>
                                <h2>
                                    {this.props.product.designerName}
                                    <span className={style.gridProductCardDisplayName}>
                                        {this.props.product.productName}
                                    </span>
                                </h2>
                                <div className="productCardPrice">
                                    <span className={style.productCardPriceRegular}>${this.props.product.rentPrice}</span> | 
                                    <span className={style.productCardPriceRetailQuiet}>${this.props.product.purchasePrice} Retail</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
};

export default CarouselItem;