'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IPhim } from '@/types'
import Genre from './genre'

interface ItemsProps {
  items: IPhim[]
  title: string
  typeList: string
}

const PhimLe = ({ items, title, typeList }: ItemsProps) => {
  // if (error) {
  //   alert('Loaded data failed: ' + error)
  // }

  return (
    <div className="trending__product">
      <div className="row">
        <div className="col-lg-8 col-md-9 col-sm-8 col-7">
          <div className="section-title">
            <h4>{title}</h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-4 col-5">
          <div className="btn__all">
            <Link href={`/list/${typeList}?page=1`} className="primary-btn">
              Xem thêm
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        {items?.slice(0, 8).map((item, index: number) => (
          <div className="col-lg-3 col-md-6 col-6" key={index}>
            <div className="product__item">
              <div className="product__item__pic set-bg">
                <Image
                  className="product__item__img"
                  src={process.env.NEXT_PUBLIC_URL_IMAGE + item.thumb_url}
                  style={{ width: '100%', height: 'auto' }}
                  loading="lazy"
                  quality="100"
                  width={256}
                  height={144}
                  alt="thumbnail"
                  placeholder="blur"
                  blurDataURL={process.env.NEXT_PUBLIC_URL_IMAGE + item.thumb_url}
                ></Image>
                <div className="ep">
                  {item.lang} - {item.quality}
                </div>
                <div className="comment">
                  <i className="fa fa-comments" /> {item.year}
                </div>
                <div className="view">
                  <i className="fa fa-eye" /> {item.time}
                </div>
              </div>
              <div className="product__item__text">
                <Genre genre={item?.category} />
                <h5>
                  <Link href={`/movie/${item.slug}`}>{item.name}</Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhimLe
