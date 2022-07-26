import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedItem = () => {
  return (
    <>
    <section className="section feature-part">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading"><h2>our featured items</h2></div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
        <div className="col">
          <div className="feature-card">
            <div className="feature-media">
              <div className="feature-label">
                <label className="label-text feat">feature</label>
              </div>
              <button className="feature-wish wish">
                <i className="fas fa-heart" /></button><Link className="feature-image" to="product-video "><img src="images/product/09.jpg" alt="product" /></Link>
              <div className="feature-widget">
                <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
              </div>
            </div>
            <div className="feature-content">
              <h6 className="feature-name">
                <Link to="product-video ">fresh organic green chilis</Link>
              </h6>
              <div className="feature-rating">
                <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3 Reviews)</Link>
              </div>
              <h6 className="feature-price">
                <del>$34</del><span>$28<small>/piece</small></span>
              </h6>
              <p className="feature-desc">
                Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                amet olor ut eveniet commodi...
              </p>
              <button className="product-add" title="Add to Cart">
                <i className="fas fa-shopping-basket" /><span>add</span>
              </button>
              <div className="product-action">
                <button className="action-minus" title="Quantity Minus">
                  <i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus">
                  <i className="icofont-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="feature-card">
            <div className="feature-media">
              <div className="feature-label">
                <label className="label-text feat">feature</label>
              </div>
              <button className="feature-wish wish">
                <i className="fas fa-heart" /></button><Link className="feature-image" to="product-video "><img src="images/product/10.jpg" alt="product" /></Link>
              <div className="feature-widget">
                <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
              </div>
            </div>
            <div className="feature-content">
              <h6 className="feature-name">
                <Link to="product-video ">fresh organic green chilis</Link>
              </h6>
              <div className="feature-rating">
                <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3 Reviews)</Link>
              </div>
              <h6 className="feature-price">
                <del>$34</del><span>$28<small>/piece</small></span>
              </h6>
              <p className="feature-desc">
                Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                amet olor ut eveniet commodi...
              </p>
              <button className="product-add" title="Add to Cart">
                <i className="fas fa-shopping-basket" /><span>add</span>
              </button>
              <div className="product-action">
                <button className="action-minus" title="Quantity Minus">
                  <i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus">
                  <i className="icofont-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="feature-card">
            <div className="feature-media">
              <div className="feature-label">
                <label className="label-text feat">feature</label>
              </div>
              <button className="feature-wish wish">
                <i className="fas fa-heart" /></button><Link className="feature-image" to="product-video "><img src="images/product/11.jpg" alt="product" /></Link>
              <div className="feature-widget">
                <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
              </div>
            </div>
            <div className="feature-content">
              <h6 className="feature-name">
                <Link to="product-video ">fresh organic green chilis</Link>
              </h6>
              <div className="feature-rating">
                <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3 Reviews)</Link>
              </div>
              <h6 className="feature-price">
                <del>$34</del><span>$28<small>/piece</small></span>
              </h6>
              <p className="feature-desc">
                Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                amet olor ut eveniet commodi...
              </p>
              <button className="product-add" title="Add to Cart">
                <i className="fas fa-shopping-basket" /><span>add</span>
              </button>
              <div className="product-action">
                <button className="action-minus" title="Quantity Minus">
                  <i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus">
                  <i className="icofont-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="feature-card">
            <div className="feature-media">
              <div className="feature-label">
                <label className="label-text feat">feature</label>
              </div>
              <button className="feature-wish wish">
                <i className="fas fa-heart" /></button><Link className="feature-image" to="product-video "><img src="images/product/12.jpg" alt="product" /></Link>
              <div className="feature-widget">
                <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
              </div>
            </div>
            <div className="feature-content">
              <h6 className="feature-name">
                <Link to="product-video ">fresh organic green chilis</Link>
              </h6>
              <div className="feature-rating">
                <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3 Reviews)</Link>
              </div>
              <h6 className="feature-price">
                <del>$34</del><span>$28<small>/piece</small></span>
              </h6>
              <p className="feature-desc">
                Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                amet olor ut eveniet commodi...
              </p>
              <button className="product-add" title="Add to Cart">
                <i className="fas fa-shopping-basket" /><span>add</span>
              </button>
              <div className="product-action">
                <button className="action-minus" title="Quantity Minus">
                  <i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus">
                  <i className="icofont-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="feature-card">
            <div className="feature-media">
              <div className="feature-label">
                <label className="label-text feat">feature</label>
              </div>
              <button className="feature-wish wish">
                <i className="fas fa-heart" /></button><Link className="feature-image" to="product-video "><img src="images/product/13.jpg" alt="product" /></Link>
              <div className="feature-widget">
                <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
              </div>
            </div>
            <div className="feature-content">
              <h6 className="feature-name">
                <Link to="product-video ">fresh organic green chilis</Link>
              </h6>
              <div className="feature-rating">
                <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3 Reviews)</Link>
              </div>
              <h6 className="feature-price">
                <del>$34</del><span>$28<small>/piece</small></span>
              </h6>
              <p className="feature-desc">
                Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                amet olor ut eveniet commodi...
              </p>
              <button className="product-add" title="Add to Cart">
                <i className="fas fa-shopping-basket" /><span>add</span>
              </button>
              <div className="product-action">
                <button className="action-minus" title="Quantity Minus">
                  <i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus">
                  <i className="icofont-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="feature-card">
            <div className="feature-media">
              <div className="feature-label">
                <label className="label-text feat">feature</label>
              </div>
              <button className="feature-wish wish">
                <i className="fas fa-heart" /></button><Link className="feature-image" to="product-video "><img src="images/product/14.jpg" alt="product" /></Link>
              <div className="feature-widget">
                <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
              </div>
            </div>
            <div className="feature-content">
              <h6 className="feature-name">
                <Link to="product-video ">fresh organic green chilis</Link>
              </h6>
              <div className="feature-rating">
                <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3 Reviews)</Link>
              </div>
              <h6 className="feature-price">
                <del>$34</del><span>$28<small>/piece</small></span>
              </h6>
              <p className="feature-desc">
                Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                amet olor ut eveniet commodi...
              </p>
              <button className="product-add" title="Add to Cart">
                <i className="fas fa-shopping-basket" /><span>add</span>
              </button>
              <div className="product-action">
                <button className="action-minus" title="Quantity Minus">
                  <i className="icofont-minus" /></button><input className="action-input" title="Quantity Number" type="text" name="quantity" defaultValue={1} /><button className="action-plus" title="Quantity Plus">
                  <i className="icofont-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="section-btn-25">
            <Link to="shop-4column " className="btn btn-outline"><i className="fas fa-eye" /><span>show more</span></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default FeaturedItem