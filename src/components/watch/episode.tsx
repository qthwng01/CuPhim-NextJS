'use client'

import React, { useState, useEffect } from 'react'
import { IServerData } from '@/types'

interface IEpisodeProps {
  episodes: IServerData[]
}

const Episode = ({ episodes }: IEpisodeProps) => {
  const [currentEpisode, setCurrentEpisode] = useState<string | null>('')

  // Initialize the state with the first episode link
  const playEpisode = (episode: string) => {
    setCurrentEpisode(episode)
    localStorage.setItem('episode', episode)
    window.location.reload()
  }

  useEffect(() => {
    const savedEpisode = window.localStorage.getItem('episode')
    setCurrentEpisode(savedEpisode ? savedEpisode : episodes[0]?.link_m3u8)
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
            onClick={() => playEpisode(item?.link_m3u8)}
            className={`${currentEpisode === item?.link_m3u8 ? 'active' : 'unactive'}`}
          >
            {item?.name}
          </span>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Episode
