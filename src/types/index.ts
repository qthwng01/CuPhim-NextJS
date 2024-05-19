export type IQuality = 'FHD' | 'HD'

export type IType = 'single'

export interface IModified {
  time: Date
}

export interface ICategory {
  id: string
  name: string
  slug: string
}

export type IEpisodeCurrent = 'Full'

export type ILang = 'Vietsub'

export interface IEpisode extends IServerData {
  server_name: string
  server_data: IServerData[]
}

export interface IServerData {
  name: string
  slug: string
  filename: string
  link_embed: string
  link_m3u8: string
}

export interface BreadCrumb {
  name: string
  slug?: string
  isCurrent: boolean
  position: number
}

export interface IParamsSearch {
  type_slug: string
  filterCategory: string[]
  filterCountry: string[]
  filterYear: string
  filterType: string
  sortField: string
  sortType: string
  pagination: IPagination
}

export interface IPagination {
  totalItems: number
  totalItemsPerPage: number
  currentPage: number
  totalPages: number
}

export interface IPhim {
  modified: IModified
  _id: string
  name: string
  slug: string
  origin_name: string
  type: IType
  poster_url: string
  thumb_url: string
  sub_docquyen: boolean
  chieurap: boolean
  time: string
  episode_current: IEpisodeCurrent
  quality: IQuality
  lang: ILang
  year: number
  category: ICategory[]
  country: ICategory[]
}

export interface IMovie {
  _id: string
  name: string
  slug: string
  origin_name: string
  content: string
  type: string
  status: string
  poster_url: string
  thumb_url: string
  is_copyright: boolean
  sub_docquyen: boolean
  chieurap: boolean
  trailer_url: string
  time: string
  episode_current: string
  episode_total: string
  quality: string
  lang: string
  notify: string
  showtimes: string
  year: number
  view: number
  actor: string[]
  director: string[]
  category: ICategory[]
  country: ICategory[]
}