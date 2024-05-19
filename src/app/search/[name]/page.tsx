import Search from '@/components/search'

function SearchPage({ params }: { params: { name: string } }) {
  return (
    <div className="main__list">
      <div className="container">
        <Search params={params.name} />
      </div>
    </div>
  )
}

export default SearchPage
