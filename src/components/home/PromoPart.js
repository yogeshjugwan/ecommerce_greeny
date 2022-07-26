
import React from 'react'
import { Link } from 'react-router-dom'

const PromoPart = () => {
  return (
    <> <div className="section promo-part">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 px-xl-3">
          <div className="promo-img">
            <Link to={()=>false}><img src="images/promo/home/01.jpg" alt="promo" /></Link>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 px-xl-3">
          <div className="promo-img">
            <Link to={()=>false}><img src="images/promo/home/02.jpg" alt="promo" /></Link>
          </div>
        </div>
      </div>
    </div>
  </div></>
  )
}

export default PromoPart