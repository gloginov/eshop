import "./porduct-slider.scss"

import productImage from "../../images/example-product.png";
import productImage1 from "../../images/example-product1.png";
import productImage2 from "../../images/example-product2.png";
import productImage3 from "../../images/Desktop/Rectangle 1204.png";

const mockProduct = [
  {
    name: 'Product1',
    brand: 'Prada',
    img: [productImage3, productImage1, productImage]
  },
  {
    name: 'Product1',
    brand: 'Prada',
    img: [productImage1, productImage, productImage2]
  },
  {
    name: 'Product1',
    brand: 'Prada',
    img: [productImage1, productImage, productImage2]
  },
  {
    name: 'Product1',
    brand: 'Prada',
    img: [productImage1, productImage, productImage2]
  },
  {
    name: 'Product1',
    brand: 'Prada',
    img: [productImage1, productImage2, productImage]
  },
  {
    name: 'Product1',
    brand: 'Prada',
    img: [productImage1, productImage, productImage]
  },
  {
    name: 'Product1',
    brand: 'Prada',
    img: [productImage1, productImage, productImage]
  }
]

export default function ProductSlider() {

  return (
    <section className="section section-product-slider">
      <div className="container">

        <h1>New Arrivals</h1>

        <div className="product-slider-list">
          <div className="row">

            {mockProduct.map((product, key) => {
              return (
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  <div className="product-slider-item" key={'product'+key}>
                    <div className="product-slider-item__image">
                      <div className="product-slider-item__slider">
                        {product.img.map((productImage, keyImage) => {
                          return (
                            <img src={productImage} key={'image'+keyImage} alt=""/>
                          )
                        })}
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
            })}

          </div>

        </div>
      </div>
    </section>
  )
}