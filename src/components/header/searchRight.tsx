'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { convertToPlusSeparated } from '@/utils/convertToPlusSeparated'
import { CiSearch } from 'react-icons/ci'

interface ISearchProps {
  isSearchMobile: boolean
}

const SearchRight = ({ isSearchMobile }: ISearchProps) => {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const searchP = () => {
    if (query !== '') {
      setQuery('')
      router.replace(`/search/${convertToPlusSeparated(query)}`)
    } else {
      alert('Hãy nhập vào ô tìm kiếm.')
    }
  }

  return (
    <div id="searchForms" >
      <div className={`${isSearchMobile ? 'active__mobile' : 'header__right'}`}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          title="search"
          className="search__input"
          type="text"
          placeholder="Tìm kiếm..."
        ></input>
        <div title="Search" className="search__btn">
          <span onClick={searchP} className="icon_search">
            <CiSearch />
          </span>
        </div>
      </div>
    </div>
  )
}

export default SearchRight
