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
      let newPathname
      const currentPath = window.location.pathname
      const searchIndex = currentPath.indexOf('/search')
      if (searchIndex !== -1) {
        // Nếu đã có "/search" trong pathname, giữ lại "/search" và thay thế phần phía sau
        newPathname = `${currentPath.substring(0, searchIndex + 7)}/${convertToPlusSeparated(query)}`
      } else {
        // Nếu chưa có "/search" trong pathname, thêm "/search/" và thêm kết quả phia sau
        newPathname = `${currentPath}search/${convertToPlusSeparated(query)}`
      }
      setQuery('')
      return router.push(newPathname)
    } else {
      alert('Hãy nhập vào ô tìm kiếm.')
    }
  }

  return (
    <form id="searchForms">
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
    </form>
  )
}

export default SearchRight
