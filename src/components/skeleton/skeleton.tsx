import React from 'react'

const Skeleton = () => {
  return (
    <div className="container">
      <div className="row list__items is__loading">
        <div className="col-lg-3 col-md-6 col-6">
          <div className="product__item">
            <div className="product__item__pic set-bg">
              <div className="product__item__img"></div>
              <div className="ep"></div>
              <div className="comment">
                <i className="fa fa-comments" />
              </div>
              <div className="view">
                <i className="fa fa-eye" />
              </div>
            </div>
            <div className="product__item__text">
              <h5></h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-6">
          <div className="product__item">
            <div className="product__item__pic set-bg">
              <div className="product__item__img"></div>
              <div className="ep"></div>
              <div className="comment">
                <i className="fa fa-comments" />
              </div>
              <div className="view">
                <i className="fa fa-eye" />
              </div>
            </div>
            <div className="product__item__text">
              <h5></h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-6">
          <div className="product__item">
            <div className="product__item__pic set-bg">
              <div className="product__item__img"></div>
              <div className="ep"></div>
              <div className="comment">
                <i className="fa fa-comments" />
              </div>
              <div className="view">
                <i className="fa fa-eye" />
              </div>
            </div>
            <div className="product__item__text">
              <h5></h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-6">
          <div className="product__item">
            <div className="product__item__pic set-bg">
              <div className="product__item__img"></div>
              <div className="ep"></div>
              <div className="comment">
                <i className="fa fa-comments" />
              </div>
              <div className="view">
                <i className="fa fa-eye" />
              </div>
            </div>
            <div className="product__item__text">
              <h5></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
