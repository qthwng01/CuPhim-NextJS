'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Episode from './episode'
import { IEpisode, IPhim } from '@/types'

import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react'
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr'

import '@vidstack/react/player/styles/base.css'
import '@vidstack/react/player/styles/plyr/theme.css'

interface IStreamProps {
  stream: IEpisode[]
  poster: IPhim
}

const Stream = ({ stream, poster }: IStreamProps) => {
  const [currentEpisode, setCurrentEpisode] = useState<string | null>(stream[0]?.server_data[0]?.link_m3u8)

  const getDefaultEpisode = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedEpisode = localStorage.getItem('episode')
      setCurrentEpisode(savedEpisode)
    }
    return currentEpisode
  }

  useEffect(() => {
    getDefaultEpisode()
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
                >
                  <MediaProvider>
                    <Poster src={poster?.thumb_url} alt={poster?.name} />
                  </MediaProvider>
                  <PlyrLayout icons={plyrLayoutIcons} />
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
