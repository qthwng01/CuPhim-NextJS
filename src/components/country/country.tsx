'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IPhim } from '@/types'
import Skeleton from '../skeleton/skeleton'

import { useSearchParams, useRouter } from 'next/navigation'
import useSWR from 'swr'
import useFetcher from '@/hooks/useFetcher'
import Pagination from '../pagination'

interface IListItemProps {
  params: string
}

const Country = ({ params }: IListItemProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pageId = searchParams.get('page')
  const [currentPage, setCurrentPage] = useState(Number(pageId))

  // Fetching data
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_DANH_SACH_QUOC_GIA}/${params}?limit=12&page=${currentPage ? currentPage : 1}`,
    useFetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  const itemsPerPage = data?.data?.params?.pagination?.totalItemsPerPage // Số lượng item trên mỗi trang
  const totalItems = data?.data?.params?.pagination?.totalItems

  // handle change page and set page param
  const onPageChange = (pageNumber: any) => {
    const searchParams = new URLSearchParams(window.location.search)
    if (pageNumber) {
      searchParams.set('page', pageNumber.toString())
    } else {
      searchParams.delete('page')
    }
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathname)
    setCurrentPage(pageNumber) // Thực hiện các thao tác cần thiết khi chuyển trang
  }

  if (error) {
    alert('Server error: ' + error)
  }

  if (isLoading) {
    return (
      <div className="main__list">
        <div className="container">
          <div className="product__page__title">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <div className="section-title">
                  <h4>Danh sách phim {data?.data?.titlePage}</h4>
                </div>
              </div>
            </div>
          </div>
          <Skeleton />
        </div>
      </div>
    )
  }

  return (
    <div className="main__list">
      <div className="container">
        <div className="product__page__title">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="section-title">
                <h4>Danh sách phim {data?.data?.titlePage}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row list__items">
          {data?.data?.items?.map((item: IPhim, index: number) => (
            <div className="col-lg-3 col-md-6 col-6" key={index}>
              <div className="product__item">
                <div className="product__item__pic set-bg">
                  <Image
                    className="product__item__img"
                    src={process.env.NEXT_PUBLIC_URL_IMAGE + '/' + item.poster_url}
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                    quality="85"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="poster"
                  ></Image>
                  <div className="ep">
                    {item.lang} - {item.quality}
                  </div>
                  <div className="comment">
                    <i className="fa fa-comments" /> {item.year}
                  </div>
                  <div className="view">
                    <i className="fa fa-eye" /> {item.time}
                  </div>
                </div>
                <div className="product__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                  <h5>
                    <Link href={`/movie/${item.slug}.html`}>{item.name}</Link>
                  </h5>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-12">
            <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} cP={currentPage} onPageChange={onPageChange} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Country
