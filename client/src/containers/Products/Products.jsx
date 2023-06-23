import React from 'react'
import { ProductCard } from '../../components'
import { data } from '../../constants'

import './Products.scss'

const Products = () => {
  return (
    <section className='app__section app__products'>
        <h1 className='section__title'>Products built by BlockchainNest</h1>
        <div className="products__listing">
        {data.products.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}
        </div>
    </section>
  )
}

export default Products