'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Episode from './episode'
import { IEpisode, IPhim } from '@/types'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

interface IStreamProps {
  stream: IEpisode[]
  poster: IPhim
}

const Stream = ({ stream, poster }: IStreamProps) => {
  const searchParams = useSearchParams()
  const episode = searchParams.get('tap')
  const [currentEpisode, setCurrentEpisode] = useState<string>('')

  const playStream = () => {
    setCurrentEpisode(stream[0]?.server_data[Number(episode) - 1]?.link_embed)
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
                <Suspense fallback={<p style={{color: 'white'}}>Loading...</p>}>
                  <iframe
                    src={currentEpisode.toString()}
                    // width={500}
                    // height={500}
                    className='anime__video__player__inside'
                    frameBorder="0"
                    loading='eager'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    name={poster?.name}
                    allowFullScreen
                    title={poster?.name}
                  ></iframe>
                </Suspense>
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
