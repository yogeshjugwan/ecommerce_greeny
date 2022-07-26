import React from 'react'
import { Link } from 'react-router-dom'

const SpecialDiscount = () => {
  return (
    <><section className="section countdown-part">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mx-auto">
            <div className="countdown-content">
              <h3>special discount offer for vegetable items</h3>
              <p>
                Reprehenderit sed quod autem molestiae aut modi minus veritatis
                iste dolorum suscipit quis voluptatum fugiat mollitia quia
                minima
              </p>
              <div className="countdown countdown-clock" data-countdown="2022/12/22">
                <span className="countdown-time"><span>00</span><small>days</small></span><span className="countdown-time"><span>00</span><small>hours</small></span><span className="countdown-time"><span>00</span><small>minutes</small></span><span className="countdown-time"><span>00</span><small>seconds</small></span>
              </div>
              <Link to="shop-4column " className="btn btn-inline"><i className="fas fa-shopping-basket" /><span>shop now</span></Link>
            </div>
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-5">
            <div className="countdown-img">
              <img src="images/countdown.png" alt="countdown" />
              <div className="countdown-off"><span>20%</span><span>off</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default SpecialDiscount