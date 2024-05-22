'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IPhim } from '@/types'

interface ItemsProps {
  items: IPhim[]
}

const PhimMoi = ({ items }: ItemsProps) => {
  return (
    <div className="product__sidebar">
      <div className="product__sidebar__view">
        <div className="section-title">
          <h5>phim khác</h5>
        </div>
        <div className="filter__gallery">
          {items?.slice(0, 9).map((item, index: number) => (
            <div className="product__sidebar__view__item set-bg mix day years" key={index}>
              <Image
                className="product__sidebar__img"
                src={process.env.NEXT_PUBLIC_URL_IMAGE + item.thumb_url}
                loading="lazy"
                quality="75"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="thumbnail"
              ></Image>
              <div className="ep">{item?.year}</div>
              {/* <div className="view">
                <i className="fa fa-eye" /> {item?.type}
              </div> */}
              <h5>
                <Link href={`/movie/${item.slug}`}>{item.name}</Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhimMoi
