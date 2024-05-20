'use client'

import React from 'react'
import Link from 'next/link'
import { IoIosArrowUp } from 'react-icons/io'

const Footer = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Cuộn mượt
    })
  }

  return (
    <footer className="footer">
      <div className="page-up">
        <div id="scrollToTopButton">
          <span onClick={backToTop} className="arrow_carrot-up">
            <IoIosArrowUp />
          </span>
        </div>
      </div>
      <div className="container">
        <div className="row footer__in">
          <div className="col-lg-3">
            <div className="footer__logo">
              <Link href="/">
                <img src="/logo.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer__nav">
              <ul>
                <li className="active">
                  <Link href="/">Giới thiệu</Link>
                </li>
                <li className="active">
                  <Link href="/">Điều khoản</Link>
                </li>
                <li>
                  <Link href="/">Liên hệ</Link>
                </li>
                <li>
                  <Link href="/">Partner</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <p className='credit__ft' style={{textAlign: 'center'}}>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */} Dev by{' '}
              <Link href="https://github.com/qthwng01" target="_blank">
                qthwngg
              </Link>{' '}
              & template is made with <i className="fa fa-heart" aria-hidden="true" /> by{' '}
              <Link href="https://colorlib.com" target="_blank">
                Colorlib.
              </Link>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
