import React from 'react'
import { ICategory } from '@/types'

interface IGenreProps {
  genre: ICategory[]
}

const Genre = ({ genre }: IGenreProps) => {
  return (
    <ul>
      {genre?.map((item, index: number) => (
        <li key={index}>{item?.name}</li>
      ))}
    </ul>
  )
}

export default Genre
