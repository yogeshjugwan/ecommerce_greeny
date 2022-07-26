import React from 'react'
import { Link } from 'react-router-dom'


const NewItemPart = () => {
  return (
    <>
      <section className="section newitem-part">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-heading"><h2>collected new items</h2></div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul className="new-slider slider-arrow">
                <li>
                  <div className="product-card">
                    <div className="product-media">
                      <div className="product-label">
                        <label className="label-text new">new</label>
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
                </li>
                <li>
                  <div className="product-card">
                    <div className="product-media">
                      <div className="product-label">
                        <label className="label-text new">new</label>
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
                </li>
                <li>
                  <div className="product-card">
                    <div className="product-media">
                      <div className="product-label">
                        <label className="label-text new">new</label>
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
                </li>
                <li>
                  <div className="product-card">
                    <div className="product-media">
                      <div className="product-label">
                        <label className="label-text new">new</label>
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
                </li>
                <li>
                  <div className="product-card">
                    <div className="product-media">
                      <div className="product-label">
                        <label className="label-text new">new</label>
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
                </li>
                <li>
                  <div className="product-card">
                    <div className="product-media">
                      <div className="product-label">
                        <label className="label-text new">new</label>
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
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
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

export default NewItemPart