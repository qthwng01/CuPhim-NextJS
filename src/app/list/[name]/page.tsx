import Lists from '@/components/list/list'

function ListPage({ params }: { params: { name: string } }) {
  return <Lists params={params.name} />
}

export default ListPage
