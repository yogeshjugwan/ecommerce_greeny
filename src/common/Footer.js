import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <><footer className="footer-part">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xl-3">
            <div className="footer-widget">
              <Link className="footer-logo" to="#"><img src="images/logo.png" alt="logo" /></Link>
              <p className="footer-desc">
                Adipisci asperiores ipsum ipsa repellat consequatur repudiandae
                quisquam assumenda dolor perspiciatis sit ipsum dolor amet.
              </p>
              <ul className="footer-social">
                <li><Link className="icofont-facebook" to="#" /></li>
                <li><Link className="icofont-twitter" to="#" /></li>
                <li><Link className="icofont-linkedin" to="#" /></li>
                <li><Link className="icofont-instagram" to="#" /></li>
                <li><Link className="icofont-pinterest" to="#" /></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="footer-widget contact">
              <h3 className="footer-title">contact us</h3>
              <ul className="footer-contact">
                <li>
                  <i className="icofont-ui-email" />
                  <p>
                    <span>support@example.com</span><span>carrer@example.com</span>
                  </p>
                </li>
                <li>
                  <i className="icofont-ui-touch-phone" />
                  <p>
                    <span>+120 279 532 13</span><span>+120 279 532 14</span>
                  </p>
                </li>
                <li>
                  <i className="icofont-location-pin" />
                  <p>1Hd- 50, 010 Avenue, NY 90001 United States</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="footer-widget">
              <h3 className="footer-title">quick Links</h3>
              <div className="footer-links">
                <ul>
                  <li><Link to="#">My Account</Link></li>
                  <li><Link to="#">Order History</Link></li>
                  <li><Link to="#">Order Tracking</Link></li>
                  <li><Link to="#">Best Seller</Link></li>
                  <li><Link to="#">New Arrivals</Link></li>
                </ul>
                <ul>
                  <li><Link to="#">Location</Link></li>
                  <li><Link to="#">Affiliates</Link></li>
                  <li><Link to="#">Contact</Link></li>
                  <li><Link to="#">Carrer</Link></li>
                  <li><Link to="#">Faq</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="footer-widget">
              <h3 className="footer-title">Download App</h3>
              <p className="footer-desc">
                Lorem ipsum dolor sit amet tenetur dignissimos ipsum eligendi
                autem obcaecati minus ducimus totam reprehenderit
                exercitationem!
              </p>
              <div className="footer-app">
                <Link to="#"><img src="images/google-store.png" alt="google" /></Link><Link to="#"><img src="images/app-store.png" alt="app" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer-bottom">
              <p className="footer-copytext">
                © All Copyrights Reserved by <Link to="#"></Link>
              </p>
              <div className="footer-card">
                <Link to="#"><img src="images/payment/jpg/01.jpg" alt="payment" /></Link><Link to="#"><img src="images/payment/jpg/02.jpg" alt="payment" /></Link><Link to="#"><img src="images/payment/jpg/03.jpg" alt="payment" /></Link><Link to="#"><img src="images/payment/jpg/04.jpg" alt="payment" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer