import { Suspense } from 'react'
import Detail from '@/components/movie/detail'
import Loading from '@/app/loading'
import { getMovieDetail } from '@/utils/fetchData'

async function MovieDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const data = await getMovieDetail(slug)

  return (
    <Suspense fallback={<Loading />}>
      <Detail data={data?.movie} />
    </Suspense>
  )
}

export default MovieDetail
