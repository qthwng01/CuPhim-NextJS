'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { IServerData } from '@/types'

interface IEpisodeProps {
  episodes: IServerData[]
}

const Episode = ({ episodes }: IEpisodeProps) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const episode = searchParams.get('tap')
  const [currentEpisode, setCurrentEpisode] = useState<any>(0)

  // Initialize the state with the first episode link
  const playEpisode = (episode: number) => {
    const newPathname = `${window.location.pathname}?tap=${episode}`
    return router.push(newPathname)
  }

  useEffect(() => {
    setCurrentEpisode(episodes[0]?.link_m3u8)
  }, [currentEpisode])

  return (
    <div className="anime__details__episodes">
      <div className="section-title">
        <h5>Danh sách tập</h5>
      </div>
      {episodes?.map((item, index: number) => (
        <React.Fragment key={index}>
          <span
            id={item.name}
            onClick={() => playEpisode(index + 1)}
            className={`${index + 1 === Number(episode) ? 'active' : 'unactive'}`}
          >
            {item?.name}
          </span>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Episode
