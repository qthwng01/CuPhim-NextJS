
import TheSingle from '@/components/home/single'
import TheSeries from '@/components/home/series'
import TheCartoon from '@/components/home/cartoon'
import TVShow from '@/components/home/tv-show'
import TheOther from '@/components/home/other'
import Carousel from '@/components/home/carousel'

import { fetchPhimBo, fetchPhimLe, fetchTVShow, fetchPhimHoatHinh, fetchPhimMoi, fetchCarousel } from '@/utils/fetchData'

export default async function Home() {
  const dataPhimBo = await fetchPhimBo()
  const dataPhimLe = await fetchPhimLe()
  const dataPhimHoatHinh = await fetchPhimHoatHinh()
  const dataTVShow = await fetchTVShow()
  const dataPhimMoi = await fetchPhimMoi()
  const carousels = await fetchCarousel()

  return (
    <main className="main__class" id="main">
      {/* Hero Section Begin */}
      <section className="hero">
        <div className="container">
          <Carousel carousels={carousels || []} />
        </div>
      </section>
      {/* Hero Section End */}
      {/* Product Section Begin */}
      <section className="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <TheSingle items={dataPhimLe?.items || []} title={dataPhimLe?.titlePage} typeList={dataPhimLe?.type_list} />
              <TheSeries items={dataPhimBo?.items || []} title={dataPhimBo?.titlePage} typeList={dataPhimBo?.type_list} />
              <TheCartoon items={dataPhimHoatHinh?.items || []} title={dataPhimHoatHinh?.titlePage} typeList={dataPhimHoatHinh?.type_list} />
              <TVShow items={dataTVShow?.items || []} title={dataTVShow?.titlePage} typeList={dataTVShow?.type_list} />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
              <TheOther items={dataPhimMoi || []} />
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}
      {/* Search model Begin */}
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">
            <i className="icon_close" />
          </div>
          <form className="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....." />
          </form>
        </div>
      </div>
      {/* Search model end */}
    </main>
  )
}
