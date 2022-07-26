import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
    <section className="section blog-part">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading"><h2>Read our articles</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-slider slider-arrow">
              <div className="blog-card">
                <div className="blog-media">
                  <Link className="blog-img" to="#"><img src="images/blog/01.jpg" alt="blog" /></Link>
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li><i className="fas fa-user" /><span>admin</span></li>
                    <li>
                      <i className="fas fa-calendar-alt" /><span>february 02, 2021</span>
                    </li>
                  </ul>
                  <h4 className="blog-title">
                    <Link to="blog-details ">Voluptate blanditiis provident Lorem ipsum dolor sit
                      amet</Link>
                  </h4>
                  <p className="blog-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias autem recusandae deleniti nam dignissimos sequi ...
                  </p>
                  <Link className="blog-btn" to="#"><span>read more</span><i className="icofont-arrow-right" /></Link>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-media">
                  <Link className="blog-img" to="#"><img src="images/blog/02.jpg" alt="blog" /></Link>
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li><i className="fas fa-user" /><span>admin</span></li>
                    <li>
                      <i className="fas fa-calendar-alt" /><span>february 02, 2021</span>
                    </li>
                  </ul>
                  <h4 className="blog-title">
                    <Link to="blog-details ">Voluptate blanditiis provident Lorem ipsum dolor sit
                      amet</Link>
                  </h4>
                  <p className="blog-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias autem recusandae deleniti nam dignissimos sequi ...
                  </p>
                  <Link className="blog-btn" to="#"><span>read more</span><i className="icofont-arrow-right" /></Link>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-media">
                  <Link className="blog-img" to="#"><img src="images/blog/03.jpg" alt="blog" /></Link>
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li><i className="fas fa-user" /><span>admin</span></li>
                    <li>
                      <i className="fas fa-calendar-alt" /><span>february 02, 2021</span>
                    </li>
                  </ul>
                  <h4 className="blog-title">
                    <Link to="blog-details ">Voluptate blanditiis provident Lorem ipsum dolor sit
                      amet</Link>
                  </h4>
                  <p className="blog-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias autem recusandae deleniti nam dignissimos sequi ...
                  </p>
                  <Link className="blog-btn" to="#"><span>read more</span><i className="icofont-arrow-right" /></Link>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-media">
                  <Link className="blog-img" to="#"><img src="images/blog/04.jpg" alt="blog" /></Link>
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li><i className="fas fa-user" /><span>admin</span></li>
                    <li>
                      <i className="fas fa-calendar-alt" /><span>february 02, 2021</span>
                    </li>
                  </ul>
                  <h4 className="blog-title">
                    <Link to="blog-details ">Voluptate blanditiis provident Lorem ipsum dolor sit
                      amet</Link>
                  </h4>
                  <p className="blog-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias autem recusandae deleniti nam dignissimos sequi ...
                  </p>
                  <Link className="blog-btn" to="#"><span>read more</span><i className="icofont-arrow-right" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-btn-25">
              <Link to="blog-grid " className="btn btn-outline"><i className="fas fa-eye" /><span>view all blog</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Blog