import React from 'react'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  // const dispatch = useDispatch();

  return (
    <>
      <header className="header-part">
    <div className="container">
      <div className="header-content">
        <div className="header-media-group">
          <button className="header-user" onClick={()=>{props.setSideNav(!false)}}>
            <img src="images/user.png" alt="user" /></button><Link to="/"><img src="images/logo.png" alt="logo" /></Link><button className="header-src"><i className="fas fa-search" /></button>
        </div>
        <Link to="/ " className="header-logo"><img src="images/logo.png" alt="logo" /></Link><Link to="login " className="header-widget" title="My Account"><img src="images/user.png" alt="user" /><span>join</span></Link>
        <form className="header-form">
          <input type="text" placeholder="Search anything..." /><button>
            <i className="fas fa-search" />
          </button>
        </form>
        <div className="header-widget-group">
          <Link to="compare " className="header-widget" title="Compare List"><i className="fas fa-random" /><sup>0</sup></Link><Link to="wishlist " className="header-widget" title="Wishlist"><i className="fas fa-heart" /><sup>0</sup></Link><button className="header-widget header-cart" title="Cartlist">
            <i className="fas fa-shopping-basket" /><sup>9+</sup><span>total price<small>$345.00</small></span>
          </button>
        </div>
      </div>
    </div>
  </header>
  <nav className="navbar-part">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="navbar-content">
          <ul className="navbar-list">
            <li className="navbar-item dropdown">
              <Link className="navbar-link" to="/">home</Link>
            </li>
            <li className="navbar-item dropdown-megamenu">
              <Link className="navbar-link dropdown-arrow" to="#">shop</Link>
              <div className="megamenu">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="megamenu-wrap">
                        <h5 className="megamenu-title">shop pages</h5>
                        <ul className="megamenu-list">
                          <li>
                            <Link to="shop-5column ">shop 5 column</Link>
                          </li>
                          <li>
                            <Link to="shop-4column ">shop 4 column</Link>
                          </li>
                          <li>
                            <Link to="shop-3column ">shop 3 column</Link>
                          </li>
                          <li>
                            <Link to="shop-2column ">shop 2 column</Link>
                          </li>
                          <li>
                            <Link to="shop-1column ">shop 1 column</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="megamenu-wrap">
                        <h5 className="megamenu-title">product pages</h5>
                        <ul className="megamenu-list">
                          <li>
                            <Link to="product-tab ">product single tab</Link>
                          </li>
                          <li>
                            <Link to="product-grid ">product single grid</Link>
                          </li>
                          <li>
                            <Link to="product-video ">product single video</Link>
                          </li>
                          <li>
                            <Link to="product-simple ">product single simple</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="megamenu-wrap">
                        <h5 className="megamenu-title">user action</h5>
                        <ul className="megamenu-list">
                          <li><Link to="wishlist ">wishlist</Link></li>
                          <li><Link to="compare ">compare</Link></li>
                          <li><Link to="checkout ">checkout</Link></li>
                          <li>
                            <Link to="orderlist ">order history</Link>
                          </li>
                          <li><Link to="invoice ">order invoice</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="megamenu-wrap">
                        <h5 className="megamenu-title">other pages</h5>
                        <ul className="megamenu-list">
                          <li>
                            <Link to="all-category ">all Category</Link>
                          </li>
                          <li><Link to="brand-list ">brand list</Link></li>
                          <li>
                            <Link to="brand-single ">brand single</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="navbar-item dropdown-megamenu">
              <Link className="navbar-link dropdown-arrow" to="#">category</Link>
              <div className="megamenu">
                <div className="container megamenu-scroll">
                  <div className="row row-cols-5">
                    <div className="col">
                      <div className="megamenu-wrap">
                        <h5 className="megamenu-title">vegetables</h5>
                        <ul className="megamenu-list">
                          <li><Link to="#">carrot</Link></li>
                          <li><Link to="#">broccoli</Link></li>
                          <li><Link to="#">asparagus</Link></li>
                          <li><Link to="#">cauliflower</Link></li>
                          <li><Link to="#">eggplant</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="megamenu-wrap">
                        <h5 className="megamenu-title">fruits</h5>
                        <ul className="megamenu-list">
                          <li><Link to="#">Apple</Link></li>
                          <li><Link to="#">orange</Link></li>
                          <li><Link to="#">banana</Link></li>
                          <li><Link to="#">strawberrie</Link></li>
                          <li><Link to="#">watermelon</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="megamenu-wrap">
                        <h5 className="megamenu-title">dairy farms</h5>
                        <ul className="megamenu-list">
                          <li><Link to="#">Butter</Link></li>
                          <li><Link to="#">Cheese</Link></li>
                          <li><Link to="#">Milk</Link></li>
                          <li><Link to="#">Eggs</Link></li>
                          <li><Link to="#">cream</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="megamenu-wrap">
                        <h5 className="megamenu-title">seafoods</h5>
                        <ul className="megamenu-list">
                          <li><Link to="#">Lobster</Link></li>
                          <li><Link to="#">Octopus</Link></li>
                          <li><Link to="#">Shrimp</Link></li>
                          <li><Link to="#">Halabos</Link></li>
                          <li><Link to="#">Maeuntang</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="megamenu-wrap">
                        <h5 className="megamenu-title">diet foods</h5>
                        <ul className="megamenu-list">
                          <li><Link to="#">Salmon</Link></li>
                          <li><Link to="#">Avocados</Link></li>
                          <li><Link to="#">Leafy Greens</Link></li>
                          <li><Link to="#">Boiled Potatoes</Link></li>
                          <li><Link to="#">Cottage Cheese</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="megamenu-wrap">
                        <h5 className="megamenu-title">fast foods</h5>
                        <ul className="megamenu-list">
                          <li><Link to="#">burger</Link></li>
                          <li><Link to="#">milkshake</Link></li>
                          <li><Link to="#">sandwich</Link></li>
                          <li><Link to="#">doughnut</Link></li>
                          <li><Link to="#">pizza</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="megamenu-wrap">
                        <h5 className="megamenu-title">drinks</h5>
                        <ul className="megamenu-list">
                          <li><Link to="#">cocktail</Link></li>
                          <li><Link to="#">hard soda</Link></li>
                          <li><Link to="#">shampain</Link></li>
                          <li><Link to="#">Wine</Link></li>
                          <li><Link to="#">barley</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="megamenu-wrap">
                        <h5 className="megamenu-title">meats</h5>
                        <ul className="megamenu-list">
                          <li><Link to="#">Meatball</Link></li>
                          <li><Link to="#">Sausage</Link></li>
                          <li><Link to="#">Poultry</Link></li>
                          <li><Link to="#">chicken</Link></li>
                          <li><Link to="#">Cows</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="megamenu-wrap">
                        <h5 className="megamenu-title">fishes</h5>
                        <ul className="megamenu-list">
                          <li><Link to="#">scads</Link></li>
                          <li><Link to="#">pomfret</Link></li>
                          <li><Link to="#">groupers</Link></li>
                          <li><Link to="#">anchovy</Link></li>
                          <li><Link to="#">mackerel</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <div className="megamenu-wrap">
                        <h5 className="megamenu-title">dry foods</h5>
                        <ul className="megamenu-list">
                          <li><Link to="#">noodles</Link></li>
                          <li><Link to="#">Powdered milk</Link></li>
                          <li><Link to="#">nut &amp; yeast</Link></li>
                          <li><Link to="#">almonds</Link></li>
                          <li><Link to="#">pumpkin</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="navbar-item dropdown">
              <Link className="navbar-link dropdown-arrow" to="#">pages</Link>
              <ul className="dropdown-position-list">
                <li><Link to="faq ">faqs</Link></li>
                <li><Link to="offer ">offers</Link></li>
                <li><Link to="profile ">my profile</Link></li>
                <li><Link to="wallet ">my wallet</Link></li>
                <li><Link to="about ">about us</Link></li>
                <li><Link to="contact ">contact us</Link></li>
                <li><Link to="privacy ">privacy policy</Link></li>
                <li><Link to="coming-soon ">coming soon</Link></li>
                <li><Link to="blank-page ">blank page</Link></li>
                <li><Link to="error ">404 Error</Link></li>
                <li><Link to="email-template ">email template</Link></li>
              </ul>
            </li>
            <li className="navbar-item dropdown">
              <Link className="navbar-link dropdown-arrow" to="#">authentic</Link>
              <ul className="dropdown-position-list">
                <li><Link to="login ">login</Link></li>
                <li><Link to="register ">register</Link></li>
                <li><Link to="reset-password ">reset password</Link></li>
                <li><Link to="change-password ">change password</Link></li>
              </ul>
            </li>
            <li className="navbar-item dropdown">
              <Link className="navbar-link dropdown-arrow" to="#">blogs</Link>
              <ul className="dropdown-position-list">
                <li><Link to="blog-grid ">blog grid</Link></li>
                <li><Link to="blog-standard ">blog standard</Link></li>
                <li><Link to="blog-details ">blog details</Link></li>
                <li><Link to="blog-author ">blog author</Link></li>
              </ul>
            </li>
          </ul>
          <div className="navbar-info-group">
            <div className="navbar-info">
              <i className="icofont-ui-touch-phone" />
              <p><small>call us</small><span>(+880) 183 8288 389</span></p>
            </div>
            <div className="navbar-info">
              <i className="icofont-ui-email" />
              <p><small>email us</small><span>support@example.com</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

  </>
  )
}

export default Navbar