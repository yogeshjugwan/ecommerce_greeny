import React from 'react'
import { Link } from 'react-router-dom'

import MobileNav from '../../common/MobileNav'
// import Blog from './Blog'
import Discount from './Discount'
import FeaturedItem from './FeaturedItem'
// import Feedback from './Feedback'
// import NewItemPart from './NewItemPart'
import NichePart from './NichePart'
import PromoPart from './PromoPart'
import RecentlySold from './RecentlySold'
// import ShopBrands from './ShopBrands'
import SpecialDiscount from './SpecialDiscount'

const Home = () => {
    return (
        <>
            <section className="home-index-slider slider-arrow slider-dots">
                <div className="banner-part banner-1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-6">
                                <div className="banner-content">
                                    <h1>free home delivery within 24 hours now.</h1>
                                    <p>
                                        Lorem ipsum dolor consectetur adipisicing elit modi
                                        consequatur eaque expedita porro necessitatibus eveniet
                                        voluptatum quis pariatur Laboriosam molestiae architecto
                                        excepturi
                                    </p>
                                    <div className="banner-btn">
                                        <Link className="btn btn-inline" to="shop-4column "><i className="fas fa-shopping-basket" /><span>shop now</span></Link><Link className="btn btn-outline" to="offer "><i className="icofont-sale-discount" /><span>get offer</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="banner-img">
                                    <img src="images/home/index/01.png" alt="index" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="banner-part banner-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-6">
                                <div className="banner-img">
                                    <img src="images/home/index/02.png" alt="index" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="banner-content">
                                    <h1>free home delivery within 24 hours now.</h1>
                                    <p>
                                        Lorem ipsum dolor consectetur adipisicing elit modi
                                        consequatur eaque expedita porro necessitatibus eveniet
                                        voluptatum quis pariatur Laboriosam molestiae architecto
                                        excepturi
                                    </p>
                                    <div className="banner-btn">
                                        <Link className="btn btn-inline" to="shop-4column "><i className="fas fa-shopping-basket" /><span>shop now</span></Link><Link className="btn btn-outline" to="offer "><i className="icofont-sale-discount" /><span>get offer</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
            <MobileNav/>
            <RecentlySold />
            <FeaturedItem/>
            <SpecialDiscount/>
            {/* <NewItemPart/> */}
            <PromoPart/>
            <NichePart/>
            {/* <ShopBrands/> */}
            {/* <Feedback/> */}
            {/* <Blog/> */}
            <Discount/>
        </>
    )
}

export default Home