'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Episode from './episode'
import { IEpisode, IPhim } from '@/types'

import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react'
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default'

import '@vidstack/react/player/styles/default/theme.css'
import '@vidstack/react/player/styles/default/layouts/video.css'

interface IStreamProps {
  stream: IEpisode[]
  poster: IPhim
}

const Stream = ({ stream, poster }: IStreamProps) => {
  const [currentEpisode, setCurrentEpisode] = useState<string | null>('')

  const playStream = () => {
    const savedEpisode = window.localStorage.getItem('episode')
    if (savedEpisode)
    setCurrentEpisode(savedEpisode)
    setCurrentEpisode(stream[0]?.server_data[0]?.link_m3u8)
  }

  useEffect(() => {
    playStream()
  }, [currentEpisode])

  return (
    // <!-- Breadcrumb Begin -->
    <>
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link href="/">Trang chủ {'>'}</Link>
                <Link href="#">Watch</Link>
                {'> '}
                <span>{poster?.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="anime-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="anime__video__player">
                <MediaPlayer
                  className="anime__video__player__inside"
                  autoPlay={false}
                  onLoad={() => setCurrentEpisode}
                  load="visible"
                  title={poster?.name}
                  src={currentEpisode?.toString()}
                  playsInline
                >
                  <MediaProvider>
                    {/* <Poster src={poster?.thumb_url} alt={poster?.name} /> */}
                    <DefaultVideoLayout icons={defaultLayoutIcons} />
                  </MediaProvider>
                </MediaPlayer>
              </div>
              <Episode episodes={stream[0]?.server_data || []} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Stream
