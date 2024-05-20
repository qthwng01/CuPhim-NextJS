'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IPhim } from '@/types'
import { useSearchParams, useRouter } from 'next/navigation'
import ListSkeleton from '@/components/skeleton/skeleton'

// import useSWR from 'swr'
// import useFetcher from '@/hooks/useFetcher'
import Pagination from '../pagination'

interface IListItemProps {
  params: string
}

const listItems = ({ params }: IListItemProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pageId = searchParams.get('page')
  const countryValue = searchParams.get('country')
  const categoryValue = searchParams.get('genre')
  const yearValue = searchParams.get('year')
  const [currentPage, setCurrentPage] = useState<number>(Number(pageId))
  const [data, setData] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Fetching data & query filter
  // const { data, error, isLoading } = useSWR(
  //   `${process.env.NEXT_PUBLIC_DANH_SACH}/${params}?page=${currentPage ? currentPage : 1}&country=${
  //     countryValue ? countryValue : ''
  //   }&category=${categoryValue ? categoryValue : ''}&year=${yearValue ? yearValue : ''}`,
  //   useFetcher,
  //   {
  //     revalidateIfStale: false,
  //     revalidateOnFocus: false,
  //     revalidateOnReconnect: false,
  //   }
  // )

  const handleFilter = async () => {
    setIsLoading(true)
    setError('')

    // body
    const page = currentPage ? currentPage : 1
    const country = countryValue ? countryValue : ''
    const category = categoryValue ? categoryValue : ''
    const year = yearValue ? yearValue : ''

    try {
      const response = await fetch('/api/filter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ params, page, country, category, year }),
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const responseData = await response.json()
      setData(responseData)
    } catch (err) {
      setError('Có lỗi xảy ra.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleFilter()
  }, [params, currentPage, countryValue, categoryValue, yearValue])

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
    alert('Có lỗi xảy ra. Vui lòng reload lại trang')
  }
 
  if (isLoading) {
    return <ListSkeleton />
  }

  return (
    <div className="row list__items">
      {data?.data?.items?.map((item: IPhim, index: number) => (
        <div className="col-lg-3 col-md-6 col-6" key={index}>
          <div className="product__item">
            <div className="product__item__pic set-bg">
              <Image
                className={`product__item__img`}
                src={process.env.NEXT_PUBLIC_URL_IMAGE + item.thumb_url}
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
                <Link href={`/movie/${item.slug}`}>{item.name}</Link>
              </h5>
            </div>
          </div>
        </div>
      ))}
      <div className="col-lg-12">
        <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} cP={Number(currentPage)} onPageChange={onPageChange} />
      </div>
    </div>
  )
}

export default listItems
