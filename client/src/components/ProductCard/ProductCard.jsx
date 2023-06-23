import React from 'react'
import './ProductCard.scss'

const ProductCard = ({product: {id, title, image, detail, link}}) => {
  return (
    <div className='product__card'>
        <div className="top">
          <img src={image} alt="product_img" className='product_image'/>
          <h1>{title}</h1>
          <p>{detail}</p>
        </div>
        <div className='bottom'><a href={link} target='_blank'>Join the community</a></div>
    </div>
  )
}

export default ProductCard