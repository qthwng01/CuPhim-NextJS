import React from 'react'
import { ICategory } from '@/types'

interface IGenreProps {
  genre: ICategory[]
}

const Genre = ({ genre }: IGenreProps) => {
  return (
    <li>
      <span>Thể loại:</span>
      {genre?.map((item) => item?.name).join(', ')}
    </li>
  )
}
  
export default Genre
