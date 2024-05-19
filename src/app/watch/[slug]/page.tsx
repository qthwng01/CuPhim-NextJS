import StreamMovie from '@/components/watch/stream'
import { getStreamMovie } from '@/utils/fetchData'
import { Suspense } from 'react'
import Loading from '@/app/loading'

async function WatchMovie({ params }: { params: { slug: string } }) {
  const data = await getStreamMovie(params.slug)

  return (
    <Suspense fallback={<Loading />}>
      <StreamMovie stream={data?.episodes || []} poster={data?.movie || []} />
    </Suspense>
  )
}

export default WatchMovie
