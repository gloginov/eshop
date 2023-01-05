import BaseLayout from "../components/layouts/BaseLayout.tsx";
import HeaderImage from "../components/blocks/header-image.tsx";
import ProductSlider from "../components/product/product-slider.tsx";

export default function MainPage() {

  return (
    <BaseLayout>
      <HeaderImage />
      <ProductSlider title="New Arrivals"/>
      <ProductSlider bgColor={true} title="Handpicked Collections "/>
      <div className="section section-product-collection">
        <div className="container">
          <div className="proposed-category">
            <div className="row">
              <div className="col-xs-12">
                <div className="proposed-category__item">

                </div>
              </div>

              <div className="col-xs-6">

              </div>

              <div className="col-xs-6">

              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}