export function getYears() {
  const years = []

  for (let i = 0; i <= 20; i++) {
    const year = new Date().getFullYear() - i
    years.push({
      id: (i + 1).toString(),
      name: year,
    })
  }

  return years
}

export const menuData = [
  {
    id: 1,
    href: '/list/phim-le?page=1',
    name: 'Phim lẻ'
  },
  {
    id: 2,
    href: '/list/phim-bo?page=1',
    name: 'Phim bộ'
  },
  {
    id: 3,
    href: '/list/hoat-hinh?page=1',
    name: 'Hoạt hình'
  },
  {
    id: 4,
    href: '/list/tv-shows?page=1',
    name: 'TV Show'
  },
  {
    id: 5,
    href: '',
    name: 'Phim yêu thích'
  }
]