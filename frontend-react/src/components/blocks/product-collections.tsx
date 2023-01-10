import YellowMaterial from "../../images/materials/yellow.jpg"
import GreenMaterial from "../../images/materials/natural.jpeg"
import GrayMaterial from "../../images/materials/gray.jpeg"
import styled from 'styled-components';
import "../../scss/mixins.scss"

const CategoryItem = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: url(${YellowMaterial}) center no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
  margin-bottom: 1rem;
  position: relative;
  cursor: pointer;
  
  transition: background-size 2s ease-in;
  -moz-transition: background-size 2s ease-in;
  -ms-transition: background-size 2s ease-in;
  -o-transition: background-size 2s ease-in;
  -webkit-transition: background-size 2s ease-in;
   
  .category-item__content {
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  p {
    font-size: 20px;
  }
  
  &:hover {
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    
    background-size: 120%;
  }
`;

const CategoryItemGreen = styled(CategoryItem)`
  background: url(${GreenMaterial}) center no-repeat;
  background-size: cover;
  height: 228px;
  color: white;
  
  h2 {
    color: white;  
  }
`;

const CategoryItemGray = styled(CategoryItem)`
  background: url(${GrayMaterial}) center no-repeat;
  background-size: cover;
  height: 228px;
`;

const ProductCollection = () => {

  return (
    <section className="section section-product-collection">
      <div className="container">
        <div className="proposed-category">
          <div className="row">

            <div className="col-xs-12">
              <CategoryItem>
                <div className="category-item__content">
                  <h2>Sun collection</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis cumque cupiditate
                    dicta, dolore dolorem ex optio placeat qui vero! Atque doloremque mollitia nulla ut vitae. Aperiam
                    autem soluta velit!</p>
                </div>
              </CategoryItem>
            </div>

            <div className="col-xs-6">
              <CategoryItemGreen>
                <div className="category-item__content">
                  <h2>Nature collection</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis cumque cupiditate
                    dicta, dolore dolorem ex optio placeat qui vero! Atque doloremque mollitia nulla ut vitae. Aperiam
                    autem soluta velit!</p>
                </div>
              </CategoryItemGreen>
            </div>

            <div className="col-xs-6">
              <CategoryItemGray>
                <div className="category-item__content">
                  <h2>Basic collection</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis cumque cupiditate
                    dicta, dolore dolorem ex optio placeat qui vero! Atque doloremque mollitia nulla ut vitae. Aperiam
                    autem soluta velit!</p>
                </div>
              </CategoryItemGray>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCollection;