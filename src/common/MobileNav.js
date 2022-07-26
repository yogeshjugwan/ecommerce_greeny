import React from 'react'
import { Link } from 'react-router-dom'

const MobileNav = (props) => {
    return (
      <>
      <aside className={`nav-sidebar ${props.sideNav===true?"active":""}`}>
      <div className="nav-header">
        <Link to="#"><img src="images/logo.png" alt="logo" /></Link>
        <button className="nav-close" onClick={()=>{props.setSideNav(!true)}}><i className="icofont-close" /></button>
      </div>
      <div className="nav-content">
        <div className="nav-btn">
          <Link to="login " className="btn btn-inline"><i className="fa fa-unlock-alt" /><span>join here</span></Link>
        </div>
        <div className="nav-select-group">
          <div className="nav-select">
            <i className="icofont-world" />
            <select className="select" defaultValue={'DEFAULT'}>
              <option value="english" >English</option>
              <option value="bangali">Bangali</option>
              <option value="arabic">Arabic</option>
            </select>
          </div>
          <div className="nav-select">
            <i className="icofont-money" />
            <select className="select" defaultValue={'DEFAULT'}>
              <option value="english" >Doller</option>
              <option value="bangali">Pound</option>
              <option value="arabic">Taka</option>
            </select>
          </div>
        </div>
        <ul className="nav-list">
          <li>
            <Link className="nav-link dropdown-link" to="#"><i className="icofont-home" />Home</Link>
            <ul className="dropdown-list">
              <li><Link to="home-grid ">Home grid</Link></li>
              <li><Link to="index ">Home index</Link></li>
              <li><Link to="home-classic ">Home classic</Link></li>
              <li><Link to="home-standard ">Home standard</Link></li>
              <li><Link to="home-category ">Home category</Link></li>
            </ul>
          </li>
          <li>
            <Link className="nav-link dropdown-link" to="#"><i className="icofont-food-cart" />shop</Link>
            <ul className="dropdown-list">
              <li><Link to="shop-5column ">shop 5 column</Link></li>
              <li><Link to="shop-4column ">shop 4 column</Link></li>
              <li><Link to="shop-3column ">shop 3 column</Link></li>
              <li><Link to="shop-2column ">shop 2 column</Link></li>
              <li><Link to="shop-1column ">shop 1 column</Link></li>
            </ul>
          </li>
          <li>
            <Link className="nav-link dropdown-link" to="#"><i className="icofont-page" />product</Link>
            <ul className="dropdown-list">
              <li><Link to="product-tab ">product tab</Link></li>
              <li><Link to="product-grid ">product grid</Link></li>
              <li><Link to="product-video ">product video</Link></li>
              <li><Link to="product-simple ">product simple</Link></li>
            </ul>
          </li>
          <li>
            <Link className="nav-link dropdown-link" to="#"><i className="icofont-bag-alt" />my account</Link>
            <ul className="dropdown-list">
              <li><Link to="profile ">profile</Link></li>
              <li><Link to="wallet ">wallet</Link></li>
              <li><Link to="wishlist ">wishlist</Link></li>
              <li><Link to="compare ">compare</Link></li>
              <li><Link to="checkout ">checkout</Link></li>
              <li><Link to="orderlist ">order history</Link></li>
              <li><Link to="invoice ">order invoice</Link></li>
              <li><Link to="email-template ">email template</Link></li>
            </ul>
          </li>
          <li>
            <Link className="nav-link dropdown-link" to="#"><i className="icofont-lock" />authentication</Link>
            <ul className="dropdown-list">
              <li><Link to="login ">login</Link></li>
              <li><Link to="register ">register</Link></li>
              <li><Link to="reset-password ">reset password</Link></li>
              <li><Link to="change-password ">change password</Link></li>
            </ul>
          </li>
          <li>
            <Link className="nav-link dropdown-link" to="#"><i className="icofont-book-alt" />blogs</Link>
            <ul className="dropdown-list">
              <li><Link to="blog-grid ">blog grid</Link></li>
              <li><Link to="blog-standard ">blog standard</Link></li>
              <li><Link to="blog-details ">blog details</Link></li>
              <li><Link to="blog-author ">blog author</Link></li>
            </ul>
          </li>
          <li>
            <Link className="nav-link" to="offer "><i className="icofont-sale-discount" />offers</Link>
          </li>
          <li>
            <Link className="nav-link" to="about "><i className="icofont-info-circle" />about us</Link>
          </li>
          <li>
            <Link className="nav-link" to="faq "><i className="icofont-support-faq" />need help</Link>
          </li>
          <li>
            <Link className="nav-link" to="contact "><i className="icofont-contacts" />contact us</Link>
          </li>
          <li>
            <Link className="nav-link" to="privacy "><i className="icofont-warning" />privacy policy</Link>
          </li>
          <li>
            <Link className="nav-link" to="coming-soon "><i className="icofont-options" />coming soon</Link>
          </li>
          <li>
            <Link className="nav-link" to="error "><i className="icofont-ui-block" />404 error</Link>
          </li>
          <li>
            <Link className="nav-link" to="login "><i className="icofont-logout" />logout</Link>
          </li>
        </ul>
        <div className="nav-info-group">
          <div className="nav-info">
            <i className="icofont-ui-touch-phone" />
            <p><small>call us</small><span>(+880) 183 8288 389</span></p>
          </div>
          <div className="nav-info">
            <i className="icofont-ui-email" />
            <p><small>email us</small><span>support@example.com</span></p>
          </div>
        </div>
        <div className="nav-footer">
          <p>All Rights Reserved by <Link to="#">Mironcoder</Link></p>
        </div>
      </div>
    </aside>
    </>
    )
}

export default MobileNav