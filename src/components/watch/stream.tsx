'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Episode from './episode'
import { IEpisode, IPhim } from '@/types'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Video from 'next-video'
interface IStreamProps {
  stream: IEpisode[]
  poster: IPhim
}

const Stream = ({ stream, poster }: IStreamProps) => {
  const searchParams = useSearchParams()
  const episode = searchParams.get('tap')
  const [currentEpisode, setCurrentEpisode] = useState<string>('')

  const playStream = () => {
    setCurrentEpisode(stream[0]?.server_data[Number(episode) - 1]?.link_m3u8)
  }

  useEffect(() => {
    playStream()
  }, [episode])

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
                <Video
                  onLoadStart={() => playStream()}
                  onLoadedData={() => playStream()}
                  className="anime__video__player__inside"
                  src={currentEpisode}
                >
                  <Image slot="poster" src={poster?.poster_url} width={0} height={0} sizes="100vw" alt={poster?.name} />
                </Video>
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
