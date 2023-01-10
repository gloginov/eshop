import { Link } from "react-router-dom";
import './footer.scss'

import { ReactComponent as FaceBookIcon } from "../../images/fblogo.svg"
import { ReactComponent as TwitterIcon } from "../../images/twitter.svg"
import { ReactComponent as YoutubeIcon } from "../../images/youtube.svg"
import { ReactComponent as InstaIcon } from "../../images/instalogo.svg"
import Map from "../../components/map/map.tsx";


const Footer = () => {

  return (
    <div className="footer">
      <Map/>
      <div className="container">
        <div className="row">

          <div className="col-xs-9">
            <div className="sitemap">

              <div className="row">
                <div className="col-xs-2">
                  <Link className="sitemap__link-head" to="/catalog">
                    <span>Catalog</span>
                  </Link>

                  <Link className="sitemap__link-child" to="/aboutus">
                    <span>About us</span>
                  </Link>
                </div>

                <div className="col-xs-2">
                  <Link className="sitemap__link-head" to="/catalog">
                    <span>Catalog</span>
                  </Link>

                  <Link className="sitemap__link-child" to="/aboutus">
                    <span>About us</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          <div className="col-xs-3">
            <div className="socials">
              <Link to="e1.ru" className="social-icon">
                <TwitterIcon/>
              </Link>

              <Link to="e1.ru" className="social-icon">
                <FaceBookIcon/>
              </Link>

              <Link to="e1.ru" className="social-icon">
                <YoutubeIcon/>
              </Link>

              <Link to="e1.ru" className="social-icon">
                <InstaIcon/>
              </Link>
            </div>
          </div>

        </div>

        <div className="copyright">
          <a href="https://github.com/gloginov/eshop">created by gloginov</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;