import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Search from './Search'
import LazyLoad from 'react-lazy-load'
import Brand from './Brand'
import Download from './Download'
import MainContext from '../MainContext'
// Collection 

const Collection = () => {
    const {slugs} = useParams()
    const {setSelectedBrands, selectedBrands, brands} = useContext(MainContext)

    useEffect(() => {
        setSelectedBrands(slugs.split(','))
    }, [])

  return (
    <main className='content'>
      <header className='header'>
        <Search />
        {selectedBrands.length !==0  && <Download /> }
      </header>
      <section className='brands'>
        {selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)
            return (
                    <LazyLoad key={brand.slug} once={true} overflow={true} placeholder="Yükleniyor...">
                    <Brand brand={brand} />
                    </LazyLoad>
            )
        })}
      </section>
    </main>
  )
}

export default Collection
