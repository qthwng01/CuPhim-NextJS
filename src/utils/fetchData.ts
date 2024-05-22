import useFetcher from '@/hooks/useFetcher'

export async function fetchPhimBo() {
  const res = await useFetcher(`${process.env.NEXT_PUBLIC_PHIM_BO}?limit=8`)
  return res?.data
}

export async function fetchPhimLe() {
  const res = await useFetcher(`${process.env.NEXT_PUBLIC_PHIM_LE}?limit=8`)
  return res?.data
}

export async function fetchPhimHoatHinh() {
  const res = await useFetcher(`${process.env.NEXT_PUBLIC_PHIM_HOAT_HINH}?limit=8`)
  return res?.data
}

export async function fetchTVShow() {
  const res = await useFetcher(`${process.env.NEXT_PUBLIC_PHIM_TV_SHOWS}?limit=8`)
  return res?.data
}

export async function fetchPhimMoi() {
  const res = await useFetcher(`${process.env.NEXT_PUBLIC_PHIM_MOI_CAP_NHAT}`)
  return res?.items
}

export async function fetchCarousel() {
  const res = await useFetcher(`${process.env.NEXT_PUBLIC_PHIM_SAP_CHIEU}`)
  return res?.data?.items
}

export async function getStreamMovie(slug: string) {
  const res = await useFetcher(`${process.env.NEXT_PUBLIC_TT_PHIM}/${slug}`)
  return res
}


export async function getMovieDetail(slug: string) {
  const res = await useFetcher(`${process.env.NEXT_PUBLIC_TT_PHIM}/${slug}`)
  return res
}

export async function filterMovie(params: string, page: number, country: string, category: string, year: string) {
  const res = await useFetcher(
    `${process.env.NEXT_PUBLIC_DANH_SACH}/${params}?page=${page}&country=${country}&category=${category}&year=${year}`
  )
  return res
}
