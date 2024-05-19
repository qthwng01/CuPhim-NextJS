'use client'

import React from 'react'
import FilterList from './filterList'
import ListItems from './listItems'

interface IListProps {
  params: string
}

const List = ({ params }: IListProps) => {
  return (
    <div className="main__list">
      <div className="container">
        <FilterList params={params} />
        <ListItems params={params} />
      </div>
    </div>
  )
}

export default List
