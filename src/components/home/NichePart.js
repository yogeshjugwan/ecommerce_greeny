import React from 'react'
import { Link } from 'react-router-dom'

const NichePart = () => {
  return (
    <>
      <section className="section niche-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading"><h2>Browse by Top Niche</h2></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-tabs">
                <li>
                  <Link to="#top-order" className="tab-link active" data-bs-toggle="tab"><i className="icofont-price" /><span>top order</span></Link>
                </li>
                <li>
                  <Link to="#top-rate" className="tab-link" data-bs-toggle="tab"><i className="icofont-star" /><span>top rating</span></Link>
                </li>
                <li>
                  <Link to="#top-disc" className="tab-link" data-bs-toggle="tab"><i className="icofont-sale-discount" /><span>top discount</span></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-pane fade show active" id="top-order">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              <div className="col">
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text order">314</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/01.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text order">314</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/02.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text order">314</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/03.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text order">314</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/04.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text order">314</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/05.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text order">314</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/06.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card product-disable">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text order">314</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/07.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text order">314</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/08.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text order">314</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/09.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text order">314</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/10.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
          </div>
          <div className="tab-pane fade" id="top-rate">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              <div className="col">
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text rate">4.8</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/11.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text rate">4.8</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/12.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text rate">4.8</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/13.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text rate">4.8</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/14.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text rate">4.8</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/15.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text rate">4.8</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/16.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card product-disable">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text rate">4.8</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/17.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text rate">4.8</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/18.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text rate">4.8</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/19.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text rate">4.8</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/20.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
          </div>
          <div className="tab-pane fade" id="top-disc">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              <div className="col">
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text off">-10%</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/06.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text off">-10%</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/07.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text off">-10%</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/08.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text off">-10%</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/09.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text off">-10%</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/10.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text off">-10%</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/11.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text off">-10%</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/12.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random">
                      </Link><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video">
                      </Link><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text off">-10%</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/13.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text off">-10%</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/14.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text off">-10%</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart" /></button><Link className="product-image" to="product-video "><img src="images/product/15.jpg" alt="product" /></Link>
                    <div className="product-widget">
                      <Link title="Product Compare" to="compare " className="fas fa-random" /><Link title="Product Video" to="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video" /><Link title="Product View" to="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view" />
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="active icofont-star" /><i className="icofont-star" /><Link to="product-video ">(3)</Link>
                    </div>
                    <h6 className="product-name">
                      <Link to="product-video ">fresh green chilis</Link>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del><span>$28<small>/piece</small></span>
                    </h6>
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

export default NichePart