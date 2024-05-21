import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IMovie } from '@/types'

import { IoMdArrowDropright } from 'react-icons/io'
import { CiHeart } from 'react-icons/ci'

import { MediaPlayer, MediaProvider } from '@vidstack/react'

import '@vidstack/react/player/styles/default/theme.css'
import '@vidstack/react/player/styles/default/layouts/video.css'

import Genre from './genre'
import Ekip from './ekip'

interface IMovieProps {
  data: IMovie
}

type MovieType = 'series' | 'single' | 'Hoathinh' | 'tvshows'

const Detail = ({ data }: IMovieProps) => {
  const typeToLabel: { [key in MovieType]: string } = {
    series: 'Phim bộ',
    single: 'Phim lẻ',
    Hoathinh: 'Hoạt hình',
    tvshows: 'TV Show',
  }

  return (
    <>
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link href="/">Trang chủ {'>'}</Link>
                <Link href="#">Movie</Link>
                {'>'}
                <span>{data?.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Anime Section Begin */}
      <section className="anime-details spad">
        <div className="container">
          <div className="anime__details__content">
            <div className="row">
              <div className="col-lg-3">
                <div className="anime__details__pic set-bg">
                  <Image
                    className="anime__details__img"
                    src={data?.thumb_url}
                    priority={true}
                    loading="eager"
                    quality="100"
                    width={230}
                    height={325}
                    sizes="(max-width:480px) 50vw, (max-width:640px) 100vw"
                    alt="thumbnail"
                  ></Image>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="anime__details__text">
                  <div className="anime__details__title">
                    <h3>{data?.name}</h3>
                    <span>{data?.origin_name}</span>
                  </div>
                  <p>{data?.content}</p>
                  <div className="anime__details__widget">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <ul style={{ textTransform: 'capitalize' }}>
                          <li>
                            <span>Chủ đề:</span> {typeToLabel[data?.type as MovieType]}
                          </li>
                          <li>
                            <span>Năm:</span> {data?.year}
                          </li>
                          <li>
                            <span>Tập:</span> {data?.episode_current ? data?.episode_current : 'Đang cập nhật'}
                          </li>
                          <li>
                            <span>Tổng:</span> {data?.episode_total} Tập
                          </li>
                          <Genre genre={data?.category} />
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <ul style={{ textTransform: 'capitalize' }}>
                          <li>
                            <span>Thời lượng:</span> {data?.time}
                          </li>
                          <li>
                            <span>Chất lượng:</span> {data?.quality}
                          </li>
                          <li>
                            <span>Ngôn ngữ:</span> {data?.lang}
                          </li>
                          <li>
                            <span>Quốc gia:</span> {data?.country[0].name}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="anime__details__btn">
                    <div className="follow-btn">
                      <CiHeart /> Yêu thích
                    </div>
                    {data?.episode_current === 'Trailer' ? (
                      <Link href={`#`} className="watch-btn">
                        <span>Trailer</span>
                        <i className="fa fa-angle-right">
                          <IoMdArrowDropright />
                        </i>
                      </Link>
                    ) : (
                      <Link href={`/watch/${data?.slug}?tap=1`} className="watch-btn">
                        <span>Xem phim</span>
                        <i className="fa fa-angle-right">
                          <IoMdArrowDropright />
                        </i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="anime__details__review">
                <div className="section-title">
                  <h5>Thông tin diễn viên</h5>
                </div>
                <Ekip actor={data?.actor} director={data?.director} />
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="anime__details__review">
                <div className="section-title">
                  <h5>Trailer phim</h5>
                </div>
                {data?.trailer_url ? (
                  <div className="player">
                    <MediaPlayer controls playsInline title={data?.name} src={data?.trailer_url}>
                      <MediaProvider />
                    </MediaPlayer>
                  </div>
                ) : (
                  <h5 style={{ color: 'white' }}>Không có trailer.</h5>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Anime Section End */}
    </>
  )
}

export default Detail
