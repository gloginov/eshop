import BaseLayout from "../components/layouts/BaseLayout.tsx";
import ProductSlider from "../components/product/product-slider.tsx";
import HeaderImage from '../images/gass-image.jpeg'

export default function MainPage() {

  return (
    <BaseLayout>
      <section className="section section-header">
        <div className="block-banner">
          <img src={HeaderImage} alt=""/>
          <div className="row middle-xs">
            <div className="col-xs-offset-6 col-xs-6">
              <div className="block-banner__wrap">
                <h1>Carry your Funk</h1>
                <p>Trendy handbags collection for your party animal</p>
                <button className="button">
                  <span>See more</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductSlider />

    </BaseLayout>
  )
}