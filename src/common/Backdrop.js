import React from 'react'
import { Link } from 'react-router-dom'

const Backdrop = (props) => {
   const scrollTop=()=>
    {
        window.scrollTo(0,0);
    }
    return (
        <>
            <div className={`backdrop ${props.sideNav === true ? "backdropActve" : ""}`} onClick={() => { props.setSideNav() }}
            />
            <Link className="backtop fas fa-arrow-up" id='root' to="#" onClick={scrollTop} />
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <div className="header-top-welcome">
                                <p>Welcome to Ecomart in Your Dream Online Store!</p>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-3">
                            <div className="header-top-select">
                                <div className="header-select">
                                    <i className="icofont-world" />
                                    {/* <select className="select" style={{display:'none'}}>
                                        <option value="english" selected>english</option>
                                        <option value="bangali">bangali</option>
                                        <option value="arabic">arabic</option>
                                    </select> */}
                                    <div className="nice-select select" tabIndex="0"><span className="current">english</span><ul className="list"><li data-value="english" className="option selected focus">english</li><li data-value="bangali" className="option">bangali</li><li data-value="arabic" className="option">arabic</li></ul></div>
                                </div>
                                <div className="header-select">
                                    <i className="icofont-money" />
                                    {/* <select className="select">
                                        <option value="english" selected>doller</option>
                                        <option value="bangali">pound</option>
                                        <option value="arabic">taka</option>
                                    </select> */}
                                    <div className="nice-select select" tabIndex="0"><span className="current">doller</span><ul className="list"><li data-value="english" className="option selected">doller</li><li data-value="bangali" className="option">pound</li><li data-value="arabic" className="option">taka</li></ul></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-4">
                            <ul className="header-top-list">
                                <li><Link to="offer ">offers</Link></li>
                                <li><Link to="faq ">need help</Link></li>
                                <li><Link to="contact ">contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Backdrop