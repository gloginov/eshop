import BaseLayout from "../../components/layouts/BaseLayout.tsx";
import "./Catalog.scss";

export default function CatalogPage() {

    return (
        <BaseLayout>
            <div className="col-xs-2">
                <div className="sidebar-menu">
                    <ul>
                        <li className='sub-menu'>
                            <a href='#'>Size
                                <div className='fa fa-plus right'></div>
                            </a>
                            <ul>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>XS</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>S</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>M</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>L</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>XL</label></li>
                            </ul>
                        </li>
                        <li className='sub-menu'>
                            <a href='#' className='main-links'>Color
                                <div className='fa fa-plus right'></div>
                            </a>
                            <ul>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>Blue</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>Maroon Red</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>Crimson Red</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>Sienna Pink</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>Teal</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>Aquamarine</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>Off-White</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>Suave orange</label></li>
                            </ul>
                        </li>
                        <li className='sub-menu'>
                            <a href='#' className='main-links'>Brand
                                <div className='fa fa-plus right'></div>
                            </a>
                            <ul>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>1</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>2</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>3</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>4</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>5</label></li>
                            </ul>
                        </li>
                        <li className='sub-menu'>
                            <a href='#' className='main-links'>Price Range
                                <div className='fa fa-plus right'></div>
                            </a>
                            <ul>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>1</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>2</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>3</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>4</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>5</label></li>
                            </ul>
                        </li>
                        <li className='sub-menu'>
                            <a href='#' className='main-links'>Discount
                                <div className='fa fa-plus right'></div>
                            </a>
                            <ul>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>1</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>2</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>3</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>4</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>5</label></li>
                            </ul>
                        </li>
                        <li className='sub-menu'>
                            <a href='#' className='main-links'>Availability
                                <div className='fa fa-plus right'></div>
                            </a>
                            <ul>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>1</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>2</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>3</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>4</label></li>
                                <li><label><input type="checkbox" className="checkbox"/><span className="fake"></span>5</label></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </BaseLayout>
    )
}
