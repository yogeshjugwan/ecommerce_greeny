import React from 'react'

const Discount = () => {
  return (
    <>
      <section className="news-part" style={{background: 'url(images/newsletter.jpg) no-repeat center'}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5 col-lg-6 col-xl-7">
          <div className="news-text">
            <h2>Get 20% Discount for Subscriber</h2>
            <p>Lorem ipsum dolor consectetur adipisicing accusantium</p>
          </div>
        </div>
        <div className="col-md-7 col-lg-6 col-xl-5">
          <form className="news-form">
            <input type="text" placeholder="Enter Your Email Address" /><button>
              <span><i className="icofont-ui-email" />Subscribe</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section className="intro-part">
      <div className="container">
        <div className="row intro-content">
          <div className="col-sm-6 col-lg-3">
            <div className="intro-wrap">
              <div className="intro-icon"><i className="fas fa-truck"></i></div>
              <div className="intro-content">
                <h5>free home delivery</h5>
                <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="intro-wrap">
              <div className="intro-icon"><i className="fas fa-sync-alt"></i></div>
              <div className="intro-content">
                <h5>instant return policy</h5>
                <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="intro-wrap">
              <div className="intro-icon"><i className="fas fa-headset"></i></div>
              <div className="intro-content">
                <h5>quick support system</h5>
                <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="intro-wrap">
              <div className="intro-icon"><i className="fas fa-lock"></i></div>
              <div className="intro-content">
                <h5>secure payment way</h5>
                <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Discount