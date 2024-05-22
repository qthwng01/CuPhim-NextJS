import React from 'react'
import { ICategory } from '@/types'

interface IGenreProps {
  genre: ICategory[]
}

const Genres = ({ genre }: IGenreProps) => {
  return (
    <>
      {genre?.slice(0, 2).map((item, index: number) => (
        <li key={index}>{item?.name}</li>
      ))}
    </>
  )
}

export default Genres
