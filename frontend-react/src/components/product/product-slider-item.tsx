import Slider from "react-slick";
import {useEffect, useState} from "react";

const ProductSliderItem = ({product, mapKey, bgColor}) => {
  const [autoPlay, setAutoPlay] = useState(false);
  const [uniqueId, setUniqueId] = useState(Math.random());

  const sliderSetting = {
    dots: true,
    infinite: true,
    autoplay: autoPlay,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    slickPlay: autoPlay
  }

  // slick autoplay on hover, need update key for slick re-init
  useEffect(() => {
    setUniqueId(Math.random());
  }, [autoPlay])

  return (
    <div
      className="col-xs-3 col-sm-3 col-md-3 col-lg-3"
      key={'product'+mapKey}
    >
      <div
        className={`product-slider-item ${bgColor ? 'product-slider-item_black' : ''}`}
        onMouseEnter={() => setAutoPlay(true)}
        onMouseLeave={() => setAutoPlay(false)}
      >
        <div className="product-slider-item__wrap-image">
          <div className="product-slider-item__image">
            <div className="product-slider-item__slider" key={uniqueId}>
              <Slider {...sliderSetting}>
                {product.img.map((productImage, keyImage) => {
                  return (
                    <img src={productImage} key={'image'+keyImage} alt=""/>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
        <div className="product-slider-item__info">
          <span className="product-slider-item__name">{product.name}</span>
          <span className="product-slider-item__brand">{product.brand}</span>
          <div className="product-slider-controls"></div>
        </div>
      </div>
    </div>
  )
}

export default ProductSliderItem;