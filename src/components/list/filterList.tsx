import React, { useState } from 'react'
import useSWR from 'swr'
import { useSearchParams, useRouter } from 'next/navigation'
import useFetcher from '@/hooks/useFetcher'
import { ICategory } from '@/types'
import { getYears } from '@/constants'

interface IListItemProps {
  params: string
}

const filterList = ({ params }: IListItemProps) => {
  const year = getYears()
  const router = useRouter()
  const searchParams = useSearchParams()
  const countryValue = searchParams.get('country')
  const categoryValue = searchParams.get('genre')
  const yearValue = searchParams.get('year')

  const [filterObj, setFilterObj] = useState({
    type: params ? params : '',
    country: countryValue ? countryValue : '',
    genre: categoryValue ? categoryValue : '',
    year: yearValue ? yearValue : '',
  })

  // Fetching data
  const { data: dataCountry } = useSWR(`${process.env.NEXT_PUBLIC_QUOC_GIA}`, useFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  const { data: dataGenre } = useSWR(`${process.env.NEXT_PUBLIC_THE_LOAI}`, useFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  const filterFilm = () => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set('country', filterObj.country)
    searchParams.set('genre', filterObj.genre)
    searchParams.set('year', filterObj.year)
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    return router.push(newPathname)
  }

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="product__page__content">
          <div className="product__page__title">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <div className="section-title">
                  <h4>Danh sách</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col-lg-2 col-md-6 col-sm-12 col-6">
              <p>Loại phim</p>
              <select
                onChange={(e) => setFilterObj({ ...filterObj, type: e.target.value })}
                title="typeFiler"
                className="list__filter"
                id="typeFiler"
                value={filterObj.type}
                disabled={filterObj.type ? true: false}
              >
                <option value="phim-bo" key={1}>
                  Phim Bộ
                </option>
                <option value="phim-le" key={2}>
                  Phim Lẻ
                </option>
                <option value="hoat-hinh" key={3}>
                  Phim Hoạt Hình
                </option>
                <option value="tv-shows" key={4}>
                  TV Show
                </option>
              </select>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 col-6">
              <p>Quốc gia</p>
              <select
                onChange={(e) => setFilterObj({ ...filterObj, country: e.target.value })}
                title="cateArea"
                className="list__filter"
                id="area"
                value={filterObj.country}
              >
                <option value="">Chọn quốc gia</option>
                {dataCountry?.map((item: ICategory, index: number) => (
                  <option value={item?.slug} key={index}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 col-6">
              <p>Thể loại</p>
              <select
                onChange={(e) => setFilterObj({ ...filterObj, genre: e.target.value })}
                title="catefilm"
                className="list__filter"
                id="catefilm"
                value={filterObj.genre}
              >
                <option value="">Chọn thể loại</option>
                {dataGenre?.map((item: ICategory, index: number) => (
                  <option value={item?.slug} key={index}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 col-6">
              <p>Năm</p>
              <select
                onChange={(e) => setFilterObj({ ...filterObj, year: e.target.value })}
                title="cateYear"
                className="list__filter"
                id="cateYear"
                value={filterObj.year}
              >
                <option value="">Chọn năm</option>
                {year?.map((item: any, index: number) => (
                  <option value={item?.name} key={index}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <p>Hành động</p>
              <button type="button" onClick={filterFilm} className="btn btn-danger">
                Lọc phim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default filterList
