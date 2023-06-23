import React from 'react'
import './PartnerCard.scss'

const PartnerCard = ({partner: {image}}) => {
  return (
    <div className='partner__card'>
      <img src={image} alt="Partner" />
    </div>
  )
}

export default PartnerCard