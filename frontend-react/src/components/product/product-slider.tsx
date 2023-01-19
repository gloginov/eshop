import "./porduct-slider.scss";
import ProductSliderItem from "./product-slider-item.tsx";

// dev code
import productImage from "../../images/example-product.png";
import productImage1 from "../../images/example-product1.png";
import productImage2 from "../../images/example-product2.png";
import productImage3 from "../../images/Desktop/Rectangle 1204.png";
const mockProduct = [
  {
    id: 1,
    name: 'Product1',
    brand: 'Prada',
    img: [productImage3, productImage1, productImage]
  },
  {
    id: 2,
    name: 'Product1',
    brand: 'Prada',
    img: [productImage1, productImage, productImage2]
  },
  {
    id: 3,
    name: 'Product1',
    brand: 'Prada',
    img: [productImage1, productImage, productImage2]
  },
  {
    id: 4,
    name: 'Product1',
    brand: 'Prada',
    img: [productImage1, productImage, productImage2]
  },
  {
    id: 5,
    name: 'Product1',
    brand: 'Prada',
    img: [productImage1, productImage2, productImage]
  },
  {
    id: 6,
    name: 'Product1',
    brand: 'Prada',
    img: [productImage1, productImage, productImage]
  },
  {
    id: 7,
    name: 'Product1',
    brand: 'Prada',
    img: [productImage1, productImage, productImage]
  }
]
//
export default function ProductSlider(props) {
  const {title, bgColor} = props;

  return (
    <section
      className={`section section-product-slider ${bgColor ? 'section-theme-bg' : ''}`}
    >
      <div className="container">
        <h1>{title}</h1>
        <div className="product-slider-list">
          <div className="row row_carousel">
            {mockProduct.map((product, key) => {
              return (
                <ProductSliderItem
                  product={product}
                  mapKey={key}
                  key={'productItem'+key}
                  bgColor={bgColor}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}