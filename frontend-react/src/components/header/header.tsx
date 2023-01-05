import './header.scss';
import Logo from '../../images/entryshop.svg'
import CustomInput from "../ui/CustomInput.tsx";

const header = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="row middle-xs middle-sm middle-md middle-lg">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
            <img src={Logo} className="header-logo" alt="logo" />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-5">
            <ul className="header-menu">

              <li className="header-menu__item">
                <span>Catalog</span>
              </li>

              <li className="header-menu__item">
                <span>Preview</span>
              </li>

              <li className="header-menu__item">
                <span>About us</span>
              </li>

            </ul>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <CustomInput placeholder="Search for products of brands..."/>
          </div>

          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <div className="row center-sm center-xs center-md center-lg">
              <div className="col">
                <div className="header-controls">
                  <span className="header-controls__person"></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default header;