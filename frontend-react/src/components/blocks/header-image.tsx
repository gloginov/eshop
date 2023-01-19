import HeaderBackground from '../../images/gass-image.jpeg'

const HeaderImage = () => {

  return (
    <section className="section section-header">
      <div className="block-banner">
        <img src={HeaderBackground} alt=""/>
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
  )
}
export default HeaderImage;