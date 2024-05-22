'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IPhim } from '@/types'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Parallax, Pagination, Navigation, A11y, Controller } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '@/styles/custom-swiper.css'

interface ICarouselProps {
  carousels: IPhim[]
}

const Carousel = ({ carousels }: ICarouselProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
      speed={600}
      loop={true}
      //parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation, A11y, Controller]}
      className="mySwiper"
    >
      {carousels?.slice(0, 6).map((item, index: number) => (
        <SwiperSlide key={index}>
          <div className="swiper__slide_img">
            <Image
              priority={true}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              src={process.env.NEXT_PUBLIC_URL_IMAGE + item.poster_url}
              alt="hero"
            />
            <div className="text">
              <h2 className="title">{item?.name}</h2>
              <p>{item?.origin_name} - (Phim sắp chiếu)</p>
              <Link href={`/movie/${item?.slug}`} className="btn__watch">
                Chi tiết
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
