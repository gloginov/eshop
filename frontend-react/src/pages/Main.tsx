import BaseLayout from "../components/layouts/BaseLayout.tsx";
import HeaderImage from "../components/blocks/header-image.tsx";
import ProductSlider from "../components/product/product-slider.tsx";
import ProductCollection from "../components/blocks/product-collections.tsx";
// import Map from "../components/map/map.tsx";

export default function MainPage() {

  return (
    <BaseLayout>
      <HeaderImage />
      <ProductSlider title="New Arrivals"/>
      <ProductSlider bgColor={true} title="Handpicked Collections "/>
      <ProductCollection />
      {/*<Map/>*/}
    </BaseLayout>
  )
}