'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import useFetcher from '@/hooks/useFetcher'
import ListSkeleton from '@/components/skeleton/skeleton'
import Pagination from '../pagination'
import { IPhim } from '@/types'
import { convertPlusToSpace } from '@/utils/convertPlusToSpace'
import { useRouter, useSearchParams } from 'next/navigation'

interface ISearchProps {
  params: string
}

const Search = ({ params }: ISearchProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pageId = searchParams.get('page')
  const [currentPage, setCurrentPage] = useState<number>(pageId ? Number(pageId) : 1)

  // Fetching data & query filter
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_TIM_KIEM}?keyword=${convertPlusToSpace(params)}&page=${currentPage}`,
    useFetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  // Opt
  const itemsPerPage = data?.data?.params?.pagination?.totalItemsPerPage
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
    setCurrentPage(pageNumber)
  }

  if (error) {
    alert('Server error: ' + error)
  }

  if (isLoading) {
    return <ListSkeleton />
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="section-title">
            <h4>Tìm kiếm phim: {convertPlusToSpace(params)}</h4>
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
                  src={process.env.NEXT_PUBLIC_URL_IMAGE + item.thumb_url}
                  style={{ width: '100%', height: 'auto' }}
                  loading="lazy"
                  quality="85"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="poster"
                  placeholder="blur"
                  blurDataURL={process.env.NEXT_PUBLIC_URL_IMAGE + item.thumb_url}
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
                  <Link href={`/movie/${item.slug}`}>{item.name}</Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
        <div className="col-lg-12">
          <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} cP={currentPage} onPageChange={onPageChange} />
        </div>
      </div>
    </>
  )
}

export default Search
