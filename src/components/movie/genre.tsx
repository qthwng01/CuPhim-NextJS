import React from 'react'
import { ICategory } from '@/types'

interface IGenreProps {
  genre: ICategory[]
}

const Genre = ({ genre }: IGenreProps) => {
  return (
    <li>
      <span>Thể loại:</span>
      {genre?.map((item, index: number) => (
        <React.Fragment key={index}>
          {item?.name}
          {index !== item?.id.length - 1 && ', '}
        </React.Fragment>
      ))}
    </li>
  )
}

export default Genre
